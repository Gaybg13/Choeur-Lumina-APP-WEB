(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function O_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Yh={exports:{}},al={},Jh={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ey;function rI(){if(Ey)return Fe;Ey=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),A=Symbol.iterator;function C(V){return V===null||typeof V!="object"?null:(V=A&&V[A]||V["@@iterator"],typeof V=="function"?V:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,Q={};function B(V,q,pe){this.props=V,this.context=q,this.refs=Q,this.updater=pe||N}B.prototype.isReactComponent={},B.prototype.setState=function(V,q){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,q,"setState")},B.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function ae(){}ae.prototype=B.prototype;function Z(V,q,pe){this.props=V,this.context=q,this.refs=Q,this.updater=pe||N}var X=Z.prototype=new ae;X.constructor=Z,K(X,B.prototype),X.isPureReactComponent=!0;var H=Array.isArray,me=Object.prototype.hasOwnProperty,de={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function S(V,q,pe){var we,Oe={},Ue=null,Be=null;if(q!=null)for(we in q.ref!==void 0&&(Be=q.ref),q.key!==void 0&&(Ue=""+q.key),q)me.call(q,we)&&!P.hasOwnProperty(we)&&(Oe[we]=q[we]);var He=arguments.length-2;if(He===1)Oe.children=pe;else if(1<He){for(var Ye=Array(He),It=0;It<He;It++)Ye[It]=arguments[It+2];Oe.children=Ye}if(V&&V.defaultProps)for(we in He=V.defaultProps,He)Oe[we]===void 0&&(Oe[we]=He[we]);return{$$typeof:n,type:V,key:Ue,ref:Be,props:Oe,_owner:de.current}}function k(V,q){return{$$typeof:n,type:V.type,key:q,ref:V.ref,props:V.props,_owner:V._owner}}function b(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function O(V){var q={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(pe){return q[pe]})}var R=/\/+/g;function I(V,q){return typeof V=="object"&&V!==null&&V.key!=null?O(""+V.key):q.toString(36)}function he(V,q,pe,we,Oe){var Ue=typeof V;(Ue==="undefined"||Ue==="boolean")&&(V=null);var Be=!1;if(V===null)Be=!0;else switch(Ue){case"string":case"number":Be=!0;break;case"object":switch(V.$$typeof){case n:case e:Be=!0}}if(Be)return Be=V,Oe=Oe(Be),V=we===""?"."+I(Be,0):we,H(Oe)?(pe="",V!=null&&(pe=V.replace(R,"$&/")+"/"),he(Oe,q,pe,"",function(It){return It})):Oe!=null&&(b(Oe)&&(Oe=k(Oe,pe+(!Oe.key||Be&&Be.key===Oe.key?"":(""+Oe.key).replace(R,"$&/")+"/")+V)),q.push(Oe)),1;if(Be=0,we=we===""?".":we+":",H(V))for(var He=0;He<V.length;He++){Ue=V[He];var Ye=we+I(Ue,He);Be+=he(Ue,q,pe,Ye,Oe)}else if(Ye=C(V),typeof Ye=="function")for(V=Ye.call(V),He=0;!(Ue=V.next()).done;)Ue=Ue.value,Ye=we+I(Ue,He++),Be+=he(Ue,q,pe,Ye,Oe);else if(Ue==="object")throw q=String(V),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Be}function $(V,q,pe){if(V==null)return V;var we=[],Oe=0;return he(V,we,"","",function(Ue){return q.call(pe,Ue,Oe++)}),we}function fe(V){if(V._status===-1){var q=V._result;q=q(),q.then(function(pe){(V._status===0||V._status===-1)&&(V._status=1,V._result=pe)},function(pe){(V._status===0||V._status===-1)&&(V._status=2,V._result=pe)}),V._status===-1&&(V._status=0,V._result=q)}if(V._status===1)return V._result.default;throw V._result}var ye={current:null},L={transition:null},te={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:L,ReactCurrentOwner:de};function Y(){throw Error("act(...) is not supported in production builds of React.")}return Fe.Children={map:$,forEach:function(V,q,pe){$(V,function(){q.apply(this,arguments)},pe)},count:function(V){var q=0;return $(V,function(){q++}),q},toArray:function(V){return $(V,function(q){return q})||[]},only:function(V){if(!b(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Fe.Component=B,Fe.Fragment=t,Fe.Profiler=o,Fe.PureComponent=Z,Fe.StrictMode=i,Fe.Suspense=p,Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,Fe.act=Y,Fe.cloneElement=function(V,q,pe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var we=K({},V.props),Oe=V.key,Ue=V.ref,Be=V._owner;if(q!=null){if(q.ref!==void 0&&(Ue=q.ref,Be=de.current),q.key!==void 0&&(Oe=""+q.key),V.type&&V.type.defaultProps)var He=V.type.defaultProps;for(Ye in q)me.call(q,Ye)&&!P.hasOwnProperty(Ye)&&(we[Ye]=q[Ye]===void 0&&He!==void 0?He[Ye]:q[Ye])}var Ye=arguments.length-2;if(Ye===1)we.children=pe;else if(1<Ye){He=Array(Ye);for(var It=0;It<Ye;It++)He[It]=arguments[It+2];we.children=He}return{$$typeof:n,type:V.type,key:Oe,ref:Ue,props:we,_owner:Be}},Fe.createContext=function(V){return V={$$typeof:c,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Fe.createElement=S,Fe.createFactory=function(V){var q=S.bind(null,V);return q.type=V,q},Fe.createRef=function(){return{current:null}},Fe.forwardRef=function(V){return{$$typeof:f,render:V}},Fe.isValidElement=b,Fe.lazy=function(V){return{$$typeof:E,_payload:{_status:-1,_result:V},_init:fe}},Fe.memo=function(V,q){return{$$typeof:v,type:V,compare:q===void 0?null:q}},Fe.startTransition=function(V){var q=L.transition;L.transition={};try{V()}finally{L.transition=q}},Fe.unstable_act=Y,Fe.useCallback=function(V,q){return ye.current.useCallback(V,q)},Fe.useContext=function(V){return ye.current.useContext(V)},Fe.useDebugValue=function(){},Fe.useDeferredValue=function(V){return ye.current.useDeferredValue(V)},Fe.useEffect=function(V,q){return ye.current.useEffect(V,q)},Fe.useId=function(){return ye.current.useId()},Fe.useImperativeHandle=function(V,q,pe){return ye.current.useImperativeHandle(V,q,pe)},Fe.useInsertionEffect=function(V,q){return ye.current.useInsertionEffect(V,q)},Fe.useLayoutEffect=function(V,q){return ye.current.useLayoutEffect(V,q)},Fe.useMemo=function(V,q){return ye.current.useMemo(V,q)},Fe.useReducer=function(V,q,pe){return ye.current.useReducer(V,q,pe)},Fe.useRef=function(V){return ye.current.useRef(V)},Fe.useState=function(V){return ye.current.useState(V)},Fe.useSyncExternalStore=function(V,q,pe){return ye.current.useSyncExternalStore(V,q,pe)},Fe.useTransition=function(){return ye.current.useTransition()},Fe.version="18.3.1",Fe}var Ty;function np(){return Ty||(Ty=1,Jh.exports=rI()),Jh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iy;function iI(){if(Iy)return al;Iy=1;var n=np(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,v){var E,A={},C=null,N=null;v!==void 0&&(C=""+v),p.key!==void 0&&(C=""+p.key),p.ref!==void 0&&(N=p.ref);for(E in p)i.call(p,E)&&!l.hasOwnProperty(E)&&(A[E]=p[E]);if(f&&f.defaultProps)for(E in p=f.defaultProps,p)A[E]===void 0&&(A[E]=p[E]);return{$$typeof:e,type:f,key:C,ref:N,props:A,_owner:o.current}}return al.Fragment=t,al.jsx=c,al.jsxs=c,al}var Sy;function sI(){return Sy||(Sy=1,Yh.exports=iI()),Yh.exports}var y=sI(),J=np();const oI=O_(J);var hc={},Zh={exports:{}},vn={},ef={exports:{}},tf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay;function aI(){return Ay||(Ay=1,(function(n){function e(L,te){var Y=L.length;L.push(te);e:for(;0<Y;){var V=Y-1>>>1,q=L[V];if(0<o(q,te))L[V]=te,L[Y]=q,Y=V;else break e}}function t(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var te=L[0],Y=L.pop();if(Y!==te){L[0]=Y;e:for(var V=0,q=L.length,pe=q>>>1;V<pe;){var we=2*(V+1)-1,Oe=L[we],Ue=we+1,Be=L[Ue];if(0>o(Oe,Y))Ue<q&&0>o(Be,Oe)?(L[V]=Be,L[Ue]=Y,V=Ue):(L[V]=Oe,L[we]=Y,V=we);else if(Ue<q&&0>o(Be,Y))L[V]=Be,L[Ue]=Y,V=Ue;else break e}}return te}function o(L,te){var Y=L.sortIndex-te.sortIndex;return Y!==0?Y:L.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var p=[],v=[],E=1,A=null,C=3,N=!1,K=!1,Q=!1,B=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(L){for(var te=t(v);te!==null;){if(te.callback===null)i(v);else if(te.startTime<=L)i(v),te.sortIndex=te.expirationTime,e(p,te);else break;te=t(v)}}function H(L){if(Q=!1,X(L),!K)if(t(p)!==null)K=!0,fe(me);else{var te=t(v);te!==null&&ye(H,te.startTime-L)}}function me(L,te){K=!1,Q&&(Q=!1,ae(S),S=-1),N=!0;var Y=C;try{for(X(te),A=t(p);A!==null&&(!(A.expirationTime>te)||L&&!O());){var V=A.callback;if(typeof V=="function"){A.callback=null,C=A.priorityLevel;var q=V(A.expirationTime<=te);te=n.unstable_now(),typeof q=="function"?A.callback=q:A===t(p)&&i(p),X(te)}else i(p);A=t(p)}if(A!==null)var pe=!0;else{var we=t(v);we!==null&&ye(H,we.startTime-te),pe=!1}return pe}finally{A=null,C=Y,N=!1}}var de=!1,P=null,S=-1,k=5,b=-1;function O(){return!(n.unstable_now()-b<k)}function R(){if(P!==null){var L=n.unstable_now();b=L;var te=!0;try{te=P(!0,L)}finally{te?I():(de=!1,P=null)}}else de=!1}var I;if(typeof Z=="function")I=function(){Z(R)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,$=he.port2;he.port1.onmessage=R,I=function(){$.postMessage(null)}}else I=function(){B(R,0)};function fe(L){P=L,de||(de=!0,I())}function ye(L,te){S=B(function(){L(n.unstable_now())},te)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_continueExecution=function(){K||N||(K=!0,fe(me))},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return C},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(L){switch(C){case 1:case 2:case 3:var te=3;break;default:te=C}var Y=C;C=te;try{return L()}finally{C=Y}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(L,te){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Y=C;C=L;try{return te()}finally{C=Y}},n.unstable_scheduleCallback=function(L,te,Y){var V=n.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?V+Y:V):Y=V,L){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=Y+q,L={id:E++,callback:te,priorityLevel:L,startTime:Y,expirationTime:q,sortIndex:-1},Y>V?(L.sortIndex=Y,e(v,L),t(p)===null&&L===t(v)&&(Q?(ae(S),S=-1):Q=!0,ye(H,Y-V))):(L.sortIndex=q,e(p,L),K||N||(K=!0,fe(me))),L},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(L){var te=C;return function(){var Y=C;C=te;try{return L.apply(this,arguments)}finally{C=Y}}}})(tf)),tf}var Cy;function lI(){return Cy||(Cy=1,ef.exports=aI()),ef.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ry;function uI(){if(Ry)return vn;Ry=1;var n=np(),e=lI();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},A={};function C(r){return p.call(A,r)?!0:p.call(E,r)?!1:v.test(r)?A[r]=!0:(E[r]=!0,!1)}function N(r,s,a,d){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function K(r,s,a,d){if(s===null||typeof s>"u"||N(r,s,a,d))return!0;if(d)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function Q(r,s,a,d,h,g,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=w}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){B[r]=new Q(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];B[s]=new Q(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){B[r]=new Q(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){B[r]=new Q(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){B[r]=new Q(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){B[r]=new Q(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){B[r]=new Q(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){B[r]=new Q(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){B[r]=new Q(r,5,!1,r.toLowerCase(),null,!1,!1)});var ae=/[\-:]([a-z])/g;function Z(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(ae,Z);B[s]=new Q(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(ae,Z);B[s]=new Q(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(ae,Z);B[s]=new Q(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){B[r]=new Q(r,1,!1,r.toLowerCase(),null,!1,!1)}),B.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){B[r]=new Q(r,1,!1,r.toLowerCase(),null,!0,!0)});function X(r,s,a,d){var h=B.hasOwnProperty(s)?B[s]:null;(h!==null?h.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(K(s,a,h,d)&&(a=null),d||h===null?C(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):h.mustUseProperty?r[h.propertyName]=a===null?h.type===3?!1:"":a:(s=h.attributeName,d=h.attributeNamespace,a===null?r.removeAttribute(s):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,d?r.setAttributeNS(d,s,a):r.setAttribute(s,a))))}var H=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,me=Symbol.for("react.element"),de=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),O=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),L=Symbol.iterator;function te(r){return r===null||typeof r!="object"?null:(r=L&&r[L]||r["@@iterator"],typeof r=="function"?r:null)}var Y=Object.assign,V;function q(r){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+r}var pe=!1;function we(r,s){if(!r||pe)return"";pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(W){var d=W}Reflect.construct(r,[],s)}else{try{s.call()}catch(W){d=W}r.call(s.prototype)}else{try{throw Error()}catch(W){d=W}r()}}catch(W){if(W&&d&&typeof W.stack=="string"){for(var h=W.stack.split(`
`),g=d.stack.split(`
`),w=h.length-1,x=g.length-1;1<=w&&0<=x&&h[w]!==g[x];)x--;for(;1<=w&&0<=x;w--,x--)if(h[w]!==g[x]){if(w!==1||x!==1)do if(w--,x--,0>x||h[w]!==g[x]){var D=`
`+h[w].replace(" at new "," at ");return r.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",r.displayName)),D}while(1<=w&&0<=x);break}}}finally{pe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?q(r):""}function Oe(r){switch(r.tag){case 5:return q(r.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return r=we(r.type,!1),r;case 11:return r=we(r.type.render,!1),r;case 1:return r=we(r.type,!0),r;default:return""}}function Ue(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case P:return"Fragment";case de:return"Portal";case k:return"Profiler";case S:return"StrictMode";case I:return"Suspense";case he:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case b:return(r._context.displayName||"Context")+".Provider";case R:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case $:return s=r.displayName||null,s!==null?s:Ue(r.type)||"Memo";case fe:s=r._payload,r=r._init;try{return Ue(r(s))}catch{}}return null}function Be(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ue(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function He(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ye(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function It(r){var s=Ye(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),d=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return h.call(this)},set:function(w){d=""+w,g.call(this,w)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return d},setValue:function(w){d=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Tn(r){r._valueTracker||(r._valueTracker=It(r))}function Br(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),d="";return r&&(d=Ye(r)?r.checked?"true":"false":r.value),r=d,r!==a?(s.setValue(r),!0):!1}function In(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function vr(r,s){var a=s.checked;return Y({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function vi(r,s){var a=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;a=He(s.value!=null?s.value:a),r._wrapperState={initialChecked:d,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function _i(r,s){s=s.checked,s!=null&&X(r,"checked",s,!1)}function _r(r,s){_i(r,s);var a=He(s.value),d=s.type;if(a!=null)d==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(d==="submit"||d==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?$r(r,s.type,a):s.hasOwnProperty("defaultValue")&&$r(r,s.type,He(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function po(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function $r(r,s,a){(s!=="number"||In(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var Vn=Array.isArray;function Ln(r,s,a,d){if(r=r.options,s){s={};for(var h=0;h<a.length;h++)s["$"+a[h]]=!0;for(a=0;a<r.length;a++)h=s.hasOwnProperty("$"+r[a].value),r[a].selected!==h&&(r[a].selected=h),h&&d&&(r[a].defaultSelected=!0)}else{for(a=""+He(a),s=null,h=0;h<r.length;h++){if(r[h].value===a){r[h].selected=!0,d&&(r[h].defaultSelected=!0);return}s!==null||r[h].disabled||(s=r[h])}s!==null&&(s.selected=!0)}}function Xn(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return Y({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function zr(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(Vn(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:He(a)}}function Hr(r,s){var a=He(s.value),d=He(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),d!=null&&(r.defaultValue=""+d)}function wi(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function ct(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?ct(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Mn,Ei=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,d,h){MSApp.execUnsafeLocalFunction(function(){return r(s,a,d,h)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Mn=Mn||document.createElement("div"),Mn.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Mn.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function wr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Yn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Er=["Webkit","ms","Moz","O"];Object.keys(Yn).forEach(function(r){Er.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Yn[s]=Yn[r]})});function _s(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Yn.hasOwnProperty(r)&&Yn[r]?(""+s).trim():s+"px"}function ws(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var d=a.indexOf("--")===0,h=_s(a,s[a],d);a==="float"&&(a="cssFloat"),d?r.setProperty(a,h):r[a]=h}}var Ti=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ii(r,s){if(s){if(Ti[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function z(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var re=null;function le(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Me=null,Re=null,xe=null;function St(r){if(r=Wa(r)){if(typeof Me!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Ru(s),Me(r.stateNode,r.type,s))}}function Ft(r){Re?xe?xe.push(r):xe=[r]:Re=r}function Si(){if(Re){var r=Re,s=xe;if(xe=Re=null,St(r),s)for(r=0;r<s.length;r++)St(s[r])}}function qr(r,s){return r(s)}function Sa(){}var Wr=!1;function Aa(r,s,a){if(Wr)return r(s,a);Wr=!0;try{return qr(r,s,a)}finally{Wr=!1,(Re!==null||xe!==null)&&(Sa(),Si())}}function _t(r,s){var a=r.stateNode;if(a===null)return null;var d=Ru(a);if(d===null)return null;a=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(r=r.type,d=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!d;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var mo=!1;if(f)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){mo=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{mo=!1}function Es(r,s,a,d,h,g,w,x,D){var W=Array.prototype.slice.call(arguments,3);try{s.apply(a,W)}catch(se){this.onError(se)}}var Ts=!1,go=null,Zn=!1,Ca=null,Ad={onError:function(r){Ts=!0,go=r}};function yo(r,s,a,d,h,g,w,x,D){Ts=!1,go=null,Es.apply(Ad,arguments)}function Jl(r,s,a,d,h,g,w,x,D){if(yo.apply(this,arguments),Ts){if(Ts){var W=go;Ts=!1,go=null}else throw Error(t(198));Zn||(Zn=!0,Ca=W)}}function er(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Is(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function tr(r){if(er(r)!==r)throw Error(t(188))}function Zl(r){var s=r.alternate;if(!s){if(s=er(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,d=s;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(d=h.return,d!==null){a=d;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return tr(h),r;if(g===d)return tr(h),s;g=g.sibling}throw Error(t(188))}if(a.return!==d.return)a=h,d=g;else{for(var w=!1,x=h.child;x;){if(x===a){w=!0,a=h,d=g;break}if(x===d){w=!0,d=h,a=g;break}x=x.sibling}if(!w){for(x=g.child;x;){if(x===a){w=!0,a=g,d=h;break}if(x===d){w=!0,d=g,a=h;break}x=x.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==d)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function Ra(r){return r=Zl(r),r!==null?vo(r):null}function vo(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=vo(r);if(s!==null)return s;r=r.sibling}return null}var _o=e.unstable_scheduleCallback,ka=e.unstable_cancelCallback,eu=e.unstable_shouldYield,Cd=e.unstable_requestPaint,rt=e.unstable_now,tu=e.unstable_getCurrentPriorityLevel,Ss=e.unstable_ImmediatePriority,Ai=e.unstable_UserBlockingPriority,jn=e.unstable_NormalPriority,Pa=e.unstable_LowPriority,nu=e.unstable_IdlePriority,As=null,Sn=null;function ru(r){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(As,r,void 0,(r.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:su,xa=Math.log,iu=Math.LN2;function su(r){return r>>>=0,r===0?32:31-(xa(r)/iu|0)|0}var wo=64,Eo=4194304;function Ci(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Cs(r,s){var a=r.pendingLanes;if(a===0)return 0;var d=0,h=r.suspendedLanes,g=r.pingedLanes,w=a&268435455;if(w!==0){var x=w&~h;x!==0?d=Ci(x):(g&=w,g!==0&&(d=Ci(g)))}else w=a&~h,w!==0?d=Ci(w):g!==0&&(d=Ci(g));if(d===0)return 0;if(s!==0&&s!==d&&(s&h)===0&&(h=d&-d,g=s&-s,h>=g||h===16&&(g&4194240)!==0))return s;if((d&4)!==0&&(d|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=d;0<s;)a=31-rn(s),h=1<<a,d|=r[a],s&=~h;return d}function Rd(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kr(r,s){for(var a=r.suspendedLanes,d=r.pingedLanes,h=r.expirationTimes,g=r.pendingLanes;0<g;){var w=31-rn(g),x=1<<w,D=h[w];D===-1?((x&a)===0||(x&d)!==0)&&(h[w]=Rd(x,s)):D<=s&&(r.expiredLanes|=x),g&=~x}}function An(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Rs(){var r=wo;return wo<<=1,(wo&4194240)===0&&(wo=64),r}function Ri(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function ki(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-rn(s),r[s]=a}function tt(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var d=r.eventTimes;for(r=r.expirationTimes;0<a;){var h=31-rn(a),g=1<<h;s[h]=0,d[h]=-1,r[h]=-1,a&=~g}}function Pi(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var d=31-rn(a),h=1<<d;h&s|r[d]&s&&(r[d]|=s),a&=~h}}var qe=0;function xi(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var ou,To,au,lu,uu,Na=!1,Tr=[],Bt=null,nr=null,rr=null,Ni=new Map,Un=new Map,Ir=[],kd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cu(r,s){switch(r){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":Ni.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Un.delete(s.pointerId)}}function dn(r,s,a,d,h,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:d,nativeEvent:g,targetContainers:[h]},s!==null&&(s=Wa(s),s!==null&&To(s)),r):(r.eventSystemFlags|=d,s=r.targetContainers,h!==null&&s.indexOf(h)===-1&&s.push(h),r)}function Pd(r,s,a,d,h){switch(s){case"focusin":return Bt=dn(Bt,r,s,a,d,h),!0;case"dragenter":return nr=dn(nr,r,s,a,d,h),!0;case"mouseover":return rr=dn(rr,r,s,a,d,h),!0;case"pointerover":var g=h.pointerId;return Ni.set(g,dn(Ni.get(g)||null,r,s,a,d,h)),!0;case"gotpointercapture":return g=h.pointerId,Un.set(g,dn(Un.get(g)||null,r,s,a,d,h)),!0}return!1}function du(r){var s=bs(r.target);if(s!==null){var a=er(s);if(a!==null){if(s=a.tag,s===13){if(s=Is(a),s!==null){r.blockedOn=s,uu(r.priority,function(){au(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Gr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Io(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var d=new a.constructor(a.type,a);re=d,a.target.dispatchEvent(d),re=null}else return s=Wa(a),s!==null&&To(s),r.blockedOn=a,!1;s.shift()}return!0}function ks(r,s,a){Gr(r)&&a.delete(s)}function hu(){Na=!1,Bt!==null&&Gr(Bt)&&(Bt=null),nr!==null&&Gr(nr)&&(nr=null),rr!==null&&Gr(rr)&&(rr=null),Ni.forEach(ks),Un.forEach(ks)}function ir(r,s){r.blockedOn===s&&(r.blockedOn=null,Na||(Na=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,hu)))}function sr(r){function s(h){return ir(h,r)}if(0<Tr.length){ir(Tr[0],r);for(var a=1;a<Tr.length;a++){var d=Tr[a];d.blockedOn===r&&(d.blockedOn=null)}}for(Bt!==null&&ir(Bt,r),nr!==null&&ir(nr,r),rr!==null&&ir(rr,r),Ni.forEach(s),Un.forEach(s),a=0;a<Ir.length;a++)d=Ir[a],d.blockedOn===r&&(d.blockedOn=null);for(;0<Ir.length&&(a=Ir[0],a.blockedOn===null);)du(a),a.blockedOn===null&&Ir.shift()}var Qr=H.ReactCurrentBatchConfig,bi=!0;function lt(r,s,a,d){var h=qe,g=Qr.transition;Qr.transition=null;try{qe=1,ba(r,s,a,d)}finally{qe=h,Qr.transition=g}}function xd(r,s,a,d){var h=qe,g=Qr.transition;Qr.transition=null;try{qe=4,ba(r,s,a,d)}finally{qe=h,Qr.transition=g}}function ba(r,s,a,d){if(bi){var h=Io(r,s,a,d);if(h===null)Bd(r,s,d,Ps,a),cu(r,d);else if(Pd(h,r,s,a,d))d.stopPropagation();else if(cu(r,d),s&4&&-1<kd.indexOf(r)){for(;h!==null;){var g=Wa(h);if(g!==null&&ou(g),g=Io(r,s,a,d),g===null&&Bd(r,s,d,Ps,a),g===h)break;h=g}h!==null&&d.stopPropagation()}else Bd(r,s,d,null,a)}}var Ps=null;function Io(r,s,a,d){if(Ps=null,r=le(d),r=bs(r),r!==null)if(s=er(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Is(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Ps=r,null}function Da(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tu()){case Ss:return 1;case Ai:return 4;case jn:case Pa:return 16;case nu:return 536870912;default:return 16}default:return 16}}var Cn=null,So=null,hn=null;function Oa(){if(hn)return hn;var r,s=So,a=s.length,d,h="value"in Cn?Cn.value:Cn.textContent,g=h.length;for(r=0;r<a&&s[r]===h[r];r++);var w=a-r;for(d=1;d<=w&&s[a-d]===h[g-d];d++);return hn=h.slice(r,1<d?1-d:void 0)}function Ao(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Sr(){return!0}function Va(){return!1}function $t(r){function s(a,d,h,g,w){this._reactName=a,this._targetInst=h,this.type=d,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var x in r)r.hasOwnProperty(x)&&(a=r[x],this[x]=a?a(g):g[x]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Sr:Va,this.isPropagationStopped=Va,this}return Y(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),s}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Co=$t(or),Ar=Y({},or,{view:0,detail:0}),Nd=$t(Ar),Ro,Xr,Di,xs=Y({},Ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Di&&(Di&&r.type==="mousemove"?(Ro=r.screenX-Di.screenX,Xr=r.screenY-Di.screenY):Xr=Ro=0,Di=r),Ro)},movementY:function(r){return"movementY"in r?r.movementY:Xr}}),ko=$t(xs),La=Y({},xs,{dataTransfer:0}),fu=$t(La),Po=Y({},Ar,{relatedTarget:0}),xo=$t(Po),pu=Y({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),Yr=$t(pu),mu=Y({},or,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),gu=$t(mu),yu=Y({},or,{data:0}),Ma=$t(yu),No={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _u(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=vu[r])?!!s[r]:!1}function Cr(){return _u}var u=Y({},Ar,{key:function(r){if(r.key){var s=No[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Ao(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?sn[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cr,charCode:function(r){return r.type==="keypress"?Ao(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Ao(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=$t(u),_=Y({},xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T=$t(_),j=Y({},Ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cr}),G=$t(j),ce=Y({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ze=$t(ce),xt=Y({},xs,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),We=$t(xt),Ot=[9,13,27,32],At=f&&"CompositionEvent"in window,Fn=null;f&&"documentMode"in document&&(Fn=document.documentMode);var Rn=f&&"TextEvent"in window&&!Fn,Ns=f&&(!At||Fn&&8<Fn&&11>=Fn),bo=" ",mm=!1;function gm(r,s){switch(r){case"keyup":return Ot.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ym(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Do=!1;function e0(r,s){switch(r){case"compositionend":return ym(s);case"keypress":return s.which!==32?null:(mm=!0,bo);case"textInput":return r=s.data,r===bo&&mm?null:r;default:return null}}function t0(r,s){if(Do)return r==="compositionend"||!At&&gm(r,s)?(r=Oa(),hn=So=Cn=null,Do=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Ns&&s.locale!=="ko"?null:s.data;default:return null}}var n0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vm(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!n0[r.type]:s==="textarea"}function _m(r,s,a,d){Ft(d),s=Su(s,"onChange"),0<s.length&&(a=new Co("onChange","change",null,a,d),r.push({event:a,listeners:s}))}var ja=null,Ua=null;function r0(r){Mm(r,0)}function wu(r){var s=jo(r);if(Br(s))return r}function i0(r,s){if(r==="change")return s}var wm=!1;if(f){var bd;if(f){var Dd="oninput"in document;if(!Dd){var Em=document.createElement("div");Em.setAttribute("oninput","return;"),Dd=typeof Em.oninput=="function"}bd=Dd}else bd=!1;wm=bd&&(!document.documentMode||9<document.documentMode)}function Tm(){ja&&(ja.detachEvent("onpropertychange",Im),Ua=ja=null)}function Im(r){if(r.propertyName==="value"&&wu(Ua)){var s=[];_m(s,Ua,r,le(r)),Aa(r0,s)}}function s0(r,s,a){r==="focusin"?(Tm(),ja=s,Ua=a,ja.attachEvent("onpropertychange",Im)):r==="focusout"&&Tm()}function o0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return wu(Ua)}function a0(r,s){if(r==="click")return wu(s)}function l0(r,s){if(r==="input"||r==="change")return wu(s)}function u0(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var ar=typeof Object.is=="function"?Object.is:u0;function Fa(r,s){if(ar(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),d=Object.keys(s);if(a.length!==d.length)return!1;for(d=0;d<a.length;d++){var h=a[d];if(!p.call(s,h)||!ar(r[h],s[h]))return!1}return!0}function Sm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Am(r,s){var a=Sm(r);r=0;for(var d;a;){if(a.nodeType===3){if(d=r+a.textContent.length,r<=s&&d>=s)return{node:a,offset:s-r};r=d}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Sm(a)}}function Cm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Cm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Rm(){for(var r=window,s=In();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=In(r.document)}return s}function Od(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function c0(r){var s=Rm(),a=r.focusedElem,d=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Cm(a.ownerDocument.documentElement,a)){if(d!==null&&Od(a)){if(s=d.start,r=d.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var h=a.textContent.length,g=Math.min(d.start,h);d=d.end===void 0?g:Math.min(d.end,h),!r.extend&&g>d&&(h=d,d=g,g=h),h=Am(a,g);var w=Am(a,d);h&&w&&(r.rangeCount!==1||r.anchorNode!==h.node||r.anchorOffset!==h.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(h.node,h.offset),r.removeAllRanges(),g>d?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var d0=f&&"documentMode"in document&&11>=document.documentMode,Oo=null,Vd=null,Ba=null,Ld=!1;function km(r,s,a){var d=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ld||Oo==null||Oo!==In(d)||(d=Oo,"selectionStart"in d&&Od(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Ba&&Fa(Ba,d)||(Ba=d,d=Su(Vd,"onSelect"),0<d.length&&(s=new Co("onSelect","select",null,s,a),r.push({event:s,listeners:d}),s.target=Oo)))}function Eu(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var Vo={animationend:Eu("Animation","AnimationEnd"),animationiteration:Eu("Animation","AnimationIteration"),animationstart:Eu("Animation","AnimationStart"),transitionend:Eu("Transition","TransitionEnd")},Md={},Pm={};f&&(Pm=document.createElement("div").style,"AnimationEvent"in window||(delete Vo.animationend.animation,delete Vo.animationiteration.animation,delete Vo.animationstart.animation),"TransitionEvent"in window||delete Vo.transitionend.transition);function Tu(r){if(Md[r])return Md[r];if(!Vo[r])return r;var s=Vo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Pm)return Md[r]=s[a];return r}var xm=Tu("animationend"),Nm=Tu("animationiteration"),bm=Tu("animationstart"),Dm=Tu("transitionend"),Om=new Map,Vm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Oi(r,s){Om.set(r,s),l(s,[r])}for(var jd=0;jd<Vm.length;jd++){var Ud=Vm[jd],h0=Ud.toLowerCase(),f0=Ud[0].toUpperCase()+Ud.slice(1);Oi(h0,"on"+f0)}Oi(xm,"onAnimationEnd"),Oi(Nm,"onAnimationIteration"),Oi(bm,"onAnimationStart"),Oi("dblclick","onDoubleClick"),Oi("focusin","onFocus"),Oi("focusout","onBlur"),Oi(Dm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p0=new Set("cancel close invalid load scroll toggle".split(" ").concat($a));function Lm(r,s,a){var d=r.type||"unknown-event";r.currentTarget=a,Jl(d,s,void 0,r),r.currentTarget=null}function Mm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var d=r[a],h=d.event;d=d.listeners;e:{var g=void 0;if(s)for(var w=d.length-1;0<=w;w--){var x=d[w],D=x.instance,W=x.currentTarget;if(x=x.listener,D!==g&&h.isPropagationStopped())break e;Lm(h,x,W),g=D}else for(w=0;w<d.length;w++){if(x=d[w],D=x.instance,W=x.currentTarget,x=x.listener,D!==g&&h.isPropagationStopped())break e;Lm(h,x,W),g=D}}}if(Zn)throw r=Ca,Zn=!1,Ca=null,r}function ot(r,s){var a=s[Kd];a===void 0&&(a=s[Kd]=new Set);var d=r+"__bubble";a.has(d)||(jm(s,r,2,!1),a.add(d))}function Fd(r,s,a){var d=0;s&&(d|=4),jm(a,r,d,s)}var Iu="_reactListening"+Math.random().toString(36).slice(2);function za(r){if(!r[Iu]){r[Iu]=!0,i.forEach(function(a){a!=="selectionchange"&&(p0.has(a)||Fd(a,!1,r),Fd(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Iu]||(s[Iu]=!0,Fd("selectionchange",!1,s))}}function jm(r,s,a,d){switch(Da(s)){case 1:var h=lt;break;case 4:h=xd;break;default:h=ba}a=h.bind(null,s,a,r),h=void 0,!mo||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(h=!0),d?h!==void 0?r.addEventListener(s,a,{capture:!0,passive:h}):r.addEventListener(s,a,!0):h!==void 0?r.addEventListener(s,a,{passive:h}):r.addEventListener(s,a,!1)}function Bd(r,s,a,d,h){var g=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var w=d.tag;if(w===3||w===4){var x=d.stateNode.containerInfo;if(x===h||x.nodeType===8&&x.parentNode===h)break;if(w===4)for(w=d.return;w!==null;){var D=w.tag;if((D===3||D===4)&&(D=w.stateNode.containerInfo,D===h||D.nodeType===8&&D.parentNode===h))return;w=w.return}for(;x!==null;){if(w=bs(x),w===null)return;if(D=w.tag,D===5||D===6){d=g=w;continue e}x=x.parentNode}}d=d.return}Aa(function(){var W=g,se=le(a),oe=[];e:{var ie=Om.get(r);if(ie!==void 0){var ve=Co,Te=r;switch(r){case"keypress":if(Ao(a)===0)break e;case"keydown":case"keyup":ve=m;break;case"focusin":Te="focus",ve=xo;break;case"focusout":Te="blur",ve=xo;break;case"beforeblur":case"afterblur":ve=xo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ve=ko;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ve=fu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ve=G;break;case xm:case Nm:case bm:ve=Yr;break;case Dm:ve=Ze;break;case"scroll":ve=Nd;break;case"wheel":ve=We;break;case"copy":case"cut":case"paste":ve=gu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ve=T}var Ie=(s&4)!==0,wt=!Ie&&r==="scroll",U=Ie?ie!==null?ie+"Capture":null:ie;Ie=[];for(var M=W,F;M!==null;){F=M;var ue=F.stateNode;if(F.tag===5&&ue!==null&&(F=ue,U!==null&&(ue=_t(M,U),ue!=null&&Ie.push(Ha(M,ue,F)))),wt)break;M=M.return}0<Ie.length&&(ie=new ve(ie,Te,null,a,se),oe.push({event:ie,listeners:Ie}))}}if((s&7)===0){e:{if(ie=r==="mouseover"||r==="pointerover",ve=r==="mouseout"||r==="pointerout",ie&&a!==re&&(Te=a.relatedTarget||a.fromElement)&&(bs(Te)||Te[Jr]))break e;if((ve||ie)&&(ie=se.window===se?se:(ie=se.ownerDocument)?ie.defaultView||ie.parentWindow:window,ve?(Te=a.relatedTarget||a.toElement,ve=W,Te=Te?bs(Te):null,Te!==null&&(wt=er(Te),Te!==wt||Te.tag!==5&&Te.tag!==6)&&(Te=null)):(ve=null,Te=W),ve!==Te)){if(Ie=ko,ue="onMouseLeave",U="onMouseEnter",M="mouse",(r==="pointerout"||r==="pointerover")&&(Ie=T,ue="onPointerLeave",U="onPointerEnter",M="pointer"),wt=ve==null?ie:jo(ve),F=Te==null?ie:jo(Te),ie=new Ie(ue,M+"leave",ve,a,se),ie.target=wt,ie.relatedTarget=F,ue=null,bs(se)===W&&(Ie=new Ie(U,M+"enter",Te,a,se),Ie.target=F,Ie.relatedTarget=wt,ue=Ie),wt=ue,ve&&Te)t:{for(Ie=ve,U=Te,M=0,F=Ie;F;F=Lo(F))M++;for(F=0,ue=U;ue;ue=Lo(ue))F++;for(;0<M-F;)Ie=Lo(Ie),M--;for(;0<F-M;)U=Lo(U),F--;for(;M--;){if(Ie===U||U!==null&&Ie===U.alternate)break t;Ie=Lo(Ie),U=Lo(U)}Ie=null}else Ie=null;ve!==null&&Um(oe,ie,ve,Ie,!1),Te!==null&&wt!==null&&Um(oe,wt,Te,Ie,!0)}}e:{if(ie=W?jo(W):window,ve=ie.nodeName&&ie.nodeName.toLowerCase(),ve==="select"||ve==="input"&&ie.type==="file")var Se=i0;else if(vm(ie))if(wm)Se=l0;else{Se=o0;var ke=s0}else(ve=ie.nodeName)&&ve.toLowerCase()==="input"&&(ie.type==="checkbox"||ie.type==="radio")&&(Se=a0);if(Se&&(Se=Se(r,W))){_m(oe,Se,a,se);break e}ke&&ke(r,ie,W),r==="focusout"&&(ke=ie._wrapperState)&&ke.controlled&&ie.type==="number"&&$r(ie,"number",ie.value)}switch(ke=W?jo(W):window,r){case"focusin":(vm(ke)||ke.contentEditable==="true")&&(Oo=ke,Vd=W,Ba=null);break;case"focusout":Ba=Vd=Oo=null;break;case"mousedown":Ld=!0;break;case"contextmenu":case"mouseup":case"dragend":Ld=!1,km(oe,a,se);break;case"selectionchange":if(d0)break;case"keydown":case"keyup":km(oe,a,se)}var Pe;if(At)e:{switch(r){case"compositionstart":var De="onCompositionStart";break e;case"compositionend":De="onCompositionEnd";break e;case"compositionupdate":De="onCompositionUpdate";break e}De=void 0}else Do?gm(r,a)&&(De="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(De="onCompositionStart");De&&(Ns&&a.locale!=="ko"&&(Do||De!=="onCompositionStart"?De==="onCompositionEnd"&&Do&&(Pe=Oa()):(Cn=se,So="value"in Cn?Cn.value:Cn.textContent,Do=!0)),ke=Su(W,De),0<ke.length&&(De=new Ma(De,r,null,a,se),oe.push({event:De,listeners:ke}),Pe?De.data=Pe:(Pe=ym(a),Pe!==null&&(De.data=Pe)))),(Pe=Rn?e0(r,a):t0(r,a))&&(W=Su(W,"onBeforeInput"),0<W.length&&(se=new Ma("onBeforeInput","beforeinput",null,a,se),oe.push({event:se,listeners:W}),se.data=Pe))}Mm(oe,s)})}function Ha(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Su(r,s){for(var a=s+"Capture",d=[];r!==null;){var h=r,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=_t(r,a),g!=null&&d.unshift(Ha(r,g,h)),g=_t(r,s),g!=null&&d.push(Ha(r,g,h))),r=r.return}return d}function Lo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Um(r,s,a,d,h){for(var g=s._reactName,w=[];a!==null&&a!==d;){var x=a,D=x.alternate,W=x.stateNode;if(D!==null&&D===d)break;x.tag===5&&W!==null&&(x=W,h?(D=_t(a,g),D!=null&&w.unshift(Ha(a,D,x))):h||(D=_t(a,g),D!=null&&w.push(Ha(a,D,x)))),a=a.return}w.length!==0&&r.push({event:s,listeners:w})}var m0=/\r\n?/g,g0=/\u0000|\uFFFD/g;function Fm(r){return(typeof r=="string"?r:""+r).replace(m0,`
`).replace(g0,"")}function Au(r,s,a){if(s=Fm(s),Fm(r)!==s&&a)throw Error(t(425))}function Cu(){}var $d=null,zd=null;function Hd(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var qd=typeof setTimeout=="function"?setTimeout:void 0,y0=typeof clearTimeout=="function"?clearTimeout:void 0,Bm=typeof Promise=="function"?Promise:void 0,v0=typeof queueMicrotask=="function"?queueMicrotask:typeof Bm<"u"?function(r){return Bm.resolve(null).then(r).catch(_0)}:qd;function _0(r){setTimeout(function(){throw r})}function Wd(r,s){var a=s,d=0;do{var h=a.nextSibling;if(r.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(d===0){r.removeChild(h),sr(s);return}d--}else a!=="$"&&a!=="$?"&&a!=="$!"||d++;a=h}while(a);sr(s)}function Vi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function $m(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var Mo=Math.random().toString(36).slice(2),Rr="__reactFiber$"+Mo,qa="__reactProps$"+Mo,Jr="__reactContainer$"+Mo,Kd="__reactEvents$"+Mo,w0="__reactListeners$"+Mo,E0="__reactHandles$"+Mo;function bs(r){var s=r[Rr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Jr]||a[Rr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=$m(r);r!==null;){if(a=r[Rr])return a;r=$m(r)}return s}r=a,a=r.parentNode}return null}function Wa(r){return r=r[Rr]||r[Jr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function jo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Ru(r){return r[qa]||null}var Gd=[],Uo=-1;function Li(r){return{current:r}}function at(r){0>Uo||(r.current=Gd[Uo],Gd[Uo]=null,Uo--)}function it(r,s){Uo++,Gd[Uo]=r.current,r.current=s}var Mi={},Gt=Li(Mi),fn=Li(!1),Ds=Mi;function Fo(r,s){var a=r.type.contextTypes;if(!a)return Mi;var d=r.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=s[g];return d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=h),h}function pn(r){return r=r.childContextTypes,r!=null}function ku(){at(fn),at(Gt)}function zm(r,s,a){if(Gt.current!==Mi)throw Error(t(168));it(Gt,s),it(fn,a)}function Hm(r,s,a){var d=r.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return a;d=d.getChildContext();for(var h in d)if(!(h in s))throw Error(t(108,Be(r)||"Unknown",h));return Y({},a,d)}function Pu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Mi,Ds=Gt.current,it(Gt,r),it(fn,fn.current),!0}function qm(r,s,a){var d=r.stateNode;if(!d)throw Error(t(169));a?(r=Hm(r,s,Ds),d.__reactInternalMemoizedMergedChildContext=r,at(fn),at(Gt),it(Gt,r)):at(fn),it(fn,a)}var Zr=null,xu=!1,Qd=!1;function Wm(r){Zr===null?Zr=[r]:Zr.push(r)}function T0(r){xu=!0,Wm(r)}function ji(){if(!Qd&&Zr!==null){Qd=!0;var r=0,s=qe;try{var a=Zr;for(qe=1;r<a.length;r++){var d=a[r];do d=d(!0);while(d!==null)}Zr=null,xu=!1}catch(h){throw Zr!==null&&(Zr=Zr.slice(r+1)),_o(Ss,ji),h}finally{qe=s,Qd=!1}}return null}var Bo=[],$o=0,Nu=null,bu=0,Bn=[],$n=0,Os=null,ei=1,ti="";function Vs(r,s){Bo[$o++]=bu,Bo[$o++]=Nu,Nu=r,bu=s}function Km(r,s,a){Bn[$n++]=ei,Bn[$n++]=ti,Bn[$n++]=Os,Os=r;var d=ei;r=ti;var h=32-rn(d)-1;d&=~(1<<h),a+=1;var g=32-rn(s)+h;if(30<g){var w=h-h%5;g=(d&(1<<w)-1).toString(32),d>>=w,h-=w,ei=1<<32-rn(s)+h|a<<h|d,ti=g+r}else ei=1<<g|a<<h|d,ti=r}function Xd(r){r.return!==null&&(Vs(r,1),Km(r,1,0))}function Yd(r){for(;r===Nu;)Nu=Bo[--$o],Bo[$o]=null,bu=Bo[--$o],Bo[$o]=null;for(;r===Os;)Os=Bn[--$n],Bn[$n]=null,ti=Bn[--$n],Bn[$n]=null,ei=Bn[--$n],Bn[$n]=null}var kn=null,Pn=null,ut=!1,lr=null;function Gm(r,s){var a=Wn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function Qm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,kn=r,Pn=Vi(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,kn=r,Pn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Os!==null?{id:ei,overflow:ti}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Wn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,kn=r,Pn=null,!0):!1;default:return!1}}function Jd(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Zd(r){if(ut){var s=Pn;if(s){var a=s;if(!Qm(r,s)){if(Jd(r))throw Error(t(418));s=Vi(a.nextSibling);var d=kn;s&&Qm(r,s)?Gm(d,a):(r.flags=r.flags&-4097|2,ut=!1,kn=r)}}else{if(Jd(r))throw Error(t(418));r.flags=r.flags&-4097|2,ut=!1,kn=r}}}function Xm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;kn=r}function Du(r){if(r!==kn)return!1;if(!ut)return Xm(r),ut=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Hd(r.type,r.memoizedProps)),s&&(s=Pn)){if(Jd(r))throw Ym(),Error(t(418));for(;s;)Gm(r,s),s=Vi(s.nextSibling)}if(Xm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){Pn=Vi(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}Pn=null}}else Pn=kn?Vi(r.stateNode.nextSibling):null;return!0}function Ym(){for(var r=Pn;r;)r=Vi(r.nextSibling)}function zo(){Pn=kn=null,ut=!1}function eh(r){lr===null?lr=[r]:lr.push(r)}var I0=H.ReactCurrentBatchConfig;function Ka(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var d=a.stateNode}if(!d)throw Error(t(147,r));var h=d,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(w){var x=h.refs;w===null?delete x[g]:x[g]=w},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function Ou(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Jm(r){var s=r._init;return s(r._payload)}function Zm(r){function s(U,M){if(r){var F=U.deletions;F===null?(U.deletions=[M],U.flags|=16):F.push(M)}}function a(U,M){if(!r)return null;for(;M!==null;)s(U,M),M=M.sibling;return null}function d(U,M){for(U=new Map;M!==null;)M.key!==null?U.set(M.key,M):U.set(M.index,M),M=M.sibling;return U}function h(U,M){return U=Wi(U,M),U.index=0,U.sibling=null,U}function g(U,M,F){return U.index=F,r?(F=U.alternate,F!==null?(F=F.index,F<M?(U.flags|=2,M):F):(U.flags|=2,M)):(U.flags|=1048576,M)}function w(U){return r&&U.alternate===null&&(U.flags|=2),U}function x(U,M,F,ue){return M===null||M.tag!==6?(M=qh(F,U.mode,ue),M.return=U,M):(M=h(M,F),M.return=U,M)}function D(U,M,F,ue){var Se=F.type;return Se===P?se(U,M,F.props.children,ue,F.key):M!==null&&(M.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===fe&&Jm(Se)===M.type)?(ue=h(M,F.props),ue.ref=Ka(U,M,F),ue.return=U,ue):(ue=ic(F.type,F.key,F.props,null,U.mode,ue),ue.ref=Ka(U,M,F),ue.return=U,ue)}function W(U,M,F,ue){return M===null||M.tag!==4||M.stateNode.containerInfo!==F.containerInfo||M.stateNode.implementation!==F.implementation?(M=Wh(F,U.mode,ue),M.return=U,M):(M=h(M,F.children||[]),M.return=U,M)}function se(U,M,F,ue,Se){return M===null||M.tag!==7?(M=zs(F,U.mode,ue,Se),M.return=U,M):(M=h(M,F),M.return=U,M)}function oe(U,M,F){if(typeof M=="string"&&M!==""||typeof M=="number")return M=qh(""+M,U.mode,F),M.return=U,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case me:return F=ic(M.type,M.key,M.props,null,U.mode,F),F.ref=Ka(U,null,M),F.return=U,F;case de:return M=Wh(M,U.mode,F),M.return=U,M;case fe:var ue=M._init;return oe(U,ue(M._payload),F)}if(Vn(M)||te(M))return M=zs(M,U.mode,F,null),M.return=U,M;Ou(U,M)}return null}function ie(U,M,F,ue){var Se=M!==null?M.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return Se!==null?null:x(U,M,""+F,ue);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case me:return F.key===Se?D(U,M,F,ue):null;case de:return F.key===Se?W(U,M,F,ue):null;case fe:return Se=F._init,ie(U,M,Se(F._payload),ue)}if(Vn(F)||te(F))return Se!==null?null:se(U,M,F,ue,null);Ou(U,F)}return null}function ve(U,M,F,ue,Se){if(typeof ue=="string"&&ue!==""||typeof ue=="number")return U=U.get(F)||null,x(M,U,""+ue,Se);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case me:return U=U.get(ue.key===null?F:ue.key)||null,D(M,U,ue,Se);case de:return U=U.get(ue.key===null?F:ue.key)||null,W(M,U,ue,Se);case fe:var ke=ue._init;return ve(U,M,F,ke(ue._payload),Se)}if(Vn(ue)||te(ue))return U=U.get(F)||null,se(M,U,ue,Se,null);Ou(M,ue)}return null}function Te(U,M,F,ue){for(var Se=null,ke=null,Pe=M,De=M=0,Mt=null;Pe!==null&&De<F.length;De++){Pe.index>De?(Mt=Pe,Pe=null):Mt=Pe.sibling;var Qe=ie(U,Pe,F[De],ue);if(Qe===null){Pe===null&&(Pe=Mt);break}r&&Pe&&Qe.alternate===null&&s(U,Pe),M=g(Qe,M,De),ke===null?Se=Qe:ke.sibling=Qe,ke=Qe,Pe=Mt}if(De===F.length)return a(U,Pe),ut&&Vs(U,De),Se;if(Pe===null){for(;De<F.length;De++)Pe=oe(U,F[De],ue),Pe!==null&&(M=g(Pe,M,De),ke===null?Se=Pe:ke.sibling=Pe,ke=Pe);return ut&&Vs(U,De),Se}for(Pe=d(U,Pe);De<F.length;De++)Mt=ve(Pe,U,De,F[De],ue),Mt!==null&&(r&&Mt.alternate!==null&&Pe.delete(Mt.key===null?De:Mt.key),M=g(Mt,M,De),ke===null?Se=Mt:ke.sibling=Mt,ke=Mt);return r&&Pe.forEach(function(Ki){return s(U,Ki)}),ut&&Vs(U,De),Se}function Ie(U,M,F,ue){var Se=te(F);if(typeof Se!="function")throw Error(t(150));if(F=Se.call(F),F==null)throw Error(t(151));for(var ke=Se=null,Pe=M,De=M=0,Mt=null,Qe=F.next();Pe!==null&&!Qe.done;De++,Qe=F.next()){Pe.index>De?(Mt=Pe,Pe=null):Mt=Pe.sibling;var Ki=ie(U,Pe,Qe.value,ue);if(Ki===null){Pe===null&&(Pe=Mt);break}r&&Pe&&Ki.alternate===null&&s(U,Pe),M=g(Ki,M,De),ke===null?Se=Ki:ke.sibling=Ki,ke=Ki,Pe=Mt}if(Qe.done)return a(U,Pe),ut&&Vs(U,De),Se;if(Pe===null){for(;!Qe.done;De++,Qe=F.next())Qe=oe(U,Qe.value,ue),Qe!==null&&(M=g(Qe,M,De),ke===null?Se=Qe:ke.sibling=Qe,ke=Qe);return ut&&Vs(U,De),Se}for(Pe=d(U,Pe);!Qe.done;De++,Qe=F.next())Qe=ve(Pe,U,De,Qe.value,ue),Qe!==null&&(r&&Qe.alternate!==null&&Pe.delete(Qe.key===null?De:Qe.key),M=g(Qe,M,De),ke===null?Se=Qe:ke.sibling=Qe,ke=Qe);return r&&Pe.forEach(function(nI){return s(U,nI)}),ut&&Vs(U,De),Se}function wt(U,M,F,ue){if(typeof F=="object"&&F!==null&&F.type===P&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case me:e:{for(var Se=F.key,ke=M;ke!==null;){if(ke.key===Se){if(Se=F.type,Se===P){if(ke.tag===7){a(U,ke.sibling),M=h(ke,F.props.children),M.return=U,U=M;break e}}else if(ke.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===fe&&Jm(Se)===ke.type){a(U,ke.sibling),M=h(ke,F.props),M.ref=Ka(U,ke,F),M.return=U,U=M;break e}a(U,ke);break}else s(U,ke);ke=ke.sibling}F.type===P?(M=zs(F.props.children,U.mode,ue,F.key),M.return=U,U=M):(ue=ic(F.type,F.key,F.props,null,U.mode,ue),ue.ref=Ka(U,M,F),ue.return=U,U=ue)}return w(U);case de:e:{for(ke=F.key;M!==null;){if(M.key===ke)if(M.tag===4&&M.stateNode.containerInfo===F.containerInfo&&M.stateNode.implementation===F.implementation){a(U,M.sibling),M=h(M,F.children||[]),M.return=U,U=M;break e}else{a(U,M);break}else s(U,M);M=M.sibling}M=Wh(F,U.mode,ue),M.return=U,U=M}return w(U);case fe:return ke=F._init,wt(U,M,ke(F._payload),ue)}if(Vn(F))return Te(U,M,F,ue);if(te(F))return Ie(U,M,F,ue);Ou(U,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,M!==null&&M.tag===6?(a(U,M.sibling),M=h(M,F),M.return=U,U=M):(a(U,M),M=qh(F,U.mode,ue),M.return=U,U=M),w(U)):a(U,M)}return wt}var Ho=Zm(!0),eg=Zm(!1),Vu=Li(null),Lu=null,qo=null,th=null;function nh(){th=qo=Lu=null}function rh(r){var s=Vu.current;at(Vu),r._currentValue=s}function ih(r,s,a){for(;r!==null;){var d=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),r===a)break;r=r.return}}function Wo(r,s){Lu=r,th=qo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(mn=!0),r.firstContext=null)}function zn(r){var s=r._currentValue;if(th!==r)if(r={context:r,memoizedValue:s,next:null},qo===null){if(Lu===null)throw Error(t(308));qo=r,Lu.dependencies={lanes:0,firstContext:r}}else qo=qo.next=r;return s}var Ls=null;function sh(r){Ls===null?Ls=[r]:Ls.push(r)}function tg(r,s,a,d){var h=s.interleaved;return h===null?(a.next=a,sh(s)):(a.next=h.next,h.next=a),s.interleaved=a,ni(r,d)}function ni(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var Ui=!1;function oh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ng(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function ri(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function Fi(r,s,a){var d=r.updateQueue;if(d===null)return null;if(d=d.shared,(Ge&2)!==0){var h=d.pending;return h===null?s.next=s:(s.next=h.next,h.next=s),d.pending=s,ni(r,a)}return h=d.interleaved,h===null?(s.next=s,sh(d)):(s.next=h.next,h.next=s),d.interleaved=s,ni(r,a)}function Mu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var d=s.lanes;d&=r.pendingLanes,a|=d,s.lanes=a,Pi(r,a)}}function rg(r,s){var a=r.updateQueue,d=r.alternate;if(d!==null&&(d=d.updateQueue,a===d)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?h=g=s:g=g.next=s}else h=g=s;a={baseState:d.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:d.shared,effects:d.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function ju(r,s,a,d){var h=r.updateQueue;Ui=!1;var g=h.firstBaseUpdate,w=h.lastBaseUpdate,x=h.shared.pending;if(x!==null){h.shared.pending=null;var D=x,W=D.next;D.next=null,w===null?g=W:w.next=W,w=D;var se=r.alternate;se!==null&&(se=se.updateQueue,x=se.lastBaseUpdate,x!==w&&(x===null?se.firstBaseUpdate=W:x.next=W,se.lastBaseUpdate=D))}if(g!==null){var oe=h.baseState;w=0,se=W=D=null,x=g;do{var ie=x.lane,ve=x.eventTime;if((d&ie)===ie){se!==null&&(se=se.next={eventTime:ve,lane:0,tag:x.tag,payload:x.payload,callback:x.callback,next:null});e:{var Te=r,Ie=x;switch(ie=s,ve=a,Ie.tag){case 1:if(Te=Ie.payload,typeof Te=="function"){oe=Te.call(ve,oe,ie);break e}oe=Te;break e;case 3:Te.flags=Te.flags&-65537|128;case 0:if(Te=Ie.payload,ie=typeof Te=="function"?Te.call(ve,oe,ie):Te,ie==null)break e;oe=Y({},oe,ie);break e;case 2:Ui=!0}}x.callback!==null&&x.lane!==0&&(r.flags|=64,ie=h.effects,ie===null?h.effects=[x]:ie.push(x))}else ve={eventTime:ve,lane:ie,tag:x.tag,payload:x.payload,callback:x.callback,next:null},se===null?(W=se=ve,D=oe):se=se.next=ve,w|=ie;if(x=x.next,x===null){if(x=h.shared.pending,x===null)break;ie=x,x=ie.next,ie.next=null,h.lastBaseUpdate=ie,h.shared.pending=null}}while(!0);if(se===null&&(D=oe),h.baseState=D,h.firstBaseUpdate=W,h.lastBaseUpdate=se,s=h.shared.interleaved,s!==null){h=s;do w|=h.lane,h=h.next;while(h!==s)}else g===null&&(h.shared.lanes=0);Us|=w,r.lanes=w,r.memoizedState=oe}}function ig(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var d=r[s],h=d.callback;if(h!==null){if(d.callback=null,d=a,typeof h!="function")throw Error(t(191,h));h.call(d)}}}var Ga={},kr=Li(Ga),Qa=Li(Ga),Xa=Li(Ga);function Ms(r){if(r===Ga)throw Error(t(174));return r}function ah(r,s){switch(it(Xa,s),it(Qa,r),it(kr,Ga),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:pt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=pt(s,r)}at(kr),it(kr,s)}function Ko(){at(kr),at(Qa),at(Xa)}function sg(r){Ms(Xa.current);var s=Ms(kr.current),a=pt(s,r.type);s!==a&&(it(Qa,r),it(kr,a))}function lh(r){Qa.current===r&&(at(kr),at(Qa))}var dt=Li(0);function Uu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var uh=[];function ch(){for(var r=0;r<uh.length;r++)uh[r]._workInProgressVersionPrimary=null;uh.length=0}var Fu=H.ReactCurrentDispatcher,dh=H.ReactCurrentBatchConfig,js=0,ht=null,Nt=null,Vt=null,Bu=!1,Ya=!1,Ja=0,S0=0;function Qt(){throw Error(t(321))}function hh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!ar(r[a],s[a]))return!1;return!0}function fh(r,s,a,d,h,g){if(js=g,ht=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Fu.current=r===null||r.memoizedState===null?k0:P0,r=a(d,h),Ya){g=0;do{if(Ya=!1,Ja=0,25<=g)throw Error(t(301));g+=1,Vt=Nt=null,s.updateQueue=null,Fu.current=x0,r=a(d,h)}while(Ya)}if(Fu.current=Hu,s=Nt!==null&&Nt.next!==null,js=0,Vt=Nt=ht=null,Bu=!1,s)throw Error(t(300));return r}function ph(){var r=Ja!==0;return Ja=0,r}function Pr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?ht.memoizedState=Vt=r:Vt=Vt.next=r,Vt}function Hn(){if(Nt===null){var r=ht.alternate;r=r!==null?r.memoizedState:null}else r=Nt.next;var s=Vt===null?ht.memoizedState:Vt.next;if(s!==null)Vt=s,Nt=r;else{if(r===null)throw Error(t(310));Nt=r,r={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},Vt===null?ht.memoizedState=Vt=r:Vt=Vt.next=r}return Vt}function Za(r,s){return typeof s=="function"?s(r):s}function mh(r){var s=Hn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var d=Nt,h=d.baseQueue,g=a.pending;if(g!==null){if(h!==null){var w=h.next;h.next=g.next,g.next=w}d.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,d=d.baseState;var x=w=null,D=null,W=g;do{var se=W.lane;if((js&se)===se)D!==null&&(D=D.next={lane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),d=W.hasEagerState?W.eagerState:r(d,W.action);else{var oe={lane:se,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null};D===null?(x=D=oe,w=d):D=D.next=oe,ht.lanes|=se,Us|=se}W=W.next}while(W!==null&&W!==g);D===null?w=d:D.next=x,ar(d,s.memoizedState)||(mn=!0),s.memoizedState=d,s.baseState=w,s.baseQueue=D,a.lastRenderedState=d}if(r=a.interleaved,r!==null){h=r;do g=h.lane,ht.lanes|=g,Us|=g,h=h.next;while(h!==r)}else h===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function gh(r){var s=Hn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var d=a.dispatch,h=a.pending,g=s.memoizedState;if(h!==null){a.pending=null;var w=h=h.next;do g=r(g,w.action),w=w.next;while(w!==h);ar(g,s.memoizedState)||(mn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,d]}function og(){}function ag(r,s){var a=ht,d=Hn(),h=s(),g=!ar(d.memoizedState,h);if(g&&(d.memoizedState=h,mn=!0),d=d.queue,yh(cg.bind(null,a,d,r),[r]),d.getSnapshot!==s||g||Vt!==null&&Vt.memoizedState.tag&1){if(a.flags|=2048,el(9,ug.bind(null,a,d,h,s),void 0,null),Lt===null)throw Error(t(349));(js&30)!==0||lg(a,s,h)}return h}function lg(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=ht.updateQueue,s===null?(s={lastEffect:null,stores:null},ht.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function ug(r,s,a,d){s.value=a,s.getSnapshot=d,dg(s)&&hg(r)}function cg(r,s,a){return a(function(){dg(s)&&hg(r)})}function dg(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!ar(r,a)}catch{return!0}}function hg(r){var s=ni(r,1);s!==null&&hr(s,r,1,-1)}function fg(r){var s=Pr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:r},s.queue=r,r=r.dispatch=R0.bind(null,ht,r),[s.memoizedState,r]}function el(r,s,a,d){return r={tag:r,create:s,destroy:a,deps:d,next:null},s=ht.updateQueue,s===null?(s={lastEffect:null,stores:null},ht.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(d=a.next,a.next=r,r.next=d,s.lastEffect=r)),r}function pg(){return Hn().memoizedState}function $u(r,s,a,d){var h=Pr();ht.flags|=r,h.memoizedState=el(1|s,a,void 0,d===void 0?null:d)}function zu(r,s,a,d){var h=Hn();d=d===void 0?null:d;var g=void 0;if(Nt!==null){var w=Nt.memoizedState;if(g=w.destroy,d!==null&&hh(d,w.deps)){h.memoizedState=el(s,a,g,d);return}}ht.flags|=r,h.memoizedState=el(1|s,a,g,d)}function mg(r,s){return $u(8390656,8,r,s)}function yh(r,s){return zu(2048,8,r,s)}function gg(r,s){return zu(4,2,r,s)}function yg(r,s){return zu(4,4,r,s)}function vg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function _g(r,s,a){return a=a!=null?a.concat([r]):null,zu(4,4,vg.bind(null,s,r),a)}function vh(){}function wg(r,s){var a=Hn();s=s===void 0?null:s;var d=a.memoizedState;return d!==null&&s!==null&&hh(s,d[1])?d[0]:(a.memoizedState=[r,s],r)}function Eg(r,s){var a=Hn();s=s===void 0?null:s;var d=a.memoizedState;return d!==null&&s!==null&&hh(s,d[1])?d[0]:(r=r(),a.memoizedState=[r,s],r)}function Tg(r,s,a){return(js&21)===0?(r.baseState&&(r.baseState=!1,mn=!0),r.memoizedState=a):(ar(a,s)||(a=Rs(),ht.lanes|=a,Us|=a,r.baseState=!0),s)}function A0(r,s){var a=qe;qe=a!==0&&4>a?a:4,r(!0);var d=dh.transition;dh.transition={};try{r(!1),s()}finally{qe=a,dh.transition=d}}function Ig(){return Hn().memoizedState}function C0(r,s,a){var d=Hi(r);if(a={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null},Sg(r))Ag(s,a);else if(a=tg(r,s,a,d),a!==null){var h=an();hr(a,r,d,h),Cg(a,s,d)}}function R0(r,s,a){var d=Hi(r),h={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sg(r))Ag(s,h);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var w=s.lastRenderedState,x=g(w,a);if(h.hasEagerState=!0,h.eagerState=x,ar(x,w)){var D=s.interleaved;D===null?(h.next=h,sh(s)):(h.next=D.next,D.next=h),s.interleaved=h;return}}catch{}finally{}a=tg(r,s,h,d),a!==null&&(h=an(),hr(a,r,d,h),Cg(a,s,d))}}function Sg(r){var s=r.alternate;return r===ht||s!==null&&s===ht}function Ag(r,s){Ya=Bu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Cg(r,s,a){if((a&4194240)!==0){var d=s.lanes;d&=r.pendingLanes,a|=d,s.lanes=a,Pi(r,a)}}var Hu={readContext:zn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},k0={readContext:zn,useCallback:function(r,s){return Pr().memoizedState=[r,s===void 0?null:s],r},useContext:zn,useEffect:mg,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,$u(4194308,4,vg.bind(null,s,r),a)},useLayoutEffect:function(r,s){return $u(4194308,4,r,s)},useInsertionEffect:function(r,s){return $u(4,2,r,s)},useMemo:function(r,s){var a=Pr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var d=Pr();return s=a!==void 0?a(s):s,d.memoizedState=d.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},d.queue=r,r=r.dispatch=C0.bind(null,ht,r),[d.memoizedState,r]},useRef:function(r){var s=Pr();return r={current:r},s.memoizedState=r},useState:fg,useDebugValue:vh,useDeferredValue:function(r){return Pr().memoizedState=r},useTransition:function(){var r=fg(!1),s=r[0];return r=A0.bind(null,r[1]),Pr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var d=ht,h=Pr();if(ut){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Lt===null)throw Error(t(349));(js&30)!==0||lg(d,s,a)}h.memoizedState=a;var g={value:a,getSnapshot:s};return h.queue=g,mg(cg.bind(null,d,g,r),[r]),d.flags|=2048,el(9,ug.bind(null,d,g,a,s),void 0,null),a},useId:function(){var r=Pr(),s=Lt.identifierPrefix;if(ut){var a=ti,d=ei;a=(d&~(1<<32-rn(d)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ja++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=S0++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},P0={readContext:zn,useCallback:wg,useContext:zn,useEffect:yh,useImperativeHandle:_g,useInsertionEffect:gg,useLayoutEffect:yg,useMemo:Eg,useReducer:mh,useRef:pg,useState:function(){return mh(Za)},useDebugValue:vh,useDeferredValue:function(r){var s=Hn();return Tg(s,Nt.memoizedState,r)},useTransition:function(){var r=mh(Za)[0],s=Hn().memoizedState;return[r,s]},useMutableSource:og,useSyncExternalStore:ag,useId:Ig,unstable_isNewReconciler:!1},x0={readContext:zn,useCallback:wg,useContext:zn,useEffect:yh,useImperativeHandle:_g,useInsertionEffect:gg,useLayoutEffect:yg,useMemo:Eg,useReducer:gh,useRef:pg,useState:function(){return gh(Za)},useDebugValue:vh,useDeferredValue:function(r){var s=Hn();return Nt===null?s.memoizedState=r:Tg(s,Nt.memoizedState,r)},useTransition:function(){var r=gh(Za)[0],s=Hn().memoizedState;return[r,s]},useMutableSource:og,useSyncExternalStore:ag,useId:Ig,unstable_isNewReconciler:!1};function ur(r,s){if(r&&r.defaultProps){s=Y({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function _h(r,s,a,d){s=r.memoizedState,a=a(d,s),a=a==null?s:Y({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var qu={isMounted:function(r){return(r=r._reactInternals)?er(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var d=an(),h=Hi(r),g=ri(d,h);g.payload=s,a!=null&&(g.callback=a),s=Fi(r,g,h),s!==null&&(hr(s,r,h,d),Mu(s,r,h))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var d=an(),h=Hi(r),g=ri(d,h);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=Fi(r,g,h),s!==null&&(hr(s,r,h,d),Mu(s,r,h))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=an(),d=Hi(r),h=ri(a,d);h.tag=2,s!=null&&(h.callback=s),s=Fi(r,h,d),s!==null&&(hr(s,r,d,a),Mu(s,r,d))}};function Rg(r,s,a,d,h,g,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(d,g,w):s.prototype&&s.prototype.isPureReactComponent?!Fa(a,d)||!Fa(h,g):!0}function kg(r,s,a){var d=!1,h=Mi,g=s.contextType;return typeof g=="object"&&g!==null?g=zn(g):(h=pn(s)?Ds:Gt.current,d=s.contextTypes,g=(d=d!=null)?Fo(r,h):Mi),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=qu,r.stateNode=s,s._reactInternals=r,d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=h,r.__reactInternalMemoizedMaskedChildContext=g),s}function Pg(r,s,a,d){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,d),s.state!==r&&qu.enqueueReplaceState(s,s.state,null)}function wh(r,s,a,d){var h=r.stateNode;h.props=a,h.state=r.memoizedState,h.refs={},oh(r);var g=s.contextType;typeof g=="object"&&g!==null?h.context=zn(g):(g=pn(s)?Ds:Gt.current,h.context=Fo(r,g)),h.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(_h(r,s,g,a),h.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(s=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),s!==h.state&&qu.enqueueReplaceState(h,h.state,null),ju(r,a,h,d),h.state=r.memoizedState),typeof h.componentDidMount=="function"&&(r.flags|=4194308)}function Go(r,s){try{var a="",d=s;do a+=Oe(d),d=d.return;while(d);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:h,digest:null}}function Eh(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function Th(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var N0=typeof WeakMap=="function"?WeakMap:Map;function xg(r,s,a){a=ri(-1,a),a.tag=3,a.payload={element:null};var d=s.value;return a.callback=function(){Ju||(Ju=!0,Mh=d),Th(r,s)},a}function Ng(r,s,a){a=ri(-1,a),a.tag=3;var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var h=s.value;a.payload=function(){return d(h)},a.callback=function(){Th(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Th(r,s),typeof d!="function"&&($i===null?$i=new Set([this]):$i.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function bg(r,s,a){var d=r.pingCache;if(d===null){d=r.pingCache=new N0;var h=new Set;d.set(s,h)}else h=d.get(s),h===void 0&&(h=new Set,d.set(s,h));h.has(a)||(h.add(a),r=q0.bind(null,r,s,a),s.then(r,r))}function Dg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Og(r,s,a,d,h){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=ri(-1,1),s.tag=2,Fi(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=h,r)}var b0=H.ReactCurrentOwner,mn=!1;function on(r,s,a,d){s.child=r===null?eg(s,null,a,d):Ho(s,r.child,a,d)}function Vg(r,s,a,d,h){a=a.render;var g=s.ref;return Wo(s,h),d=fh(r,s,a,d,g,h),a=ph(),r!==null&&!mn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~h,ii(r,s,h)):(ut&&a&&Xd(s),s.flags|=1,on(r,s,d,h),s.child)}function Lg(r,s,a,d,h){if(r===null){var g=a.type;return typeof g=="function"&&!Hh(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,Mg(r,s,g,d,h)):(r=ic(a.type,null,d,s,s.mode,h),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&h)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:Fa,a(w,d)&&r.ref===s.ref)return ii(r,s,h)}return s.flags|=1,r=Wi(g,d),r.ref=s.ref,r.return=s,s.child=r}function Mg(r,s,a,d,h){if(r!==null){var g=r.memoizedProps;if(Fa(g,d)&&r.ref===s.ref)if(mn=!1,s.pendingProps=d=g,(r.lanes&h)!==0)(r.flags&131072)!==0&&(mn=!0);else return s.lanes=r.lanes,ii(r,s,h)}return Ih(r,s,a,d,h)}function jg(r,s,a){var d=s.pendingProps,h=d.children,g=r!==null?r.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(Xo,xn),xn|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,it(Xo,xn),xn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=g!==null?g.baseLanes:a,it(Xo,xn),xn|=d}else g!==null?(d=g.baseLanes|a,s.memoizedState=null):d=a,it(Xo,xn),xn|=d;return on(r,s,h,a),s.child}function Ug(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Ih(r,s,a,d,h){var g=pn(a)?Ds:Gt.current;return g=Fo(s,g),Wo(s,h),a=fh(r,s,a,d,g,h),d=ph(),r!==null&&!mn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~h,ii(r,s,h)):(ut&&d&&Xd(s),s.flags|=1,on(r,s,a,h),s.child)}function Fg(r,s,a,d,h){if(pn(a)){var g=!0;Pu(s)}else g=!1;if(Wo(s,h),s.stateNode===null)Ku(r,s),kg(s,a,d),wh(s,a,d,h),d=!0;else if(r===null){var w=s.stateNode,x=s.memoizedProps;w.props=x;var D=w.context,W=a.contextType;typeof W=="object"&&W!==null?W=zn(W):(W=pn(a)?Ds:Gt.current,W=Fo(s,W));var se=a.getDerivedStateFromProps,oe=typeof se=="function"||typeof w.getSnapshotBeforeUpdate=="function";oe||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(x!==d||D!==W)&&Pg(s,w,d,W),Ui=!1;var ie=s.memoizedState;w.state=ie,ju(s,d,w,h),D=s.memoizedState,x!==d||ie!==D||fn.current||Ui?(typeof se=="function"&&(_h(s,a,se,d),D=s.memoizedState),(x=Ui||Rg(s,a,x,d,ie,D,W))?(oe||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=D),w.props=d,w.state=D,w.context=W,d=x):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{w=s.stateNode,ng(r,s),x=s.memoizedProps,W=s.type===s.elementType?x:ur(s.type,x),w.props=W,oe=s.pendingProps,ie=w.context,D=a.contextType,typeof D=="object"&&D!==null?D=zn(D):(D=pn(a)?Ds:Gt.current,D=Fo(s,D));var ve=a.getDerivedStateFromProps;(se=typeof ve=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(x!==oe||ie!==D)&&Pg(s,w,d,D),Ui=!1,ie=s.memoizedState,w.state=ie,ju(s,d,w,h);var Te=s.memoizedState;x!==oe||ie!==Te||fn.current||Ui?(typeof ve=="function"&&(_h(s,a,ve,d),Te=s.memoizedState),(W=Ui||Rg(s,a,W,d,ie,Te,D)||!1)?(se||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(d,Te,D),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(d,Te,D)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||x===r.memoizedProps&&ie===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||x===r.memoizedProps&&ie===r.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=Te),w.props=d,w.state=Te,w.context=D,d=W):(typeof w.componentDidUpdate!="function"||x===r.memoizedProps&&ie===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||x===r.memoizedProps&&ie===r.memoizedState||(s.flags|=1024),d=!1)}return Sh(r,s,a,d,g,h)}function Sh(r,s,a,d,h,g){Ug(r,s);var w=(s.flags&128)!==0;if(!d&&!w)return h&&qm(s,a,!1),ii(r,s,g);d=s.stateNode,b0.current=s;var x=w&&typeof a.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,r!==null&&w?(s.child=Ho(s,r.child,null,g),s.child=Ho(s,null,x,g)):on(r,s,x,g),s.memoizedState=d.state,h&&qm(s,a,!0),s.child}function Bg(r){var s=r.stateNode;s.pendingContext?zm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&zm(r,s.context,!1),ah(r,s.containerInfo)}function $g(r,s,a,d,h){return zo(),eh(h),s.flags|=256,on(r,s,a,d),s.child}var Ah={dehydrated:null,treeContext:null,retryLane:0};function Ch(r){return{baseLanes:r,cachePool:null,transitions:null}}function zg(r,s,a){var d=s.pendingProps,h=dt.current,g=!1,w=(s.flags&128)!==0,x;if((x=w)||(x=r!==null&&r.memoizedState===null?!1:(h&2)!==0),x?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(h|=1),it(dt,h&1),r===null)return Zd(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=d.children,r=d.fallback,g?(d=s.mode,g=s.child,w={mode:"hidden",children:w},(d&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=sc(w,d,0,null),r=zs(r,d,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=Ch(a),s.memoizedState=Ah,r):Rh(s,w));if(h=r.memoizedState,h!==null&&(x=h.dehydrated,x!==null))return D0(r,s,w,d,x,h,a);if(g){g=d.fallback,w=s.mode,h=r.child,x=h.sibling;var D={mode:"hidden",children:d.children};return(w&1)===0&&s.child!==h?(d=s.child,d.childLanes=0,d.pendingProps=D,s.deletions=null):(d=Wi(h,D),d.subtreeFlags=h.subtreeFlags&14680064),x!==null?g=Wi(x,g):(g=zs(g,w,a,null),g.flags|=2),g.return=s,d.return=s,d.sibling=g,s.child=d,d=g,g=s.child,w=r.child.memoizedState,w=w===null?Ch(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=r.childLanes&~a,s.memoizedState=Ah,d}return g=r.child,r=g.sibling,d=Wi(g,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=a),d.return=s,d.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=d,s.memoizedState=null,d}function Rh(r,s){return s=sc({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Wu(r,s,a,d){return d!==null&&eh(d),Ho(s,r.child,null,a),r=Rh(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function D0(r,s,a,d,h,g,w){if(a)return s.flags&256?(s.flags&=-257,d=Eh(Error(t(422))),Wu(r,s,w,d)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=d.fallback,h=s.mode,d=sc({mode:"visible",children:d.children},h,0,null),g=zs(g,h,w,null),g.flags|=2,d.return=s,g.return=s,d.sibling=g,s.child=d,(s.mode&1)!==0&&Ho(s,r.child,null,w),s.child.memoizedState=Ch(w),s.memoizedState=Ah,g);if((s.mode&1)===0)return Wu(r,s,w,null);if(h.data==="$!"){if(d=h.nextSibling&&h.nextSibling.dataset,d)var x=d.dgst;return d=x,g=Error(t(419)),d=Eh(g,d,void 0),Wu(r,s,w,d)}if(x=(w&r.childLanes)!==0,mn||x){if(d=Lt,d!==null){switch(w&-w){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(d.suspendedLanes|w))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,ni(r,h),hr(d,r,h,-1))}return zh(),d=Eh(Error(t(421))),Wu(r,s,w,d)}return h.data==="$?"?(s.flags|=128,s.child=r.child,s=W0.bind(null,r),h._reactRetry=s,null):(r=g.treeContext,Pn=Vi(h.nextSibling),kn=s,ut=!0,lr=null,r!==null&&(Bn[$n++]=ei,Bn[$n++]=ti,Bn[$n++]=Os,ei=r.id,ti=r.overflow,Os=s),s=Rh(s,d.children),s.flags|=4096,s)}function Hg(r,s,a){r.lanes|=s;var d=r.alternate;d!==null&&(d.lanes|=s),ih(r.return,s,a)}function kh(r,s,a,d,h){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:a,tailMode:h}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=a,g.tailMode=h)}function qg(r,s,a){var d=s.pendingProps,h=d.revealOrder,g=d.tail;if(on(r,s,d.children,a),d=dt.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Hg(r,a,s);else if(r.tag===19)Hg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}d&=1}if(it(dt,d),(s.mode&1)===0)s.memoizedState=null;else switch(h){case"forwards":for(a=s.child,h=null;a!==null;)r=a.alternate,r!==null&&Uu(r)===null&&(h=a),a=a.sibling;a=h,a===null?(h=s.child,s.child=null):(h=a.sibling,a.sibling=null),kh(s,!1,h,a,g);break;case"backwards":for(a=null,h=s.child,s.child=null;h!==null;){if(r=h.alternate,r!==null&&Uu(r)===null){s.child=h;break}r=h.sibling,h.sibling=a,a=h,h=r}kh(s,!0,a,null,g);break;case"together":kh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Ku(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function ii(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),Us|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=Wi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=Wi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function O0(r,s,a){switch(s.tag){case 3:Bg(s),zo();break;case 5:sg(s);break;case 1:pn(s.type)&&Pu(s);break;case 4:ah(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,h=s.memoizedProps.value;it(Vu,d._currentValue),d._currentValue=h;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(it(dt,dt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?zg(r,s,a):(it(dt,dt.current&1),r=ii(r,s,a),r!==null?r.sibling:null);it(dt,dt.current&1);break;case 19:if(d=(a&s.childLanes)!==0,(r.flags&128)!==0){if(d)return qg(r,s,a);s.flags|=128}if(h=s.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),it(dt,dt.current),d)break;return null;case 22:case 23:return s.lanes=0,jg(r,s,a)}return ii(r,s,a)}var Wg,Ph,Kg,Gg;Wg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ph=function(){},Kg=function(r,s,a,d){var h=r.memoizedProps;if(h!==d){r=s.stateNode,Ms(kr.current);var g=null;switch(a){case"input":h=vr(r,h),d=vr(r,d),g=[];break;case"select":h=Y({},h,{value:void 0}),d=Y({},d,{value:void 0}),g=[];break;case"textarea":h=Xn(r,h),d=Xn(r,d),g=[];break;default:typeof h.onClick!="function"&&typeof d.onClick=="function"&&(r.onclick=Cu)}Ii(a,d);var w;a=null;for(W in h)if(!d.hasOwnProperty(W)&&h.hasOwnProperty(W)&&h[W]!=null)if(W==="style"){var x=h[W];for(w in x)x.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else W!=="dangerouslySetInnerHTML"&&W!=="children"&&W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&W!=="autoFocus"&&(o.hasOwnProperty(W)?g||(g=[]):(g=g||[]).push(W,null));for(W in d){var D=d[W];if(x=h!=null?h[W]:void 0,d.hasOwnProperty(W)&&D!==x&&(D!=null||x!=null))if(W==="style")if(x){for(w in x)!x.hasOwnProperty(w)||D&&D.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in D)D.hasOwnProperty(w)&&x[w]!==D[w]&&(a||(a={}),a[w]=D[w])}else a||(g||(g=[]),g.push(W,a)),a=D;else W==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,x=x?x.__html:void 0,D!=null&&x!==D&&(g=g||[]).push(W,D)):W==="children"?typeof D!="string"&&typeof D!="number"||(g=g||[]).push(W,""+D):W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&(o.hasOwnProperty(W)?(D!=null&&W==="onScroll"&&ot("scroll",r),g||x===D||(g=[])):(g=g||[]).push(W,D))}a&&(g=g||[]).push("style",a);var W=g;(s.updateQueue=W)&&(s.flags|=4)}},Gg=function(r,s,a,d){a!==d&&(s.flags|=4)};function tl(r,s){if(!ut)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:d.sibling=null}}function Xt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,d=0;if(s)for(var h=r.child;h!==null;)a|=h.lanes|h.childLanes,d|=h.subtreeFlags&14680064,d|=h.flags&14680064,h.return=r,h=h.sibling;else for(h=r.child;h!==null;)a|=h.lanes|h.childLanes,d|=h.subtreeFlags,d|=h.flags,h.return=r,h=h.sibling;return r.subtreeFlags|=d,r.childLanes=a,s}function V0(r,s,a){var d=s.pendingProps;switch(Yd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(s),null;case 1:return pn(s.type)&&ku(),Xt(s),null;case 3:return d=s.stateNode,Ko(),at(fn),at(Gt),ch(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(r===null||r.child===null)&&(Du(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,lr!==null&&(Fh(lr),lr=null))),Ph(r,s),Xt(s),null;case 5:lh(s);var h=Ms(Xa.current);if(a=s.type,r!==null&&s.stateNode!=null)Kg(r,s,a,d,h),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return Xt(s),null}if(r=Ms(kr.current),Du(s)){d=s.stateNode,a=s.type;var g=s.memoizedProps;switch(d[Rr]=s,d[qa]=g,r=(s.mode&1)!==0,a){case"dialog":ot("cancel",d),ot("close",d);break;case"iframe":case"object":case"embed":ot("load",d);break;case"video":case"audio":for(h=0;h<$a.length;h++)ot($a[h],d);break;case"source":ot("error",d);break;case"img":case"image":case"link":ot("error",d),ot("load",d);break;case"details":ot("toggle",d);break;case"input":vi(d,g),ot("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!g.multiple},ot("invalid",d);break;case"textarea":zr(d,g),ot("invalid",d)}Ii(a,g),h=null;for(var w in g)if(g.hasOwnProperty(w)){var x=g[w];w==="children"?typeof x=="string"?d.textContent!==x&&(g.suppressHydrationWarning!==!0&&Au(d.textContent,x,r),h=["children",x]):typeof x=="number"&&d.textContent!==""+x&&(g.suppressHydrationWarning!==!0&&Au(d.textContent,x,r),h=["children",""+x]):o.hasOwnProperty(w)&&x!=null&&w==="onScroll"&&ot("scroll",d)}switch(a){case"input":Tn(d),po(d,g,!0);break;case"textarea":Tn(d),wi(d);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(d.onclick=Cu)}d=h,s.updateQueue=d,d!==null&&(s.flags|=4)}else{w=h.nodeType===9?h:h.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ct(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof d.is=="string"?r=w.createElement(a,{is:d.is}):(r=w.createElement(a),a==="select"&&(w=r,d.multiple?w.multiple=!0:d.size&&(w.size=d.size))):r=w.createElementNS(r,a),r[Rr]=s,r[qa]=d,Wg(r,s,!1,!1),s.stateNode=r;e:{switch(w=z(a,d),a){case"dialog":ot("cancel",r),ot("close",r),h=d;break;case"iframe":case"object":case"embed":ot("load",r),h=d;break;case"video":case"audio":for(h=0;h<$a.length;h++)ot($a[h],r);h=d;break;case"source":ot("error",r),h=d;break;case"img":case"image":case"link":ot("error",r),ot("load",r),h=d;break;case"details":ot("toggle",r),h=d;break;case"input":vi(r,d),h=vr(r,d),ot("invalid",r);break;case"option":h=d;break;case"select":r._wrapperState={wasMultiple:!!d.multiple},h=Y({},d,{value:void 0}),ot("invalid",r);break;case"textarea":zr(r,d),h=Xn(r,d),ot("invalid",r);break;default:h=d}Ii(a,h),x=h;for(g in x)if(x.hasOwnProperty(g)){var D=x[g];g==="style"?ws(r,D):g==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,D!=null&&Ei(r,D)):g==="children"?typeof D=="string"?(a!=="textarea"||D!=="")&&wr(r,D):typeof D=="number"&&wr(r,""+D):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?D!=null&&g==="onScroll"&&ot("scroll",r):D!=null&&X(r,g,D,w))}switch(a){case"input":Tn(r),po(r,d,!1);break;case"textarea":Tn(r),wi(r);break;case"option":d.value!=null&&r.setAttribute("value",""+He(d.value));break;case"select":r.multiple=!!d.multiple,g=d.value,g!=null?Ln(r,!!d.multiple,g,!1):d.defaultValue!=null&&Ln(r,!!d.multiple,d.defaultValue,!0);break;default:typeof h.onClick=="function"&&(r.onclick=Cu)}switch(a){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Xt(s),null;case 6:if(r&&s.stateNode!=null)Gg(r,s,r.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(a=Ms(Xa.current),Ms(kr.current),Du(s)){if(d=s.stateNode,a=s.memoizedProps,d[Rr]=s,(g=d.nodeValue!==a)&&(r=kn,r!==null))switch(r.tag){case 3:Au(d.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Au(d.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else d=(a.nodeType===9?a:a.ownerDocument).createTextNode(d),d[Rr]=s,s.stateNode=d}return Xt(s),null;case 13:if(at(dt),d=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(ut&&Pn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Ym(),zo(),s.flags|=98560,g=!1;else if(g=Du(s),d!==null&&d.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Rr]=s}else zo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Xt(s),g=!1}else lr!==null&&(Fh(lr),lr=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(d=d!==null,d!==(r!==null&&r.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(dt.current&1)!==0?bt===0&&(bt=3):zh())),s.updateQueue!==null&&(s.flags|=4),Xt(s),null);case 4:return Ko(),Ph(r,s),r===null&&za(s.stateNode.containerInfo),Xt(s),null;case 10:return rh(s.type._context),Xt(s),null;case 17:return pn(s.type)&&ku(),Xt(s),null;case 19:if(at(dt),g=s.memoizedState,g===null)return Xt(s),null;if(d=(s.flags&128)!==0,w=g.rendering,w===null)if(d)tl(g,!1);else{if(bt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(w=Uu(r),w!==null){for(s.flags|=128,tl(g,!1),d=w.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=a,a=s.child;a!==null;)g=a,r=d,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,r=w.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return it(dt,dt.current&1|2),s.child}r=r.sibling}g.tail!==null&&rt()>Yo&&(s.flags|=128,d=!0,tl(g,!1),s.lanes=4194304)}else{if(!d)if(r=Uu(w),r!==null){if(s.flags|=128,d=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),tl(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!ut)return Xt(s),null}else 2*rt()-g.renderingStartTime>Yo&&a!==1073741824&&(s.flags|=128,d=!0,tl(g,!1),s.lanes=4194304);g.isBackwards?(w.sibling=s.child,s.child=w):(a=g.last,a!==null?a.sibling=w:s.child=w,g.last=w)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=rt(),s.sibling=null,a=dt.current,it(dt,d?a&1|2:a&1),s):(Xt(s),null);case 22:case 23:return $h(),d=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(xn&1073741824)!==0&&(Xt(s),s.subtreeFlags&6&&(s.flags|=8192)):Xt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function L0(r,s){switch(Yd(s),s.tag){case 1:return pn(s.type)&&ku(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Ko(),at(fn),at(Gt),ch(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return lh(s),null;case 13:if(at(dt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));zo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return at(dt),null;case 4:return Ko(),null;case 10:return rh(s.type._context),null;case 22:case 23:return $h(),null;case 24:return null;default:return null}}var Gu=!1,Yt=!1,M0=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Qo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(d){mt(r,s,d)}else a.current=null}function xh(r,s,a){try{a()}catch(d){mt(r,s,d)}}var Qg=!1;function j0(r,s){if($d=bi,r=Rm(),Od(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var d=a.getSelection&&a.getSelection();if(d&&d.rangeCount!==0){a=d.anchorNode;var h=d.anchorOffset,g=d.focusNode;d=d.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,x=-1,D=-1,W=0,se=0,oe=r,ie=null;t:for(;;){for(var ve;oe!==a||h!==0&&oe.nodeType!==3||(x=w+h),oe!==g||d!==0&&oe.nodeType!==3||(D=w+d),oe.nodeType===3&&(w+=oe.nodeValue.length),(ve=oe.firstChild)!==null;)ie=oe,oe=ve;for(;;){if(oe===r)break t;if(ie===a&&++W===h&&(x=w),ie===g&&++se===d&&(D=w),(ve=oe.nextSibling)!==null)break;oe=ie,ie=oe.parentNode}oe=ve}a=x===-1||D===-1?null:{start:x,end:D}}else a=null}a=a||{start:0,end:0}}else a=null;for(zd={focusedElem:r,selectionRange:a},bi=!1,Ee=s;Ee!==null;)if(s=Ee,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,Ee=r;else for(;Ee!==null;){s=Ee;try{var Te=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Te!==null){var Ie=Te.memoizedProps,wt=Te.memoizedState,U=s.stateNode,M=U.getSnapshotBeforeUpdate(s.elementType===s.type?Ie:ur(s.type,Ie),wt);U.__reactInternalSnapshotBeforeUpdate=M}break;case 3:var F=s.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ue){mt(s,s.return,ue)}if(r=s.sibling,r!==null){r.return=s.return,Ee=r;break}Ee=s.return}return Te=Qg,Qg=!1,Te}function nl(r,s,a){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var h=d=d.next;do{if((h.tag&r)===r){var g=h.destroy;h.destroy=void 0,g!==void 0&&xh(s,a,g)}h=h.next}while(h!==d)}}function Qu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var d=a.create;a.destroy=d()}a=a.next}while(a!==s)}}function Nh(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Xg(r){var s=r.alternate;s!==null&&(r.alternate=null,Xg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Rr],delete s[qa],delete s[Kd],delete s[w0],delete s[E0])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Yg(r){return r.tag===5||r.tag===3||r.tag===4}function Jg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Yg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function bh(r,s,a){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Cu));else if(d!==4&&(r=r.child,r!==null))for(bh(r,s,a),r=r.sibling;r!==null;)bh(r,s,a),r=r.sibling}function Dh(r,s,a){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(d!==4&&(r=r.child,r!==null))for(Dh(r,s,a),r=r.sibling;r!==null;)Dh(r,s,a),r=r.sibling}var zt=null,cr=!1;function Bi(r,s,a){for(a=a.child;a!==null;)Zg(r,s,a),a=a.sibling}function Zg(r,s,a){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(As,a)}catch{}switch(a.tag){case 5:Yt||Qo(a,s);case 6:var d=zt,h=cr;zt=null,Bi(r,s,a),zt=d,cr=h,zt!==null&&(cr?(r=zt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):zt.removeChild(a.stateNode));break;case 18:zt!==null&&(cr?(r=zt,a=a.stateNode,r.nodeType===8?Wd(r.parentNode,a):r.nodeType===1&&Wd(r,a),sr(r)):Wd(zt,a.stateNode));break;case 4:d=zt,h=cr,zt=a.stateNode.containerInfo,cr=!0,Bi(r,s,a),zt=d,cr=h;break;case 0:case 11:case 14:case 15:if(!Yt&&(d=a.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){h=d=d.next;do{var g=h,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&xh(a,s,w),h=h.next}while(h!==d)}Bi(r,s,a);break;case 1:if(!Yt&&(Qo(a,s),d=a.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=a.memoizedProps,d.state=a.memoizedState,d.componentWillUnmount()}catch(x){mt(a,s,x)}Bi(r,s,a);break;case 21:Bi(r,s,a);break;case 22:a.mode&1?(Yt=(d=Yt)||a.memoizedState!==null,Bi(r,s,a),Yt=d):Bi(r,s,a);break;default:Bi(r,s,a)}}function ey(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new M0),s.forEach(function(d){var h=K0.bind(null,r,d);a.has(d)||(a.add(d),d.then(h,h))})}}function dr(r,s){var a=s.deletions;if(a!==null)for(var d=0;d<a.length;d++){var h=a[d];try{var g=r,w=s,x=w;e:for(;x!==null;){switch(x.tag){case 5:zt=x.stateNode,cr=!1;break e;case 3:zt=x.stateNode.containerInfo,cr=!0;break e;case 4:zt=x.stateNode.containerInfo,cr=!0;break e}x=x.return}if(zt===null)throw Error(t(160));Zg(g,w,h),zt=null,cr=!1;var D=h.alternate;D!==null&&(D.return=null),h.return=null}catch(W){mt(h,s,W)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)ty(s,r),s=s.sibling}function ty(r,s){var a=r.alternate,d=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(dr(s,r),xr(r),d&4){try{nl(3,r,r.return),Qu(3,r)}catch(Ie){mt(r,r.return,Ie)}try{nl(5,r,r.return)}catch(Ie){mt(r,r.return,Ie)}}break;case 1:dr(s,r),xr(r),d&512&&a!==null&&Qo(a,a.return);break;case 5:if(dr(s,r),xr(r),d&512&&a!==null&&Qo(a,a.return),r.flags&32){var h=r.stateNode;try{wr(h,"")}catch(Ie){mt(r,r.return,Ie)}}if(d&4&&(h=r.stateNode,h!=null)){var g=r.memoizedProps,w=a!==null?a.memoizedProps:g,x=r.type,D=r.updateQueue;if(r.updateQueue=null,D!==null)try{x==="input"&&g.type==="radio"&&g.name!=null&&_i(h,g),z(x,w);var W=z(x,g);for(w=0;w<D.length;w+=2){var se=D[w],oe=D[w+1];se==="style"?ws(h,oe):se==="dangerouslySetInnerHTML"?Ei(h,oe):se==="children"?wr(h,oe):X(h,se,oe,W)}switch(x){case"input":_r(h,g);break;case"textarea":Hr(h,g);break;case"select":var ie=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var ve=g.value;ve!=null?Ln(h,!!g.multiple,ve,!1):ie!==!!g.multiple&&(g.defaultValue!=null?Ln(h,!!g.multiple,g.defaultValue,!0):Ln(h,!!g.multiple,g.multiple?[]:"",!1))}h[qa]=g}catch(Ie){mt(r,r.return,Ie)}}break;case 6:if(dr(s,r),xr(r),d&4){if(r.stateNode===null)throw Error(t(162));h=r.stateNode,g=r.memoizedProps;try{h.nodeValue=g}catch(Ie){mt(r,r.return,Ie)}}break;case 3:if(dr(s,r),xr(r),d&4&&a!==null&&a.memoizedState.isDehydrated)try{sr(s.containerInfo)}catch(Ie){mt(r,r.return,Ie)}break;case 4:dr(s,r),xr(r);break;case 13:dr(s,r),xr(r),h=r.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(Lh=rt())),d&4&&ey(r);break;case 22:if(se=a!==null&&a.memoizedState!==null,r.mode&1?(Yt=(W=Yt)||se,dr(s,r),Yt=W):dr(s,r),xr(r),d&8192){if(W=r.memoizedState!==null,(r.stateNode.isHidden=W)&&!se&&(r.mode&1)!==0)for(Ee=r,se=r.child;se!==null;){for(oe=Ee=se;Ee!==null;){switch(ie=Ee,ve=ie.child,ie.tag){case 0:case 11:case 14:case 15:nl(4,ie,ie.return);break;case 1:Qo(ie,ie.return);var Te=ie.stateNode;if(typeof Te.componentWillUnmount=="function"){d=ie,a=ie.return;try{s=d,Te.props=s.memoizedProps,Te.state=s.memoizedState,Te.componentWillUnmount()}catch(Ie){mt(d,a,Ie)}}break;case 5:Qo(ie,ie.return);break;case 22:if(ie.memoizedState!==null){iy(oe);continue}}ve!==null?(ve.return=ie,Ee=ve):iy(oe)}se=se.sibling}e:for(se=null,oe=r;;){if(oe.tag===5){if(se===null){se=oe;try{h=oe.stateNode,W?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(x=oe.stateNode,D=oe.memoizedProps.style,w=D!=null&&D.hasOwnProperty("display")?D.display:null,x.style.display=_s("display",w))}catch(Ie){mt(r,r.return,Ie)}}}else if(oe.tag===6){if(se===null)try{oe.stateNode.nodeValue=W?"":oe.memoizedProps}catch(Ie){mt(r,r.return,Ie)}}else if((oe.tag!==22&&oe.tag!==23||oe.memoizedState===null||oe===r)&&oe.child!==null){oe.child.return=oe,oe=oe.child;continue}if(oe===r)break e;for(;oe.sibling===null;){if(oe.return===null||oe.return===r)break e;se===oe&&(se=null),oe=oe.return}se===oe&&(se=null),oe.sibling.return=oe.return,oe=oe.sibling}}break;case 19:dr(s,r),xr(r),d&4&&ey(r);break;case 21:break;default:dr(s,r),xr(r)}}function xr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Yg(a)){var d=a;break e}a=a.return}throw Error(t(160))}switch(d.tag){case 5:var h=d.stateNode;d.flags&32&&(wr(h,""),d.flags&=-33);var g=Jg(r);Dh(r,g,h);break;case 3:case 4:var w=d.stateNode.containerInfo,x=Jg(r);bh(r,x,w);break;default:throw Error(t(161))}}catch(D){mt(r,r.return,D)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function U0(r,s,a){Ee=r,ny(r)}function ny(r,s,a){for(var d=(r.mode&1)!==0;Ee!==null;){var h=Ee,g=h.child;if(h.tag===22&&d){var w=h.memoizedState!==null||Gu;if(!w){var x=h.alternate,D=x!==null&&x.memoizedState!==null||Yt;x=Gu;var W=Yt;if(Gu=w,(Yt=D)&&!W)for(Ee=h;Ee!==null;)w=Ee,D=w.child,w.tag===22&&w.memoizedState!==null?sy(h):D!==null?(D.return=w,Ee=D):sy(h);for(;g!==null;)Ee=g,ny(g),g=g.sibling;Ee=h,Gu=x,Yt=W}ry(r)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Ee=g):ry(r)}}function ry(r){for(;Ee!==null;){var s=Ee;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Yt||Qu(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!Yt)if(a===null)d.componentDidMount();else{var h=s.elementType===s.type?a.memoizedProps:ur(s.type,a.memoizedProps);d.componentDidUpdate(h,a.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&ig(s,g,d);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}ig(s,w,a)}break;case 5:var x=s.stateNode;if(a===null&&s.flags&4){a=x;var D=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":D.autoFocus&&a.focus();break;case"img":D.src&&(a.src=D.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var W=s.alternate;if(W!==null){var se=W.memoizedState;if(se!==null){var oe=se.dehydrated;oe!==null&&sr(oe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Yt||s.flags&512&&Nh(s)}catch(ie){mt(s,s.return,ie)}}if(s===r){Ee=null;break}if(a=s.sibling,a!==null){a.return=s.return,Ee=a;break}Ee=s.return}}function iy(r){for(;Ee!==null;){var s=Ee;if(s===r){Ee=null;break}var a=s.sibling;if(a!==null){a.return=s.return,Ee=a;break}Ee=s.return}}function sy(r){for(;Ee!==null;){var s=Ee;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Qu(4,s)}catch(D){mt(s,a,D)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var h=s.return;try{d.componentDidMount()}catch(D){mt(s,h,D)}}var g=s.return;try{Nh(s)}catch(D){mt(s,g,D)}break;case 5:var w=s.return;try{Nh(s)}catch(D){mt(s,w,D)}}}catch(D){mt(s,s.return,D)}if(s===r){Ee=null;break}var x=s.sibling;if(x!==null){x.return=s.return,Ee=x;break}Ee=s.return}}var F0=Math.ceil,Xu=H.ReactCurrentDispatcher,Oh=H.ReactCurrentOwner,qn=H.ReactCurrentBatchConfig,Ge=0,Lt=null,Ct=null,Ht=0,xn=0,Xo=Li(0),bt=0,rl=null,Us=0,Yu=0,Vh=0,il=null,gn=null,Lh=0,Yo=1/0,si=null,Ju=!1,Mh=null,$i=null,Zu=!1,zi=null,ec=0,sl=0,jh=null,tc=-1,nc=0;function an(){return(Ge&6)!==0?rt():tc!==-1?tc:tc=rt()}function Hi(r){return(r.mode&1)===0?1:(Ge&2)!==0&&Ht!==0?Ht&-Ht:I0.transition!==null?(nc===0&&(nc=Rs()),nc):(r=qe,r!==0||(r=window.event,r=r===void 0?16:Da(r.type)),r)}function hr(r,s,a,d){if(50<sl)throw sl=0,jh=null,Error(t(185));ki(r,a,d),((Ge&2)===0||r!==Lt)&&(r===Lt&&((Ge&2)===0&&(Yu|=a),bt===4&&qi(r,Ht)),yn(r,d),a===1&&Ge===0&&(s.mode&1)===0&&(Yo=rt()+500,xu&&ji()))}function yn(r,s){var a=r.callbackNode;Kr(r,s);var d=Cs(r,r===Lt?Ht:0);if(d===0)a!==null&&ka(a),r.callbackNode=null,r.callbackPriority=0;else if(s=d&-d,r.callbackPriority!==s){if(a!=null&&ka(a),s===1)r.tag===0?T0(ay.bind(null,r)):Wm(ay.bind(null,r)),v0(function(){(Ge&6)===0&&ji()}),a=null;else{switch(xi(d)){case 1:a=Ss;break;case 4:a=Ai;break;case 16:a=jn;break;case 536870912:a=nu;break;default:a=jn}a=my(a,oy.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function oy(r,s){if(tc=-1,nc=0,(Ge&6)!==0)throw Error(t(327));var a=r.callbackNode;if(Jo()&&r.callbackNode!==a)return null;var d=Cs(r,r===Lt?Ht:0);if(d===0)return null;if((d&30)!==0||(d&r.expiredLanes)!==0||s)s=rc(r,d);else{s=d;var h=Ge;Ge|=2;var g=uy();(Lt!==r||Ht!==s)&&(si=null,Yo=rt()+500,Bs(r,s));do try{z0();break}catch(x){ly(r,x)}while(!0);nh(),Xu.current=g,Ge=h,Ct!==null?s=0:(Lt=null,Ht=0,s=bt)}if(s!==0){if(s===2&&(h=An(r),h!==0&&(d=h,s=Uh(r,h))),s===1)throw a=rl,Bs(r,0),qi(r,d),yn(r,rt()),a;if(s===6)qi(r,d);else{if(h=r.current.alternate,(d&30)===0&&!B0(h)&&(s=rc(r,d),s===2&&(g=An(r),g!==0&&(d=g,s=Uh(r,g))),s===1))throw a=rl,Bs(r,0),qi(r,d),yn(r,rt()),a;switch(r.finishedWork=h,r.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:$s(r,gn,si);break;case 3:if(qi(r,d),(d&130023424)===d&&(s=Lh+500-rt(),10<s)){if(Cs(r,0)!==0)break;if(h=r.suspendedLanes,(h&d)!==d){an(),r.pingedLanes|=r.suspendedLanes&h;break}r.timeoutHandle=qd($s.bind(null,r,gn,si),s);break}$s(r,gn,si);break;case 4:if(qi(r,d),(d&4194240)===d)break;for(s=r.eventTimes,h=-1;0<d;){var w=31-rn(d);g=1<<w,w=s[w],w>h&&(h=w),d&=~g}if(d=h,d=rt()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*F0(d/1960))-d,10<d){r.timeoutHandle=qd($s.bind(null,r,gn,si),d);break}$s(r,gn,si);break;case 5:$s(r,gn,si);break;default:throw Error(t(329))}}}return yn(r,rt()),r.callbackNode===a?oy.bind(null,r):null}function Uh(r,s){var a=il;return r.current.memoizedState.isDehydrated&&(Bs(r,s).flags|=256),r=rc(r,s),r!==2&&(s=gn,gn=a,s!==null&&Fh(s)),r}function Fh(r){gn===null?gn=r:gn.push.apply(gn,r)}function B0(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var d=0;d<a.length;d++){var h=a[d],g=h.getSnapshot;h=h.value;try{if(!ar(g(),h))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function qi(r,s){for(s&=~Vh,s&=~Yu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-rn(s),d=1<<a;r[a]=-1,s&=~d}}function ay(r){if((Ge&6)!==0)throw Error(t(327));Jo();var s=Cs(r,0);if((s&1)===0)return yn(r,rt()),null;var a=rc(r,s);if(r.tag!==0&&a===2){var d=An(r);d!==0&&(s=d,a=Uh(r,d))}if(a===1)throw a=rl,Bs(r,0),qi(r,s),yn(r,rt()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,$s(r,gn,si),yn(r,rt()),null}function Bh(r,s){var a=Ge;Ge|=1;try{return r(s)}finally{Ge=a,Ge===0&&(Yo=rt()+500,xu&&ji())}}function Fs(r){zi!==null&&zi.tag===0&&(Ge&6)===0&&Jo();var s=Ge;Ge|=1;var a=qn.transition,d=qe;try{if(qn.transition=null,qe=1,r)return r()}finally{qe=d,qn.transition=a,Ge=s,(Ge&6)===0&&ji()}}function $h(){xn=Xo.current,at(Xo)}function Bs(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,y0(a)),Ct!==null)for(a=Ct.return;a!==null;){var d=a;switch(Yd(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&ku();break;case 3:Ko(),at(fn),at(Gt),ch();break;case 5:lh(d);break;case 4:Ko();break;case 13:at(dt);break;case 19:at(dt);break;case 10:rh(d.type._context);break;case 22:case 23:$h()}a=a.return}if(Lt=r,Ct=r=Wi(r.current,null),Ht=xn=s,bt=0,rl=null,Vh=Yu=Us=0,gn=il=null,Ls!==null){for(s=0;s<Ls.length;s++)if(a=Ls[s],d=a.interleaved,d!==null){a.interleaved=null;var h=d.next,g=a.pending;if(g!==null){var w=g.next;g.next=h,d.next=w}a.pending=d}Ls=null}return r}function ly(r,s){do{var a=Ct;try{if(nh(),Fu.current=Hu,Bu){for(var d=ht.memoizedState;d!==null;){var h=d.queue;h!==null&&(h.pending=null),d=d.next}Bu=!1}if(js=0,Vt=Nt=ht=null,Ya=!1,Ja=0,Oh.current=null,a===null||a.return===null){bt=1,rl=s,Ct=null;break}e:{var g=r,w=a.return,x=a,D=s;if(s=Ht,x.flags|=32768,D!==null&&typeof D=="object"&&typeof D.then=="function"){var W=D,se=x,oe=se.tag;if((se.mode&1)===0&&(oe===0||oe===11||oe===15)){var ie=se.alternate;ie?(se.updateQueue=ie.updateQueue,se.memoizedState=ie.memoizedState,se.lanes=ie.lanes):(se.updateQueue=null,se.memoizedState=null)}var ve=Dg(w);if(ve!==null){ve.flags&=-257,Og(ve,w,x,g,s),ve.mode&1&&bg(g,W,s),s=ve,D=W;var Te=s.updateQueue;if(Te===null){var Ie=new Set;Ie.add(D),s.updateQueue=Ie}else Te.add(D);break e}else{if((s&1)===0){bg(g,W,s),zh();break e}D=Error(t(426))}}else if(ut&&x.mode&1){var wt=Dg(w);if(wt!==null){(wt.flags&65536)===0&&(wt.flags|=256),Og(wt,w,x,g,s),eh(Go(D,x));break e}}g=D=Go(D,x),bt!==4&&(bt=2),il===null?il=[g]:il.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var U=xg(g,D,s);rg(g,U);break e;case 1:x=D;var M=g.type,F=g.stateNode;if((g.flags&128)===0&&(typeof M.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&($i===null||!$i.has(F)))){g.flags|=65536,s&=-s,g.lanes|=s;var ue=Ng(g,x,s);rg(g,ue);break e}}g=g.return}while(g!==null)}dy(a)}catch(Se){s=Se,Ct===a&&a!==null&&(Ct=a=a.return);continue}break}while(!0)}function uy(){var r=Xu.current;return Xu.current=Hu,r===null?Hu:r}function zh(){(bt===0||bt===3||bt===2)&&(bt=4),Lt===null||(Us&268435455)===0&&(Yu&268435455)===0||qi(Lt,Ht)}function rc(r,s){var a=Ge;Ge|=2;var d=uy();(Lt!==r||Ht!==s)&&(si=null,Bs(r,s));do try{$0();break}catch(h){ly(r,h)}while(!0);if(nh(),Ge=a,Xu.current=d,Ct!==null)throw Error(t(261));return Lt=null,Ht=0,bt}function $0(){for(;Ct!==null;)cy(Ct)}function z0(){for(;Ct!==null&&!eu();)cy(Ct)}function cy(r){var s=py(r.alternate,r,xn);r.memoizedProps=r.pendingProps,s===null?dy(r):Ct=s,Oh.current=null}function dy(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=V0(a,s,xn),a!==null){Ct=a;return}}else{if(a=L0(a,s),a!==null){a.flags&=32767,Ct=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{bt=6,Ct=null;return}}if(s=s.sibling,s!==null){Ct=s;return}Ct=s=r}while(s!==null);bt===0&&(bt=5)}function $s(r,s,a){var d=qe,h=qn.transition;try{qn.transition=null,qe=1,H0(r,s,a,d)}finally{qn.transition=h,qe=d}return null}function H0(r,s,a,d){do Jo();while(zi!==null);if((Ge&6)!==0)throw Error(t(327));a=r.finishedWork;var h=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(tt(r,g),r===Lt&&(Ct=Lt=null,Ht=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Zu||(Zu=!0,my(jn,function(){return Jo(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=qn.transition,qn.transition=null;var w=qe;qe=1;var x=Ge;Ge|=4,Oh.current=null,j0(r,a),ty(a,r),c0(zd),bi=!!$d,zd=$d=null,r.current=a,U0(a),Cd(),Ge=x,qe=w,qn.transition=g}else r.current=a;if(Zu&&(Zu=!1,zi=r,ec=h),g=r.pendingLanes,g===0&&($i=null),ru(a.stateNode),yn(r,rt()),s!==null)for(d=r.onRecoverableError,a=0;a<s.length;a++)h=s[a],d(h.value,{componentStack:h.stack,digest:h.digest});if(Ju)throw Ju=!1,r=Mh,Mh=null,r;return(ec&1)!==0&&r.tag!==0&&Jo(),g=r.pendingLanes,(g&1)!==0?r===jh?sl++:(sl=0,jh=r):sl=0,ji(),null}function Jo(){if(zi!==null){var r=xi(ec),s=qn.transition,a=qe;try{if(qn.transition=null,qe=16>r?16:r,zi===null)var d=!1;else{if(r=zi,zi=null,ec=0,(Ge&6)!==0)throw Error(t(331));var h=Ge;for(Ge|=4,Ee=r.current;Ee!==null;){var g=Ee,w=g.child;if((Ee.flags&16)!==0){var x=g.deletions;if(x!==null){for(var D=0;D<x.length;D++){var W=x[D];for(Ee=W;Ee!==null;){var se=Ee;switch(se.tag){case 0:case 11:case 15:nl(8,se,g)}var oe=se.child;if(oe!==null)oe.return=se,Ee=oe;else for(;Ee!==null;){se=Ee;var ie=se.sibling,ve=se.return;if(Xg(se),se===W){Ee=null;break}if(ie!==null){ie.return=ve,Ee=ie;break}Ee=ve}}}var Te=g.alternate;if(Te!==null){var Ie=Te.child;if(Ie!==null){Te.child=null;do{var wt=Ie.sibling;Ie.sibling=null,Ie=wt}while(Ie!==null)}}Ee=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,Ee=w;else e:for(;Ee!==null;){if(g=Ee,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:nl(9,g,g.return)}var U=g.sibling;if(U!==null){U.return=g.return,Ee=U;break e}Ee=g.return}}var M=r.current;for(Ee=M;Ee!==null;){w=Ee;var F=w.child;if((w.subtreeFlags&2064)!==0&&F!==null)F.return=w,Ee=F;else e:for(w=M;Ee!==null;){if(x=Ee,(x.flags&2048)!==0)try{switch(x.tag){case 0:case 11:case 15:Qu(9,x)}}catch(Se){mt(x,x.return,Se)}if(x===w){Ee=null;break e}var ue=x.sibling;if(ue!==null){ue.return=x.return,Ee=ue;break e}Ee=x.return}}if(Ge=h,ji(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(As,r)}catch{}d=!0}return d}finally{qe=a,qn.transition=s}}return!1}function hy(r,s,a){s=Go(a,s),s=xg(r,s,1),r=Fi(r,s,1),s=an(),r!==null&&(ki(r,1,s),yn(r,s))}function mt(r,s,a){if(r.tag===3)hy(r,r,a);else for(;s!==null;){if(s.tag===3){hy(s,r,a);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&($i===null||!$i.has(d))){r=Go(a,r),r=Ng(s,r,1),s=Fi(s,r,1),r=an(),s!==null&&(ki(s,1,r),yn(s,r));break}}s=s.return}}function q0(r,s,a){var d=r.pingCache;d!==null&&d.delete(s),s=an(),r.pingedLanes|=r.suspendedLanes&a,Lt===r&&(Ht&a)===a&&(bt===4||bt===3&&(Ht&130023424)===Ht&&500>rt()-Lh?Bs(r,0):Vh|=a),yn(r,s)}function fy(r,s){s===0&&((r.mode&1)===0?s=1:(s=Eo,Eo<<=1,(Eo&130023424)===0&&(Eo=4194304)));var a=an();r=ni(r,s),r!==null&&(ki(r,s,a),yn(r,a))}function W0(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),fy(r,a)}function K0(r,s){var a=0;switch(r.tag){case 13:var d=r.stateNode,h=r.memoizedState;h!==null&&(a=h.retryLane);break;case 19:d=r.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),fy(r,a)}var py;py=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||fn.current)mn=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return mn=!1,O0(r,s,a);mn=(r.flags&131072)!==0}else mn=!1,ut&&(s.flags&1048576)!==0&&Km(s,bu,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;Ku(r,s),r=s.pendingProps;var h=Fo(s,Gt.current);Wo(s,a),h=fh(null,s,d,r,h,a);var g=ph();return s.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,pn(d)?(g=!0,Pu(s)):g=!1,s.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,oh(s),h.updater=qu,s.stateNode=h,h._reactInternals=s,wh(s,d,r,a),s=Sh(null,s,d,!0,g,a)):(s.tag=0,ut&&g&&Xd(s),on(null,s,h,a),s=s.child),s;case 16:d=s.elementType;e:{switch(Ku(r,s),r=s.pendingProps,h=d._init,d=h(d._payload),s.type=d,h=s.tag=Q0(d),r=ur(d,r),h){case 0:s=Ih(null,s,d,r,a);break e;case 1:s=Fg(null,s,d,r,a);break e;case 11:s=Vg(null,s,d,r,a);break e;case 14:s=Lg(null,s,d,ur(d.type,r),a);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,h=s.pendingProps,h=s.elementType===d?h:ur(d,h),Ih(r,s,d,h,a);case 1:return d=s.type,h=s.pendingProps,h=s.elementType===d?h:ur(d,h),Fg(r,s,d,h,a);case 3:e:{if(Bg(s),r===null)throw Error(t(387));d=s.pendingProps,g=s.memoizedState,h=g.element,ng(r,s),ju(s,d,null,a);var w=s.memoizedState;if(d=w.element,g.isDehydrated)if(g={element:d,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){h=Go(Error(t(423)),s),s=$g(r,s,d,a,h);break e}else if(d!==h){h=Go(Error(t(424)),s),s=$g(r,s,d,a,h);break e}else for(Pn=Vi(s.stateNode.containerInfo.firstChild),kn=s,ut=!0,lr=null,a=eg(s,null,d,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(zo(),d===h){s=ii(r,s,a);break e}on(r,s,d,a)}s=s.child}return s;case 5:return sg(s),r===null&&Zd(s),d=s.type,h=s.pendingProps,g=r!==null?r.memoizedProps:null,w=h.children,Hd(d,h)?w=null:g!==null&&Hd(d,g)&&(s.flags|=32),Ug(r,s),on(r,s,w,a),s.child;case 6:return r===null&&Zd(s),null;case 13:return zg(r,s,a);case 4:return ah(s,s.stateNode.containerInfo),d=s.pendingProps,r===null?s.child=Ho(s,null,d,a):on(r,s,d,a),s.child;case 11:return d=s.type,h=s.pendingProps,h=s.elementType===d?h:ur(d,h),Vg(r,s,d,h,a);case 7:return on(r,s,s.pendingProps,a),s.child;case 8:return on(r,s,s.pendingProps.children,a),s.child;case 12:return on(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(d=s.type._context,h=s.pendingProps,g=s.memoizedProps,w=h.value,it(Vu,d._currentValue),d._currentValue=w,g!==null)if(ar(g.value,w)){if(g.children===h.children&&!fn.current){s=ii(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var x=g.dependencies;if(x!==null){w=g.child;for(var D=x.firstContext;D!==null;){if(D.context===d){if(g.tag===1){D=ri(-1,a&-a),D.tag=2;var W=g.updateQueue;if(W!==null){W=W.shared;var se=W.pending;se===null?D.next=D:(D.next=se.next,se.next=D),W.pending=D}}g.lanes|=a,D=g.alternate,D!==null&&(D.lanes|=a),ih(g.return,a,s),x.lanes|=a;break}D=D.next}}else if(g.tag===10)w=g.type===s.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,x=w.alternate,x!==null&&(x.lanes|=a),ih(w,a,s),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===s){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}on(r,s,h.children,a),s=s.child}return s;case 9:return h=s.type,d=s.pendingProps.children,Wo(s,a),h=zn(h),d=d(h),s.flags|=1,on(r,s,d,a),s.child;case 14:return d=s.type,h=ur(d,s.pendingProps),h=ur(d.type,h),Lg(r,s,d,h,a);case 15:return Mg(r,s,s.type,s.pendingProps,a);case 17:return d=s.type,h=s.pendingProps,h=s.elementType===d?h:ur(d,h),Ku(r,s),s.tag=1,pn(d)?(r=!0,Pu(s)):r=!1,Wo(s,a),kg(s,d,h),wh(s,d,h,a),Sh(null,s,d,!0,r,a);case 19:return qg(r,s,a);case 22:return jg(r,s,a)}throw Error(t(156,s.tag))};function my(r,s){return _o(r,s)}function G0(r,s,a,d){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(r,s,a,d){return new G0(r,s,a,d)}function Hh(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Q0(r){if(typeof r=="function")return Hh(r)?1:0;if(r!=null){if(r=r.$$typeof,r===R)return 11;if(r===$)return 14}return 2}function Wi(r,s){var a=r.alternate;return a===null?(a=Wn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function ic(r,s,a,d,h,g){var w=2;if(d=r,typeof r=="function")Hh(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case P:return zs(a.children,h,g,s);case S:w=8,h|=8;break;case k:return r=Wn(12,a,s,h|2),r.elementType=k,r.lanes=g,r;case I:return r=Wn(13,a,s,h),r.elementType=I,r.lanes=g,r;case he:return r=Wn(19,a,s,h),r.elementType=he,r.lanes=g,r;case ye:return sc(a,h,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case b:w=10;break e;case O:w=9;break e;case R:w=11;break e;case $:w=14;break e;case fe:w=16,d=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Wn(w,a,s,h),s.elementType=r,s.type=d,s.lanes=g,s}function zs(r,s,a,d){return r=Wn(7,r,d,s),r.lanes=a,r}function sc(r,s,a,d){return r=Wn(22,r,d,s),r.elementType=ye,r.lanes=a,r.stateNode={isHidden:!1},r}function qh(r,s,a){return r=Wn(6,r,null,s),r.lanes=a,r}function Wh(r,s,a){return s=Wn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function X0(r,s,a,d,h){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ri(0),this.expirationTimes=Ri(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ri(0),this.identifierPrefix=d,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Kh(r,s,a,d,h,g,w,x,D){return r=new X0(r,s,a,x,D),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Wn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:d,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},oh(g),r}function Y0(r,s,a){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:de,key:d==null?null:""+d,children:r,containerInfo:s,implementation:a}}function gy(r){if(!r)return Mi;r=r._reactInternals;e:{if(er(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(pn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(pn(a))return Hm(r,a,s)}return s}function yy(r,s,a,d,h,g,w,x,D){return r=Kh(a,d,!0,r,h,g,w,x,D),r.context=gy(null),a=r.current,d=an(),h=Hi(a),g=ri(d,h),g.callback=s??null,Fi(a,g,h),r.current.lanes=h,ki(r,h,d),yn(r,d),r}function oc(r,s,a,d){var h=s.current,g=an(),w=Hi(h);return a=gy(a),s.context===null?s.context=a:s.pendingContext=a,s=ri(g,w),s.payload={element:r},d=d===void 0?null:d,d!==null&&(s.callback=d),r=Fi(h,s,w),r!==null&&(hr(r,h,w,g),Mu(r,h,w)),w}function ac(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function vy(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Gh(r,s){vy(r,s),(r=r.alternate)&&vy(r,s)}function J0(){return null}var _y=typeof reportError=="function"?reportError:function(r){console.error(r)};function Qh(r){this._internalRoot=r}lc.prototype.render=Qh.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));oc(r,s,null,null)},lc.prototype.unmount=Qh.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;Fs(function(){oc(null,r,null,null)}),s[Jr]=null}};function lc(r){this._internalRoot=r}lc.prototype.unstable_scheduleHydration=function(r){if(r){var s=lu();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Ir.length&&s!==0&&s<Ir[a].priority;a++);Ir.splice(a,0,r),a===0&&du(r)}};function Xh(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function uc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function wy(){}function Z0(r,s,a,d,h){if(h){if(typeof d=="function"){var g=d;d=function(){var W=ac(w);g.call(W)}}var w=yy(s,d,r,0,null,!1,!1,"",wy);return r._reactRootContainer=w,r[Jr]=w.current,za(r.nodeType===8?r.parentNode:r),Fs(),w}for(;h=r.lastChild;)r.removeChild(h);if(typeof d=="function"){var x=d;d=function(){var W=ac(D);x.call(W)}}var D=Kh(r,0,!1,null,null,!1,!1,"",wy);return r._reactRootContainer=D,r[Jr]=D.current,za(r.nodeType===8?r.parentNode:r),Fs(function(){oc(s,D,a,d)}),D}function cc(r,s,a,d,h){var g=a._reactRootContainer;if(g){var w=g;if(typeof h=="function"){var x=h;h=function(){var D=ac(w);x.call(D)}}oc(s,w,r,h)}else w=Z0(a,s,r,h,d);return ac(w)}ou=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Ci(s.pendingLanes);a!==0&&(Pi(s,a|1),yn(s,rt()),(Ge&6)===0&&(Yo=rt()+500,ji()))}break;case 13:Fs(function(){var d=ni(r,1);if(d!==null){var h=an();hr(d,r,1,h)}}),Gh(r,1)}},To=function(r){if(r.tag===13){var s=ni(r,134217728);if(s!==null){var a=an();hr(s,r,134217728,a)}Gh(r,134217728)}},au=function(r){if(r.tag===13){var s=Hi(r),a=ni(r,s);if(a!==null){var d=an();hr(a,r,s,d)}Gh(r,s)}},lu=function(){return qe},uu=function(r,s){var a=qe;try{return qe=r,s()}finally{qe=a}},Me=function(r,s,a){switch(s){case"input":if(_r(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var d=a[s];if(d!==r&&d.form===r.form){var h=Ru(d);if(!h)throw Error(t(90));Br(d),_r(d,h)}}}break;case"textarea":Hr(r,a);break;case"select":s=a.value,s!=null&&Ln(r,!!a.multiple,s,!1)}},qr=Bh,Sa=Fs;var eI={usingClientEntryPoint:!1,Events:[Wa,jo,Ru,Ft,Si,Bh]},ol={findFiberByHostInstance:bs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tI={bundleType:ol.bundleType,version:ol.version,rendererPackageName:ol.rendererPackageName,rendererConfig:ol.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:H.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Ra(r),r===null?null:r.stateNode},findFiberByHostInstance:ol.findFiberByHostInstance||J0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{As=dc.inject(tI),Sn=dc}catch{}}return vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eI,vn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xh(s))throw Error(t(200));return Y0(r,s,null,a)},vn.createRoot=function(r,s){if(!Xh(r))throw Error(t(299));var a=!1,d="",h=_y;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(h=s.onRecoverableError)),s=Kh(r,1,!1,null,null,a,!1,d,h),r[Jr]=s.current,za(r.nodeType===8?r.parentNode:r),new Qh(s)},vn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Ra(s),r=r===null?null:r.stateNode,r},vn.flushSync=function(r){return Fs(r)},vn.hydrate=function(r,s,a){if(!uc(s))throw Error(t(200));return cc(null,r,s,!0,a)},vn.hydrateRoot=function(r,s,a){if(!Xh(r))throw Error(t(405));var d=a!=null&&a.hydratedSources||null,h=!1,g="",w=_y;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=yy(s,null,r,1,a??null,h,!1,g,w),r[Jr]=s.current,za(r),d)for(r=0;r<d.length;r++)a=d[r],h=a._getVersion,h=h(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,h]:s.mutableSourceEagerHydrationData.push(a,h);return new lc(s)},vn.render=function(r,s,a){if(!uc(s))throw Error(t(200));return cc(null,r,s,!1,a)},vn.unmountComponentAtNode=function(r){if(!uc(r))throw Error(t(40));return r._reactRootContainer?(Fs(function(){cc(null,null,r,!1,function(){r._reactRootContainer=null,r[Jr]=null})}),!0):!1},vn.unstable_batchedUpdates=Bh,vn.unstable_renderSubtreeIntoContainer=function(r,s,a,d){if(!uc(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return cc(r,s,a,!1,d)},vn.version="18.3.1-next-f1338f8080-20240426",vn}var ky;function cI(){if(ky)return Zh.exports;ky=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Zh.exports=uI(),Zh.exports}var Py;function dI(){if(Py)return hc;Py=1;var n=cI();return hc.createRoot=n.createRoot,hc.hydrateRoot=n.hydrateRoot,hc}var hI=dI();const fI=O_(hI),pI=()=>{};var xy={};/**
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
 */const V_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},mI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],f=n[t++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},L_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,f=c?n[o+1]:0,p=o+2<n.length,v=p?n[o+2]:0,E=l>>2,A=(l&3)<<4|f>>4;let C=(f&15)<<2|v>>6,N=v&63;p||(N=64,c||(C=64)),i.push(t[E],t[A],t[C],t[N])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(V_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):mI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const v=o<n.length?t[n.charAt(o)]:64;++o;const A=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||v==null||A==null)throw new gI;const C=l<<2|f>>4;if(i.push(C),v!==64){const N=f<<4&240|v>>2;if(i.push(N),A!==64){const K=v<<6&192|A;i.push(K)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class gI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yI=function(n){const e=V_(n);return L_.encodeByteArray(e,!0)},bc=function(n){return yI(n).replace(/\./g,"")},M_=function(n){try{return L_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function vI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _I=()=>vI().__FIREBASE_DEFAULTS__,wI=()=>{if(typeof process>"u"||typeof xy>"u")return;const n=xy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},EI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&M_(n[1]);return e&&JSON.parse(e)},Jc=()=>{try{return pI()||_I()||wI()||EI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},j_=n=>{var e,t;return(t=(e=Jc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},U_=n=>{const e=j_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},F_=()=>{var n;return(n=Jc())===null||n===void 0?void 0:n.config},B_=n=>{var e;return(e=Jc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class TI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function fs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function rp(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function $_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[bc(JSON.stringify(t)),bc(JSON.stringify(c)),""].join(".")}const yl={};function II(){const n={prod:[],emulator:[]};for(const e of Object.keys(yl))yl[e]?n.emulator.push(e):n.prod.push(e);return n}function SI(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ny=!1;function ip(n,e){if(typeof window>"u"||typeof document>"u"||!fs(window.location.host)||yl[n]===e||yl[n]||Ny)return;yl[n]=e;function t(C){return`__firebase__banner__${C}`}const i="__firebase__banner",l=II().prod.length>0;function c(){const C=document.getElementById(i);C&&C.remove()}function f(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function p(C,N){C.setAttribute("width","24"),C.setAttribute("id",N),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function v(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{Ny=!0,c()},C}function E(C,N){C.setAttribute("id",N),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function A(){const C=SI(i),N=t("text"),K=document.getElementById(N)||document.createElement("span"),Q=t("learnmore"),B=document.getElementById(Q)||document.createElement("a"),ae=t("preprendIcon"),Z=document.getElementById(ae)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const X=C.element;f(X),E(B,Q);const H=v();p(Z,ae),X.append(Z,K,B,H),document.body.appendChild(X)}l?(K.innerText="Preview backend disconnected.",Z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,K.innerText="Preview backend running in this workspace."),K.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
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
 */function nn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nn())}function CI(){var n;const e=(n=Jc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function PI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xI(){const n=nn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function NI(){return!CI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function z_(){try{return typeof indexedDB=="object"}catch{return!1}}function H_(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function bI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const DI="FirebaseError";class yr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=DI,Object.setPrototypeOf(this,yr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ao.prototype.create)}}class ao{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?OI(l,i):"Error",f=`${this.serviceName}: ${c} (${o}).`;return new yr(o,f,i)}}function OI(n,e){return n.replace(VI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const VI=/\{\$([^}]+)}/g;function LI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ss(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(by(l)&&by(c)){if(!ss(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function by(n){return n!==null&&typeof n=="object"}/**
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
 */function jl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function cl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function dl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function MI(n,e){const t=new jI(n,e);return t.subscribe.bind(t)}class jI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");UI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=nf),o.error===void 0&&(o.error=nf),o.complete===void 0&&(o.complete=nf);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function nf(){}/**
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
 */function et(n){return n&&n._delegate?n._delegate:n}class Qn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qs="[DEFAULT]";/**
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
 */class FI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new TI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($I(e))try{this.getOrInitializeService({instanceIdentifier:qs})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=qs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qs){return this.instances.has(e)}getOptions(e=qs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:BI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=qs){return this.component?this.component.multipleInstances?e:qs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BI(n){return n===qs?void 0:n}function $I(n){return n.instantiationMode==="EAGER"}/**
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
 */class zI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new FI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $e;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($e||($e={}));const HI={debug:$e.DEBUG,verbose:$e.VERBOSE,info:$e.INFO,warn:$e.WARN,error:$e.ERROR,silent:$e.SILENT},qI=$e.INFO,WI={[$e.DEBUG]:"log",[$e.VERBOSE]:"log",[$e.INFO]:"info",[$e.WARN]:"warn",[$e.ERROR]:"error"},KI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=WI[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sp{constructor(e){this.name=e,this._logLevel=qI,this._logHandler=KI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$e.DEBUG,...e),this._logHandler(this,$e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$e.VERBOSE,...e),this._logHandler(this,$e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$e.INFO,...e),this._logHandler(this,$e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$e.WARN,...e),this._logHandler(this,$e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$e.ERROR,...e),this._logHandler(this,$e.ERROR,...e)}}const GI=(n,e)=>e.some(t=>n instanceof t);let Dy,Oy;function QI(){return Dy||(Dy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XI(){return Oy||(Oy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const q_=new WeakMap,If=new WeakMap,W_=new WeakMap,rf=new WeakMap,op=new WeakMap;function YI(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(di(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&q_.set(t,n)}).catch(()=>{}),op.set(e,n),e}function JI(n){if(If.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});If.set(n,e)}let Sf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return If.get(n);if(e==="objectStoreNames")return n.objectStoreNames||W_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return di(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ZI(n){Sf=n(Sf)}function eS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(sf(this),e,...t);return W_.set(i,e.sort?e.sort():[e]),di(i)}:XI().includes(n)?function(...e){return n.apply(sf(this),e),di(q_.get(this))}:function(...e){return di(n.apply(sf(this),e))}}function tS(n){return typeof n=="function"?eS(n):(n instanceof IDBTransaction&&JI(n),GI(n,QI())?new Proxy(n,Sf):n)}function di(n){if(n instanceof IDBRequest)return YI(n);if(rf.has(n))return rf.get(n);const e=tS(n);return e!==n&&(rf.set(n,e),op.set(e,n)),e}const sf=n=>op.get(n);function Zc(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),f=di(c);return i&&c.addEventListener("upgradeneeded",p=>{i(di(c.result),p.oldVersion,p.newVersion,di(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),f}function of(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",i=>e(i.oldVersion,i)),di(t).then(()=>{})}const nS=["get","getKey","getAll","getAllKeys","count"],rS=["put","add","delete","clear"],af=new Map;function Vy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(af.get(e))return af.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=rS.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||nS.includes(t)))return;const l=async function(c,...f){const p=this.transaction(c,o?"readwrite":"readonly");let v=p.store;return i&&(v=v.index(f.shift())),(await Promise.all([v[t](...f),o&&p.done]))[0]};return af.set(e,l),l}ZI(n=>({...n,get:(e,t,i)=>Vy(e,t)||n.get(e,t,i),has:(e,t)=>!!Vy(e,t)||n.has(e,t)}));/**
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
 */class iS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(sS(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function sS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Af="@firebase/app",Ly="0.13.2";/**
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
 */const fi=new sp("@firebase/app"),oS="@firebase/app-compat",aS="@firebase/analytics-compat",lS="@firebase/analytics",uS="@firebase/app-check-compat",cS="@firebase/app-check",dS="@firebase/auth",hS="@firebase/auth-compat",fS="@firebase/database",pS="@firebase/data-connect",mS="@firebase/database-compat",gS="@firebase/functions",yS="@firebase/functions-compat",vS="@firebase/installations",_S="@firebase/installations-compat",wS="@firebase/messaging",ES="@firebase/messaging-compat",TS="@firebase/performance",IS="@firebase/performance-compat",SS="@firebase/remote-config",AS="@firebase/remote-config-compat",CS="@firebase/storage",RS="@firebase/storage-compat",kS="@firebase/firestore",PS="@firebase/ai",xS="@firebase/firestore-compat",NS="firebase",bS="11.10.0";/**
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
 */const Cf="[DEFAULT]",DS={[Af]:"fire-core",[oS]:"fire-core-compat",[lS]:"fire-analytics",[aS]:"fire-analytics-compat",[cS]:"fire-app-check",[uS]:"fire-app-check-compat",[dS]:"fire-auth",[hS]:"fire-auth-compat",[fS]:"fire-rtdb",[pS]:"fire-data-connect",[mS]:"fire-rtdb-compat",[gS]:"fire-fn",[yS]:"fire-fn-compat",[vS]:"fire-iid",[_S]:"fire-iid-compat",[wS]:"fire-fcm",[ES]:"fire-fcm-compat",[TS]:"fire-perf",[IS]:"fire-perf-compat",[SS]:"fire-rc",[AS]:"fire-rc-compat",[CS]:"fire-gcs",[RS]:"fire-gcs-compat",[kS]:"fire-fst",[xS]:"fire-fst-compat",[PS]:"fire-vertex","fire-js":"fire-js",[NS]:"fire-js-all"};/**
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
 */const Dc=new Map,OS=new Map,Rf=new Map;function My(n,e){try{n.container.addComponent(e)}catch(t){fi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function pr(n){const e=n.name;if(Rf.has(e))return fi.debug(`There were multiple attempts to register component ${e}.`),!1;Rf.set(e,n);for(const t of Dc.values())My(t,n);for(const t of OS.values())My(t,n);return!0}function lo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Nn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const VS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ts=new ao("app","Firebase",VS);/**
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
 */class LS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ts.create("app-deleted",{appName:this._name})}}/**
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
 */const uo=bS;function K_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Cf,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw ts.create("bad-app-name",{appName:String(o)});if(t||(t=F_()),!t)throw ts.create("no-options");const l=Dc.get(o);if(l){if(ss(t,l.options)&&ss(i,l.config))return l;throw ts.create("duplicate-app",{appName:o})}const c=new zI(o);for(const p of Rf.values())c.addComponent(p);const f=new LS(t,i,c);return Dc.set(o,f),f}function ed(n=Cf){const e=Dc.get(n);if(!e&&n===Cf&&F_())return K_();if(!e)throw ts.create("no-app",{appName:n});return e}function En(n,e,t){var i;let o=(i=DS[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fi.warn(f.join(" "));return}pr(new Qn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const MS="firebase-heartbeat-database",jS=1,Sl="firebase-heartbeat-store";let lf=null;function G_(){return lf||(lf=Zc(MS,jS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Sl)}catch(t){console.warn(t)}}}}).catch(n=>{throw ts.create("idb-open",{originalErrorMessage:n.message})})),lf}async function US(n){try{const t=(await G_()).transaction(Sl),i=await t.objectStore(Sl).get(Q_(n));return await t.done,i}catch(e){if(e instanceof yr)fi.warn(e.message);else{const t=ts.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fi.warn(t.message)}}}async function jy(n,e){try{const i=(await G_()).transaction(Sl,"readwrite");await i.objectStore(Sl).put(e,Q_(n)),await i.done}catch(t){if(t instanceof yr)fi.warn(t.message);else{const i=ts.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});fi.warn(i.message)}}}function Q_(n){return`${n.name}!${n.options.appId}`}/**
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
 */const FS=1024,BS=30;class $S{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new HS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Uy();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>BS){const c=qS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){fi.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Uy(),{heartbeatsToSend:i,unsentEntries:o}=zS(this._heartbeatsCache.heartbeats),l=bc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return fi.warn(t),""}}}function Uy(){return new Date().toISOString().substring(0,10)}function zS(n,e=FS){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),Fy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Fy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class HS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return z_()?H_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await US(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return jy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return jy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Fy(n){return bc(JSON.stringify({version:2,heartbeats:n})).length}function qS(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function WS(n){pr(new Qn("platform-logger",e=>new iS(e),"PRIVATE")),pr(new Qn("heartbeat",e=>new $S(e),"PRIVATE")),En(Af,Ly,n),En(Af,Ly,"esm2017"),En("fire-js","")}WS("");function ap(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function X_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KS=X_,Y_=new ao("auth","Firebase",X_());/**
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
 */const Oc=new sp("@firebase/auth");function GS(n,...e){Oc.logLevel<=$e.WARN&&Oc.warn(`Auth (${uo}): ${n}`,...e)}function Tc(n,...e){Oc.logLevel<=$e.ERROR&&Oc.error(`Auth (${uo}): ${n}`,...e)}/**
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
 */function mr(n,...e){throw lp(n,...e)}function Or(n,...e){return lp(n,...e)}function J_(n,e,t){const i=Object.assign(Object.assign({},KS()),{[e]:t});return new ao("auth","Firebase",i).create(e,{appName:n.name})}function hi(n){return J_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lp(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Y_.create(n,...e)}function Ne(n,e,...t){if(!n)throw lp(e,...t)}function ui(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Tc(e),new Error(e)}function pi(n,e){n||ui(e)}/**
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
 */function kf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function QS(){return By()==="http:"||By()==="https:"}function By(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function XS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QS()||kI()||"connection"in navigator)?navigator.onLine:!0}function YS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ul{constructor(e,t){this.shortDelay=e,this.longDelay=t,pi(t>e,"Short delay should be less than long delay!"),this.isMobile=AI()||PI()}get(){return XS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function up(n,e){pi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Z_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ui("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ui("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ui("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const JS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ZS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],eA=new Ul(3e4,6e4);function ps(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ms(n,e,t,i,o={}){return ew(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const f=jl(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const v=Object.assign({method:e,headers:p},l);return RI()||(v.referrerPolicy="no-referrer"),n.emulatorConfig&&fs(n.emulatorConfig.host)&&(v.credentials="include"),Z_.fetch()(await tw(n,n.config.apiHost,t,f),v)})}async function ew(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},JS),e);try{const o=new nA(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw fc(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[p,v]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw fc(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw fc(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw fc(n,"user-disabled",c);const E=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw J_(n,E,v);mr(n,E)}}catch(o){if(o instanceof yr)throw o;mr(n,"network-request-failed",{message:String(o)})}}async function Fl(n,e,t,i,o={}){const l=await ms(n,e,t,i,o);return"mfaPendingCredential"in l&&mr(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function tw(n,e,t,i){const o=`${e}${t}?${i}`,l=n,c=l.config.emulator?up(n.config,o):`${n.config.apiScheme}://${o}`;return ZS.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function tA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class nA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Or(this.auth,"network-request-failed")),eA.get())})}}function fc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=Or(n,e,i);return o.customData._tokenResponse=t,o}function $y(n){return n!==void 0&&n.enterprise!==void 0}class rA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return tA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function iA(n,e){return ms(n,"GET","/v2/recaptchaConfig",ps(n,e))}/**
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
 */async function sA(n,e){return ms(n,"POST","/v1/accounts:delete",e)}async function Vc(n,e){return ms(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function vl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oA(n,e=!1){const t=et(n),i=await t.getIdToken(e),o=cp(i);Ne(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:vl(uf(o.auth_time)),issuedAtTime:vl(uf(o.iat)),expirationTime:vl(uf(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function uf(n){return Number(n)*1e3}function cp(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Tc("JWT malformed, contained fewer than 3 sections"),null;try{const o=M_(t);return o?JSON.parse(o):(Tc("Failed to decode base64 JWT payload"),null)}catch(o){return Tc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function zy(n){const e=cp(n);return Ne(e,"internal-error"),Ne(typeof e.exp<"u","internal-error"),Ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Al(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof yr&&aA(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function aA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class lA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Pf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=vl(this.lastLoginAt),this.creationTime=vl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Lc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Al(n,Vc(t,{idToken:i}));Ne(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?nw(l.providerUserInfo):[],f=cA(n.providerData,c),p=n.isAnonymous,v=!(n.email&&l.passwordHash)&&!(f!=null&&f.length),E=p?v:!1,A={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Pf(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(n,A)}async function uA(n){const e=et(n);await Lc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cA(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function nw(n){return n.map(e=>{var{providerId:t}=e,i=ap(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function dA(n,e){const t=await ew(n,{},async()=>{const i=jl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=await tw(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:i};return n.emulatorConfig&&fs(n.emulatorConfig.host)&&(p.credentials="include"),Z_.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function hA(n,e){return ms(n,"POST","/v2/accounts:revokeToken",ps(n,e))}/**
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
 */class sa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ne(e.idToken,"internal-error"),Ne(typeof e.idToken<"u","internal-error"),Ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ne(e.length!==0,"internal-error");const t=zy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await dA(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new sa;return i&&(Ne(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(Ne(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(Ne(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sa,this.toJSON())}_performRefresh(){return ui("not implemented")}}/**
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
 */function Gi(n,e){Ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class fr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=ap(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Pf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Al(this,this.stsTokenManager.getToken(this.auth,e));return Ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return oA(this,e)}reload(){return uA(this)}_assign(e){this!==e&&(Ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new fr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Lc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nn(this.auth.app))return Promise.reject(hi(this.auth));const e=await this.getIdToken();return await Al(this,sA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,c,f,p,v,E;const A=(i=t.displayName)!==null&&i!==void 0?i:void 0,C=(o=t.email)!==null&&o!==void 0?o:void 0,N=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,K=(c=t.photoURL)!==null&&c!==void 0?c:void 0,Q=(f=t.tenantId)!==null&&f!==void 0?f:void 0,B=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,ae=(v=t.createdAt)!==null&&v!==void 0?v:void 0,Z=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:X,emailVerified:H,isAnonymous:me,providerData:de,stsTokenManager:P}=t;Ne(X&&P,e,"internal-error");const S=sa.fromJSON(this.name,P);Ne(typeof X=="string",e,"internal-error"),Gi(A,e.name),Gi(C,e.name),Ne(typeof H=="boolean",e,"internal-error"),Ne(typeof me=="boolean",e,"internal-error"),Gi(N,e.name),Gi(K,e.name),Gi(Q,e.name),Gi(B,e.name),Gi(ae,e.name),Gi(Z,e.name);const k=new fr({uid:X,auth:e,email:C,emailVerified:H,displayName:A,isAnonymous:me,photoURL:K,phoneNumber:N,tenantId:Q,stsTokenManager:S,createdAt:ae,lastLoginAt:Z});return de&&Array.isArray(de)&&(k.providerData=de.map(b=>Object.assign({},b))),B&&(k._redirectEventId=B),k}static async _fromIdTokenResponse(e,t,i=!1){const o=new sa;o.updateFromServerResponse(t);const l=new fr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Lc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Ne(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?nw(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new sa;f.updateFromIdToken(i);const p=new fr({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:c}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Pf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,v),p}}/**
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
 */const Hy=new Map;function ci(n){pi(n instanceof Function,"Expected a class definition");let e=Hy.get(n);return e?(pi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Hy.set(n,e),e)}/**
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
 */class rw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rw.type="NONE";const qy=rw;/**
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
 */function Ic(n,e,t){return`firebase:${n}:${e}:${t}`}class oa{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Ic(this.userKey,o.apiKey,l),this.fullPersistenceKey=Ic("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Vc(this.auth,{idToken:e}).catch(()=>{});return t?fr._fromGetAccountInfoResponse(this.auth,t,e):null}return fr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new oa(ci(qy),e,i);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let l=o[0]||ci(qy);const c=Ic(i,e.config.apiKey,e.name);let f=null;for(const v of t)try{const E=await v._get(c);if(E){let A;if(typeof E=="string"){const C=await Vc(e,{idToken:E}).catch(()=>{});if(!C)break;A=await fr._fromGetAccountInfoResponse(e,C,E)}else A=fr._fromJSON(e,E);v!==l&&(f=A),l=v;break}}catch{}const p=o.filter(v=>v._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new oa(l,e,i):(l=p[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async v=>{if(v!==l)try{await v._remove(c)}catch{}})),new oa(l,e,i))}}/**
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
 */function Wy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(aw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uw(e))return"Blackberry";if(cw(e))return"Webos";if(sw(e))return"Safari";if((e.includes("chrome/")||ow(e))&&!e.includes("edge/"))return"Chrome";if(lw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function iw(n=nn()){return/firefox\//i.test(n)}function sw(n=nn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ow(n=nn()){return/crios\//i.test(n)}function aw(n=nn()){return/iemobile/i.test(n)}function lw(n=nn()){return/android/i.test(n)}function uw(n=nn()){return/blackberry/i.test(n)}function cw(n=nn()){return/webos/i.test(n)}function dp(n=nn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function fA(n=nn()){var e;return dp(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pA(){return xI()&&document.documentMode===10}function dw(n=nn()){return dp(n)||lw(n)||cw(n)||uw(n)||/windows phone/i.test(n)||aw(n)}/**
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
 */function hw(n,e=[]){let t;switch(n){case"Browser":t=Wy(nn());break;case"Worker":t=`${Wy(nn())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${uo}/${i}`}/**
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
 */class mA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,f)=>{try{const p=e(l);c(p)}catch(p){f(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function gA(n,e={}){return ms(n,"GET","/v2/passwordPolicy",ps(n,e))}/**
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
 */const yA=6;class vA{constructor(e){var t,i,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:yA,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,c,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class _A{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ky(this),this.idTokenSubscription=new Ky(this),this.beforeStateQueue=new mA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Y_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ci(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await oa.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Vc(this,{idToken:e}),i=await fr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Nn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===f)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Lc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nn(this.app))return Promise.reject(hi(this));const t=e?et(e):null;return t&&Ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nn(this.app)?Promise.reject(hi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nn(this.app)?Promise.reject(hi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ci(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gA(this),t=new vA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ao("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await hA(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ci(e)||this._popupRedirectResolver;Ne(t,this,"argument-error"),this.redirectPersistenceManager=await oa.create(this,[ci(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ne(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&GS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function co(n){return et(n)}class Ky{constructor(e){this.auth=e,this.observer=null,this.addObserver=MI(t=>this.observer=t)}get next(){return Ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let td={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wA(n){td=n}function fw(n){return td.loadJS(n)}function EA(){return td.recaptchaEnterpriseScript}function TA(){return td.gapiScript}function IA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class SA{constructor(){this.enterprise=new AA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class AA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const CA="recaptcha-enterprise",pw="NO_RECAPTCHA";class RA{constructor(e){this.type=CA,this.auth=co(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,f)=>{iA(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const v=new rA(p);return l.tenantId==null?l._agentRecaptchaConfig=v:l._tenantRecaptchaConfigs[l.tenantId]=v,c(v.siteKey)}}).catch(p=>{f(p)})})}function o(l,c,f){const p=window.grecaptcha;$y(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(v=>{c(v)}).catch(()=>{c(pw)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new SA().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(f=>{if(!t&&$y(window.grecaptcha))o(f,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=EA();p.length!==0&&(p+=f),fw(p).then(()=>{o(f,l,c)}).catch(v=>{c(v)})}}).catch(f=>{c(f)})})}}async function Gy(n,e,t,i=!1,o=!1){const l=new RA(n);let c;if(o)c=pw;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,v=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:v,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:c}):Object.assign(f,{captchaResponse:c}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function xf(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Gy(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Gy(n,e,t,t==="getOobCode");return i(n,f)}else return Promise.reject(c)})}/**
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
 */function kA(n,e){const t=lo(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(ss(l,e??{}))return o;mr(o,"already-initialized")}return t.initialize({options:e})}function PA(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(ci);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function xA(n,e,t){const i=co(n);Ne(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=mw(e),{host:c,port:f}=NA(e),p=f===null?"":`:${f}`,v={url:`${l}//${c}${p}/`},E=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){Ne(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Ne(ss(v,i.config.emulator)&&ss(E,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=v,i.emulatorConfig=E,i.settings.appVerificationDisabledForTesting=!0,fs(c)?(rp(`${l}//${c}${p}`),ip("Auth",!0)):bA()}function mw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function NA(n){const e=mw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Qy(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:Qy(c)}}}function Qy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function bA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class hp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ui("not implemented")}_getIdTokenResponse(e){return ui("not implemented")}_linkToIdToken(e,t){return ui("not implemented")}_getReauthenticationResolver(e){return ui("not implemented")}}async function DA(n,e){return ms(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function OA(n,e){return Fl(n,"POST","/v1/accounts:signInWithPassword",ps(n,e))}/**
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
 */async function VA(n,e){return Fl(n,"POST","/v1/accounts:signInWithEmailLink",ps(n,e))}async function LA(n,e){return Fl(n,"POST","/v1/accounts:signInWithEmailLink",ps(n,e))}/**
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
 */class Cl extends hp{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Cl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Cl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xf(e,t,"signInWithPassword",OA);case"emailLink":return VA(e,{email:this._email,oobCode:this._password});default:mr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xf(e,i,"signUpPassword",DA);case"emailLink":return LA(e,{idToken:t,email:this._email,oobCode:this._password});default:mr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function aa(n,e){return Fl(n,"POST","/v1/accounts:signInWithIdp",ps(n,e))}/**
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
 */const MA="http://localhost";class Zs extends hp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Zs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):mr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=ap(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new Zs(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return aa(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,aa(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,aa(e,t)}buildRequest(){const e={requestUri:MA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=jl(t)}return e}}/**
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
 */function jA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UA(n){const e=cl(dl(n)).link,t=e?cl(dl(e)).deep_link_id:null,i=cl(dl(n)).deep_link_id;return(i?cl(dl(i)).link:null)||i||t||e||n}class fp{constructor(e){var t,i,o,l,c,f;const p=cl(dl(e)),v=(t=p.apiKey)!==null&&t!==void 0?t:null,E=(i=p.oobCode)!==null&&i!==void 0?i:null,A=jA((o=p.mode)!==null&&o!==void 0?o:null);Ne(v&&E&&A,"argument-error"),this.apiKey=v,this.operation=A,this.code=E,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.lang)!==null&&c!==void 0?c:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=UA(e);try{return new fp(t)}catch{return null}}}/**
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
 */class ma{constructor(){this.providerId=ma.PROVIDER_ID}static credential(e,t){return Cl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=fp.parseLink(t);return Ne(i,"argument-error"),Cl._fromEmailAndCode(e,i.code,i.tenantId)}}ma.PROVIDER_ID="password";ma.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ma.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class gw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bl extends gw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qi extends Bl{constructor(){super("facebook.com")}static credential(e){return Zs._fromParams({providerId:Qi.PROVIDER_ID,signInMethod:Qi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qi.credentialFromTaggedObject(e)}static credentialFromError(e){return Qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qi.credential(e.oauthAccessToken)}catch{return null}}}Qi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qi.PROVIDER_ID="facebook.com";/**
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
 */class Xi extends Bl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Zs._fromParams({providerId:Xi.PROVIDER_ID,signInMethod:Xi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Xi.credentialFromTaggedObject(e)}static credentialFromError(e){return Xi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Xi.credential(t,i)}catch{return null}}}Xi.GOOGLE_SIGN_IN_METHOD="google.com";Xi.PROVIDER_ID="google.com";/**
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
 */class Yi extends Bl{constructor(){super("github.com")}static credential(e){return Zs._fromParams({providerId:Yi.PROVIDER_ID,signInMethod:Yi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yi.credentialFromTaggedObject(e)}static credentialFromError(e){return Yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yi.credential(e.oauthAccessToken)}catch{return null}}}Yi.GITHUB_SIGN_IN_METHOD="github.com";Yi.PROVIDER_ID="github.com";/**
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
 */class Ji extends Bl{constructor(){super("twitter.com")}static credential(e,t){return Zs._fromParams({providerId:Ji.PROVIDER_ID,signInMethod:Ji.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ji.credentialFromTaggedObject(e)}static credentialFromError(e){return Ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ji.credential(t,i)}catch{return null}}}Ji.TWITTER_SIGN_IN_METHOD="twitter.com";Ji.PROVIDER_ID="twitter.com";/**
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
 */async function FA(n,e){return Fl(n,"POST","/v1/accounts:signUp",ps(n,e))}/**
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
 */class eo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await fr._fromIdTokenResponse(e,i,o),c=Xy(i);return new eo({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Xy(i);return new eo({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Xy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Mc extends yr{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Mc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Mc(e,t,i,o)}}function yw(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Mc._fromErrorAndOperation(n,l,e,i):l})}async function BA(n,e,t=!1){const i=await Al(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return eo._forOperation(n,"link",i)}/**
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
 */async function $A(n,e,t=!1){const{auth:i}=n;if(Nn(i.app))return Promise.reject(hi(i));const o="reauthenticate";try{const l=await Al(n,yw(i,o,e,n),t);Ne(l.idToken,i,"internal-error");const c=cp(l.idToken);Ne(c,i,"internal-error");const{sub:f}=c;return Ne(n.uid===f,i,"user-mismatch"),eo._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&mr(i,"user-mismatch"),l}}/**
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
 */async function vw(n,e,t=!1){if(Nn(n.app))return Promise.reject(hi(n));const i="signIn",o=await yw(n,i,e),l=await eo._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function zA(n,e){return vw(co(n),e)}/**
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
 */async function _w(n){const e=co(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function HA(n,e,t){if(Nn(n.app))return Promise.reject(hi(n));const i=co(n),c=await xf(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",FA).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&_w(n),p}),f=await eo._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(f.user),f}function qA(n,e,t){return Nn(n.app)?Promise.reject(hi(n)):zA(et(n),ma.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&_w(n),i})}function WA(n,e,t,i){return et(n).onIdTokenChanged(e,t,i)}function KA(n,e,t){return et(n).beforeAuthStateChanged(e,t)}function GA(n,e,t,i){return et(n).onAuthStateChanged(e,t,i)}function Nf(n){return et(n).signOut()}async function Yy(n){return et(n).delete()}const jc="__sak";/**
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
 */class ww{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(jc,"1"),this.storage.removeItem(jc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const QA=1e3,XA=10;class Ew extends ww{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);pA()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,XA):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},QA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ew.type="LOCAL";const YA=Ew;/**
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
 */class Tw extends ww{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Tw.type="SESSION";const Iw=Tw;/**
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
 */function JA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class nd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new nd(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(c).map(async v=>v(t.origin,l)),p=await JA(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nd.receivers=[];/**
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
 */function pp(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class ZA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((f,p)=>{const v=pp("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(A){const C=A;if(C.data.eventId===v)switch(C.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(C.data.response);break;default:clearTimeout(E),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function Vr(){return window}function eC(n){Vr().location.href=n}/**
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
 */function Sw(){return typeof Vr().WorkerGlobalScope<"u"&&typeof Vr().importScripts=="function"}async function tC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nC(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function rC(){return Sw()?self:null}/**
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
 */const Aw="firebaseLocalStorageDb",iC=1,Uc="firebaseLocalStorage",Cw="fbase_key";class $l{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function rd(n,e){return n.transaction([Uc],e?"readwrite":"readonly").objectStore(Uc)}function sC(){const n=indexedDB.deleteDatabase(Aw);return new $l(n).toPromise()}function bf(){const n=indexedDB.open(Aw,iC);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Uc,{keyPath:Cw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Uc)?e(i):(i.close(),await sC(),e(await bf()))})})}async function Jy(n,e,t){const i=rd(n,!0).put({[Cw]:e,value:t});return new $l(i).toPromise()}async function oC(n,e){const t=rd(n,!1).get(e),i=await new $l(t).toPromise();return i===void 0?null:i.value}function Zy(n,e){const t=rd(n,!0).delete(e);return new $l(t).toPromise()}const aC=800,lC=3;class Rw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>lC)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nd._getInstance(rC()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await tC(),!this.activeServiceWorker)return;this.sender=new ZA(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bf();return await Jy(e,jc,"1"),await Zy(e,jc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Jy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>oC(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=rd(o,!1).getAll();return new $l(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rw.type="LOCAL";const uC=Rw;new Ul(3e4,6e4);/**
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
 */function cC(n,e){return e?ci(e):(Ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class mp extends hp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return aa(e,this._buildIdpRequest())}_linkToIdToken(e,t){return aa(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return aa(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function dC(n){return vw(n.auth,new mp(n),n.bypassAuthState)}function hC(n){const{auth:e,user:t}=n;return Ne(t,e,"internal-error"),$A(t,new mp(n),n.bypassAuthState)}async function fC(n){const{auth:e,user:t}=n;return Ne(t,e,"internal-error"),BA(t,new mp(n),n.bypassAuthState)}/**
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
 */class kw{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dC;case"linkViaPopup":case"linkViaRedirect":return fC;case"reauthViaPopup":case"reauthViaRedirect":return hC;default:mr(this.auth,"internal-error")}}resolve(e){pi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pC=new Ul(2e3,1e4);class ia extends kw{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,ia.currentPopupAction&&ia.currentPopupAction.cancel(),ia.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ne(e,this.auth,"internal-error"),e}async onExecution(){pi(this.filter.length===1,"Popup operations only handle one event");const e=pp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Or(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Or(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ia.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Or(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pC.get())};e()}}ia.currentPopupAction=null;/**
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
 */const mC="pendingRedirect",Sc=new Map;class gC extends kw{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Sc.get(this.auth._key());if(!e){try{const i=await yC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Sc.set(this.auth._key(),e)}return this.bypassAuthState||Sc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yC(n,e){const t=wC(e),i=_C(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function vC(n,e){Sc.set(n._key(),e)}function _C(n){return ci(n._redirectPersistence)}function wC(n){return Ic(mC,n.config.apiKey,n.name)}async function EC(n,e,t=!1){if(Nn(n.app))return Promise.reject(hi(n));const i=co(n),o=cC(i,e),c=await new gC(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
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
 */const TC=600*1e3;class IC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Pw(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Or(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TC&&this.cachedEventUids.clear(),this.cachedEventUids.has(ev(e))}saveEventToCache(e){this.cachedEventUids.add(ev(e)),this.lastProcessedEventTime=Date.now()}}function ev(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Pw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SC(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pw(n);default:return!1}}/**
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
 */async function AC(n,e={}){return ms(n,"GET","/v1/projects",e)}/**
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
 */const CC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RC=/^https?/;async function kC(n){if(n.config.emulator)return;const{authorizedDomains:e}=await AC(n);for(const t of e)try{if(PC(t))return}catch{}mr(n,"unauthorized-domain")}function PC(n){const e=kf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!RC.test(t))return!1;if(CC.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const xC=new Ul(3e4,6e4);function tv(){const n=Vr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function NC(n){return new Promise((e,t)=>{var i,o,l;function c(){tv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tv(),t(Or(n,"network-request-failed"))},timeout:xC.get()})}if(!((o=(i=Vr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=Vr().gapi)===null||l===void 0)&&l.load)c();else{const f=IA("iframefcb");return Vr()[f]=()=>{gapi.load?c():t(Or(n,"network-request-failed"))},fw(`${TA()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw Ac=null,e})}let Ac=null;function bC(n){return Ac=Ac||NC(n),Ac}/**
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
 */const DC=new Ul(5e3,15e3),OC="__/auth/iframe",VC="emulator/auth/iframe",LC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jC(n){const e=n.config;Ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?up(e,VC):`https://${n.config.authDomain}/${OC}`,i={apiKey:e.apiKey,appName:n.name,v:uo},o=MC.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${jl(i).slice(1)}`}async function UC(n){const e=await bC(n),t=Vr().gapi;return Ne(t,n,"internal-error"),e.open({where:document.body,url:jC(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LC,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=Or(n,"network-request-failed"),f=Vr().setTimeout(()=>{l(c)},DC.get());function p(){Vr().clearTimeout(f),o(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const FC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BC=500,$C=600,zC="_blank",HC="http://localhost";class nv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qC(n,e,t,i=BC,o=$C){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const p=Object.assign(Object.assign({},FC),{width:i.toString(),height:o.toString(),top:l,left:c}),v=nn().toLowerCase();t&&(f=ow(v)?zC:t),iw(v)&&(e=e||HC,p.scrollbars="yes");const E=Object.entries(p).reduce((C,[N,K])=>`${C}${N}=${K},`,"");if(fA(v)&&f!=="_self")return WC(e||"",f),new nv(null);const A=window.open(e||"",f,E);Ne(A,n,"popup-blocked");try{A.focus()}catch{}return new nv(A)}function WC(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const KC="__/auth/handler",GC="emulator/auth/handler",QC=encodeURIComponent("fac");async function rv(n,e,t,i,o,l){Ne(n.config.authDomain,n,"auth-domain-config-required"),Ne(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:uo,eventId:o};if(e instanceof gw){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",LI(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,A]of Object.entries({}))c[E]=A}if(e instanceof Bl){const E=e.getScopes().filter(A=>A!=="");E.length>0&&(c.scopes=E.join(","))}n.tenantId&&(c.tid=n.tenantId);const f=c;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const p=await n._getAppCheckToken(),v=p?`#${QC}=${encodeURIComponent(p)}`:"";return`${XC(n)}?${jl(f).slice(1)}${v}`}function XC({config:n}){return n.emulator?up(n,GC):`https://${n.authDomain}/${KC}`}/**
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
 */const cf="webStorageSupport";class YC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Iw,this._completeRedirectFn=EC,this._overrideRedirectResult=vC}async _openPopup(e,t,i,o){var l;pi((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await rv(e,t,i,kf(),o);return qC(e,c,pp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await rv(e,t,i,kf(),o);return eC(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(pi(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await UC(e),i=new IC(e);return t.register("authEvent",o=>(Ne(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(cf,{type:cf},o=>{var l;const c=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[cf];c!==void 0&&t(!!c),mr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return dw()||sw()||dp()}}const JC=YC;var iv="@firebase/auth",sv="1.10.8";/**
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
 */class ZC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function eR(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tR(n){pr(new Qn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=i.options;Ne(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hw(n)},v=new _A(i,o,l,p);return PA(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),pr(new Qn("auth-internal",e=>{const t=co(e.getProvider("auth").getImmediate());return(i=>new ZC(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(iv,sv,eR(n)),En(iv,sv,"esm2017")}/**
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
 */const nR=300,rR=B_("authIdTokenMaxAge")||nR;let ov=null;const iR=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>rR)return;const o=t==null?void 0:t.token;ov!==o&&(ov=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function sR(n=ed()){const e=lo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=kA(n,{popupRedirectResolver:JC,persistence:[uC,YA,Iw]}),i=B_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=iR(l.toString());KA(t,c,()=>c(t.currentUser)),WA(t,f=>c(f))}}const o=j_("auth");return o&&xA(t,`http://${o}`),t}function oR(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}wA({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=Or("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",oR().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tR("Browser");var av=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ns,xw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,S){function k(){}k.prototype=S.prototype,P.D=S.prototype,P.prototype=new k,P.prototype.constructor=P,P.C=function(b,O,R){for(var I=Array(arguments.length-2),he=2;he<arguments.length;he++)I[he-2]=arguments[he];return S.prototype[O].apply(b,I)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,S,k){k||(k=0);var b=Array(16);if(typeof S=="string")for(var O=0;16>O;++O)b[O]=S.charCodeAt(k++)|S.charCodeAt(k++)<<8|S.charCodeAt(k++)<<16|S.charCodeAt(k++)<<24;else for(O=0;16>O;++O)b[O]=S[k++]|S[k++]<<8|S[k++]<<16|S[k++]<<24;S=P.g[0],k=P.g[1],O=P.g[2];var R=P.g[3],I=S+(R^k&(O^R))+b[0]+3614090360&4294967295;S=k+(I<<7&4294967295|I>>>25),I=R+(O^S&(k^O))+b[1]+3905402710&4294967295,R=S+(I<<12&4294967295|I>>>20),I=O+(k^R&(S^k))+b[2]+606105819&4294967295,O=R+(I<<17&4294967295|I>>>15),I=k+(S^O&(R^S))+b[3]+3250441966&4294967295,k=O+(I<<22&4294967295|I>>>10),I=S+(R^k&(O^R))+b[4]+4118548399&4294967295,S=k+(I<<7&4294967295|I>>>25),I=R+(O^S&(k^O))+b[5]+1200080426&4294967295,R=S+(I<<12&4294967295|I>>>20),I=O+(k^R&(S^k))+b[6]+2821735955&4294967295,O=R+(I<<17&4294967295|I>>>15),I=k+(S^O&(R^S))+b[7]+4249261313&4294967295,k=O+(I<<22&4294967295|I>>>10),I=S+(R^k&(O^R))+b[8]+1770035416&4294967295,S=k+(I<<7&4294967295|I>>>25),I=R+(O^S&(k^O))+b[9]+2336552879&4294967295,R=S+(I<<12&4294967295|I>>>20),I=O+(k^R&(S^k))+b[10]+4294925233&4294967295,O=R+(I<<17&4294967295|I>>>15),I=k+(S^O&(R^S))+b[11]+2304563134&4294967295,k=O+(I<<22&4294967295|I>>>10),I=S+(R^k&(O^R))+b[12]+1804603682&4294967295,S=k+(I<<7&4294967295|I>>>25),I=R+(O^S&(k^O))+b[13]+4254626195&4294967295,R=S+(I<<12&4294967295|I>>>20),I=O+(k^R&(S^k))+b[14]+2792965006&4294967295,O=R+(I<<17&4294967295|I>>>15),I=k+(S^O&(R^S))+b[15]+1236535329&4294967295,k=O+(I<<22&4294967295|I>>>10),I=S+(O^R&(k^O))+b[1]+4129170786&4294967295,S=k+(I<<5&4294967295|I>>>27),I=R+(k^O&(S^k))+b[6]+3225465664&4294967295,R=S+(I<<9&4294967295|I>>>23),I=O+(S^k&(R^S))+b[11]+643717713&4294967295,O=R+(I<<14&4294967295|I>>>18),I=k+(R^S&(O^R))+b[0]+3921069994&4294967295,k=O+(I<<20&4294967295|I>>>12),I=S+(O^R&(k^O))+b[5]+3593408605&4294967295,S=k+(I<<5&4294967295|I>>>27),I=R+(k^O&(S^k))+b[10]+38016083&4294967295,R=S+(I<<9&4294967295|I>>>23),I=O+(S^k&(R^S))+b[15]+3634488961&4294967295,O=R+(I<<14&4294967295|I>>>18),I=k+(R^S&(O^R))+b[4]+3889429448&4294967295,k=O+(I<<20&4294967295|I>>>12),I=S+(O^R&(k^O))+b[9]+568446438&4294967295,S=k+(I<<5&4294967295|I>>>27),I=R+(k^O&(S^k))+b[14]+3275163606&4294967295,R=S+(I<<9&4294967295|I>>>23),I=O+(S^k&(R^S))+b[3]+4107603335&4294967295,O=R+(I<<14&4294967295|I>>>18),I=k+(R^S&(O^R))+b[8]+1163531501&4294967295,k=O+(I<<20&4294967295|I>>>12),I=S+(O^R&(k^O))+b[13]+2850285829&4294967295,S=k+(I<<5&4294967295|I>>>27),I=R+(k^O&(S^k))+b[2]+4243563512&4294967295,R=S+(I<<9&4294967295|I>>>23),I=O+(S^k&(R^S))+b[7]+1735328473&4294967295,O=R+(I<<14&4294967295|I>>>18),I=k+(R^S&(O^R))+b[12]+2368359562&4294967295,k=O+(I<<20&4294967295|I>>>12),I=S+(k^O^R)+b[5]+4294588738&4294967295,S=k+(I<<4&4294967295|I>>>28),I=R+(S^k^O)+b[8]+2272392833&4294967295,R=S+(I<<11&4294967295|I>>>21),I=O+(R^S^k)+b[11]+1839030562&4294967295,O=R+(I<<16&4294967295|I>>>16),I=k+(O^R^S)+b[14]+4259657740&4294967295,k=O+(I<<23&4294967295|I>>>9),I=S+(k^O^R)+b[1]+2763975236&4294967295,S=k+(I<<4&4294967295|I>>>28),I=R+(S^k^O)+b[4]+1272893353&4294967295,R=S+(I<<11&4294967295|I>>>21),I=O+(R^S^k)+b[7]+4139469664&4294967295,O=R+(I<<16&4294967295|I>>>16),I=k+(O^R^S)+b[10]+3200236656&4294967295,k=O+(I<<23&4294967295|I>>>9),I=S+(k^O^R)+b[13]+681279174&4294967295,S=k+(I<<4&4294967295|I>>>28),I=R+(S^k^O)+b[0]+3936430074&4294967295,R=S+(I<<11&4294967295|I>>>21),I=O+(R^S^k)+b[3]+3572445317&4294967295,O=R+(I<<16&4294967295|I>>>16),I=k+(O^R^S)+b[6]+76029189&4294967295,k=O+(I<<23&4294967295|I>>>9),I=S+(k^O^R)+b[9]+3654602809&4294967295,S=k+(I<<4&4294967295|I>>>28),I=R+(S^k^O)+b[12]+3873151461&4294967295,R=S+(I<<11&4294967295|I>>>21),I=O+(R^S^k)+b[15]+530742520&4294967295,O=R+(I<<16&4294967295|I>>>16),I=k+(O^R^S)+b[2]+3299628645&4294967295,k=O+(I<<23&4294967295|I>>>9),I=S+(O^(k|~R))+b[0]+4096336452&4294967295,S=k+(I<<6&4294967295|I>>>26),I=R+(k^(S|~O))+b[7]+1126891415&4294967295,R=S+(I<<10&4294967295|I>>>22),I=O+(S^(R|~k))+b[14]+2878612391&4294967295,O=R+(I<<15&4294967295|I>>>17),I=k+(R^(O|~S))+b[5]+4237533241&4294967295,k=O+(I<<21&4294967295|I>>>11),I=S+(O^(k|~R))+b[12]+1700485571&4294967295,S=k+(I<<6&4294967295|I>>>26),I=R+(k^(S|~O))+b[3]+2399980690&4294967295,R=S+(I<<10&4294967295|I>>>22),I=O+(S^(R|~k))+b[10]+4293915773&4294967295,O=R+(I<<15&4294967295|I>>>17),I=k+(R^(O|~S))+b[1]+2240044497&4294967295,k=O+(I<<21&4294967295|I>>>11),I=S+(O^(k|~R))+b[8]+1873313359&4294967295,S=k+(I<<6&4294967295|I>>>26),I=R+(k^(S|~O))+b[15]+4264355552&4294967295,R=S+(I<<10&4294967295|I>>>22),I=O+(S^(R|~k))+b[6]+2734768916&4294967295,O=R+(I<<15&4294967295|I>>>17),I=k+(R^(O|~S))+b[13]+1309151649&4294967295,k=O+(I<<21&4294967295|I>>>11),I=S+(O^(k|~R))+b[4]+4149444226&4294967295,S=k+(I<<6&4294967295|I>>>26),I=R+(k^(S|~O))+b[11]+3174756917&4294967295,R=S+(I<<10&4294967295|I>>>22),I=O+(S^(R|~k))+b[2]+718787259&4294967295,O=R+(I<<15&4294967295|I>>>17),I=k+(R^(O|~S))+b[9]+3951481745&4294967295,P.g[0]=P.g[0]+S&4294967295,P.g[1]=P.g[1]+(O+(I<<21&4294967295|I>>>11))&4294967295,P.g[2]=P.g[2]+O&4294967295,P.g[3]=P.g[3]+R&4294967295}i.prototype.u=function(P,S){S===void 0&&(S=P.length);for(var k=S-this.blockSize,b=this.B,O=this.h,R=0;R<S;){if(O==0)for(;R<=k;)o(this,P,R),R+=this.blockSize;if(typeof P=="string"){for(;R<S;)if(b[O++]=P.charCodeAt(R++),O==this.blockSize){o(this,b),O=0;break}}else for(;R<S;)if(b[O++]=P[R++],O==this.blockSize){o(this,b),O=0;break}}this.h=O,this.o+=S},i.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var S=1;S<P.length-8;++S)P[S]=0;var k=8*this.o;for(S=P.length-8;S<P.length;++S)P[S]=k&255,k/=256;for(this.u(P),P=Array(16),S=k=0;4>S;++S)for(var b=0;32>b;b+=8)P[k++]=this.g[S]>>>b&255;return P};function l(P,S){var k=f;return Object.prototype.hasOwnProperty.call(k,P)?k[P]:k[P]=S(P)}function c(P,S){this.h=S;for(var k=[],b=!0,O=P.length-1;0<=O;O--){var R=P[O]|0;b&&R==S||(k[O]=R,b=!1)}this.g=k}var f={};function p(P){return-128<=P&&128>P?l(P,function(S){return new c([S|0],0>S?-1:0)}):new c([P|0],0>P?-1:0)}function v(P){if(isNaN(P)||!isFinite(P))return A;if(0>P)return B(v(-P));for(var S=[],k=1,b=0;P>=k;b++)S[b]=P/k|0,k*=4294967296;return new c(S,0)}function E(P,S){if(P.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(P.charAt(0)=="-")return B(E(P.substring(1),S));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=v(Math.pow(S,8)),b=A,O=0;O<P.length;O+=8){var R=Math.min(8,P.length-O),I=parseInt(P.substring(O,O+R),S);8>R?(R=v(Math.pow(S,R)),b=b.j(R).add(v(I))):(b=b.j(k),b=b.add(v(I)))}return b}var A=p(0),C=p(1),N=p(16777216);n=c.prototype,n.m=function(){if(Q(this))return-B(this).m();for(var P=0,S=1,k=0;k<this.g.length;k++){var b=this.i(k);P+=(0<=b?b:4294967296+b)*S,S*=4294967296}return P},n.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(K(this))return"0";if(Q(this))return"-"+B(this).toString(P);for(var S=v(Math.pow(P,6)),k=this,b="";;){var O=H(k,S).g;k=ae(k,O.j(S));var R=((0<k.g.length?k.g[0]:k.h)>>>0).toString(P);if(k=O,K(k))return R+b;for(;6>R.length;)R="0"+R;b=R+b}},n.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function K(P){if(P.h!=0)return!1;for(var S=0;S<P.g.length;S++)if(P.g[S]!=0)return!1;return!0}function Q(P){return P.h==-1}n.l=function(P){return P=ae(this,P),Q(P)?-1:K(P)?0:1};function B(P){for(var S=P.g.length,k=[],b=0;b<S;b++)k[b]=~P.g[b];return new c(k,~P.h).add(C)}n.abs=function(){return Q(this)?B(this):this},n.add=function(P){for(var S=Math.max(this.g.length,P.g.length),k=[],b=0,O=0;O<=S;O++){var R=b+(this.i(O)&65535)+(P.i(O)&65535),I=(R>>>16)+(this.i(O)>>>16)+(P.i(O)>>>16);b=I>>>16,R&=65535,I&=65535,k[O]=I<<16|R}return new c(k,k[k.length-1]&-2147483648?-1:0)};function ae(P,S){return P.add(B(S))}n.j=function(P){if(K(this)||K(P))return A;if(Q(this))return Q(P)?B(this).j(B(P)):B(B(this).j(P));if(Q(P))return B(this.j(B(P)));if(0>this.l(N)&&0>P.l(N))return v(this.m()*P.m());for(var S=this.g.length+P.g.length,k=[],b=0;b<2*S;b++)k[b]=0;for(b=0;b<this.g.length;b++)for(var O=0;O<P.g.length;O++){var R=this.i(b)>>>16,I=this.i(b)&65535,he=P.i(O)>>>16,$=P.i(O)&65535;k[2*b+2*O]+=I*$,Z(k,2*b+2*O),k[2*b+2*O+1]+=R*$,Z(k,2*b+2*O+1),k[2*b+2*O+1]+=I*he,Z(k,2*b+2*O+1),k[2*b+2*O+2]+=R*he,Z(k,2*b+2*O+2)}for(b=0;b<S;b++)k[b]=k[2*b+1]<<16|k[2*b];for(b=S;b<2*S;b++)k[b]=0;return new c(k,0)};function Z(P,S){for(;(P[S]&65535)!=P[S];)P[S+1]+=P[S]>>>16,P[S]&=65535,S++}function X(P,S){this.g=P,this.h=S}function H(P,S){if(K(S))throw Error("division by zero");if(K(P))return new X(A,A);if(Q(P))return S=H(B(P),S),new X(B(S.g),B(S.h));if(Q(S))return S=H(P,B(S)),new X(B(S.g),S.h);if(30<P.g.length){if(Q(P)||Q(S))throw Error("slowDivide_ only works with positive integers.");for(var k=C,b=S;0>=b.l(P);)k=me(k),b=me(b);var O=de(k,1),R=de(b,1);for(b=de(b,2),k=de(k,2);!K(b);){var I=R.add(b);0>=I.l(P)&&(O=O.add(k),R=I),b=de(b,1),k=de(k,1)}return S=ae(P,O.j(S)),new X(O,S)}for(O=A;0<=P.l(S);){for(k=Math.max(1,Math.floor(P.m()/S.m())),b=Math.ceil(Math.log(k)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),R=v(k),I=R.j(S);Q(I)||0<I.l(P);)k-=b,R=v(k),I=R.j(S);K(R)&&(R=C),O=O.add(R),P=ae(P,I)}return new X(O,P)}n.A=function(P){return H(this,P).h},n.and=function(P){for(var S=Math.max(this.g.length,P.g.length),k=[],b=0;b<S;b++)k[b]=this.i(b)&P.i(b);return new c(k,this.h&P.h)},n.or=function(P){for(var S=Math.max(this.g.length,P.g.length),k=[],b=0;b<S;b++)k[b]=this.i(b)|P.i(b);return new c(k,this.h|P.h)},n.xor=function(P){for(var S=Math.max(this.g.length,P.g.length),k=[],b=0;b<S;b++)k[b]=this.i(b)^P.i(b);return new c(k,this.h^P.h)};function me(P){for(var S=P.g.length+1,k=[],b=0;b<S;b++)k[b]=P.i(b)<<1|P.i(b-1)>>>31;return new c(k,P.h)}function de(P,S){var k=S>>5;S%=32;for(var b=P.g.length-k,O=[],R=0;R<b;R++)O[R]=0<S?P.i(R+k)>>>S|P.i(R+k+1)<<32-S:P.i(R+k);return new c(O,P.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,xw=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=v,c.fromString=E,ns=c}).apply(typeof av<"u"?av:typeof self<"u"?self:typeof window<"u"?window:{});var pc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nw,hl,bw,Cc,Df,Dw,Ow,Vw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof pc=="object"&&pc];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var T=0;T<u.length-1;T++){var j=u[T];if(!(j in _))break e;_=_[j]}u=u[u.length-1],T=_[u],m=m(T),m!=T&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,T=!1,j={next:function(){if(!T&&_<u.length){var G=_++;return{value:m(G,u[G]),done:!1}}return T=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},f=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function v(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function E(u,m,_){return u.call.apply(u.bind,arguments)}function A(u,m,_){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,T),u.apply(m,j)}}return function(){return u.apply(m,arguments)}}function C(u,m,_){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:A,C.apply(null,arguments)}function N(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function K(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(T,j,G){for(var ce=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)ce[Ze-2]=arguments[Ze];return m.prototype[j].apply(T,ce)}}function Q(u){const m=u.length;if(0<m){const _=Array(m);for(let T=0;T<m;T++)_[T]=u[T];return _}return[]}function B(u,m){for(let _=1;_<arguments.length;_++){const T=arguments[_];if(p(T)){const j=u.length||0,G=T.length||0;u.length=j+G;for(let ce=0;ce<G;ce++)u[j+ce]=T[ce]}else u.push(T)}}class ae{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function Z(u){return/^[\s\xa0]*$/.test(u)}function X(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function H(u){return H[" "](u),u}H[" "]=function(){};var me=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function de(u,m,_){for(const T in u)m.call(_,u[T],T,u)}function P(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function S(u){const m={};for(const _ in u)m[_]=u[_];return m}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(u,m){let _,T;for(let j=1;j<arguments.length;j++){T=arguments[j];for(_ in T)u[_]=T[_];for(let G=0;G<k.length;G++)_=k[G],Object.prototype.hasOwnProperty.call(T,_)&&(u[_]=T[_])}}function O(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function R(u){f.setTimeout(()=>{throw u},0)}function I(){var u=te;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class he{constructor(){this.h=this.g=null}add(m,_){const T=$.get();T.set(m,_),this.h?this.h.next=T:this.g=T,this.h=T}}var $=new ae(()=>new fe,u=>u.reset());class fe{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,L=!1,te=new he,Y=()=>{const u=f.Promise.resolve(void 0);ye=()=>{u.then(V)}};var V=()=>{for(var u;u=I();){try{u.h.call(u.g)}catch(_){R(_)}var m=$;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}L=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var we=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};f.addEventListener("test",_,m),f.removeEventListener("test",_,m)}catch{}return u})();function Oe(u,m){if(pe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(me){e:{try{H(m.nodeName);var j=!0;break e}catch{}j=!1}j||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ue[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Oe.aa.h.call(this)}}K(Oe,pe);var Ue={2:"touch",3:"pen",4:"mouse"};Oe.prototype.h=function(){Oe.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Be="closure_listenable_"+(1e6*Math.random()|0),He=0;function Ye(u,m,_,T,j){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!T,this.ha=j,this.key=++He,this.da=this.fa=!1}function It(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Tn(u){this.src=u,this.g={},this.h=0}Tn.prototype.add=function(u,m,_,T,j){var G=u.toString();u=this.g[G],u||(u=this.g[G]=[],this.h++);var ce=In(u,m,T,j);return-1<ce?(m=u[ce],_||(m.fa=!1)):(m=new Ye(m,this.src,G,!!T,j),m.fa=_,u.push(m)),m};function Br(u,m){var _=m.type;if(_ in u.g){var T=u.g[_],j=Array.prototype.indexOf.call(T,m,void 0),G;(G=0<=j)&&Array.prototype.splice.call(T,j,1),G&&(It(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function In(u,m,_,T){for(var j=0;j<u.length;++j){var G=u[j];if(!G.da&&G.listener==m&&G.capture==!!_&&G.ha==T)return j}return-1}var vr="closure_lm_"+(1e6*Math.random()|0),vi={};function _i(u,m,_,T,j){if(Array.isArray(m)){for(var G=0;G<m.length;G++)_i(u,m[G],_,T,j);return null}return _=wi(_),u&&u[Be]?u.K(m,_,v(T)?!!T.capture:!1,j):_r(u,m,_,!1,T,j)}function _r(u,m,_,T,j,G){if(!m)throw Error("Invalid event type");var ce=v(j)?!!j.capture:!!j,Ze=zr(u);if(Ze||(u[vr]=Ze=new Tn(u)),_=Ze.add(m,_,T,ce,G),_.proxy)return _;if(T=po(),_.proxy=T,T.src=u,T.listener=_,u.addEventListener)we||(j=ce),j===void 0&&(j=!1),u.addEventListener(m.toString(),T,j);else if(u.attachEvent)u.attachEvent(Ln(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function po(){function u(_){return m.call(u.src,u.listener,_)}const m=Xn;return u}function $r(u,m,_,T,j){if(Array.isArray(m))for(var G=0;G<m.length;G++)$r(u,m[G],_,T,j);else T=v(T)?!!T.capture:!!T,_=wi(_),u&&u[Be]?(u=u.i,m=String(m).toString(),m in u.g&&(G=u.g[m],_=In(G,_,T,j),-1<_&&(It(G[_]),Array.prototype.splice.call(G,_,1),G.length==0&&(delete u.g[m],u.h--)))):u&&(u=zr(u))&&(m=u.g[m.toString()],u=-1,m&&(u=In(m,_,T,j)),(_=-1<u?m[u]:null)&&Vn(_))}function Vn(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Be])Br(m.i,u);else{var _=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(_,T,u.capture):m.detachEvent?m.detachEvent(Ln(_),T):m.addListener&&m.removeListener&&m.removeListener(T),(_=zr(m))?(Br(_,u),_.h==0&&(_.src=null,m[vr]=null)):It(u)}}}function Ln(u){return u in vi?vi[u]:vi[u]="on"+u}function Xn(u,m){if(u.da)u=!0;else{m=new Oe(m,this);var _=u.listener,T=u.ha||u.src;u.fa&&Vn(u),u=_.call(T,m)}return u}function zr(u){return u=u[vr],u instanceof Tn?u:null}var Hr="__closure_events_fn_"+(1e9*Math.random()>>>0);function wi(u){return typeof u=="function"?u:(u[Hr]||(u[Hr]=function(m){return u.handleEvent(m)}),u[Hr])}function ct(){q.call(this),this.i=new Tn(this),this.M=this,this.F=null}K(ct,q),ct.prototype[Be]=!0,ct.prototype.removeEventListener=function(u,m,_,T){$r(this,u,m,_,T)};function pt(u,m){var _,T=u.F;if(T)for(_=[];T;T=T.F)_.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new pe(m,u);else if(m instanceof pe)m.target=m.target||u;else{var j=m;m=new pe(T,u),b(m,j)}if(j=!0,_)for(var G=_.length-1;0<=G;G--){var ce=m.g=_[G];j=Mn(ce,T,!0,m)&&j}if(ce=m.g=u,j=Mn(ce,T,!0,m)&&j,j=Mn(ce,T,!1,m)&&j,_)for(G=0;G<_.length;G++)ce=m.g=_[G],j=Mn(ce,T,!1,m)&&j}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],T=0;T<_.length;T++)It(_[T]);delete u.g[m],u.h--}}this.F=null},ct.prototype.K=function(u,m,_,T){return this.i.add(String(u),m,!1,_,T)},ct.prototype.L=function(u,m,_,T){return this.i.add(String(u),m,!0,_,T)};function Mn(u,m,_,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var j=!0,G=0;G<m.length;++G){var ce=m[G];if(ce&&!ce.da&&ce.capture==_){var Ze=ce.listener,xt=ce.ha||ce.src;ce.fa&&Br(u.i,ce),j=Ze.call(xt,T)!==!1&&j}}return j&&!T.defaultPrevented}function Ei(u,m,_){if(typeof u=="function")_&&(u=C(u,_));else if(u&&typeof u.handleEvent=="function")u=C(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:f.setTimeout(u,m||0)}function wr(u){u.g=Ei(()=>{u.g=null,u.i&&(u.i=!1,wr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Yn extends q{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:wr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Er(u){q.call(this),this.h=u,this.g={}}K(Er,q);var _s=[];function ws(u){de(u.g,function(m,_){this.g.hasOwnProperty(_)&&Vn(m)},u),u.g={}}Er.prototype.N=function(){Er.aa.N.call(this),ws(this)},Er.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ti=f.JSON.stringify,Ii=f.JSON.parse,z=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function re(){}re.prototype.h=null;function le(u){return u.h||(u.h=u.i())}function Me(){}var Re={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xe(){pe.call(this,"d")}K(xe,pe);function St(){pe.call(this,"c")}K(St,pe);var Ft={},Si=null;function qr(){return Si=Si||new ct}Ft.La="serverreachability";function Sa(u){pe.call(this,Ft.La,u)}K(Sa,pe);function Wr(u){const m=qr();pt(m,new Sa(m))}Ft.STAT_EVENT="statevent";function Aa(u,m){pe.call(this,Ft.STAT_EVENT,u),this.stat=m}K(Aa,pe);function _t(u){const m=qr();pt(m,new Aa(m,u))}Ft.Ma="timingevent";function mo(u,m){pe.call(this,Ft.Ma,u),this.size=m}K(mo,pe);function Jn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},m)}function Es(){this.g=!0}Es.prototype.xa=function(){this.g=!1};function Ts(u,m,_,T,j,G){u.info(function(){if(u.g)if(G)for(var ce="",Ze=G.split("&"),xt=0;xt<Ze.length;xt++){var We=Ze[xt].split("=");if(1<We.length){var Ot=We[0];We=We[1];var At=Ot.split("_");ce=2<=At.length&&At[1]=="type"?ce+(Ot+"="+We+"&"):ce+(Ot+"=redacted&")}}else ce=null;else ce=G;return"XMLHTTP REQ ("+T+") [attempt "+j+"]: "+m+`
`+_+`
`+ce})}function go(u,m,_,T,j,G,ce){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+j+"]: "+m+`
`+_+`
`+G+" "+ce})}function Zn(u,m,_,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Ad(u,_)+(T?" "+T:"")})}function Ca(u,m){u.info(function(){return"TIMEOUT: "+m})}Es.prototype.info=function(){};function Ad(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var T=_[u];if(!(2>T.length)){var j=T[1];if(Array.isArray(j)&&!(1>j.length)){var G=j[0];if(G!="noop"&&G!="stop"&&G!="close")for(var ce=1;ce<j.length;ce++)j[ce]=""}}}}return Ti(_)}catch{return m}}var yo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Jl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},er;function Is(){}K(Is,re),Is.prototype.g=function(){return new XMLHttpRequest},Is.prototype.i=function(){return{}},er=new Is;function tr(u,m,_,T){this.j=u,this.i=m,this.l=_,this.R=T||1,this.U=new Er(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Zl}function Zl(){this.i=null,this.g="",this.h=!1}var Ra={},vo={};function _o(u,m,_){u.L=1,u.v=Pi(An(m)),u.m=_,u.P=!0,ka(u,null)}function ka(u,m){u.F=Date.now(),rt(u),u.A=An(u.v);var _=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),Ni(_.i,"t",T),u.C=0,_=u.j.J,u.h=new Zl,u.g=yu(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Yn(C(u.Y,u,u.g),u.O)),m=u.U,_=u.g,T=u.ca;var j="readystatechange";Array.isArray(j)||(j&&(_s[0]=j.toString()),j=_s);for(var G=0;G<j.length;G++){var ce=_i(_,j[G],T||m.handleEvent,!1,m.h||m);if(!ce)break;m.g[ce.key]=ce}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Wr(),Ts(u.i,u.u,u.A,u.l,u.R,u.m)}tr.prototype.ca=function(u){u=u.target;const m=this.M;m&&hn(u)==3?m.j():this.Y(u)},tr.prototype.Y=function(u){try{if(u==this.g)e:{const At=hn(this.g);var m=this.g.Ba();const Fn=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||Oa(this.g)))){this.J||At!=4||m==7||(m==8||0>=Fn?Wr(3):Wr(2)),Ss(this);var _=this.g.Z();this.X=_;t:if(eu(this)){var T=Oa(this.g);u="";var j=T.length,G=hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jn(this),Ai(this);var ce="";break t}this.h.i=new f.TextDecoder}for(m=0;m<j;m++)this.h.h=!0,u+=this.h.i.decode(T[m],{stream:!(G&&m==j-1)});T.length=0,this.h.g+=u,this.C=0,ce=this.h.g}else ce=this.g.oa();if(this.o=_==200,go(this.i,this.u,this.A,this.l,this.R,At,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Ze,xt=this.g;if((Ze=xt.g?xt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Z(Ze)){var We=Ze;break t}}We=null}if(_=We)Zn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pa(this,_);else{this.o=!1,this.s=3,_t(12),jn(this),Ai(this);break e}}if(this.P){_=!0;let Rn;for(;!this.J&&this.C<ce.length;)if(Rn=Cd(this,ce),Rn==vo){At==4&&(this.s=4,_t(14),_=!1),Zn(this.i,this.l,null,"[Incomplete Response]");break}else if(Rn==Ra){this.s=4,_t(15),Zn(this.i,this.l,ce,"[Invalid Chunk]"),_=!1;break}else Zn(this.i,this.l,Rn,null),Pa(this,Rn);if(eu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||ce.length!=0||this.h.h||(this.s=1,_t(16),_=!1),this.o=this.o&&_,!_)Zn(this.i,this.l,ce,"[Invalid Chunked Response]"),jn(this),Ai(this);else if(0<ce.length&&!this.W){this.W=!0;var Ot=this.j;Ot.g==this&&Ot.ba&&!Ot.M&&(Ot.j.info("Great, no buffering proxy detected. Bytes received: "+ce.length),La(Ot),Ot.M=!0,_t(11))}}else Zn(this.i,this.l,ce,null),Pa(this,ce);At==4&&jn(this),this.o&&!this.J&&(At==4?xo(this.j,this):(this.o=!1,rt(this)))}else Ao(this.g),_==400&&0<ce.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),jn(this),Ai(this)}}}catch{}finally{}};function eu(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Cd(u,m){var _=u.C,T=m.indexOf(`
`,_);return T==-1?vo:(_=Number(m.substring(_,T)),isNaN(_)?Ra:(T+=1,T+_>m.length?vo:(m=m.slice(T,T+_),u.C=T+_,m)))}tr.prototype.cancel=function(){this.J=!0,jn(this)};function rt(u){u.S=Date.now()+u.I,tu(u,u.I)}function tu(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Jn(C(u.ba,u),m)}function Ss(u){u.B&&(f.clearTimeout(u.B),u.B=null)}tr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Ca(this.i,this.A),this.L!=2&&(Wr(),_t(17)),jn(this),this.s=2,Ai(this)):tu(this,this.S-u)};function Ai(u){u.j.G==0||u.J||xo(u.j,u)}function jn(u){Ss(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,ws(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function Pa(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||rn(_.h,u))){if(!u.K&&rn(_.h,u)&&_.G==3){try{var T=_.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var j=T;if(j[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)Po(_),or(_);else break e;ko(_),_t(18)}}else _.za=j[1],0<_.za-_.T&&37500>j[2]&&_.F&&_.v==0&&!_.C&&(_.C=Jn(C(_.Za,_),6e3));if(1>=ru(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Yr(_,11)}else if((u.K||_.g==u)&&Po(_),!Z(m))for(j=_.Da.g.parse(m),m=0;m<j.length;m++){let We=j[m];if(_.T=We[0],We=We[1],_.G==2)if(We[0]=="c"){_.K=We[1],_.ia=We[2];const Ot=We[3];Ot!=null&&(_.la=Ot,_.j.info("VER="+_.la));const At=We[4];At!=null&&(_.Aa=At,_.j.info("SVER="+_.Aa));const Fn=We[5];Fn!=null&&typeof Fn=="number"&&0<Fn&&(T=1.5*Fn,_.L=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const Rn=u.g;if(Rn){const Ns=Rn.g?Rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ns){var G=T.h;G.g||Ns.indexOf("spdy")==-1&&Ns.indexOf("quic")==-1&&Ns.indexOf("h2")==-1||(G.j=G.l,G.g=new Set,G.h&&(xa(G,G.h),G.h=null))}if(T.D){const bo=Rn.g?Rn.g.getResponseHeader("X-HTTP-Session-Id"):null;bo&&(T.ya=bo,tt(T.I,T.D,bo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),T=_;var ce=u;if(T.qa=gu(T,T.J?T.ia:null,T.W),ce.K){iu(T.h,ce);var Ze=ce,xt=T.L;xt&&(Ze.I=xt),Ze.B&&(Ss(Ze),rt(Ze)),T.g=ce}else xs(T);0<_.i.length&&Ar(_)}else We[0]!="stop"&&We[0]!="close"||Yr(_,7);else _.G==3&&(We[0]=="stop"||We[0]=="close"?We[0]=="stop"?Yr(_,7):$t(_):We[0]!="noop"&&_.l&&_.l.ta(We),_.v=0)}}Wr(4)}catch{}}var nu=class{constructor(u,m){this.g=u,this.map=m}};function As(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function ru(u){return u.h?1:u.g?u.g.size:0}function rn(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function xa(u,m){u.g?u.g.add(m):u.h=m}function iu(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}As.prototype.cancel=function(){if(this.i=su(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function su(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return Q(u.i)}function wo(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,T=0;T<_;T++)m.push(u[T]);return m}m=[],_=0;for(T in u)m[_++]=u[T];return m}function Eo(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const T in u)m[_++]=T;return m}}}function Ci(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Eo(u),T=wo(u),j=T.length,G=0;G<j;G++)m.call(void 0,T[G],_&&_[G],u)}var Cs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rd(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var T=u[_].indexOf("="),j=null;if(0<=T){var G=u[_].substring(0,T);j=u[_].substring(T+1)}else G=u[_];m(G,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Kr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Kr){this.h=u.h,Rs(this,u.j),this.o=u.o,this.g=u.g,Ri(this,u.s),this.l=u.l;var m=u.i,_=new Tr;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),ki(this,_),this.m=u.m}else u&&(m=String(u).match(Cs))?(this.h=!1,Rs(this,m[1]||"",!0),this.o=qe(m[2]||""),this.g=qe(m[3]||"",!0),Ri(this,m[4]),this.l=qe(m[5]||"",!0),ki(this,m[6]||"",!0),this.m=qe(m[7]||"")):(this.h=!1,this.i=new Tr(null,this.h))}Kr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(xi(m,To,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(xi(m,To,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(xi(_,_.charAt(0)=="/"?lu:au,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",xi(_,Na)),u.join("")};function An(u){return new Kr(u)}function Rs(u,m,_){u.j=_?qe(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Ri(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function ki(u,m,_){m instanceof Tr?(u.i=m,Ir(u.i,u.h)):(_||(m=xi(m,uu)),u.i=new Tr(m,u.h))}function tt(u,m,_){u.i.set(m,_)}function Pi(u){return tt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function qe(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function xi(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,ou),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function ou(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var To=/[#\/\?@]/g,au=/[#\?:]/g,lu=/[#\?]/g,uu=/[#\?@]/g,Na=/#/g;function Tr(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Bt(u){u.g||(u.g=new Map,u.h=0,u.i&&Rd(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=Tr.prototype,n.add=function(u,m){Bt(this),this.i=null,u=Un(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function nr(u,m){Bt(u),m=Un(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function rr(u,m){return Bt(u),m=Un(u,m),u.g.has(m)}n.forEach=function(u,m){Bt(this),this.g.forEach(function(_,T){_.forEach(function(j){u.call(m,j,T,this)},this)},this)},n.na=function(){Bt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let T=0;T<m.length;T++){const j=u[T];for(let G=0;G<j.length;G++)_.push(m[T])}return _},n.V=function(u){Bt(this);let m=[];if(typeof u=="string")rr(this,u)&&(m=m.concat(this.g.get(Un(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return Bt(this),this.i=null,u=Un(this,u),rr(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Ni(u,m,_){nr(u,m),0<_.length&&(u.i=null,u.g.set(Un(u,m),Q(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var T=m[_];const G=encodeURIComponent(String(T)),ce=this.V(T);for(T=0;T<ce.length;T++){var j=G;ce[T]!==""&&(j+="="+encodeURIComponent(String(ce[T]))),u.push(j)}}return this.i=u.join("&")};function Un(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Ir(u,m){m&&!u.j&&(Bt(u),u.i=null,u.g.forEach(function(_,T){var j=T.toLowerCase();T!=j&&(nr(this,T),Ni(this,j,_))},u)),u.j=m}function kd(u,m){const _=new Es;if(f.Image){const T=new Image;T.onload=N(dn,_,"TestLoadImage: loaded",!0,m,T),T.onerror=N(dn,_,"TestLoadImage: error",!1,m,T),T.onabort=N(dn,_,"TestLoadImage: abort",!1,m,T),T.ontimeout=N(dn,_,"TestLoadImage: timeout",!1,m,T),f.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function cu(u,m){const _=new Es,T=new AbortController,j=setTimeout(()=>{T.abort(),dn(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(G=>{clearTimeout(j),G.ok?dn(_,"TestPingServer: ok",!0,m):dn(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(j),dn(_,"TestPingServer: error",!1,m)})}function dn(u,m,_,T,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),T(_)}catch{}}function Pd(){this.g=new z}function du(u,m,_){const T=_||"";try{Ci(u,function(j,G){let ce=j;v(j)&&(ce=Ti(j)),m.push(T+G+"="+encodeURIComponent(ce))})}catch(j){throw m.push(T+"type="+encodeURIComponent("_badmap")),j}}function Gr(u){this.l=u.Ub||null,this.j=u.eb||!1}K(Gr,re),Gr.prototype.g=function(){return new ks(this.l,this.j)},Gr.prototype.i=(function(u){return function(){return u}})({});function ks(u,m){ct.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}K(ks,ct),n=ks.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,sr(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||f).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ir(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,sr(this)),this.g&&(this.readyState=3,sr(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hu(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function hu(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?ir(this):sr(this),this.readyState==3&&hu(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,ir(this))},n.Qa=function(u){this.g&&(this.response=u,ir(this))},n.ga=function(){this.g&&ir(this)};function ir(u){u.readyState=4,u.l=null,u.j=null,u.v=null,sr(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function sr(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ks.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Qr(u){let m="";return de(u,function(_,T){m+=T,m+=":",m+=_,m+=`\r
`}),m}function bi(u,m,_){e:{for(T in _){var T=!1;break e}T=!0}T||(_=Qr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):tt(u,m,_))}function lt(u){ct.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}K(lt,ct);var xd=/^https?$/i,ba=["POST","PUT"];n=lt.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():er.g(),this.v=this.o?le(this.o):le(er),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(G){Ps(this,G);return}if(u=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var j in T)_.set(j,T[j]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const G of T.keys())_.set(G,T.get(G));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(G=>G.toLowerCase()=="content-type"),j=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ba,m,void 0))||T||j||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[G,ce]of _)this.g.setRequestHeader(G,ce);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{So(this),this.u=!0,this.g.send(u),this.u=!1}catch(G){Ps(this,G)}};function Ps(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Io(u),Cn(u)}function Io(u){u.A||(u.A=!0,pt(u,"complete"),pt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,pt(this,"complete"),pt(this,"abort"),Cn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cn(this,!0)),lt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Da(this):this.bb())},n.bb=function(){Da(this)};function Da(u){if(u.h&&typeof c<"u"&&(!u.v[1]||hn(u)!=4||u.Z()!=2)){if(u.u&&hn(u)==4)Ei(u.Ea,0,u);else if(pt(u,"readystatechange"),hn(u)==4){u.h=!1;try{const ce=u.Z();e:switch(ce){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var T;if(T=ce===0){var j=String(u.D).match(Cs)[1]||null;!j&&f.self&&f.self.location&&(j=f.self.location.protocol.slice(0,-1)),T=!xd.test(j?j.toLowerCase():"")}_=T}if(_)pt(u,"complete"),pt(u,"success");else{u.m=6;try{var G=2<hn(u)?u.g.statusText:""}catch{G=""}u.l=G+" ["+u.Z()+"]",Io(u)}}finally{Cn(u)}}}}function Cn(u,m){if(u.g){So(u);const _=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||pt(u,"ready");try{_.onreadystatechange=T}catch{}}}function So(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function hn(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<hn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Ii(m)}};function Oa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ao(u){const m={};u=(u.g&&2<=hn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(Z(u[T]))continue;var _=O(u[T]);const j=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const G=m[j]||[];m[j]=G,G.push(_)}P(m,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Sr(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function Va(u){this.Aa=0,this.i=[],this.j=new Es,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Sr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Sr("baseRetryDelayMs",5e3,u),this.cb=Sr("retryDelaySeedMs",1e4,u),this.Wa=Sr("forwardChannelMaxRetries",2,u),this.wa=Sr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new As(u&&u.concurrentRequestLimit),this.Da=new Pd,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Va.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,T){_t(0),this.W=u,this.H=m||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.I=gu(this,null,this.W),Ar(this)};function $t(u){if(Co(u),u.G==3){var m=u.U++,_=An(u.I);if(tt(_,"SID",u.K),tt(_,"RID",m),tt(_,"TYPE","terminate"),Xr(u,_),m=new tr(u,u.j,m),m.L=2,m.v=Pi(An(_)),_=!1,f.navigator&&f.navigator.sendBeacon)try{_=f.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&f.Image&&(new Image().src=m.v,_=!0),_||(m.g=yu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),rt(m)}mu(u)}function or(u){u.g&&(La(u),u.g.cancel(),u.g=null)}function Co(u){or(u),u.u&&(f.clearTimeout(u.u),u.u=null),Po(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Ar(u){if(!Sn(u.h)&&!u.s){u.s=!0;var m=u.Ga;ye||Y(),L||(ye(),L=!0),te.add(m,u),u.B=0}}function Nd(u,m){return ru(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Jn(C(u.Ga,u,m),pu(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const j=new tr(this,this.j,u);let G=this.o;if(this.S&&(G?(G=S(G),b(G,this.S)):G=this.S),this.m!==null||this.O||(j.H=G,G=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=Di(this,j,m),_=An(this.I),tt(_,"RID",u),tt(_,"CVER",22),this.D&&tt(_,"X-HTTP-Session-Id",this.D),Xr(this,_),G&&(this.O?m="headers="+encodeURIComponent(String(Qr(G)))+"&"+m:this.m&&bi(_,this.m,G)),xa(this.h,j),this.Ua&&tt(_,"TYPE","init"),this.P?(tt(_,"$req",m),tt(_,"SID","null"),j.T=!0,_o(j,_,null)):_o(j,_,m),this.G=2}}else this.G==3&&(u?Ro(this,u):this.i.length==0||Sn(this.h)||Ro(this))};function Ro(u,m){var _;m?_=m.l:_=u.U++;const T=An(u.I);tt(T,"SID",u.K),tt(T,"RID",_),tt(T,"AID",u.T),Xr(u,T),u.m&&u.o&&bi(T,u.m,u.o),_=new tr(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Di(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),xa(u.h,_),_o(_,T,m)}function Xr(u,m){u.H&&de(u.H,function(_,T){tt(m,T,_)}),u.l&&Ci({},function(_,T){tt(m,T,_)})}function Di(u,m,_){_=Math.min(u.i.length,_);var T=u.l?C(u.l.Na,u.l,u):null;e:{var j=u.i;let G=-1;for(;;){const ce=["count="+_];G==-1?0<_?(G=j[0].g,ce.push("ofs="+G)):G=0:ce.push("ofs="+G);let Ze=!0;for(let xt=0;xt<_;xt++){let We=j[xt].g;const Ot=j[xt].map;if(We-=G,0>We)G=Math.max(0,j[xt].g-100),Ze=!1;else try{du(Ot,ce,"req"+We+"_")}catch{T&&T(Ot)}}if(Ze){T=ce.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,T}function xs(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;ye||Y(),L||(ye(),L=!0),te.add(m,u),u.v=0}}function ko(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Jn(C(u.Fa,u),pu(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,fu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Jn(C(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),or(this),fu(this))};function La(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function fu(u){u.g=new tr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=An(u.qa);tt(m,"RID","rpc"),tt(m,"SID",u.K),tt(m,"AID",u.T),tt(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&tt(m,"TO",u.ja),tt(m,"TYPE","xmlhttp"),Xr(u,m),u.m&&u.o&&bi(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Pi(An(m)),_.m=null,_.P=!0,ka(_,u)}n.Za=function(){this.C!=null&&(this.C=null,or(this),ko(this),_t(19))};function Po(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function xo(u,m){var _=null;if(u.g==m){Po(u),La(u),u.g=null;var T=2}else if(rn(u.h,m))_=m.D,iu(u.h,m),T=1;else return;if(u.G!=0){if(m.o)if(T==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var j=u.B;T=qr(),pt(T,new mo(T,_)),Ar(u)}else xs(u);else if(j=m.s,j==3||j==0&&0<m.X||!(T==1&&Nd(u,m)||T==2&&ko(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),j){case 1:Yr(u,5);break;case 4:Yr(u,10);break;case 3:Yr(u,6);break;default:Yr(u,2)}}}function pu(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Yr(u,m){if(u.j.info("Error code "+m),m==2){var _=C(u.fb,u),T=u.Xa;const j=!T;T=new Kr(T||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Rs(T,"https"),Pi(T),j?kd(T.toString(),_):cu(T.toString(),_)}else _t(2);u.G=0,u.l&&u.l.sa(m),mu(u),Co(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function mu(u){if(u.G=0,u.ka=[],u.l){const m=su(u.h);(m.length!=0||u.i.length!=0)&&(B(u.ka,m),B(u.ka,u.i),u.h.i.length=0,Q(u.i),u.i.length=0),u.l.ra()}}function gu(u,m,_){var T=_ instanceof Kr?An(_):new Kr(_);if(T.g!="")m&&(T.g=m+"."+T.g),Ri(T,T.s);else{var j=f.location;T=j.protocol,m=m?m+"."+j.hostname:j.hostname,j=+j.port;var G=new Kr(null);T&&Rs(G,T),m&&(G.g=m),j&&Ri(G,j),_&&(G.l=_),T=G}return _=u.D,m=u.ya,_&&m&&tt(T,_,m),tt(T,"VER",u.la),Xr(u,T),T}function yu(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new lt(new Gr({eb:_})):new lt(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ma(){}n=Ma.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function No(){}No.prototype.g=function(u,m){return new sn(u,m)};function sn(u,m){ct.call(this),this.g=new Va(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!Z(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!Z(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Cr(this)}K(sn,ct),sn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},sn.prototype.close=function(){$t(this.g)},sn.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Ti(u),u=_);m.i.push(new nu(m.Ya++,u)),m.G==3&&Ar(m)},sn.prototype.N=function(){this.g.l=null,delete this.j,$t(this.g),delete this.g,sn.aa.N.call(this)};function vu(u){xe.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}K(vu,xe);function _u(){St.call(this),this.status=1}K(_u,St);function Cr(u){this.g=u}K(Cr,Ma),Cr.prototype.ua=function(){pt(this.g,"a")},Cr.prototype.ta=function(u){pt(this.g,new vu(u))},Cr.prototype.sa=function(u){pt(this.g,new _u)},Cr.prototype.ra=function(){pt(this.g,"b")},No.prototype.createWebChannel=No.prototype.g,sn.prototype.send=sn.prototype.o,sn.prototype.open=sn.prototype.m,sn.prototype.close=sn.prototype.close,Vw=function(){return new No},Ow=function(){return qr()},Dw=Ft,Df={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},yo.NO_ERROR=0,yo.TIMEOUT=8,yo.HTTP_ERROR=6,Cc=yo,Jl.COMPLETE="complete",bw=Jl,Me.EventType=Re,Re.OPEN="a",Re.CLOSE="b",Re.ERROR="c",Re.MESSAGE="d",ct.prototype.listen=ct.prototype.K,hl=Me,lt.prototype.listenOnce=lt.prototype.L,lt.prototype.getLastError=lt.prototype.Ka,lt.prototype.getLastErrorCode=lt.prototype.Ba,lt.prototype.getStatus=lt.prototype.Z,lt.prototype.getResponseJson=lt.prototype.Oa,lt.prototype.getResponseText=lt.prototype.oa,lt.prototype.send=lt.prototype.ea,lt.prototype.setWithCredentials=lt.prototype.Ha,Nw=lt}).apply(typeof pc<"u"?pc:typeof self<"u"?self:typeof window<"u"?window:{});const lv="@firebase/firestore",uv="4.8.0";/**
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
 */class Zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Zt.UNAUTHENTICATED=new Zt(null),Zt.GOOGLE_CREDENTIALS=new Zt("google-credentials-uid"),Zt.FIRST_PARTY=new Zt("first-party-uid"),Zt.MOCK_USER=new Zt("mock-user");/**
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
 */let ga="11.10.0";/**
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
 */const to=new sp("@firebase/firestore");function Zo(){return to.logLevel}function _e(n,...e){if(to.logLevel<=$e.DEBUG){const t=e.map(gp);to.debug(`Firestore (${ga}): ${n}`,...t)}}function mi(n,...e){if(to.logLevel<=$e.ERROR){const t=e.map(gp);to.error(`Firestore (${ga}): ${n}`,...t)}}function os(n,...e){if(to.logLevel<=$e.WARN){const t=e.map(gp);to.warn(`Firestore (${ga}): ${n}`,...t)}}function gp(n){if(typeof n=="string")return n;try{/**
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
 */function be(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Lw(n,i,t)}function Lw(n,e,t){let i=`FIRESTORE (${ga}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw mi(i),new Error(i)}function Je(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||Lw(e,o,i)}function Le(n,e){return n}/**
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
 */const ee={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ge extends yr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class rs{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Mw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Zt.UNAUTHENTICATED)))}shutdown(){}}class lR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class uR{constructor(e){this.t=e,this.currentUser=Zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Je(this.o===void 0,42304);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new rs;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new rs,e.enqueueRetryable((()=>o(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},f=p=>{_e("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>f(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(_e("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new rs)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(_e("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Je(typeof i.accessToken=="string",31837,{l:i}),new Mw(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Je(e===null||typeof e=="string",2055,{h:e}),new Zt(e)}}class cR{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Zt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class dR{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new cR(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Zt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class cv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hR{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Nn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Je(this.o===void 0,3512);const i=l=>{l.error!=null&&_e("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,_e("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{_e("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):_e("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new cv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Je(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new cv(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function fR(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */function jw(){return new TextEncoder}/**
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
 */class yp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=fR(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function je(n,e){return n<e?-1:n>e?1:0}function Of(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return je(i,o);{const l=jw(),c=pR(l.encode(dv(n,t)),l.encode(dv(e,t)));return c!==0?c:je(i,o)}}t+=i>65535?2:1}return je(n.length,e.length)}function dv(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function pR(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return je(n[t],e[t]);return je(n.length,e.length)}function ua(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
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
 */const hv="__name__";class Nr{constructor(e,t,i){t===void 0?t=0:t>e.length&&be(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&be(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Nr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Nr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=Nr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return je(e.length,t.length)}static compareSegments(e,t){const i=Nr.isNumericId(e),o=Nr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?Nr.extractNumericId(e).compare(Nr.extractNumericId(t)):Of(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ns.fromString(e.substring(4,e.length-2))}}class st extends Nr{construct(e,t,i){return new st(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ge(ee.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new st(t)}static emptyPath(){return new st([])}}const mR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Wt extends Nr{construct(e,t,i){return new Wt(e,t,i)}static isValidIdentifier(e){return mR.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Wt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===hv}static keyField(){return new Wt([hv])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ge(ee.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ge(ee.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ge(ee.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else f==="`"?(c=!c,o++):f!=="."||c?(i+=f,o++):(l(),o++)}if(l(),c)throw new ge(ee.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Wt(t)}static emptyPath(){return new Wt([])}}/**
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
 */class Ce{constructor(e){this.path=e}static fromPath(e){return new Ce(st.fromString(e))}static fromName(e){return new Ce(st.fromString(e).popFirst(5))}static empty(){return new Ce(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return st.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ce(new st(e.slice()))}}/**
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
 */function Uw(n,e,t){if(!t)throw new ge(ee.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function gR(n,e,t,i){if(e===!0&&i===!0)throw new ge(ee.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function fv(n){if(!Ce.isDocumentKey(n))throw new ge(ee.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function pv(n){if(Ce.isDocumentKey(n))throw new ge(ee.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Fw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function id(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":be(12329,{type:typeof n})}function On(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ge(ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=id(n);throw new ge(ee.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Pt(n,e){const t={typeString:n};return e&&(t.value=e),t}function zl(n,e){if(!Fw(n))throw new ge(ee.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const c=n[i];if(o&&typeof c!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new ge(ee.INVALID_ARGUMENT,t);return!0}/**
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
 */const mv=-62135596800,gv=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*gv);return new nt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ge(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ge(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<mv)throw new ge(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ge(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gv}_compareTo(e){return this.seconds===e.seconds?je(this.nanoseconds,e.nanoseconds):je(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:nt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(zl(e,nt._jsonSchema))return new nt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-mv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}nt._jsonSchemaVersion="firestore/timestamp/1.0",nt._jsonSchema={type:Pt("string",nt._jsonSchemaVersion),seconds:Pt("number"),nanoseconds:Pt("number")};/**
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
 */class Ve{static fromTimestamp(e){return new Ve(e)}static min(){return new Ve(new nt(0,0))}static max(){return new Ve(new nt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Rl=-1;function yR(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ve.fromTimestamp(i===1e9?new nt(t+1,0):new nt(t,i));return new as(o,Ce.empty(),e)}function vR(n){return new as(n.readTime,n.key,Rl)}class as{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new as(Ve.min(),Ce.empty(),Rl)}static max(){return new as(Ve.max(),Ce.empty(),Rl)}}function _R(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Ce.comparator(n.documentKey,e.documentKey),t!==0?t:je(n.largestBatchId,e.largestBatchId))}/**
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
 */const wR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ER{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function ya(n){if(n.code!==ee.FAILED_PRECONDITION||n.message!==wR)throw n;_e("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ne{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&be(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ne(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ne?t:ne.resolve(t)}catch(t){return ne.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ne.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ne.reject(t)}static resolve(e){return new ne(((t,i)=>{t(e)}))}static reject(e){return new ne(((t,i)=>{i(e)}))}static waitFor(e){return new ne(((t,i)=>{let o=0,l=0,c=!1;e.forEach((f=>{++o,f.next((()=>{++l,c&&l===o&&t()}),(p=>i(p)))})),c=!0,l===o&&t()}))}static or(e){let t=ne.resolve(!1);for(const i of e)t=t.next((o=>o?ne.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new ne(((i,o)=>{const l=e.length,c=new Array(l);let f=0;for(let p=0;p<l;p++){const v=p;t(e[v]).next((E=>{c[v]=E,++f,f===l&&i(c)}),(E=>o(E)))}}))}static doWhile(e,t){return new ne(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function TR(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function va(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class sd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this._e(i),this.ae=i=>t.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}sd.ue=-1;/**
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
 */const vp=-1;function od(n){return n==null}function Fc(n){return n===0&&1/n==-1/0}function IR(n){return typeof n=="number"&&Number.isInteger(n)&&!Fc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Bw="";function SR(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=yv(e)),e=AR(n.get(t),e);return yv(e)}function AR(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case Bw:t+="";break;default:t+=l}}return t}function yv(n){return n+Bw+""}/**
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
 */function vv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function gs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function $w(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ft{constructor(e,t){this.comparator=e,this.root=t||qt.EMPTY}insert(e,t){return new ft(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,qt.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mc(this.root,e,this.comparator,!1)}getReverseIterator(){return new mc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mc(this.root,e,this.comparator,!0)}}class mc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??qt.RED,this.left=o??qt.EMPTY,this.right=l??qt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new qt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return qt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return qt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw be(43730,{key:this.key,value:this.value});if(this.right.isRed())throw be(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw be(27949);return e+(this.isRed()?0:1)}}qt.EMPTY=null,qt.RED=!0,qt.BLACK=!1;qt.EMPTY=new class{constructor(){this.size=0}get key(){throw be(57766)}get value(){throw be(16141)}get color(){throw be(16727)}get left(){throw be(29726)}get right(){throw be(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new qt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Dt{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new _v(this.data.getIterator())}getIteratorFrom(e){return new _v(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof Dt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Dt(this.comparator);return t.data=e,t}}class _v{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class bn{constructor(e){this.fields=e,e.sort(Wt.comparator)}static empty(){return new bn([])}unionWith(e){let t=new Dt(Wt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new bn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ua(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class zw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Kt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new zw("Invalid base64 string: "+l):l}})(e);return new Kt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l})(e);return new Kt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return je(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Kt.EMPTY_BYTE_STRING=new Kt("");const CR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ls(n){if(Je(!!n,39018),typeof n=="string"){let e=0;const t=CR.exec(n);if(Je(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Et(n.seconds),nanos:Et(n.nanos)}}function Et(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function us(n){return typeof n=="string"?Kt.fromBase64String(n):Kt.fromUint8Array(n)}/**
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
 */const Hw="server_timestamp",qw="__type__",Ww="__previous_value__",Kw="__local_write_time__";function _p(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[qw])===null||t===void 0?void 0:t.stringValue)===Hw}function ad(n){const e=n.mapValue.fields[Ww];return _p(e)?ad(e):e}function kl(n){const e=ls(n.mapValue.fields[Kw].timestampValue);return new nt(e.seconds,e.nanos)}/**
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
 */class RR{constructor(e,t,i,o,l,c,f,p,v,E){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=v,this.isUsingEmulator=E}}const Bc="(default)";class Pl{constructor(e,t){this.projectId=e,this.database=t||Bc}static empty(){return new Pl("","")}get isDefaultDatabase(){return this.database===Bc}isEqual(e){return e instanceof Pl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Gw="__type__",kR="__max__",gc={mapValue:{}},Qw="__vector__",$c="value";function cs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?_p(n)?4:xR(n)?9007199254740991:PR(n)?10:11:be(28295,{value:n})}function Fr(n,e){if(n===e)return!0;const t=cs(n);if(t!==cs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return kl(n).isEqual(kl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=ls(o.timestampValue),f=ls(l.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return us(o.bytesValue).isEqual(us(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return Et(o.geoPointValue.latitude)===Et(l.geoPointValue.latitude)&&Et(o.geoPointValue.longitude)===Et(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return Et(o.integerValue)===Et(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=Et(o.doubleValue),f=Et(l.doubleValue);return c===f?Fc(c)===Fc(f):isNaN(c)&&isNaN(f)}return!1})(n,e);case 9:return ua(n.arrayValue.values||[],e.arrayValue.values||[],Fr);case 10:case 11:return(function(o,l){const c=o.mapValue.fields||{},f=l.mapValue.fields||{};if(vv(c)!==vv(f))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(f[p]===void 0||!Fr(c[p],f[p])))return!1;return!0})(n,e);default:return be(52216,{left:n})}}function xl(n,e){return(n.values||[]).find((t=>Fr(t,e)))!==void 0}function ca(n,e){if(n===e)return 0;const t=cs(n),i=cs(e);if(t!==i)return je(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return je(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const f=Et(l.integerValue||l.doubleValue),p=Et(c.integerValue||c.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1})(n,e);case 3:return wv(n.timestampValue,e.timestampValue);case 4:return wv(kl(n),kl(e));case 5:return Of(n.stringValue,e.stringValue);case 6:return(function(l,c){const f=us(l),p=us(c);return f.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const f=l.split("/"),p=c.split("/");for(let v=0;v<f.length&&v<p.length;v++){const E=je(f[v],p[v]);if(E!==0)return E}return je(f.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const f=je(Et(l.latitude),Et(c.latitude));return f!==0?f:je(Et(l.longitude),Et(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Ev(n.arrayValue,e.arrayValue);case 10:return(function(l,c){var f,p,v,E;const A=l.fields||{},C=c.fields||{},N=(f=A[$c])===null||f===void 0?void 0:f.arrayValue,K=(p=C[$c])===null||p===void 0?void 0:p.arrayValue,Q=je(((v=N==null?void 0:N.values)===null||v===void 0?void 0:v.length)||0,((E=K==null?void 0:K.values)===null||E===void 0?void 0:E.length)||0);return Q!==0?Q:Ev(N,K)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===gc.mapValue&&c===gc.mapValue)return 0;if(l===gc.mapValue)return 1;if(c===gc.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),v=c.fields||{},E=Object.keys(v);p.sort(),E.sort();for(let A=0;A<p.length&&A<E.length;++A){const C=Of(p[A],E[A]);if(C!==0)return C;const N=ca(f[p[A]],v[E[A]]);if(N!==0)return N}return je(p.length,E.length)})(n.mapValue,e.mapValue);default:throw be(23264,{le:t})}}function wv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return je(n,e);const t=ls(n),i=ls(e),o=je(t.seconds,i.seconds);return o!==0?o:je(t.nanos,i.nanos)}function Ev(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=ca(t[o],i[o]);if(l)return l}return je(t.length,i.length)}function da(n){return Vf(n)}function Vf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=ls(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return us(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Ce.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Vf(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${Vf(t.fields[c])}`;return o+"}"})(n.mapValue):be(61005,{value:n})}function Rc(n){switch(cs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ad(n);return e?16+Rc(e):16;case 5:return 2*n.stringValue.length;case 6:return us(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+Rc(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return gs(i.fields,((l,c)=>{o+=l.length+Rc(c)})),o})(n.mapValue);default:throw be(13486,{value:n})}}function Tv(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Lf(n){return!!n&&"integerValue"in n}function wp(n){return!!n&&"arrayValue"in n}function Iv(n){return!!n&&"nullValue"in n}function Sv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function kc(n){return!!n&&"mapValue"in n}function PR(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Gw])===null||t===void 0?void 0:t.stringValue)===Qw}function _l(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return gs(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=_l(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=_l(n.arrayValue.values[t]);return e}return Object.assign({},n)}function xR(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===kR}/**
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
 */class wn{constructor(e){this.value=e}static empty(){return new wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!kc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_l(t)}setAll(e){let t=Wt.emptyPath(),i={},o=[];e.forEach(((c,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=f.popLast()}c?i[f.lastSegment()]=_l(c):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());kc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Fr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];kc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){gs(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new wn(_l(this.value))}}function Xw(n){const e=[];return gs(n.fields,((t,i)=>{const o=new Wt([t]);if(kc(i)){const l=Xw(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)})),new bn(e)}/**
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
 */class tn{constructor(e,t,i,o,l,c,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=c,this.documentState=f}static newInvalidDocument(e){return new tn(e,0,Ve.min(),Ve.min(),Ve.min(),wn.empty(),0)}static newFoundDocument(e,t,i,o){return new tn(e,1,t,Ve.min(),i,o,0)}static newNoDocument(e,t){return new tn(e,2,t,Ve.min(),Ve.min(),wn.empty(),0)}static newUnknownDocument(e,t){return new tn(e,3,t,Ve.min(),Ve.min(),wn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class zc{constructor(e,t){this.position=e,this.inclusive=t}}function Av(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=Ce.comparator(Ce.fromName(c.referenceValue),t.key):i=ca(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Cv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Fr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Nl{constructor(e,t="asc"){this.field=e,this.dir=t}}function NR(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Yw{}class kt extends Yw{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new DR(e,t,i):t==="array-contains"?new LR(e,i):t==="in"?new MR(e,i):t==="not-in"?new jR(e,i):t==="array-contains-any"?new UR(e,i):new kt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new OR(e,i):new VR(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ca(t,this.value)):t!==null&&cs(this.value)===cs(t)&&this.matchesComparison(ca(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return be(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gr extends Yw{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new gr(e,t)}matches(e){return Jw(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Jw(n){return n.op==="and"}function Zw(n){return bR(n)&&Jw(n)}function bR(n){for(const e of n.filters)if(e instanceof gr)return!1;return!0}function Mf(n){if(n instanceof kt)return n.field.canonicalString()+n.op.toString()+da(n.value);if(Zw(n))return n.filters.map((e=>Mf(e))).join(",");{const e=n.filters.map((t=>Mf(t))).join(",");return`${n.op}(${e})`}}function eE(n,e){return n instanceof kt?(function(i,o){return o instanceof kt&&i.op===o.op&&i.field.isEqual(o.field)&&Fr(i.value,o.value)})(n,e):n instanceof gr?(function(i,o){return o instanceof gr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,c,f)=>l&&eE(c,o.filters[f])),!0):!1})(n,e):void be(19439)}function tE(n){return n instanceof kt?(function(t){return`${t.field.canonicalString()} ${t.op} ${da(t.value)}`})(n):n instanceof gr?(function(t){return t.op.toString()+" {"+t.getFilters().map(tE).join(" ,")+"}"})(n):"Filter"}class DR extends kt{constructor(e,t,i){super(e,t,i),this.key=Ce.fromName(i.referenceValue)}matches(e){const t=Ce.comparator(e.key,this.key);return this.matchesComparison(t)}}class OR extends kt{constructor(e,t){super(e,"in",t),this.keys=nE("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class VR extends kt{constructor(e,t){super(e,"not-in",t),this.keys=nE("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function nE(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>Ce.fromName(i.referenceValue)))}class LR extends kt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return wp(t)&&xl(t.arrayValue,this.value)}}class MR extends kt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&xl(this.value.arrayValue,t)}}class jR extends kt{constructor(e,t){super(e,"not-in",t)}matches(e){if(xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!xl(this.value.arrayValue,t)}}class UR extends kt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!wp(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>xl(this.value.arrayValue,i)))}}/**
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
 */class FR{constructor(e,t=null,i=[],o=[],l=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=f,this.Pe=null}}function Rv(n,e=null,t=[],i=[],o=null,l=null,c=null){return new FR(n,e,t,i,o,l,c)}function Ep(n){const e=Le(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Mf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),od(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>da(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>da(i))).join(",")),e.Pe=t}return e.Pe}function Tp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!NR(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!eE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Cv(n.startAt,e.startAt)&&Cv(n.endAt,e.endAt)}function jf(n){return Ce.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class _a{constructor(e,t=null,i=[],o=[],l=null,c="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=f,this.endAt=p,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function BR(n,e,t,i,o,l,c,f){return new _a(n,e,t,i,o,l,c,f)}function Ip(n){return new _a(n)}function kv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function rE(n){return n.collectionGroup!==null}function wl(n){const e=Le(n);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new Dt(Wt.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((v=>{v.isInequality()&&(f=f.add(v.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new Nl(l,i))})),t.has(Wt.keyField().canonicalString())||e.Te.push(new Nl(Wt.keyField(),i))}return e.Te}function Lr(n){const e=Le(n);return e.Ie||(e.Ie=$R(e,wl(n))),e.Ie}function $R(n,e){if(n.limitType==="F")return Rv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new Nl(o.field,l)}));const t=n.endAt?new zc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new zc(n.startAt.position,n.startAt.inclusive):null;return Rv(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Uf(n,e){const t=n.filters.concat([e]);return new _a(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ff(n,e,t){return new _a(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ld(n,e){return Tp(Lr(n),Lr(e))&&n.limitType===e.limitType}function iE(n){return`${Ep(Lr(n))}|lt:${n.limitType}`}function ea(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>tE(o))).join(", ")}]`),od(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>da(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>da(o))).join(",")),`Target(${i})`})(Lr(n))}; limitType=${n.limitType})`}function ud(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):Ce.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of wl(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(c,f,p){const v=Av(c,f,p);return c.inclusive?v<=0:v<0})(i.startAt,wl(i),o)||i.endAt&&!(function(c,f,p){const v=Av(c,f,p);return c.inclusive?v>=0:v>0})(i.endAt,wl(i),o))})(n,e)}function zR(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function sE(n){return(e,t)=>{let i=!1;for(const o of wl(n)){const l=HR(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function HR(n,e,t){const i=n.field.isKeyField()?Ce.comparator(e.key,t.key):(function(l,c,f){const p=c.data.field(l),v=f.data.field(l);return p!==null&&v!==null?ca(p,v):be(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return be(19790,{direction:n.dir})}}/**
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
 */class ho{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){gs(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return $w(this.inner)}size(){return this.innerSize}}/**
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
 */const qR=new ft(Ce.comparator);function gi(){return qR}const oE=new ft(Ce.comparator);function fl(...n){let e=oE;for(const t of n)e=e.insert(t.key,t);return e}function aE(n){let e=oE;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Ws(){return El()}function lE(){return El()}function El(){return new ho((n=>n.toString()),((n,e)=>n.isEqual(e)))}const WR=new ft(Ce.comparator),KR=new Dt(Ce.comparator);function ze(...n){let e=KR;for(const t of n)e=e.add(t);return e}const GR=new Dt(je);function QR(){return GR}/**
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
 */function Sp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fc(e)?"-0":e}}function uE(n){return{integerValue:""+n}}function cE(n,e){return IR(e)?uE(e):Sp(n,e)}/**
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
 */class cd{constructor(){this._=void 0}}function XR(n,e,t){return n instanceof bl?(function(o,l){const c={fields:{[qw]:{stringValue:Hw},[Kw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&_p(l)&&(l=ad(l)),l&&(c.fields[Ww]=l),{mapValue:c}})(t,e):n instanceof ha?hE(n,e):n instanceof Dl?fE(n,e):(function(o,l){const c=dE(o,l),f=Pv(c)+Pv(o.Ee);return Lf(c)&&Lf(o.Ee)?uE(f):Sp(o.serializer,f)})(n,e)}function YR(n,e,t){return n instanceof ha?hE(n,e):n instanceof Dl?fE(n,e):t}function dE(n,e){return n instanceof Ol?(function(i){return Lf(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class bl extends cd{}class ha extends cd{constructor(e){super(),this.elements=e}}function hE(n,e){const t=pE(e);for(const i of n.elements)t.some((o=>Fr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class Dl extends cd{constructor(e){super(),this.elements=e}}function fE(n,e){let t=pE(e);for(const i of n.elements)t=t.filter((o=>!Fr(o,i)));return{arrayValue:{values:t}}}class Ol extends cd{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Pv(n){return Et(n.integerValue||n.doubleValue)}function pE(n){return wp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Ap{constructor(e,t){this.field=e,this.transform=t}}function JR(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof ha&&o instanceof ha||i instanceof Dl&&o instanceof Dl?ua(i.elements,o.elements,Fr):i instanceof Ol&&o instanceof Ol?Fr(i.Ee,o.Ee):i instanceof bl&&o instanceof bl})(n.transform,e.transform)}class ZR{constructor(e,t){this.version=e,this.transformResults=t}}class un{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class dd{}function mE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new hd(n.key,un.none()):new Hl(n.key,n.data,un.none());{const t=n.data,i=wn.empty();let o=new Dt(Wt.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new ys(n.key,i,new bn(o.toArray()),un.none())}}function e1(n,e,t){n instanceof Hl?(function(o,l,c){const f=o.value.clone(),p=Nv(o.fieldTransforms,l,c.transformResults);f.setAll(p),l.convertToFoundDocument(c.version,f).setHasCommittedMutations()})(n,e,t):n instanceof ys?(function(o,l,c){if(!Pc(o.precondition,l))return void l.convertToUnknownDocument(c.version);const f=Nv(o.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(gE(o)),p.setAll(f),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):(function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function Tl(n,e,t,i){return n instanceof Hl?(function(l,c,f,p){if(!Pc(l.precondition,c))return f;const v=l.value.clone(),E=bv(l.fieldTransforms,p,c);return v.setAll(E),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),null})(n,e,t,i):n instanceof ys?(function(l,c,f,p){if(!Pc(l.precondition,c))return f;const v=bv(l.fieldTransforms,p,c),E=c.data;return E.setAll(gE(l)),E.setAll(v),c.convertToFoundDocument(c.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((A=>A.field)))})(n,e,t,i):(function(l,c,f){return Pc(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f})(n,e,t)}function t1(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=dE(i.transform,o||null);l!=null&&(t===null&&(t=wn.empty()),t.set(i.field,l))}return t||null}function xv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&ua(i,o,((l,c)=>JR(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Hl extends dd{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ys extends dd{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function gE(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function Nv(n,e,t){const i=new Map;Je(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,f=e.data.field(l.field);i.set(l.field,YR(c,f,t[o]))}return i}function bv(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,XR(l,c,e))}return i}class hd extends dd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class n1 extends dd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class r1{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&e1(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Tl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Tl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=lE();return this.mutations.forEach((o=>{const l=e.get(o.key),c=l.overlayedDocument;let f=this.applyToLocalView(c,l.mutatedFields);f=t.has(o.key)?null:f;const p=mE(c,f);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(Ve.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ze())}isEqual(e){return this.batchId===e.batchId&&ua(this.mutations,e.mutations,((t,i)=>xv(t,i)))&&ua(this.baseMutations,e.baseMutations,((t,i)=>xv(t,i)))}}class Cp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Je(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let o=(function(){return WR})();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new Cp(e,t,i,o)}}/**
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
 */class i1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class s1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Rt,Ke;function o1(n){switch(n){case ee.OK:return be(64938);case ee.CANCELLED:case ee.UNKNOWN:case ee.DEADLINE_EXCEEDED:case ee.RESOURCE_EXHAUSTED:case ee.INTERNAL:case ee.UNAVAILABLE:case ee.UNAUTHENTICATED:return!1;case ee.INVALID_ARGUMENT:case ee.NOT_FOUND:case ee.ALREADY_EXISTS:case ee.PERMISSION_DENIED:case ee.FAILED_PRECONDITION:case ee.ABORTED:case ee.OUT_OF_RANGE:case ee.UNIMPLEMENTED:case ee.DATA_LOSS:return!0;default:return be(15467,{code:n})}}function yE(n){if(n===void 0)return mi("GRPC error has no .code"),ee.UNKNOWN;switch(n){case Rt.OK:return ee.OK;case Rt.CANCELLED:return ee.CANCELLED;case Rt.UNKNOWN:return ee.UNKNOWN;case Rt.DEADLINE_EXCEEDED:return ee.DEADLINE_EXCEEDED;case Rt.RESOURCE_EXHAUSTED:return ee.RESOURCE_EXHAUSTED;case Rt.INTERNAL:return ee.INTERNAL;case Rt.UNAVAILABLE:return ee.UNAVAILABLE;case Rt.UNAUTHENTICATED:return ee.UNAUTHENTICATED;case Rt.INVALID_ARGUMENT:return ee.INVALID_ARGUMENT;case Rt.NOT_FOUND:return ee.NOT_FOUND;case Rt.ALREADY_EXISTS:return ee.ALREADY_EXISTS;case Rt.PERMISSION_DENIED:return ee.PERMISSION_DENIED;case Rt.FAILED_PRECONDITION:return ee.FAILED_PRECONDITION;case Rt.ABORTED:return ee.ABORTED;case Rt.OUT_OF_RANGE:return ee.OUT_OF_RANGE;case Rt.UNIMPLEMENTED:return ee.UNIMPLEMENTED;case Rt.DATA_LOSS:return ee.DATA_LOSS;default:return be(39323,{code:n})}}(Ke=Rt||(Rt={}))[Ke.OK=0]="OK",Ke[Ke.CANCELLED=1]="CANCELLED",Ke[Ke.UNKNOWN=2]="UNKNOWN",Ke[Ke.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ke[Ke.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ke[Ke.NOT_FOUND=5]="NOT_FOUND",Ke[Ke.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ke[Ke.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ke[Ke.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ke[Ke.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ke[Ke.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ke[Ke.ABORTED=10]="ABORTED",Ke[Ke.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ke[Ke.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ke[Ke.INTERNAL=13]="INTERNAL",Ke[Ke.UNAVAILABLE=14]="UNAVAILABLE",Ke[Ke.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const a1=new ns([4294967295,4294967295],0);function Dv(n){const e=jw().encode(n),t=new xw;return t.update(e),new Uint8Array(t.digest())}function Ov(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ns([t,i],0),new ns([o,l],0)]}class Rp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new pl(`Invalid padding: ${t}`);if(i<0)throw new pl(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new pl(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new pl(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=ns.fromNumber(this.fe)}pe(e,t,i){let o=e.add(t.multiply(ns.fromNumber(i)));return o.compare(a1)===1&&(o=new ns([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Dv(e),[i,o]=Ov(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(i,o,l);if(!this.ye(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Rp(l,o,t);return i.forEach((f=>c.insert(f))),c}insert(e){if(this.fe===0)return;const t=Dv(e),[i,o]=Ov(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(i,o,l);this.we(c)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class pl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class fd{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,ql.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new fd(Ve.min(),o,new ft(je),gi(),ze())}}class ql{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new ql(i,t,ze(),ze(),ze())}}/**
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
 */class xc{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=o}}class vE{constructor(e,t){this.targetId=e,this.De=t}}class _E{constructor(e,t,i=Kt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Vv{constructor(){this.ve=0,this.Ce=Lv(),this.Fe=Kt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ze(),t=ze(),i=ze();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:be(38017,{changeType:l})}})),new ql(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=Lv()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Je(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class l1{constructor(e){this.We=e,this.Ge=new Map,this.ze=gi(),this.je=yc(),this.Je=yc(),this.He=new ft(je)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:be(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((i,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,i=e.De.count,o=this.st(t);if(o){const l=o.target;if(jf(l))if(i===0){const c=new Ce(l.path);this.Xe(t,c,tn.newNoDocument(c,Ve.min()))}else Je(i===1,20013,{expectedCount:i});else{const c=this.ot(t);if(c!==i){const f=this._t(e),p=f?this.ut(f,e,c):1;if(p!==0){this.rt(t);const v=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,v)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,f;try{c=us(i).toUint8Array()}catch(p){if(p instanceof zw)return os("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new Rp(c,o,l)}catch(p){return os(p instanceof pl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.fe===0?null:f}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const c=this.We.lt(),f=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,c)=>{const f=this.st(c);if(f){if(l.current&&jf(f.target)){const p=new Ce(f.target.path);this.Tt(p).has(c)||this.It(c,p)||this.Xe(c,p,tn.newNoDocument(p,e))}l.Ne&&(t.set(c,l.Le()),l.ke())}}));let i=ze();this.Je.forEach(((l,c)=>{let f=!0;c.forEachWhile((p=>{const v=this.st(p);return!v||v.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.ze.forEach(((l,c)=>c.setReadTime(e)));const o=new fd(e,t,this.He,this.ze,i);return this.ze=gi(),this.je=yc(),this.Je=yc(),this.He=new ft(je),o}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Vv,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Dt(je),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Dt(je),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||_e("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Vv),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function yc(){return new ft(Ce.comparator)}function Lv(){return new ft(Ce.comparator)}const u1={asc:"ASCENDING",desc:"DESCENDING"},c1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},d1={and:"AND",or:"OR"};class h1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Bf(n,e){return n.useProto3Json||od(e)?e:{value:e}}function Hc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function f1(n,e){return Hc(n,e.toTimestamp())}function Mr(n){return Je(!!n,49232),Ve.fromTimestamp((function(t){const i=ls(t);return new nt(i.seconds,i.nanos)})(n))}function kp(n,e){return $f(n,e).canonicalString()}function $f(n,e){const t=(function(o){return new st(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function EE(n){const e=st.fromString(n);return Je(CE(e),10190,{key:e.toString()}),e}function zf(n,e){return kp(n.databaseId,e.path)}function df(n,e){const t=EE(e);if(t.get(1)!==n.databaseId.projectId)throw new ge(ee.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ge(ee.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Ce(IE(t))}function TE(n,e){return kp(n.databaseId,e)}function p1(n){const e=EE(n);return e.length===4?st.emptyPath():IE(e)}function Hf(n){return new st(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function IE(n){return Je(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Mv(n,e,t){return{name:zf(n,e),fields:t.value.mapValue.fields}}function m1(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:be(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(v,E){return v.useProto3Json?(Je(E===void 0||typeof E=="string",58123),Kt.fromBase64String(E||"")):(Je(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Kt.fromUint8Array(E||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&(function(v){const E=v.code===void 0?ee.UNKNOWN:yE(v.code);return new ge(E,v.message||"")})(c);t=new _E(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=df(n,i.document.name),l=Mr(i.document.updateTime),c=i.document.createTime?Mr(i.document.createTime):Ve.min(),f=new wn({mapValue:{fields:i.document.fields}}),p=tn.newFoundDocument(o,l,c,f),v=i.targetIds||[],E=i.removedTargetIds||[];t=new xc(v,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=df(n,i.document),l=i.readTime?Mr(i.readTime):Ve.min(),c=tn.newNoDocument(o,l),f=i.removedTargetIds||[];t=new xc([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=df(n,i.document),l=i.removedTargetIds||[];t=new xc([],l,o,null)}else{if(!("filter"in e))return be(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new s1(o,l),f=i.targetId;t=new vE(f,c)}}return t}function g1(n,e){let t;if(e instanceof Hl)t={update:Mv(n,e.key,e.value)};else if(e instanceof hd)t={delete:zf(n,e.key)};else if(e instanceof ys)t={update:Mv(n,e.key,e.data),updateMask:A1(e.fieldMask)};else{if(!(e instanceof n1))return be(16599,{Rt:e.type});t={verify:zf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,c){const f=c.transform;if(f instanceof bl)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof ha)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Dl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Ol)return{fieldPath:c.field.canonicalString(),increment:f.Ee};throw be(20930,{transform:c.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:f1(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:be(27497)})(n,e.precondition)),t}function y1(n,e){return n&&n.length>0?(Je(e!==void 0,14353),n.map((t=>(function(o,l){let c=o.updateTime?Mr(o.updateTime):Mr(l);return c.isEqual(Ve.min())&&(c=Mr(l)),new ZR(c,o.transformResults||[])})(t,e)))):[]}function v1(n,e){return{documents:[TE(n,e.path)]}}function _1(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=TE(n,o);const l=(function(v){if(v.length!==0)return AE(gr.create(v,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(v){if(v.length!==0)return v.map((E=>(function(C){return{field:ta(C.field),direction:T1(C.dir)}})(E)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=Bf(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{Vt:t,parent:o}}function w1(n){let e=p1(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Je(i===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(A){const C=SE(A);return C instanceof gr&&Zw(C)?C.getFilters():[C]})(t.where));let c=[];t.orderBy&&(c=(function(A){return A.map((C=>(function(K){return new Nl(na(K.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(K.direction))})(C)))})(t.orderBy));let f=null;t.limit&&(f=(function(A){let C;return C=typeof A=="object"?A.value:A,od(C)?null:C})(t.limit));let p=null;t.startAt&&(p=(function(A){const C=!!A.before,N=A.values||[];return new zc(N,C)})(t.startAt));let v=null;return t.endAt&&(v=(function(A){const C=!A.before,N=A.values||[];return new zc(N,C)})(t.endAt)),BR(e,o,c,l,f,"F",p,v)}function E1(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return be(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function SE(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=na(t.unaryFilter.field);return kt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=na(t.unaryFilter.field);return kt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=na(t.unaryFilter.field);return kt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=na(t.unaryFilter.field);return kt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return be(61313);default:return be(60726)}})(n):n.fieldFilter!==void 0?(function(t){return kt.create(na(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return be(58110);default:return be(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return gr.create(t.compositeFilter.filters.map((i=>SE(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return be(1026)}})(t.compositeFilter.op))})(n):be(30097,{filter:n})}function T1(n){return u1[n]}function I1(n){return c1[n]}function S1(n){return d1[n]}function ta(n){return{fieldPath:n.canonicalString()}}function na(n){return Wt.fromServerFormat(n.fieldPath)}function AE(n){return n instanceof kt?(function(t){if(t.op==="=="){if(Sv(t.value))return{unaryFilter:{field:ta(t.field),op:"IS_NAN"}};if(Iv(t.value))return{unaryFilter:{field:ta(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Sv(t.value))return{unaryFilter:{field:ta(t.field),op:"IS_NOT_NAN"}};if(Iv(t.value))return{unaryFilter:{field:ta(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ta(t.field),op:I1(t.op),value:t.value}}})(n):n instanceof gr?(function(t){const i=t.getFilters().map((o=>AE(o)));return i.length===1?i[0]:{compositeFilter:{op:S1(t.op),filters:i}}})(n):be(54877,{filter:n})}function A1(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function CE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class es{constructor(e,t,i,o,l=Ve.min(),c=Ve.min(),f=Kt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new es(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new es(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class C1{constructor(e){this.gt=e}}function R1(n){const e=w1({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ff(e,e.limit,"L"):e}/**
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
 */class k1{constructor(){this.Dn=new P1}addToCollectionParentIndex(e,t){return this.Dn.add(t),ne.resolve()}getCollectionParents(e,t){return ne.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return ne.resolve()}deleteFieldIndex(e,t){return ne.resolve()}deleteAllFieldIndexes(e){return ne.resolve()}createTargetIndexes(e,t){return ne.resolve()}getDocumentsMatchingTarget(e,t){return ne.resolve(null)}getIndexType(e,t){return ne.resolve(0)}getFieldIndexes(e,t){return ne.resolve([])}getNextCollectionGroupToUpdate(e){return ne.resolve(null)}getMinOffset(e,t){return ne.resolve(as.min())}getMinOffsetFromCollectionGroup(e,t){return ne.resolve(as.min())}updateCollectionGroup(e,t,i){return ne.resolve()}updateIndexEntries(e,t){return ne.resolve()}}class P1{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new Dt(st.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new Dt(st.comparator)).toArray()}}/**
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
 */const jv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},RE=41943040;class _n{static withCacheSize(e){return new _n(e,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */_n.DEFAULT_COLLECTION_PERCENTILE=10,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_n.DEFAULT=new _n(RE,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_n.DISABLED=new _n(-1,0,0);/**
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
 */class fa{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new fa(0)}static ur(){return new fa(-1)}}/**
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
 */const Uv="LruGarbageCollector",x1=1048576;function Fv([n,e],[t,i]){const o=je(n,t);return o===0?je(e,i):o}class N1{constructor(e){this.Tr=e,this.buffer=new Dt(Fv),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Fv(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class b1{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){_e(Uv,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){va(t)?_e(Uv,"Ignoring IndexedDB error during garbage collection: ",t):await ya(t)}await this.Rr(3e5)}))}}class D1{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return ne.resolve(sd.ue);const i=new N1(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(_e("LruGarbageCollector","Garbage collection skipped; disabled"),ne.resolve(jv)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(_e("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jv):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,o,l,c,f,p,v;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(_e("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,c=Date.now(),this.nthSequenceNumber(e,o)))).next((A=>(i=A,f=Date.now(),this.removeTargets(e,i,t)))).next((A=>(l=A,p=Date.now(),this.removeOrphanedDocuments(e,i)))).next((A=>(v=Date.now(),Zo()<=$e.DEBUG&&_e("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-E}ms
	Determined least recently used ${o} in `+(f-c)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${A} documents in `+(v-p)+`ms
Total Duration: ${v-E}ms`),ne.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:A}))))}}function O1(n,e){return new D1(n,e)}/**
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
 */class V1{constructor(){this.changes=new ho((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?ne.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class L1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class M1{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&Tl(i.mutation,o,bn.empty(),nt.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,ze()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=ze()){const o=Ws();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let c=fl();return l.forEach(((f,p)=>{c=c.insert(f,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const i=Ws();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,ze())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((c,f)=>{t.set(c,f)}))}))}computeViews(e,t,i,o){let l=gi();const c=El(),f=(function(){return El()})();return t.forEach(((p,v)=>{const E=i.get(v.key);o.has(v.key)&&(E===void 0||E.mutation instanceof ys)?l=l.insert(v.key,v):E!==void 0?(c.set(v.key,E.mutation.getFieldMask()),Tl(E.mutation,v,E.mutation.getFieldMask(),nt.now())):c.set(v.key,bn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((v,E)=>c.set(v,E))),t.forEach(((v,E)=>{var A;return f.set(v,new L1(E,(A=c.get(v))!==null&&A!==void 0?A:null))})),f)))}recalculateAndSaveOverlays(e,t){const i=El();let o=new ft(((c,f)=>c-f)),l=ze();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const f of c)f.keys().forEach((p=>{const v=t.get(p);if(v===null)return;let E=i.get(p)||bn.empty();E=f.applyToLocalView(v,E),i.set(p,E);const A=(o.get(f.batchId)||ze()).add(p);o=o.insert(f.batchId,A)}))})).next((()=>{const c=[],f=o.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),v=p.key,E=p.value,A=lE();E.forEach((C=>{if(!l.has(C)){const N=mE(t.get(C),i.get(C));N!==null&&A.set(C,N),l=l.add(C)}})),c.push(this.documentOverlayCache.saveOverlays(e,v,A))}return ne.waitFor(c)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(c){return Ce.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):rE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):ne.resolve(Ws());let f=Rl,p=l;return c.next((v=>ne.forEach(v,((E,A)=>(f<A.largestBatchId&&(f=A.largestBatchId),l.get(E)?ne.resolve():this.remoteDocumentCache.getEntry(e,E).next((C=>{p=p.insert(E,C)}))))).next((()=>this.populateOverlays(e,v,l))).next((()=>this.computeViews(e,p,v,ze()))).next((E=>({batchId:f,changes:aE(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ce(t)).next((i=>{let o=fl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=fl();return this.indexManager.getCollectionParents(e,l).next((f=>ne.forEach(f,(p=>{const v=(function(A,C){return new _a(C,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,v,i,o).next((E=>{E.forEach(((A,C)=>{c=c.insert(A,C)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((c=>{l.forEach(((p,v)=>{const E=v.getKey();c.get(E)===null&&(c=c.insert(E,tn.newInvalidDocument(E)))}));let f=fl();return c.forEach(((p,v)=>{const E=l.get(p);E!==void 0&&Tl(E.mutation,v,bn.empty(),nt.now()),ud(t,v)&&(f=f.insert(p,v))})),f}))}}/**
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
 */class j1{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return ne.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:Mr(o.createTime)}})(t)),ne.resolve()}getNamedQuery(e,t){return ne.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:R1(o.bundledQuery),readTime:Mr(o.readTime)}})(t)),ne.resolve()}}/**
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
 */class U1{constructor(){this.overlays=new ft(Ce.comparator),this.kr=new Map}getOverlay(e,t){return ne.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Ws();return ne.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.wt(e,t,l)})),ne.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.kr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(i)),ne.resolve()}getOverlaysForCollection(e,t,i){const o=Ws(),l=t.length+1,c=new Ce(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const p=f.getNext().value,v=p.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return ne.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new ft(((v,E)=>v-E));const c=this.overlays.getIterator();for(;c.hasNext();){const v=c.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>i){let E=l.get(v.largestBatchId);E===null&&(E=Ws(),l=l.insert(v.largestBatchId,E)),E.set(v.getKey(),v)}}const f=Ws(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((v,E)=>f.set(v,E))),!(f.size()>=o)););return ne.resolve(f)}wt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.kr.get(o.largestBatchId).delete(i.key);this.kr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new i1(t,i));let l=this.kr.get(t);l===void 0&&(l=ze(),this.kr.set(t,l)),this.kr.set(t,l.add(i.key))}}/**
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
 */class F1{constructor(){this.sessionToken=Kt.EMPTY_BYTE_STRING}getSessionToken(e){return ne.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ne.resolve()}}/**
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
 */class Pp{constructor(){this.qr=new Dt(jt.Qr),this.$r=new Dt(jt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new jt(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new jt(e,t))}Gr(e,t){e.forEach((i=>this.removeReference(i,t)))}zr(e){const t=new Ce(new st([])),i=new jt(t,e),o=new jt(t,e+1),l=[];return this.$r.forEachInRange([i,o],(c=>{this.Wr(c),l.push(c.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new Ce(new st([])),i=new jt(t,e),o=new jt(t,e+1);let l=ze();return this.$r.forEachInRange([i,o],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new jt(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class jt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return Ce.comparator(e.key,t.key)||je(e.Hr,t.Hr)}static Ur(e,t){return je(e.Hr,t.Hr)||Ce.comparator(e.key,t.key)}}/**
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
 */class B1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Dt(jt.Qr)}checkEmpty(e){return ne.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new r1(l,t,i,o);this.mutationQueue.push(c);for(const f of o)this.Yr=this.Yr.add(new jt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return ne.resolve(c)}lookupMutationBatch(e,t){return ne.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return ne.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return ne.resolve(this.mutationQueue.length===0?vp:this.er-1)}getAllMutationBatches(e){return ne.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new jt(t,0),o=new jt(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([i,o],(c=>{const f=this.Zr(c.Hr);l.push(f)})),ne.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Dt(je);return t.forEach((o=>{const l=new jt(o,0),c=new jt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,c],(f=>{i=i.add(f.Hr)}))})),ne.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;Ce.isDocumentKey(l)||(l=l.child(""));const c=new jt(new Ce(l),0);let f=new Dt(je);return this.Yr.forEachWhile((p=>{const v=p.key.path;return!!i.isPrefixOf(v)&&(v.length===o&&(f=f.add(p.Hr)),!0)}),c),ne.resolve(this.ei(f))}ei(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Je(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return ne.forEach(t.mutations,(o=>{const l=new jt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=i}))}rr(e){}containsKey(e,t){const i=new jt(t,0),o=this.Yr.firstAfterOrEqual(i);return ne.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,ne.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class $1{constructor(e){this.ni=e,this.docs=(function(){return new ft(Ce.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return ne.resolve(i?i.document.mutableCopy():tn.newInvalidDocument(t))}getEntries(e,t){let i=gi();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():tn.newInvalidDocument(o))})),ne.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=gi();const c=t.path,f=new Ce(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:v,value:{document:E}}=p.getNext();if(!c.isPrefixOf(v.path))break;v.path.length>c.length+1||_R(vR(E),i)<=0||(o.has(E.key)||ud(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return ne.resolve(l)}getAllFromCollectionGroup(e,t,i,o){be(9500)}ri(e,t){return ne.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new z1(this)}getSize(e){return ne.resolve(this.size)}}class z1 extends V1{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(i)})),ne.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class H1{constructor(e){this.persistence=e,this.ii=new ho((t=>Ep(t)),Tp),this.lastRemoteSnapshotVersion=Ve.min(),this.highestTargetId=0,this.si=0,this.oi=new Pp,this.targetCount=0,this._i=fa.ar()}forEachTarget(e,t){return this.ii.forEach(((i,o)=>t(o))),ne.resolve()}getLastRemoteSnapshotVersion(e){return ne.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ne.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),ne.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),ne.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new fa(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,ne.resolve()}updateTargetData(e,t){return this.hr(t),ne.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,ne.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ii.forEach(((c,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ii.delete(c),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),ne.waitFor(l).next((()=>o))}getTargetCount(e){return ne.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return ne.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),ne.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((c=>{l.push(o.markPotentiallyOrphaned(e,c))})),ne.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),ne.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return ne.resolve(i)}containsKey(e,t){return ne.resolve(this.oi.containsKey(t))}}/**
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
 */class kE{constructor(e,t){this.ai={},this.overlays={},this.ui=new sd(0),this.ci=!1,this.ci=!0,this.li=new F1,this.referenceDelegate=e(this),this.hi=new H1(this),this.indexManager=new k1,this.remoteDocumentCache=(function(o){return new $1(o)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new C1(t),this.Ti=new j1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new U1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new B1(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){_e("MemoryPersistence","Starting transaction:",e);const o=new q1(this.ui.next());return this.referenceDelegate.Ii(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return ne.or(Object.values(this.ai).map((i=>()=>i.containsKey(e,t))))}}class q1 extends ER{constructor(e){super(),this.currentSequenceNumber=e}}class xp{constructor(e){this.persistence=e,this.Ai=new Pp,this.Ri=null}static Vi(e){return new xp(e)}get mi(){if(this.Ri)return this.Ri;throw be(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),ne.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),ne.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),ne.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ne.forEach(this.mi,(i=>{const o=Ce.fromPath(i);return this.fi(e,o).next((l=>{l||t.removeEntry(o,Ve.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return ne.or([()=>ne.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class qc{constructor(e,t){this.persistence=e,this.gi=new ho((i=>SR(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=O1(this,t)}static Vi(e,t){return new qc(e,t)}Ii(){}di(e){return ne.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}yr(e){let t=0;return this.gr(e,(i=>{t++})).next((()=>t))}gr(e,t){return ne.forEach(this.gi,((i,o)=>this.Sr(e,i,o).next((l=>l?ne.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(c=>this.Sr(e,c,t).next((f=>{f||(i++,l.removeEntry(c,Ve.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),ne.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),ne.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),ne.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),ne.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Rc(e.data.value)),t}Sr(e,t,i){return ne.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return ne.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Np{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Is=i,this.ds=o}static Es(e,t){let i=ze(),o=ze();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Np(e,t.fromCache,i,o)}}/**
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
 */class W1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class K1{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return NI()?8:TR(nn())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ps(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ys(e,t,o,i).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new W1;return this.ws(e,t,c).next((f=>{if(l.result=f,this.Rs)return this.Ss(e,t,c,f.size)}))})).next((()=>l.result))}Ss(e,t,i,o){return i.documentReadCount<this.Vs?(Zo()<=$e.DEBUG&&_e("QueryEngine","SDK will not create cache indexes for query:",ea(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),ne.resolve()):(Zo()<=$e.DEBUG&&_e("QueryEngine","Query:",ea(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.fs*o?(Zo()<=$e.DEBUG&&_e("QueryEngine","The SDK decides to create cache indexes for query:",ea(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Lr(t))):ne.resolve())}ps(e,t){if(kv(t))return ne.resolve(null);let i=Lr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Ff(t,null,"F"),i=Lr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const c=ze(...l);return this.gs.getDocuments(e,c).next((f=>this.indexManager.getMinOffset(e,i).next((p=>{const v=this.bs(t,f);return this.Ds(t,v,c,p.readTime)?this.ps(e,Ff(t,null,"F")):this.vs(e,v,t,p)}))))})))))}ys(e,t,i,o){return kv(t)||o.isEqual(Ve.min())?ne.resolve(null):this.gs.getDocuments(e,i).next((l=>{const c=this.bs(t,l);return this.Ds(t,c,i,o)?ne.resolve(null):(Zo()<=$e.DEBUG&&_e("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ea(t)),this.vs(e,c,t,yR(o,Rl)).next((f=>f)))}))}bs(e,t){let i=new Dt(sE(e));return t.forEach(((o,l)=>{ud(e,l)&&(i=i.add(l))})),i}Ds(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,i){return Zo()<=$e.DEBUG&&_e("QueryEngine","Using full collection scan to execute query:",ea(t)),this.gs.getDocumentsMatchingQuery(e,t,as.min(),i)}vs(e,t,i,o){return this.gs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
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
 */const bp="LocalStore",G1=3e8;class Q1{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new ft(je),this.Ms=new ho((l=>Ep(l)),Tp),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new M1(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function X1(n,e,t,i){return new Q1(n,e,t,i)}async function PE(n,e){const t=Le(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const c=[],f=[];let p=ze();for(const v of o){c.push(v.batchId);for(const E of v.mutations)p=p.add(E.key)}for(const v of l){f.push(v.batchId);for(const E of v.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(i,p).next((v=>({Bs:v,removedBatchIds:c,addedBatchIds:f})))}))}))}function Y1(n,e){const t=Le(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(f,p,v,E){const A=v.batch,C=A.keys();let N=ne.resolve();return C.forEach((K=>{N=N.next((()=>E.getEntry(p,K))).next((Q=>{const B=v.docVersions.get(K);Je(B!==null,48541),Q.version.compareTo(B)<0&&(A.applyToRemoteDocument(Q,v),Q.isValidDocument()&&(Q.setReadTime(v.commitVersion),E.addEntry(Q)))}))})),N.next((()=>f.mutationQueue.removeMutationBatch(p,A)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let p=ze();for(let v=0;v<f.mutationResults.length;++v)f.mutationResults[v].transformResults.length>0&&(p=p.add(f.batch.mutations[v].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function xE(n){const e=Le(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function J1(n,e){const t=Le(n),i=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const f=[];e.targetChanges.forEach(((E,A)=>{const C=o.get(A);if(!C)return;f.push(t.hi.removeMatchingKeys(l,E.removedDocuments,A).next((()=>t.hi.addMatchingKeys(l,E.addedDocuments,A))));let N=C.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(A)!==null?N=N.withResumeToken(Kt.EMPTY_BYTE_STRING,Ve.min()).withLastLimboFreeSnapshotVersion(Ve.min()):E.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(E.resumeToken,i)),o=o.insert(A,N),(function(Q,B,ae){return Q.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=G1?!0:ae.addedDocuments.size+ae.modifiedDocuments.size+ae.removedDocuments.size>0})(C,N,E)&&f.push(t.hi.updateTargetData(l,N))}));let p=gi(),v=ze();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),f.push(Z1(l,c,e.documentUpdates).next((E=>{p=E.Ls,v=E.ks}))),!i.isEqual(Ve.min())){const E=t.hi.getLastRemoteSnapshotVersion(l).next((A=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(E)}return ne.waitFor(f).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,v))).next((()=>p))})).then((l=>(t.Fs=o,l)))}function Z1(n,e,t){let i=ze(),o=ze();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let c=gi();return t.forEach(((f,p)=>{const v=l.get(f);p.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(f)),p.isNoDocument()&&p.version.isEqual(Ve.min())?(e.removeEntry(f,p.readTime),c=c.insert(f,p)):!v.isValidDocument()||p.version.compareTo(v.version)>0||p.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(p),c=c.insert(f,p)):_e(bp,"Ignoring outdated watch update for ",f,". Current version:",v.version," Watch version:",p.version)})),{Ls:c,ks:o}}))}function ek(n,e){const t=Le(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=vp),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function tk(n,e){const t=Le(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.hi.getTargetData(i,e).next((l=>l?(o=l,ne.resolve(o)):t.hi.allocateTargetId(i).next((c=>(o=new es(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Fs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i}))}async function qf(n,e,t){const i=Le(n),o=i.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(c=>i.persistence.referenceDelegate.removeTarget(c,o)))}catch(c){if(!va(c))throw c;_e(bp,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(o.target)}function Bv(n,e,t){const i=Le(n);let o=Ve.min(),l=ze();return i.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,v,E){const A=Le(p),C=A.Ms.get(E);return C!==void 0?ne.resolve(A.Fs.get(C)):A.hi.getTargetData(v,E)})(i,c,Lr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(c,f.targetId).next((p=>{l=p}))})).next((()=>i.Cs.getDocumentsMatchingQuery(c,e,t?o:Ve.min(),t?l:ze()))).next((f=>(nk(i,zR(e),f),{documents:f,qs:l})))))}function nk(n,e,t){let i=n.xs.get(e)||Ve.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.xs.set(e,i)}class $v{constructor(){this.activeTargetIds=QR()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rk{constructor(){this.Fo=new $v,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new $v,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ik{xo(e){}shutdown(){}}/**
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
 */const zv="ConnectivityMonitor";class Hv{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){_e(zv,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){_e(zv,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vc=null;function Wf(){return vc===null?vc=(function(){return 268435456+Math.round(2147483648*Math.random())})():vc++,"0x"+vc.toString(16)}/**
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
 */const hf="RestConnection",sk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ok{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.Ko=this.databaseId.database===Bc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const c=Wf(),f=this.Go(e,t.toUriEncodedString());_e(hf,`Sending RPC '${e}' ${c}:`,f,i);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(p,o,l);const{host:v}=new URL(f),E=fs(v);return this.jo(e,f,p,i,E).then((A=>(_e(hf,`Received RPC '${e}' ${c}: `,A),A)),(A=>{throw os(hf,`RPC '${e}' ${c} failed with error: `,A,"url: ",f,"request:",i),A}))}Jo(e,t,i,o,l,c){return this.Wo(e,t,i,o,l)}zo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ga})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const i=sk[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
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
 */class ak{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Jt="WebChannelConnection";class lk extends ok{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,o,l){const c=Wf();return new Promise(((f,p)=>{const v=new Nw;v.setWithCredentials(!0),v.listenOnce(bw.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case Cc.NO_ERROR:const A=v.getResponseJson();_e(Jt,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(A)),f(A);break;case Cc.TIMEOUT:_e(Jt,`RPC '${e}' ${c} timed out`),p(new ge(ee.DEADLINE_EXCEEDED,"Request time out"));break;case Cc.HTTP_ERROR:const C=v.getStatus();if(_e(Jt,`RPC '${e}' ${c} failed with status:`,C,"response text:",v.getResponseText()),C>0){let N=v.getResponseJson();Array.isArray(N)&&(N=N[0]);const K=N==null?void 0:N.error;if(K&&K.status&&K.message){const Q=(function(ae){const Z=ae.toLowerCase().replace(/_/g,"-");return Object.values(ee).indexOf(Z)>=0?Z:ee.UNKNOWN})(K.status);p(new ge(Q,K.message))}else p(new ge(ee.UNKNOWN,"Server responded with status "+v.getStatus()))}else p(new ge(ee.UNAVAILABLE,"Connection failed."));break;default:be(9055,{c_:e,streamId:c,l_:v.getLastErrorCode(),h_:v.getLastError()})}}finally{_e(Jt,`RPC '${e}' ${c} completed.`)}}));const E=JSON.stringify(o);_e(Jt,`RPC '${e}' ${c} sending request:`,o),v.send(t,"POST",E,i,15)}))}P_(e,t,i){const o=Wf(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Vw(),f=Ow(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(p.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(p.useFetchStreams=!0),this.zo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const E=l.join("");_e(Jt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const A=c.createWebChannel(E,p);this.T_(A);let C=!1,N=!1;const K=new ak({Ho:B=>{N?_e(Jt,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(C||(_e(Jt,`Opening RPC '${e}' stream ${o} transport.`),A.open(),C=!0),_e(Jt,`RPC '${e}' stream ${o} sending:`,B),A.send(B))},Yo:()=>A.close()}),Q=(B,ae,Z)=>{B.listen(ae,(X=>{try{Z(X)}catch(H){setTimeout((()=>{throw H}),0)}}))};return Q(A,hl.EventType.OPEN,(()=>{N||(_e(Jt,`RPC '${e}' stream ${o} transport opened.`),K.s_())})),Q(A,hl.EventType.CLOSE,(()=>{N||(N=!0,_e(Jt,`RPC '${e}' stream ${o} transport closed`),K.__(),this.I_(A))})),Q(A,hl.EventType.ERROR,(B=>{N||(N=!0,os(Jt,`RPC '${e}' stream ${o} transport errored. Name:`,B.name,"Message:",B.message),K.__(new ge(ee.UNAVAILABLE,"The operation could not be completed")))})),Q(A,hl.EventType.MESSAGE,(B=>{var ae;if(!N){const Z=B.data[0];Je(!!Z,16349);const X=Z,H=(X==null?void 0:X.error)||((ae=X[0])===null||ae===void 0?void 0:ae.error);if(H){_e(Jt,`RPC '${e}' stream ${o} received error:`,H);const me=H.status;let de=(function(k){const b=Rt[k];if(b!==void 0)return yE(b)})(me),P=H.message;de===void 0&&(de=ee.INTERNAL,P="Unknown error status: "+me+" with message "+H.message),N=!0,K.__(new ge(de,P)),A.close()}else _e(Jt,`RPC '${e}' stream ${o} received:`,Z),K.a_(Z)}})),Q(f,Dw.STAT_EVENT,(B=>{B.stat===Df.PROXY?_e(Jt,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===Df.NOPROXY&&_e(Jt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{K.o_()}),0),K}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function ff(){return typeof document<"u"?document:null}/**
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
 */function pd(n){return new h1(n,!0)}/**
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
 */class NE{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-i);o>0&&_e("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const qv="PersistentStream";class bE{constructor(e,t,i,o,l,c,f,p){this.Fi=e,this.w_=i,this.S_=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new NE(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===ee.RESOURCE_EXHAUSTED?(mi(t.toString()),mi("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===ee.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.b_===t&&this.W_(i,o)}),(i=>{e((()=>{const o=new ge(ee.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(o)}))}))}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{i((()=>this.G_(o)))})),this.stream.onMessage((o=>{i((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return _e(qv,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(_e(qv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class uk extends bE{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=m1(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Ve.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ve.min():c.readTime?Mr(c.readTime):Ve.min()})(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=Hf(this.serializer),t.addTarget=(function(l,c){let f;const p=c.target;if(f=jf(p)?{documents:v1(l,p)}:{query:_1(l,p).Vt},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=wE(l,c.resumeToken);const v=Bf(l,c.expectedCount);v!==null&&(f.expectedCount=v)}else if(c.snapshotVersion.compareTo(Ve.min())>0){f.readTime=Hc(l,c.snapshotVersion.toTimestamp());const v=Bf(l,c.expectedCount);v!==null&&(f.expectedCount=v)}return f})(this.serializer,e);const i=E1(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=Hf(this.serializer),t.removeTarget=e,this.k_(t)}}class ck extends bE{constructor(e,t,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Je(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=y1(e.writeResults,e.commitTime),i=Mr(e.commitTime);return this.listener.ta(i,t)}na(){const e={};e.database=Hf(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>g1(this.serializer,i)))};this.k_(t)}}/**
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
 */class dk{}class hk extends dk{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ge(ee.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Wo(e,$f(t,i),o,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ge(ee.UNKNOWN,l.toString())}))}Jo(e,t,i,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.Jo(e,$f(t,i),o,c,f,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ge(ee.UNKNOWN,c.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class fk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(mi(t),this._a=!1):_e("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const no="RemoteStore";class pk{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((c=>{i.enqueueAndForget((async()=>{fo(this)&&(_e(no,"Restarting streams for network reachability change."),await(async function(p){const v=Le(p);v.Ia.add(4),await Wl(v),v.Aa.set("Unknown"),v.Ia.delete(4),await md(v)})(this))}))})),this.Aa=new fk(i,o)}}async function md(n){if(fo(n))for(const e of n.da)await e(!0)}async function Wl(n){for(const e of n.da)await e(!1)}function DE(n,e){const t=Le(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Lp(t)?Vp(t):wa(t).x_()&&Op(t,e))}function Dp(n,e){const t=Le(n),i=wa(t);t.Ta.delete(e),i.x_()&&OE(t,e),t.Ta.size===0&&(i.x_()?i.B_():fo(t)&&t.Aa.set("Unknown"))}function Op(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ve.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}wa(n).H_(e)}function OE(n,e){n.Ra.$e(e),wa(n).Y_(e)}function Vp(n){n.Ra=new l1({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),wa(n).start(),n.Aa.aa()}function Lp(n){return fo(n)&&!wa(n).M_()&&n.Ta.size>0}function fo(n){return Le(n).Ia.size===0}function VE(n){n.Ra=void 0}async function mk(n){n.Aa.set("Online")}async function gk(n){n.Ta.forEach(((e,t)=>{Op(n,e)}))}async function yk(n,e){VE(n),Lp(n)?(n.Aa.la(e),Vp(n)):n.Aa.set("Unknown")}async function vk(n,e,t){if(n.Aa.set("Online"),e instanceof _E&&e.state===2&&e.cause)try{await(async function(o,l){const c=l.cause;for(const f of l.targetIds)o.Ta.has(f)&&(await o.remoteSyncer.rejectListen(f,c),o.Ta.delete(f),o.Ra.removeTarget(f))})(n,e)}catch(i){_e(no,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Wc(n,i)}else if(e instanceof xc?n.Ra.Ye(e):e instanceof vE?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Ve.min()))try{const i=await xE(n.localStore);t.compareTo(i)>=0&&await(function(l,c){const f=l.Ra.Pt(c);return f.targetChanges.forEach(((p,v)=>{if(p.resumeToken.approximateByteSize()>0){const E=l.Ta.get(v);E&&l.Ta.set(v,E.withResumeToken(p.resumeToken,c))}})),f.targetMismatches.forEach(((p,v)=>{const E=l.Ta.get(p);if(!E)return;l.Ta.set(p,E.withResumeToken(Kt.EMPTY_BYTE_STRING,E.snapshotVersion)),OE(l,p);const A=new es(E.target,p,v,E.sequenceNumber);Op(l,A)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(i){_e(no,"Failed to raise snapshot:",i),await Wc(n,i)}}async function Wc(n,e,t){if(!va(e))throw e;n.Ia.add(1),await Wl(n),n.Aa.set("Offline"),t||(t=()=>xE(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{_e(no,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await md(n)}))}function LE(n,e){return e().catch((t=>Wc(n,t,e)))}async function gd(n){const e=Le(n),t=ds(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:vp;for(;_k(e);)try{const o=await ek(e.localStore,i);if(o===null){e.Pa.length===0&&t.B_();break}i=o.batchId,wk(e,o)}catch(o){await Wc(e,o)}ME(e)&&jE(e)}function _k(n){return fo(n)&&n.Pa.length<10}function wk(n,e){n.Pa.push(e);const t=ds(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function ME(n){return fo(n)&&!ds(n).M_()&&n.Pa.length>0}function jE(n){ds(n).start()}async function Ek(n){ds(n).na()}async function Tk(n){const e=ds(n);for(const t of n.Pa)e.X_(t.mutations)}async function Ik(n,e,t){const i=n.Pa.shift(),o=Cp.from(i,e,t);await LE(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await gd(n)}async function Sk(n,e){e&&ds(n).Z_&&await(async function(i,o){if((function(c){return o1(c)&&c!==ee.ABORTED})(o.code)){const l=i.Pa.shift();ds(i).N_(),await LE(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await gd(i)}})(n,e),ME(n)&&jE(n)}async function Wv(n,e){const t=Le(n);t.asyncQueue.verifyOperationInProgress(),_e(no,"RemoteStore received new credentials");const i=fo(t);t.Ia.add(3),await Wl(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await md(t)}async function Ak(n,e){const t=Le(n);e?(t.Ia.delete(2),await md(t)):e||(t.Ia.add(2),await Wl(t),t.Aa.set("Unknown"))}function wa(n){return n.Va||(n.Va=(function(t,i,o){const l=Le(t);return l.ia(),new uk(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:mk.bind(null,n),e_:gk.bind(null,n),n_:yk.bind(null,n),J_:vk.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Lp(n)?Vp(n):n.Aa.set("Unknown")):(await n.Va.stop(),VE(n))}))),n.Va}function ds(n){return n.ma||(n.ma=(function(t,i,o){const l=Le(t);return l.ia(),new ck(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Ek.bind(null,n),n_:Sk.bind(null,n),ea:Tk.bind(null,n),ta:Ik.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await gd(n)):(await n.ma.stop(),n.Pa.length>0&&(_e(no,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class Mp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new rs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,f=new Mp(e,t,c,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ge(ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jp(n,e){if(mi("AsyncQueue",`${e}: ${n}`),va(n))return new ge(ee.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class la{static emptySet(e){return new la(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||Ce.comparator(t.key,i.key):(t,i)=>Ce.comparator(t.key,i.key),this.keyedMap=fl(),this.sortedSet=new ft(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof la)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new la;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class Kv{constructor(){this.fa=new ft(Ce.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):be(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,i)=>{e.push(i)})),e}}class pa{constructor(e,t,i,o,l,c,f,p,v){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=v}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach((f=>{c.push({type:0,doc:f})})),new pa(e,t,la.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ld(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class Ck{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class Rk{constructor(){this.queries=Gv(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const o=Le(t),l=o.queries;o.queries=Gv(),l.forEach(((c,f)=>{for(const p of f.wa)p.onError(i)}))})(this,new ge(ee.ABORTED,"Firestore shutting down"))}}function Gv(){return new ho((n=>iE(n)),ld)}async function UE(n,e){const t=Le(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(i=2):(l=new Ck,i=e.ba()?0:1);try{switch(i){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const f=jp(c,`Initialization of query '${ea(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&Up(t)}async function FE(n,e){const t=Le(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.wa.indexOf(e);c>=0&&(l.wa.splice(c,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function kk(n,e){const t=Le(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const f of c.wa)f.Ca(o)&&(i=!0);c.ya=o}}i&&Up(t)}function Pk(n,e,t){const i=Le(n),o=i.queries.get(e);if(o)for(const l of o.wa)l.onError(t);i.queries.delete(e)}function Up(n){n.Da.forEach((e=>{e.next()}))}var Kf,Qv;(Qv=Kf||(Kf={})).Fa="default",Qv.Cache="cache";class BE{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new pa(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=pa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Kf.Cache}}/**
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
 */class $E{constructor(e){this.key=e}}class zE{constructor(e){this.key=e}}class xk{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ze(),this.mutatedKeys=ze(),this.Xa=sE(e),this.eu=new la(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new Kv,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,f=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,A)=>{const C=o.get(E),N=ud(this.query,A)?A:null,K=!!C&&this.mutatedKeys.has(C.key),Q=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let B=!1;C&&N?C.data.isEqual(N.data)?K!==Q&&(i.track({type:3,doc:N}),B=!0):this.iu(C,N)||(i.track({type:2,doc:N}),B=!0,(p&&this.Xa(N,p)>0||v&&this.Xa(N,v)<0)&&(f=!0)):!C&&N?(i.track({type:0,doc:N}),B=!0):C&&!N&&(i.track({type:1,doc:C}),B=!0,(p||v)&&(f=!0)),B&&(N?(c=c.add(N),l=Q?l.add(E):l.delete(E)):(c=c.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const E=this.query.limitType==="F"?c.last():c.first();c=c.delete(E.key),l=l.delete(E.key),i.track({type:1,doc:E})}return{eu:c,ru:i,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const c=e.ru.pa();c.sort(((E,A)=>(function(N,K){const Q=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return be(20277,{At:B})}};return Q(N)-Q(K)})(E.type,A.type)||this.Xa(E.doc,A.doc))),this.su(i),o=o!=null&&o;const f=t&&!o?this.ou():[],p=this.Za.size===0&&this.current&&!o?1:0,v=p!==this.Ya;return this.Ya=p,c.length!==0||v?{snapshot:new pa(this.query,e.eu,l,c,e.mutatedKeys,p===0,v,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Kv,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ze(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const t=[];return e.forEach((i=>{this.Za.has(i)||t.push(new zE(i))})),this.Za.forEach((i=>{e.has(i)||t.push(new $E(i))})),t}uu(e){this.Ha=e.qs,this.Za=ze();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return pa.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Fp="SyncEngine";class Nk{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class bk{constructor(e){this.key=e,this.lu=!1}}class Dk{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.hu={},this.Pu=new ho((f=>iE(f)),ld),this.Tu=new Map,this.Iu=new Set,this.du=new ft(Ce.comparator),this.Eu=new Map,this.Au=new Pp,this.Ru={},this.Vu=new Map,this.mu=fa.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Ok(n,e,t=!0){const i=QE(n);let o;const l=i.Pu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await HE(i,e,t,!0),o}async function Vk(n,e){const t=QE(n);await HE(t,e,!0,!1)}async function HE(n,e,t,i){const o=await tk(n.localStore,Lr(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await Lk(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&DE(n.remoteStore,o),f}async function Lk(n,e,t,i,o){n.gu=(A,C,N)=>(async function(Q,B,ae,Z){let X=B.view.nu(ae);X.Ds&&(X=await Bv(Q.localStore,B.query,!1).then((({documents:P})=>B.view.nu(P,X))));const H=Z&&Z.targetChanges.get(B.targetId),me=Z&&Z.targetMismatches.get(B.targetId)!=null,de=B.view.applyChanges(X,Q.isPrimaryClient,H,me);return Yv(Q,B.targetId,de._u),de.snapshot})(n,A,C,N);const l=await Bv(n.localStore,e,!0),c=new xk(e,l.qs),f=c.nu(l.documents),p=ql.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),v=c.applyChanges(f,n.isPrimaryClient,p);Yv(n,t,v._u);const E=new Nk(e,t,c);return n.Pu.set(e,E),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),v.snapshot}async function Mk(n,e,t){const i=Le(n),o=i.Pu.get(e),l=i.Tu.get(o.targetId);if(l.length>1)return i.Tu.set(o.targetId,l.filter((c=>!ld(c,e)))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await qf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Dp(i.remoteStore,o.targetId),Gf(i,o.targetId)})).catch(ya)):(Gf(i,o.targetId),await qf(i.localStore,o.targetId,!0))}async function jk(n,e){const t=Le(n),i=t.Pu.get(e),o=t.Tu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Dp(t.remoteStore,i.targetId))}async function Uk(n,e,t){const i=Wk(n);try{const o=await(function(c,f){const p=Le(c),v=nt.now(),E=f.reduce(((N,K)=>N.add(K.key)),ze());let A,C;return p.persistence.runTransaction("Locally write mutations","readwrite",(N=>{let K=gi(),Q=ze();return p.Os.getEntries(N,E).next((B=>{K=B,K.forEach(((ae,Z)=>{Z.isValidDocument()||(Q=Q.add(ae))}))})).next((()=>p.localDocuments.getOverlayedDocuments(N,K))).next((B=>{A=B;const ae=[];for(const Z of f){const X=t1(Z,A.get(Z.key).overlayedDocument);X!=null&&ae.push(new ys(Z.key,X,Xw(X.value.mapValue),un.exists(!0)))}return p.mutationQueue.addMutationBatch(N,v,ae,f)})).next((B=>{C=B;const ae=B.applyToLocalDocumentSet(A,Q);return p.documentOverlayCache.saveOverlays(N,B.batchId,ae)}))})).then((()=>({batchId:C.batchId,changes:aE(A)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(c,f,p){let v=c.Ru[c.currentUser.toKey()];v||(v=new ft(je)),v=v.insert(f,p),c.Ru[c.currentUser.toKey()]=v})(i,o.batchId,t),await Kl(i,o.changes),await gd(i.remoteStore)}catch(o){const l=jp(o,"Failed to persist write");t.reject(l)}}async function qE(n,e){const t=Le(n);try{const i=await J1(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const c=t.Eu.get(l);c&&(Je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?c.lu=!0:o.modifiedDocuments.size>0?Je(c.lu,14607):o.removedDocuments.size>0&&(Je(c.lu,42227),c.lu=!1))})),await Kl(t,i,e)}catch(i){await ya(i)}}function Xv(n,e,t){const i=Le(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Pu.forEach(((l,c)=>{const f=c.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(c,f){const p=Le(c);p.onlineState=f;let v=!1;p.queries.forEach(((E,A)=>{for(const C of A.wa)C.va(f)&&(v=!0)})),v&&Up(p)})(i.eventManager,e),o.length&&i.hu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Fk(n,e,t){const i=Le(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Eu.get(e),l=o&&o.key;if(l){let c=new ft(Ce.comparator);c=c.insert(l,tn.newNoDocument(l,Ve.min()));const f=ze().add(l),p=new fd(Ve.min(),new Map,new ft(je),c,f);await qE(i,p),i.du=i.du.remove(l),i.Eu.delete(e),Bp(i)}else await qf(i.localStore,e,!1).then((()=>Gf(i,e,t))).catch(ya)}async function Bk(n,e){const t=Le(n),i=e.batch.batchId;try{const o=await Y1(t.localStore,e);KE(t,i,null),WE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Kl(t,o)}catch(o){await ya(o)}}async function $k(n,e,t){const i=Le(n);try{const o=await(function(c,f){const p=Le(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let E;return p.mutationQueue.lookupMutationBatch(v,f).next((A=>(Je(A!==null,37113),E=A.keys(),p.mutationQueue.removeMutationBatch(v,A)))).next((()=>p.mutationQueue.performConsistencyCheck(v))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(v,E,f))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,E))).next((()=>p.localDocuments.getDocuments(v,E)))}))})(i.localStore,e);KE(i,e,t),WE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Kl(i,o)}catch(o){await ya(o)}}function WE(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function KE(n,e,t){const i=Le(n);let o=i.Ru[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ru[i.currentUser.toKey()]=o}}function Gf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Tu.get(e))n.Pu.delete(i),t&&n.hu.pu(i,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((i=>{n.Au.containsKey(i)||GE(n,i)}))}function GE(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Dp(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Bp(n))}function Yv(n,e,t){for(const i of t)i instanceof $E?(n.Au.addReference(i.key,e),zk(n,i)):i instanceof zE?(_e(Fp,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,e),n.Au.containsKey(i.key)||GE(n,i.key)):be(19791,{yu:i})}function zk(n,e){const t=e.key,i=t.path.canonicalString();n.du.get(t)||n.Iu.has(i)||(_e(Fp,"New document in limbo: "+t),n.Iu.add(i),Bp(n))}function Bp(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new Ce(st.fromString(e)),i=n.mu.next();n.Eu.set(i,new bk(t)),n.du=n.du.insert(t,i),DE(n.remoteStore,new es(Lr(Ip(t.path)),i,"TargetPurposeLimboResolution",sd.ue))}}async function Kl(n,e,t){const i=Le(n),o=[],l=[],c=[];i.Pu.isEmpty()||(i.Pu.forEach(((f,p)=>{c.push(i.gu(p,e,t).then((v=>{var E;if((v||t)&&i.isPrimaryClient){const A=v?!v.fromCache:(E=t==null?void 0:t.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;i.sharedClientState.updateQueryState(p.targetId,A?"current":"not-current")}if(v){o.push(v);const A=Np.Es(p.targetId,v);l.push(A)}})))})),await Promise.all(c),i.hu.J_(o),await(async function(p,v){const E=Le(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>ne.forEach(v,(C=>ne.forEach(C.Is,(N=>E.persistence.referenceDelegate.addReference(A,C.targetId,N))).next((()=>ne.forEach(C.ds,(N=>E.persistence.referenceDelegate.removeReference(A,C.targetId,N)))))))))}catch(A){if(!va(A))throw A;_e(bp,"Failed to update sequence numbers: "+A)}for(const A of v){const C=A.targetId;if(!A.fromCache){const N=E.Fs.get(C),K=N.snapshotVersion,Q=N.withLastLimboFreeSnapshotVersion(K);E.Fs=E.Fs.insert(C,Q)}}})(i.localStore,l))}async function Hk(n,e){const t=Le(n);if(!t.currentUser.isEqual(e)){_e(Fp,"User change. New user:",e.toKey());const i=await PE(t.localStore,e);t.currentUser=e,(function(l,c){l.Vu.forEach((f=>{f.forEach((p=>{p.reject(new ge(ee.CANCELLED,c))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Kl(t,i.Bs)}}function qk(n,e){const t=Le(n),i=t.Eu.get(e);if(i&&i.lu)return ze().add(i.key);{let o=ze();const l=t.Tu.get(e);if(!l)return o;for(const c of l){const f=t.Pu.get(c);o=o.unionWith(f.view.tu)}return o}}function QE(n){const e=Le(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=qE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Fk.bind(null,e),e.hu.J_=kk.bind(null,e.eventManager),e.hu.pu=Pk.bind(null,e.eventManager),e}function Wk(n){const e=Le(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Bk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$k.bind(null,e),e}class Kc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return X1(this.persistence,new K1,e.initialUser,this.serializer)}Du(e){return new kE(xp.Vi,this.serializer)}bu(e){return new rk}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Kc.provider={build:()=>new Kc};class Kk extends Kc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Je(this.persistence.referenceDelegate instanceof qc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new b1(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?_n.withCacheSize(this.cacheSizeBytes):_n.DEFAULT;return new kE((i=>qc.Vi(i,t)),this.serializer)}}class Qf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Xv(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hk.bind(null,this.syncEngine),await Ak(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Rk})()}createDatastore(e){const t=pd(e.databaseInfo.databaseId),i=(function(l){return new lk(l)})(e.databaseInfo);return(function(l,c,f,p){return new hk(l,c,f,p)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,c,f){return new pk(i,o,l,c,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>Xv(this.syncEngine,t,0)),(function(){return Hv.C()?new Hv:new ik})())}createSyncEngine(e,t){return(function(o,l,c,f,p,v,E){const A=new Dk(o,l,c,f,p,v);return E&&(A.fu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Le(o);_e(no,"RemoteStore shutting down."),l.Ia.add(5),await Wl(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Qf.provider={build:()=>new Qf};/**
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
 */class XE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):mi("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const hs="FirestoreClient";class Gk{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Zt.UNAUTHENTICATED,this.clientId=yp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async c=>{_e(hs,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(i,(c=>(_e(hs,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=jp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function pf(n,e){n.asyncQueue.verifyOperationInProgress(),_e(hs,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await PE(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>{os("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{_e("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{os("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),n._offlineComponents=e}async function Jv(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Qk(n);_e(hs,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>Wv(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>Wv(e.remoteStore,o))),n._onlineComponents=e}async function Qk(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){_e(hs,"Using user provided OfflineComponentProvider");try{await pf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===ee.FAILED_PRECONDITION||o.code===ee.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;os("Error using user provided cache. Falling back to memory cache: "+t),await pf(n,new Kc)}}else _e(hs,"Using default OfflineComponentProvider"),await pf(n,new Kk(void 0));return n._offlineComponents}async function YE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(_e(hs,"Using user provided OnlineComponentProvider"),await Jv(n,n._uninitializedComponentsProvider._online)):(_e(hs,"Using default OnlineComponentProvider"),await Jv(n,new Qf))),n._onlineComponents}function Xk(n){return YE(n).then((e=>e.syncEngine))}async function Xf(n){const e=await YE(n),t=e.eventManager;return t.onListen=Ok.bind(null,e.syncEngine),t.onUnlisten=Mk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Vk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=jk.bind(null,e.syncEngine),t}function Yk(n,e,t={}){const i=new rs;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,p,v){const E=new XE({next:C=>{E.Ou(),c.enqueueAndForget((()=>FE(l,A))),C.fromCache&&p.source==="server"?v.reject(new ge(ee.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(C)},error:C=>v.reject(C)}),A=new BE(f,E,{includeMetadataChanges:!0,ka:!0});return UE(l,A)})(await Xf(n),n.asyncQueue,e,t,i))),i.promise}/**
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
 */function JE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Zv=new Map;/**
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
 */const ZE="firestore.googleapis.com",e_=!0;class t_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ge(ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ZE,this.ssl=e_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:e_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=RE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<x1)throw new ge(ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=JE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ge(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ge(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ge(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yd{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new t_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ge(ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ge(ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new t_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new aR;switch(i.type){case"firstParty":return new dR(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ge(ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Zv.get(t);i&&(_e("ComponentProvider","Removing Datastore"),Zv.delete(t),i.terminate())})(this),Promise.resolve()}}function Jk(n,e,t,i={}){var o;n=On(n,yd);const l=fs(e),c=n._getSettings(),f=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),p=`${e}:${t}`;l&&(rp(`https://${p}`),ip("Firestore",!0)),c.host!==ZE&&c.host!==p&&os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v=Object.assign(Object.assign({},c),{host:p,ssl:l,emulatorOptions:i});if(!ss(v,f)&&(n._setSettings(v),i.mockUserToken)){let E,A;if(typeof i.mockUserToken=="string")E=i.mockUserToken,A=Zt.MOCK_USER;else{E=$_(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const C=i.mockUserToken.sub||i.mockUserToken.user_id;if(!C)throw new ge(ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new Zt(C)}n._authCredentials=new lR(new Mw(E,A))}}/**
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
 */class vs{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new vs(this.firestore,e,this._query)}}class Tt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new is(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}toJSON(){return{type:Tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(zl(t,Tt._jsonSchema))return new Tt(e,i||null,new Ce(st.fromString(t.referencePath)))}}Tt._jsonSchemaVersion="firestore/documentReference/1.0",Tt._jsonSchema={type:Pt("string",Tt._jsonSchemaVersion),referencePath:Pt("string")};class is extends vs{constructor(e,t,i){super(e,t,Ip(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new Ce(e))}withConverter(e){return new is(this.firestore,e,this._path)}}function gt(n,e,...t){if(n=et(n),Uw("collection","path",e),n instanceof yd){const i=st.fromString(e,...t);return pv(i),new is(n,null,i)}{if(!(n instanceof Tt||n instanceof is))throw new ge(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(st.fromString(e,...t));return pv(i),new is(n.firestore,null,i)}}function Xe(n,e,...t){if(n=et(n),arguments.length===1&&(e=yp.newId()),Uw("doc","path",e),n instanceof yd){const i=st.fromString(e,...t);return fv(i),new Tt(n,null,new Ce(i))}{if(!(n instanceof Tt||n instanceof is))throw new ge(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(st.fromString(e,...t));return fv(i),new Tt(n.firestore,n instanceof is?n.converter:null,new Ce(i))}}/**
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
 */const n_="AsyncQueue";class r_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new NE(this,"async_queue_retry"),this.oc=()=>{const i=ff();i&&_e(n_,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=ff();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=ff();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new rs;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!va(e))throw e;_e(n_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((i=>{throw this.tc=i,this.nc=!1,mi("INTERNAL UNHANDLED ERROR: ",i_(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=Mp.createAndSchedule(this,e,t,i,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&be(47125,{hc:i_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function i_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function s_(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(n,["next","error","complete"])}class yi extends yd{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new r_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new r_(e),this._firestoreClient=void 0,await e}}}function Zk(n,e){const t=typeof n=="object"?n:ed(),i=typeof n=="string"?n:Bc,o=lo(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=U_("firestore");l&&Jk(o,...l)}return o}function vd(n){if(n._terminated)throw new ge(ee.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||eP(n),n._firestoreClient}function eP(n){var e,t,i;const o=n._freezeSettings(),l=(function(f,p,v,E){return new RR(f,p,v,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,JE(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new Gk(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&(function(f){const p=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(p),_online:p}})(n._componentsProvider))}/**
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
 */class Gn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gn(Kt.fromBase64String(e))}catch(t){throw new ge(ee.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Gn(Kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Gn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(zl(e,Gn._jsonSchema))return Gn.fromBase64String(e.bytes)}}Gn._jsonSchemaVersion="firestore/bytes/1.0",Gn._jsonSchema={type:Pt("string",Gn._jsonSchemaVersion),bytes:Pt("string")};/**
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
 */class Gl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ge(ee.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ea{constructor(e){this._methodName=e}}/**
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
 */class jr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ge(ee.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ge(ee.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return je(this._lat,e._lat)||je(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:jr._jsonSchemaVersion}}static fromJSON(e){if(zl(e,jr._jsonSchema))return new jr(e.latitude,e.longitude)}}jr._jsonSchemaVersion="firestore/geoPoint/1.0",jr._jsonSchema={type:Pt("string",jr._jsonSchemaVersion),latitude:Pt("number"),longitude:Pt("number")};/**
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
 */class Ur{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ur._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(zl(e,Ur._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ur(e.vectorValues);throw new ge(ee.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ur._jsonSchemaVersion="firestore/vectorValue/1.0",Ur._jsonSchema={type:Pt("string",Ur._jsonSchemaVersion),vectorValues:Pt("object")};/**
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
 */const tP=/^__.*__$/;class nP{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new ys(e,this.data,this.fieldMask,t,this.fieldTransforms):new Hl(e,this.data,t,this.fieldTransforms)}}class eT{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new ys(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function tT(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw be(40011,{Ec:n})}}class _d{constructor(e,t,i,o,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new _d(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.fc(e),o}gc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Gc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(tT(this.Ec)&&tP.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class rP{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||pd(e)}Dc(e,t,i,o=!1){return new _d({Ec:e,methodName:t,bc:i,path:Wt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ql(n){const e=n._freezeSettings(),t=pd(n._databaseId);return new rP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function $p(n,e,t,i,o,l={}){const c=n.Dc(l.merge||l.mergeFields?2:0,e,t,o);Wp("Data must be an object, but it was:",c,i);const f=iT(i,c);let p,v;if(l.merge)p=new bn(c.fieldMask),v=c.fieldTransforms;else if(l.mergeFields){const E=[];for(const A of l.mergeFields){const C=Yf(e,A,t);if(!c.contains(C))throw new ge(ee.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);oT(E,C)||E.push(C)}p=new bn(E),v=c.fieldTransforms.filter((A=>p.covers(A.field)))}else p=null,v=c.fieldTransforms;return new nP(new wn(f),p,v)}class Xl extends Ea{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xl}}function iP(n,e,t){return new _d({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class zp extends Ea{_toFieldTransform(e){return new Ap(e.path,new bl)}isEqual(e){return e instanceof zp}}class Hp extends Ea{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=iP(this,e,!0),i=this.vc.map((l=>Ta(l,t))),o=new ha(i);return new Ap(e.path,o)}isEqual(e){return e instanceof Hp&&ss(this.vc,e.vc)}}class qp extends Ea{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){const t=new Ol(e.serializer,cE(e.serializer,this.Cc));return new Ap(e.path,t)}isEqual(e){return e instanceof qp&&this.Cc===e.Cc}}function nT(n,e,t,i){const o=n.Dc(1,e,t);Wp("Data must be an object, but it was:",o,i);const l=[],c=wn.empty();gs(i,((p,v)=>{const E=Kp(e,p,t);v=et(v);const A=o.gc(E);if(v instanceof Xl)l.push(E);else{const C=Ta(v,A);C!=null&&(l.push(E),c.set(E,C))}}));const f=new bn(l);return new eT(c,f,o.fieldTransforms)}function rT(n,e,t,i,o,l){const c=n.Dc(1,e,t),f=[Yf(e,i,t)],p=[o];if(l.length%2!=0)throw new ge(ee.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<l.length;C+=2)f.push(Yf(e,l[C])),p.push(l[C+1]);const v=[],E=wn.empty();for(let C=f.length-1;C>=0;--C)if(!oT(v,f[C])){const N=f[C];let K=p[C];K=et(K);const Q=c.gc(N);if(K instanceof Xl)v.push(N);else{const B=Ta(K,Q);B!=null&&(v.push(N),E.set(N,B))}}const A=new bn(v);return new eT(E,A,c.fieldTransforms)}function sP(n,e,t,i=!1){return Ta(t,n.Dc(i?4:3,e))}function Ta(n,e){if(sT(n=et(n)))return Wp("Unsupported field value:",e,n),iT(n,e);if(n instanceof Ea)return(function(i,o){if(!tT(o.Ec))throw o.wc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(i,o){const l=[];let c=0;for(const f of i){let p=Ta(f,o.yc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=et(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return cE(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=nt.fromDate(i);return{timestampValue:Hc(o.serializer,l)}}if(i instanceof nt){const l=new nt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Hc(o.serializer,l)}}if(i instanceof jr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Gn)return{bytesValue:wE(o.serializer,i._byteString)};if(i instanceof Tt){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.wc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:kp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Ur)return(function(c,f){return{mapValue:{fields:{[Gw]:{stringValue:Qw},[$c]:{arrayValue:{values:c.toArray().map((v=>{if(typeof v!="number")throw f.wc("VectorValues must only contain numeric values.");return Sp(f.serializer,v)}))}}}}}})(i,o);throw o.wc(`Unsupported field value: ${id(i)}`)})(n,e)}function iT(n,e){const t={};return $w(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gs(n,((i,o)=>{const l=Ta(o,e.Vc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function sT(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof nt||n instanceof jr||n instanceof Gn||n instanceof Tt||n instanceof Ea||n instanceof Ur)}function Wp(n,e,t){if(!sT(t)||!Fw(t)){const i=id(t);throw i==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+i)}}function Yf(n,e,t){if((e=et(e))instanceof Gl)return e._internalPath;if(typeof e=="string")return Kp(n,e);throw Gc("Field path arguments must be of type string or ",n,!1,void 0,t)}const oP=new RegExp("[~\\*/\\[\\]]");function Kp(n,e,t){if(e.search(oP)>=0)throw Gc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Gl(...e.split("."))._internalPath}catch{throw Gc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Gc(n,e,t,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new ge(ee.INVALID_ARGUMENT,f+n+p)}function oT(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class aT{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new aP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(wd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class aP extends aT{data(){return super.data()}}function wd(n,e){return typeof e=="string"?Kp(n,e):e instanceof Gl?e._internalPath:e._delegate._internalPath}/**
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
 */function lT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ge(ee.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gp{}class uT extends Gp{}function br(n,e,...t){let i=[];e instanceof Gp&&i.push(e),i=i.concat(t),(function(l){const c=l.filter((p=>p instanceof Qp)).length,f=l.filter((p=>p instanceof Ed)).length;if(c>1||c>0&&f>0)throw new ge(ee.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class Ed extends uT{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Ed(e,t,i)}_apply(e){const t=this._parse(e);return cT(e._query,t),new vs(e.firestore,e.converter,Uf(e._query,t))}_parse(e){const t=Ql(e.firestore);return(function(l,c,f,p,v,E,A){let C;if(v.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ge(ee.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){a_(A,E);const K=[];for(const Q of A)K.push(o_(p,l,Q));C={arrayValue:{values:K}}}else C=o_(p,l,A)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||a_(A,E),C=sP(f,c,A,E==="in"||E==="not-in");return kt.create(v,E,C)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Gs(n,e,t){const i=e,o=wd("where",n);return Ed._create(o,i,t)}class Qp extends Gp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Qp(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:gr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let c=o;const f=l.getFlattenedFilters();for(const p of f)cT(c,p),c=Uf(c,p)})(e._query,t),new vs(e.firestore,e.converter,Uf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Xp extends uT{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Xp(e,t)}_apply(e){const t=(function(o,l,c){if(o.startAt!==null)throw new ge(ee.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ge(ee.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Nl(l,c)})(e._query,this._field,this._direction);return new vs(e.firestore,e.converter,(function(o,l){const c=o.explicitOrderBy.concat([l]);return new _a(o.path,o.collectionGroup,c,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function Qc(n,e="asc"){const t=e,i=wd("orderBy",n);return Xp._create(i,t)}function o_(n,e,t){if(typeof(t=et(t))=="string"){if(t==="")throw new ge(ee.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rE(e)&&t.indexOf("/")!==-1)throw new ge(ee.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(st.fromString(t));if(!Ce.isDocumentKey(i))throw new ge(ee.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Tv(n,new Ce(i))}if(t instanceof Tt)return Tv(n,t._key);throw new ge(ee.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${id(t)}.`)}function a_(n,e){if(!Array.isArray(n)||n.length===0)throw new ge(ee.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function cT(n,e){const t=(function(o,l){for(const c of o)for(const f of c.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ge(ee.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ge(ee.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class lP{convertValue(e,t="none"){switch(cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Et(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw be(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return gs(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[$c].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((c=>Et(c.doubleValue)));return new Ur(l)}convertGeoPoint(e){return new jr(Et(e.latitude),Et(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=ad(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(kl(e));default:return null}}convertTimestamp(e){const t=ls(e);return new nt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=st.fromString(e);Je(CE(i),9688,{name:e});const o=new Pl(i.get(1),i.get(3)),l=new Ce(i.popFirst(5));return o.isEqual(t)||mi(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function Yp(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class ml{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qs extends aT{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Nc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(wd("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ge(ee.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Qs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Qs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qs._jsonSchema={type:Pt("string",Qs._jsonSchemaVersion),bundleSource:Pt("string","DocumentSnapshot"),bundleName:Pt("string"),bundle:Pt("string")};class Nc extends Qs{data(e={}){return super.data(e)}}class Xs{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new ml(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Nc(this._firestore,this._userDataWriter,i.key,i,new ml(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ge(ee.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map((f=>{const p=new Nc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new ml(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const p=new Nc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new ml(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,E=-1;return f.type!==0&&(v=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),E=c.indexOf(f.doc.key)),{type:uP(f.type),doc:p,oldIndex:v,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ge(ee.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Xs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=yp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function uP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return be(61501,{type:n})}}Xs._jsonSchemaVersion="firestore/querySnapshot/1.0",Xs._jsonSchema={type:Pt("string",Xs._jsonSchemaVersion),bundleSource:Pt("string","QuerySnapshot"),bundleName:Pt("string"),bundle:Pt("string")};class Jp extends lP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}function Xc(n){n=On(n,vs);const e=On(n.firestore,yi),t=vd(e),i=new Jp(e);return lT(n._query),Yk(t,n._query).then((o=>new Xs(e,i,n,o)))}function Ys(n,e,t){n=On(n,Tt);const i=On(n.firestore,yi),o=Yp(n.converter,e,t);return Yl(i,[$p(Ql(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,un.none())])}function Ut(n,e,t,...i){n=On(n,Tt);const o=On(n.firestore,yi),l=Ql(o);let c;return c=typeof(e=et(e))=="string"||e instanceof Gl?rT(l,"updateDoc",n._key,e,t,i):nT(l,"updateDoc",n._key,e),Yl(o,[c.toMutation(n._key,un.exists(!0))])}function Vl(n){return Yl(On(n.firestore,yi),[new hd(n._key,un.none())])}function ro(n,e){const t=On(n.firestore,yi),i=Xe(n),o=Yp(n.converter,e);return Yl(t,[$p(Ql(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,un.exists(!1))]).then((()=>i))}function Kn(n,...e){var t,i,o;n=et(n);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||s_(e[c])||(l=e[c++]);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(s_(e[c])){const A=e[c];e[c]=(t=A.next)===null||t===void 0?void 0:t.bind(A),e[c+1]=(i=A.error)===null||i===void 0?void 0:i.bind(A),e[c+2]=(o=A.complete)===null||o===void 0?void 0:o.bind(A)}let p,v,E;if(n instanceof Tt)v=On(n.firestore,yi),E=Ip(n._key.path),p={next:A=>{e[c]&&e[c](cP(v,n,A))},error:e[c+1],complete:e[c+2]};else{const A=On(n,vs);v=On(A.firestore,yi),E=A._query;const C=new Jp(v);p={next:N=>{e[c]&&e[c](new Xs(v,C,A,N))},error:e[c+1],complete:e[c+2]},lT(n._query)}return(function(C,N,K,Q){const B=new XE(Q),ae=new BE(N,B,K);return C.asyncQueue.enqueueAndForget((async()=>UE(await Xf(C),ae))),()=>{B.Ou(),C.asyncQueue.enqueueAndForget((async()=>FE(await Xf(C),ae)))}})(vd(v),E,f,p)}function Yl(n,e){return(function(i,o){const l=new rs;return i.asyncQueue.enqueueAndForget((async()=>Uk(await Xk(i),o,l))),l.promise})(vd(n),e)}function cP(n,e,t){const i=t.docs.get(e._key),o=new Jp(n);return new Qs(n,o,e._key,i,new ml(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class dP{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ql(e)}set(e,t,i){this._verifyNotCommitted();const o=mf(e,this._firestore),l=Yp(o.converter,t,i),c=$p(this._dataReader,"WriteBatch.set",o._key,l,o.converter!==null,i);return this._mutations.push(c.toMutation(o._key,un.none())),this}update(e,t,i,...o){this._verifyNotCommitted();const l=mf(e,this._firestore);let c;return c=typeof(t=et(t))=="string"||t instanceof Gl?rT(this._dataReader,"WriteBatch.update",l._key,t,i,o):nT(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(c.toMutation(l._key,un.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=mf(e,this._firestore);return this._mutations=this._mutations.concat(new hd(t._key,un.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ge(ee.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function mf(n,e){if((n=et(n)).firestore!==e)throw new ge(ee.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function hP(){return new Xl("deleteField")}function en(){return new zp("serverTimestamp")}function Hs(...n){return new Hp("arrayUnion",n)}function fP(n){return new qp("increment",n)}/**
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
 */function _c(n){return vd(n=On(n,yi)),new dP(n,(e=>Yl(n,e)))}(function(e,t=!0){(function(o){ga=o})(uo),pr(new Qn("firestore",((i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),f=new yi(new uR(i.getProvider("auth-internal")),new hR(c,i.getProvider("app-check-internal")),(function(v,E){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ge(ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pl(v.options.projectId,E)})(c,o),c);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),En(lv,uv,e),En(lv,uv,"esm2017")})();var pP="firebase",mP="11.10.0";/**
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
 */En(pP,mP,"app");/**
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
 */const dT="firebasestorage.googleapis.com",hT="storageBucket",gP=120*1e3,yP=600*1e3;/**
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
 */class vt extends yr{constructor(e,t,i=0){super(gf(e),`Firebase Storage: ${t} (${gf(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,vt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return gf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var yt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(yt||(yt={}));function gf(n){return"storage/"+n}function Zp(){const n="An unknown error occurred, please check the error payload for server response.";return new vt(yt.UNKNOWN,n)}function vP(n){return new vt(yt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function _P(n){return new vt(yt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function wP(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new vt(yt.UNAUTHENTICATED,n)}function EP(){return new vt(yt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function TP(n){return new vt(yt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function IP(){return new vt(yt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function SP(){return new vt(yt.CANCELED,"User canceled the upload/download.")}function AP(n){return new vt(yt.INVALID_URL,"Invalid URL '"+n+"'.")}function CP(n){return new vt(yt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function RP(){return new vt(yt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+hT+"' property when initializing the app?")}function kP(){return new vt(yt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function PP(){return new vt(yt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function xP(n){return new vt(yt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Jf(n){return new vt(yt.INVALID_ARGUMENT,n)}function fT(){return new vt(yt.APP_DELETED,"The Firebase app was deleted.")}function NP(n){return new vt(yt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Il(n,e){return new vt(yt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ll(n){throw new vt(yt.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Dn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Dn.makeFromUrl(e,t)}catch{return new Dn(e,"")}if(i.path==="")return i;throw CP(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const c="(/(.*))?$",f=new RegExp("^gs://"+o+c,"i"),p={bucket:1,path:3};function v(H){H.path_=decodeURIComponent(H.path)}const E="v[A-Za-z0-9_]+",A=t.replace(/[.]/g,"\\."),C="(/([^?#]*).*)?$",N=new RegExp(`^https?://${A}/${E}/b/${o}/o${C}`,"i"),K={bucket:1,path:3},Q=t===dT?"(?:storage.googleapis.com|storage.cloud.google.com)":t,B="([^?#]*)",ae=new RegExp(`^https?://${Q}/${o}/${B}`,"i"),X=[{regex:f,indices:p,postModify:l},{regex:N,indices:K,postModify:v},{regex:ae,indices:{bucket:1,path:2},postModify:v}];for(let H=0;H<X.length;H++){const me=X[H],de=me.regex.exec(e);if(de){const P=de[me.indices.bucket];let S=de[me.indices.path];S||(S=""),i=new Dn(P,S),me.postModify(i);break}}if(i==null)throw AP(e);return i}}class bP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function DP(n,e,t){let i=1,o=null,l=null,c=!1,f=0;function p(){return f===2}let v=!1;function E(...B){v||(v=!0,e.apply(null,B))}function A(B){o=setTimeout(()=>{o=null,n(N,p())},B)}function C(){l&&clearTimeout(l)}function N(B,...ae){if(v){C();return}if(B){C(),E.call(null,B,...ae);return}if(p()||c){C(),E.call(null,B,...ae);return}i<64&&(i*=2);let X;f===1?(f=2,X=0):X=(i+Math.random())*1e3,A(X)}let K=!1;function Q(B){K||(K=!0,C(),!v&&(o!==null?(B||(f=2),clearTimeout(o),A(0)):B||(f=1)))}return A(0),l=setTimeout(()=>{c=!0,Q(!0)},t),Q}function OP(n){n(!1)}/**
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
 */function VP(n){return n!==void 0}function LP(n){return typeof n=="object"&&!Array.isArray(n)}function em(n){return typeof n=="string"||n instanceof String}function l_(n){return tm()&&n instanceof Blob}function tm(){return typeof Blob<"u"}function u_(n,e,t,i){if(i<e)throw Jf(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Jf(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function nm(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function pT(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var Js;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Js||(Js={}));/**
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
 */function MP(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
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
 */class jP{constructor(e,t,i,o,l,c,f,p,v,E,A,C=!0,N=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=f,this.errorCallback_=p,this.timeout_=v,this.progressCallback_=E,this.connectionFactory_=A,this.retry=C,this.isUsingEmulator=N,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((K,Q)=>{this.resolve_=K,this.reject_=Q,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new wc(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=f=>{const p=f.loaded,v=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,v)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const f=l.getErrorCode()===Js.NO_ERROR,p=l.getStatus();if(!f||MP(p,this.additionalRetryCodes_)&&this.retry){const E=l.getErrorCode()===Js.ABORT;i(!1,new wc(!1,null,E));return}const v=this.successCodes_.indexOf(p)!==-1;i(!0,new wc(v,l))})},t=(i,o)=>{const l=this.resolve_,c=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(f,f.getResponse());VP(p)?l(p):l()}catch(p){c(p)}else if(f!==null){const p=Zp();p.serverResponse=f.getErrorText(),this.errorCallback_?c(this.errorCallback_(f,p)):c(p)}else if(o.canceled){const p=this.appDelete_?fT():SP();c(p)}else{const p=IP();c(p)}};this.canceled_?t(!1,new wc(!1,null,!0)):this.backoffId_=DP(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&OP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class wc{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function UP(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function FP(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function BP(n,e){e&&(n["X-Firebase-GMPID"]=e)}function $P(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function zP(n,e,t,i,o,l,c=!0,f=!1){const p=pT(n.urlParams),v=n.url+p,E=Object.assign({},n.headers);return BP(E,e),UP(E,t),FP(E,l),$P(E,i),new jP(v,n.method,E,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,c,f)}/**
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
 */function HP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function qP(...n){const e=HP();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(tm())return new Blob(n);throw new vt(yt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function WP(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function KP(n){if(typeof atob>"u")throw xP("base-64");return atob(n)}/**
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
 */const Dr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class yf{constructor(e,t){this.data=e,this.contentType=t||null}}function GP(n,e){switch(n){case Dr.RAW:return new yf(mT(e));case Dr.BASE64:case Dr.BASE64URL:return new yf(gT(n,e));case Dr.DATA_URL:return new yf(XP(e),YP(e))}throw Zp()}function mT(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,c=n.charCodeAt(++t);i=65536|(l&1023)<<10|c&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function QP(n){let e;try{e=decodeURIComponent(n)}catch{throw Il(Dr.DATA_URL,"Malformed data URL.")}return mT(e)}function gT(n,e){switch(n){case Dr.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw Il(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case Dr.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw Il(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=KP(e)}catch(o){throw o.message.includes("polyfill")?o:Il(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class yT{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Il(Dr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=JP(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function XP(n){const e=new yT(n);return e.base64?gT(Dr.BASE64,e.rest):QP(e.rest)}function YP(n){return new yT(n).contentType}function JP(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Zi{constructor(e,t){let i=0,o="";l_(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(l_(this.data_)){const i=this.data_,o=WP(i,e,t);return o===null?null:new Zi(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new Zi(i,!0)}}static getBlob(...e){if(tm()){const t=e.map(i=>i instanceof Zi?i.data_:i);return new Zi(qP.apply(null,t))}else{const t=e.map(c=>em(c)?GP(Dr.RAW,c).data:c.data_);let i=0;t.forEach(c=>{i+=c.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(c=>{for(let f=0;f<c.length;f++)o[l++]=c[f]}),new Zi(o,!0)}}uploadData(){return this.data_}}/**
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
 */function vT(n){let e;try{e=JSON.parse(n)}catch{return null}return LP(e)?e:null}/**
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
 */function ZP(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function ex(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function _T(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function tx(n,e){return e}class ln{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||tx}}let Ec=null;function nx(n){return!em(n)||n.length<2?n:_T(n)}function wT(){if(Ec)return Ec;const n=[];n.push(new ln("bucket")),n.push(new ln("generation")),n.push(new ln("metageneration")),n.push(new ln("name","fullPath",!0));function e(l,c){return nx(c)}const t=new ln("name");t.xform=e,n.push(t);function i(l,c){return c!==void 0?Number(c):c}const o=new ln("size");return o.xform=i,n.push(o),n.push(new ln("timeCreated")),n.push(new ln("updated")),n.push(new ln("md5Hash",null,!0)),n.push(new ln("cacheControl",null,!0)),n.push(new ln("contentDisposition",null,!0)),n.push(new ln("contentEncoding",null,!0)),n.push(new ln("contentLanguage",null,!0)),n.push(new ln("contentType",null,!0)),n.push(new ln("metadata","customMetadata",!0)),Ec=n,Ec}function rx(n,e){function t(){const i=n.bucket,o=n.fullPath,l=new Dn(i,o);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function ix(n,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const c=t[l];i[c.local]=c.xform(i,e[c.server])}return rx(i,n),i}function ET(n,e,t){const i=vT(e);return i===null?null:ix(n,i,t)}function sx(n,e,t,i){const o=vT(e);if(o===null||!em(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const c=encodeURIComponent;return l.split(",").map(v=>{const E=n.bucket,A=n.fullPath,C="/b/"+c(E)+"/o/"+c(A),N=nm(C,t,i),K=pT({alt:"media",token:v});return N+K})[0]}function ox(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class TT{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function IT(n){if(!n)throw Zp()}function ax(n,e){function t(i,o){const l=ET(n,o,e);return IT(l!==null),l}return t}function lx(n,e){function t(i,o){const l=ET(n,o,e);return IT(l!==null),sx(l,o,n.host,n._protocol)}return t}function ST(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=EP():o=wP():t.getStatus()===402?o=_P(n.bucket):t.getStatus()===403?o=TP(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function ux(n){const e=ST(n);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=vP(n.path)),l.serverResponse=o.serverResponse,l}return t}function cx(n,e,t){const i=e.fullServerUrl(),o=nm(i,n.host,n._protocol),l="GET",c=n.maxOperationRetryTime,f=new TT(o,l,lx(n,t),c);return f.errorHandler=ux(e),f}function dx(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function hx(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=dx(null,e)),i}function fx(n,e,t,i,o){const l=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function f(){let X="";for(let H=0;H<2;H++)X=X+Math.random().toString().slice(2);return X}const p=f();c["Content-Type"]="multipart/related; boundary="+p;const v=hx(e,i,o),E=ox(v,t),A="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+E+`\r
--`+p+`\r
Content-Type: `+v.contentType+`\r
\r
`,C=`\r
--`+p+"--",N=Zi.getBlob(A,i,C);if(N===null)throw kP();const K={name:v.fullPath},Q=nm(l,n.host,n._protocol),B="POST",ae=n.maxUploadRetryTime,Z=new TT(Q,B,ax(n,t),ae);return Z.urlParams=K,Z.headers=c,Z.body=N.uploadData(),Z.errorHandler=ST(e),Z}class px{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Js.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Js.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Js.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o,l){if(this.sent_)throw ll("cannot .send() more than once");if(fs(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),l!==void 0)for(const c in l)l.hasOwnProperty(c)&&this.xhr_.setRequestHeader(c,l[c].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ll("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ll("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ll("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ll("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class mx extends px{initXhr(){this.xhr_.responseType="text"}}function AT(){return new mx}/**
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
 */class io{constructor(e,t){this._service=e,t instanceof Dn?this._location=t:this._location=Dn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new io(e,t)}get root(){const e=new Dn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _T(this._location.path)}get storage(){return this._service}get parent(){const e=ZP(this._location.path);if(e===null)return null;const t=new Dn(this._location.bucket,e);return new io(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw NP(e)}}function gx(n,e,t){n._throwIfRoot("uploadBytes");const i=fx(n.storage,n._location,wT(),new Zi(e,!0),t);return n.storage.makeRequestWithTokens(i,AT).then(o=>({metadata:o,ref:n}))}function yx(n){n._throwIfRoot("getDownloadURL");const e=cx(n.storage,n._location,wT());return n.storage.makeRequestWithTokens(e,AT).then(t=>{if(t===null)throw PP();return t})}function vx(n,e){const t=ex(n._location.path,e),i=new Dn(n._location.bucket,t);return new io(n.storage,i)}/**
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
 */function _x(n){return/^[A-Za-z]+:\/\//.test(n)}function wx(n,e){return new io(n,e)}function CT(n,e){if(n instanceof rm){const t=n;if(t._bucket==null)throw RP();const i=new io(t,t._bucket);return e!=null?CT(i,e):i}else return e!==void 0?vx(n,e):n}function Ex(n,e){if(e&&_x(e)){if(n instanceof rm)return wx(n,e);throw Jf("To use ref(service, url), the first argument must be a Storage instance.")}else return CT(n,e)}function c_(n,e){const t=e==null?void 0:e[hT];return t==null?null:Dn.makeFromBucketSpec(t,n)}function Tx(n,e,t,i={}){n.host=`${e}:${t}`;const o=fs(e);o&&(rp(`https://${n.host}/b`),ip("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:l}=i;l&&(n._overrideAuthToken=typeof l=="string"?l:$_(l,n.app.options.projectId))}class rm{constructor(e,t,i,o,l,c=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=c,this._bucket=null,this._host=dT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gP,this._maxUploadRetryTime=yP,this._requests=new Set,o!=null?this._bucket=Dn.makeFromBucketSpec(o,this._host):this._bucket=c_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Dn.makeFromBucketSpec(this._url,e):this._bucket=c_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){u_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){u_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new io(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new bP(fT());{const c=zP(e,this._appId,i,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const d_="@firebase/storage",h_="0.13.14";/**
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
 */const RT="storage";function im(n,e,t){return n=et(n),gx(n,e,t)}function sm(n){return n=et(n),yx(n)}function om(n,e){return n=et(n),Ex(n,e)}function Ix(n=ed(),e){n=et(n);const i=lo(n,RT).getImmediate({identifier:e}),o=U_("storage");return o&&Sx(i,...o),i}function Sx(n,e,t,i={}){Tx(n,e,t,i)}function Ax(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new rm(t,i,o,e,uo)}function Cx(){pr(new Qn(RT,Ax,"PUBLIC").setMultipleInstances(!0)),En(d_,h_,""),En(d_,h_,"esm2017")}Cx();const kT="@firebase/installations",am="0.6.18";/**
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
 */const PT=1e4,xT=`w:${am}`,NT="FIS_v2",Rx="https://firebaseinstallations.googleapis.com/v1",kx=3600*1e3,Px="installations",xx="Installations";/**
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
 */const Nx={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},so=new ao(Px,xx,Nx);function bT(n){return n instanceof yr&&n.code.includes("request-failed")}/**
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
 */function DT({projectId:n}){return`${Rx}/projects/${n}/installations`}function OT(n){return{token:n.token,requestStatus:2,expiresIn:Dx(n.expiresIn),creationTime:Date.now()}}async function VT(n,e){const i=(await e.json()).error;return so.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function LT({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function bx(n,{refreshToken:e}){const t=LT(n);return t.append("Authorization",Ox(e)),t}async function MT(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Dx(n){return Number(n.replace("s","000"))}function Ox(n){return`${NT} ${n}`}/**
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
 */async function Vx({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=DT(n),o=LT(n),l=e.getImmediate({optional:!0});if(l){const v=await l.getHeartbeatsHeader();v&&o.append("x-firebase-client",v)}const c={fid:t,authVersion:NT,appId:n.appId,sdkVersion:xT},f={method:"POST",headers:o,body:JSON.stringify(c)},p=await MT(()=>fetch(i,f));if(p.ok){const v=await p.json();return{fid:v.fid||t,registrationStatus:2,refreshToken:v.refreshToken,authToken:OT(v.authToken)}}else throw await VT("Create Installation",p)}/**
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
 */function jT(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Lx(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Mx=/^[cdef][\w-]{21}$/,Zf="";function jx(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Ux(n);return Mx.test(t)?t:Zf}catch{return Zf}}function Ux(n){return Lx(n).substr(0,22)}/**
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
 */function Td(n){return`${n.appName}!${n.appId}`}/**
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
 */const UT=new Map;function FT(n,e){const t=Td(n);BT(t,e),Fx(t,e)}function BT(n,e){const t=UT.get(n);if(t)for(const i of t)i(e)}function Fx(n,e){const t=Bx();t&&t.postMessage({key:n,fid:e}),$x()}let Ks=null;function Bx(){return!Ks&&"BroadcastChannel"in self&&(Ks=new BroadcastChannel("[Firebase] FID Change"),Ks.onmessage=n=>{BT(n.data.key,n.data.fid)}),Ks}function $x(){UT.size===0&&Ks&&(Ks.close(),Ks=null)}/**
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
 */const zx="firebase-installations-database",Hx=1,oo="firebase-installations-store";let vf=null;function lm(){return vf||(vf=Zc(zx,Hx,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(oo)}}})),vf}async function Yc(n,e){const t=Td(n),o=(await lm()).transaction(oo,"readwrite"),l=o.objectStore(oo),c=await l.get(t);return await l.put(e,t),await o.done,(!c||c.fid!==e.fid)&&FT(n,e.fid),e}async function $T(n){const e=Td(n),i=(await lm()).transaction(oo,"readwrite");await i.objectStore(oo).delete(e),await i.done}async function Id(n,e){const t=Td(n),o=(await lm()).transaction(oo,"readwrite"),l=o.objectStore(oo),c=await l.get(t),f=e(c);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!c||c.fid!==f.fid)&&FT(n,f.fid),f}/**
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
 */async function um(n){let e;const t=await Id(n.appConfig,i=>{const o=qx(i),l=Wx(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Zf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function qx(n){const e=n||{fid:jx(),registrationStatus:0};return zT(e)}function Wx(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(so.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Kx(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Gx(n)}:{installationEntry:e}}async function Kx(n,e){try{const t=await Vx(n,e);return Yc(n.appConfig,t)}catch(t){throw bT(t)&&t.customData.serverCode===409?await $T(n.appConfig):await Yc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Gx(n){let e=await f_(n.appConfig);for(;e.registrationStatus===1;)await jT(100),e=await f_(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await um(n);return i||t}return e}function f_(n){return Id(n,e=>{if(!e)throw so.create("installation-not-found");return zT(e)})}function zT(n){return Qx(n)?{fid:n.fid,registrationStatus:0}:n}function Qx(n){return n.registrationStatus===1&&n.registrationTime+PT<Date.now()}/**
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
 */async function Xx({appConfig:n,heartbeatServiceProvider:e},t){const i=Yx(n,t),o=bx(n,t),l=e.getImmediate({optional:!0});if(l){const v=await l.getHeartbeatsHeader();v&&o.append("x-firebase-client",v)}const c={installation:{sdkVersion:xT,appId:n.appId}},f={method:"POST",headers:o,body:JSON.stringify(c)},p=await MT(()=>fetch(i,f));if(p.ok){const v=await p.json();return OT(v)}else throw await VT("Generate Auth Token",p)}function Yx(n,{fid:e}){return`${DT(n)}/${e}/authTokens:generate`}/**
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
 */async function cm(n,e=!1){let t;const i=await Id(n.appConfig,l=>{if(!HT(l))throw so.create("not-registered");const c=l.authToken;if(!e&&eN(c))return l;if(c.requestStatus===1)return t=Jx(n,e),l;{if(!navigator.onLine)throw so.create("app-offline");const f=nN(l);return t=Zx(n,f),f}});return t?await t:i.authToken}async function Jx(n,e){let t=await p_(n.appConfig);for(;t.authToken.requestStatus===1;)await jT(100),t=await p_(n.appConfig);const i=t.authToken;return i.requestStatus===0?cm(n,e):i}function p_(n){return Id(n,e=>{if(!HT(e))throw so.create("not-registered");const t=e.authToken;return rN(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Zx(n,e){try{const t=await Xx(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Yc(n.appConfig,i),t}catch(t){if(bT(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await $T(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Yc(n.appConfig,i)}throw t}}function HT(n){return n!==void 0&&n.registrationStatus===2}function eN(n){return n.requestStatus===2&&!tN(n)}function tN(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+kx}function nN(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function rN(n){return n.requestStatus===1&&n.requestTime+PT<Date.now()}/**
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
 */async function iN(n){const e=n,{installationEntry:t,registrationPromise:i}=await um(e);return i?i.catch(console.error):cm(e).catch(console.error),t.fid}/**
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
 */async function sN(n,e=!1){const t=n;return await oN(t),(await cm(t,e)).token}async function oN(n){const{registrationPromise:e}=await um(n);e&&await e}/**
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
 */function aN(n){if(!n||!n.options)throw _f("App Configuration");if(!n.name)throw _f("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw _f(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function _f(n){return so.create("missing-app-config-values",{valueName:n})}/**
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
 */const qT="installations",lN="installations-internal",uN=n=>{const e=n.getProvider("app").getImmediate(),t=aN(e),i=lo(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},cN=n=>{const e=n.getProvider("app").getImmediate(),t=lo(e,qT).getImmediate();return{getId:()=>iN(t),getToken:o=>sN(t,o)}};function dN(){pr(new Qn(qT,uN,"PUBLIC")),pr(new Qn(lN,cN,"PRIVATE"))}dN();En(kT,am);En(kT,am,"esm2017");/**
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
 */const hN="/firebase-messaging-sw.js",fN="/firebase-cloud-messaging-push-scope",WT="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",pN="https://fcmregistrations.googleapis.com/v1",KT="google.c.a.c_id",mN="google.c.a.c_l",gN="google.c.a.ts",yN="google.c.a.e",m_=1e4;var g_;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(g_||(g_={}));/**
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
 */var Ll;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Ll||(Ll={}));/**
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
 */function ai(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function vN(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(t),o=new Uint8Array(i.length);for(let l=0;l<i.length;++l)o[l]=i.charCodeAt(l);return o}/**
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
 */const wf="fcm_token_details_db",_N=5,y_="fcm_token_object_Store";async function wN(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(wf))return null;let e=null;return(await Zc(wf,_N,{upgrade:async(i,o,l,c)=>{var f;if(o<2||!i.objectStoreNames.contains(y_))return;const p=c.objectStore(y_),v=await p.index("fcmSenderId").get(n);if(await p.clear(),!!v){if(o===2){const E=v;if(!E.auth||!E.p256dh||!E.endpoint)return;e={token:E.fcmToken,createTime:(f=E.createTime)!==null&&f!==void 0?f:Date.now(),subscriptionOptions:{auth:E.auth,p256dh:E.p256dh,endpoint:E.endpoint,swScope:E.swScope,vapidKey:typeof E.vapidKey=="string"?E.vapidKey:ai(E.vapidKey)}}}else if(o===3){const E=v;e={token:E.fcmToken,createTime:E.createTime,subscriptionOptions:{auth:ai(E.auth),p256dh:ai(E.p256dh),endpoint:E.endpoint,swScope:E.swScope,vapidKey:ai(E.vapidKey)}}}else if(o===4){const E=v;e={token:E.fcmToken,createTime:E.createTime,subscriptionOptions:{auth:ai(E.auth),p256dh:ai(E.p256dh),endpoint:E.endpoint,swScope:E.swScope,vapidKey:ai(E.vapidKey)}}}}}})).close(),await of(wf),await of("fcm_vapid_details_db"),await of("undefined"),EN(e)?e:null}function EN(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const TN="firebase-messaging-database",IN=1,Ml="firebase-messaging-store";let Ef=null;function GT(){return Ef||(Ef=Zc(TN,IN,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ml)}}})),Ef}async function SN(n){const e=QT(n),i=await(await GT()).transaction(Ml).objectStore(Ml).get(e);if(i)return i;{const o=await wN(n.appConfig.senderId);if(o)return await dm(n,o),o}}async function dm(n,e){const t=QT(n),o=(await GT()).transaction(Ml,"readwrite");return await o.objectStore(Ml).put(e,t),await o.done,e}function QT({appConfig:n}){return n.appId}/**
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
 */const AN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},cn=new ao("messaging","Messaging",AN);/**
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
 */async function CN(n,e){const t=await fm(n),i=XT(e),o={method:"POST",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(hm(n.appConfig),o)).json()}catch(c){throw cn.create("token-subscribe-failed",{errorInfo:c==null?void 0:c.toString()})}if(l.error){const c=l.error.message;throw cn.create("token-subscribe-failed",{errorInfo:c})}if(!l.token)throw cn.create("token-subscribe-no-token");return l.token}async function RN(n,e){const t=await fm(n),i=XT(e.subscriptionOptions),o={method:"PATCH",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(`${hm(n.appConfig)}/${e.token}`,o)).json()}catch(c){throw cn.create("token-update-failed",{errorInfo:c==null?void 0:c.toString()})}if(l.error){const c=l.error.message;throw cn.create("token-update-failed",{errorInfo:c})}if(!l.token)throw cn.create("token-update-no-token");return l.token}async function kN(n,e){const i={method:"DELETE",headers:await fm(n)};try{const l=await(await fetch(`${hm(n.appConfig)}/${e}`,i)).json();if(l.error){const c=l.error.message;throw cn.create("token-unsubscribe-failed",{errorInfo:c})}}catch(o){throw cn.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function hm({projectId:n}){return`${pN}/projects/${n}/registrations`}async function fm({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function XT({p256dh:n,auth:e,endpoint:t,vapidKey:i}){const o={web:{endpoint:t,auth:e,p256dh:n}};return i!==WT&&(o.web.applicationPubKey=i),o}/**
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
 */const PN=10080*60*1e3;async function xN(n){const e=await bN(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:ai(e.getKey("auth")),p256dh:ai(e.getKey("p256dh"))},i=await SN(n.firebaseDependencies);if(i){if(DN(i.subscriptionOptions,t))return Date.now()>=i.createTime+PN?NN(n,{token:i.token,createTime:Date.now(),subscriptionOptions:t}):i.token;try{await kN(n.firebaseDependencies,i.token)}catch(o){console.warn(o)}return v_(n.firebaseDependencies,t)}else return v_(n.firebaseDependencies,t)}async function NN(n,e){try{const t=await RN(n.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await dm(n.firebaseDependencies,i),t}catch(t){throw t}}async function v_(n,e){const i={token:await CN(n,e),createTime:Date.now(),subscriptionOptions:e};return await dm(n,i),i.token}async function bN(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:vN(e)})}function DN(n,e){const t=e.vapidKey===n.vapidKey,i=e.endpoint===n.endpoint,o=e.auth===n.auth,l=e.p256dh===n.p256dh;return t&&i&&o&&l}/**
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
 */function __(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return ON(e,n),VN(e,n),LN(e,n),e}function ON(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const i=e.notification.body;i&&(n.notification.body=i);const o=e.notification.image;o&&(n.notification.image=o);const l=e.notification.icon;l&&(n.notification.icon=l)}function VN(n,e){e.data&&(n.data=e.data)}function LN(n,e){var t,i,o,l,c;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const f=(o=(i=e.fcmOptions)===null||i===void 0?void 0:i.link)!==null&&o!==void 0?o:(l=e.notification)===null||l===void 0?void 0:l.click_action;f&&(n.fcmOptions.link=f);const p=(c=e.fcmOptions)===null||c===void 0?void 0:c.analytics_label;p&&(n.fcmOptions.analyticsLabel=p)}/**
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
 */function MN(n){return typeof n=="object"&&!!n&&KT in n}/**
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
 */function jN(n){if(!n||!n.options)throw Tf("App Configuration Object");if(!n.name)throw Tf("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const i of e)if(!t[i])throw Tf(i);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function Tf(n){return cn.create("missing-app-config-values",{valueName:n})}/**
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
 */class UN{constructor(e,t,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=jN(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
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
 */async function FN(n){try{n.swRegistration=await navigator.serviceWorker.register(hN,{scope:fN}),n.swRegistration.update().catch(()=>{}),await BN(n.swRegistration)}catch(e){throw cn.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function BN(n){return new Promise((e,t)=>{const i=setTimeout(()=>t(new Error(`Service worker not registered after ${m_} ms`)),m_),o=n.installing||n.waiting;n.active?(clearTimeout(i),e()):o?o.onstatechange=l=>{var c;((c=l.target)===null||c===void 0?void 0:c.state)==="activated"&&(o.onstatechange=null,clearTimeout(i),e())}:(clearTimeout(i),t(new Error("No incoming service worker found.")))})}/**
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
 */async function $N(n,e){if(!e&&!n.swRegistration&&await FN(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw cn.create("invalid-sw-registration");n.swRegistration=e}}/**
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
 */async function zN(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=WT)}/**
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
 */async function YT(n,e){if(!navigator)throw cn.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw cn.create("permission-blocked");return await zN(n,e==null?void 0:e.vapidKey),await $N(n,e==null?void 0:e.serviceWorkerRegistration),xN(n)}/**
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
 */async function HN(n,e,t){const i=qN(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:t[KT],message_name:t[mN],message_time:t[gN],message_device_time:Math.floor(Date.now()/1e3)})}function qN(n){switch(n){case Ll.NOTIFICATION_CLICKED:return"notification_open";case Ll.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function WN(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===Ll.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(__(t)):n.onMessageHandler.next(__(t)));const i=t.data;MN(i)&&i[yN]==="1"&&await HN(n,t.messageType,i)}const w_="@firebase/messaging",E_="0.12.22";/**
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
 */const KN=n=>{const e=new UN(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>WN(e,t)),e},GN=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:i=>YT(e,i)}};function QN(){pr(new Qn("messaging",KN,"PUBLIC")),pr(new Qn("messaging-internal",GN,"PRIVATE")),En(w_,E_),En(w_,E_,"esm2017")}/**
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
 */async function JT(){try{await H_()}catch{return!1}return typeof window<"u"&&z_()&&bI()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function XN(n=ed()){return JT().then(e=>{if(!e)throw cn.create("unsupported-browser")},e=>{throw cn.create("indexed-db-unsupported")}),lo(et(n),"messaging").getImmediate()}async function YN(n,e){return n=et(n),YT(n,e)}QN();const ep=window.__FIREBASE_CONFIG__;(!ep||ep.apiKey.startsWith("REMPLACER"))&&console.warn("Configuration Firebase Web à compléter dans public/firebase-config.js");const Sd=K_(ep),li=sR(Sd),Ae=Zk(Sd),pm=Ix(Sd);async function JN(){return await JT()?XN(Sd):null}const ZN=window.__FIREBASE_VAPID_KEY__;function eb(){const[n,e]=J.useState("login"),[t,i]=J.useState(""),[o,l]=J.useState(""),[c,f]=J.useState(""),[p,v]=J.useState(""),[E,A]=J.useState(""),[C,N]=J.useState(!1),[K,Q]=J.useState(""),[B,ae]=J.useState(!1);function Z(P){const S=(P==null?void 0:P.code)||"";return S==="auth/invalid-credential"?"Adresse e-mail ou mot de passe incorrect.":S==="auth/email-already-in-use"?"Cette adresse e-mail possède déjà un compte.":S==="auth/weak-password"?"Le mot de passe doit contenir au moins 6 caractères.":S==="auth/invalid-email"?"L'adresse e-mail n'est pas valide.":S==="auth/network-request-failed"?"Problème de connexion Internet.":S==="auth/api-key-not-valid.-please-pass-a-valid-api-key."?"Configuration Firebase incorrecte. Recharge l'application.":S?`Erreur : ${S}`:"Une erreur est survenue."}async function X(){await qA(li,t.trim(),o)}async function H(){const P=Number(p),S=Number(E);if(!c.trim())throw new Error("CODE_INVITATION_REQUIS");if(P<1||P>31||S<1||S>12)throw new Error("DATE_ANNIVERSAIRE_INVALIDE");const k=await HA(li,t.trim(),o);try{const b=br(gt(Ae,"members"),Gs("inviteCode","==",c.trim()),Gs("claimed","==",!1)),O=await Xc(b);if(O.empty)throw await Yy(k.user),await Nf(li),new Error("CODE_INVITATION_INVALIDE");const R=O.docs[0],I=R.data().role||"membre";await Ut(R.ref,{uid:k.user.uid,claimed:!0,email:t.trim(),birthdayDay:P,birthdayMonth:S}),await Ys(Xe(Ae,"userRoles",k.user.uid),{role:I})}catch(b){if(li.currentUser)try{await Yy(li.currentUser)}catch{await Nf(li)}throw b}}async function me(P){P.preventDefault(),Q(""),ae(!0);try{n==="login"?await X():await H()}catch(S){console.error("Erreur Firebase Auth :",S),(S==null?void 0:S.message)==="CODE_INVITATION_REQUIS"?Q("Le code d'invitation est obligatoire."):(S==null?void 0:S.message)==="CODE_INVITATION_INVALIDE"?Q("Code d'invitation invalide ou déjà utilisé."):(S==null?void 0:S.message)==="DATE_ANNIVERSAIRE_INVALIDE"?Q("Jour ou mois d'anniversaire invalide."):Q(Z(S))}finally{ae(!1)}}function de(P){e(P),Q(""),l("")}return y.jsxs("main",{className:"auth-page",children:[y.jsx("div",{className:"auth-glow auth-glow-top"}),y.jsx("div",{className:"auth-glow auth-glow-bottom"}),y.jsxs("section",{className:`auth-panel ${n==="register"?"register-mode":""}`,children:[y.jsx("div",{className:"auth-logo-wrap",children:y.jsx("img",{className:"auth-logo",src:"/icons/icon-512.png",alt:"Chœur Lumina"})}),y.jsx("h1",{children:"Chœur Lumina"}),y.jsxs("p",{className:"auth-subtitle",children:["Une interface plus élégante pour chanter,",y.jsx("br",{}),"s'organiser et échanger."]}),y.jsxs("form",{className:"auth-form",onSubmit:me,children:[n==="register"&&y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"auth-field",children:y.jsx("input",{"aria-label":"Code d'invitation",placeholder:"Code d'invitation",value:c,onChange:P=>f(P.target.value),autoCapitalize:"characters",autoCorrect:"off",required:!0})}),y.jsxs("div",{className:"auth-birthday-grid",children:[y.jsx("div",{className:"auth-field",children:y.jsx("input",{"aria-label":"Jour de naissance",inputMode:"numeric",placeholder:"Jour de naissance",value:p,onChange:P=>v(P.target.value),required:!0})}),y.jsx("div",{className:"auth-field",children:y.jsx("input",{"aria-label":"Mois de naissance",inputMode:"numeric",placeholder:"Mois",value:E,onChange:P=>A(P.target.value),required:!0})})]})]}),y.jsx("div",{className:"auth-field",children:y.jsx("input",{"aria-label":"Email",placeholder:"Email",type:"email",autoComplete:"email",inputMode:"email",value:t,onChange:P=>i(P.target.value),required:!0})}),y.jsxs("div",{className:"auth-field auth-password-field",children:[y.jsx("input",{"aria-label":"Mot de passe",placeholder:"Mot de passe",type:C?"text":"password",autoComplete:n==="login"?"current-password":"new-password",value:o,onChange:P=>l(P.target.value),required:!0,minLength:6}),y.jsx("button",{className:"auth-eye",type:"button","aria-label":C?"Masquer le mot de passe":"Afficher le mot de passe",onClick:()=>N(P=>!P),children:C?y.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[y.jsx("path",{d:"M3 3l18 18"}),y.jsx("path",{d:"M10.6 10.7a2 2 0 0 0 2.7 2.7"}),y.jsx("path",{d:"M9.9 4.2A10.7 10.7 0 0 1 12 4c5.5 0 9 5 9 5s-1.1 1.6-3 3"}),y.jsx("path",{d:"M6.6 6.6C4.4 8 3 10 3 10s3.5 5 9 5c1.2 0 2.3-.2 3.3-.6"})]}):y.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[y.jsx("path",{d:"M3 12s3.5-5 9-5 9 5 9 5-3.5 5-9 5-9-5-9-5Z"}),y.jsx("circle",{cx:"12",cy:"12",r:"2.5"})]})})]}),K&&y.jsx("p",{className:"auth-error",children:K}),y.jsx("button",{className:"auth-primary-button",type:"submit",disabled:B,children:B?"Patiente...":n==="login"?"Se connecter":"Créer mon compte"})]}),n==="login"?y.jsx("button",{type:"button",className:"auth-switch-link",onClick:()=>de("register"),children:"J'ai un code d'invitation, créer mon compte"}):y.jsxs(y.Fragment,{children:[y.jsx("p",{className:"auth-help",children:"Le code d'invitation est fourni par un administrateur du Chœur Lumina."}),y.jsx("button",{type:"button",className:"auth-switch-link",onClick:()=>de("login"),children:"J'ai déjà un compte, me connecter"})]})]})]})}function tb(n){var t;const e=(t=n.date)==null?void 0:t.toDate();return e?e.toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"}):"Date à préciser"}function T_(n){var t;const e=(t=n.date)==null?void 0:t.toDate();return e?e.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}):""}function I_({member:n,nextEvent:e,songs:t,onOpen:i}){const o=new URL("choeur-lumina-groupe-hero.jpg",document.baseURI).toString(),l=new URL("icons/icon-192.png",document.baseURI).toString();return y.jsxs("section",{className:"screen home-screen home-screen-v24",children:[y.jsxs("div",{className:"welcome-row home-welcome-compact",children:[y.jsxs("div",{className:"brand-inline",children:[y.jsx("img",{src:l,alt:"Logo"}),y.jsxs("div",{children:[y.jsx("span",{children:"Chœur Lumina"}),y.jsxs("h1",{children:["Bonjour ",(n==null?void 0:n.prenom)||"à toi"]}),(n==null?void 0:n.pupitre)&&y.jsx("small",{className:"home-pupitre-subline",children:n.pupitre})]})]}),y.jsx("span",{className:"wave home-welcome-wave","aria-hidden":"true",children:"👋"})]}),y.jsxs("div",{className:"choir-photo-hero",children:[y.jsx("img",{src:o,alt:"Photo du Chœur Lumina"}),y.jsxs("div",{className:"choir-photo-overlay",children:[y.jsx("span",{children:"CHŒUR LUMINA"}),y.jsx("strong",{children:"Ensemble, une même voix."})]})]}),y.jsxs("div",{className:"shortcut-grid home-shortcuts-compact",children:[y.jsxs("button",{onClick:()=>i("songs"),children:["♫",y.jsx("span",{children:"Répertoire"})]}),y.jsxs("button",{onClick:()=>i("agenda"),children:["▣",y.jsx("span",{children:"Agenda"})]}),y.jsxs("button",{onClick:()=>i("messages"),children:["✉",y.jsx("span",{children:"Messages"})]})]}),y.jsxs("div",{className:"home-dashboard-grid",children:[y.jsxs("article",{className:"card home-event-card",children:[y.jsxs("div",{className:"home-card-heading",children:[y.jsx("h2",{children:"Prochain événement"}),e&&y.jsx("span",{className:`event-chip ${e.cancelled?"cancelled":""}`,children:e.cancelled?"Annulé":e.type})]}),e?y.jsxs("div",{className:"home-event-body",children:[y.jsx("h3",{children:e.titre}),y.jsxs("p",{children:[y.jsx("strong",{children:tb(e)}),T_(e)&&y.jsxs("span",{children:[" · ",T_(e)]})]}),e.lieu&&y.jsx("small",{children:e.lieu})]}):y.jsx("p",{children:"Aucun événement à venir."})]}),y.jsxs("article",{className:"card home-songs-card",children:[y.jsx("h2",{children:"Derniers chants ajoutés"}),y.jsxs("div",{className:"home-song-list",children:[t.slice(0,3).map(c=>y.jsxs("div",{className:"home-song-row",children:[y.jsx("span",{className:"home-song-icon",children:"♫"}),y.jsxs("div",{children:[y.jsx("strong",{children:c.titre}),c.compositeur&&y.jsx("small",{children:c.compositeur})]}),y.jsx("span",{className:c.appris?"status-ok":"status-work",children:c.appris?"Appris":"À travailler"})]},c.id)),t.length===0&&y.jsx("p",{children:"Aucun chant pour l'instant."})]})]})]})]})}function Ia({title:n}){return y.jsxs("header",{className:"lumina-header",children:[y.jsx("img",{src:"/icons/icon-192.png",alt:"Logo Chœur Lumina"}),y.jsxs("div",{children:[y.jsx("span",{children:"Chœur Lumina"}),y.jsx("strong",{children:n})]})]})}function S_(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Paris",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}const nb=[["repetition","Répétition"],["messe","Messe"],["reunion","Réunion"],["concert","Concert"],["autre","Autre"]];function rb(n){var i;const e=(i=n==null?void 0:n.date)==null?void 0:i.toDate();return e?new Date(e.getTime()-e.getTimezoneOffset()*6e4).toISOString().slice(0,16):""}function ib(){return{titre:"",type:"repetition",dateLocal:"",lieu:"",description:""}}function sb(n){return{id:n.id,titre:n.titre,type:n.type,dateLocal:rb(n),lieu:n.lieu||"",description:n.description||""}}function ob({events:n,uid:e,songs:t,canEdit:i}){const[o,l]=J.useState(null),[c,f]=J.useState(null),[p,v]=J.useState(null),[E,A]=J.useState([]),[C,N]=J.useState(null),[K,Q]=J.useState(""),[B,ae]=J.useState(""),[Z,X]=J.useState(""),H=J.useMemo(()=>new Map(t.map($=>[$.id,$])),[t]),me=J.useMemo(()=>{const $=S_();return n.filter(fe=>{var L,te;const ye=(te=(L=fe.date)==null?void 0:L.toDate)==null?void 0:te.call(L);return ye instanceof Date&&S_(ye)>=$})},[n]);async function de($,fe){if(!(!e||$.synthetic||$.type==="anniversaire"))try{await Ut(Xe(Ae,"events",$.id),{[`reponses.${e}`]:fe})}catch(ye){console.error(ye),ae("Impossible d'enregistrer la réponse.")}}async function P(){if(!(c!=null&&c.titre.trim())||!c.dateLocal)return;X("save-event");const $={titre:c.titre.trim(),type:c.type,date:nt.fromDate(new Date(c.dateLocal)),lieu:c.lieu.trim(),description:c.description.trim()};try{c.id?await Ut(Xe(Ae,"events",c.id),$):await ro(gt(Ae,"events"),{...$,reponses:{},programme:[],compteRendu:"",createdAt:en(),createdBy:e,cancelled:!1,cancelledAt:null}),ae(c.id?"Événement mis à jour.":"Événement créé."),f(null)}catch(fe){console.error(fe),ae("Impossible d'enregistrer l'événement.")}finally{X("")}}async function S($){var fe;if(window.confirm(`Annuler « ${$.titre} » ? L'événement restera visible.`)){X(`cancel-${$.id}`);try{await Ut(Xe(Ae,"events",$.id),{cancelled:!0,cancelledAt:en(),cancelledBy:e});const ye=((fe=$.date)==null?void 0:fe.toDate().toLocaleDateString("fr-FR"))||"";await ro(gt(Ae,"groupChat"),{authorUid:e,authorName:"Chœur Lumina",texte:`ÉVÉNEMENT ANNULÉ : ${$.titre}${ye?` · ${ye}`:""}`,type:"system_cancelled",mediaUrl:"",durationMs:0,timestamp:en(),editedAt:null,deleted:!1,readBy:[e],hiddenFor:[],reactions:{},replyToId:"",replyToText:"",replyToAuthor:""}),ae("Événement annulé, notification envoyée et message publié dans le groupe.")}catch(ye){console.error(ye),ae("Impossible d'annuler l'événement.")}finally{X("")}}}async function k($){if(window.confirm(`Supprimer définitivement « ${$.titre} » ?`)){X(`delete-${$.id}`);try{await Vl(Xe(Ae,"events",$.id)),ae("Événement supprimé.")}catch(fe){console.error(fe),ae("Impossible de supprimer l'événement.")}finally{X("")}}}function b($){v($),A([...$.programme||[]])}async function O(){if(p){X("programme");try{await Ut(Xe(Ae,"events",p.id),{programme:E}),v(null),ae("Programme de messe enregistré.")}catch($){console.error($),ae("Impossible d'enregistrer le programme.")}finally{X("")}}}function R($,fe){const ye=$+fe;if(ye<0||ye>=E.length)return;const L=[...E];[L[$],L[ye]]=[L[ye],L[$]],A(L)}function I($){N($),Q($.compteRendu||"")}async function he(){if(C){X("report");try{await Ut(Xe(Ae,"events",C.id),{compteRendu:K.trim()}),N(null),ae("Compte rendu enregistré.")}catch($){console.error($),ae("Impossible d'enregistrer le compte rendu.")}finally{X("")}}}return y.jsxs(y.Fragment,{children:[y.jsx(Ia,{title:"Agenda"}),y.jsxs("section",{className:"screen agenda-v2-screen",children:[y.jsxs("div",{className:"intro-card agenda-hero",children:[y.jsxs("div",{children:[y.jsx("span",{className:"section-kicker",children:"VIE DU CHŒUR"}),y.jsx("h2",{children:"Agenda Lumina"}),y.jsx("p",{children:"Répétitions, messes, réunions, concerts et anniversaires."})]}),i&&y.jsx("button",{className:"primary-action",onClick:()=>f(ib()),children:"+ Nouvel événement"})]}),B&&y.jsx("p",{className:"notice compact-notice",children:B}),y.jsx("div",{className:"compact-list timeline-list",children:me.map($=>{var q,pe;const fe=(q=$.date)==null?void 0:q.toDate(),ye=e?(pe=$.reponses)==null?void 0:pe[e]:void 0,L=o===$.id,te=($.programme||[]).map(we=>H.get(we)).filter(Boolean),Y=Object.values($.reponses||{}),V=Y.length?`${Y.filter(we=>we==="present").length} présent(s) · ${Y.filter(we=>we==="absent").length} absent(s)`:"Aucune réponse pour le moment";return y.jsxs("article",{className:`event-card event-card-v2 ${$.cancelled?"event-cancelled":""}`,children:[y.jsxs("div",{className:"date-tile date-tile-v2",children:[y.jsx("strong",{children:(fe==null?void 0:fe.getDate())??"--"}),y.jsx("span",{children:fe==null?void 0:fe.toLocaleDateString("fr-FR",{month:"short"}).replace(".","").toUpperCase()}),y.jsx("small",{children:fe==null?void 0:fe.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})})]}),y.jsxs("div",{className:"event-main event-main-v2",children:[y.jsxs("div",{className:"event-topline",children:[y.jsx("span",{className:"event-chip",children:$.type}),$.cancelled&&y.jsx("span",{className:"danger-chip",children:"ANNULÉ"})]}),y.jsx("h3",{children:$.titre}),$.lieu&&y.jsxs("small",{className:"event-location",children:["⌖ ",$.lieu]}),!$.cancelled&&!$.synthetic&&$.type!=="anniversaire"&&y.jsx("div",{className:"presence-actions",children:[["present","Présent"],["absent","Absent"],["peut-etre","Peut-être"]].map(([we,Oe])=>y.jsx("button",{className:ye===we?"selected":"",onClick:()=>void de($,we),children:Oe},we))}),y.jsx("button",{className:"details-toggle",onClick:()=>l(L?null:$.id),children:L?"Masquer les détails":"Voir les détails"}),L&&y.jsxs("div",{className:"event-details-panel",children:[$.description&&y.jsxs("div",{className:"event-detail-block",children:[y.jsx("h4",{children:"Description"}),y.jsx("p",{children:$.description})]}),!$.synthetic&&y.jsxs("div",{className:"event-detail-block",children:[y.jsx("h4",{children:"Présences"}),y.jsx("p",{children:V})]}),$.type==="messe"&&y.jsxs("div",{className:"event-detail-block",children:[y.jsxs("div",{className:"detail-title-row",children:[y.jsx("h4",{children:"Programme de messe"}),i&&y.jsx("button",{onClick:()=>b($),children:"Modifier"})]}),te.length?y.jsx("ol",{children:te.map(we=>y.jsx("li",{children:we.titre},we.id))}):y.jsx("p",{children:"Aucun chant sélectionné."})]}),$.type==="reunion"&&y.jsxs("div",{className:"event-detail-block",children:[y.jsxs("div",{className:"detail-title-row",children:[y.jsx("h4",{children:"Compte rendu"}),i&&y.jsx("button",{onClick:()=>I($),children:"Modifier"})]}),y.jsx("p",{className:"pre-line",children:$.compteRendu||"Pas encore de compte rendu."})]}),i&&!$.synthetic&&y.jsxs("div",{className:"event-admin-actions",children:[y.jsx("button",{onClick:()=>f(sb($)),children:"Modifier"}),!$.cancelled&&y.jsx("button",{className:"warning-action",disabled:Z===`cancel-${$.id}`,onClick:()=>void S($),children:"Annuler"}),y.jsx("button",{className:"danger-text",disabled:Z===`delete-${$.id}`,onClick:()=>void k($),children:"Supprimer"})]})]})]})]},$.id)})})]}),c&&y.jsx("div",{className:"modal-backdrop",onClick:()=>f(null),children:y.jsxs("div",{className:"admin-modal event-editor-modal",onClick:$=>$.stopPropagation(),children:[y.jsxs("div",{className:"modal-title-row",children:[y.jsxs("div",{children:[y.jsx("span",{className:"section-kicker",children:"AGENDA"}),y.jsx("h2",{children:c.id?"Modifier l'événement":"Nouvel événement"})]}),y.jsx("button",{onClick:()=>f(null),children:"×"})]}),y.jsxs("div",{className:"admin-dialog-form two-column-form",children:[y.jsxs("label",{children:["Titre",y.jsx("input",{value:c.titre,onChange:$=>f({...c,titre:$.target.value})})]}),y.jsxs("label",{children:["Type",y.jsx("select",{value:c.type,onChange:$=>f({...c,type:$.target.value}),children:nb.map(([$,fe])=>y.jsx("option",{value:$,children:fe},$))})]}),y.jsxs("label",{children:["Date et heure",y.jsx("input",{type:"datetime-local",value:c.dateLocal,onChange:$=>f({...c,dateLocal:$.target.value})})]}),y.jsxs("label",{children:["Lieu",y.jsx("input",{value:c.lieu,onChange:$=>f({...c,lieu:$.target.value})})]}),y.jsxs("label",{className:"full-span",children:["Description",y.jsx("textarea",{rows:5,value:c.description,onChange:$=>f({...c,description:$.target.value})})]})]}),y.jsxs("div",{className:"modal-actions",children:[y.jsx("button",{onClick:()=>f(null),children:"Annuler"}),y.jsx("button",{className:"primary",disabled:Z==="save-event"||!c.titre.trim()||!c.dateLocal,onClick:()=>void P(),children:"Enregistrer"})]})]})}),p&&y.jsx("div",{className:"modal-backdrop",onClick:()=>v(null),children:y.jsxs("div",{className:"admin-modal programme-modal",onClick:$=>$.stopPropagation(),children:[y.jsxs("div",{className:"modal-title-row",children:[y.jsxs("div",{children:[y.jsx("span",{className:"section-kicker",children:"PROGRAMME"}),y.jsx("h2",{children:p.titre})]}),y.jsx("button",{onClick:()=>v(null),children:"×"})]}),y.jsxs("div",{className:"programme-editor",children:[y.jsx("h3",{children:"Ordre des chants"}),E.length===0&&y.jsx("p",{children:"Aucun chant sélectionné."}),E.map(($,fe)=>{var ye;return y.jsxs("div",{className:"programme-row",children:[y.jsx("span",{children:fe+1}),y.jsx("strong",{children:((ye=H.get($))==null?void 0:ye.titre)||"Chant introuvable"}),y.jsx("button",{disabled:fe===0,onClick:()=>R(fe,-1),children:"↑"}),y.jsx("button",{disabled:fe===E.length-1,onClick:()=>R(fe,1),children:"↓"}),y.jsx("button",{onClick:()=>A(E.filter((L,te)=>te!==fe)),children:"×"})]},`${$}-${fe}`)}),y.jsx("h3",{children:"Ajouter un chant"}),y.jsx("div",{className:"available-song-list",children:t.filter($=>!E.includes($.id)).map($=>y.jsxs("button",{onClick:()=>A([...E,$.id]),children:["+ ",$.titre]},$.id))})]}),y.jsxs("div",{className:"modal-actions",children:[y.jsx("button",{onClick:()=>v(null),children:"Annuler"}),y.jsx("button",{className:"primary",disabled:Z==="programme",onClick:()=>void O(),children:"Enregistrer"})]})]})}),C&&y.jsx("div",{className:"modal-backdrop",onClick:()=>N(null),children:y.jsxs("div",{className:"admin-modal report-modal",onClick:$=>$.stopPropagation(),children:[y.jsxs("div",{className:"modal-title-row",children:[y.jsxs("div",{children:[y.jsx("span",{className:"section-kicker",children:"RÉUNION"}),y.jsx("h2",{children:"Compte rendu"})]}),y.jsx("button",{onClick:()=>N(null),children:"×"})]}),y.jsx("textarea",{rows:14,value:K,onChange:$=>Q($.target.value),placeholder:"Saisir le compte rendu de la réunion…"}),y.jsxs("div",{className:"modal-actions",children:[y.jsx("button",{onClick:()=>N(null),children:"Annuler"}),y.jsx("button",{className:"primary",disabled:Z==="report",onClick:()=>void he(),children:"Enregistrer"})]})]})})]})}const A_=[["soprano","Soprano"],["alto","Alto"],["tenor","Ténor"],["basse","Basse"]],ab=()=>({titre:"",compositeur:"",partitionUrl:"",partitionType:"link",youtubeUrl:"",folderId:"",appris:!1,audioUrlsByPupitre:{},audioFilesByPupitre:{}});function lb(n){return{id:n.id,titre:n.titre,compositeur:n.compositeur||"",partitionUrl:n.partitionUrl||"",partitionType:n.partitionType||"link",youtubeUrl:n.youtubeUrl||"",folderId:n.folderId||"",appris:!!n.appris,audioUrlsByPupitre:{...n.audioUrlsByPupitre||{}},audioFilesByPupitre:{...n.audioFilesByPupitre||{}}}}function C_(n){return n.replace(/[^a-zA-Z0-9._-]/g,"_")}function ub({songs:n,folders:e,canEdit:t,uid:i}){const[o,l]=J.useState(""),[c,f]=J.useState(null),[p,v]=J.useState(null),[E,A]=J.useState(null),[C,N]=J.useState(""),[K,Q]=J.useState(!1),[B,ae]=J.useState(""),[Z,X]=J.useState(""),[H,me]=J.useState(null),de=J.useRef(null),P=J.useRef(null),S=J.useRef([]),k=J.useMemo(()=>o?n.filter(L=>L.folderId===o):n,[n,o]);async function b(L,te){const Y=om(pm,te);return await im(Y,L),sm(Y)}async function O(){const L=C.trim();if(L){ae("folder");try{await ro(gt(Ae,"folders"),{nom:L}),N(""),Q(!1),X("Dossier ajouté.")}catch(te){console.error(te),X("Impossible d'ajouter le dossier.")}finally{ae("")}}}async function R(){if(!(p!=null&&p.titre.trim()))return;ae("save");const L={titre:p.titre.trim(),compositeur:p.compositeur.trim(),partitionUrl:p.partitionUrl.trim(),partitionType:p.partitionType||"link",audioUrl:"",audioIsFile:!1,youtubeUrl:p.youtubeUrl.trim(),folderId:p.folderId,appris:p.appris,audioUrlsByPupitre:p.audioUrlsByPupitre,audioFilesByPupitre:p.audioFilesByPupitre};try{p.id?await Ut(Xe(Ae,"songs",p.id),L):await ro(gt(Ae,"songs"),{...L,createdAt:en()}),v(null),X(p.id?"Chant mis à jour.":"Chant ajouté.")}catch(te){console.error(te),X("Impossible d'enregistrer le chant.")}finally{ae("")}}async function I(L){if(window.confirm(`Supprimer « ${L.titre} » ?`)){ae(`delete-${L.id}`);try{await Vl(Xe(Ae,"songs",L.id)),X("Chant supprimé.")}catch(te){console.error(te),X("Impossible de supprimer le chant.")}finally{ae("")}}}async function he(L){if(p){ae("partition");try{const te=await b(L,`songs/${p.id||i}_${Date.now()}/partition_${C_(L.name)}`),Y=L.type.includes("pdf")?"pdf":"image";v(V=>V&&{...V,partitionUrl:te,partitionType:Y}),X("Partition importée.")}catch(te){console.error(te),X("Impossible d'importer la partition. Vérifie les règles Storage.")}finally{ae("")}}}async function $(L,te,Y){if(p){ae(`audio-${L}`);try{const V=await b(te,`songs/${p.id||i}_${Date.now()}/${L}_${C_(Y)}`);v(q=>q&&{...q,audioUrlsByPupitre:{...q.audioUrlsByPupitre,[L]:V},audioFilesByPupitre:{...q.audioFilesByPupitre,[L]:!0}}),X(`Audio ${L} importé.`)}catch(V){console.error(V),X("Impossible d'importer l'audio. Vérifie les règles Storage.")}finally{ae("")}}}async function fe(L){var te;if(!((te=navigator.mediaDevices)!=null&&te.getUserMedia)||typeof MediaRecorder>"u"){X("L'enregistrement audio n'est pas pris en charge par ce navigateur.");return}try{const Y=await navigator.mediaDevices.getUserMedia({audio:!0}),V=new MediaRecorder(Y);P.current=Y,de.current=V,S.current=[],V.ondataavailable=q=>{q.data.size>0&&S.current.push(q.data)},V.onstop=()=>{var pe;const q=new Blob(S.current,{type:V.mimeType||"audio/webm"});(pe=P.current)==null||pe.getTracks().forEach(we=>we.stop()),P.current=null,de.current=null,me(null),$(L,q,`enregistrement_${Date.now()}.webm`)},V.start(),me(L),X("Enregistrement en cours…")}catch(Y){console.error(Y),X("Accès au microphone refusé ou indisponible.")}}function ye(){var L;((L=de.current)==null?void 0:L.state)==="recording"&&de.current.stop()}return y.jsxs(y.Fragment,{children:[y.jsx(Ia,{title:"Bibliothèque"}),y.jsxs("section",{className:"screen songs-v2-screen",children:[y.jsxs("div",{className:"intro-card library-hero",children:[y.jsxs("div",{children:[y.jsx("span",{className:"section-kicker",children:"RÉPERTOIRE DU CHŒUR"}),y.jsx("h2",{children:"Bibliothèque musicale"}),y.jsx("p",{children:"Partitions, vidéos et jusqu'à 4 audios par chant, un pour chaque pupitre."})]}),t&&y.jsx("button",{className:"primary-action",onClick:()=>v(ab()),children:"+ Ajouter un chant"})]}),y.jsxs("div",{className:"folder-toolbar",children:[y.jsx("button",{className:o?"":"selected",onClick:()=>l(""),children:"Tous"}),e.map(L=>y.jsx("button",{className:o===L.id?"selected":"",onClick:()=>l(L.id),children:L.nom},L.id)),t&&y.jsx("button",{className:"folder-add",onClick:()=>Q(L=>!L),children:"+ Dossier"})]}),K&&t&&y.jsxs("div",{className:"inline-admin-form",children:[y.jsx("input",{value:C,onChange:L=>N(L.target.value),placeholder:"Nom du dossier"}),y.jsx("button",{disabled:B==="folder"||!C.trim(),onClick:O,children:"Créer"})]}),Z&&y.jsx("p",{className:"notice compact-notice",children:Z}),y.jsxs("div",{className:"compact-list song-list-v2",children:[k.length===0&&y.jsx("div",{className:"empty-panel",children:"Aucun chant dans ce dossier."}),k.map(L=>{const te=Object.values(L.audioUrlsByPupitre||{}).filter(Boolean).length,Y=c===L.id;return y.jsxs("article",{className:"song-card song-card-v2",children:[y.jsxs("button",{className:"song-summary song-summary-button",onClick:()=>f(Y?null:L.id),children:[y.jsx("div",{className:"song-icon-tile",children:"♫"}),y.jsxs("div",{className:"song-summary-copy",children:[y.jsx("h3",{children:L.titre}),y.jsx("small",{children:L.compositeur||"Compositeur non renseigné"}),y.jsxs("p",{children:[L.partitionUrl?"Partition disponible":"Sans partition"," · ",te,"/4 audio",te>1?"s":""]})]}),y.jsx("span",{className:L.appris?"status-ok":"status-work",children:L.appris?"Appris":"À travailler"}),y.jsx("span",{className:"chevron",children:Y?"⌃":"⌄"})]}),Y&&y.jsxs("div",{className:"song-details song-details-v2",children:[y.jsxs("div",{className:"resource-row resource-row-v2",children:[L.partitionUrl&&y.jsx("button",{onClick:()=>A({url:L.partitionUrl,type:L.partitionType||"link",title:L.titre}),children:"Voir la partition"}),L.youtubeUrl&&y.jsx("a",{href:L.youtubeUrl,target:"_blank",rel:"noreferrer",children:"Voir la vidéo"}),t&&y.jsx("button",{onClick:()=>v(lb(L)),children:"Modifier"}),t&&y.jsx("button",{className:"danger-text",disabled:B===`delete-${L.id}`,onClick:()=>void I(L),children:"Supprimer"})]}),y.jsx("div",{className:"voice-audio-grid",children:A_.map(([V,q])=>{var we;const pe=(we=L.audioUrlsByPupitre)==null?void 0:we[V];return y.jsxs("div",{className:`voice-audio-card ${pe?"has-audio":""}`,children:[y.jsxs("div",{children:[y.jsx("strong",{children:q}),y.jsx("small",{children:pe?"Audio disponible":"Pas encore d'audio"})]}),pe&&y.jsx("audio",{controls:!0,preload:"metadata",src:pe})]},V)})})]})]},L.id)})]})]}),E&&y.jsx("div",{className:"modal-backdrop",onClick:()=>A(null),children:y.jsxs("div",{className:"viewer-modal",onClick:L=>L.stopPropagation(),children:[y.jsxs("div",{className:"viewer-header",children:[y.jsx("h2",{children:E.title}),y.jsx("button",{onClick:()=>A(null),children:"×"})]}),E.type==="image"?y.jsx("img",{src:E.url,alt:E.title}):y.jsx("iframe",{src:E.url,title:E.title}),y.jsx("a",{className:"secondary-button viewer-open-link",href:E.url,target:"_blank",rel:"noreferrer",children:"Ouvrir dans un nouvel onglet"})]})}),p&&y.jsx("div",{className:"modal-backdrop",onClick:()=>v(null),children:y.jsxs("div",{className:"admin-modal song-editor-modal",onClick:L=>L.stopPropagation(),children:[y.jsxs("div",{className:"modal-title-row",children:[y.jsxs("div",{children:[y.jsx("span",{className:"section-kicker",children:"BIBLIOTHÈQUE"}),y.jsx("h2",{children:p.id?"Modifier le chant":"Nouveau chant"})]}),y.jsx("button",{onClick:()=>v(null),children:"×"})]}),y.jsxs("div",{className:"song-editor-grid",children:[y.jsxs("label",{children:["Titre",y.jsx("input",{value:p.titre,onChange:L=>v({...p,titre:L.target.value})})]}),y.jsxs("label",{children:["Compositeur",y.jsx("input",{value:p.compositeur,onChange:L=>v({...p,compositeur:L.target.value})})]}),y.jsxs("label",{children:["Dossier",y.jsxs("select",{value:p.folderId,onChange:L=>v({...p,folderId:L.target.value}),children:[y.jsx("option",{value:"",children:"Sans dossier"}),e.map(L=>y.jsx("option",{value:L.id,children:L.nom},L.id))]})]}),y.jsxs("label",{className:"toggle-line",children:[y.jsx("input",{type:"checkbox",checked:p.appris,onChange:L=>v({...p,appris:L.target.checked})})," Chant appris"]}),y.jsxs("label",{className:"full-span",children:["Vidéo YouTube",y.jsx("input",{value:p.youtubeUrl,onChange:L=>v({...p,youtubeUrl:L.target.value}),placeholder:"https://…"})]}),y.jsxs("div",{className:"editor-section full-span",children:[y.jsx("div",{className:"editor-section-head",children:y.jsxs("div",{children:[y.jsx("h3",{children:"Partition"}),y.jsx("p",{children:"PDF, image ou lien externe."})]})}),y.jsx("input",{value:p.partitionUrl,onChange:L=>v({...p,partitionUrl:L.target.value,partitionType:"link"}),placeholder:"Coller un lien vers la partition"}),y.jsxs("label",{className:"file-action",children:["Importer un fichier",y.jsx("input",{type:"file",accept:"application/pdf,image/*",hidden:!0,onChange:L=>{var Y;const te=(Y=L.target.files)==null?void 0:Y[0];te&&he(te),L.currentTarget.value=""}})]}),p.partitionUrl&&y.jsx("small",{className:"upload-ok",children:"Partition prête ✓"})]}),y.jsxs("div",{className:"editor-section full-span",children:[y.jsx("div",{className:"editor-section-head",children:y.jsxs("div",{children:[y.jsx("h3",{children:"Audios par pupitre"}),y.jsx("p",{children:"Ajoute un lien, importe un fichier ou enregistre directement depuis le navigateur."})]})}),y.jsx("div",{className:"voice-editor-grid",children:A_.map(([L,te])=>y.jsxs("div",{className:"voice-editor-card",children:[y.jsx("strong",{children:te}),y.jsx("input",{value:p.audioUrlsByPupitre[L]||"",onChange:Y=>v({...p,audioUrlsByPupitre:{...p.audioUrlsByPupitre,[L]:Y.target.value},audioFilesByPupitre:{...p.audioFilesByPupitre,[L]:!1}}),placeholder:"Lien audio"}),p.audioUrlsByPupitre[L]&&y.jsx("audio",{controls:!0,preload:"metadata",src:p.audioUrlsByPupitre[L]}),y.jsxs("div",{className:"voice-editor-actions",children:[y.jsxs("label",{className:"file-action",children:["Importer",y.jsx("input",{type:"file",accept:"audio/*",hidden:!0,onChange:Y=>{var q;const V=(q=Y.target.files)==null?void 0:q[0];V&&$(L,V,V.name),Y.currentTarget.value=""}})]}),H===L?y.jsx("button",{className:"record-stop",onClick:ye,children:"■ Arrêter"}):y.jsx("button",{disabled:!!H,onClick:()=>void fe(L),children:"● Enregistrer"}),p.audioUrlsByPupitre[L]&&y.jsx("button",{onClick:()=>v({...p,audioUrlsByPupitre:{...p.audioUrlsByPupitre,[L]:""},audioFilesByPupitre:{...p.audioFilesByPupitre,[L]:!1}}),children:"Retirer"})]})]},L))})]})]}),y.jsxs("div",{className:"modal-actions",children:[y.jsx("button",{onClick:()=>v(null),children:"Annuler"}),y.jsx("button",{className:"primary",disabled:B==="save"||!p.titre.trim(),onClick:()=>void R(),children:B==="save"?"Enregistrement…":"Enregistrer"})]})]})})]})}const cb=["😀","😃","😄","😁","😂","🤣","😊","😍","🥰","😘","😎","🤩","🥳","😇","🙂","😉","😌","😋","😜","🤗","🤔","😮","😢","😭","😡","🤯","🥺","👍","👎","👏","🙌","🙏","🤝","💪","❤️","💛","💙","💜","🔥","✨","🎉","🎶","🎵","🎤","🎼","⛪","📖","✅","❌","💯","🌟","🕊️","🙏🏽","👏🏽","👍🏽"],db=["❤️","👍","👏","😂","🙏","🔥"],R_=["#7c3aed","#0f766e","#c2410c","#2563eb","#be185d","#15803d","#9333ea","#b45309","#0369a1","#a21caf"];function hb(n){let e=0;for(const t of n)e=(e<<5)-e+t.charCodeAt(0)|0;return R_[Math.abs(e)%R_.length]}function fb(n){const e=(n||"").trim();return e?/^(?:[\p{Extended_Pictographic}\p{Emoji_Presentation}\uFE0F\u200D]|\s)+$/u.test(e):!1}function oi(n,e){return[n,e].sort().join("_")}function tp(n,e){return n==="voice"?"🎤 Note vocale":n==="image"?"📷 Image":n==="sticker"?`✨ ${e||"Sticker"}`:e||"Message"}function pb(n){var e;return((e=n.timestamp)==null?void 0:e.toDate().toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}))||""}function mb(n){var i;if(n!=null&&n.online)return"En ligne";const e=(i=n==null?void 0:n.lastSeen)==null?void 0:i.toDate();if(!e)return"Hors ligne";const t=new Date;return e.toDateString()===t.toDateString()?`Vu aujourd'hui à ${e.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}`:`Vu le ${e.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"})}`}function gb({uid:n,member:e,members:t}){var Ti,Ii;const[i,o]=J.useState(()=>new URLSearchParams(window.location.search).get("mode")==="private"||localStorage.getItem("lumina_message_mode")==="private"?"private":"group"),[l,c]=J.useState([]),[f,p]=J.useState([]),[v,E]=J.useState([]),[A,C]=J.useState({}),[N,K]=J.useState(null),Q=J.useRef(new URLSearchParams(window.location.search).get("targetUid")||localStorage.getItem("lumina_private_target_uid")||""),[B,ae]=J.useState(()=>localStorage.getItem("lumina_group_draft")||""),[Z,X]=J.useState(()=>{try{return JSON.parse(localStorage.getItem("lumina_direct_drafts")||"{}")}catch{return{}}}),[H,me]=J.useState(!1),[de,P]=J.useState(null),[S,k]=J.useState(null),[b,O]=J.useState(new Set),[R,I]=J.useState([]),[he,$]=J.useState(!1),[fe,ye]=J.useState(""),[L,te]=J.useState(""),[Y,V]=J.useState(!1),[q,pe]=J.useState(0),[we,Oe]=J.useState(null),Ue=J.useRef(null),Be=J.useRef(null),He=J.useRef(null),Ye=J.useRef([]),It=J.useMemo(()=>{const z=new Map(v.map(re=>{var le;return[re.id,((le=re.lastTimestamp)==null?void 0:le.toDate().getTime())||0]}));return t.filter(re=>re.uid&&re.uid!==n&&re.claimed!==!1).sort((re,le)=>(z.get(oi(n,le.uid))||0)-(z.get(oi(n,re.uid))||0)||`${re.prenom} ${re.nom}`.localeCompare(`${le.prenom} ${le.nom}`,"fr"))},[t,n,v]),Tn=i==="group"?l:f,Br=J.useMemo(()=>Tn.filter(z=>!(z.hiddenFor||[]).includes(n)),[Tn,n]),In=i==="group"?B:N&&Z[N.uid]||"";J.useEffect(()=>{const z=br(gt(Ae,"groupChat"),Qc("timestamp","asc"));return Kn(z,re=>{c(re.docs.map(le=>({id:le.id,...le.data()})))})},[]),J.useEffect(()=>{const z=br(gt(Ae,"conversations"),Gs("participants","array-contains",n));return Kn(z,re=>{E(re.docs.map(le=>({id:le.id,...le.data()})))})},[n]),J.useEffect(()=>Kn(gt(Ae,"userStatus"),z=>{const re={};z.docs.forEach(le=>{re[le.id]=le.data()}),C(re)}),[]),J.useEffect(()=>Kn(gt(Ae,"groupTyping"),z=>{const re=Date.now(),le=z.docs.map(Me=>{var St;if(Me.id===n)return null;const Re=Me.data(),xe=((St=Re.updatedAt)==null?void 0:St.toDate().getTime())||0;return Re.isTyping&&re-xe<6e3&&Re.name||null}).filter(Me=>!!Me);I(le)}),[n]),J.useEffect(()=>{if(!N){p([]),$(!1);return}const z=oi(n,N.uid),re=Kn(br(gt(Ae,"conversations",z,"messages"),Qc("timestamp","asc")),Me=>p(Me.docs.map(Re=>({id:Re.id,...Re.data()})))),le=Kn(Xe(Ae,"conversations",z,"typing",N.uid),Me=>{var St;const Re=Me.data(),xe=((St=Re==null?void 0:Re.updatedAt)==null?void 0:St.toDate().getTime())||0;$(!!(Re!=null&&Re.isTyping&&Date.now()-xe<6e3))});return()=>{re(),le()}},[N,n]),J.useEffect(()=>{localStorage.setItem("lumina_group_draft",B)},[B]),J.useEffect(()=>{localStorage.setItem("lumina_direct_drafts",JSON.stringify(Z))},[Z]),J.useEffect(()=>{const z=new URLSearchParams(window.location.search);if(z.get("notificationAction")!=="mark_read")return;const re=z.get("notificationType"),le=z.get("messageId"),Me=z.get("conversationId");if(!le)return;(async()=>{try{if(re==="group_message")await Ut(Xe(Ae,"groupChat",le),"readBy",Hs(n));else if(re==="direct_message"&&Me){const xe=_c(Ae);xe.update(Xe(Ae,"conversations",Me,"messages",le),"readBy",Hs(n),"deliveredBy",Hs(n)),xe.update(Xe(Ae,"conversations",Me),`unreadCounts.${n}`,0),await xe.commit()}}finally{["notificationAction","notificationType","messageId","conversationId"].forEach(St=>z.delete(St));const xe=`${window.location.pathname}?${z.toString()}`.replace(/\?$/,"");window.history.replaceState({},"",xe)}})()},[n]),J.useEffect(()=>{localStorage.setItem("lumina_message_mode",i)},[i]),J.useEffect(()=>{N&&localStorage.setItem("lumina_private_target_uid",N.uid)},[N]),J.useEffect(()=>{if(!Q.current)return;const z=t.find(re=>re.uid===Q.current);z&&!N&&K(z)},[t,N]),J.useEffect(()=>{const z=N==null?void 0:N.uid;if(!z)return;const re=t.find(le=>le.uid===z);re&&K(le=>!le||le.uid!==z?le:le.photoUrl!==re.photoUrl||le.prenom!==re.prenom||le.nom!==re.nom||le.pupitre!==re.pupitre?re:le)},[t,N==null?void 0:N.uid]),J.useEffect(()=>{const z=window.setTimeout(()=>{if(i==="group")Ys(Xe(Ae,"groupTyping",n),{name:(e==null?void 0:e.prenom)||"Choriste",isTyping:!!B.trim(),updatedAt:en()},{merge:!0}).catch(()=>{});else if(N){const re=oi(n,N.uid);Ys(Xe(Ae,"conversations",re,"typing",n),{isTyping:!!(Z[N.uid]||"").trim(),updatedAt:en()},{merge:!0}).catch(()=>{})}},400);return()=>window.clearTimeout(z)},[i,B,Z,N,n,e==null?void 0:e.prenom]),J.useEffect(()=>{if(i!=="group")return;const z=l.filter(le=>le.authorUid!==n&&!(le.readBy||[]).includes(n));if(!z.length)return;const re=_c(Ae);z.forEach(le=>re.update(Xe(Ae,"groupChat",le.id),"readBy",Hs(n))),re.commit().catch(()=>{})},[l,i,n]),J.useEffect(()=>{if(i!=="private"||!N||f.length===0)return;const z=oi(n,N.uid),re=f.filter(Re=>Re.authorUid!==n&&!(Re.readBy||[]).includes(n)),le=f.filter(Re=>Re.authorUid!==n&&!(Re.deliveredBy||[]).includes(n));if(!re.length&&!le.length)return;const Me=_c(Ae);new Set([...re,...le].map(Re=>Re.id)).forEach(Re=>{const xe=Xe(Ae,"conversations",z,"messages",Re);Me.update(xe,"deliveredBy",Hs(n),"readBy",Hs(n))}),Me.update(Xe(Ae,"conversations",z),`unreadCounts.${n}`,0),Me.commit().catch(()=>{})},[f,i,N,n]);function vr(z){i==="group"?ae(z):N&&X(re=>({...re,[N.uid]:z}))}function vi(z){i==="group"?ae(re=>re+z):N&&X(re=>({...re,[N.uid]:(re[N.uid]||"")+z}))}async function _i(z,re){const le=om(pm,re);return await im(le,z),sm(le)}async function _r({type:z="text",text:re="",mediaUrl:le="",durationMs:Me=0}){var St;const Re=re.trim();if(z==="text"&&!Re)return;const xe=de;ye("send");try{if(i==="group")await ro(gt(Ae,"groupChat"),{authorUid:n,authorName:`${(e==null?void 0:e.prenom)||""} ${(e==null?void 0:e.nom)||""}`.trim()||"Choriste",texte:Re,type:z,mediaUrl:le,durationMs:Me,timestamp:en(),editedAt:null,deleted:!1,readBy:[n],hiddenFor:[],reactions:{},replyToId:(xe==null?void 0:xe.id)||"",replyToText:(xe==null?void 0:xe.text)||"",replyToAuthor:(xe==null?void 0:xe.author)||""}),z==="text"&&ae("");else if(N){const Ft=oi(n,N.uid),Si=Xe(Ae,"conversations",Ft);await Ys(Si,{participants:[n,N.uid].sort(),lastMessage:tp(z,Re),lastTimestamp:en()},{merge:!0}),await Ut(Si,{[`unreadCounts.${N.uid}`]:fP(1),[`unreadCounts.${n}`]:0}),await ro(gt(Ae,"conversations",Ft,"messages"),{authorUid:n,texte:Re,type:z,mediaUrl:le,durationMs:Me,timestamp:en(),editedAt:null,deleted:!1,readBy:[n],deliveredBy:(St=A[N.uid])!=null&&St.online?[n,N.uid]:[n],hiddenFor:[],reactions:{},replyToId:(xe==null?void 0:xe.id)||"",replyToText:(xe==null?void 0:xe.text)||"",replyToAuthor:(xe==null?void 0:xe.author)||""}),z==="text"&&X(qr=>({...qr,[N.uid]:""}))}P(null),me(!1)}catch(Ft){console.error(Ft),te("Envoi impossible. Vérifie les autorisations Firebase.")}finally{ye("")}}async function po(z){ye("upload-image");try{const re=await _i(z,`chat_images/${n}/${Date.now()}_${z.name.replace(/[^a-zA-Z0-9._-]/g,"_")}`);await _r({type:"image",mediaUrl:re})}catch(re){console.error(re),te("Impossible d'envoyer l'image. Vérifie les règles Storage."),ye("")}}async function $r(){var z;if(!((z=navigator.mediaDevices)!=null&&z.getUserMedia)||typeof MediaRecorder>"u"){te("L'enregistrement audio n'est pas pris en charge par ce navigateur.");return}try{const re=await navigator.mediaDevices.getUserMedia({audio:!0}),le=new MediaRecorder(re);He.current=re,Be.current=le,Ye.current=[],le.ondataavailable=Me=>{Me.data.size&&Ye.current.push(Me.data)},le.onstop=()=>{var St;const Me=Date.now()-q,Re=new Blob(Ye.current,{type:le.mimeType||"audio/webm"}),xe=URL.createObjectURL(Re);(St=He.current)==null||St.getTracks().forEach(Ft=>Ft.stop()),Be.current=null,He.current=null,V(!1),Oe({blob:Re,url:xe,durationMs:Me})},pe(Date.now()),le.start(),V(!0)}catch(re){console.error(re),te("Microphone non disponible ou autorisation refusée.")}}function Vn(){var z;((z=Be.current)==null?void 0:z.state)==="recording"&&Be.current.stop()}async function Ln(){if(we){ye("voice");try{const z=await _i(we.blob,`voice_notes/${n}/${Date.now()}.webm`);await _r({type:"voice",mediaUrl:z,durationMs:we.durationMs}),URL.revokeObjectURL(we.url),Oe(null)}catch(z){console.error(z),te("Impossible d'envoyer la note vocale. Vérifie les règles Storage."),ye("")}}}function Xn(z){if(i==="group")return Xe(Ae,"groupChat",z);if(!N)throw new Error("Aucune conversation sélectionnée");return Xe(Ae,"conversations",oi(n,N.uid),"messages",z)}async function zr(z,re){var Re;const le=Tn.find(xe=>xe.id===z),Me=(Re=le==null?void 0:le.reactions)==null?void 0:Re[n];try{await Ut(Xn(z),{[`reactions.${n}`]:Me===re?hP():re}),k(null)}catch(xe){console.error(xe),te("Impossible d'ajouter la réaction.")}}async function Hr(z){const re=window.prompt("Modifier le message",z.texte||"");if(!(re===null||!re.trim()))try{await Ut(Xn(z.id),{texte:re.trim(),editedAt:en()}),k(null)}catch(le){console.error(le),te("Modification impossible.")}}async function wi(z){if(window.confirm("Supprimer ce message pour tout le monde ?"))try{await Ut(Xn(z.id),{texte:"",mediaUrl:"",deleted:!0,editedAt:en()}),k(null)}catch(re){console.error(re),te("Suppression impossible.")}}async function ct(z){if(z.length)try{const re=_c(Ae);z.forEach(le=>re.update(Xn(le),"hiddenFor",Hs(n))),await re.commit(),O(new Set),k(null)}catch(re){console.error(re),te("Suppression pour moi impossible.")}}async function pt(z){try{await Ut(Xn(z.id),{pinned:!z.pinned,pinnedAt:z.pinned?null:en(),pinnedBy:z.pinned?"":n})}catch(re){console.error(re),te("Impossible de modifier l’épinglage. Vérifie les règles Firestore.")}}function Mn(z){const re=z.authorUid===n?"Vous":i==="group"?z.authorName||"Choriste":(N==null?void 0:N.prenom)||"Choriste";P({id:z.id,author:re,text:tp(z.type,z.texte)}),k(null)}function Ei(z){O(re=>{const le=new Set(re);return le.has(z)?le.delete(z):le.add(z),le}),k(null)}function wr(z){K(z),P(null),O(new Set),k(null)}const Yn=l.filter(z=>z.authorUid!==n&&!(z.readBy||[]).includes(n)&&!(z.hiddenFor||[]).includes(n)).length,Er=v.reduce((z,re)=>{var le;return z+(((le=re.unreadCounts)==null?void 0:le[n])||0)},0);function _s(z){var le,Me;const re=oi(n,z);return((Me=(le=v.find(Re=>Re.id===re))==null?void 0:le.unreadCounts)==null?void 0:Me[n])||0}function ws(z){const re=oi(n,z);return v.find(le=>le.id===re)}return y.jsxs(y.Fragment,{children:[y.jsx(Ia,{title:"Messages"}),y.jsxs("section",{className:"messages-screen messages-v2-screen",children:[y.jsxs("div",{className:"message-tabs message-tabs-v2",children:[y.jsxs("button",{className:i==="group"?"active":"",onClick:()=>{o("group"),P(null),O(new Set)},children:["Groupe ",Yn>0&&y.jsx("b",{children:Yn>99?"99+":Yn})]}),y.jsxs("button",{className:i==="private"?"active":"",onClick:()=>{o("private"),P(null),O(new Set)},children:["Privé ",Er>0&&y.jsx("b",{children:Er})]})]}),L&&y.jsx("p",{className:"notice message-notice",children:L}),i==="private"?y.jsxs("div",{className:"private-messaging-layout",children:[y.jsxs("aside",{className:`conversation-sidebar ${N?"target-open":""}`,children:[y.jsxs("div",{className:"conversation-sidebar-head",children:[y.jsx("span",{className:"section-kicker",children:"CHORISTES"}),y.jsx("h2",{children:"Messages privés"})]}),y.jsx("div",{className:"conversation-search-list",children:It.map(z=>{var Me,Re,xe;const re=_s(z.uid),le=ws(z.uid);return y.jsxs("button",{className:`conversation-person ${(N==null?void 0:N.uid)===z.uid?"selected":""} ${re>0?"has-unread":""}`,onClick:()=>wr(z),children:[y.jsx("div",{className:"message-avatar",children:z.photoUrl?y.jsx("img",{src:z.photoUrl,alt:`${z.prenom} ${z.nom}`}):`${((Me=z.prenom)==null?void 0:Me[0])||""}${((Re=z.nom)==null?void 0:Re[0])||""}`}),y.jsxs("div",{children:[y.jsxs("strong",{children:[z.prenom," ",z.nom]}),y.jsx("small",{children:(le==null?void 0:le.lastMessage)||"Aucun message pour le moment"})]}),y.jsx("span",{className:`online-dot ${(xe=A[z.uid])!=null&&xe.online?"online":""}`}),re>0&&y.jsx("b",{className:"unread-count",children:re>99?"99+":re})]},z.id)})})]}),y.jsx("div",{className:`private-chat-panel ${N?"open":""}`,children:N?y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"private-chat-head",children:[y.jsx("button",{className:"mobile-back-chat",onClick:()=>K(null),children:"‹"}),y.jsx("div",{className:"message-avatar",children:N.photoUrl?y.jsx("img",{src:N.photoUrl,alt:""}):`${((Ti=N.prenom)==null?void 0:Ti[0])||""}${((Ii=N.nom)==null?void 0:Ii[0])||""}`}),y.jsxs("div",{children:[y.jsxs("strong",{children:[N.prenom," ",N.nom]}),y.jsx("small",{children:he?"écrit…":mb(A[N.uid])})]})]}),y.jsx(k_,{messages:Br,uid:n,mode:"private",otherUid:N.uid,menuId:S,selectedIds:b,setMenuId:k,onReply:Mn,onReact:zr,onEdit:Hr,onDeleteEveryone:wi,onDeleteMe:z=>ct([z.id]),onSelect:z=>Ei(z.id),onPin:pt,members:t}),he&&y.jsxs("div",{className:"typing-indicator",children:[N.prenom," écrit…"]}),y.jsx(P_,{text:In,onTextChange:vr,onSend:()=>void _r({text:In}),onSticker:()=>me(z=>!z),onImage:()=>{var z;return(z=Ue.current)==null?void 0:z.click()},recording:Y,pendingVoice:we,onStartRecording:()=>void $r(),onStopRecording:Vn,onSendVoice:()=>void Ln(),onDeleteVoice:()=>{we&&URL.revokeObjectURL(we.url),Oe(null)},replyingTo:de,onCancelReply:()=>P(null),busy:!!fe})]}):y.jsxs("div",{className:"private-empty-state",children:[y.jsx("div",{className:"private-empty-icon",children:"✉"}),y.jsx("h2",{children:"Choisis un choriste"}),y.jsx("p",{children:"Sélectionne un membre du chœur pour commencer ou reprendre une conversation privée."})]})})]}):y.jsxs("div",{className:"group-chat-shell",children:[y.jsxs("div",{className:"group-chat-head",children:[y.jsx("div",{className:"group-avatar",children:"♫"}),y.jsxs("div",{children:[y.jsx("strong",{children:"Groupe Chœur Lumina"}),y.jsx("small",{children:R.length?`${R.join(", ")} ${R.length>1?"écrivent":"écrit"}…`:`${t.filter(z=>!!z.uid).length} membre(s)`})]})]}),y.jsx(k_,{messages:Br,uid:n,mode:"group",menuId:S,selectedIds:b,setMenuId:k,onReply:Mn,onReact:zr,onEdit:Hr,onDeleteEveryone:wi,onDeleteMe:z=>ct([z.id]),onSelect:z=>Ei(z.id),onPin:pt,members:t}),R.length>0&&y.jsxs("div",{className:"typing-indicator",children:[R.join(", ")," ",R.length>1?"écrivent":"écrit","…"]}),y.jsx(P_,{text:In,onTextChange:vr,onSend:()=>void _r({text:In}),onSticker:()=>me(z=>!z),onImage:()=>{var z;return(z=Ue.current)==null?void 0:z.click()},recording:Y,pendingVoice:we,onStartRecording:()=>void $r(),onStopRecording:Vn,onSendVoice:()=>void Ln(),onDeleteVoice:()=>{we&&URL.revokeObjectURL(we.url),Oe(null)},replyingTo:de,onCancelReply:()=>P(null),busy:!!fe})]}),b.size>0&&y.jsxs("div",{className:"selection-action-bar",children:[y.jsxs("strong",{children:[b.size," sélectionné(s)"]}),y.jsx("button",{onClick:()=>void ct([...b]),children:"Supprimer pour moi"}),y.jsx("button",{onClick:()=>O(new Set),children:"Annuler"})]}),H&&y.jsxs("div",{className:"sticker-tray sticker-tray-v2","aria-label":"Sélecteur d’émoticônes",children:[y.jsxs("div",{className:"emoji-tray-header",children:[y.jsx("span",{children:"Ajoute plusieurs émoticônes"}),y.jsx("button",{type:"button",onClick:()=>me(!1),"aria-label":"Fermer",children:"×"})]}),cb.map((z,re)=>y.jsx("button",{onClick:()=>{vi(z)},children:z},`${z}-${re}`))]}),y.jsx("input",{ref:Ue,type:"file",accept:"image/*",hidden:!0,onChange:z=>{var le;const re=(le=z.target.files)==null?void 0:le[0];re&&po(re),z.currentTarget.value=""}})]})]})}function k_({messages:n,uid:e,mode:t,otherUid:i,menuId:o,selectedIds:l,setMenuId:c,onReply:f,onReact:p,onEdit:v,onDeleteEveryone:E,onDeleteMe:A,onSelect:C,onPin:N,members:K}){const Q=J.useRef(null),B=J.useRef(0),ae=J.useRef(new Set),Z=J.useRef(!0),[X,H]=J.useState(!1),[me,de]=J.useState(0),P=J.useMemo(()=>{const R=new Map;return K.forEach(I=>{const he=`${I.prenom||""} ${I.nom||""}`.trim();I.uid&&he&&R.set(I.uid,he)}),R},[K]),S=J.useMemo(()=>[...n].filter(R=>R.pinned&&!R.deleted).sort((R,I)=>{var he,$;return(((he=I.pinnedAt)==null?void 0:he.toDate().getTime())||0)-((($=R.pinnedAt)==null?void 0:$.toDate().getTime())||0)})[0]||null,[n]);function k(R="auto"){const I=Q.current;I&&(I.scrollTo({top:I.scrollHeight,behavior:R}),Z.current=!0,H(!1),de(0))}J.useEffect(()=>{B.current=0,ae.current=new Set,Z.current=!0,de(0),H(!1)},[t,i]),J.useLayoutEffect(()=>{if(!n.length){B.current=0;return}const R=B.current,I=ae.current,he=n.filter($=>!I.has($.id)&&$.authorUid!==e).length;requestAnimationFrame(()=>{R===0||Z.current?k("auto"):he>0&&(de($=>$+he),H(!0))}),B.current=n.length,ae.current=new Set(n.map($=>$.id))},[n.length,t,i]);function b(){const R=Q.current;if(!R)return;const he=R.scrollHeight-R.scrollTop-R.clientHeight<90;Z.current=he,H(!he),he&&de(0)}function O(R){const I=Q.current,he=I==null?void 0:I.querySelector(`[data-message-id="${R}"]`);he==null||he.scrollIntoView({behavior:"smooth",block:"center"})}return y.jsxs("div",{className:"message-pane-shell",children:[S&&y.jsxs("button",{className:"pinned-message-banner",onClick:()=>O(S.id),children:[y.jsx("span",{children:"📌"}),y.jsxs("div",{children:[y.jsx("strong",{children:"Message épinglé"}),y.jsx("small",{children:tp(S.type,S.texte)})]})]}),y.jsxs("div",{className:"messages-list messages-list-v2",ref:Q,onScroll:b,children:[n.length===0&&y.jsx("div",{className:"chat-empty",children:"Aucun message pour le moment."}),n.map(R=>{const I=R.authorUid===e,he=R,$=R,fe=Object.values(R.reactions||{}).reduce((q,pe)=>(q[pe]=(q[pe]||0)+1,q),{}),ye=l.has(R.id),L=t==="private"&&I&&i?($.readBy||[]).includes(i)?"Lu":($.deliveredBy||[]).includes(i)?"✓✓":"✓":"",te=P.get(R.authorUid)||he.authorName||"Choriste",Y=hb(R.authorUid||te),V=R.type!=="voice"&&R.type!=="image"&&fb(R.texte);return y.jsx("div",{className:`message-line ${I?"mine":""} ${ye?"message-selected":""}`,"data-message-id":R.id,children:y.jsxs("div",{className:`bubble bubble-v2 ${R.type==="system_cancelled"||R.type==="event_cancelled"?"alert-bubble":""}`,children:[t==="group"&&!I&&y.jsx("strong",{className:"message-author",style:{color:Y},children:te}),R.pinned&&y.jsx("span",{className:"message-pin-indicator",title:"Message épinglé",children:"📌"}),R.replyToText&&y.jsxs("div",{className:"reply-quote",children:[y.jsx("strong",{children:R.replyToAuthor||"Message"}),y.jsx("span",{children:R.replyToText})]}),R.deleted?y.jsx("p",{className:"deleted-message",children:"Message supprimé"}):R.type==="sticker"?y.jsx("span",{className:"sticker-message",children:R.texte}):R.type==="image"?y.jsx("a",{href:R.mediaUrl,target:"_blank",rel:"noreferrer",children:y.jsx("img",{className:"chat-image",src:R.mediaUrl,alt:"Image envoyée"})}):R.type==="voice"?y.jsx("audio",{className:"voice-note-player",controls:!0,preload:"metadata",src:R.mediaUrl}):y.jsx("p",{className:V?"emoji-only-message":"",children:R.texte}),Object.keys(fe).length>0&&y.jsx("div",{className:"reaction-summary",children:Object.entries(fe).map(([q,pe])=>y.jsxs("span",{children:[q,pe>1?` ${pe}`:""]},q))}),y.jsxs("div",{className:"message-meta",children:[y.jsxs("small",{children:[pb(R),R.editedAt&&!R.deleted?" · modifié":""]}),L&&y.jsx("small",{className:L==="Lu"?"read-receipt":"",children:L}),t==="group"&&I&&y.jsxs("small",{children:[Math.max(0,(R.readBy||[]).length-1)," lu"]})]}),y.jsx("button",{className:"message-menu-button",onClick:()=>c(o===R.id?null:R.id),children:"⋯"}),o===R.id&&y.jsxs("div",{className:`message-context-menu ${I?"mine-menu":""}`,children:[y.jsx("div",{className:"reaction-picker",children:db.map(q=>y.jsx("button",{onClick:()=>void p(R.id,q),children:q},q))}),!R.deleted&&y.jsx("button",{onClick:()=>f(R),children:"Répondre"}),!R.deleted&&y.jsx("button",{onClick:()=>void N(R),children:R.pinned?"Désépingler":"Épingler"}),I&&R.type==="text"&&!R.deleted&&y.jsx("button",{onClick:()=>void v(R),children:"Modifier"}),I&&!R.deleted&&y.jsx("button",{className:"danger-text",onClick:()=>void E(R),children:"Supprimer pour tous"}),y.jsx("button",{onClick:()=>void A(R),children:"Supprimer pour moi"}),y.jsx("button",{onClick:()=>C(R),children:"Sélectionner"})]})]})},R.id)})]}),X&&y.jsxs("button",{className:"jump-to-latest",onClick:()=>k("smooth"),"aria-label":"Revenir aux derniers messages",children:["↓",me>0&&y.jsx("b",{children:me>99?"99+":me})]})]})}function P_({text:n,onTextChange:e,onSend:t,onSticker:i,onImage:o,recording:l,pendingVoice:c,onStartRecording:f,onStopRecording:p,onSendVoice:v,onDeleteVoice:E,replyingTo:A,onCancelReply:C,busy:N}){return y.jsxs("div",{className:"composer-shell",children:[A&&y.jsxs("div",{className:"composer-reply",children:[y.jsxs("div",{children:[y.jsx("strong",{children:A.author}),y.jsx("span",{children:A.text})]}),y.jsx("button",{onClick:C,children:"×"})]}),c&&y.jsxs("div",{className:"voice-preview",children:[y.jsx("audio",{controls:!0,src:c.url}),y.jsx("button",{onClick:E,children:"Supprimer"}),y.jsx("button",{className:"send-voice",disabled:N,onClick:v,children:"Envoyer"})]}),l&&y.jsxs("div",{className:"recording-banner",children:[y.jsx("span",{className:"recording-dot"})," Enregistrement en cours…"," ",y.jsx("button",{onClick:p,children:"■ Arrêter"})]}),y.jsxs("div",{className:"composer composer-v2",children:[y.jsx("button",{title:"Émoticônes",onClick:i,children:"☺"}),y.jsx("button",{title:"Image",onClick:o,disabled:l,children:"▧"}),y.jsx("textarea",{value:n,onChange:K=>e(K.target.value),placeholder:"Écrire un message…",rows:1,autoFocus:new URLSearchParams(window.location.search).get("focusComposer")==="1",autoCapitalize:"sentences",onKeyDown:K=>{K.key==="Enter"&&!K.shiftKey&&(K.preventDefault(),n.trim()&&t())}}),n.trim()?y.jsx("button",{className:"send-button",disabled:N,onClick:t,children:"➤"}):l?y.jsx("button",{className:"record-button active",onClick:p,children:"■"}):y.jsx("button",{className:"record-button",disabled:N||!!c,onClick:f,children:"●"})]})]})}function yb({members:n}){const e=n.reduce((t,i)=>{const o=i.pupitre||"Autres";return t[o]||(t[o]=[]),t[o].push(i),t},{});return y.jsxs(y.Fragment,{children:[y.jsx(Ia,{title:"Trombinoscope"}),y.jsx("section",{className:"screen",children:Object.entries(e).map(([t,i])=>y.jsxs("div",{className:"voice-section",children:[y.jsx("h2",{children:t}),y.jsx("div",{className:"member-grid",children:i.map(o=>{var l,c;return y.jsxs("article",{className:"member-card",children:[o.photoUrl?y.jsx("img",{src:o.photoUrl,alt:`${o.prenom} ${o.nom}`}):y.jsxs("div",{className:"avatar",children:[(l=o.prenom)==null?void 0:l[0],(c=o.nom)==null?void 0:c[0]]}),y.jsx("strong",{children:o.prenom}),y.jsx("small",{children:o.nom})]},o.id)})})]},t))})]})}async function vb(){var l;if(!("Notification"in window)||await Notification.requestPermission()!=="granted")return null;const e=await JN();if(!e)return null;const t=await navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope/"}),i=await YN(e,{vapidKey:ZN,serviceWorkerRegistration:t}),o=(l=li.currentUser)==null?void 0:l.uid;if(o&&i){const f=(await Xc(br(gt(Ae,"members"),Gs("uid","==",o)))).docs[0];f&&await Ys(Xe(Ae,"members",f.id,"notificationTokens",i.slice(-24)),{token:i,platform:"web",updatedAt:en()},{merge:!0})}return i}async function x_(){if("serviceWorker"in navigator)try{const n=await navigator.serviceWorker.getRegistrations();(await Promise.all(n.map(t=>t.getNotifications()))).flat().forEach(t=>t.close())}catch{}}function _b({member:n,onRefresh:e,onOpenAdmin:t}){var Z;const[i,o]=J.useState(String((n==null?void 0:n.birthdayDay)||"")),[l,c]=J.useState(String((n==null?void 0:n.birthdayMonth)||"")),[f,p]=J.useState(""),[v,E]=J.useState(!1),[A,C]=J.useState(null),N=J.useRef(null);async function K(){if(!n)return;const X=Number(i),H=Number(l);if(X<1||X>31||H<1||H>12){p("Jour ou mois invalide.");return}await Ut(Xe(Ae,"members",n.id),{birthdayDay:X,birthdayMonth:H}),p("Date d'anniversaire enregistrée."),await e()}async function Q(X){if(n!=null&&n.uid){E(!0);try{const H=om(pm,`profile_photos/${n.uid}`);await im(H,X,{contentType:"image/jpeg"});const me=await sm(H),de=`${me}${me.includes("?")?"&":"?"}v=${Date.now()}`;await Ut(Xe(Ae,"members",n.id),{photoUrl:de}),p("Photo de profil mise à jour."),await e()}catch(H){console.error(H),p("Impossible d'envoyer la photo. Vérifie les règles Storage.")}finally{E(!1)}}}function B(X){const H=URL.createObjectURL(X);C(H)}async function ae(){const X=await vb();p(X?"Notifications activées sur cet appareil.":"Notifications non activées.")}return y.jsxs(y.Fragment,{children:[y.jsx(Ia,{title:"Profil"}),y.jsxs("section",{className:"screen",children:[y.jsxs("article",{className:"profile-card",children:[y.jsxs("button",{className:"big-avatar profile-photo-button",type:"button",onClick:()=>{var X;return(X=N.current)==null?void 0:X.click()},"aria-label":"Modifier la photo de profil",children:[n!=null&&n.photoUrl?y.jsx("img",{src:n.photoUrl,alt:""}):(Z=n==null?void 0:n.prenom)==null?void 0:Z[0],y.jsx("span",{children:v?"…":"✎"})]}),y.jsx("input",{ref:N,type:"file",accept:"image/*",hidden:!0,onChange:X=>{var me;const H=(me=X.target.files)==null?void 0:me[0];H&&B(H),X.currentTarget.value=""}}),y.jsxs("h2",{children:[n==null?void 0:n.prenom," ",n==null?void 0:n.nom]}),y.jsx("span",{children:n==null?void 0:n.pupitre})]}),y.jsxs("article",{className:"card",children:[y.jsx("h2",{children:"Informations"}),y.jsxs("p",{children:[y.jsx("strong",{children:"Email"}),y.jsx("br",{}),n==null?void 0:n.email]}),y.jsxs("p",{children:[y.jsx("strong",{children:"Pupitre"}),y.jsx("br",{}),(n==null?void 0:n.pupitre)||"Non renseigné"]})]}),(n==null?void 0:n.role)==="admin"&&y.jsxs("article",{className:"card profile-admin-card",children:[y.jsx("div",{className:"profile-admin-icon","aria-hidden":"true",children:y.jsxs("svg",{viewBox:"0 0 24 24",children:[y.jsx("path",{d:"M12 3l7 3v5c0 4.6-2.9 8.6-7 10-4.1-1.4-7-5.4-7-10V6l7-3Z"}),y.jsx("path",{d:"M9.5 12.2l1.7 1.7 3.7-4"})]})}),y.jsxs("div",{className:"profile-admin-copy",children:[y.jsx("span",{className:"profile-admin-kicker",children:"ADMINISTRATEUR"}),y.jsx("h2",{children:"Administration"}),y.jsx("p",{children:"Gérer les membres, les invitations, les événements, les présences et les chants."})]}),y.jsxs("button",{type:"button",className:"profile-admin-button",onClick:t,children:["Accéder à l'administration",y.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:y.jsx("path",{d:"m9 18 6-6-6-6"})})]})]}),y.jsxs("article",{className:"card",children:[y.jsx("h2",{children:"Mon anniversaire"}),y.jsxs("div",{className:"birthday-fields",children:[y.jsxs("label",{children:["Jour",y.jsx("input",{inputMode:"numeric",value:i,onChange:X=>o(X.target.value)})]}),y.jsxs("label",{children:["Mois",y.jsx("input",{inputMode:"numeric",value:l,onChange:X=>c(X.target.value)})]})]}),y.jsx("button",{className:"secondary-button",onClick:K,children:"Enregistrer"})]}),y.jsxs("article",{className:"card",children:[y.jsx("h2",{children:"Notifications"}),y.jsx("p",{children:"Sur iPhone, ajoute d'abord l'application à l'écran d'accueil, puis active les notifications ici."}),y.jsx("button",{className:"secondary-button",onClick:ae,children:"Activer les notifications"})]}),f&&y.jsx("p",{className:"notice",children:f}),y.jsx("button",{className:"logout-button",onClick:()=>Nf(li),children:"Se déconnecter"})]}),A&&y.jsx(wb,{src:A,onCancel:()=>{URL.revokeObjectURL(A),C(null)},onConfirm:async X=>{URL.revokeObjectURL(A),C(null),await Q(X)}})]})}function wb({src:n,onCancel:e,onConfirm:t}){const[o,l]=J.useState({width:1,height:1}),[c,f]=J.useState(1),[p,v]=J.useState({x:0,y:0}),[E,A]=J.useState(!1),C=J.useRef(null),N=Math.max(240/o.width,240/o.height),K=o.width*N*c,Q=o.height*N*c;function B(Z,X=c){const H=o.width*N*X,me=o.height*N*X,de=Math.max(0,(H-240)/2),P=Math.max(0,(me-240)/2);return{x:Math.max(-de,Math.min(de,Z.x)),y:Math.max(-P,Math.min(P,Z.y))}}J.useEffect(()=>{v(Z=>B(Z,c))},[c,o.width,o.height]);async function ae(){const Z=new Image;Z.src=n,await Z.decode();const X=N*c,H=Math.min(240/X,Z.naturalWidth,Z.naturalHeight),me=Math.max(0,Math.min(Z.naturalWidth-H,(Z.naturalWidth-H)/2-p.x/X)),de=Math.max(0,Math.min(Z.naturalHeight-H,(Z.naturalHeight-H)/2-p.y/X)),P=document.createElement("canvas");P.width=512,P.height=512;const S=P.getContext("2d");if(!S)throw new Error("Canvas indisponible");return S.drawImage(Z,me,de,H,H,0,0,512,512),await new Promise((b,O)=>{P.toBlob(R=>R?b(R):O(new Error("Recadrage impossible")),"image/jpeg",.92)})}return y.jsx("div",{className:"crop-modal-backdrop",role:"dialog","aria-modal":"true","aria-label":"Cadrer la photo de profil",children:y.jsxs("div",{className:"crop-modal-card",children:[y.jsxs("div",{className:"crop-modal-heading",children:[y.jsxs("div",{children:[y.jsx("span",{children:"PHOTO DE PROFIL"}),y.jsx("h2",{children:"Cadrer la photo"})]}),y.jsx("button",{type:"button",onClick:e,"aria-label":"Fermer",children:"×"})]}),y.jsx("p",{children:"Déplace la photo et ajuste le zoom pour remplir correctement le cercle."}),y.jsx("div",{className:"crop-stage",style:{width:240,height:240},onPointerDown:Z=>{Z.currentTarget.setPointerCapture(Z.pointerId),C.current={x:Z.clientX,y:Z.clientY,ox:p.x,oy:p.y}},onPointerMove:Z=>{if(!C.current)return;const X={x:C.current.ox+Z.clientX-C.current.x,y:C.current.oy+Z.clientY-C.current.y};v(B(X))},onPointerUp:()=>{C.current=null},onPointerCancel:()=>{C.current=null},children:y.jsx("img",{src:n,alt:"Aperçu du cadrage",draggable:!1,onLoad:Z=>l({width:Z.currentTarget.naturalWidth,height:Z.currentTarget.naturalHeight}),style:{width:K,height:Q,left:(240-K)/2+p.x,top:(240-Q)/2+p.y}})}),y.jsxs("label",{className:"crop-zoom-control",children:[y.jsx("span",{children:"Zoom"}),y.jsx("input",{type:"range",min:"1",max:"3",step:"0.01",value:c,onChange:Z=>f(Number(Z.target.value))})]}),y.jsxs("div",{className:"crop-actions",children:[y.jsx("button",{type:"button",className:"secondary-button",onClick:e,disabled:E,children:"Annuler"}),y.jsx("button",{type:"button",className:"primary-button",disabled:E,onClick:async()=>{A(!0);try{await t(await ae())}finally{A(!1)}},children:E?"Enregistrement…":"Utiliser cette photo"})]})]})})}const N_=[["membre","Membre"],["contributeur","Contributeur"],["admin","Admin"]];function b_(){const n="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="LUM-";for(let t=0;t<6;t+=1)e+=n[Math.floor(Math.random()*n.length)];return e}function Eb({members:n,events:e,onBack:t}){const[i,o]=J.useState(!1),[l,c]=J.useState(null),[f,p]=J.useState(null),[v,E]=J.useState(null),[A,C]=J.useState(""),N=J.useMemo(()=>[...n].sort((H,me)=>`${H.nom} ${H.prenom}`.localeCompare(`${me.nom} ${me.prenom}`,"fr")),[n]);function K(){c({prenom:"",nom:"",pupitre:"",role:"membre"})}function Q(H){c({id:H.id,prenom:H.prenom,nom:H.nom,pupitre:H.pupitre||"",role:H.role||"membre",uid:H.uid,claimed:H.claimed})}async function B(){if(!(!l||!l.prenom.trim()||!l.nom.trim())){if(C(""),!l.id){const H=b_();await ro(gt(Ae,"members"),{prenom:l.prenom.trim(),nom:l.nom.trim(),pupitre:l.pupitre.trim(),role:l.role,inviteCode:H,claimed:!1,uid:"",email:"",createdAt:en()}),c(null),E({title:"Choriste ajouté !",code:H});return}await Ut(Xe(Ae,"members",l.id),{prenom:l.prenom.trim(),nom:l.nom.trim(),pupitre:l.pupitre.trim(),role:l.role}),l.uid&&await Ys(Xe(Ae,"userRoles",l.uid),{role:l.role}),c(null),C("Choriste modifié.")}}async function ae(H){const me=b_();await Ut(Xe(Ae,"members",H),{inviteCode:me,claimed:!1}),E({title:"Nouveau code généré",code:me})}async function Z(){f&&(await Vl(Xe(Ae,"members",f.id)),f.uid&&await Vl(Xe(Ae,"userRoles",f.uid)),p(null),C("Choriste supprimé."))}async function X(H){await navigator.clipboard.writeText(H),C("Code copié.")}return y.jsxs(y.Fragment,{children:[y.jsx(Ia,{title:"Administration"}),y.jsxs("section",{className:"screen android-admin-screen",children:[y.jsxs("button",{type:"button",className:"android-admin-back",onClick:t,children:[y.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:y.jsx("path",{d:"m15 18-6-6 6-6"})}),"Retour"]}),y.jsx("button",{type:"button",className:"presence-overview-button",onClick:()=>o(!0),children:"Voir les réponses aux présences"}),y.jsxs("p",{className:"member-count",children:[N.length," choriste(s) enregistré(s)"]}),A&&y.jsx("p",{className:"admin-notice",children:A}),y.jsx("div",{className:"android-member-list",children:N.length===0?y.jsx("p",{className:"admin-empty",children:"Aucun choriste pour l'instant."}):N.map(H=>{var de;const me=((de=N_.find(([P])=>P===H.role))==null?void 0:de[1])||H.role||"Membre";return y.jsxs("article",{className:"android-member-card",children:[y.jsxs("div",{className:"member-card-top",children:[y.jsxs("div",{children:[y.jsxs("h3",{children:[H.prenom," ",H.nom]}),y.jsxs("p",{children:[H.pupitre||"-"," · ",me]})]}),y.jsxs("div",{className:"member-card-actions",children:[y.jsx("button",{type:"button","aria-label":"Modifier",onClick:()=>Q(H),children:y.jsxs("svg",{viewBox:"0 0 24 24",children:[y.jsx("path",{d:"M4 20h4l11-11-4-4L4 16v4Z"}),y.jsx("path",{d:"m13.5 6.5 4 4"})]})}),y.jsx("button",{type:"button","aria-label":"Supprimer",onClick:()=>p(H),children:y.jsxs("svg",{viewBox:"0 0 24 24",children:[y.jsx("path",{d:"M4 7h16"}),y.jsx("path",{d:"M9 7V4h6v3"}),y.jsx("path",{d:"M7 7l1 13h8l1-13"})]})})]})]}),H.claimed?y.jsx("span",{className:"member-account-active",children:"✓ Compte actif"}):y.jsxs("div",{className:"pending-code-row",children:[y.jsxs("span",{children:["En attente · Code : ",H.inviteCode||"—"]}),H.inviteCode&&y.jsx("button",{type:"button","aria-label":"Copier le code",onClick:()=>X(H.inviteCode||""),children:y.jsxs("svg",{viewBox:"0 0 24 24",children:[y.jsx("rect",{x:"9",y:"9",width:"10",height:"10",rx:"2"}),y.jsx("path",{d:"M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3"})]})})]})]},H.id)})}),y.jsx("button",{type:"button",className:"admin-fab","aria-label":"Ajouter un choriste",onClick:K,children:"+"})]}),i&&y.jsx("div",{className:"modal-backdrop",onClick:()=>o(!1),children:y.jsxs("div",{className:"admin-modal presence-modal",onClick:H=>H.stopPropagation(),children:[y.jsx("h2",{children:"Réponses aux présences"}),y.jsx("div",{className:"presence-events-list",children:e.map(H=>{var me;return y.jsxs("article",{className:"presence-event-card",children:[y.jsx("h3",{children:H.titre}),y.jsx("p",{children:(me=H.date)!=null&&me.toDate?H.date.toDate().toLocaleDateString("fr-FR"):"Date à préciser"}),y.jsx("div",{className:"presence-member-lines",children:N.filter(de=>!!de.uid).map(de=>{var k;const P=(k=H.reponses)==null?void 0:k[de.uid],S=P==="present"?"Présent":P==="absent"?"Absent":P==="peut-etre"?"Peut-être":"Pas de réponse";return y.jsxs("div",{children:[y.jsxs("span",{children:[de.prenom," ",de.nom]}),y.jsx("strong",{className:`presence-label ${P||"none"}`,children:S})]},de.id)})})]},H.id)})}),y.jsx("button",{type:"button",className:"modal-close-button",onClick:()=>o(!1),children:"Fermer"})]})}),l&&y.jsx("div",{className:"modal-backdrop",onClick:()=>c(null),children:y.jsxs("div",{className:"admin-modal",onClick:H=>H.stopPropagation(),children:[y.jsx("h2",{children:l.id?"Modifier le choriste":"Nouveau choriste"}),y.jsxs("div",{className:"admin-dialog-form",children:[y.jsxs("label",{children:["Prénom",y.jsx("input",{value:l.prenom,onChange:H=>c({...l,prenom:H.target.value})})]}),y.jsxs("label",{children:["Nom",y.jsx("input",{value:l.nom,onChange:H=>c({...l,nom:H.target.value})})]}),y.jsxs("label",{children:["Pupitre (ex : Ténor)",y.jsx("input",{value:l.pupitre,onChange:H=>c({...l,pupitre:H.target.value})})]}),y.jsxs("label",{children:["Rôle",y.jsx("select",{value:l.role,onChange:H=>c({...l,role:H.target.value}),children:N_.map(([H,me])=>y.jsx("option",{value:H,children:me},H))})]}),l.id?l.claimed?null:y.jsx("button",{type:"button",className:"regenerate-code-button",onClick:()=>ae(l.id),children:"Régénérer le code d'invitation"}):y.jsx("p",{className:"dialog-helper",children:"Un code d'invitation sera généré automatiquement."})]}),y.jsxs("div",{className:"modal-actions",children:[y.jsx("button",{type:"button",onClick:()=>c(null),children:"Annuler"}),y.jsx("button",{type:"button",className:"primary",disabled:!l.prenom.trim()||!l.nom.trim(),onClick:B,children:l.id?"Enregistrer":"Créer"})]})]})}),f&&y.jsx("div",{className:"modal-backdrop",onClick:()=>p(null),children:y.jsxs("div",{className:"admin-modal",onClick:H=>H.stopPropagation(),children:[y.jsx("h2",{children:"Supprimer ce choriste ?"}),y.jsxs("p",{children:["La fiche de « ",f.prenom," ",f.nom," » sera supprimée. Si son compte était déjà actif, cela ne supprime pas son compte de connexion, seulement ses informations dans l'application."]}),y.jsxs("div",{className:"modal-actions",children:[y.jsx("button",{type:"button",onClick:()=>p(null),children:"Annuler"}),y.jsx("button",{type:"button",className:"danger",onClick:Z,children:"Supprimer"})]})]})}),v&&y.jsx("div",{className:"modal-backdrop",onClick:()=>E(null),children:y.jsxs("div",{className:"admin-modal code-reveal-modal",onClick:H=>H.stopPropagation(),children:[y.jsx("h2",{children:v.title}),y.jsx("p",{children:"Transmets ce code au choriste pour qu'il crée son compte :"}),y.jsx("code",{children:v.code}),y.jsxs("div",{className:"modal-actions",children:[y.jsx("button",{type:"button",onClick:()=>E(null),children:"Fermer"}),y.jsx("button",{type:"button",className:"primary",onClick:()=>X(v.code),children:"Copier"})]})]})})]})}const Tb=[{id:"home",label:"Accueil"},{id:"songs",label:"Chants"},{id:"agenda",label:"Agenda"},{id:"messages",label:"Msgs"},{id:"members",label:"Trombi"},{id:"profile",label:"Profil"}];function Ib({id:n}){const e={viewBox:"0 0 24 24",width:26,height:26,fill:"currentColor","aria-hidden":!0};switch(n){case"home":return y.jsx("svg",{...e,children:y.jsx("path",{d:"M12 3 2.5 11.2l1.3 1.5L5 11.7V21h5v-6h4v6h5v-9.3l1.2 1 1.3-1.5L12 3Z"})});case"songs":return y.jsx("svg",{...e,children:y.jsx("path",{d:"M4 4h2v16H4V4Zm4-2h2v20H8V2Zm4 3h8v14h-8V5Zm5 2v6.3a3 3 0 1 0 2 2.8V9h1V7h-3Z"})});case"agenda":return y.jsx("svg",{...e,children:y.jsx("path",{d:"M7 2h2v2h6V2h2v2h1a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1V2Zm11 7H6v10h12V9Zm-9 2h2v2H9v-2Zm4 0h2v2h-2v-2Zm4 0h1v2h-1v-2Zm-8 4h2v2H9v-2Zm4 0h2v2h-2v-2Z"})});case"messages":return y.jsx("svg",{...e,children:y.jsx("path",{d:"M4 3h13a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9l-5 4v-4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm2 4v2h9V7H6Zm0 4v2h7v-2H6Z"})});case"members":return y.jsx("svg",{...e,children:y.jsx("path",{d:"M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm0 16h16V5H4v14Zm2-2 3.8-4.6 2.7 3.2 1.9-2.3L18 17H6Zm2.5-6A2.5 2.5 0 1 0 8.5 6a2.5 2.5 0 0 0 0 5Z"})});case"profile":return y.jsx("svg",{...e,children:y.jsx("path",{d:"M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-5 0-9 2.5-9 5.5V22h18v-2.5C21 16.5 17 14 12 14Z"})})}}function Sb({active:n,onChange:e,messageUnread:t,agendaUnread:i}){return y.jsx("nav",{className:"bottom-nav",children:Tb.map(o=>{const l=o.id==="messages"&&t||o.id==="agenda"&&i;return y.jsxs("button",{className:n===o.id?"active":"",onClick:()=>e(o.id),children:[y.jsxs("span",{className:"nav-icon",children:[y.jsx(Ib,{id:o.id}),l&&y.jsx("i",{className:"badge-dot"})]}),y.jsx("small",{children:o.label})]},o.id)})})}function Ab(){const n=new URLSearchParams(window.location.search).get("tab");return["home","songs","agenda","messages","members","profile","admin"].includes(n)?n:"home"}function gl(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Paris",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}function ZT(n=new Date){const e=new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Paris",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(n),t=Object.fromEntries(e.filter(p=>p.type!=="literal").map(p=>[p.type,Number(p.value)])),i=new Date(Date.UTC(t.year,t.month-1,t.day,0,0,0)),o=new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Paris",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"}).formatToParts(i),l=Object.fromEntries(o.filter(p=>p.type!=="literal").map(p=>[p.type,Number(p.value)])),f=Date.UTC(l.year,l.month-1,l.day,l.hour,l.minute,l.second)-i.getTime();return new Date(i.getTime()-f)}function Cb(n){const e=n.birthdayDay||0,t=n.birthdayMonth||0;if(!e||!t)return null;const i=new Date,o=ZT(i);let l=Number(gl(i).slice(0,4)),c=new Date(l,t-1,e,9,0,0,0);return c.getTime()<o.getTime()&&(l+=1,c=new Date(l,t-1,e,9,0,0,0)),{id:`birthday_${n.id}_${l}`,titre:`Anniversaire de ${n.prenom}`,type:"anniversaire",date:{toDate:()=>c},description:`Souhaitons un joyeux anniversaire à ${n.prenom} !`,synthetic:!0}}function Rb(){const[n,e]=J.useState(null),[t,i]=J.useState(null),[o,l]=J.useState([]),[c,f]=J.useState([]),[p,v]=J.useState([]),[E,A]=J.useState([]),[C,N]=J.useState([]),[K,Q]=J.useState([]),[B,ae]=J.useState(Ab),[Z,X]=J.useState(()=>gl());async function H(I){const $=(await Xc(br(gt(Ae,"members"),Gs("uid","==",I)))).docs[0];i($?{id:$.id,...$.data()}:null)}J.useEffect(()=>GA(li,I=>{e(I),I?H(I.uid):(i(null),l([]),f([]),v([]),A([]),N([]),Q([]))}),[]),J.useEffect(()=>{const I=()=>{document.visibilityState==="visible"&&x_()};return I(),document.addEventListener("visibilitychange",I),window.addEventListener("focus",I),()=>{document.removeEventListener("visibilitychange",I),window.removeEventListener("focus",I)}},[]),J.useEffect(()=>{const I=window.setInterval(()=>{const he=gl();X($=>$===he?$:he)},6e4);return()=>window.clearInterval(I)},[]),J.useEffect(()=>{if(!n)return;const I=Xe(Ae,"userStatus",n.uid),he=ye=>Ys(I,{online:ye,lastSeen:en()},{merge:!0}).catch(()=>{});he(!0);const $=()=>void he(document.visibilityState==="visible"),fe=()=>void he(!1);return document.addEventListener("visibilitychange",$),window.addEventListener("pagehide",fe),()=>{document.removeEventListener("visibilitychange",$),window.removeEventListener("pagehide",fe),he(!1)}},[n]),J.useEffect(()=>{if(!n)return;const I=Kn(gt(Ae,"members"),te=>{const Y=te.docs.map(q=>({id:q.id,...q.data()}));l(Y);const V=Y.find(q=>q.uid===n.uid);V&&i(V)}),he=Kn(gt(Ae,"events"),te=>{f(te.docs.map(Y=>({id:Y.id,...Y.data()})))}),$=Kn(br(gt(Ae,"songs"),Qc("titre","asc")),te=>{v(te.docs.map(Y=>({id:Y.id,...Y.data()})))}),fe=Kn(gt(Ae,"folders"),te=>{A(te.docs.map(Y=>({id:Y.id,...Y.data()})).sort((Y,V)=>Y.nom.localeCompare(V.nom,"fr")))}),ye=Kn(br(gt(Ae,"groupChat"),Qc("timestamp","asc")),te=>{N(te.docs.map(Y=>({id:Y.id,...Y.data()})))}),L=Kn(br(gt(Ae,"conversations"),Gs("participants","array-contains",n.uid)),te=>Q(te.docs.map(Y=>({id:Y.id,...Y.data()}))));return()=>{I(),he(),$(),fe(),ye(),L()}},[n,Z]),J.useEffect(()=>{const I=t==null?void 0:t.role;if(!n||I!=="admin"&&I!=="contributeur")return;const he=nt.fromDate(ZT());Xc(br(gt(Ae,"events"),Gs("date","<",he))).then($=>Promise.allSettled($.docs.map(fe=>Vl(fe.ref)))).catch(()=>{})},[Z,t==null?void 0:t.role,n]);const me=J.useMemo(()=>{const I=gl();return c.filter(he=>{var fe,ye;const $=(ye=(fe=he.date)==null?void 0:fe.toDate)==null?void 0:ye.call(fe);return $ instanceof Date&&gl($)>=I})},[c,Z]),de=J.useMemo(()=>{const I=o.map(Cb).filter(he=>!!he);return[...me,...I].sort((he,$)=>{var fe,ye;return(((fe=he.date)==null?void 0:fe.toDate().getTime())||0)-(((ye=$.date)==null?void 0:ye.toDate().getTime())||0)})},[me,o]),P=de.find(I=>{var he;return(((he=I.date)==null?void 0:he.toDate().getTime())||0)>=Date.now()})||null,S=(t==null?void 0:t.role)==="admin"||(t==null?void 0:t.role)==="contributeur",k=!!(n&&(C.some(I=>I.authorUid!==n.uid&&!(I.readBy||[]).includes(n.uid))||K.some(I=>{var he;return(((he=I.unreadCounts)==null?void 0:he[n.uid])||0)>0}))),b=!!(t&&me.some(I=>{var fe,ye;const he=((fe=I.createdAt)==null?void 0:fe.toDate().getTime())||0,$=((ye=t.agendaLastSeenAt)==null?void 0:ye.toDate().getTime())||0;return he>$}));async function O(I){ae(I);const he=new URL(window.location.href);if(he.searchParams.set("tab",I),window.history.replaceState({},"",he),x_(),I==="agenda"&&t)try{await Ut(Xe(Ae,"members",t.id),{agendaLastSeenAt:en()})}catch{}}if(!n)return y.jsx(eb,{});let R;switch(B){case"songs":R=y.jsx(ub,{songs:p,folders:E,canEdit:S,uid:n.uid});break;case"agenda":R=y.jsx(ob,{events:de,uid:n.uid,songs:p,canEdit:S});break;case"messages":R=y.jsx(gb,{uid:n.uid,member:t,members:o});break;case"members":R=y.jsx(yb,{members:o});break;case"admin":R=(t==null?void 0:t.role)==="admin"?y.jsx(Eb,{members:o,events:me,onBack:()=>void O("profile")}):y.jsx(I_,{member:t,nextEvent:P,songs:p,onOpen:I=>void O(I)});break;case"profile":R=y.jsx(_b,{member:t,onRefresh:()=>H(n.uid),onOpenAdmin:()=>void O("admin")});break;default:R=y.jsx(I_,{member:t,nextEvent:P,songs:p,onOpen:I=>void O(I)})}return y.jsxs("div",{className:"app-shell",children:[y.jsx("main",{className:"content",children:R}),y.jsx(Sb,{active:B,onChange:I=>void O(I),messageUnread:k,agendaUnread:b})]})}fI.createRoot(document.getElementById("root")).render(y.jsx(oI.StrictMode,{children:y.jsx(Rb,{})}));const kb="2.6.4",Pb="/sw.js",D_="/",xb=6e4;function Nb(n){return n.scope.includes("firebase-cloud-messaging-push-scope")}async function ra(){if("serviceWorker"in navigator)try{const e=(await navigator.serviceWorker.getRegistrations()).filter(i=>!Nb(i)&&i.scope!==new URL(D_,window.location.origin).href);await Promise.all(e.map(i=>i.unregister())),await(await navigator.serviceWorker.register(Pb,{scope:D_,updateViaCache:"none"})).update()}catch(n){console.warn("Mise à jour du service worker impossible :",n)}}async function ul(){try{const n=await fetch(`/version.json?t=${Date.now()}`,{cache:"no-store"});if(!n.ok)return;const e=await n.json();e.version&&e.version!==kb&&(await ra(),window.location.reload())}catch{}}if("serviceWorker"in navigator){let n=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{n||(n=!0,window.location.reload())}),window.addEventListener("load",()=>{ra(),ul(),window.setInterval(()=>{ra(),ul()},xb)}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&(ra(),ul())}),window.addEventListener("focus",()=>{ra(),ul()}),window.addEventListener("online",()=>{ra(),ul()})}if(new URL(window.location.href).searchParams.has("lumina-sw")){const n=new URL(window.location.href);n.searchParams.delete("lumina-sw"),window.history.replaceState({},"",n.pathname+n.search+n.hash)}
