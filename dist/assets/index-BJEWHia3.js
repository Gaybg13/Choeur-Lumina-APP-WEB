(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function N_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Qh={exports:{}},ol={},Xh={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _y;function Z0(){if(_y)return Fe;_y=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),A=Symbol.iterator;function R(O){return O===null||typeof O!="object"?null:(O=A&&O[A]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,Q={};function j(O,q,fe){this.props=O,this.context=q,this.refs=Q,this.updater=fe||b}j.prototype.isReactComponent={},j.prototype.setState=function(O,q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,q,"setState")},j.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function ne(){}ne.prototype=j.prototype;function oe(O,q,fe){this.props=O,this.context=q,this.refs=Q,this.updater=fe||b}var ie=oe.prototype=new ne;ie.constructor=oe,W(ie,j.prototype),ie.isPureReactComponent=!0;var G=Array.isArray,Te=Object.prototype.hasOwnProperty,pe={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function S(O,q,fe){var _e,Oe={},Ue=null,Be=null;if(q!=null)for(_e in q.ref!==void 0&&(Be=q.ref),q.key!==void 0&&(Ue=""+q.key),q)Te.call(q,_e)&&!N.hasOwnProperty(_e)&&(Oe[_e]=q[_e]);var qe=arguments.length-2;if(qe===1)Oe.children=fe;else if(1<qe){for(var Ye=Array(qe),St=0;St<qe;St++)Ye[St]=arguments[St+2];Oe.children=Ye}if(O&&O.defaultProps)for(_e in qe=O.defaultProps,qe)Oe[_e]===void 0&&(Oe[_e]=qe[_e]);return{$$typeof:n,type:O,key:Ue,ref:Be,props:Oe,_owner:pe.current}}function k(O,q){return{$$typeof:n,type:O.type,key:q,ref:O.ref,props:O.props,_owner:O._owner}}function x(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function V(O){var q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(fe){return q[fe]})}var C=/\/+/g;function I(O,q){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):q.toString(36)}function de(O,q,fe,_e,Oe){var Ue=typeof O;(Ue==="undefined"||Ue==="boolean")&&(O=null);var Be=!1;if(O===null)Be=!0;else switch(Ue){case"string":case"number":Be=!0;break;case"object":switch(O.$$typeof){case n:case e:Be=!0}}if(Be)return Be=O,Oe=Oe(Be),O=_e===""?"."+I(Be,0):_e,G(Oe)?(fe="",O!=null&&(fe=O.replace(C,"$&/")+"/"),de(Oe,q,fe,"",function(St){return St})):Oe!=null&&(x(Oe)&&(Oe=k(Oe,fe+(!Oe.key||Be&&Be.key===Oe.key?"":(""+Oe.key).replace(C,"$&/")+"/")+O)),q.push(Oe)),1;if(Be=0,_e=_e===""?".":_e+":",G(O))for(var qe=0;qe<O.length;qe++){Ue=O[qe];var Ye=_e+I(Ue,qe);Be+=de(Ue,q,fe,Ye,Oe)}else if(Ye=R(O),typeof Ye=="function")for(O=Ye.call(O),qe=0;!(Ue=O.next()).done;)Ue=Ue.value,Ye=_e+I(Ue,qe++),Be+=de(Ue,q,fe,Ye,Oe);else if(Ue==="object")throw q=String(O),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Be}function $(O,q,fe){if(O==null)return O;var _e=[],Oe=0;return de(O,_e,"","",function(Ue){return q.call(fe,Ue,Oe++)}),_e}function he(O){if(O._status===-1){var q=O._result;q=q(),q.then(function(fe){(O._status===0||O._status===-1)&&(O._status=1,O._result=fe)},function(fe){(O._status===0||O._status===-1)&&(O._status=2,O._result=fe)}),O._status===-1&&(O._status=0,O._result=q)}if(O._status===1)return O._result.default;throw O._result}var ge={current:null},L={transition:null},J={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:L,ReactCurrentOwner:pe};function X(){throw Error("act(...) is not supported in production builds of React.")}return Fe.Children={map:$,forEach:function(O,q,fe){$(O,function(){q.apply(this,arguments)},fe)},count:function(O){var q=0;return $(O,function(){q++}),q},toArray:function(O){return $(O,function(q){return q})||[]},only:function(O){if(!x(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Fe.Component=j,Fe.Fragment=t,Fe.Profiler=o,Fe.PureComponent=oe,Fe.StrictMode=i,Fe.Suspense=p,Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,Fe.act=X,Fe.cloneElement=function(O,q,fe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var _e=W({},O.props),Oe=O.key,Ue=O.ref,Be=O._owner;if(q!=null){if(q.ref!==void 0&&(Ue=q.ref,Be=pe.current),q.key!==void 0&&(Oe=""+q.key),O.type&&O.type.defaultProps)var qe=O.type.defaultProps;for(Ye in q)Te.call(q,Ye)&&!N.hasOwnProperty(Ye)&&(_e[Ye]=q[Ye]===void 0&&qe!==void 0?qe[Ye]:q[Ye])}var Ye=arguments.length-2;if(Ye===1)_e.children=fe;else if(1<Ye){qe=Array(Ye);for(var St=0;St<Ye;St++)qe[St]=arguments[St+2];_e.children=qe}return{$$typeof:n,type:O.type,key:Oe,ref:Ue,props:_e,_owner:Be}},Fe.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},Fe.createElement=S,Fe.createFactory=function(O){var q=S.bind(null,O);return q.type=O,q},Fe.createRef=function(){return{current:null}},Fe.forwardRef=function(O){return{$$typeof:f,render:O}},Fe.isValidElement=x,Fe.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:he}},Fe.memo=function(O,q){return{$$typeof:v,type:O,compare:q===void 0?null:q}},Fe.startTransition=function(O){var q=L.transition;L.transition={};try{O()}finally{L.transition=q}},Fe.unstable_act=X,Fe.useCallback=function(O,q){return ge.current.useCallback(O,q)},Fe.useContext=function(O){return ge.current.useContext(O)},Fe.useDebugValue=function(){},Fe.useDeferredValue=function(O){return ge.current.useDeferredValue(O)},Fe.useEffect=function(O,q){return ge.current.useEffect(O,q)},Fe.useId=function(){return ge.current.useId()},Fe.useImperativeHandle=function(O,q,fe){return ge.current.useImperativeHandle(O,q,fe)},Fe.useInsertionEffect=function(O,q){return ge.current.useInsertionEffect(O,q)},Fe.useLayoutEffect=function(O,q){return ge.current.useLayoutEffect(O,q)},Fe.useMemo=function(O,q){return ge.current.useMemo(O,q)},Fe.useReducer=function(O,q,fe){return ge.current.useReducer(O,q,fe)},Fe.useRef=function(O){return ge.current.useRef(O)},Fe.useState=function(O){return ge.current.useState(O)},Fe.useSyncExternalStore=function(O,q,fe){return ge.current.useSyncExternalStore(O,q,fe)},Fe.useTransition=function(){return ge.current.useTransition()},Fe.version="18.3.1",Fe}var wy;function ep(){return wy||(wy=1,Xh.exports=Z0()),Xh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ey;function eI(){if(Ey)return ol;Ey=1;var n=ep(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,v){var E,A={},R=null,b=null;v!==void 0&&(R=""+v),p.key!==void 0&&(R=""+p.key),p.ref!==void 0&&(b=p.ref);for(E in p)i.call(p,E)&&!l.hasOwnProperty(E)&&(A[E]=p[E]);if(f&&f.defaultProps)for(E in p=f.defaultProps,p)A[E]===void 0&&(A[E]=p[E]);return{$$typeof:e,type:f,key:R,ref:b,props:A,_owner:o.current}}return ol.Fragment=t,ol.jsx=d,ol.jsxs=d,ol}var Ty;function tI(){return Ty||(Ty=1,Qh.exports=eI()),Qh.exports}var y=tI(),Z=ep();const nI=N_(Z);var cc={},Yh={exports:{}},_n={},Jh={exports:{}},Zh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iy;function rI(){return Iy||(Iy=1,(function(n){function e(L,J){var X=L.length;L.push(J);e:for(;0<X;){var O=X-1>>>1,q=L[O];if(0<o(q,J))L[O]=J,L[X]=q,X=O;else break e}}function t(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var J=L[0],X=L.pop();if(X!==J){L[0]=X;e:for(var O=0,q=L.length,fe=q>>>1;O<fe;){var _e=2*(O+1)-1,Oe=L[_e],Ue=_e+1,Be=L[Ue];if(0>o(Oe,X))Ue<q&&0>o(Be,Oe)?(L[O]=Be,L[Ue]=X,O=Ue):(L[O]=Oe,L[_e]=X,O=_e);else if(Ue<q&&0>o(Be,X))L[O]=Be,L[Ue]=X,O=Ue;else break e}}return J}function o(L,J){var X=L.sortIndex-J.sortIndex;return X!==0?X:L.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var d=Date,f=d.now();n.unstable_now=function(){return d.now()-f}}var p=[],v=[],E=1,A=null,R=3,b=!1,W=!1,Q=!1,j=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,oe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ie(L){for(var J=t(v);J!==null;){if(J.callback===null)i(v);else if(J.startTime<=L)i(v),J.sortIndex=J.expirationTime,e(p,J);else break;J=t(v)}}function G(L){if(Q=!1,ie(L),!W)if(t(p)!==null)W=!0,he(Te);else{var J=t(v);J!==null&&ge(G,J.startTime-L)}}function Te(L,J){W=!1,Q&&(Q=!1,ne(S),S=-1),b=!0;var X=R;try{for(ie(J),A=t(p);A!==null&&(!(A.expirationTime>J)||L&&!V());){var O=A.callback;if(typeof O=="function"){A.callback=null,R=A.priorityLevel;var q=O(A.expirationTime<=J);J=n.unstable_now(),typeof q=="function"?A.callback=q:A===t(p)&&i(p),ie(J)}else i(p);A=t(p)}if(A!==null)var fe=!0;else{var _e=t(v);_e!==null&&ge(G,_e.startTime-J),fe=!1}return fe}finally{A=null,R=X,b=!1}}var pe=!1,N=null,S=-1,k=5,x=-1;function V(){return!(n.unstable_now()-x<k)}function C(){if(N!==null){var L=n.unstable_now();x=L;var J=!0;try{J=N(!0,L)}finally{J?I():(pe=!1,N=null)}}else pe=!1}var I;if(typeof oe=="function")I=function(){oe(C)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,$=de.port2;de.port1.onmessage=C,I=function(){$.postMessage(null)}}else I=function(){j(C,0)};function he(L){N=L,pe||(pe=!0,I())}function ge(L,J){S=j(function(){L(n.unstable_now())},J)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_continueExecution=function(){W||b||(W=!0,he(Te))},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return R},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(L){switch(R){case 1:case 2:case 3:var J=3;break;default:J=R}var X=R;R=J;try{return L()}finally{R=X}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(L,J){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var X=R;R=L;try{return J()}finally{R=X}},n.unstable_scheduleCallback=function(L,J,X){var O=n.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?O+X:O):X=O,L){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=X+q,L={id:E++,callback:J,priorityLevel:L,startTime:X,expirationTime:q,sortIndex:-1},X>O?(L.sortIndex=X,e(v,L),t(p)===null&&L===t(v)&&(Q?(ne(S),S=-1):Q=!0,ge(G,X-O))):(L.sortIndex=q,e(p,L),W||b||(W=!0,he(Te))),L},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(L){var J=R;return function(){var X=R;R=J;try{return L.apply(this,arguments)}finally{R=X}}}})(Zh)),Zh}var Sy;function iI(){return Sy||(Sy=1,Jh.exports=rI()),Jh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay;function sI(){if(Ay)return _n;Ay=1;var n=ep(),e=iI();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){d(r,s),d(r+"Capture",s)}function d(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},A={};function R(r){return p.call(A,r)?!0:p.call(E,r)?!1:v.test(r)?A[r]=!0:(E[r]=!0,!1)}function b(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function W(r,s,a,c){if(s===null||typeof s>"u"||b(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function Q(r,s,a,c,h,g,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=w}var j={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){j[r]=new Q(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];j[s]=new Q(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){j[r]=new Q(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){j[r]=new Q(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){j[r]=new Q(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){j[r]=new Q(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){j[r]=new Q(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){j[r]=new Q(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){j[r]=new Q(r,5,!1,r.toLowerCase(),null,!1,!1)});var ne=/[\-:]([a-z])/g;function oe(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(ne,oe);j[s]=new Q(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(ne,oe);j[s]=new Q(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(ne,oe);j[s]=new Q(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){j[r]=new Q(r,1,!1,r.toLowerCase(),null,!1,!1)}),j.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){j[r]=new Q(r,1,!1,r.toLowerCase(),null,!0,!0)});function ie(r,s,a,c){var h=j.hasOwnProperty(s)?j[s]:null;(h!==null?h.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(W(s,a,h,c)&&(a=null),c||h===null?R(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):h.mustUseProperty?r[h.propertyName]=a===null?h.type===3?!1:"":a:(s=h.attributeName,c=h.attributeNamespace,a===null?r.removeAttribute(s):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var G=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Te=Symbol.for("react.element"),pe=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),V=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),L=Symbol.iterator;function J(r){return r===null||typeof r!="object"?null:(r=L&&r[L]||r["@@iterator"],typeof r=="function"?r:null)}var X=Object.assign,O;function q(r){if(O===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+r}var fe=!1;function _e(r,s){if(!r||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(H){var c=H}Reflect.construct(r,[],s)}else{try{s.call()}catch(H){c=H}r.call(s.prototype)}else{try{throw Error()}catch(H){c=H}r()}}catch(H){if(H&&c&&typeof H.stack=="string"){for(var h=H.stack.split(`
`),g=c.stack.split(`
`),w=h.length-1,P=g.length-1;1<=w&&0<=P&&h[w]!==g[P];)P--;for(;1<=w&&0<=P;w--,P--)if(h[w]!==g[P]){if(w!==1||P!==1)do if(w--,P--,0>P||h[w]!==g[P]){var D=`
`+h[w].replace(" at new "," at ");return r.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",r.displayName)),D}while(1<=w&&0<=P);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?q(r):""}function Oe(r){switch(r.tag){case 5:return q(r.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return r=_e(r.type,!1),r;case 11:return r=_e(r.type.render,!1),r;case 1:return r=_e(r.type,!0),r;default:return""}}function Ue(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case N:return"Fragment";case pe:return"Portal";case k:return"Profiler";case S:return"StrictMode";case I:return"Suspense";case de:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case V:return(r.displayName||"Context")+".Consumer";case x:return(r._context.displayName||"Context")+".Provider";case C:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case $:return s=r.displayName||null,s!==null?s:Ue(r.type)||"Memo";case he:s=r._payload,r=r._init;try{return Ue(r(s))}catch{}}return null}function Be(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ue(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function qe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ye(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function St(r){var s=Ye(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return h.call(this)},set:function(w){c=""+w,g.call(this,w)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function In(r){r._valueTracker||(r._valueTracker=St(r))}function Fr(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=Ye(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function dn(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Jn(r,s){var a=s.checked;return X({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Br(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=qe(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function _r(r,s){s=s.checked,s!=null&&ie(r,"checked",s,!1)}function gs(r,s){_r(r,s);var a=qe(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?$r(r,s.type,a):s.hasOwnProperty("defaultValue")&&$r(r,s.type,qe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function ys(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function $r(r,s,a){(s!=="number"||dn(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var Mn=Array.isArray;function nn(r,s,a,c){if(r=r.options,s){s={};for(var h=0;h<a.length;h++)s["$"+a[h]]=!0;for(a=0;a<r.length;a++)h=s.hasOwnProperty("$"+r[a].value),r[a].selected!==h&&(r[a].selected=h),h&&c&&(r[a].defaultSelected=!0)}else{for(a=""+qe(a),s=null,h=0;h<r.length;h++){if(r[h].value===a){r[h].selected=!0,c&&(r[h].defaultSelected=!0);return}s!==null||r[h].disabled||(s=r[h])}s!==null&&(s.selected=!0)}}function _i(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return X({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function zr(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(Mn(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:qe(a)}}function qr(r,s){var a=qe(s.value),c=qe(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function Hr(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function pt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?pt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var jn,vs=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,h){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,h)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(jn=jn||document.createElement("div"),jn.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=jn.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Un(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wr=["Webkit","ms","Moz","O"];Object.keys(wr).forEach(function(r){Wr.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),wr[s]=wr[r]})});function _s(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||wr.hasOwnProperty(r)&&wr[r]?(""+s).trim():s+"px"}function wi(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=_s(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,h):r[a]=h}}var Ei=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function z(r,s){if(s){if(Ei[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ae(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ce=null;function Me(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var be=null,Re=null,lt=null;function Sn(r){if(r=Ha(r)){if(typeof be!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Au(s),be(r.stateNode,r.type,s))}}function An(r){Re?lt?lt.push(r):lt=[r]:Re=r}function ws(){if(Re){var r=Re,s=lt;if(lt=Re=null,Sn(r),s)for(r=0;r<s.length;r++)Sn(s[r])}}function Es(r,s){return r(s)}function Ia(){}var Kr=!1;function Sa(r,s,a){if(Kr)return r(s,a);Kr=!0;try{return Es(r,s,a)}finally{Kr=!1,(Re!==null||lt!==null)&&(Ia(),ws())}}function wt(r,s){var a=r.stateNode;if(a===null)return null;var c=Au(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var mo=!1;if(f)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){mo=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{mo=!1}function Ts(r,s,a,c,h,g,w,P,D){var H=Array.prototype.slice.call(arguments,3);try{s.apply(a,H)}catch(re){this.onError(re)}}var Is=!1,go=null,er=!1,Aa=null,Id={onError:function(r){Is=!0,go=r}};function yo(r,s,a,c,h,g,w,P,D){Is=!1,go=null,Ts.apply(Id,arguments)}function Xl(r,s,a,c,h,g,w,P,D){if(yo.apply(this,arguments),Is){if(Is){var H=go;Is=!1,go=null}else throw Error(t(198));er||(er=!0,Aa=H)}}function tr(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Ss(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function nr(r){if(tr(r)!==r)throw Error(t(188))}function Yl(r){var s=r.alternate;if(!s){if(s=tr(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return nr(h),r;if(g===c)return nr(h),s;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=g;else{for(var w=!1,P=h.child;P;){if(P===a){w=!0,a=h,c=g;break}if(P===c){w=!0,c=h,a=g;break}P=P.sibling}if(!w){for(P=g.child;P;){if(P===a){w=!0,a=g,c=h;break}if(P===c){w=!0,c=g,a=h;break}P=P.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function Ca(r){return r=Yl(r),r!==null?vo(r):null}function vo(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=vo(r);if(s!==null)return s;r=r.sibling}return null}var _o=e.unstable_scheduleCallback,Ra=e.unstable_cancelCallback,Jl=e.unstable_shouldYield,Sd=e.unstable_requestPaint,rt=e.unstable_now,Zl=e.unstable_getCurrentPriorityLevel,As=e.unstable_ImmediatePriority,Ti=e.unstable_UserBlockingPriority,Fn=e.unstable_NormalPriority,ka=e.unstable_LowPriority,eu=e.unstable_IdlePriority,Cs=null,Cn=null;function tu(r){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(Cs,r,void 0,(r.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:ru,Pa=Math.log,nu=Math.LN2;function ru(r){return r>>>=0,r===0?32:31-(Pa(r)/nu|0)|0}var wo=64,Eo=4194304;function Ii(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Rs(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,h=r.suspendedLanes,g=r.pingedLanes,w=a&268435455;if(w!==0){var P=w&~h;P!==0?c=Ii(P):(g&=w,g!==0&&(c=Ii(g)))}else w=a&~h,w!==0?c=Ii(w):g!==0&&(c=Ii(g));if(c===0)return 0;if(s!==0&&s!==c&&(s&h)===0&&(h=c&-c,g=s&-s,h>=g||h===16&&(g&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-rn(s),h=1<<a,c|=r[a],s&=~h;return c}function Ad(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gr(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,h=r.expirationTimes,g=r.pendingLanes;0<g;){var w=31-rn(g),P=1<<w,D=h[w];D===-1?((P&a)===0||(P&c)!==0)&&(h[w]=Ad(P,s)):D<=s&&(r.expiredLanes|=P),g&=~P}}function Rn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function ks(){var r=wo;return wo<<=1,(wo&4194240)===0&&(wo=64),r}function Si(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Ai(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-rn(s),r[s]=a}function tt(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var h=31-rn(a),g=1<<h;s[h]=0,c[h]=-1,r[h]=-1,a&=~g}}function Ci(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-rn(a),h=1<<c;h&s|r[c]&s&&(r[c]|=s),a&=~h}}var He=0;function Ri(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var iu,To,su,ou,au,Na=!1,Er=[],Ft=null,rr=null,ir=null,ki=new Map,Bn=new Map,Tr=[],Cd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lu(r,s){switch(r){case"focusin":case"focusout":Ft=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":ki.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bn.delete(s.pointerId)}}function hn(r,s,a,c,h,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},s!==null&&(s=Ha(s),s!==null&&To(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,h!==null&&s.indexOf(h)===-1&&s.push(h),r)}function Rd(r,s,a,c,h){switch(s){case"focusin":return Ft=hn(Ft,r,s,a,c,h),!0;case"dragenter":return rr=hn(rr,r,s,a,c,h),!0;case"mouseover":return ir=hn(ir,r,s,a,c,h),!0;case"pointerover":var g=h.pointerId;return ki.set(g,hn(ki.get(g)||null,r,s,a,c,h)),!0;case"gotpointercapture":return g=h.pointerId,Bn.set(g,hn(Bn.get(g)||null,r,s,a,c,h)),!0}return!1}function uu(r){var s=Ds(r.target);if(s!==null){var a=tr(s);if(a!==null){if(s=a.tag,s===13){if(s=Ss(a),s!==null){r.blockedOn=s,au(r.priority,function(){su(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Qr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Io(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);ce=c,a.target.dispatchEvent(c),ce=null}else return s=Ha(a),s!==null&&To(s),r.blockedOn=a,!1;s.shift()}return!0}function Ps(r,s,a){Qr(r)&&a.delete(s)}function cu(){Na=!1,Ft!==null&&Qr(Ft)&&(Ft=null),rr!==null&&Qr(rr)&&(rr=null),ir!==null&&Qr(ir)&&(ir=null),ki.forEach(Ps),Bn.forEach(Ps)}function sr(r,s){r.blockedOn===s&&(r.blockedOn=null,Na||(Na=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,cu)))}function or(r){function s(h){return sr(h,r)}if(0<Er.length){sr(Er[0],r);for(var a=1;a<Er.length;a++){var c=Er[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Ft!==null&&sr(Ft,r),rr!==null&&sr(rr,r),ir!==null&&sr(ir,r),ki.forEach(s),Bn.forEach(s),a=0;a<Tr.length;a++)c=Tr[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Tr.length&&(a=Tr[0],a.blockedOn===null);)uu(a),a.blockedOn===null&&Tr.shift()}var Xr=G.ReactCurrentBatchConfig,Pi=!0;function ut(r,s,a,c){var h=He,g=Xr.transition;Xr.transition=null;try{He=1,xa(r,s,a,c)}finally{He=h,Xr.transition=g}}function kd(r,s,a,c){var h=He,g=Xr.transition;Xr.transition=null;try{He=4,xa(r,s,a,c)}finally{He=h,Xr.transition=g}}function xa(r,s,a,c){if(Pi){var h=Io(r,s,a,c);if(h===null)Ud(r,s,c,Ns,a),lu(r,c);else if(Rd(h,r,s,a,c))c.stopPropagation();else if(lu(r,c),s&4&&-1<Cd.indexOf(r)){for(;h!==null;){var g=Ha(h);if(g!==null&&iu(g),g=Io(r,s,a,c),g===null&&Ud(r,s,c,Ns,a),g===h)break;h=g}h!==null&&c.stopPropagation()}else Ud(r,s,c,null,a)}}var Ns=null;function Io(r,s,a,c){if(Ns=null,r=Me(c),r=Ds(r),r!==null)if(s=tr(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Ss(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Ns=r,null}function ba(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zl()){case As:return 1;case Ti:return 4;case Fn:case ka:return 16;case eu:return 536870912;default:return 16}default:return 16}}var kn=null,So=null,fn=null;function Da(){if(fn)return fn;var r,s=So,a=s.length,c,h="value"in kn?kn.value:kn.textContent,g=h.length;for(r=0;r<a&&s[r]===h[r];r++);var w=a-r;for(c=1;c<=w&&s[a-c]===h[g-c];c++);return fn=h.slice(r,1<c?1-c:void 0)}function Ao(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Ir(){return!0}function Oa(){return!1}function Bt(r){function s(a,c,h,g,w){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var P in r)r.hasOwnProperty(P)&&(a=r[P],this[P]=a?a(g):g[P]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ir:Oa,this.isPropagationStopped=Oa,this}return X(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ir)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ir)},persist:function(){},isPersistent:Ir}),s}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Co=Bt(ar),Sr=X({},ar,{view:0,detail:0}),Pd=Bt(Sr),Ro,Yr,Ni,xs=X({},Sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ar,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Ni&&(Ni&&r.type==="mousemove"?(Ro=r.screenX-Ni.screenX,Yr=r.screenY-Ni.screenY):Yr=Ro=0,Ni=r),Ro)},movementY:function(r){return"movementY"in r?r.movementY:Yr}}),ko=Bt(xs),Va=X({},xs,{dataTransfer:0}),du=Bt(Va),Po=X({},Sr,{relatedTarget:0}),No=Bt(Po),hu=X({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Jr=Bt(hu),fu=X({},ar,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),pu=Bt(fu),mu=X({},ar,{data:0}),La=Bt(mu),xo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=gu[r])?!!s[r]:!1}function Ar(){return yu}var u=X({},Sr,{key:function(r){if(r.key){var s=xo[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Ao(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?sn[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ar,charCode:function(r){return r.type==="keypress"?Ao(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Ao(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=Bt(u),_=X({},xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T=Bt(_),U=X({},Sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ar}),K=Bt(U),ue=X({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ze=Bt(ue),Nt=X({},xs,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),We=Bt(Nt),Ot=[9,13,27,32],At=f&&"CompositionEvent"in window,$n=null;f&&"documentMode"in document&&($n=document.documentMode);var Pn=f&&"TextEvent"in window&&!$n,bs=f&&(!At||$n&&8<$n&&11>=$n),bo=" ",fm=!1;function pm(r,s){switch(r){case"keyup":return Ot.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Do=!1;function XT(r,s){switch(r){case"compositionend":return mm(s);case"keypress":return s.which!==32?null:(fm=!0,bo);case"textInput":return r=s.data,r===bo&&fm?null:r;default:return null}}function YT(r,s){if(Do)return r==="compositionend"||!At&&pm(r,s)?(r=Da(),fn=So=kn=null,Do=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return bs&&s.locale!=="ko"?null:s.data;default:return null}}var JT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gm(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!JT[r.type]:s==="textarea"}function ym(r,s,a,c){An(c),s=Tu(s,"onChange"),0<s.length&&(a=new Co("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var Ma=null,ja=null;function ZT(r){Vm(r,0)}function vu(r){var s=jo(r);if(Fr(s))return r}function e0(r,s){if(r==="change")return s}var vm=!1;if(f){var Nd;if(f){var xd="oninput"in document;if(!xd){var _m=document.createElement("div");_m.setAttribute("oninput","return;"),xd=typeof _m.oninput=="function"}Nd=xd}else Nd=!1;vm=Nd&&(!document.documentMode||9<document.documentMode)}function wm(){Ma&&(Ma.detachEvent("onpropertychange",Em),ja=Ma=null)}function Em(r){if(r.propertyName==="value"&&vu(ja)){var s=[];ym(s,ja,r,Me(r)),Sa(ZT,s)}}function t0(r,s,a){r==="focusin"?(wm(),Ma=s,ja=a,Ma.attachEvent("onpropertychange",Em)):r==="focusout"&&wm()}function n0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return vu(ja)}function r0(r,s){if(r==="click")return vu(s)}function i0(r,s){if(r==="input"||r==="change")return vu(s)}function s0(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var lr=typeof Object.is=="function"?Object.is:s0;function Ua(r,s){if(lr(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!p.call(s,h)||!lr(r[h],s[h]))return!1}return!0}function Tm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Im(r,s){var a=Tm(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Tm(a)}}function Sm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Sm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Am(){for(var r=window,s=dn();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=dn(r.document)}return s}function bd(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function o0(r){var s=Am(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Sm(a.ownerDocument.documentElement,a)){if(c!==null&&bd(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var h=a.textContent.length,g=Math.min(c.start,h);c=c.end===void 0?g:Math.min(c.end,h),!r.extend&&g>c&&(h=c,c=g,g=h),h=Im(a,g);var w=Im(a,c);h&&w&&(r.rangeCount!==1||r.anchorNode!==h.node||r.anchorOffset!==h.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(h.node,h.offset),r.removeAllRanges(),g>c?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var a0=f&&"documentMode"in document&&11>=document.documentMode,Oo=null,Dd=null,Fa=null,Od=!1;function Cm(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Od||Oo==null||Oo!==dn(c)||(c=Oo,"selectionStart"in c&&bd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Fa&&Ua(Fa,c)||(Fa=c,c=Tu(Dd,"onSelect"),0<c.length&&(s=new Co("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=Oo)))}function _u(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var Vo={animationend:_u("Animation","AnimationEnd"),animationiteration:_u("Animation","AnimationIteration"),animationstart:_u("Animation","AnimationStart"),transitionend:_u("Transition","TransitionEnd")},Vd={},Rm={};f&&(Rm=document.createElement("div").style,"AnimationEvent"in window||(delete Vo.animationend.animation,delete Vo.animationiteration.animation,delete Vo.animationstart.animation),"TransitionEvent"in window||delete Vo.transitionend.transition);function wu(r){if(Vd[r])return Vd[r];if(!Vo[r])return r;var s=Vo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Rm)return Vd[r]=s[a];return r}var km=wu("animationend"),Pm=wu("animationiteration"),Nm=wu("animationstart"),xm=wu("transitionend"),bm=new Map,Dm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xi(r,s){bm.set(r,s),l(s,[r])}for(var Ld=0;Ld<Dm.length;Ld++){var Md=Dm[Ld],l0=Md.toLowerCase(),u0=Md[0].toUpperCase()+Md.slice(1);xi(l0,"on"+u0)}xi(km,"onAnimationEnd"),xi(Pm,"onAnimationIteration"),xi(Nm,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(xm,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ba));function Om(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,Xl(c,s,void 0,r),r.currentTarget=null}function Vm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],h=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var w=c.length-1;0<=w;w--){var P=c[w],D=P.instance,H=P.currentTarget;if(P=P.listener,D!==g&&h.isPropagationStopped())break e;Om(h,P,H),g=D}else for(w=0;w<c.length;w++){if(P=c[w],D=P.instance,H=P.currentTarget,P=P.listener,D!==g&&h.isPropagationStopped())break e;Om(h,P,H),g=D}}}if(er)throw r=Aa,er=!1,Aa=null,r}function ot(r,s){var a=s[Hd];a===void 0&&(a=s[Hd]=new Set);var c=r+"__bubble";a.has(c)||(Lm(s,r,2,!1),a.add(c))}function jd(r,s,a){var c=0;s&&(c|=4),Lm(a,r,c,s)}var Eu="_reactListening"+Math.random().toString(36).slice(2);function $a(r){if(!r[Eu]){r[Eu]=!0,i.forEach(function(a){a!=="selectionchange"&&(c0.has(a)||jd(a,!1,r),jd(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Eu]||(s[Eu]=!0,jd("selectionchange",!1,s))}}function Lm(r,s,a,c){switch(ba(s)){case 1:var h=ut;break;case 4:h=kd;break;default:h=xa}a=h.bind(null,s,a,r),h=void 0,!mo||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(h=!0),c?h!==void 0?r.addEventListener(s,a,{capture:!0,passive:h}):r.addEventListener(s,a,!0):h!==void 0?r.addEventListener(s,a,{passive:h}):r.addEventListener(s,a,!1)}function Ud(r,s,a,c,h){var g=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var P=c.stateNode.containerInfo;if(P===h||P.nodeType===8&&P.parentNode===h)break;if(w===4)for(w=c.return;w!==null;){var D=w.tag;if((D===3||D===4)&&(D=w.stateNode.containerInfo,D===h||D.nodeType===8&&D.parentNode===h))return;w=w.return}for(;P!==null;){if(w=Ds(P),w===null)return;if(D=w.tag,D===5||D===6){c=g=w;continue e}P=P.parentNode}}c=c.return}Sa(function(){var H=g,re=Me(a),se=[];e:{var te=bm.get(r);if(te!==void 0){var ye=Co,Ee=r;switch(r){case"keypress":if(Ao(a)===0)break e;case"keydown":case"keyup":ye=m;break;case"focusin":Ee="focus",ye=No;break;case"focusout":Ee="blur",ye=No;break;case"beforeblur":case"afterblur":ye=No;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ye=ko;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ye=du;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ye=K;break;case km:case Pm:case Nm:ye=Jr;break;case xm:ye=Ze;break;case"scroll":ye=Pd;break;case"wheel":ye=We;break;case"copy":case"cut":case"paste":ye=pu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ye=T}var Ie=(s&4)!==0,Et=!Ie&&r==="scroll",F=Ie?te!==null?te+"Capture":null:te;Ie=[];for(var M=H,B;M!==null;){B=M;var le=B.stateNode;if(B.tag===5&&le!==null&&(B=le,F!==null&&(le=wt(M,F),le!=null&&Ie.push(za(M,le,B)))),Et)break;M=M.return}0<Ie.length&&(te=new ye(te,Ee,null,a,re),se.push({event:te,listeners:Ie}))}}if((s&7)===0){e:{if(te=r==="mouseover"||r==="pointerover",ye=r==="mouseout"||r==="pointerout",te&&a!==ce&&(Ee=a.relatedTarget||a.fromElement)&&(Ds(Ee)||Ee[Zr]))break e;if((ye||te)&&(te=re.window===re?re:(te=re.ownerDocument)?te.defaultView||te.parentWindow:window,ye?(Ee=a.relatedTarget||a.toElement,ye=H,Ee=Ee?Ds(Ee):null,Ee!==null&&(Et=tr(Ee),Ee!==Et||Ee.tag!==5&&Ee.tag!==6)&&(Ee=null)):(ye=null,Ee=H),ye!==Ee)){if(Ie=ko,le="onMouseLeave",F="onMouseEnter",M="mouse",(r==="pointerout"||r==="pointerover")&&(Ie=T,le="onPointerLeave",F="onPointerEnter",M="pointer"),Et=ye==null?te:jo(ye),B=Ee==null?te:jo(Ee),te=new Ie(le,M+"leave",ye,a,re),te.target=Et,te.relatedTarget=B,le=null,Ds(re)===H&&(Ie=new Ie(F,M+"enter",Ee,a,re),Ie.target=B,Ie.relatedTarget=Et,le=Ie),Et=le,ye&&Ee)t:{for(Ie=ye,F=Ee,M=0,B=Ie;B;B=Lo(B))M++;for(B=0,le=F;le;le=Lo(le))B++;for(;0<M-B;)Ie=Lo(Ie),M--;for(;0<B-M;)F=Lo(F),B--;for(;M--;){if(Ie===F||F!==null&&Ie===F.alternate)break t;Ie=Lo(Ie),F=Lo(F)}Ie=null}else Ie=null;ye!==null&&Mm(se,te,ye,Ie,!1),Ee!==null&&Et!==null&&Mm(se,Et,Ee,Ie,!0)}}e:{if(te=H?jo(H):window,ye=te.nodeName&&te.nodeName.toLowerCase(),ye==="select"||ye==="input"&&te.type==="file")var Se=e0;else if(gm(te))if(vm)Se=i0;else{Se=n0;var ke=t0}else(ye=te.nodeName)&&ye.toLowerCase()==="input"&&(te.type==="checkbox"||te.type==="radio")&&(Se=r0);if(Se&&(Se=Se(r,H))){ym(se,Se,a,re);break e}ke&&ke(r,te,H),r==="focusout"&&(ke=te._wrapperState)&&ke.controlled&&te.type==="number"&&$r(te,"number",te.value)}switch(ke=H?jo(H):window,r){case"focusin":(gm(ke)||ke.contentEditable==="true")&&(Oo=ke,Dd=H,Fa=null);break;case"focusout":Fa=Dd=Oo=null;break;case"mousedown":Od=!0;break;case"contextmenu":case"mouseup":case"dragend":Od=!1,Cm(se,a,re);break;case"selectionchange":if(a0)break;case"keydown":case"keyup":Cm(se,a,re)}var Pe;if(At)e:{switch(r){case"compositionstart":var De="onCompositionStart";break e;case"compositionend":De="onCompositionEnd";break e;case"compositionupdate":De="onCompositionUpdate";break e}De=void 0}else Do?pm(r,a)&&(De="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(De="onCompositionStart");De&&(bs&&a.locale!=="ko"&&(Do||De!=="onCompositionStart"?De==="onCompositionEnd"&&Do&&(Pe=Da()):(kn=re,So="value"in kn?kn.value:kn.textContent,Do=!0)),ke=Tu(H,De),0<ke.length&&(De=new La(De,r,null,a,re),se.push({event:De,listeners:ke}),Pe?De.data=Pe:(Pe=mm(a),Pe!==null&&(De.data=Pe)))),(Pe=Pn?XT(r,a):YT(r,a))&&(H=Tu(H,"onBeforeInput"),0<H.length&&(re=new La("onBeforeInput","beforeinput",null,a,re),se.push({event:re,listeners:H}),re.data=Pe))}Vm(se,s)})}function za(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Tu(r,s){for(var a=s+"Capture",c=[];r!==null;){var h=r,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=wt(r,a),g!=null&&c.unshift(za(r,g,h)),g=wt(r,s),g!=null&&c.push(za(r,g,h))),r=r.return}return c}function Lo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Mm(r,s,a,c,h){for(var g=s._reactName,w=[];a!==null&&a!==c;){var P=a,D=P.alternate,H=P.stateNode;if(D!==null&&D===c)break;P.tag===5&&H!==null&&(P=H,h?(D=wt(a,g),D!=null&&w.unshift(za(a,D,P))):h||(D=wt(a,g),D!=null&&w.push(za(a,D,P)))),a=a.return}w.length!==0&&r.push({event:s,listeners:w})}var d0=/\r\n?/g,h0=/\u0000|\uFFFD/g;function jm(r){return(typeof r=="string"?r:""+r).replace(d0,`
`).replace(h0,"")}function Iu(r,s,a){if(s=jm(s),jm(r)!==s&&a)throw Error(t(425))}function Su(){}var Fd=null,Bd=null;function $d(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var zd=typeof setTimeout=="function"?setTimeout:void 0,f0=typeof clearTimeout=="function"?clearTimeout:void 0,Um=typeof Promise=="function"?Promise:void 0,p0=typeof queueMicrotask=="function"?queueMicrotask:typeof Um<"u"?function(r){return Um.resolve(null).then(r).catch(m0)}:zd;function m0(r){setTimeout(function(){throw r})}function qd(r,s){var a=s,c=0;do{var h=a.nextSibling;if(r.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){r.removeChild(h),or(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);or(s)}function bi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Fm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var Mo=Math.random().toString(36).slice(2),Cr="__reactFiber$"+Mo,qa="__reactProps$"+Mo,Zr="__reactContainer$"+Mo,Hd="__reactEvents$"+Mo,g0="__reactListeners$"+Mo,y0="__reactHandles$"+Mo;function Ds(r){var s=r[Cr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Zr]||a[Cr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Fm(r);r!==null;){if(a=r[Cr])return a;r=Fm(r)}return s}r=a,a=r.parentNode}return null}function Ha(r){return r=r[Cr]||r[Zr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function jo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Au(r){return r[qa]||null}var Wd=[],Uo=-1;function Di(r){return{current:r}}function at(r){0>Uo||(r.current=Wd[Uo],Wd[Uo]=null,Uo--)}function it(r,s){Uo++,Wd[Uo]=r.current,r.current=s}var Oi={},Kt=Di(Oi),pn=Di(!1),Os=Oi;function Fo(r,s){var a=r.type.contextTypes;if(!a)return Oi;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=s[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=h),h}function mn(r){return r=r.childContextTypes,r!=null}function Cu(){at(pn),at(Kt)}function Bm(r,s,a){if(Kt.current!==Oi)throw Error(t(168));it(Kt,s),it(pn,a)}function $m(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in s))throw Error(t(108,Be(r)||"Unknown",h));return X({},a,c)}function Ru(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Oi,Os=Kt.current,it(Kt,r),it(pn,pn.current),!0}function zm(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=$m(r,s,Os),c.__reactInternalMemoizedMergedChildContext=r,at(pn),at(Kt),it(Kt,r)):at(pn),it(pn,a)}var ei=null,ku=!1,Kd=!1;function qm(r){ei===null?ei=[r]:ei.push(r)}function v0(r){ku=!0,qm(r)}function Vi(){if(!Kd&&ei!==null){Kd=!0;var r=0,s=He;try{var a=ei;for(He=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}ei=null,ku=!1}catch(h){throw ei!==null&&(ei=ei.slice(r+1)),_o(As,Vi),h}finally{He=s,Kd=!1}}return null}var Bo=[],$o=0,Pu=null,Nu=0,zn=[],qn=0,Vs=null,ti=1,ni="";function Ls(r,s){Bo[$o++]=Nu,Bo[$o++]=Pu,Pu=r,Nu=s}function Hm(r,s,a){zn[qn++]=ti,zn[qn++]=ni,zn[qn++]=Vs,Vs=r;var c=ti;r=ni;var h=32-rn(c)-1;c&=~(1<<h),a+=1;var g=32-rn(s)+h;if(30<g){var w=h-h%5;g=(c&(1<<w)-1).toString(32),c>>=w,h-=w,ti=1<<32-rn(s)+h|a<<h|c,ni=g+r}else ti=1<<g|a<<h|c,ni=r}function Gd(r){r.return!==null&&(Ls(r,1),Hm(r,1,0))}function Qd(r){for(;r===Pu;)Pu=Bo[--$o],Bo[$o]=null,Nu=Bo[--$o],Bo[$o]=null;for(;r===Vs;)Vs=zn[--qn],zn[qn]=null,ni=zn[--qn],zn[qn]=null,ti=zn[--qn],zn[qn]=null}var Nn=null,xn=null,ct=!1,ur=null;function Wm(r,s){var a=Gn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function Km(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,Nn=r,xn=bi(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,Nn=r,xn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Vs!==null?{id:ti,overflow:ni}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Gn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,Nn=r,xn=null,!0):!1;default:return!1}}function Xd(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Yd(r){if(ct){var s=xn;if(s){var a=s;if(!Km(r,s)){if(Xd(r))throw Error(t(418));s=bi(a.nextSibling);var c=Nn;s&&Km(r,s)?Wm(c,a):(r.flags=r.flags&-4097|2,ct=!1,Nn=r)}}else{if(Xd(r))throw Error(t(418));r.flags=r.flags&-4097|2,ct=!1,Nn=r}}}function Gm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Nn=r}function xu(r){if(r!==Nn)return!1;if(!ct)return Gm(r),ct=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!$d(r.type,r.memoizedProps)),s&&(s=xn)){if(Xd(r))throw Qm(),Error(t(418));for(;s;)Wm(r,s),s=bi(s.nextSibling)}if(Gm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){xn=bi(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}xn=null}}else xn=Nn?bi(r.stateNode.nextSibling):null;return!0}function Qm(){for(var r=xn;r;)r=bi(r.nextSibling)}function zo(){xn=Nn=null,ct=!1}function Jd(r){ur===null?ur=[r]:ur.push(r)}var _0=G.ReactCurrentBatchConfig;function Wa(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var h=c,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(w){var P=h.refs;w===null?delete P[g]:P[g]=w},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function bu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Xm(r){var s=r._init;return s(r._payload)}function Ym(r){function s(F,M){if(r){var B=F.deletions;B===null?(F.deletions=[M],F.flags|=16):B.push(M)}}function a(F,M){if(!r)return null;for(;M!==null;)s(F,M),M=M.sibling;return null}function c(F,M){for(F=new Map;M!==null;)M.key!==null?F.set(M.key,M):F.set(M.index,M),M=M.sibling;return F}function h(F,M){return F=zi(F,M),F.index=0,F.sibling=null,F}function g(F,M,B){return F.index=B,r?(B=F.alternate,B!==null?(B=B.index,B<M?(F.flags|=2,M):B):(F.flags|=2,M)):(F.flags|=1048576,M)}function w(F){return r&&F.alternate===null&&(F.flags|=2),F}function P(F,M,B,le){return M===null||M.tag!==6?(M=zh(B,F.mode,le),M.return=F,M):(M=h(M,B),M.return=F,M)}function D(F,M,B,le){var Se=B.type;return Se===N?re(F,M,B.props.children,le,B.key):M!==null&&(M.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===he&&Xm(Se)===M.type)?(le=h(M,B.props),le.ref=Wa(F,M,B),le.return=F,le):(le=nc(B.type,B.key,B.props,null,F.mode,le),le.ref=Wa(F,M,B),le.return=F,le)}function H(F,M,B,le){return M===null||M.tag!==4||M.stateNode.containerInfo!==B.containerInfo||M.stateNode.implementation!==B.implementation?(M=qh(B,F.mode,le),M.return=F,M):(M=h(M,B.children||[]),M.return=F,M)}function re(F,M,B,le,Se){return M===null||M.tag!==7?(M=qs(B,F.mode,le,Se),M.return=F,M):(M=h(M,B),M.return=F,M)}function se(F,M,B){if(typeof M=="string"&&M!==""||typeof M=="number")return M=zh(""+M,F.mode,B),M.return=F,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Te:return B=nc(M.type,M.key,M.props,null,F.mode,B),B.ref=Wa(F,null,M),B.return=F,B;case pe:return M=qh(M,F.mode,B),M.return=F,M;case he:var le=M._init;return se(F,le(M._payload),B)}if(Mn(M)||J(M))return M=qs(M,F.mode,B,null),M.return=F,M;bu(F,M)}return null}function te(F,M,B,le){var Se=M!==null?M.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return Se!==null?null:P(F,M,""+B,le);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case Te:return B.key===Se?D(F,M,B,le):null;case pe:return B.key===Se?H(F,M,B,le):null;case he:return Se=B._init,te(F,M,Se(B._payload),le)}if(Mn(B)||J(B))return Se!==null?null:re(F,M,B,le,null);bu(F,B)}return null}function ye(F,M,B,le,Se){if(typeof le=="string"&&le!==""||typeof le=="number")return F=F.get(B)||null,P(M,F,""+le,Se);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case Te:return F=F.get(le.key===null?B:le.key)||null,D(M,F,le,Se);case pe:return F=F.get(le.key===null?B:le.key)||null,H(M,F,le,Se);case he:var ke=le._init;return ye(F,M,B,ke(le._payload),Se)}if(Mn(le)||J(le))return F=F.get(B)||null,re(M,F,le,Se,null);bu(M,le)}return null}function Ee(F,M,B,le){for(var Se=null,ke=null,Pe=M,De=M=0,Mt=null;Pe!==null&&De<B.length;De++){Pe.index>De?(Mt=Pe,Pe=null):Mt=Pe.sibling;var Qe=te(F,Pe,B[De],le);if(Qe===null){Pe===null&&(Pe=Mt);break}r&&Pe&&Qe.alternate===null&&s(F,Pe),M=g(Qe,M,De),ke===null?Se=Qe:ke.sibling=Qe,ke=Qe,Pe=Mt}if(De===B.length)return a(F,Pe),ct&&Ls(F,De),Se;if(Pe===null){for(;De<B.length;De++)Pe=se(F,B[De],le),Pe!==null&&(M=g(Pe,M,De),ke===null?Se=Pe:ke.sibling=Pe,ke=Pe);return ct&&Ls(F,De),Se}for(Pe=c(F,Pe);De<B.length;De++)Mt=ye(Pe,F,De,B[De],le),Mt!==null&&(r&&Mt.alternate!==null&&Pe.delete(Mt.key===null?De:Mt.key),M=g(Mt,M,De),ke===null?Se=Mt:ke.sibling=Mt,ke=Mt);return r&&Pe.forEach(function(qi){return s(F,qi)}),ct&&Ls(F,De),Se}function Ie(F,M,B,le){var Se=J(B);if(typeof Se!="function")throw Error(t(150));if(B=Se.call(B),B==null)throw Error(t(151));for(var ke=Se=null,Pe=M,De=M=0,Mt=null,Qe=B.next();Pe!==null&&!Qe.done;De++,Qe=B.next()){Pe.index>De?(Mt=Pe,Pe=null):Mt=Pe.sibling;var qi=te(F,Pe,Qe.value,le);if(qi===null){Pe===null&&(Pe=Mt);break}r&&Pe&&qi.alternate===null&&s(F,Pe),M=g(qi,M,De),ke===null?Se=qi:ke.sibling=qi,ke=qi,Pe=Mt}if(Qe.done)return a(F,Pe),ct&&Ls(F,De),Se;if(Pe===null){for(;!Qe.done;De++,Qe=B.next())Qe=se(F,Qe.value,le),Qe!==null&&(M=g(Qe,M,De),ke===null?Se=Qe:ke.sibling=Qe,ke=Qe);return ct&&Ls(F,De),Se}for(Pe=c(F,Pe);!Qe.done;De++,Qe=B.next())Qe=ye(Pe,F,De,Qe.value,le),Qe!==null&&(r&&Qe.alternate!==null&&Pe.delete(Qe.key===null?De:Qe.key),M=g(Qe,M,De),ke===null?Se=Qe:ke.sibling=Qe,ke=Qe);return r&&Pe.forEach(function(J0){return s(F,J0)}),ct&&Ls(F,De),Se}function Et(F,M,B,le){if(typeof B=="object"&&B!==null&&B.type===N&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case Te:e:{for(var Se=B.key,ke=M;ke!==null;){if(ke.key===Se){if(Se=B.type,Se===N){if(ke.tag===7){a(F,ke.sibling),M=h(ke,B.props.children),M.return=F,F=M;break e}}else if(ke.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===he&&Xm(Se)===ke.type){a(F,ke.sibling),M=h(ke,B.props),M.ref=Wa(F,ke,B),M.return=F,F=M;break e}a(F,ke);break}else s(F,ke);ke=ke.sibling}B.type===N?(M=qs(B.props.children,F.mode,le,B.key),M.return=F,F=M):(le=nc(B.type,B.key,B.props,null,F.mode,le),le.ref=Wa(F,M,B),le.return=F,F=le)}return w(F);case pe:e:{for(ke=B.key;M!==null;){if(M.key===ke)if(M.tag===4&&M.stateNode.containerInfo===B.containerInfo&&M.stateNode.implementation===B.implementation){a(F,M.sibling),M=h(M,B.children||[]),M.return=F,F=M;break e}else{a(F,M);break}else s(F,M);M=M.sibling}M=qh(B,F.mode,le),M.return=F,F=M}return w(F);case he:return ke=B._init,Et(F,M,ke(B._payload),le)}if(Mn(B))return Ee(F,M,B,le);if(J(B))return Ie(F,M,B,le);bu(F,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,M!==null&&M.tag===6?(a(F,M.sibling),M=h(M,B),M.return=F,F=M):(a(F,M),M=zh(B,F.mode,le),M.return=F,F=M),w(F)):a(F,M)}return Et}var qo=Ym(!0),Jm=Ym(!1),Du=Di(null),Ou=null,Ho=null,Zd=null;function eh(){Zd=Ho=Ou=null}function th(r){var s=Du.current;at(Du),r._currentValue=s}function nh(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function Wo(r,s){Ou=r,Zd=Ho=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(gn=!0),r.firstContext=null)}function Hn(r){var s=r._currentValue;if(Zd!==r)if(r={context:r,memoizedValue:s,next:null},Ho===null){if(Ou===null)throw Error(t(308));Ho=r,Ou.dependencies={lanes:0,firstContext:r}}else Ho=Ho.next=r;return s}var Ms=null;function rh(r){Ms===null?Ms=[r]:Ms.push(r)}function Zm(r,s,a,c){var h=s.interleaved;return h===null?(a.next=a,rh(s)):(a.next=h.next,h.next=a),s.interleaved=a,ri(r,c)}function ri(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var Li=!1;function ih(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function eg(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function ii(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function Mi(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(Ge&2)!==0){var h=c.pending;return h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s,ri(r,a)}return h=c.interleaved,h===null?(s.next=s,rh(c)):(s.next=h.next,h.next=s),c.interleaved=s,ri(r,a)}function Vu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Ci(r,a)}}function tg(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?h=g=s:g=g.next=s}else h=g=s;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Lu(r,s,a,c){var h=r.updateQueue;Li=!1;var g=h.firstBaseUpdate,w=h.lastBaseUpdate,P=h.shared.pending;if(P!==null){h.shared.pending=null;var D=P,H=D.next;D.next=null,w===null?g=H:w.next=H,w=D;var re=r.alternate;re!==null&&(re=re.updateQueue,P=re.lastBaseUpdate,P!==w&&(P===null?re.firstBaseUpdate=H:P.next=H,re.lastBaseUpdate=D))}if(g!==null){var se=h.baseState;w=0,re=H=D=null,P=g;do{var te=P.lane,ye=P.eventTime;if((c&te)===te){re!==null&&(re=re.next={eventTime:ye,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var Ee=r,Ie=P;switch(te=s,ye=a,Ie.tag){case 1:if(Ee=Ie.payload,typeof Ee=="function"){se=Ee.call(ye,se,te);break e}se=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=Ie.payload,te=typeof Ee=="function"?Ee.call(ye,se,te):Ee,te==null)break e;se=X({},se,te);break e;case 2:Li=!0}}P.callback!==null&&P.lane!==0&&(r.flags|=64,te=h.effects,te===null?h.effects=[P]:te.push(P))}else ye={eventTime:ye,lane:te,tag:P.tag,payload:P.payload,callback:P.callback,next:null},re===null?(H=re=ye,D=se):re=re.next=ye,w|=te;if(P=P.next,P===null){if(P=h.shared.pending,P===null)break;te=P,P=te.next,te.next=null,h.lastBaseUpdate=te,h.shared.pending=null}}while(!0);if(re===null&&(D=se),h.baseState=D,h.firstBaseUpdate=H,h.lastBaseUpdate=re,s=h.shared.interleaved,s!==null){h=s;do w|=h.lane,h=h.next;while(h!==s)}else g===null&&(h.shared.lanes=0);Fs|=w,r.lanes=w,r.memoizedState=se}}function ng(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var Ka={},Rr=Di(Ka),Ga=Di(Ka),Qa=Di(Ka);function js(r){if(r===Ka)throw Error(t(174));return r}function sh(r,s){switch(it(Qa,s),it(Ga,r),it(Rr,Ka),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:mt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=mt(s,r)}at(Rr),it(Rr,s)}function Ko(){at(Rr),at(Ga),at(Qa)}function rg(r){js(Qa.current);var s=js(Rr.current),a=mt(s,r.type);s!==a&&(it(Ga,r),it(Rr,a))}function oh(r){Ga.current===r&&(at(Rr),at(Ga))}var dt=Di(0);function Mu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ah=[];function lh(){for(var r=0;r<ah.length;r++)ah[r]._workInProgressVersionPrimary=null;ah.length=0}var ju=G.ReactCurrentDispatcher,uh=G.ReactCurrentBatchConfig,Us=0,ht=null,xt=null,Vt=null,Uu=!1,Xa=!1,Ya=0,w0=0;function Gt(){throw Error(t(321))}function ch(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!lr(r[a],s[a]))return!1;return!0}function dh(r,s,a,c,h,g){if(Us=g,ht=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,ju.current=r===null||r.memoizedState===null?S0:A0,r=a(c,h),Xa){g=0;do{if(Xa=!1,Ya=0,25<=g)throw Error(t(301));g+=1,Vt=xt=null,s.updateQueue=null,ju.current=C0,r=a(c,h)}while(Xa)}if(ju.current=$u,s=xt!==null&&xt.next!==null,Us=0,Vt=xt=ht=null,Uu=!1,s)throw Error(t(300));return r}function hh(){var r=Ya!==0;return Ya=0,r}function kr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?ht.memoizedState=Vt=r:Vt=Vt.next=r,Vt}function Wn(){if(xt===null){var r=ht.alternate;r=r!==null?r.memoizedState:null}else r=xt.next;var s=Vt===null?ht.memoizedState:Vt.next;if(s!==null)Vt=s,xt=r;else{if(r===null)throw Error(t(310));xt=r,r={memoizedState:xt.memoizedState,baseState:xt.baseState,baseQueue:xt.baseQueue,queue:xt.queue,next:null},Vt===null?ht.memoizedState=Vt=r:Vt=Vt.next=r}return Vt}function Ja(r,s){return typeof s=="function"?s(r):s}function fh(r){var s=Wn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=xt,h=c.baseQueue,g=a.pending;if(g!==null){if(h!==null){var w=h.next;h.next=g.next,g.next=w}c.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,c=c.baseState;var P=w=null,D=null,H=g;do{var re=H.lane;if((Us&re)===re)D!==null&&(D=D.next={lane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),c=H.hasEagerState?H.eagerState:r(c,H.action);else{var se={lane:re,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null};D===null?(P=D=se,w=c):D=D.next=se,ht.lanes|=re,Fs|=re}H=H.next}while(H!==null&&H!==g);D===null?w=c:D.next=P,lr(c,s.memoizedState)||(gn=!0),s.memoizedState=c,s.baseState=w,s.baseQueue=D,a.lastRenderedState=c}if(r=a.interleaved,r!==null){h=r;do g=h.lane,ht.lanes|=g,Fs|=g,h=h.next;while(h!==r)}else h===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function ph(r){var s=Wn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,h=a.pending,g=s.memoizedState;if(h!==null){a.pending=null;var w=h=h.next;do g=r(g,w.action),w=w.next;while(w!==h);lr(g,s.memoizedState)||(gn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,c]}function ig(){}function sg(r,s){var a=ht,c=Wn(),h=s(),g=!lr(c.memoizedState,h);if(g&&(c.memoizedState=h,gn=!0),c=c.queue,mh(lg.bind(null,a,c,r),[r]),c.getSnapshot!==s||g||Vt!==null&&Vt.memoizedState.tag&1){if(a.flags|=2048,Za(9,ag.bind(null,a,c,h,s),void 0,null),Lt===null)throw Error(t(349));(Us&30)!==0||og(a,s,h)}return h}function og(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=ht.updateQueue,s===null?(s={lastEffect:null,stores:null},ht.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function ag(r,s,a,c){s.value=a,s.getSnapshot=c,ug(s)&&cg(r)}function lg(r,s,a){return a(function(){ug(s)&&cg(r)})}function ug(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!lr(r,a)}catch{return!0}}function cg(r){var s=ri(r,1);s!==null&&fr(s,r,1,-1)}function dg(r){var s=kr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:r},s.queue=r,r=r.dispatch=I0.bind(null,ht,r),[s.memoizedState,r]}function Za(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=ht.updateQueue,s===null?(s={lastEffect:null,stores:null},ht.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function hg(){return Wn().memoizedState}function Fu(r,s,a,c){var h=kr();ht.flags|=r,h.memoizedState=Za(1|s,a,void 0,c===void 0?null:c)}function Bu(r,s,a,c){var h=Wn();c=c===void 0?null:c;var g=void 0;if(xt!==null){var w=xt.memoizedState;if(g=w.destroy,c!==null&&ch(c,w.deps)){h.memoizedState=Za(s,a,g,c);return}}ht.flags|=r,h.memoizedState=Za(1|s,a,g,c)}function fg(r,s){return Fu(8390656,8,r,s)}function mh(r,s){return Bu(2048,8,r,s)}function pg(r,s){return Bu(4,2,r,s)}function mg(r,s){return Bu(4,4,r,s)}function gg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function yg(r,s,a){return a=a!=null?a.concat([r]):null,Bu(4,4,gg.bind(null,s,r),a)}function gh(){}function vg(r,s){var a=Wn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&ch(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function _g(r,s){var a=Wn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&ch(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function wg(r,s,a){return(Us&21)===0?(r.baseState&&(r.baseState=!1,gn=!0),r.memoizedState=a):(lr(a,s)||(a=ks(),ht.lanes|=a,Fs|=a,r.baseState=!0),s)}function E0(r,s){var a=He;He=a!==0&&4>a?a:4,r(!0);var c=uh.transition;uh.transition={};try{r(!1),s()}finally{He=a,uh.transition=c}}function Eg(){return Wn().memoizedState}function T0(r,s,a){var c=Bi(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Tg(r))Ig(s,a);else if(a=Zm(r,s,a,c),a!==null){var h=an();fr(a,r,c,h),Sg(a,s,c)}}function I0(r,s,a){var c=Bi(r),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tg(r))Ig(s,h);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var w=s.lastRenderedState,P=g(w,a);if(h.hasEagerState=!0,h.eagerState=P,lr(P,w)){var D=s.interleaved;D===null?(h.next=h,rh(s)):(h.next=D.next,D.next=h),s.interleaved=h;return}}catch{}finally{}a=Zm(r,s,h,c),a!==null&&(h=an(),fr(a,r,c,h),Sg(a,s,c))}}function Tg(r){var s=r.alternate;return r===ht||s!==null&&s===ht}function Ig(r,s){Xa=Uu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Sg(r,s,a){if((a&4194240)!==0){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Ci(r,a)}}var $u={readContext:Hn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},S0={readContext:Hn,useCallback:function(r,s){return kr().memoizedState=[r,s===void 0?null:s],r},useContext:Hn,useEffect:fg,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Fu(4194308,4,gg.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Fu(4194308,4,r,s)},useInsertionEffect:function(r,s){return Fu(4,2,r,s)},useMemo:function(r,s){var a=kr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=kr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=T0.bind(null,ht,r),[c.memoizedState,r]},useRef:function(r){var s=kr();return r={current:r},s.memoizedState=r},useState:dg,useDebugValue:gh,useDeferredValue:function(r){return kr().memoizedState=r},useTransition:function(){var r=dg(!1),s=r[0];return r=E0.bind(null,r[1]),kr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=ht,h=kr();if(ct){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Lt===null)throw Error(t(349));(Us&30)!==0||og(c,s,a)}h.memoizedState=a;var g={value:a,getSnapshot:s};return h.queue=g,fg(lg.bind(null,c,g,r),[r]),c.flags|=2048,Za(9,ag.bind(null,c,g,a,s),void 0,null),a},useId:function(){var r=kr(),s=Lt.identifierPrefix;if(ct){var a=ni,c=ti;a=(c&~(1<<32-rn(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ya++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=w0++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},A0={readContext:Hn,useCallback:vg,useContext:Hn,useEffect:mh,useImperativeHandle:yg,useInsertionEffect:pg,useLayoutEffect:mg,useMemo:_g,useReducer:fh,useRef:hg,useState:function(){return fh(Ja)},useDebugValue:gh,useDeferredValue:function(r){var s=Wn();return wg(s,xt.memoizedState,r)},useTransition:function(){var r=fh(Ja)[0],s=Wn().memoizedState;return[r,s]},useMutableSource:ig,useSyncExternalStore:sg,useId:Eg,unstable_isNewReconciler:!1},C0={readContext:Hn,useCallback:vg,useContext:Hn,useEffect:mh,useImperativeHandle:yg,useInsertionEffect:pg,useLayoutEffect:mg,useMemo:_g,useReducer:ph,useRef:hg,useState:function(){return ph(Ja)},useDebugValue:gh,useDeferredValue:function(r){var s=Wn();return xt===null?s.memoizedState=r:wg(s,xt.memoizedState,r)},useTransition:function(){var r=ph(Ja)[0],s=Wn().memoizedState;return[r,s]},useMutableSource:ig,useSyncExternalStore:sg,useId:Eg,unstable_isNewReconciler:!1};function cr(r,s){if(r&&r.defaultProps){s=X({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function yh(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:X({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var zu={isMounted:function(r){return(r=r._reactInternals)?tr(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=an(),h=Bi(r),g=ii(c,h);g.payload=s,a!=null&&(g.callback=a),s=Mi(r,g,h),s!==null&&(fr(s,r,h,c),Vu(s,r,h))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=an(),h=Bi(r),g=ii(c,h);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=Mi(r,g,h),s!==null&&(fr(s,r,h,c),Vu(s,r,h))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=an(),c=Bi(r),h=ii(a,c);h.tag=2,s!=null&&(h.callback=s),s=Mi(r,h,c),s!==null&&(fr(s,r,c,a),Vu(s,r,c))}};function Ag(r,s,a,c,h,g,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,w):s.prototype&&s.prototype.isPureReactComponent?!Ua(a,c)||!Ua(h,g):!0}function Cg(r,s,a){var c=!1,h=Oi,g=s.contextType;return typeof g=="object"&&g!==null?g=Hn(g):(h=mn(s)?Os:Kt.current,c=s.contextTypes,g=(c=c!=null)?Fo(r,h):Oi),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=zu,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=h,r.__reactInternalMemoizedMaskedChildContext=g),s}function Rg(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&zu.enqueueReplaceState(s,s.state,null)}function vh(r,s,a,c){var h=r.stateNode;h.props=a,h.state=r.memoizedState,h.refs={},ih(r);var g=s.contextType;typeof g=="object"&&g!==null?h.context=Hn(g):(g=mn(s)?Os:Kt.current,h.context=Fo(r,g)),h.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(yh(r,s,g,a),h.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(s=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),s!==h.state&&zu.enqueueReplaceState(h,h.state,null),Lu(r,a,h,c),h.state=r.memoizedState),typeof h.componentDidMount=="function"&&(r.flags|=4194308)}function Go(r,s){try{var a="",c=s;do a+=Oe(c),c=c.return;while(c);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:h,digest:null}}function _h(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function wh(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var R0=typeof WeakMap=="function"?WeakMap:Map;function kg(r,s,a){a=ii(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Xu||(Xu=!0,Vh=c),wh(r,s)},a}function Pg(r,s,a){a=ii(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var h=s.value;a.payload=function(){return c(h)},a.callback=function(){wh(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){wh(r,s),typeof c!="function"&&(Ui===null?Ui=new Set([this]):Ui.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function Ng(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new R0;var h=new Set;c.set(s,h)}else h=c.get(s),h===void 0&&(h=new Set,c.set(s,h));h.has(a)||(h.add(a),r=B0.bind(null,r,s,a),s.then(r,r))}function xg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function bg(r,s,a,c,h){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=ii(-1,1),s.tag=2,Mi(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=h,r)}var k0=G.ReactCurrentOwner,gn=!1;function on(r,s,a,c){s.child=r===null?Jm(s,null,a,c):qo(s,r.child,a,c)}function Dg(r,s,a,c,h){a=a.render;var g=s.ref;return Wo(s,h),c=dh(r,s,a,c,g,h),a=hh(),r!==null&&!gn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~h,si(r,s,h)):(ct&&a&&Gd(s),s.flags|=1,on(r,s,c,h),s.child)}function Og(r,s,a,c,h){if(r===null){var g=a.type;return typeof g=="function"&&!$h(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,Vg(r,s,g,c,h)):(r=nc(a.type,null,c,s,s.mode,h),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&h)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:Ua,a(w,c)&&r.ref===s.ref)return si(r,s,h)}return s.flags|=1,r=zi(g,c),r.ref=s.ref,r.return=s,s.child=r}function Vg(r,s,a,c,h){if(r!==null){var g=r.memoizedProps;if(Ua(g,c)&&r.ref===s.ref)if(gn=!1,s.pendingProps=c=g,(r.lanes&h)!==0)(r.flags&131072)!==0&&(gn=!0);else return s.lanes=r.lanes,si(r,s,h)}return Eh(r,s,a,c,h)}function Lg(r,s,a){var c=s.pendingProps,h=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(Xo,bn),bn|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,it(Xo,bn),bn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,it(Xo,bn),bn|=c}else g!==null?(c=g.baseLanes|a,s.memoizedState=null):c=a,it(Xo,bn),bn|=c;return on(r,s,h,a),s.child}function Mg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Eh(r,s,a,c,h){var g=mn(a)?Os:Kt.current;return g=Fo(s,g),Wo(s,h),a=dh(r,s,a,c,g,h),c=hh(),r!==null&&!gn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~h,si(r,s,h)):(ct&&c&&Gd(s),s.flags|=1,on(r,s,a,h),s.child)}function jg(r,s,a,c,h){if(mn(a)){var g=!0;Ru(s)}else g=!1;if(Wo(s,h),s.stateNode===null)Hu(r,s),Cg(s,a,c),vh(s,a,c,h),c=!0;else if(r===null){var w=s.stateNode,P=s.memoizedProps;w.props=P;var D=w.context,H=a.contextType;typeof H=="object"&&H!==null?H=Hn(H):(H=mn(a)?Os:Kt.current,H=Fo(s,H));var re=a.getDerivedStateFromProps,se=typeof re=="function"||typeof w.getSnapshotBeforeUpdate=="function";se||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(P!==c||D!==H)&&Rg(s,w,c,H),Li=!1;var te=s.memoizedState;w.state=te,Lu(s,c,w,h),D=s.memoizedState,P!==c||te!==D||pn.current||Li?(typeof re=="function"&&(yh(s,a,re,c),D=s.memoizedState),(P=Li||Ag(s,a,P,c,te,D,H))?(se||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=D),w.props=c,w.state=D,w.context=H,c=P):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{w=s.stateNode,eg(r,s),P=s.memoizedProps,H=s.type===s.elementType?P:cr(s.type,P),w.props=H,se=s.pendingProps,te=w.context,D=a.contextType,typeof D=="object"&&D!==null?D=Hn(D):(D=mn(a)?Os:Kt.current,D=Fo(s,D));var ye=a.getDerivedStateFromProps;(re=typeof ye=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(P!==se||te!==D)&&Rg(s,w,c,D),Li=!1,te=s.memoizedState,w.state=te,Lu(s,c,w,h);var Ee=s.memoizedState;P!==se||te!==Ee||pn.current||Li?(typeof ye=="function"&&(yh(s,a,ye,c),Ee=s.memoizedState),(H=Li||Ag(s,a,H,c,te,Ee,D)||!1)?(re||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,Ee,D),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,Ee,D)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||P===r.memoizedProps&&te===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||P===r.memoizedProps&&te===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=Ee),w.props=c,w.state=Ee,w.context=D,c=H):(typeof w.componentDidUpdate!="function"||P===r.memoizedProps&&te===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||P===r.memoizedProps&&te===r.memoizedState||(s.flags|=1024),c=!1)}return Th(r,s,a,c,g,h)}function Th(r,s,a,c,h,g){Mg(r,s);var w=(s.flags&128)!==0;if(!c&&!w)return h&&zm(s,a,!1),si(r,s,g);c=s.stateNode,k0.current=s;var P=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&w?(s.child=qo(s,r.child,null,g),s.child=qo(s,null,P,g)):on(r,s,P,g),s.memoizedState=c.state,h&&zm(s,a,!0),s.child}function Ug(r){var s=r.stateNode;s.pendingContext?Bm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Bm(r,s.context,!1),sh(r,s.containerInfo)}function Fg(r,s,a,c,h){return zo(),Jd(h),s.flags|=256,on(r,s,a,c),s.child}var Ih={dehydrated:null,treeContext:null,retryLane:0};function Sh(r){return{baseLanes:r,cachePool:null,transitions:null}}function Bg(r,s,a){var c=s.pendingProps,h=dt.current,g=!1,w=(s.flags&128)!==0,P;if((P=w)||(P=r!==null&&r.memoizedState===null?!1:(h&2)!==0),P?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(h|=1),it(dt,h&1),r===null)return Yd(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=c.children,r=c.fallback,g?(c=s.mode,g=s.child,w={mode:"hidden",children:w},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=rc(w,c,0,null),r=qs(r,c,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=Sh(a),s.memoizedState=Ih,r):Ah(s,w));if(h=r.memoizedState,h!==null&&(P=h.dehydrated,P!==null))return P0(r,s,w,c,P,h,a);if(g){g=c.fallback,w=s.mode,h=r.child,P=h.sibling;var D={mode:"hidden",children:c.children};return(w&1)===0&&s.child!==h?(c=s.child,c.childLanes=0,c.pendingProps=D,s.deletions=null):(c=zi(h,D),c.subtreeFlags=h.subtreeFlags&14680064),P!==null?g=zi(P,g):(g=qs(g,w,a,null),g.flags|=2),g.return=s,c.return=s,c.sibling=g,s.child=c,c=g,g=s.child,w=r.child.memoizedState,w=w===null?Sh(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=r.childLanes&~a,s.memoizedState=Ih,c}return g=r.child,r=g.sibling,c=zi(g,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function Ah(r,s){return s=rc({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function qu(r,s,a,c){return c!==null&&Jd(c),qo(s,r.child,null,a),r=Ah(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function P0(r,s,a,c,h,g,w){if(a)return s.flags&256?(s.flags&=-257,c=_h(Error(t(422))),qu(r,s,w,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=c.fallback,h=s.mode,c=rc({mode:"visible",children:c.children},h,0,null),g=qs(g,h,w,null),g.flags|=2,c.return=s,g.return=s,c.sibling=g,s.child=c,(s.mode&1)!==0&&qo(s,r.child,null,w),s.child.memoizedState=Sh(w),s.memoizedState=Ih,g);if((s.mode&1)===0)return qu(r,s,w,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var P=c.dgst;return c=P,g=Error(t(419)),c=_h(g,c,void 0),qu(r,s,w,c)}if(P=(w&r.childLanes)!==0,gn||P){if(c=Lt,c!==null){switch(w&-w){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|w))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,ri(r,h),fr(c,r,h,-1))}return Bh(),c=_h(Error(t(421))),qu(r,s,w,c)}return h.data==="$?"?(s.flags|=128,s.child=r.child,s=$0.bind(null,r),h._reactRetry=s,null):(r=g.treeContext,xn=bi(h.nextSibling),Nn=s,ct=!0,ur=null,r!==null&&(zn[qn++]=ti,zn[qn++]=ni,zn[qn++]=Vs,ti=r.id,ni=r.overflow,Vs=s),s=Ah(s,c.children),s.flags|=4096,s)}function $g(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),nh(r.return,s,a)}function Ch(r,s,a,c,h){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=h)}function zg(r,s,a){var c=s.pendingProps,h=c.revealOrder,g=c.tail;if(on(r,s,c.children,a),c=dt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&$g(r,a,s);else if(r.tag===19)$g(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(it(dt,c),(s.mode&1)===0)s.memoizedState=null;else switch(h){case"forwards":for(a=s.child,h=null;a!==null;)r=a.alternate,r!==null&&Mu(r)===null&&(h=a),a=a.sibling;a=h,a===null?(h=s.child,s.child=null):(h=a.sibling,a.sibling=null),Ch(s,!1,h,a,g);break;case"backwards":for(a=null,h=s.child,s.child=null;h!==null;){if(r=h.alternate,r!==null&&Mu(r)===null){s.child=h;break}r=h.sibling,h.sibling=a,a=h,h=r}Ch(s,!0,a,null,g);break;case"together":Ch(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Hu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function si(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),Fs|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=zi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=zi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function N0(r,s,a){switch(s.tag){case 3:Ug(s),zo();break;case 5:rg(s);break;case 1:mn(s.type)&&Ru(s);break;case 4:sh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,h=s.memoizedProps.value;it(Du,c._currentValue),c._currentValue=h;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(it(dt,dt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Bg(r,s,a):(it(dt,dt.current&1),r=si(r,s,a),r!==null?r.sibling:null);it(dt,dt.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(r.flags&128)!==0){if(c)return zg(r,s,a);s.flags|=128}if(h=s.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),it(dt,dt.current),c)break;return null;case 22:case 23:return s.lanes=0,Lg(r,s,a)}return si(r,s,a)}var qg,Rh,Hg,Wg;qg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Rh=function(){},Hg=function(r,s,a,c){var h=r.memoizedProps;if(h!==c){r=s.stateNode,js(Rr.current);var g=null;switch(a){case"input":h=Jn(r,h),c=Jn(r,c),g=[];break;case"select":h=X({},h,{value:void 0}),c=X({},c,{value:void 0}),g=[];break;case"textarea":h=_i(r,h),c=_i(r,c),g=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=Su)}z(a,c);var w;a=null;for(H in h)if(!c.hasOwnProperty(H)&&h.hasOwnProperty(H)&&h[H]!=null)if(H==="style"){var P=h[H];for(w in P)P.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else H!=="dangerouslySetInnerHTML"&&H!=="children"&&H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&H!=="autoFocus"&&(o.hasOwnProperty(H)?g||(g=[]):(g=g||[]).push(H,null));for(H in c){var D=c[H];if(P=h!=null?h[H]:void 0,c.hasOwnProperty(H)&&D!==P&&(D!=null||P!=null))if(H==="style")if(P){for(w in P)!P.hasOwnProperty(w)||D&&D.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in D)D.hasOwnProperty(w)&&P[w]!==D[w]&&(a||(a={}),a[w]=D[w])}else a||(g||(g=[]),g.push(H,a)),a=D;else H==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,P=P?P.__html:void 0,D!=null&&P!==D&&(g=g||[]).push(H,D)):H==="children"?typeof D!="string"&&typeof D!="number"||(g=g||[]).push(H,""+D):H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&(o.hasOwnProperty(H)?(D!=null&&H==="onScroll"&&ot("scroll",r),g||P===D||(g=[])):(g=g||[]).push(H,D))}a&&(g=g||[]).push("style",a);var H=g;(s.updateQueue=H)&&(s.flags|=4)}},Wg=function(r,s,a,c){a!==c&&(s.flags|=4)};function el(r,s){if(!ct)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Qt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var h=r.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=r,h=h.sibling;else for(h=r.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=r,h=h.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function x0(r,s,a){var c=s.pendingProps;switch(Qd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(s),null;case 1:return mn(s.type)&&Cu(),Qt(s),null;case 3:return c=s.stateNode,Ko(),at(pn),at(Kt),lh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(xu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,ur!==null&&(jh(ur),ur=null))),Rh(r,s),Qt(s),null;case 5:oh(s);var h=js(Qa.current);if(a=s.type,r!==null&&s.stateNode!=null)Hg(r,s,a,c,h),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Qt(s),null}if(r=js(Rr.current),xu(s)){c=s.stateNode,a=s.type;var g=s.memoizedProps;switch(c[Cr]=s,c[qa]=g,r=(s.mode&1)!==0,a){case"dialog":ot("cancel",c),ot("close",c);break;case"iframe":case"object":case"embed":ot("load",c);break;case"video":case"audio":for(h=0;h<Ba.length;h++)ot(Ba[h],c);break;case"source":ot("error",c);break;case"img":case"image":case"link":ot("error",c),ot("load",c);break;case"details":ot("toggle",c);break;case"input":Br(c,g),ot("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},ot("invalid",c);break;case"textarea":zr(c,g),ot("invalid",c)}z(a,g),h=null;for(var w in g)if(g.hasOwnProperty(w)){var P=g[w];w==="children"?typeof P=="string"?c.textContent!==P&&(g.suppressHydrationWarning!==!0&&Iu(c.textContent,P,r),h=["children",P]):typeof P=="number"&&c.textContent!==""+P&&(g.suppressHydrationWarning!==!0&&Iu(c.textContent,P,r),h=["children",""+P]):o.hasOwnProperty(w)&&P!=null&&w==="onScroll"&&ot("scroll",c)}switch(a){case"input":In(c),ys(c,g,!0);break;case"textarea":In(c),Hr(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Su)}c=h,s.updateQueue=c,c!==null&&(s.flags|=4)}else{w=h.nodeType===9?h:h.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=pt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=w.createElement(a,{is:c.is}):(r=w.createElement(a),a==="select"&&(w=r,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):r=w.createElementNS(r,a),r[Cr]=s,r[qa]=c,qg(r,s,!1,!1),s.stateNode=r;e:{switch(w=ae(a,c),a){case"dialog":ot("cancel",r),ot("close",r),h=c;break;case"iframe":case"object":case"embed":ot("load",r),h=c;break;case"video":case"audio":for(h=0;h<Ba.length;h++)ot(Ba[h],r);h=c;break;case"source":ot("error",r),h=c;break;case"img":case"image":case"link":ot("error",r),ot("load",r),h=c;break;case"details":ot("toggle",r),h=c;break;case"input":Br(r,c),h=Jn(r,c),ot("invalid",r);break;case"option":h=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},h=X({},c,{value:void 0}),ot("invalid",r);break;case"textarea":zr(r,c),h=_i(r,c),ot("invalid",r);break;default:h=c}z(a,h),P=h;for(g in P)if(P.hasOwnProperty(g)){var D=P[g];g==="style"?wi(r,D):g==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,D!=null&&vs(r,D)):g==="children"?typeof D=="string"?(a!=="textarea"||D!=="")&&Un(r,D):typeof D=="number"&&Un(r,""+D):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?D!=null&&g==="onScroll"&&ot("scroll",r):D!=null&&ie(r,g,D,w))}switch(a){case"input":In(r),ys(r,c,!1);break;case"textarea":In(r),Hr(r);break;case"option":c.value!=null&&r.setAttribute("value",""+qe(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?nn(r,!!c.multiple,g,!1):c.defaultValue!=null&&nn(r,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(r.onclick=Su)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Qt(s),null;case 6:if(r&&s.stateNode!=null)Wg(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=js(Qa.current),js(Rr.current),xu(s)){if(c=s.stateNode,a=s.memoizedProps,c[Cr]=s,(g=c.nodeValue!==a)&&(r=Nn,r!==null))switch(r.tag){case 3:Iu(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Iu(c.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Cr]=s,s.stateNode=c}return Qt(s),null;case 13:if(at(dt),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(ct&&xn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Qm(),zo(),s.flags|=98560,g=!1;else if(g=xu(s),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Cr]=s}else zo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Qt(s),g=!1}else ur!==null&&(jh(ur),ur=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(dt.current&1)!==0?bt===0&&(bt=3):Bh())),s.updateQueue!==null&&(s.flags|=4),Qt(s),null);case 4:return Ko(),Rh(r,s),r===null&&$a(s.stateNode.containerInfo),Qt(s),null;case 10:return th(s.type._context),Qt(s),null;case 17:return mn(s.type)&&Cu(),Qt(s),null;case 19:if(at(dt),g=s.memoizedState,g===null)return Qt(s),null;if(c=(s.flags&128)!==0,w=g.rendering,w===null)if(c)el(g,!1);else{if(bt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(w=Mu(r),w!==null){for(s.flags|=128,el(g,!1),c=w.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)g=a,r=c,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,r=w.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return it(dt,dt.current&1|2),s.child}r=r.sibling}g.tail!==null&&rt()>Yo&&(s.flags|=128,c=!0,el(g,!1),s.lanes=4194304)}else{if(!c)if(r=Mu(w),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),el(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!ct)return Qt(s),null}else 2*rt()-g.renderingStartTime>Yo&&a!==1073741824&&(s.flags|=128,c=!0,el(g,!1),s.lanes=4194304);g.isBackwards?(w.sibling=s.child,s.child=w):(a=g.last,a!==null?a.sibling=w:s.child=w,g.last=w)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=rt(),s.sibling=null,a=dt.current,it(dt,c?a&1|2:a&1),s):(Qt(s),null);case 22:case 23:return Fh(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(bn&1073741824)!==0&&(Qt(s),s.subtreeFlags&6&&(s.flags|=8192)):Qt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function b0(r,s){switch(Qd(s),s.tag){case 1:return mn(s.type)&&Cu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Ko(),at(pn),at(Kt),lh(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return oh(s),null;case 13:if(at(dt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));zo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return at(dt),null;case 4:return Ko(),null;case 10:return th(s.type._context),null;case 22:case 23:return Fh(),null;case 24:return null;default:return null}}var Wu=!1,Xt=!1,D0=typeof WeakSet=="function"?WeakSet:Set,we=null;function Qo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){gt(r,s,c)}else a.current=null}function kh(r,s,a){try{a()}catch(c){gt(r,s,c)}}var Kg=!1;function O0(r,s){if(Fd=Pi,r=Am(),bd(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,P=-1,D=-1,H=0,re=0,se=r,te=null;t:for(;;){for(var ye;se!==a||h!==0&&se.nodeType!==3||(P=w+h),se!==g||c!==0&&se.nodeType!==3||(D=w+c),se.nodeType===3&&(w+=se.nodeValue.length),(ye=se.firstChild)!==null;)te=se,se=ye;for(;;){if(se===r)break t;if(te===a&&++H===h&&(P=w),te===g&&++re===c&&(D=w),(ye=se.nextSibling)!==null)break;se=te,te=se.parentNode}se=ye}a=P===-1||D===-1?null:{start:P,end:D}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bd={focusedElem:r,selectionRange:a},Pi=!1,we=s;we!==null;)if(s=we,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,we=r;else for(;we!==null;){s=we;try{var Ee=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Ee!==null){var Ie=Ee.memoizedProps,Et=Ee.memoizedState,F=s.stateNode,M=F.getSnapshotBeforeUpdate(s.elementType===s.type?Ie:cr(s.type,Ie),Et);F.__reactInternalSnapshotBeforeUpdate=M}break;case 3:var B=s.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(le){gt(s,s.return,le)}if(r=s.sibling,r!==null){r.return=s.return,we=r;break}we=s.return}return Ee=Kg,Kg=!1,Ee}function tl(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&r)===r){var g=h.destroy;h.destroy=void 0,g!==void 0&&kh(s,a,g)}h=h.next}while(h!==c)}}function Ku(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function Ph(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Gg(r){var s=r.alternate;s!==null&&(r.alternate=null,Gg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Cr],delete s[qa],delete s[Hd],delete s[g0],delete s[y0])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Qg(r){return r.tag===5||r.tag===3||r.tag===4}function Xg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Qg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Nh(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Su));else if(c!==4&&(r=r.child,r!==null))for(Nh(r,s,a),r=r.sibling;r!==null;)Nh(r,s,a),r=r.sibling}function xh(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(xh(r,s,a),r=r.sibling;r!==null;)xh(r,s,a),r=r.sibling}var $t=null,dr=!1;function ji(r,s,a){for(a=a.child;a!==null;)Yg(r,s,a),a=a.sibling}function Yg(r,s,a){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(Cs,a)}catch{}switch(a.tag){case 5:Xt||Qo(a,s);case 6:var c=$t,h=dr;$t=null,ji(r,s,a),$t=c,dr=h,$t!==null&&(dr?(r=$t,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):$t.removeChild(a.stateNode));break;case 18:$t!==null&&(dr?(r=$t,a=a.stateNode,r.nodeType===8?qd(r.parentNode,a):r.nodeType===1&&qd(r,a),or(r)):qd($t,a.stateNode));break;case 4:c=$t,h=dr,$t=a.stateNode.containerInfo,dr=!0,ji(r,s,a),$t=c,dr=h;break;case 0:case 11:case 14:case 15:if(!Xt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var g=h,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&kh(a,s,w),h=h.next}while(h!==c)}ji(r,s,a);break;case 1:if(!Xt&&(Qo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(P){gt(a,s,P)}ji(r,s,a);break;case 21:ji(r,s,a);break;case 22:a.mode&1?(Xt=(c=Xt)||a.memoizedState!==null,ji(r,s,a),Xt=c):ji(r,s,a);break;default:ji(r,s,a)}}function Jg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new D0),s.forEach(function(c){var h=z0.bind(null,r,c);a.has(c)||(a.add(c),c.then(h,h))})}}function hr(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var g=r,w=s,P=w;e:for(;P!==null;){switch(P.tag){case 5:$t=P.stateNode,dr=!1;break e;case 3:$t=P.stateNode.containerInfo,dr=!0;break e;case 4:$t=P.stateNode.containerInfo,dr=!0;break e}P=P.return}if($t===null)throw Error(t(160));Yg(g,w,h),$t=null,dr=!1;var D=h.alternate;D!==null&&(D.return=null),h.return=null}catch(H){gt(h,s,H)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Zg(s,r),s=s.sibling}function Zg(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(hr(s,r),Pr(r),c&4){try{tl(3,r,r.return),Ku(3,r)}catch(Ie){gt(r,r.return,Ie)}try{tl(5,r,r.return)}catch(Ie){gt(r,r.return,Ie)}}break;case 1:hr(s,r),Pr(r),c&512&&a!==null&&Qo(a,a.return);break;case 5:if(hr(s,r),Pr(r),c&512&&a!==null&&Qo(a,a.return),r.flags&32){var h=r.stateNode;try{Un(h,"")}catch(Ie){gt(r,r.return,Ie)}}if(c&4&&(h=r.stateNode,h!=null)){var g=r.memoizedProps,w=a!==null?a.memoizedProps:g,P=r.type,D=r.updateQueue;if(r.updateQueue=null,D!==null)try{P==="input"&&g.type==="radio"&&g.name!=null&&_r(h,g),ae(P,w);var H=ae(P,g);for(w=0;w<D.length;w+=2){var re=D[w],se=D[w+1];re==="style"?wi(h,se):re==="dangerouslySetInnerHTML"?vs(h,se):re==="children"?Un(h,se):ie(h,re,se,H)}switch(P){case"input":gs(h,g);break;case"textarea":qr(h,g);break;case"select":var te=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var ye=g.value;ye!=null?nn(h,!!g.multiple,ye,!1):te!==!!g.multiple&&(g.defaultValue!=null?nn(h,!!g.multiple,g.defaultValue,!0):nn(h,!!g.multiple,g.multiple?[]:"",!1))}h[qa]=g}catch(Ie){gt(r,r.return,Ie)}}break;case 6:if(hr(s,r),Pr(r),c&4){if(r.stateNode===null)throw Error(t(162));h=r.stateNode,g=r.memoizedProps;try{h.nodeValue=g}catch(Ie){gt(r,r.return,Ie)}}break;case 3:if(hr(s,r),Pr(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{or(s.containerInfo)}catch(Ie){gt(r,r.return,Ie)}break;case 4:hr(s,r),Pr(r);break;case 13:hr(s,r),Pr(r),h=r.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(Oh=rt())),c&4&&Jg(r);break;case 22:if(re=a!==null&&a.memoizedState!==null,r.mode&1?(Xt=(H=Xt)||re,hr(s,r),Xt=H):hr(s,r),Pr(r),c&8192){if(H=r.memoizedState!==null,(r.stateNode.isHidden=H)&&!re&&(r.mode&1)!==0)for(we=r,re=r.child;re!==null;){for(se=we=re;we!==null;){switch(te=we,ye=te.child,te.tag){case 0:case 11:case 14:case 15:tl(4,te,te.return);break;case 1:Qo(te,te.return);var Ee=te.stateNode;if(typeof Ee.componentWillUnmount=="function"){c=te,a=te.return;try{s=c,Ee.props=s.memoizedProps,Ee.state=s.memoizedState,Ee.componentWillUnmount()}catch(Ie){gt(c,a,Ie)}}break;case 5:Qo(te,te.return);break;case 22:if(te.memoizedState!==null){ny(se);continue}}ye!==null?(ye.return=te,we=ye):ny(se)}re=re.sibling}e:for(re=null,se=r;;){if(se.tag===5){if(re===null){re=se;try{h=se.stateNode,H?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(P=se.stateNode,D=se.memoizedProps.style,w=D!=null&&D.hasOwnProperty("display")?D.display:null,P.style.display=_s("display",w))}catch(Ie){gt(r,r.return,Ie)}}}else if(se.tag===6){if(re===null)try{se.stateNode.nodeValue=H?"":se.memoizedProps}catch(Ie){gt(r,r.return,Ie)}}else if((se.tag!==22&&se.tag!==23||se.memoizedState===null||se===r)&&se.child!==null){se.child.return=se,se=se.child;continue}if(se===r)break e;for(;se.sibling===null;){if(se.return===null||se.return===r)break e;re===se&&(re=null),se=se.return}re===se&&(re=null),se.sibling.return=se.return,se=se.sibling}}break;case 19:hr(s,r),Pr(r),c&4&&Jg(r);break;case 21:break;default:hr(s,r),Pr(r)}}function Pr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Qg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(Un(h,""),c.flags&=-33);var g=Xg(r);xh(r,g,h);break;case 3:case 4:var w=c.stateNode.containerInfo,P=Xg(r);Nh(r,P,w);break;default:throw Error(t(161))}}catch(D){gt(r,r.return,D)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function V0(r,s,a){we=r,ey(r)}function ey(r,s,a){for(var c=(r.mode&1)!==0;we!==null;){var h=we,g=h.child;if(h.tag===22&&c){var w=h.memoizedState!==null||Wu;if(!w){var P=h.alternate,D=P!==null&&P.memoizedState!==null||Xt;P=Wu;var H=Xt;if(Wu=w,(Xt=D)&&!H)for(we=h;we!==null;)w=we,D=w.child,w.tag===22&&w.memoizedState!==null?ry(h):D!==null?(D.return=w,we=D):ry(h);for(;g!==null;)we=g,ey(g),g=g.sibling;we=h,Wu=P,Xt=H}ty(r)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,we=g):ty(r)}}function ty(r){for(;we!==null;){var s=we;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Xt||Ku(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Xt)if(a===null)c.componentDidMount();else{var h=s.elementType===s.type?a.memoizedProps:cr(s.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&ng(s,g,c);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}ng(s,w,a)}break;case 5:var P=s.stateNode;if(a===null&&s.flags&4){a=P;var D=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":D.autoFocus&&a.focus();break;case"img":D.src&&(a.src=D.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var H=s.alternate;if(H!==null){var re=H.memoizedState;if(re!==null){var se=re.dehydrated;se!==null&&or(se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Xt||s.flags&512&&Ph(s)}catch(te){gt(s,s.return,te)}}if(s===r){we=null;break}if(a=s.sibling,a!==null){a.return=s.return,we=a;break}we=s.return}}function ny(r){for(;we!==null;){var s=we;if(s===r){we=null;break}var a=s.sibling;if(a!==null){a.return=s.return,we=a;break}we=s.return}}function ry(r){for(;we!==null;){var s=we;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Ku(4,s)}catch(D){gt(s,a,D)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var h=s.return;try{c.componentDidMount()}catch(D){gt(s,h,D)}}var g=s.return;try{Ph(s)}catch(D){gt(s,g,D)}break;case 5:var w=s.return;try{Ph(s)}catch(D){gt(s,w,D)}}}catch(D){gt(s,s.return,D)}if(s===r){we=null;break}var P=s.sibling;if(P!==null){P.return=s.return,we=P;break}we=s.return}}var L0=Math.ceil,Gu=G.ReactCurrentDispatcher,bh=G.ReactCurrentOwner,Kn=G.ReactCurrentBatchConfig,Ge=0,Lt=null,Ct=null,zt=0,bn=0,Xo=Di(0),bt=0,nl=null,Fs=0,Qu=0,Dh=0,rl=null,yn=null,Oh=0,Yo=1/0,oi=null,Xu=!1,Vh=null,Ui=null,Yu=!1,Fi=null,Ju=0,il=0,Lh=null,Zu=-1,ec=0;function an(){return(Ge&6)!==0?rt():Zu!==-1?Zu:Zu=rt()}function Bi(r){return(r.mode&1)===0?1:(Ge&2)!==0&&zt!==0?zt&-zt:_0.transition!==null?(ec===0&&(ec=ks()),ec):(r=He,r!==0||(r=window.event,r=r===void 0?16:ba(r.type)),r)}function fr(r,s,a,c){if(50<il)throw il=0,Lh=null,Error(t(185));Ai(r,a,c),((Ge&2)===0||r!==Lt)&&(r===Lt&&((Ge&2)===0&&(Qu|=a),bt===4&&$i(r,zt)),vn(r,c),a===1&&Ge===0&&(s.mode&1)===0&&(Yo=rt()+500,ku&&Vi()))}function vn(r,s){var a=r.callbackNode;Gr(r,s);var c=Rs(r,r===Lt?zt:0);if(c===0)a!==null&&Ra(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&Ra(a),s===1)r.tag===0?v0(sy.bind(null,r)):qm(sy.bind(null,r)),p0(function(){(Ge&6)===0&&Vi()}),a=null;else{switch(Ri(c)){case 1:a=As;break;case 4:a=Ti;break;case 16:a=Fn;break;case 536870912:a=eu;break;default:a=Fn}a=fy(a,iy.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function iy(r,s){if(Zu=-1,ec=0,(Ge&6)!==0)throw Error(t(327));var a=r.callbackNode;if(Jo()&&r.callbackNode!==a)return null;var c=Rs(r,r===Lt?zt:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||s)s=tc(r,c);else{s=c;var h=Ge;Ge|=2;var g=ay();(Lt!==r||zt!==s)&&(oi=null,Yo=rt()+500,$s(r,s));do try{U0();break}catch(P){oy(r,P)}while(!0);eh(),Gu.current=g,Ge=h,Ct!==null?s=0:(Lt=null,zt=0,s=bt)}if(s!==0){if(s===2&&(h=Rn(r),h!==0&&(c=h,s=Mh(r,h))),s===1)throw a=nl,$s(r,0),$i(r,c),vn(r,rt()),a;if(s===6)$i(r,c);else{if(h=r.current.alternate,(c&30)===0&&!M0(h)&&(s=tc(r,c),s===2&&(g=Rn(r),g!==0&&(c=g,s=Mh(r,g))),s===1))throw a=nl,$s(r,0),$i(r,c),vn(r,rt()),a;switch(r.finishedWork=h,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:zs(r,yn,oi);break;case 3:if($i(r,c),(c&130023424)===c&&(s=Oh+500-rt(),10<s)){if(Rs(r,0)!==0)break;if(h=r.suspendedLanes,(h&c)!==c){an(),r.pingedLanes|=r.suspendedLanes&h;break}r.timeoutHandle=zd(zs.bind(null,r,yn,oi),s);break}zs(r,yn,oi);break;case 4:if($i(r,c),(c&4194240)===c)break;for(s=r.eventTimes,h=-1;0<c;){var w=31-rn(c);g=1<<w,w=s[w],w>h&&(h=w),c&=~g}if(c=h,c=rt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*L0(c/1960))-c,10<c){r.timeoutHandle=zd(zs.bind(null,r,yn,oi),c);break}zs(r,yn,oi);break;case 5:zs(r,yn,oi);break;default:throw Error(t(329))}}}return vn(r,rt()),r.callbackNode===a?iy.bind(null,r):null}function Mh(r,s){var a=rl;return r.current.memoizedState.isDehydrated&&($s(r,s).flags|=256),r=tc(r,s),r!==2&&(s=yn,yn=a,s!==null&&jh(s)),r}function jh(r){yn===null?yn=r:yn.push.apply(yn,r)}function M0(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],g=h.getSnapshot;h=h.value;try{if(!lr(g(),h))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function $i(r,s){for(s&=~Dh,s&=~Qu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-rn(s),c=1<<a;r[a]=-1,s&=~c}}function sy(r){if((Ge&6)!==0)throw Error(t(327));Jo();var s=Rs(r,0);if((s&1)===0)return vn(r,rt()),null;var a=tc(r,s);if(r.tag!==0&&a===2){var c=Rn(r);c!==0&&(s=c,a=Mh(r,c))}if(a===1)throw a=nl,$s(r,0),$i(r,s),vn(r,rt()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,zs(r,yn,oi),vn(r,rt()),null}function Uh(r,s){var a=Ge;Ge|=1;try{return r(s)}finally{Ge=a,Ge===0&&(Yo=rt()+500,ku&&Vi())}}function Bs(r){Fi!==null&&Fi.tag===0&&(Ge&6)===0&&Jo();var s=Ge;Ge|=1;var a=Kn.transition,c=He;try{if(Kn.transition=null,He=1,r)return r()}finally{He=c,Kn.transition=a,Ge=s,(Ge&6)===0&&Vi()}}function Fh(){bn=Xo.current,at(Xo)}function $s(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,f0(a)),Ct!==null)for(a=Ct.return;a!==null;){var c=a;switch(Qd(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Cu();break;case 3:Ko(),at(pn),at(Kt),lh();break;case 5:oh(c);break;case 4:Ko();break;case 13:at(dt);break;case 19:at(dt);break;case 10:th(c.type._context);break;case 22:case 23:Fh()}a=a.return}if(Lt=r,Ct=r=zi(r.current,null),zt=bn=s,bt=0,nl=null,Dh=Qu=Fs=0,yn=rl=null,Ms!==null){for(s=0;s<Ms.length;s++)if(a=Ms[s],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,g=a.pending;if(g!==null){var w=g.next;g.next=h,c.next=w}a.pending=c}Ms=null}return r}function oy(r,s){do{var a=Ct;try{if(eh(),ju.current=$u,Uu){for(var c=ht.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}Uu=!1}if(Us=0,Vt=xt=ht=null,Xa=!1,Ya=0,bh.current=null,a===null||a.return===null){bt=1,nl=s,Ct=null;break}e:{var g=r,w=a.return,P=a,D=s;if(s=zt,P.flags|=32768,D!==null&&typeof D=="object"&&typeof D.then=="function"){var H=D,re=P,se=re.tag;if((re.mode&1)===0&&(se===0||se===11||se===15)){var te=re.alternate;te?(re.updateQueue=te.updateQueue,re.memoizedState=te.memoizedState,re.lanes=te.lanes):(re.updateQueue=null,re.memoizedState=null)}var ye=xg(w);if(ye!==null){ye.flags&=-257,bg(ye,w,P,g,s),ye.mode&1&&Ng(g,H,s),s=ye,D=H;var Ee=s.updateQueue;if(Ee===null){var Ie=new Set;Ie.add(D),s.updateQueue=Ie}else Ee.add(D);break e}else{if((s&1)===0){Ng(g,H,s),Bh();break e}D=Error(t(426))}}else if(ct&&P.mode&1){var Et=xg(w);if(Et!==null){(Et.flags&65536)===0&&(Et.flags|=256),bg(Et,w,P,g,s),Jd(Go(D,P));break e}}g=D=Go(D,P),bt!==4&&(bt=2),rl===null?rl=[g]:rl.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var F=kg(g,D,s);tg(g,F);break e;case 1:P=D;var M=g.type,B=g.stateNode;if((g.flags&128)===0&&(typeof M.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(Ui===null||!Ui.has(B)))){g.flags|=65536,s&=-s,g.lanes|=s;var le=Pg(g,P,s);tg(g,le);break e}}g=g.return}while(g!==null)}uy(a)}catch(Se){s=Se,Ct===a&&a!==null&&(Ct=a=a.return);continue}break}while(!0)}function ay(){var r=Gu.current;return Gu.current=$u,r===null?$u:r}function Bh(){(bt===0||bt===3||bt===2)&&(bt=4),Lt===null||(Fs&268435455)===0&&(Qu&268435455)===0||$i(Lt,zt)}function tc(r,s){var a=Ge;Ge|=2;var c=ay();(Lt!==r||zt!==s)&&(oi=null,$s(r,s));do try{j0();break}catch(h){oy(r,h)}while(!0);if(eh(),Ge=a,Gu.current=c,Ct!==null)throw Error(t(261));return Lt=null,zt=0,bt}function j0(){for(;Ct!==null;)ly(Ct)}function U0(){for(;Ct!==null&&!Jl();)ly(Ct)}function ly(r){var s=hy(r.alternate,r,bn);r.memoizedProps=r.pendingProps,s===null?uy(r):Ct=s,bh.current=null}function uy(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=x0(a,s,bn),a!==null){Ct=a;return}}else{if(a=b0(a,s),a!==null){a.flags&=32767,Ct=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{bt=6,Ct=null;return}}if(s=s.sibling,s!==null){Ct=s;return}Ct=s=r}while(s!==null);bt===0&&(bt=5)}function zs(r,s,a){var c=He,h=Kn.transition;try{Kn.transition=null,He=1,F0(r,s,a,c)}finally{Kn.transition=h,He=c}return null}function F0(r,s,a,c){do Jo();while(Fi!==null);if((Ge&6)!==0)throw Error(t(327));a=r.finishedWork;var h=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(tt(r,g),r===Lt&&(Ct=Lt=null,zt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Yu||(Yu=!0,fy(Fn,function(){return Jo(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Kn.transition,Kn.transition=null;var w=He;He=1;var P=Ge;Ge|=4,bh.current=null,O0(r,a),Zg(a,r),o0(Bd),Pi=!!Fd,Bd=Fd=null,r.current=a,V0(a),Sd(),Ge=P,He=w,Kn.transition=g}else r.current=a;if(Yu&&(Yu=!1,Fi=r,Ju=h),g=r.pendingLanes,g===0&&(Ui=null),tu(a.stateNode),vn(r,rt()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)h=s[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(Xu)throw Xu=!1,r=Vh,Vh=null,r;return(Ju&1)!==0&&r.tag!==0&&Jo(),g=r.pendingLanes,(g&1)!==0?r===Lh?il++:(il=0,Lh=r):il=0,Vi(),null}function Jo(){if(Fi!==null){var r=Ri(Ju),s=Kn.transition,a=He;try{if(Kn.transition=null,He=16>r?16:r,Fi===null)var c=!1;else{if(r=Fi,Fi=null,Ju=0,(Ge&6)!==0)throw Error(t(331));var h=Ge;for(Ge|=4,we=r.current;we!==null;){var g=we,w=g.child;if((we.flags&16)!==0){var P=g.deletions;if(P!==null){for(var D=0;D<P.length;D++){var H=P[D];for(we=H;we!==null;){var re=we;switch(re.tag){case 0:case 11:case 15:tl(8,re,g)}var se=re.child;if(se!==null)se.return=re,we=se;else for(;we!==null;){re=we;var te=re.sibling,ye=re.return;if(Gg(re),re===H){we=null;break}if(te!==null){te.return=ye,we=te;break}we=ye}}}var Ee=g.alternate;if(Ee!==null){var Ie=Ee.child;if(Ie!==null){Ee.child=null;do{var Et=Ie.sibling;Ie.sibling=null,Ie=Et}while(Ie!==null)}}we=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,we=w;else e:for(;we!==null;){if(g=we,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:tl(9,g,g.return)}var F=g.sibling;if(F!==null){F.return=g.return,we=F;break e}we=g.return}}var M=r.current;for(we=M;we!==null;){w=we;var B=w.child;if((w.subtreeFlags&2064)!==0&&B!==null)B.return=w,we=B;else e:for(w=M;we!==null;){if(P=we,(P.flags&2048)!==0)try{switch(P.tag){case 0:case 11:case 15:Ku(9,P)}}catch(Se){gt(P,P.return,Se)}if(P===w){we=null;break e}var le=P.sibling;if(le!==null){le.return=P.return,we=le;break e}we=P.return}}if(Ge=h,Vi(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(Cs,r)}catch{}c=!0}return c}finally{He=a,Kn.transition=s}}return!1}function cy(r,s,a){s=Go(a,s),s=kg(r,s,1),r=Mi(r,s,1),s=an(),r!==null&&(Ai(r,1,s),vn(r,s))}function gt(r,s,a){if(r.tag===3)cy(r,r,a);else for(;s!==null;){if(s.tag===3){cy(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ui===null||!Ui.has(c))){r=Go(a,r),r=Pg(s,r,1),s=Mi(s,r,1),r=an(),s!==null&&(Ai(s,1,r),vn(s,r));break}}s=s.return}}function B0(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=an(),r.pingedLanes|=r.suspendedLanes&a,Lt===r&&(zt&a)===a&&(bt===4||bt===3&&(zt&130023424)===zt&&500>rt()-Oh?$s(r,0):Dh|=a),vn(r,s)}function dy(r,s){s===0&&((r.mode&1)===0?s=1:(s=Eo,Eo<<=1,(Eo&130023424)===0&&(Eo=4194304)));var a=an();r=ri(r,s),r!==null&&(Ai(r,s,a),vn(r,a))}function $0(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),dy(r,a)}function z0(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,h=r.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),dy(r,a)}var hy;hy=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||pn.current)gn=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return gn=!1,N0(r,s,a);gn=(r.flags&131072)!==0}else gn=!1,ct&&(s.flags&1048576)!==0&&Hm(s,Nu,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Hu(r,s),r=s.pendingProps;var h=Fo(s,Kt.current);Wo(s,a),h=dh(null,s,c,r,h,a);var g=hh();return s.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,mn(c)?(g=!0,Ru(s)):g=!1,s.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,ih(s),h.updater=zu,s.stateNode=h,h._reactInternals=s,vh(s,c,r,a),s=Th(null,s,c,!0,g,a)):(s.tag=0,ct&&g&&Gd(s),on(null,s,h,a),s=s.child),s;case 16:c=s.elementType;e:{switch(Hu(r,s),r=s.pendingProps,h=c._init,c=h(c._payload),s.type=c,h=s.tag=H0(c),r=cr(c,r),h){case 0:s=Eh(null,s,c,r,a);break e;case 1:s=jg(null,s,c,r,a);break e;case 11:s=Dg(null,s,c,r,a);break e;case 14:s=Og(null,s,c,cr(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,h=s.pendingProps,h=s.elementType===c?h:cr(c,h),Eh(r,s,c,h,a);case 1:return c=s.type,h=s.pendingProps,h=s.elementType===c?h:cr(c,h),jg(r,s,c,h,a);case 3:e:{if(Ug(s),r===null)throw Error(t(387));c=s.pendingProps,g=s.memoizedState,h=g.element,eg(r,s),Lu(s,c,null,a);var w=s.memoizedState;if(c=w.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){h=Go(Error(t(423)),s),s=Fg(r,s,c,a,h);break e}else if(c!==h){h=Go(Error(t(424)),s),s=Fg(r,s,c,a,h);break e}else for(xn=bi(s.stateNode.containerInfo.firstChild),Nn=s,ct=!0,ur=null,a=Jm(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(zo(),c===h){s=si(r,s,a);break e}on(r,s,c,a)}s=s.child}return s;case 5:return rg(s),r===null&&Yd(s),c=s.type,h=s.pendingProps,g=r!==null?r.memoizedProps:null,w=h.children,$d(c,h)?w=null:g!==null&&$d(c,g)&&(s.flags|=32),Mg(r,s),on(r,s,w,a),s.child;case 6:return r===null&&Yd(s),null;case 13:return Bg(r,s,a);case 4:return sh(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=qo(s,null,c,a):on(r,s,c,a),s.child;case 11:return c=s.type,h=s.pendingProps,h=s.elementType===c?h:cr(c,h),Dg(r,s,c,h,a);case 7:return on(r,s,s.pendingProps,a),s.child;case 8:return on(r,s,s.pendingProps.children,a),s.child;case 12:return on(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,h=s.pendingProps,g=s.memoizedProps,w=h.value,it(Du,c._currentValue),c._currentValue=w,g!==null)if(lr(g.value,w)){if(g.children===h.children&&!pn.current){s=si(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var P=g.dependencies;if(P!==null){w=g.child;for(var D=P.firstContext;D!==null;){if(D.context===c){if(g.tag===1){D=ii(-1,a&-a),D.tag=2;var H=g.updateQueue;if(H!==null){H=H.shared;var re=H.pending;re===null?D.next=D:(D.next=re.next,re.next=D),H.pending=D}}g.lanes|=a,D=g.alternate,D!==null&&(D.lanes|=a),nh(g.return,a,s),P.lanes|=a;break}D=D.next}}else if(g.tag===10)w=g.type===s.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,P=w.alternate,P!==null&&(P.lanes|=a),nh(w,a,s),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===s){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}on(r,s,h.children,a),s=s.child}return s;case 9:return h=s.type,c=s.pendingProps.children,Wo(s,a),h=Hn(h),c=c(h),s.flags|=1,on(r,s,c,a),s.child;case 14:return c=s.type,h=cr(c,s.pendingProps),h=cr(c.type,h),Og(r,s,c,h,a);case 15:return Vg(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,h=s.pendingProps,h=s.elementType===c?h:cr(c,h),Hu(r,s),s.tag=1,mn(c)?(r=!0,Ru(s)):r=!1,Wo(s,a),Cg(s,c,h),vh(s,c,h,a),Th(null,s,c,!0,r,a);case 19:return zg(r,s,a);case 22:return Lg(r,s,a)}throw Error(t(156,s.tag))};function fy(r,s){return _o(r,s)}function q0(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(r,s,a,c){return new q0(r,s,a,c)}function $h(r){return r=r.prototype,!(!r||!r.isReactComponent)}function H0(r){if(typeof r=="function")return $h(r)?1:0;if(r!=null){if(r=r.$$typeof,r===C)return 11;if(r===$)return 14}return 2}function zi(r,s){var a=r.alternate;return a===null?(a=Gn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function nc(r,s,a,c,h,g){var w=2;if(c=r,typeof r=="function")$h(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case N:return qs(a.children,h,g,s);case S:w=8,h|=8;break;case k:return r=Gn(12,a,s,h|2),r.elementType=k,r.lanes=g,r;case I:return r=Gn(13,a,s,h),r.elementType=I,r.lanes=g,r;case de:return r=Gn(19,a,s,h),r.elementType=de,r.lanes=g,r;case ge:return rc(a,h,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case x:w=10;break e;case V:w=9;break e;case C:w=11;break e;case $:w=14;break e;case he:w=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Gn(w,a,s,h),s.elementType=r,s.type=c,s.lanes=g,s}function qs(r,s,a,c){return r=Gn(7,r,c,s),r.lanes=a,r}function rc(r,s,a,c){return r=Gn(22,r,c,s),r.elementType=ge,r.lanes=a,r.stateNode={isHidden:!1},r}function zh(r,s,a){return r=Gn(6,r,null,s),r.lanes=a,r}function qh(r,s,a){return s=Gn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function W0(r,s,a,c,h){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Si(0),this.expirationTimes=Si(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Si(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Hh(r,s,a,c,h,g,w,P,D){return r=new W0(r,s,a,P,D),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Gn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ih(g),r}function K0(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pe,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function py(r){if(!r)return Oi;r=r._reactInternals;e:{if(tr(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(mn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(mn(a))return $m(r,a,s)}return s}function my(r,s,a,c,h,g,w,P,D){return r=Hh(a,c,!0,r,h,g,w,P,D),r.context=py(null),a=r.current,c=an(),h=Bi(a),g=ii(c,h),g.callback=s??null,Mi(a,g,h),r.current.lanes=h,Ai(r,h,c),vn(r,c),r}function ic(r,s,a,c){var h=s.current,g=an(),w=Bi(h);return a=py(a),s.context===null?s.context=a:s.pendingContext=a,s=ii(g,w),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=Mi(h,s,w),r!==null&&(fr(r,h,w,g),Vu(r,h,w)),w}function sc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function gy(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Wh(r,s){gy(r,s),(r=r.alternate)&&gy(r,s)}function G0(){return null}var yy=typeof reportError=="function"?reportError:function(r){console.error(r)};function Kh(r){this._internalRoot=r}oc.prototype.render=Kh.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));ic(r,s,null,null)},oc.prototype.unmount=Kh.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;Bs(function(){ic(null,r,null,null)}),s[Zr]=null}};function oc(r){this._internalRoot=r}oc.prototype.unstable_scheduleHydration=function(r){if(r){var s=ou();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Tr.length&&s!==0&&s<Tr[a].priority;a++);Tr.splice(a,0,r),a===0&&uu(r)}};function Gh(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function ac(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function vy(){}function Q0(r,s,a,c,h){if(h){if(typeof c=="function"){var g=c;c=function(){var H=sc(w);g.call(H)}}var w=my(s,c,r,0,null,!1,!1,"",vy);return r._reactRootContainer=w,r[Zr]=w.current,$a(r.nodeType===8?r.parentNode:r),Bs(),w}for(;h=r.lastChild;)r.removeChild(h);if(typeof c=="function"){var P=c;c=function(){var H=sc(D);P.call(H)}}var D=Hh(r,0,!1,null,null,!1,!1,"",vy);return r._reactRootContainer=D,r[Zr]=D.current,$a(r.nodeType===8?r.parentNode:r),Bs(function(){ic(s,D,a,c)}),D}function lc(r,s,a,c,h){var g=a._reactRootContainer;if(g){var w=g;if(typeof h=="function"){var P=h;h=function(){var D=sc(w);P.call(D)}}ic(s,w,r,h)}else w=Q0(a,s,r,h,c);return sc(w)}iu=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Ii(s.pendingLanes);a!==0&&(Ci(s,a|1),vn(s,rt()),(Ge&6)===0&&(Yo=rt()+500,Vi()))}break;case 13:Bs(function(){var c=ri(r,1);if(c!==null){var h=an();fr(c,r,1,h)}}),Wh(r,1)}},To=function(r){if(r.tag===13){var s=ri(r,134217728);if(s!==null){var a=an();fr(s,r,134217728,a)}Wh(r,134217728)}},su=function(r){if(r.tag===13){var s=Bi(r),a=ri(r,s);if(a!==null){var c=an();fr(a,r,s,c)}Wh(r,s)}},ou=function(){return He},au=function(r,s){var a=He;try{return He=r,s()}finally{He=a}},be=function(r,s,a){switch(s){case"input":if(gs(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var h=Au(c);if(!h)throw Error(t(90));Fr(c),gs(c,h)}}}break;case"textarea":qr(r,a);break;case"select":s=a.value,s!=null&&nn(r,!!a.multiple,s,!1)}},Es=Uh,Ia=Bs;var X0={usingClientEntryPoint:!1,Events:[Ha,jo,Au,An,ws,Uh]},sl={findFiberByHostInstance:Ds,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Y0={bundleType:sl.bundleType,version:sl.version,rendererPackageName:sl.rendererPackageName,rendererConfig:sl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:G.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Ca(r),r===null?null:r.stateNode},findFiberByHostInstance:sl.findFiberByHostInstance||G0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{Cs=uc.inject(Y0),Cn=uc}catch{}}return _n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X0,_n.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gh(s))throw Error(t(200));return K0(r,s,null,a)},_n.createRoot=function(r,s){if(!Gh(r))throw Error(t(299));var a=!1,c="",h=yy;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(h=s.onRecoverableError)),s=Hh(r,1,!1,null,null,a,!1,c,h),r[Zr]=s.current,$a(r.nodeType===8?r.parentNode:r),new Kh(s)},_n.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Ca(s),r=r===null?null:r.stateNode,r},_n.flushSync=function(r){return Bs(r)},_n.hydrate=function(r,s,a){if(!ac(s))throw Error(t(200));return lc(null,r,s,!0,a)},_n.hydrateRoot=function(r,s,a){if(!Gh(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,g="",w=yy;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=my(s,null,r,1,a??null,h,!1,g,w),r[Zr]=s.current,$a(r),c)for(r=0;r<c.length;r++)a=c[r],h=a._getVersion,h=h(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,h]:s.mutableSourceEagerHydrationData.push(a,h);return new oc(s)},_n.render=function(r,s,a){if(!ac(s))throw Error(t(200));return lc(null,r,s,!1,a)},_n.unmountComponentAtNode=function(r){if(!ac(r))throw Error(t(40));return r._reactRootContainer?(Bs(function(){lc(null,null,r,!1,function(){r._reactRootContainer=null,r[Zr]=null})}),!0):!1},_n.unstable_batchedUpdates=Uh,_n.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!ac(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return lc(r,s,a,!1,c)},_n.version="18.3.1-next-f1338f8080-20240426",_n}var Cy;function oI(){if(Cy)return Yh.exports;Cy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Yh.exports=sI(),Yh.exports}var Ry;function aI(){if(Ry)return cc;Ry=1;var n=oI();return cc.createRoot=n.createRoot,cc.hydrateRoot=n.hydrateRoot,cc}var lI=aI();const uI=N_(lI),cI=()=>{};var ky={};/**
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
 */const x_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},dI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],d=n[t++],f=n[t++],p=((o&7)<<18|(l&63)<<12|(d&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],d=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|d&63)}}return e.join("")},b_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],d=o+1<n.length,f=d?n[o+1]:0,p=o+2<n.length,v=p?n[o+2]:0,E=l>>2,A=(l&3)<<4|f>>4;let R=(f&15)<<2|v>>6,b=v&63;p||(b=64,d||(R=64)),i.push(t[E],t[A],t[R],t[b])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(x_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):dI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const v=o<n.length?t[n.charAt(o)]:64;++o;const A=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||v==null||A==null)throw new hI;const R=l<<2|f>>4;if(i.push(R),v!==64){const b=f<<4&240|v>>2;if(i.push(b),A!==64){const W=v<<6&192|A;i.push(W)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class hI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fI=function(n){const e=x_(n);return b_.encodeByteArray(e,!0)},Nc=function(n){return fI(n).replace(/\./g,"")},D_=function(n){try{return b_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mI=()=>pI().__FIREBASE_DEFAULTS__,gI=()=>{if(typeof process>"u"||typeof ky>"u")return;const n=ky.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},yI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&D_(n[1]);return e&&JSON.parse(e)},Xc=()=>{try{return cI()||mI()||gI()||yI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},O_=n=>{var e,t;return(t=(e=Xc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},V_=n=>{const e=O_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},L_=()=>{var n;return(n=Xc())===null||n===void 0?void 0:n.config},M_=n=>{var e;return(e=Xc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class vI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function cs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function tp(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function j_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Nc(JSON.stringify(t)),Nc(JSON.stringify(d)),""].join(".")}const ml={};function _I(){const n={prod:[],emulator:[]};for(const e of Object.keys(ml))ml[e]?n.emulator.push(e):n.prod.push(e);return n}function wI(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Py=!1;function np(n,e){if(typeof window>"u"||typeof document>"u"||!cs(window.location.host)||ml[n]===e||ml[n]||Py)return;ml[n]=e;function t(R){return`__firebase__banner__${R}`}const i="__firebase__banner",l=_I().prod.length>0;function d(){const R=document.getElementById(i);R&&R.remove()}function f(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function p(R,b){R.setAttribute("width","24"),R.setAttribute("id",b),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function v(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{Py=!0,d()},R}function E(R,b){R.setAttribute("id",b),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function A(){const R=wI(i),b=t("text"),W=document.getElementById(b)||document.createElement("span"),Q=t("learnmore"),j=document.getElementById(Q)||document.createElement("a"),ne=t("preprendIcon"),oe=document.getElementById(ne)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const ie=R.element;f(ie),E(j,Q);const G=v();p(oe,ne),ie.append(oe,W,j,G),document.body.appendChild(ie)}l?(W.innerText="Preview backend disconnected.",oe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(oe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,W.innerText="Preview backend running in this workspace."),W.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
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
 */function tn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function EI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tn())}function TI(){var n;const e=(n=Xc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function II(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function SI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function AI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CI(){const n=tn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function RI(){return!TI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function U_(){try{return typeof indexedDB=="object"}catch{return!1}}function F_(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function kI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const PI="FirebaseError";class vr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=PI,Object.setPrototypeOf(this,vr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lo.prototype.create)}}class lo{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],d=l?NI(l,i):"Error",f=`${this.serviceName}: ${d} (${o}).`;return new vr(o,f,i)}}function NI(n,e){return n.replace(xI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const xI=/\{\$([^}]+)}/g;function bI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ns(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],d=e[o];if(Ny(l)&&Ny(d)){if(!ns(l,d))return!1}else if(l!==d)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Ny(n){return n!==null&&typeof n=="object"}/**
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
 */function Ll(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ll(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function ul(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function DI(n,e){const t=new OI(n,e);return t.subscribe.bind(t)}class OI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");VI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=ef),o.error===void 0&&(o.error=ef),o.complete===void 0&&(o.complete=ef);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ef(){}/**
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
 */function et(n){return n&&n._delegate?n._delegate:n}class Yn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ws="[DEFAULT]";/**
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
 */class LI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new vI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jI(e))try{this.getOrInitializeService({instanceIdentifier:Ws})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=Ws){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ws){return this.instances.has(e)}getOptions(e=Ws){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&d.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const d=this.instances.get(o);return d&&e(d,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:MI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ws){return this.component?this.component.multipleInstances?e:Ws:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function MI(n){return n===Ws?void 0:n}function jI(n){return n.instantiationMode==="EAGER"}/**
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
 */class UI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new LI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $e;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($e||($e={}));const FI={debug:$e.DEBUG,verbose:$e.VERBOSE,info:$e.INFO,warn:$e.WARN,error:$e.ERROR,silent:$e.SILENT},BI=$e.INFO,$I={[$e.DEBUG]:"log",[$e.VERBOSE]:"log",[$e.INFO]:"info",[$e.WARN]:"warn",[$e.ERROR]:"error"},zI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=$I[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rp{constructor(e){this.name=e,this._logLevel=BI,this._logHandler=zI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$e.DEBUG,...e),this._logHandler(this,$e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$e.VERBOSE,...e),this._logHandler(this,$e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$e.INFO,...e),this._logHandler(this,$e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$e.WARN,...e),this._logHandler(this,$e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$e.ERROR,...e),this._logHandler(this,$e.ERROR,...e)}}const qI=(n,e)=>e.some(t=>n instanceof t);let xy,by;function HI(){return xy||(xy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WI(){return by||(by=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const B_=new WeakMap,Ef=new WeakMap,$_=new WeakMap,tf=new WeakMap,ip=new WeakMap;function KI(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",d)},l=()=>{t(hi(n.result)),o()},d=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",d)});return e.then(t=>{t instanceof IDBCursor&&B_.set(t,n)}).catch(()=>{}),ip.set(e,n),e}function GI(n){if(Ef.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",d),n.removeEventListener("abort",d)},l=()=>{t(),o()},d=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",d),n.addEventListener("abort",d)});Ef.set(n,e)}let Tf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ef.get(n);if(e==="objectStoreNames")return n.objectStoreNames||$_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return hi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function QI(n){Tf=n(Tf)}function XI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(nf(this),e,...t);return $_.set(i,e.sort?e.sort():[e]),hi(i)}:WI().includes(n)?function(...e){return n.apply(nf(this),e),hi(B_.get(this))}:function(...e){return hi(n.apply(nf(this),e))}}function YI(n){return typeof n=="function"?XI(n):(n instanceof IDBTransaction&&GI(n),qI(n,HI())?new Proxy(n,Tf):n)}function hi(n){if(n instanceof IDBRequest)return KI(n);if(tf.has(n))return tf.get(n);const e=YI(n);return e!==n&&(tf.set(n,e),ip.set(e,n)),e}const nf=n=>ip.get(n);function Yc(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const d=indexedDB.open(n,e),f=hi(d);return i&&d.addEventListener("upgradeneeded",p=>{i(hi(d.result),p.oldVersion,p.newVersion,hi(d.transaction),p)}),t&&d.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),f}function rf(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",i=>e(i.oldVersion,i)),hi(t).then(()=>{})}const JI=["get","getKey","getAll","getAllKeys","count"],ZI=["put","add","delete","clear"],sf=new Map;function Dy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(sf.get(e))return sf.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=ZI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||JI.includes(t)))return;const l=async function(d,...f){const p=this.transaction(d,o?"readwrite":"readonly");let v=p.store;return i&&(v=v.index(f.shift())),(await Promise.all([v[t](...f),o&&p.done]))[0]};return sf.set(e,l),l}QI(n=>({...n,get:(e,t,i)=>Dy(e,t)||n.get(e,t,i),has:(e,t)=>!!Dy(e,t)||n.has(e,t)}));/**
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
 */class eS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(tS(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function tS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const If="@firebase/app",Oy="0.13.2";/**
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
 */const pi=new rp("@firebase/app"),nS="@firebase/app-compat",rS="@firebase/analytics-compat",iS="@firebase/analytics",sS="@firebase/app-check-compat",oS="@firebase/app-check",aS="@firebase/auth",lS="@firebase/auth-compat",uS="@firebase/database",cS="@firebase/data-connect",dS="@firebase/database-compat",hS="@firebase/functions",fS="@firebase/functions-compat",pS="@firebase/installations",mS="@firebase/installations-compat",gS="@firebase/messaging",yS="@firebase/messaging-compat",vS="@firebase/performance",_S="@firebase/performance-compat",wS="@firebase/remote-config",ES="@firebase/remote-config-compat",TS="@firebase/storage",IS="@firebase/storage-compat",SS="@firebase/firestore",AS="@firebase/ai",CS="@firebase/firestore-compat",RS="firebase",kS="11.10.0";/**
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
 */const Sf="[DEFAULT]",PS={[If]:"fire-core",[nS]:"fire-core-compat",[iS]:"fire-analytics",[rS]:"fire-analytics-compat",[oS]:"fire-app-check",[sS]:"fire-app-check-compat",[aS]:"fire-auth",[lS]:"fire-auth-compat",[uS]:"fire-rtdb",[cS]:"fire-data-connect",[dS]:"fire-rtdb-compat",[hS]:"fire-fn",[fS]:"fire-fn-compat",[pS]:"fire-iid",[mS]:"fire-iid-compat",[gS]:"fire-fcm",[yS]:"fire-fcm-compat",[vS]:"fire-perf",[_S]:"fire-perf-compat",[wS]:"fire-rc",[ES]:"fire-rc-compat",[TS]:"fire-gcs",[IS]:"fire-gcs-compat",[SS]:"fire-fst",[CS]:"fire-fst-compat",[AS]:"fire-vertex","fire-js":"fire-js",[RS]:"fire-js-all"};/**
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
 */const xc=new Map,NS=new Map,Af=new Map;function Vy(n,e){try{n.container.addComponent(e)}catch(t){pi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function mr(n){const e=n.name;if(Af.has(e))return pi.debug(`There were multiple attempts to register component ${e}.`),!1;Af.set(e,n);for(const t of xc.values())Vy(t,n);for(const t of NS.values())Vy(t,n);return!0}function uo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Dn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const xS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ji=new lo("app","Firebase",xS);/**
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
 */class bS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ji.create("app-deleted",{appName:this._name})}}/**
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
 */const co=kS;function z_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Sf,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw Ji.create("bad-app-name",{appName:String(o)});if(t||(t=L_()),!t)throw Ji.create("no-options");const l=xc.get(o);if(l){if(ns(t,l.options)&&ns(i,l.config))return l;throw Ji.create("duplicate-app",{appName:o})}const d=new UI(o);for(const p of Af.values())d.addComponent(p);const f=new bS(t,i,d);return xc.set(o,f),f}function Jc(n=Sf){const e=xc.get(n);if(!e&&n===Sf&&L_())return z_();if(!e)throw Ji.create("no-app",{appName:n});return e}function Tn(n,e,t){var i;let o=(i=PS[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),d=e.match(/\s|\//);if(l||d){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&d&&f.push("and"),d&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pi.warn(f.join(" "));return}mr(new Yn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const DS="firebase-heartbeat-database",OS=1,Tl="firebase-heartbeat-store";let of=null;function q_(){return of||(of=Yc(DS,OS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Tl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ji.create("idb-open",{originalErrorMessage:n.message})})),of}async function VS(n){try{const t=(await q_()).transaction(Tl),i=await t.objectStore(Tl).get(H_(n));return await t.done,i}catch(e){if(e instanceof vr)pi.warn(e.message);else{const t=Ji.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pi.warn(t.message)}}}async function Ly(n,e){try{const i=(await q_()).transaction(Tl,"readwrite");await i.objectStore(Tl).put(e,H_(n)),await i.done}catch(t){if(t instanceof vr)pi.warn(t.message);else{const i=Ji.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});pi.warn(i.message)}}}function H_(n){return`${n.name}!${n.options.appId}`}/**
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
 */const LS=1024,MS=30;class jS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new FS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=My();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(d=>d.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>MS){const d=BS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){pi.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=My(),{heartbeatsToSend:i,unsentEntries:o}=US(this._heartbeatsCache.heartbeats),l=Nc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return pi.warn(t),""}}}function My(){return new Date().toISOString().substring(0,10)}function US(n,e=LS){const t=[];let i=n.slice();for(const o of n){const l=t.find(d=>d.agent===o.agent);if(l){if(l.dates.push(o.date),jy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),jy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class FS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return U_()?F_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await VS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ly(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ly(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function jy(n){return Nc(JSON.stringify({version:2,heartbeats:n})).length}function BS(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function $S(n){mr(new Yn("platform-logger",e=>new eS(e),"PRIVATE")),mr(new Yn("heartbeat",e=>new jS(e),"PRIVATE")),Tn(If,Oy,n),Tn(If,Oy,"esm2017"),Tn("fire-js","")}$S("");function sp(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function W_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zS=W_,K_=new lo("auth","Firebase",W_());/**
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
 */const bc=new rp("@firebase/auth");function qS(n,...e){bc.logLevel<=$e.WARN&&bc.warn(`Auth (${co}): ${n}`,...e)}function wc(n,...e){bc.logLevel<=$e.ERROR&&bc.error(`Auth (${co}): ${n}`,...e)}/**
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
 */function gr(n,...e){throw op(n,...e)}function Dr(n,...e){return op(n,...e)}function G_(n,e,t){const i=Object.assign(Object.assign({},zS()),{[e]:t});return new lo("auth","Firebase",i).create(e,{appName:n.name})}function fi(n){return G_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function op(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return K_.create(n,...e)}function Ne(n,e,...t){if(!n)throw op(e,...t)}function ci(n){const e="INTERNAL ASSERTION FAILED: "+n;throw wc(e),new Error(e)}function mi(n,e){n||ci(e)}/**
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
 */function Cf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function HS(){return Uy()==="http:"||Uy()==="https:"}function Uy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function WS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(HS()||SI()||"connection"in navigator)?navigator.onLine:!0}function KS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ml{constructor(e,t){this.shortDelay=e,this.longDelay=t,mi(t>e,"Short delay should be less than long delay!"),this.isMobile=EI()||AI()}get(){return WS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ap(n,e){mi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Q_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ci("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ci("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ci("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const GS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const QS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],XS=new Ml(3e4,6e4);function ds(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function hs(n,e,t,i,o={}){return X_(n,o,async()=>{let l={},d={};i&&(e==="GET"?d=i:l={body:JSON.stringify(i)});const f=Ll(Object.assign({key:n.config.apiKey},d)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const v=Object.assign({method:e,headers:p},l);return II()||(v.referrerPolicy="no-referrer"),n.emulatorConfig&&cs(n.emulatorConfig.host)&&(v.credentials="include"),Q_.fetch()(await Y_(n,n.config.apiHost,t,f),v)})}async function X_(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},GS),e);try{const o=new JS(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const d=await l.json();if("needConfirmation"in d)throw dc(n,"account-exists-with-different-credential",d);if(l.ok&&!("errorMessage"in d))return d;{const f=l.ok?d.errorMessage:d.error.message,[p,v]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw dc(n,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw dc(n,"email-already-in-use",d);if(p==="USER_DISABLED")throw dc(n,"user-disabled",d);const E=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw G_(n,E,v);gr(n,E)}}catch(o){if(o instanceof vr)throw o;gr(n,"network-request-failed",{message:String(o)})}}async function jl(n,e,t,i,o={}){const l=await hs(n,e,t,i,o);return"mfaPendingCredential"in l&&gr(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function Y_(n,e,t,i){const o=`${e}${t}?${i}`,l=n,d=l.config.emulator?ap(n.config,o):`${n.config.apiScheme}://${o}`;return QS.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(d).toString():d}function YS(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class JS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Dr(this.auth,"network-request-failed")),XS.get())})}}function dc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=Dr(n,e,i);return o.customData._tokenResponse=t,o}function Fy(n){return n!==void 0&&n.enterprise!==void 0}class ZS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return YS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function eA(n,e){return hs(n,"GET","/v2/recaptchaConfig",ds(n,e))}/**
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
 */async function tA(n,e){return hs(n,"POST","/v1/accounts:delete",e)}async function Dc(n,e){return hs(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function gl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nA(n,e=!1){const t=et(n),i=await t.getIdToken(e),o=lp(i);Ne(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,d=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:gl(af(o.auth_time)),issuedAtTime:gl(af(o.iat)),expirationTime:gl(af(o.exp)),signInProvider:d||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function af(n){return Number(n)*1e3}function lp(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return wc("JWT malformed, contained fewer than 3 sections"),null;try{const o=D_(t);return o?JSON.parse(o):(wc("Failed to decode base64 JWT payload"),null)}catch(o){return wc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function By(n){const e=lp(n);return Ne(e,"internal-error"),Ne(typeof e.exp<"u","internal-error"),Ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Il(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof vr&&rA(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function rA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class iA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Rf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gl(this.lastLoginAt),this.creationTime=gl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Oc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Il(n,Dc(t,{idToken:i}));Ne(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const d=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?J_(l.providerUserInfo):[],f=oA(n.providerData,d),p=n.isAnonymous,v=!(n.email&&l.passwordHash)&&!(f!=null&&f.length),E=p?v:!1,A={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Rf(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(n,A)}async function sA(n){const e=et(n);await Oc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oA(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function J_(n){return n.map(e=>{var{providerId:t}=e,i=sp(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function aA(n,e){const t=await X_(n,{},async()=>{const i=Ll({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,d=await Y_(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:i};return n.emulatorConfig&&cs(n.emulatorConfig.host)&&(p.credentials="include"),Q_.fetch()(d,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function lA(n,e){return hs(n,"POST","/v2/accounts:revokeToken",ds(n,e))}/**
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
 */class ia{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ne(e.idToken,"internal-error"),Ne(typeof e.idToken<"u","internal-error"),Ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):By(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ne(e.length!==0,"internal-error");const t=By(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await aA(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,d=new ia;return i&&(Ne(typeof i=="string","internal-error",{appName:e}),d.refreshToken=i),o&&(Ne(typeof o=="string","internal-error",{appName:e}),d.accessToken=o),l&&(Ne(typeof l=="number","internal-error",{appName:e}),d.expirationTime=l),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ia,this.toJSON())}_performRefresh(){return ci("not implemented")}}/**
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
 */function Hi(n,e){Ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class pr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=sp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Rf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Il(this,this.stsTokenManager.getToken(this.auth,e));return Ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return nA(this,e)}reload(){return sA(this)}_assign(e){this!==e&&(Ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Oc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dn(this.auth.app))return Promise.reject(fi(this.auth));const e=await this.getIdToken();return await Il(this,tA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,d,f,p,v,E;const A=(i=t.displayName)!==null&&i!==void 0?i:void 0,R=(o=t.email)!==null&&o!==void 0?o:void 0,b=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,W=(d=t.photoURL)!==null&&d!==void 0?d:void 0,Q=(f=t.tenantId)!==null&&f!==void 0?f:void 0,j=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,ne=(v=t.createdAt)!==null&&v!==void 0?v:void 0,oe=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ie,emailVerified:G,isAnonymous:Te,providerData:pe,stsTokenManager:N}=t;Ne(ie&&N,e,"internal-error");const S=ia.fromJSON(this.name,N);Ne(typeof ie=="string",e,"internal-error"),Hi(A,e.name),Hi(R,e.name),Ne(typeof G=="boolean",e,"internal-error"),Ne(typeof Te=="boolean",e,"internal-error"),Hi(b,e.name),Hi(W,e.name),Hi(Q,e.name),Hi(j,e.name),Hi(ne,e.name),Hi(oe,e.name);const k=new pr({uid:ie,auth:e,email:R,emailVerified:G,displayName:A,isAnonymous:Te,photoURL:W,phoneNumber:b,tenantId:Q,stsTokenManager:S,createdAt:ne,lastLoginAt:oe});return pe&&Array.isArray(pe)&&(k.providerData=pe.map(x=>Object.assign({},x))),j&&(k._redirectEventId=j),k}static async _fromIdTokenResponse(e,t,i=!1){const o=new ia;o.updateFromServerResponse(t);const l=new pr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Oc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Ne(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?J_(o.providerUserInfo):[],d=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new ia;f.updateFromIdToken(i);const p=new pr({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:d}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Rf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,v),p}}/**
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
 */const $y=new Map;function di(n){mi(n instanceof Function,"Expected a class definition");let e=$y.get(n);return e?(mi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,$y.set(n,e),e)}/**
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
 */class Z_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Z_.type="NONE";const zy=Z_;/**
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
 */function Ec(n,e,t){return`firebase:${n}:${e}:${t}`}class sa{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Ec(this.userKey,o.apiKey,l),this.fullPersistenceKey=Ec("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Dc(this.auth,{idToken:e}).catch(()=>{});return t?pr._fromGetAccountInfoResponse(this.auth,t,e):null}return pr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new sa(di(zy),e,i);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let l=o[0]||di(zy);const d=Ec(i,e.config.apiKey,e.name);let f=null;for(const v of t)try{const E=await v._get(d);if(E){let A;if(typeof E=="string"){const R=await Dc(e,{idToken:E}).catch(()=>{});if(!R)break;A=await pr._fromGetAccountInfoResponse(e,R,E)}else A=pr._fromJSON(e,E);v!==l&&(f=A),l=v;break}}catch{}const p=o.filter(v=>v._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new sa(l,e,i):(l=p[0],f&&await l._set(d,f.toJSON()),await Promise.all(t.map(async v=>{if(v!==l)try{await v._remove(d)}catch{}})),new sa(l,e,i))}}/**
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
 */function qy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ew(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sw(e))return"Blackberry";if(ow(e))return"Webos";if(tw(e))return"Safari";if((e.includes("chrome/")||nw(e))&&!e.includes("edge/"))return"Chrome";if(iw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function ew(n=tn()){return/firefox\//i.test(n)}function tw(n=tn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nw(n=tn()){return/crios\//i.test(n)}function rw(n=tn()){return/iemobile/i.test(n)}function iw(n=tn()){return/android/i.test(n)}function sw(n=tn()){return/blackberry/i.test(n)}function ow(n=tn()){return/webos/i.test(n)}function up(n=tn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function uA(n=tn()){var e;return up(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cA(){return CI()&&document.documentMode===10}function aw(n=tn()){return up(n)||iw(n)||ow(n)||sw(n)||/windows phone/i.test(n)||rw(n)}/**
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
 */function lw(n,e=[]){let t;switch(n){case"Browser":t=qy(tn());break;case"Worker":t=`${qy(tn())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${co}/${i}`}/**
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
 */class dA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((d,f)=>{try{const p=e(l);d(p)}catch(p){f(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function hA(n,e={}){return hs(n,"GET","/v2/passwordPolicy",ds(n,e))}/**
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
 */const fA=6;class pA{constructor(e){var t,i,o,l;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=d.minPasswordLength)!==null&&t!==void 0?t:fA,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,d,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(d=p.containsNumericCharacter)!==null&&d!==void 0?d:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class mA{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hy(this),this.idTokenSubscription=new Hy(this),this.beforeStateQueue=new dA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=K_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=di(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await sa.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Dc(this,{idToken:e}),i=await pr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Dn(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!d||d===f)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(d){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Oc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dn(this.app))return Promise.reject(fi(this));const t=e?et(e):null;return t&&Ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dn(this.app)?Promise.reject(fi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dn(this.app)?Promise.reject(fi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(di(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hA(this),t=new pA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new lo("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await lA(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&di(e)||this._popupRedirectResolver;Ne(t,this,"argument-error"),this.redirectPersistenceManager=await sa.create(this,[di(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ne(f,this,"internal-error"),f.then(()=>{d||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{d=!0,p()}}else{const p=e.addObserver(t);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Dn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&qS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ho(n){return et(n)}class Hy{constructor(e){this.auth=e,this.observer=null,this.addObserver=DI(t=>this.observer=t)}get next(){return Ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Zc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gA(n){Zc=n}function uw(n){return Zc.loadJS(n)}function yA(){return Zc.recaptchaEnterpriseScript}function vA(){return Zc.gapiScript}function _A(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class wA{constructor(){this.enterprise=new EA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class EA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const TA="recaptcha-enterprise",cw="NO_RECAPTCHA";class IA{constructor(e){this.type=TA,this.auth=ho(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(d,f)=>{eA(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const v=new ZS(p);return l.tenantId==null?l._agentRecaptchaConfig=v:l._tenantRecaptchaConfigs[l.tenantId]=v,d(v.siteKey)}}).catch(p=>{f(p)})})}function o(l,d,f){const p=window.grecaptcha;Fy(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(v=>{d(v)}).catch(()=>{d(cw)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new wA().execute("siteKey",{action:"verify"}):new Promise((l,d)=>{i(this.auth).then(f=>{if(!t&&Fy(window.grecaptcha))o(f,l,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let p=yA();p.length!==0&&(p+=f),uw(p).then(()=>{o(f,l,d)}).catch(v=>{d(v)})}}).catch(f=>{d(f)})})}}async function Wy(n,e,t,i=!1,o=!1){const l=new IA(n);let d;if(o)d=cw;else try{d=await l.verify(t)}catch{d=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,v=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:v,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:d}):Object.assign(f,{captchaResponse:d}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function kf(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await Wy(n,e,t,t==="getOobCode");return i(n,d)}else return i(n,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Wy(n,e,t,t==="getOobCode");return i(n,f)}else return Promise.reject(d)})}/**
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
 */function SA(n,e){const t=uo(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(ns(l,e??{}))return o;gr(o,"already-initialized")}return t.initialize({options:e})}function AA(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(di);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function CA(n,e,t){const i=ho(n);Ne(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=dw(e),{host:d,port:f}=RA(e),p=f===null?"":`:${f}`,v={url:`${l}//${d}${p}/`},E=Object.freeze({host:d,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){Ne(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Ne(ns(v,i.config.emulator)&&ns(E,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=v,i.emulatorConfig=E,i.settings.appVerificationDisabledForTesting=!0,cs(d)?(tp(`${l}//${d}${p}`),np("Auth",!0)):kA()}function dw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function RA(n){const e=dw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Ky(i.substr(l.length+1))}}else{const[l,d]=i.split(":");return{host:l,port:Ky(d)}}}function Ky(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function kA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class cp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ci("not implemented")}_getIdTokenResponse(e){return ci("not implemented")}_linkToIdToken(e,t){return ci("not implemented")}_getReauthenticationResolver(e){return ci("not implemented")}}async function PA(n,e){return hs(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function NA(n,e){return jl(n,"POST","/v1/accounts:signInWithPassword",ds(n,e))}/**
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
 */async function xA(n,e){return jl(n,"POST","/v1/accounts:signInWithEmailLink",ds(n,e))}async function bA(n,e){return jl(n,"POST","/v1/accounts:signInWithEmailLink",ds(n,e))}/**
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
 */class Sl extends cp{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Sl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Sl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kf(e,t,"signInWithPassword",NA);case"emailLink":return xA(e,{email:this._email,oobCode:this._password});default:gr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kf(e,i,"signUpPassword",PA);case"emailLink":return bA(e,{idToken:t,email:this._email,oobCode:this._password});default:gr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function oa(n,e){return jl(n,"POST","/v1/accounts:signInWithIdp",ds(n,e))}/**
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
 */const DA="http://localhost";class eo extends cp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new eo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):gr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=sp(t,["providerId","signInMethod"]);if(!i||!o)return null;const d=new eo(i,o);return d.idToken=l.idToken||void 0,d.accessToken=l.accessToken||void 0,d.secret=l.secret,d.nonce=l.nonce,d.pendingToken=l.pendingToken||null,d}_getIdTokenResponse(e){const t=this.buildRequest();return oa(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,oa(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,oa(e,t)}buildRequest(){const e={requestUri:DA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ll(t)}return e}}/**
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
 */function OA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function VA(n){const e=ll(ul(n)).link,t=e?ll(ul(e)).deep_link_id:null,i=ll(ul(n)).deep_link_id;return(i?ll(ul(i)).link:null)||i||t||e||n}class dp{constructor(e){var t,i,o,l,d,f;const p=ll(ul(e)),v=(t=p.apiKey)!==null&&t!==void 0?t:null,E=(i=p.oobCode)!==null&&i!==void 0?i:null,A=OA((o=p.mode)!==null&&o!==void 0?o:null);Ne(v&&E&&A,"argument-error"),this.apiKey=v,this.operation=A,this.code=E,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(d=p.lang)!==null&&d!==void 0?d:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=VA(e);try{return new dp(t)}catch{return null}}}/**
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
 */class pa{constructor(){this.providerId=pa.PROVIDER_ID}static credential(e,t){return Sl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=dp.parseLink(t);return Ne(i,"argument-error"),Sl._fromEmailAndCode(e,i.code,i.tenantId)}}pa.PROVIDER_ID="password";pa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class hw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ul extends hw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Wi extends Ul{constructor(){super("facebook.com")}static credential(e){return eo._fromParams({providerId:Wi.PROVIDER_ID,signInMethod:Wi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wi.credentialFromTaggedObject(e)}static credentialFromError(e){return Wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wi.credential(e.oauthAccessToken)}catch{return null}}}Wi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wi.PROVIDER_ID="facebook.com";/**
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
 */class Ki extends Ul{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return eo._fromParams({providerId:Ki.PROVIDER_ID,signInMethod:Ki.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ki.credentialFromTaggedObject(e)}static credentialFromError(e){return Ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ki.credential(t,i)}catch{return null}}}Ki.GOOGLE_SIGN_IN_METHOD="google.com";Ki.PROVIDER_ID="google.com";/**
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
 */class Gi extends Ul{constructor(){super("github.com")}static credential(e){return eo._fromParams({providerId:Gi.PROVIDER_ID,signInMethod:Gi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gi.credentialFromTaggedObject(e)}static credentialFromError(e){return Gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gi.credential(e.oauthAccessToken)}catch{return null}}}Gi.GITHUB_SIGN_IN_METHOD="github.com";Gi.PROVIDER_ID="github.com";/**
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
 */class Qi extends Ul{constructor(){super("twitter.com")}static credential(e,t){return eo._fromParams({providerId:Qi.PROVIDER_ID,signInMethod:Qi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qi.credentialFromTaggedObject(e)}static credentialFromError(e){return Qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Qi.credential(t,i)}catch{return null}}}Qi.TWITTER_SIGN_IN_METHOD="twitter.com";Qi.PROVIDER_ID="twitter.com";/**
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
 */async function LA(n,e){return jl(n,"POST","/v1/accounts:signUp",ds(n,e))}/**
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
 */class to{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await pr._fromIdTokenResponse(e,i,o),d=Gy(i);return new to({user:l,providerId:d,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Gy(i);return new to({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Gy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Vc extends vr{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Vc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Vc(e,t,i,o)}}function fw(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Vc._fromErrorAndOperation(n,l,e,i):l})}async function MA(n,e,t=!1){const i=await Il(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return to._forOperation(n,"link",i)}/**
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
 */async function jA(n,e,t=!1){const{auth:i}=n;if(Dn(i.app))return Promise.reject(fi(i));const o="reauthenticate";try{const l=await Il(n,fw(i,o,e,n),t);Ne(l.idToken,i,"internal-error");const d=lp(l.idToken);Ne(d,i,"internal-error");const{sub:f}=d;return Ne(n.uid===f,i,"user-mismatch"),to._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&gr(i,"user-mismatch"),l}}/**
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
 */async function pw(n,e,t=!1){if(Dn(n.app))return Promise.reject(fi(n));const i="signIn",o=await fw(n,i,e),l=await to._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function UA(n,e){return pw(ho(n),e)}/**
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
 */async function mw(n){const e=ho(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function FA(n,e,t){if(Dn(n.app))return Promise.reject(fi(n));const i=ho(n),d=await kf(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",LA).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&mw(n),p}),f=await to._fromIdTokenResponse(i,"signIn",d);return await i._updateCurrentUser(f.user),f}function BA(n,e,t){return Dn(n.app)?Promise.reject(fi(n)):UA(et(n),pa.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&mw(n),i})}function $A(n,e,t,i){return et(n).onIdTokenChanged(e,t,i)}function zA(n,e,t){return et(n).beforeAuthStateChanged(e,t)}function qA(n,e,t,i){return et(n).onAuthStateChanged(e,t,i)}function Pf(n){return et(n).signOut()}async function Qy(n){return et(n).delete()}const Lc="__sak";/**
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
 */class gw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Lc,"1"),this.storage.removeItem(Lc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const HA=1e3,WA=10;class yw extends gw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=aw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((d,f,p)=>{this.notifyListeners(d,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const d=this.storage.getItem(i);!t&&this.localCache[i]===d||this.notifyListeners(i,d)},l=this.storage.getItem(i);cA()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,WA):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},HA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}yw.type="LOCAL";const KA=yw;/**
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
 */class vw extends gw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vw.type="SESSION";const _w=vw;/**
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
 */function GA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ed{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new ed(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,d=this.handlersMap[o];if(!(d!=null&&d.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(d).map(async v=>v(t.origin,l)),p=await GA(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ed.receivers=[];/**
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
 */function hp(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class QA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,d;return new Promise((f,p)=>{const v=hp("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},i);d={messageChannel:o,onMessage(A){const R=A;if(R.data.eventId===v)switch(R.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(R.data.response);break;default:clearTimeout(E),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(d),o.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function Or(){return window}function XA(n){Or().location.href=n}/**
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
 */function ww(){return typeof Or().WorkerGlobalScope<"u"&&typeof Or().importScripts=="function"}async function YA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ZA(){return ww()?self:null}/**
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
 */const Ew="firebaseLocalStorageDb",eC=1,Mc="firebaseLocalStorage",Tw="fbase_key";class Fl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function td(n,e){return n.transaction([Mc],e?"readwrite":"readonly").objectStore(Mc)}function tC(){const n=indexedDB.deleteDatabase(Ew);return new Fl(n).toPromise()}function Nf(){const n=indexedDB.open(Ew,eC);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Mc,{keyPath:Tw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Mc)?e(i):(i.close(),await tC(),e(await Nf()))})})}async function Xy(n,e,t){const i=td(n,!0).put({[Tw]:e,value:t});return new Fl(i).toPromise()}async function nC(n,e){const t=td(n,!1).get(e),i=await new Fl(t).toPromise();return i===void 0?null:i.value}function Yy(n,e){const t=td(n,!0).delete(e);return new Fl(t).toPromise()}const rC=800,iC=3;class Iw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>iC)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ww()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ed._getInstance(ZA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await YA(),!this.activeServiceWorker)return;this.sender=new QA(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nf();return await Xy(e,Lc,"1"),await Yy(e,Lc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Xy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>nC(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=td(o,!1).getAll();return new Fl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Iw.type="LOCAL";const sC=Iw;new Ml(3e4,6e4);/**
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
 */function oC(n,e){return e?di(e):(Ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class fp extends cp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oa(e,this._buildIdpRequest())}_linkToIdToken(e,t){return oa(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return oa(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function aC(n){return pw(n.auth,new fp(n),n.bypassAuthState)}function lC(n){const{auth:e,user:t}=n;return Ne(t,e,"internal-error"),jA(t,new fp(n),n.bypassAuthState)}async function uC(n){const{auth:e,user:t}=n;return Ne(t,e,"internal-error"),MA(t,new fp(n),n.bypassAuthState)}/**
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
 */class Sw{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:d,type:f}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aC;case"linkViaPopup":case"linkViaRedirect":return uC;case"reauthViaPopup":case"reauthViaRedirect":return lC;default:gr(this.auth,"internal-error")}}resolve(e){mi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cC=new Ml(2e3,1e4);class ra extends Sw{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,ra.currentPopupAction&&ra.currentPopupAction.cancel(),ra.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ne(e,this.auth,"internal-error"),e}async onExecution(){mi(this.filter.length===1,"Popup operations only handle one event");const e=hp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Dr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ra.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cC.get())};e()}}ra.currentPopupAction=null;/**
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
 */const dC="pendingRedirect",Tc=new Map;class hC extends Sw{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Tc.get(this.auth._key());if(!e){try{const i=await fC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Tc.set(this.auth._key(),e)}return this.bypassAuthState||Tc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fC(n,e){const t=gC(e),i=mC(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function pC(n,e){Tc.set(n._key(),e)}function mC(n){return di(n._redirectPersistence)}function gC(n){return Ec(dC,n.config.apiKey,n.name)}async function yC(n,e,t=!1){if(Dn(n.app))return Promise.reject(fi(n));const i=ho(n),o=oC(i,e),d=await new hC(i,o,t).execute();return d&&!t&&(delete d.user._redirectEventId,await i._persistUserIfCurrent(d.user),await i._setRedirectUser(null,e)),d}/**
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
 */const vC=600*1e3;class _C{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Aw(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Dr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jy(e))}saveEventToCache(e){this.cachedEventUids.add(Jy(e)),this.lastProcessedEventTime=Date.now()}}function Jy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Aw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wC(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Aw(n);default:return!1}}/**
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
 */async function EC(n,e={}){return hs(n,"GET","/v1/projects",e)}/**
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
 */const TC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IC=/^https?/;async function SC(n){if(n.config.emulator)return;const{authorizedDomains:e}=await EC(n);for(const t of e)try{if(AC(t))return}catch{}gr(n,"unauthorized-domain")}function AC(n){const e=Cf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const d=new URL(n);return d.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&d.hostname===i}if(!IC.test(t))return!1;if(TC.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const CC=new Ml(3e4,6e4);function Zy(){const n=Or().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function RC(n){return new Promise((e,t)=>{var i,o,l;function d(){Zy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zy(),t(Dr(n,"network-request-failed"))},timeout:CC.get()})}if(!((o=(i=Or().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=Or().gapi)===null||l===void 0)&&l.load)d();else{const f=_A("iframefcb");return Or()[f]=()=>{gapi.load?d():t(Dr(n,"network-request-failed"))},uw(`${vA()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw Ic=null,e})}let Ic=null;function kC(n){return Ic=Ic||RC(n),Ic}/**
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
 */const PC=new Ml(5e3,15e3),NC="__/auth/iframe",xC="emulator/auth/iframe",bC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OC(n){const e=n.config;Ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ap(e,xC):`https://${n.config.authDomain}/${NC}`,i={apiKey:e.apiKey,appName:n.name,v:co},o=DC.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${Ll(i).slice(1)}`}async function VC(n){const e=await kC(n),t=Or().gapi;return Ne(t,n,"internal-error"),e.open({where:document.body,url:OC(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bC,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const d=Dr(n,"network-request-failed"),f=Or().setTimeout(()=>{l(d)},PC.get());function p(){Or().clearTimeout(f),o(i)}i.ping(p).then(p,()=>{l(d)})}))}/**
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
 */const LC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MC=500,jC=600,UC="_blank",FC="http://localhost";class ev{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BC(n,e,t,i=MC,o=jC){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),d=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const p=Object.assign(Object.assign({},LC),{width:i.toString(),height:o.toString(),top:l,left:d}),v=tn().toLowerCase();t&&(f=nw(v)?UC:t),ew(v)&&(e=e||FC,p.scrollbars="yes");const E=Object.entries(p).reduce((R,[b,W])=>`${R}${b}=${W},`,"");if(uA(v)&&f!=="_self")return $C(e||"",f),new ev(null);const A=window.open(e||"",f,E);Ne(A,n,"popup-blocked");try{A.focus()}catch{}return new ev(A)}function $C(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const zC="__/auth/handler",qC="emulator/auth/handler",HC=encodeURIComponent("fac");async function tv(n,e,t,i,o,l){Ne(n.config.authDomain,n,"auth-domain-config-required"),Ne(n.config.apiKey,n,"invalid-api-key");const d={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:co,eventId:o};if(e instanceof hw){e.setDefaultLanguage(n.languageCode),d.providerId=e.providerId||"",bI(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,A]of Object.entries({}))d[E]=A}if(e instanceof Ul){const E=e.getScopes().filter(A=>A!=="");E.length>0&&(d.scopes=E.join(","))}n.tenantId&&(d.tid=n.tenantId);const f=d;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const p=await n._getAppCheckToken(),v=p?`#${HC}=${encodeURIComponent(p)}`:"";return`${WC(n)}?${Ll(f).slice(1)}${v}`}function WC({config:n}){return n.emulator?ap(n,qC):`https://${n.authDomain}/${zC}`}/**
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
 */const lf="webStorageSupport";class KC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_w,this._completeRedirectFn=yC,this._overrideRedirectResult=pC}async _openPopup(e,t,i,o){var l;mi((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const d=await tv(e,t,i,Cf(),o);return BC(e,d,hp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await tv(e,t,i,Cf(),o);return XA(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(mi(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await VC(e),i=new _C(e);return t.register("authEvent",o=>(Ne(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(lf,{type:lf},o=>{var l;const d=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[lf];d!==void 0&&t(!!d),gr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=SC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return aw()||tw()||up()}}const GC=KC;var nv="@firebase/auth",rv="1.10.8";/**
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
 */class QC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function XC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YC(n){mr(new Yn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=i.options;Ne(d&&!d.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:d,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lw(n)},v=new mA(i,o,l,p);return AA(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),mr(new Yn("auth-internal",e=>{const t=ho(e.getProvider("auth").getImmediate());return(i=>new QC(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(nv,rv,XC(n)),Tn(nv,rv,"esm2017")}/**
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
 */const JC=300,ZC=M_("authIdTokenMaxAge")||JC;let iv=null;const eR=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>ZC)return;const o=t==null?void 0:t.token;iv!==o&&(iv=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function tR(n=Jc()){const e=uo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=SA(n,{popupRedirectResolver:GC,persistence:[sC,KA,_w]}),i=M_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const d=eR(l.toString());zA(t,d,()=>d(t.currentUser)),$A(t,f=>d(f))}}const o=O_("auth");return o&&CA(t,`http://${o}`),t}function nR(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}gA({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=Dr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",nR().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YC("Browser");var sv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zi,Cw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,S){function k(){}k.prototype=S.prototype,N.D=S.prototype,N.prototype=new k,N.prototype.constructor=N,N.C=function(x,V,C){for(var I=Array(arguments.length-2),de=2;de<arguments.length;de++)I[de-2]=arguments[de];return S.prototype[V].apply(x,I)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,S,k){k||(k=0);var x=Array(16);if(typeof S=="string")for(var V=0;16>V;++V)x[V]=S.charCodeAt(k++)|S.charCodeAt(k++)<<8|S.charCodeAt(k++)<<16|S.charCodeAt(k++)<<24;else for(V=0;16>V;++V)x[V]=S[k++]|S[k++]<<8|S[k++]<<16|S[k++]<<24;S=N.g[0],k=N.g[1],V=N.g[2];var C=N.g[3],I=S+(C^k&(V^C))+x[0]+3614090360&4294967295;S=k+(I<<7&4294967295|I>>>25),I=C+(V^S&(k^V))+x[1]+3905402710&4294967295,C=S+(I<<12&4294967295|I>>>20),I=V+(k^C&(S^k))+x[2]+606105819&4294967295,V=C+(I<<17&4294967295|I>>>15),I=k+(S^V&(C^S))+x[3]+3250441966&4294967295,k=V+(I<<22&4294967295|I>>>10),I=S+(C^k&(V^C))+x[4]+4118548399&4294967295,S=k+(I<<7&4294967295|I>>>25),I=C+(V^S&(k^V))+x[5]+1200080426&4294967295,C=S+(I<<12&4294967295|I>>>20),I=V+(k^C&(S^k))+x[6]+2821735955&4294967295,V=C+(I<<17&4294967295|I>>>15),I=k+(S^V&(C^S))+x[7]+4249261313&4294967295,k=V+(I<<22&4294967295|I>>>10),I=S+(C^k&(V^C))+x[8]+1770035416&4294967295,S=k+(I<<7&4294967295|I>>>25),I=C+(V^S&(k^V))+x[9]+2336552879&4294967295,C=S+(I<<12&4294967295|I>>>20),I=V+(k^C&(S^k))+x[10]+4294925233&4294967295,V=C+(I<<17&4294967295|I>>>15),I=k+(S^V&(C^S))+x[11]+2304563134&4294967295,k=V+(I<<22&4294967295|I>>>10),I=S+(C^k&(V^C))+x[12]+1804603682&4294967295,S=k+(I<<7&4294967295|I>>>25),I=C+(V^S&(k^V))+x[13]+4254626195&4294967295,C=S+(I<<12&4294967295|I>>>20),I=V+(k^C&(S^k))+x[14]+2792965006&4294967295,V=C+(I<<17&4294967295|I>>>15),I=k+(S^V&(C^S))+x[15]+1236535329&4294967295,k=V+(I<<22&4294967295|I>>>10),I=S+(V^C&(k^V))+x[1]+4129170786&4294967295,S=k+(I<<5&4294967295|I>>>27),I=C+(k^V&(S^k))+x[6]+3225465664&4294967295,C=S+(I<<9&4294967295|I>>>23),I=V+(S^k&(C^S))+x[11]+643717713&4294967295,V=C+(I<<14&4294967295|I>>>18),I=k+(C^S&(V^C))+x[0]+3921069994&4294967295,k=V+(I<<20&4294967295|I>>>12),I=S+(V^C&(k^V))+x[5]+3593408605&4294967295,S=k+(I<<5&4294967295|I>>>27),I=C+(k^V&(S^k))+x[10]+38016083&4294967295,C=S+(I<<9&4294967295|I>>>23),I=V+(S^k&(C^S))+x[15]+3634488961&4294967295,V=C+(I<<14&4294967295|I>>>18),I=k+(C^S&(V^C))+x[4]+3889429448&4294967295,k=V+(I<<20&4294967295|I>>>12),I=S+(V^C&(k^V))+x[9]+568446438&4294967295,S=k+(I<<5&4294967295|I>>>27),I=C+(k^V&(S^k))+x[14]+3275163606&4294967295,C=S+(I<<9&4294967295|I>>>23),I=V+(S^k&(C^S))+x[3]+4107603335&4294967295,V=C+(I<<14&4294967295|I>>>18),I=k+(C^S&(V^C))+x[8]+1163531501&4294967295,k=V+(I<<20&4294967295|I>>>12),I=S+(V^C&(k^V))+x[13]+2850285829&4294967295,S=k+(I<<5&4294967295|I>>>27),I=C+(k^V&(S^k))+x[2]+4243563512&4294967295,C=S+(I<<9&4294967295|I>>>23),I=V+(S^k&(C^S))+x[7]+1735328473&4294967295,V=C+(I<<14&4294967295|I>>>18),I=k+(C^S&(V^C))+x[12]+2368359562&4294967295,k=V+(I<<20&4294967295|I>>>12),I=S+(k^V^C)+x[5]+4294588738&4294967295,S=k+(I<<4&4294967295|I>>>28),I=C+(S^k^V)+x[8]+2272392833&4294967295,C=S+(I<<11&4294967295|I>>>21),I=V+(C^S^k)+x[11]+1839030562&4294967295,V=C+(I<<16&4294967295|I>>>16),I=k+(V^C^S)+x[14]+4259657740&4294967295,k=V+(I<<23&4294967295|I>>>9),I=S+(k^V^C)+x[1]+2763975236&4294967295,S=k+(I<<4&4294967295|I>>>28),I=C+(S^k^V)+x[4]+1272893353&4294967295,C=S+(I<<11&4294967295|I>>>21),I=V+(C^S^k)+x[7]+4139469664&4294967295,V=C+(I<<16&4294967295|I>>>16),I=k+(V^C^S)+x[10]+3200236656&4294967295,k=V+(I<<23&4294967295|I>>>9),I=S+(k^V^C)+x[13]+681279174&4294967295,S=k+(I<<4&4294967295|I>>>28),I=C+(S^k^V)+x[0]+3936430074&4294967295,C=S+(I<<11&4294967295|I>>>21),I=V+(C^S^k)+x[3]+3572445317&4294967295,V=C+(I<<16&4294967295|I>>>16),I=k+(V^C^S)+x[6]+76029189&4294967295,k=V+(I<<23&4294967295|I>>>9),I=S+(k^V^C)+x[9]+3654602809&4294967295,S=k+(I<<4&4294967295|I>>>28),I=C+(S^k^V)+x[12]+3873151461&4294967295,C=S+(I<<11&4294967295|I>>>21),I=V+(C^S^k)+x[15]+530742520&4294967295,V=C+(I<<16&4294967295|I>>>16),I=k+(V^C^S)+x[2]+3299628645&4294967295,k=V+(I<<23&4294967295|I>>>9),I=S+(V^(k|~C))+x[0]+4096336452&4294967295,S=k+(I<<6&4294967295|I>>>26),I=C+(k^(S|~V))+x[7]+1126891415&4294967295,C=S+(I<<10&4294967295|I>>>22),I=V+(S^(C|~k))+x[14]+2878612391&4294967295,V=C+(I<<15&4294967295|I>>>17),I=k+(C^(V|~S))+x[5]+4237533241&4294967295,k=V+(I<<21&4294967295|I>>>11),I=S+(V^(k|~C))+x[12]+1700485571&4294967295,S=k+(I<<6&4294967295|I>>>26),I=C+(k^(S|~V))+x[3]+2399980690&4294967295,C=S+(I<<10&4294967295|I>>>22),I=V+(S^(C|~k))+x[10]+4293915773&4294967295,V=C+(I<<15&4294967295|I>>>17),I=k+(C^(V|~S))+x[1]+2240044497&4294967295,k=V+(I<<21&4294967295|I>>>11),I=S+(V^(k|~C))+x[8]+1873313359&4294967295,S=k+(I<<6&4294967295|I>>>26),I=C+(k^(S|~V))+x[15]+4264355552&4294967295,C=S+(I<<10&4294967295|I>>>22),I=V+(S^(C|~k))+x[6]+2734768916&4294967295,V=C+(I<<15&4294967295|I>>>17),I=k+(C^(V|~S))+x[13]+1309151649&4294967295,k=V+(I<<21&4294967295|I>>>11),I=S+(V^(k|~C))+x[4]+4149444226&4294967295,S=k+(I<<6&4294967295|I>>>26),I=C+(k^(S|~V))+x[11]+3174756917&4294967295,C=S+(I<<10&4294967295|I>>>22),I=V+(S^(C|~k))+x[2]+718787259&4294967295,V=C+(I<<15&4294967295|I>>>17),I=k+(C^(V|~S))+x[9]+3951481745&4294967295,N.g[0]=N.g[0]+S&4294967295,N.g[1]=N.g[1]+(V+(I<<21&4294967295|I>>>11))&4294967295,N.g[2]=N.g[2]+V&4294967295,N.g[3]=N.g[3]+C&4294967295}i.prototype.u=function(N,S){S===void 0&&(S=N.length);for(var k=S-this.blockSize,x=this.B,V=this.h,C=0;C<S;){if(V==0)for(;C<=k;)o(this,N,C),C+=this.blockSize;if(typeof N=="string"){for(;C<S;)if(x[V++]=N.charCodeAt(C++),V==this.blockSize){o(this,x),V=0;break}}else for(;C<S;)if(x[V++]=N[C++],V==this.blockSize){o(this,x),V=0;break}}this.h=V,this.o+=S},i.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var S=1;S<N.length-8;++S)N[S]=0;var k=8*this.o;for(S=N.length-8;S<N.length;++S)N[S]=k&255,k/=256;for(this.u(N),N=Array(16),S=k=0;4>S;++S)for(var x=0;32>x;x+=8)N[k++]=this.g[S]>>>x&255;return N};function l(N,S){var k=f;return Object.prototype.hasOwnProperty.call(k,N)?k[N]:k[N]=S(N)}function d(N,S){this.h=S;for(var k=[],x=!0,V=N.length-1;0<=V;V--){var C=N[V]|0;x&&C==S||(k[V]=C,x=!1)}this.g=k}var f={};function p(N){return-128<=N&&128>N?l(N,function(S){return new d([S|0],0>S?-1:0)}):new d([N|0],0>N?-1:0)}function v(N){if(isNaN(N)||!isFinite(N))return A;if(0>N)return j(v(-N));for(var S=[],k=1,x=0;N>=k;x++)S[x]=N/k|0,k*=4294967296;return new d(S,0)}function E(N,S){if(N.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(N.charAt(0)=="-")return j(E(N.substring(1),S));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=v(Math.pow(S,8)),x=A,V=0;V<N.length;V+=8){var C=Math.min(8,N.length-V),I=parseInt(N.substring(V,V+C),S);8>C?(C=v(Math.pow(S,C)),x=x.j(C).add(v(I))):(x=x.j(k),x=x.add(v(I)))}return x}var A=p(0),R=p(1),b=p(16777216);n=d.prototype,n.m=function(){if(Q(this))return-j(this).m();for(var N=0,S=1,k=0;k<this.g.length;k++){var x=this.i(k);N+=(0<=x?x:4294967296+x)*S,S*=4294967296}return N},n.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(W(this))return"0";if(Q(this))return"-"+j(this).toString(N);for(var S=v(Math.pow(N,6)),k=this,x="";;){var V=G(k,S).g;k=ne(k,V.j(S));var C=((0<k.g.length?k.g[0]:k.h)>>>0).toString(N);if(k=V,W(k))return C+x;for(;6>C.length;)C="0"+C;x=C+x}},n.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function W(N){if(N.h!=0)return!1;for(var S=0;S<N.g.length;S++)if(N.g[S]!=0)return!1;return!0}function Q(N){return N.h==-1}n.l=function(N){return N=ne(this,N),Q(N)?-1:W(N)?0:1};function j(N){for(var S=N.g.length,k=[],x=0;x<S;x++)k[x]=~N.g[x];return new d(k,~N.h).add(R)}n.abs=function(){return Q(this)?j(this):this},n.add=function(N){for(var S=Math.max(this.g.length,N.g.length),k=[],x=0,V=0;V<=S;V++){var C=x+(this.i(V)&65535)+(N.i(V)&65535),I=(C>>>16)+(this.i(V)>>>16)+(N.i(V)>>>16);x=I>>>16,C&=65535,I&=65535,k[V]=I<<16|C}return new d(k,k[k.length-1]&-2147483648?-1:0)};function ne(N,S){return N.add(j(S))}n.j=function(N){if(W(this)||W(N))return A;if(Q(this))return Q(N)?j(this).j(j(N)):j(j(this).j(N));if(Q(N))return j(this.j(j(N)));if(0>this.l(b)&&0>N.l(b))return v(this.m()*N.m());for(var S=this.g.length+N.g.length,k=[],x=0;x<2*S;x++)k[x]=0;for(x=0;x<this.g.length;x++)for(var V=0;V<N.g.length;V++){var C=this.i(x)>>>16,I=this.i(x)&65535,de=N.i(V)>>>16,$=N.i(V)&65535;k[2*x+2*V]+=I*$,oe(k,2*x+2*V),k[2*x+2*V+1]+=C*$,oe(k,2*x+2*V+1),k[2*x+2*V+1]+=I*de,oe(k,2*x+2*V+1),k[2*x+2*V+2]+=C*de,oe(k,2*x+2*V+2)}for(x=0;x<S;x++)k[x]=k[2*x+1]<<16|k[2*x];for(x=S;x<2*S;x++)k[x]=0;return new d(k,0)};function oe(N,S){for(;(N[S]&65535)!=N[S];)N[S+1]+=N[S]>>>16,N[S]&=65535,S++}function ie(N,S){this.g=N,this.h=S}function G(N,S){if(W(S))throw Error("division by zero");if(W(N))return new ie(A,A);if(Q(N))return S=G(j(N),S),new ie(j(S.g),j(S.h));if(Q(S))return S=G(N,j(S)),new ie(j(S.g),S.h);if(30<N.g.length){if(Q(N)||Q(S))throw Error("slowDivide_ only works with positive integers.");for(var k=R,x=S;0>=x.l(N);)k=Te(k),x=Te(x);var V=pe(k,1),C=pe(x,1);for(x=pe(x,2),k=pe(k,2);!W(x);){var I=C.add(x);0>=I.l(N)&&(V=V.add(k),C=I),x=pe(x,1),k=pe(k,1)}return S=ne(N,V.j(S)),new ie(V,S)}for(V=A;0<=N.l(S);){for(k=Math.max(1,Math.floor(N.m()/S.m())),x=Math.ceil(Math.log(k)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),C=v(k),I=C.j(S);Q(I)||0<I.l(N);)k-=x,C=v(k),I=C.j(S);W(C)&&(C=R),V=V.add(C),N=ne(N,I)}return new ie(V,N)}n.A=function(N){return G(this,N).h},n.and=function(N){for(var S=Math.max(this.g.length,N.g.length),k=[],x=0;x<S;x++)k[x]=this.i(x)&N.i(x);return new d(k,this.h&N.h)},n.or=function(N){for(var S=Math.max(this.g.length,N.g.length),k=[],x=0;x<S;x++)k[x]=this.i(x)|N.i(x);return new d(k,this.h|N.h)},n.xor=function(N){for(var S=Math.max(this.g.length,N.g.length),k=[],x=0;x<S;x++)k[x]=this.i(x)^N.i(x);return new d(k,this.h^N.h)};function Te(N){for(var S=N.g.length+1,k=[],x=0;x<S;x++)k[x]=N.i(x)<<1|N.i(x-1)>>>31;return new d(k,N.h)}function pe(N,S){var k=S>>5;S%=32;for(var x=N.g.length-k,V=[],C=0;C<x;C++)V[C]=0<S?N.i(C+k)>>>S|N.i(C+k+1)<<32-S:N.i(C+k);return new d(V,N.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Cw=i,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=v,d.fromString=E,Zi=d}).apply(typeof sv<"u"?sv:typeof self<"u"?self:typeof window<"u"?window:{});var hc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rw,cl,kw,Sc,xf,Pw,Nw,xw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof hc=="object"&&hc];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var T=0;T<u.length-1;T++){var U=u[T];if(!(U in _))break e;_=_[U]}u=u[u.length-1],T=_[u],m=m(T),m!=T&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,T=!1,U={next:function(){if(!T&&_<u.length){var K=_++;return{value:m(K,u[K]),done:!1}}return T=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},f=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function v(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function E(u,m,_){return u.call.apply(u.bind,arguments)}function A(u,m,_){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,T),u.apply(m,U)}}return function(){return u.apply(m,arguments)}}function R(u,m,_){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:A,R.apply(null,arguments)}function b(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function W(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(T,U,K){for(var ue=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)ue[Ze-2]=arguments[Ze];return m.prototype[U].apply(T,ue)}}function Q(u){const m=u.length;if(0<m){const _=Array(m);for(let T=0;T<m;T++)_[T]=u[T];return _}return[]}function j(u,m){for(let _=1;_<arguments.length;_++){const T=arguments[_];if(p(T)){const U=u.length||0,K=T.length||0;u.length=U+K;for(let ue=0;ue<K;ue++)u[U+ue]=T[ue]}else u.push(T)}}class ne{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function oe(u){return/^[\s\xa0]*$/.test(u)}function ie(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function G(u){return G[" "](u),u}G[" "]=function(){};var Te=ie().indexOf("Gecko")!=-1&&!(ie().toLowerCase().indexOf("webkit")!=-1&&ie().indexOf("Edge")==-1)&&!(ie().indexOf("Trident")!=-1||ie().indexOf("MSIE")!=-1)&&ie().indexOf("Edge")==-1;function pe(u,m,_){for(const T in u)m.call(_,u[T],T,u)}function N(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function S(u){const m={};for(const _ in u)m[_]=u[_];return m}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(u,m){let _,T;for(let U=1;U<arguments.length;U++){T=arguments[U];for(_ in T)u[_]=T[_];for(let K=0;K<k.length;K++)_=k[K],Object.prototype.hasOwnProperty.call(T,_)&&(u[_]=T[_])}}function V(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function C(u){f.setTimeout(()=>{throw u},0)}function I(){var u=J;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class de{constructor(){this.h=this.g=null}add(m,_){const T=$.get();T.set(m,_),this.h?this.h.next=T:this.g=T,this.h=T}}var $=new ne(()=>new he,u=>u.reset());class he{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,L=!1,J=new de,X=()=>{const u=f.Promise.resolve(void 0);ge=()=>{u.then(O)}};var O=()=>{for(var u;u=I();){try{u.h.call(u.g)}catch(_){C(_)}var m=$;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}L=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var _e=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};f.addEventListener("test",_,m),f.removeEventListener("test",_,m)}catch{}return u})();function Oe(u,m){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Te){e:{try{G(m.nodeName);var U=!0;break e}catch{}U=!1}U||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ue[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Oe.aa.h.call(this)}}W(Oe,fe);var Ue={2:"touch",3:"pen",4:"mouse"};Oe.prototype.h=function(){Oe.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Be="closure_listenable_"+(1e6*Math.random()|0),qe=0;function Ye(u,m,_,T,U){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!T,this.ha=U,this.key=++qe,this.da=this.fa=!1}function St(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function In(u){this.src=u,this.g={},this.h=0}In.prototype.add=function(u,m,_,T,U){var K=u.toString();u=this.g[K],u||(u=this.g[K]=[],this.h++);var ue=dn(u,m,T,U);return-1<ue?(m=u[ue],_||(m.fa=!1)):(m=new Ye(m,this.src,K,!!T,U),m.fa=_,u.push(m)),m};function Fr(u,m){var _=m.type;if(_ in u.g){var T=u.g[_],U=Array.prototype.indexOf.call(T,m,void 0),K;(K=0<=U)&&Array.prototype.splice.call(T,U,1),K&&(St(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function dn(u,m,_,T){for(var U=0;U<u.length;++U){var K=u[U];if(!K.da&&K.listener==m&&K.capture==!!_&&K.ha==T)return U}return-1}var Jn="closure_lm_"+(1e6*Math.random()|0),Br={};function _r(u,m,_,T,U){if(Array.isArray(m)){for(var K=0;K<m.length;K++)_r(u,m[K],_,T,U);return null}return _=Hr(_),u&&u[Be]?u.K(m,_,v(T)?!!T.capture:!1,U):gs(u,m,_,!1,T,U)}function gs(u,m,_,T,U,K){if(!m)throw Error("Invalid event type");var ue=v(U)?!!U.capture:!!U,Ze=zr(u);if(Ze||(u[Jn]=Ze=new In(u)),_=Ze.add(m,_,T,ue,K),_.proxy)return _;if(T=ys(),_.proxy=T,T.src=u,T.listener=_,u.addEventListener)_e||(U=ue),U===void 0&&(U=!1),u.addEventListener(m.toString(),T,U);else if(u.attachEvent)u.attachEvent(nn(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function ys(){function u(_){return m.call(u.src,u.listener,_)}const m=_i;return u}function $r(u,m,_,T,U){if(Array.isArray(m))for(var K=0;K<m.length;K++)$r(u,m[K],_,T,U);else T=v(T)?!!T.capture:!!T,_=Hr(_),u&&u[Be]?(u=u.i,m=String(m).toString(),m in u.g&&(K=u.g[m],_=dn(K,_,T,U),-1<_&&(St(K[_]),Array.prototype.splice.call(K,_,1),K.length==0&&(delete u.g[m],u.h--)))):u&&(u=zr(u))&&(m=u.g[m.toString()],u=-1,m&&(u=dn(m,_,T,U)),(_=-1<u?m[u]:null)&&Mn(_))}function Mn(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Be])Fr(m.i,u);else{var _=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(_,T,u.capture):m.detachEvent?m.detachEvent(nn(_),T):m.addListener&&m.removeListener&&m.removeListener(T),(_=zr(m))?(Fr(_,u),_.h==0&&(_.src=null,m[Jn]=null)):St(u)}}}function nn(u){return u in Br?Br[u]:Br[u]="on"+u}function _i(u,m){if(u.da)u=!0;else{m=new Oe(m,this);var _=u.listener,T=u.ha||u.src;u.fa&&Mn(u),u=_.call(T,m)}return u}function zr(u){return u=u[Jn],u instanceof In?u:null}var qr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hr(u){return typeof u=="function"?u:(u[qr]||(u[qr]=function(m){return u.handleEvent(m)}),u[qr])}function pt(){q.call(this),this.i=new In(this),this.M=this,this.F=null}W(pt,q),pt.prototype[Be]=!0,pt.prototype.removeEventListener=function(u,m,_,T){$r(this,u,m,_,T)};function mt(u,m){var _,T=u.F;if(T)for(_=[];T;T=T.F)_.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new fe(m,u);else if(m instanceof fe)m.target=m.target||u;else{var U=m;m=new fe(T,u),x(m,U)}if(U=!0,_)for(var K=_.length-1;0<=K;K--){var ue=m.g=_[K];U=jn(ue,T,!0,m)&&U}if(ue=m.g=u,U=jn(ue,T,!0,m)&&U,U=jn(ue,T,!1,m)&&U,_)for(K=0;K<_.length;K++)ue=m.g=_[K],U=jn(ue,T,!1,m)&&U}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],T=0;T<_.length;T++)St(_[T]);delete u.g[m],u.h--}}this.F=null},pt.prototype.K=function(u,m,_,T){return this.i.add(String(u),m,!1,_,T)},pt.prototype.L=function(u,m,_,T){return this.i.add(String(u),m,!0,_,T)};function jn(u,m,_,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,K=0;K<m.length;++K){var ue=m[K];if(ue&&!ue.da&&ue.capture==_){var Ze=ue.listener,Nt=ue.ha||ue.src;ue.fa&&Fr(u.i,ue),U=Ze.call(Nt,T)!==!1&&U}}return U&&!T.defaultPrevented}function vs(u,m,_){if(typeof u=="function")_&&(u=R(u,_));else if(u&&typeof u.handleEvent=="function")u=R(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:f.setTimeout(u,m||0)}function Un(u){u.g=vs(()=>{u.g=null,u.i&&(u.i=!1,Un(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class wr extends q{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Un(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wr(u){q.call(this),this.h=u,this.g={}}W(Wr,q);var _s=[];function wi(u){pe(u.g,function(m,_){this.g.hasOwnProperty(_)&&Mn(m)},u),u.g={}}Wr.prototype.N=function(){Wr.aa.N.call(this),wi(this)},Wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ei=f.JSON.stringify,z=f.JSON.parse,ae=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function ce(){}ce.prototype.h=null;function Me(u){return u.h||(u.h=u.i())}function be(){}var Re={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function lt(){fe.call(this,"d")}W(lt,fe);function Sn(){fe.call(this,"c")}W(Sn,fe);var An={},ws=null;function Es(){return ws=ws||new pt}An.La="serverreachability";function Ia(u){fe.call(this,An.La,u)}W(Ia,fe);function Kr(u){const m=Es();mt(m,new Ia(m))}An.STAT_EVENT="statevent";function Sa(u,m){fe.call(this,An.STAT_EVENT,u),this.stat=m}W(Sa,fe);function wt(u){const m=Es();mt(m,new Sa(m,u))}An.Ma="timingevent";function mo(u,m){fe.call(this,An.Ma,u),this.size=m}W(mo,fe);function Zn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},m)}function Ts(){this.g=!0}Ts.prototype.xa=function(){this.g=!1};function Is(u,m,_,T,U,K){u.info(function(){if(u.g)if(K)for(var ue="",Ze=K.split("&"),Nt=0;Nt<Ze.length;Nt++){var We=Ze[Nt].split("=");if(1<We.length){var Ot=We[0];We=We[1];var At=Ot.split("_");ue=2<=At.length&&At[1]=="type"?ue+(Ot+"="+We+"&"):ue+(Ot+"=redacted&")}}else ue=null;else ue=K;return"XMLHTTP REQ ("+T+") [attempt "+U+"]: "+m+`
`+_+`
`+ue})}function go(u,m,_,T,U,K,ue){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+U+"]: "+m+`
`+_+`
`+K+" "+ue})}function er(u,m,_,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Id(u,_)+(T?" "+T:"")})}function Aa(u,m){u.info(function(){return"TIMEOUT: "+m})}Ts.prototype.info=function(){};function Id(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var T=_[u];if(!(2>T.length)){var U=T[1];if(Array.isArray(U)&&!(1>U.length)){var K=U[0];if(K!="noop"&&K!="stop"&&K!="close")for(var ue=1;ue<U.length;ue++)U[ue]=""}}}}return Ei(_)}catch{return m}}var yo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},tr;function Ss(){}W(Ss,ce),Ss.prototype.g=function(){return new XMLHttpRequest},Ss.prototype.i=function(){return{}},tr=new Ss;function nr(u,m,_,T){this.j=u,this.i=m,this.l=_,this.R=T||1,this.U=new Wr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Yl}function Yl(){this.i=null,this.g="",this.h=!1}var Ca={},vo={};function _o(u,m,_){u.L=1,u.v=Ci(Rn(m)),u.m=_,u.P=!0,Ra(u,null)}function Ra(u,m){u.F=Date.now(),rt(u),u.A=Rn(u.v);var _=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),ki(_.i,"t",T),u.C=0,_=u.j.J,u.h=new Yl,u.g=mu(u.j,_?m:null,!u.m),0<u.O&&(u.M=new wr(R(u.Y,u,u.g),u.O)),m=u.U,_=u.g,T=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(_s[0]=U.toString()),U=_s);for(var K=0;K<U.length;K++){var ue=_r(_,U[K],T||m.handleEvent,!1,m.h||m);if(!ue)break;m.g[ue.key]=ue}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Kr(),Is(u.i,u.u,u.A,u.l,u.R,u.m)}nr.prototype.ca=function(u){u=u.target;const m=this.M;m&&fn(u)==3?m.j():this.Y(u)},nr.prototype.Y=function(u){try{if(u==this.g)e:{const At=fn(this.g);var m=this.g.Ba();const $n=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||Da(this.g)))){this.J||At!=4||m==7||(m==8||0>=$n?Kr(3):Kr(2)),As(this);var _=this.g.Z();this.X=_;t:if(Jl(this)){var T=Da(this.g);u="";var U=T.length,K=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fn(this),Ti(this);var ue="";break t}this.h.i=new f.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,u+=this.h.i.decode(T[m],{stream:!(K&&m==U-1)});T.length=0,this.h.g+=u,this.C=0,ue=this.h.g}else ue=this.g.oa();if(this.o=_==200,go(this.i,this.u,this.A,this.l,this.R,At,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Ze,Nt=this.g;if((Ze=Nt.g?Nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oe(Ze)){var We=Ze;break t}}We=null}if(_=We)er(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ka(this,_);else{this.o=!1,this.s=3,wt(12),Fn(this),Ti(this);break e}}if(this.P){_=!0;let Pn;for(;!this.J&&this.C<ue.length;)if(Pn=Sd(this,ue),Pn==vo){At==4&&(this.s=4,wt(14),_=!1),er(this.i,this.l,null,"[Incomplete Response]");break}else if(Pn==Ca){this.s=4,wt(15),er(this.i,this.l,ue,"[Invalid Chunk]"),_=!1;break}else er(this.i,this.l,Pn,null),ka(this,Pn);if(Jl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||ue.length!=0||this.h.h||(this.s=1,wt(16),_=!1),this.o=this.o&&_,!_)er(this.i,this.l,ue,"[Invalid Chunked Response]"),Fn(this),Ti(this);else if(0<ue.length&&!this.W){this.W=!0;var Ot=this.j;Ot.g==this&&Ot.ba&&!Ot.M&&(Ot.j.info("Great, no buffering proxy detected. Bytes received: "+ue.length),Va(Ot),Ot.M=!0,wt(11))}}else er(this.i,this.l,ue,null),ka(this,ue);At==4&&Fn(this),this.o&&!this.J&&(At==4?No(this.j,this):(this.o=!1,rt(this)))}else Ao(this.g),_==400&&0<ue.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),Fn(this),Ti(this)}}}catch{}finally{}};function Jl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Sd(u,m){var _=u.C,T=m.indexOf(`
`,_);return T==-1?vo:(_=Number(m.substring(_,T)),isNaN(_)?Ca:(T+=1,T+_>m.length?vo:(m=m.slice(T,T+_),u.C=T+_,m)))}nr.prototype.cancel=function(){this.J=!0,Fn(this)};function rt(u){u.S=Date.now()+u.I,Zl(u,u.I)}function Zl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Zn(R(u.ba,u),m)}function As(u){u.B&&(f.clearTimeout(u.B),u.B=null)}nr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Aa(this.i,this.A),this.L!=2&&(Kr(),wt(17)),Fn(this),this.s=2,Ti(this)):Zl(this,this.S-u)};function Ti(u){u.j.G==0||u.J||No(u.j,u)}function Fn(u){As(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,wi(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function ka(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||rn(_.h,u))){if(!u.K&&rn(_.h,u)&&_.G==3){try{var T=_.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var U=T;if(U[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)Po(_),ar(_);else break e;ko(_),wt(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=Zn(R(_.Za,_),6e3));if(1>=tu(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Jr(_,11)}else if((u.K||_.g==u)&&Po(_),!oe(m))for(U=_.Da.g.parse(m),m=0;m<U.length;m++){let We=U[m];if(_.T=We[0],We=We[1],_.G==2)if(We[0]=="c"){_.K=We[1],_.ia=We[2];const Ot=We[3];Ot!=null&&(_.la=Ot,_.j.info("VER="+_.la));const At=We[4];At!=null&&(_.Aa=At,_.j.info("SVER="+_.Aa));const $n=We[5];$n!=null&&typeof $n=="number"&&0<$n&&(T=1.5*$n,_.L=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const Pn=u.g;if(Pn){const bs=Pn.g?Pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bs){var K=T.h;K.g||bs.indexOf("spdy")==-1&&bs.indexOf("quic")==-1&&bs.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&(Pa(K,K.h),K.h=null))}if(T.D){const bo=Pn.g?Pn.g.getResponseHeader("X-HTTP-Session-Id"):null;bo&&(T.ya=bo,tt(T.I,T.D,bo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),T=_;var ue=u;if(T.qa=pu(T,T.J?T.ia:null,T.W),ue.K){nu(T.h,ue);var Ze=ue,Nt=T.L;Nt&&(Ze.I=Nt),Ze.B&&(As(Ze),rt(Ze)),T.g=ue}else xs(T);0<_.i.length&&Sr(_)}else We[0]!="stop"&&We[0]!="close"||Jr(_,7);else _.G==3&&(We[0]=="stop"||We[0]=="close"?We[0]=="stop"?Jr(_,7):Bt(_):We[0]!="noop"&&_.l&&_.l.ta(We),_.v=0)}}Kr(4)}catch{}}var eu=class{constructor(u,m){this.g=u,this.map=m}};function Cs(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Cn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function tu(u){return u.h?1:u.g?u.g.size:0}function rn(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Pa(u,m){u.g?u.g.add(m):u.h=m}function nu(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Cs.prototype.cancel=function(){if(this.i=ru(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function ru(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return Q(u.i)}function wo(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,T=0;T<_;T++)m.push(u[T]);return m}m=[],_=0;for(T in u)m[_++]=u[T];return m}function Eo(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const T in u)m[_++]=T;return m}}}function Ii(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Eo(u),T=wo(u),U=T.length,K=0;K<U;K++)m.call(void 0,T[K],_&&_[K],u)}var Rs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ad(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var T=u[_].indexOf("="),U=null;if(0<=T){var K=u[_].substring(0,T);U=u[_].substring(T+1)}else K=u[_];m(K,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Gr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Gr){this.h=u.h,ks(this,u.j),this.o=u.o,this.g=u.g,Si(this,u.s),this.l=u.l;var m=u.i,_=new Er;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Ai(this,_),this.m=u.m}else u&&(m=String(u).match(Rs))?(this.h=!1,ks(this,m[1]||"",!0),this.o=He(m[2]||""),this.g=He(m[3]||"",!0),Si(this,m[4]),this.l=He(m[5]||"",!0),Ai(this,m[6]||"",!0),this.m=He(m[7]||"")):(this.h=!1,this.i=new Er(null,this.h))}Gr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Ri(m,To,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Ri(m,To,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Ri(_,_.charAt(0)=="/"?ou:su,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Ri(_,Na)),u.join("")};function Rn(u){return new Gr(u)}function ks(u,m,_){u.j=_?He(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Si(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Ai(u,m,_){m instanceof Er?(u.i=m,Tr(u.i,u.h)):(_||(m=Ri(m,au)),u.i=new Er(m,u.h))}function tt(u,m,_){u.i.set(m,_)}function Ci(u){return tt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function He(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ri(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,iu),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function iu(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var To=/[#\/\?@]/g,su=/[#\?:]/g,ou=/[#\?]/g,au=/[#\?@]/g,Na=/#/g;function Er(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Ft(u){u.g||(u.g=new Map,u.h=0,u.i&&Ad(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=Er.prototype,n.add=function(u,m){Ft(this),this.i=null,u=Bn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function rr(u,m){Ft(u),m=Bn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function ir(u,m){return Ft(u),m=Bn(u,m),u.g.has(m)}n.forEach=function(u,m){Ft(this),this.g.forEach(function(_,T){_.forEach(function(U){u.call(m,U,T,this)},this)},this)},n.na=function(){Ft(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let T=0;T<m.length;T++){const U=u[T];for(let K=0;K<U.length;K++)_.push(m[T])}return _},n.V=function(u){Ft(this);let m=[];if(typeof u=="string")ir(this,u)&&(m=m.concat(this.g.get(Bn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return Ft(this),this.i=null,u=Bn(this,u),ir(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function ki(u,m,_){rr(u,m),0<_.length&&(u.i=null,u.g.set(Bn(u,m),Q(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var T=m[_];const K=encodeURIComponent(String(T)),ue=this.V(T);for(T=0;T<ue.length;T++){var U=K;ue[T]!==""&&(U+="="+encodeURIComponent(String(ue[T]))),u.push(U)}}return this.i=u.join("&")};function Bn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Tr(u,m){m&&!u.j&&(Ft(u),u.i=null,u.g.forEach(function(_,T){var U=T.toLowerCase();T!=U&&(rr(this,T),ki(this,U,_))},u)),u.j=m}function Cd(u,m){const _=new Ts;if(f.Image){const T=new Image;T.onload=b(hn,_,"TestLoadImage: loaded",!0,m,T),T.onerror=b(hn,_,"TestLoadImage: error",!1,m,T),T.onabort=b(hn,_,"TestLoadImage: abort",!1,m,T),T.ontimeout=b(hn,_,"TestLoadImage: timeout",!1,m,T),f.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function lu(u,m){const _=new Ts,T=new AbortController,U=setTimeout(()=>{T.abort(),hn(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(K=>{clearTimeout(U),K.ok?hn(_,"TestPingServer: ok",!0,m):hn(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),hn(_,"TestPingServer: error",!1,m)})}function hn(u,m,_,T,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),T(_)}catch{}}function Rd(){this.g=new ae}function uu(u,m,_){const T=_||"";try{Ii(u,function(U,K){let ue=U;v(U)&&(ue=Ei(U)),m.push(T+K+"="+encodeURIComponent(ue))})}catch(U){throw m.push(T+"type="+encodeURIComponent("_badmap")),U}}function Qr(u){this.l=u.Ub||null,this.j=u.eb||!1}W(Qr,ce),Qr.prototype.g=function(){return new Ps(this.l,this.j)},Qr.prototype.i=(function(u){return function(){return u}})({});function Ps(u,m){pt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}W(Ps,pt),n=Ps.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,or(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||f).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sr(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,or(this)),this.g&&(this.readyState=3,or(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cu(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function cu(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?sr(this):or(this),this.readyState==3&&cu(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,sr(this))},n.Qa=function(u){this.g&&(this.response=u,sr(this))},n.ga=function(){this.g&&sr(this)};function sr(u){u.readyState=4,u.l=null,u.j=null,u.v=null,or(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function or(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ps.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Xr(u){let m="";return pe(u,function(_,T){m+=T,m+=":",m+=_,m+=`\r
`}),m}function Pi(u,m,_){e:{for(T in _){var T=!1;break e}T=!0}T||(_=Xr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):tt(u,m,_))}function ut(u){pt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}W(ut,pt);var kd=/^https?$/i,xa=["POST","PUT"];n=ut.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():tr.g(),this.v=this.o?Me(this.o):Me(tr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(K){Ns(this,K);return}if(u=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var U in T)_.set(U,T[U]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const K of T.keys())_.set(K,T.get(K));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(K=>K.toLowerCase()=="content-type"),U=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(xa,m,void 0))||T||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,ue]of _)this.g.setRequestHeader(K,ue);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{So(this),this.u=!0,this.g.send(u),this.u=!1}catch(K){Ns(this,K)}};function Ns(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Io(u),kn(u)}function Io(u){u.A||(u.A=!0,mt(u,"complete"),mt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,mt(this,"complete"),mt(this,"abort"),kn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),kn(this,!0)),ut.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ba(this):this.bb())},n.bb=function(){ba(this)};function ba(u){if(u.h&&typeof d<"u"&&(!u.v[1]||fn(u)!=4||u.Z()!=2)){if(u.u&&fn(u)==4)vs(u.Ea,0,u);else if(mt(u,"readystatechange"),fn(u)==4){u.h=!1;try{const ue=u.Z();e:switch(ue){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var T;if(T=ue===0){var U=String(u.D).match(Rs)[1]||null;!U&&f.self&&f.self.location&&(U=f.self.location.protocol.slice(0,-1)),T=!kd.test(U?U.toLowerCase():"")}_=T}if(_)mt(u,"complete"),mt(u,"success");else{u.m=6;try{var K=2<fn(u)?u.g.statusText:""}catch{K=""}u.l=K+" ["+u.Z()+"]",Io(u)}}finally{kn(u)}}}}function kn(u,m){if(u.g){So(u);const _=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||mt(u,"ready");try{_.onreadystatechange=T}catch{}}}function So(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function fn(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),z(m)}};function Da(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ao(u){const m={};u=(u.g&&2<=fn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(oe(u[T]))continue;var _=V(u[T]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const K=m[U]||[];m[U]=K,K.push(_)}N(m,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ir(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function Oa(u){this.Aa=0,this.i=[],this.j=new Ts,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ir("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ir("baseRetryDelayMs",5e3,u),this.cb=Ir("retryDelaySeedMs",1e4,u),this.Wa=Ir("forwardChannelMaxRetries",2,u),this.wa=Ir("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Cs(u&&u.concurrentRequestLimit),this.Da=new Rd,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Oa.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,T){wt(0),this.W=u,this.H=m||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.I=pu(this,null,this.W),Sr(this)};function Bt(u){if(Co(u),u.G==3){var m=u.U++,_=Rn(u.I);if(tt(_,"SID",u.K),tt(_,"RID",m),tt(_,"TYPE","terminate"),Yr(u,_),m=new nr(u,u.j,m),m.L=2,m.v=Ci(Rn(_)),_=!1,f.navigator&&f.navigator.sendBeacon)try{_=f.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&f.Image&&(new Image().src=m.v,_=!0),_||(m.g=mu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),rt(m)}fu(u)}function ar(u){u.g&&(Va(u),u.g.cancel(),u.g=null)}function Co(u){ar(u),u.u&&(f.clearTimeout(u.u),u.u=null),Po(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Sr(u){if(!Cn(u.h)&&!u.s){u.s=!0;var m=u.Ga;ge||X(),L||(ge(),L=!0),J.add(m,u),u.B=0}}function Pd(u,m){return tu(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Zn(R(u.Ga,u,m),hu(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new nr(this,this.j,u);let K=this.o;if(this.S&&(K?(K=S(K),x(K,this.S)):K=this.S),this.m!==null||this.O||(U.H=K,K=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=Ni(this,U,m),_=Rn(this.I),tt(_,"RID",u),tt(_,"CVER",22),this.D&&tt(_,"X-HTTP-Session-Id",this.D),Yr(this,_),K&&(this.O?m="headers="+encodeURIComponent(String(Xr(K)))+"&"+m:this.m&&Pi(_,this.m,K)),Pa(this.h,U),this.Ua&&tt(_,"TYPE","init"),this.P?(tt(_,"$req",m),tt(_,"SID","null"),U.T=!0,_o(U,_,null)):_o(U,_,m),this.G=2}}else this.G==3&&(u?Ro(this,u):this.i.length==0||Cn(this.h)||Ro(this))};function Ro(u,m){var _;m?_=m.l:_=u.U++;const T=Rn(u.I);tt(T,"SID",u.K),tt(T,"RID",_),tt(T,"AID",u.T),Yr(u,T),u.m&&u.o&&Pi(T,u.m,u.o),_=new nr(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Ni(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Pa(u.h,_),_o(_,T,m)}function Yr(u,m){u.H&&pe(u.H,function(_,T){tt(m,T,_)}),u.l&&Ii({},function(_,T){tt(m,T,_)})}function Ni(u,m,_){_=Math.min(u.i.length,_);var T=u.l?R(u.l.Na,u.l,u):null;e:{var U=u.i;let K=-1;for(;;){const ue=["count="+_];K==-1?0<_?(K=U[0].g,ue.push("ofs="+K)):K=0:ue.push("ofs="+K);let Ze=!0;for(let Nt=0;Nt<_;Nt++){let We=U[Nt].g;const Ot=U[Nt].map;if(We-=K,0>We)K=Math.max(0,U[Nt].g-100),Ze=!1;else try{uu(Ot,ue,"req"+We+"_")}catch{T&&T(Ot)}}if(Ze){T=ue.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,T}function xs(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;ge||X(),L||(ge(),L=!0),J.add(m,u),u.v=0}}function ko(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Zn(R(u.Fa,u),hu(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,du(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Zn(R(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),ar(this),du(this))};function Va(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function du(u){u.g=new nr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=Rn(u.qa);tt(m,"RID","rpc"),tt(m,"SID",u.K),tt(m,"AID",u.T),tt(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&tt(m,"TO",u.ja),tt(m,"TYPE","xmlhttp"),Yr(u,m),u.m&&u.o&&Pi(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Ci(Rn(m)),_.m=null,_.P=!0,Ra(_,u)}n.Za=function(){this.C!=null&&(this.C=null,ar(this),ko(this),wt(19))};function Po(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function No(u,m){var _=null;if(u.g==m){Po(u),Va(u),u.g=null;var T=2}else if(rn(u.h,m))_=m.D,nu(u.h,m),T=1;else return;if(u.G!=0){if(m.o)if(T==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var U=u.B;T=Es(),mt(T,new mo(T,_)),Sr(u)}else xs(u);else if(U=m.s,U==3||U==0&&0<m.X||!(T==1&&Pd(u,m)||T==2&&ko(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),U){case 1:Jr(u,5);break;case 4:Jr(u,10);break;case 3:Jr(u,6);break;default:Jr(u,2)}}}function hu(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Jr(u,m){if(u.j.info("Error code "+m),m==2){var _=R(u.fb,u),T=u.Xa;const U=!T;T=new Gr(T||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||ks(T,"https"),Ci(T),U?Cd(T.toString(),_):lu(T.toString(),_)}else wt(2);u.G=0,u.l&&u.l.sa(m),fu(u),Co(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function fu(u){if(u.G=0,u.ka=[],u.l){const m=ru(u.h);(m.length!=0||u.i.length!=0)&&(j(u.ka,m),j(u.ka,u.i),u.h.i.length=0,Q(u.i),u.i.length=0),u.l.ra()}}function pu(u,m,_){var T=_ instanceof Gr?Rn(_):new Gr(_);if(T.g!="")m&&(T.g=m+"."+T.g),Si(T,T.s);else{var U=f.location;T=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var K=new Gr(null);T&&ks(K,T),m&&(K.g=m),U&&Si(K,U),_&&(K.l=_),T=K}return _=u.D,m=u.ya,_&&m&&tt(T,_,m),tt(T,"VER",u.la),Yr(u,T),T}function mu(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new ut(new Qr({eb:_})):new ut(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function La(){}n=La.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function xo(){}xo.prototype.g=function(u,m){return new sn(u,m)};function sn(u,m){pt.call(this),this.g=new Oa(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!oe(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!oe(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Ar(this)}W(sn,pt),sn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},sn.prototype.close=function(){Bt(this.g)},sn.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Ei(u),u=_);m.i.push(new eu(m.Ya++,u)),m.G==3&&Sr(m)},sn.prototype.N=function(){this.g.l=null,delete this.j,Bt(this.g),delete this.g,sn.aa.N.call(this)};function gu(u){lt.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}W(gu,lt);function yu(){Sn.call(this),this.status=1}W(yu,Sn);function Ar(u){this.g=u}W(Ar,La),Ar.prototype.ua=function(){mt(this.g,"a")},Ar.prototype.ta=function(u){mt(this.g,new gu(u))},Ar.prototype.sa=function(u){mt(this.g,new yu)},Ar.prototype.ra=function(){mt(this.g,"b")},xo.prototype.createWebChannel=xo.prototype.g,sn.prototype.send=sn.prototype.o,sn.prototype.open=sn.prototype.m,sn.prototype.close=sn.prototype.close,xw=function(){return new xo},Nw=function(){return Es()},Pw=An,xf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},yo.NO_ERROR=0,yo.TIMEOUT=8,yo.HTTP_ERROR=6,Sc=yo,Xl.COMPLETE="complete",kw=Xl,be.EventType=Re,Re.OPEN="a",Re.CLOSE="b",Re.ERROR="c",Re.MESSAGE="d",pt.prototype.listen=pt.prototype.K,cl=be,ut.prototype.listenOnce=ut.prototype.L,ut.prototype.getLastError=ut.prototype.Ka,ut.prototype.getLastErrorCode=ut.prototype.Ba,ut.prototype.getStatus=ut.prototype.Z,ut.prototype.getResponseJson=ut.prototype.Oa,ut.prototype.getResponseText=ut.prototype.oa,ut.prototype.send=ut.prototype.ea,ut.prototype.setWithCredentials=ut.prototype.Ha,Rw=ut}).apply(typeof hc<"u"?hc:typeof self<"u"?self:typeof window<"u"?window:{});const ov="@firebase/firestore",av="4.8.0";/**
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
 */class Jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Jt.UNAUTHENTICATED=new Jt(null),Jt.GOOGLE_CREDENTIALS=new Jt("google-credentials-uid"),Jt.FIRST_PARTY=new Jt("first-party-uid"),Jt.MOCK_USER=new Jt("mock-user");/**
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
 */let ma="11.10.0";/**
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
 */const no=new rp("@firebase/firestore");function Zo(){return no.logLevel}function ve(n,...e){if(no.logLevel<=$e.DEBUG){const t=e.map(pp);no.debug(`Firestore (${ma}): ${n}`,...t)}}function gi(n,...e){if(no.logLevel<=$e.ERROR){const t=e.map(pp);no.error(`Firestore (${ma}): ${n}`,...t)}}function rs(n,...e){if(no.logLevel<=$e.WARN){const t=e.map(pp);no.warn(`Firestore (${ma}): ${n}`,...t)}}function pp(n){if(typeof n=="string")return n;try{/**
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
 */function xe(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,bw(n,i,t)}function bw(n,e,t){let i=`FIRESTORE (${ma}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw gi(i),new Error(i)}function Je(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||bw(e,o,i)}function Le(n,e){return n}/**
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
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class me extends vr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class es{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Dw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Jt.UNAUTHENTICATED)))}shutdown(){}}class iR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class sR{constructor(e){this.t=e,this.currentUser=Jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Je(this.o===void 0,42304);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new es;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new es,e.enqueueRetryable((()=>o(this.currentUser)))};const d=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},f=p=>{ve("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((p=>f(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(ve("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new es)}}),0),d()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ve("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Je(typeof i.accessToken=="string",31837,{l:i}),new Dw(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Je(e===null||typeof e=="string",2055,{h:e}),new Jt(e)}}class oR{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Jt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class aR{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new oR(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Jt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class lv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lR{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Je(this.o===void 0,3512);const i=l=>{l.error!=null&&ve("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const d=l.token!==this.m;return this.m=l.token,ve("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{ve("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ve("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new lv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Je(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new lv(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function uR(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */function Ow(){return new TextEncoder}/**
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
 */class mp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=uR(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function je(n,e){return n<e?-1:n>e?1:0}function bf(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return je(i,o);{const l=Ow(),d=cR(l.encode(uv(n,t)),l.encode(uv(e,t)));return d!==0?d:je(i,o)}}t+=i>65535?2:1}return je(n.length,e.length)}function uv(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function cR(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return je(n[t],e[t]);return je(n.length,e.length)}function la(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
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
 */const cv="__name__";class Nr{constructor(e,t,i){t===void 0?t=0:t>e.length&&xe(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&xe(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Nr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Nr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=Nr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return je(e.length,t.length)}static compareSegments(e,t){const i=Nr.isNumericId(e),o=Nr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?Nr.extractNumericId(e).compare(Nr.extractNumericId(t)):bf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Zi.fromString(e.substring(4,e.length-2))}}class st extends Nr{construct(e,t,i){return new st(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new me(Y.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new st(t)}static emptyPath(){return new st([])}}const dR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ht extends Nr{construct(e,t,i){return new Ht(e,t,i)}static isValidIdentifier(e){return dR.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ht.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===cv}static keyField(){return new Ht([cv])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new me(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let d=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new me(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new me(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else f==="`"?(d=!d,o++):f!=="."||d?(i+=f,o++):(l(),o++)}if(l(),d)throw new me(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ht(t)}static emptyPath(){return new Ht([])}}/**
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
 */function Vw(n,e,t){if(!t)throw new me(Y.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function hR(n,e,t,i){if(e===!0&&i===!0)throw new me(Y.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function dv(n){if(!Ce.isDocumentKey(n))throw new me(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function hv(n){if(Ce.isDocumentKey(n))throw new me(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Lw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function nd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":xe(12329,{type:typeof n})}function Ln(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new me(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=nd(n);throw new me(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Pt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Bl(n,e){if(!Lw(n))throw new me(Y.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const d=n[i];if(o&&typeof d!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&d!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new me(Y.INVALID_ARGUMENT,t);return!0}/**
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
 */const fv=-62135596800,pv=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*pv);return new nt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new me(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new me(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<fv)throw new me(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new me(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/pv}_compareTo(e){return this.seconds===e.seconds?je(this.nanoseconds,e.nanoseconds):je(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:nt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Bl(e,nt._jsonSchema))return new nt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-fv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}nt._jsonSchemaVersion="firestore/timestamp/1.0",nt._jsonSchema={type:Pt("string",nt._jsonSchemaVersion),seconds:Pt("number"),nanoseconds:Pt("number")};/**
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
 */const Al=-1;function fR(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ve.fromTimestamp(i===1e9?new nt(t+1,0):new nt(t,i));return new is(o,Ce.empty(),e)}function pR(n){return new is(n.readTime,n.key,Al)}class is{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new is(Ve.min(),Ce.empty(),Al)}static max(){return new is(Ve.max(),Ce.empty(),Al)}}function mR(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Ce.comparator(n.documentKey,e.documentKey),t!==0?t:je(n.largestBatchId,e.largestBatchId))}/**
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
 */const gR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function ga(n){if(n.code!==Y.FAILED_PRECONDITION||n.message!==gR)throw n;ve("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&xe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ee(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ee?t:ee.resolve(t)}catch(t){return ee.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ee.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ee.reject(t)}static resolve(e){return new ee(((t,i)=>{t(e)}))}static reject(e){return new ee(((t,i)=>{i(e)}))}static waitFor(e){return new ee(((t,i)=>{let o=0,l=0,d=!1;e.forEach((f=>{++o,f.next((()=>{++l,d&&l===o&&t()}),(p=>i(p)))})),d=!0,l===o&&t()}))}static or(e){let t=ee.resolve(!1);for(const i of e)t=t.next((o=>o?ee.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new ee(((i,o)=>{const l=e.length,d=new Array(l);let f=0;for(let p=0;p<l;p++){const v=p;t(e[v]).next((E=>{d[v]=E,++f,f===l&&i(d)}),(E=>o(E)))}}))}static doWhile(e,t){return new ee(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function vR(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ya(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class rd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this._e(i),this.ae=i=>t.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}rd.ue=-1;/**
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
 */const gp=-1;function id(n){return n==null}function jc(n){return n===0&&1/n==-1/0}function _R(n){return typeof n=="number"&&Number.isInteger(n)&&!jc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Mw="";function wR(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=mv(e)),e=ER(n.get(t),e);return mv(e)}function ER(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case Mw:t+="";break;default:t+=l}}return t}function mv(n){return n+Mw+""}/**
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
 */function gv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function fs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function jw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ft{constructor(e,t){this.comparator=e,this.root=t||qt.EMPTY}insert(e,t){return new ft(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,qt.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fc(this.root,e,this.comparator,!1)}getReverseIterator(){return new fc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fc(this.root,e,this.comparator,!0)}}class fc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??qt.RED,this.left=o??qt.EMPTY,this.right=l??qt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new qt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return qt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return qt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw xe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw xe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw xe(27949);return e+(this.isRed()?0:1)}}qt.EMPTY=null,qt.RED=!0,qt.BLACK=!1;qt.EMPTY=new class{constructor(){this.size=0}get key(){throw xe(57766)}get value(){throw xe(16141)}get color(){throw xe(16727)}get left(){throw xe(29726)}get right(){throw xe(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new qt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Dt{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new yv(this.data.getIterator())}getIteratorFrom(e){return new yv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof Dt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Dt(this.comparator);return t.data=e,t}}class yv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class On{constructor(e){this.fields=e,e.sort(Ht.comparator)}static empty(){return new On([])}unionWith(e){let t=new Dt(Ht.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new On(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return la(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class Uw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Wt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Uw("Invalid base64 string: "+l):l}})(e);return new Wt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let d=0;d<o.length;++d)l+=String.fromCharCode(o[d]);return l})(e);return new Wt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return je(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Wt.EMPTY_BYTE_STRING=new Wt("");const TR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ss(n){if(Je(!!n,39018),typeof n=="string"){let e=0;const t=TR.exec(n);if(Je(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Tt(n.seconds),nanos:Tt(n.nanos)}}function Tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function os(n){return typeof n=="string"?Wt.fromBase64String(n):Wt.fromUint8Array(n)}/**
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
 */const Fw="server_timestamp",Bw="__type__",$w="__previous_value__",zw="__local_write_time__";function yp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Bw])===null||t===void 0?void 0:t.stringValue)===Fw}function sd(n){const e=n.mapValue.fields[$w];return yp(e)?sd(e):e}function Cl(n){const e=ss(n.mapValue.fields[zw].timestampValue);return new nt(e.seconds,e.nanos)}/**
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
 */class IR{constructor(e,t,i,o,l,d,f,p,v,E){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=d,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=v,this.isUsingEmulator=E}}const Uc="(default)";class Rl{constructor(e,t){this.projectId=e,this.database=t||Uc}static empty(){return new Rl("","")}get isDefaultDatabase(){return this.database===Uc}isEqual(e){return e instanceof Rl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const qw="__type__",SR="__max__",pc={mapValue:{}},Hw="__vector__",Fc="value";function as(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?yp(n)?4:CR(n)?9007199254740991:AR(n)?10:11:xe(28295,{value:n})}function Ur(n,e){if(n===e)return!0;const t=as(n);if(t!==as(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Cl(n).isEqual(Cl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const d=ss(o.timestampValue),f=ss(l.timestampValue);return d.seconds===f.seconds&&d.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return os(o.bytesValue).isEqual(os(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return Tt(o.geoPointValue.latitude)===Tt(l.geoPointValue.latitude)&&Tt(o.geoPointValue.longitude)===Tt(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return Tt(o.integerValue)===Tt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const d=Tt(o.doubleValue),f=Tt(l.doubleValue);return d===f?jc(d)===jc(f):isNaN(d)&&isNaN(f)}return!1})(n,e);case 9:return la(n.arrayValue.values||[],e.arrayValue.values||[],Ur);case 10:case 11:return(function(o,l){const d=o.mapValue.fields||{},f=l.mapValue.fields||{};if(gv(d)!==gv(f))return!1;for(const p in d)if(d.hasOwnProperty(p)&&(f[p]===void 0||!Ur(d[p],f[p])))return!1;return!0})(n,e);default:return xe(52216,{left:n})}}function kl(n,e){return(n.values||[]).find((t=>Ur(t,e)))!==void 0}function ua(n,e){if(n===e)return 0;const t=as(n),i=as(e);if(t!==i)return je(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return je(n.booleanValue,e.booleanValue);case 2:return(function(l,d){const f=Tt(l.integerValue||l.doubleValue),p=Tt(d.integerValue||d.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1})(n,e);case 3:return vv(n.timestampValue,e.timestampValue);case 4:return vv(Cl(n),Cl(e));case 5:return bf(n.stringValue,e.stringValue);case 6:return(function(l,d){const f=os(l),p=os(d);return f.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,d){const f=l.split("/"),p=d.split("/");for(let v=0;v<f.length&&v<p.length;v++){const E=je(f[v],p[v]);if(E!==0)return E}return je(f.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,d){const f=je(Tt(l.latitude),Tt(d.latitude));return f!==0?f:je(Tt(l.longitude),Tt(d.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return _v(n.arrayValue,e.arrayValue);case 10:return(function(l,d){var f,p,v,E;const A=l.fields||{},R=d.fields||{},b=(f=A[Fc])===null||f===void 0?void 0:f.arrayValue,W=(p=R[Fc])===null||p===void 0?void 0:p.arrayValue,Q=je(((v=b==null?void 0:b.values)===null||v===void 0?void 0:v.length)||0,((E=W==null?void 0:W.values)===null||E===void 0?void 0:E.length)||0);return Q!==0?Q:_v(b,W)})(n.mapValue,e.mapValue);case 11:return(function(l,d){if(l===pc.mapValue&&d===pc.mapValue)return 0;if(l===pc.mapValue)return 1;if(d===pc.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),v=d.fields||{},E=Object.keys(v);p.sort(),E.sort();for(let A=0;A<p.length&&A<E.length;++A){const R=bf(p[A],E[A]);if(R!==0)return R;const b=ua(f[p[A]],v[E[A]]);if(b!==0)return b}return je(p.length,E.length)})(n.mapValue,e.mapValue);default:throw xe(23264,{le:t})}}function vv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return je(n,e);const t=ss(n),i=ss(e),o=je(t.seconds,i.seconds);return o!==0?o:je(t.nanos,i.nanos)}function _v(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=ua(t[o],i[o]);if(l)return l}return je(t.length,i.length)}function ca(n){return Df(n)}function Df(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=ss(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return os(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Ce.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Df(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const d of i)l?l=!1:o+=",",o+=`${d}:${Df(t.fields[d])}`;return o+"}"})(n.mapValue):xe(61005,{value:n})}function Ac(n){switch(as(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=sd(n);return e?16+Ac(e):16;case 5:return 2*n.stringValue.length;case 6:return os(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+Ac(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return fs(i.fields,((l,d)=>{o+=l.length+Ac(d)})),o})(n.mapValue);default:throw xe(13486,{value:n})}}function wv(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Of(n){return!!n&&"integerValue"in n}function vp(n){return!!n&&"arrayValue"in n}function Ev(n){return!!n&&"nullValue"in n}function Tv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Cc(n){return!!n&&"mapValue"in n}function AR(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[qw])===null||t===void 0?void 0:t.stringValue)===Hw}function yl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return fs(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=yl(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=yl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function CR(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===SR}/**
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
 */class En{constructor(e){this.value=e}static empty(){return new En({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Cc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=yl(t)}setAll(e){let t=Ht.emptyPath(),i={},o=[];e.forEach(((d,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=f.popLast()}d?i[f.lastSegment()]=yl(d):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());Cc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ur(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Cc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){fs(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new En(yl(this.value))}}function Ww(n){const e=[];return fs(n.fields,((t,i)=>{const o=new Ht([t]);if(Cc(i)){const l=Ww(i.mapValue).fields;if(l.length===0)e.push(o);else for(const d of l)e.push(o.child(d))}else e.push(o)})),new On(e)}/**
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
 */class en{constructor(e,t,i,o,l,d,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=d,this.documentState=f}static newInvalidDocument(e){return new en(e,0,Ve.min(),Ve.min(),Ve.min(),En.empty(),0)}static newFoundDocument(e,t,i,o){return new en(e,1,t,Ve.min(),i,o,0)}static newNoDocument(e,t){return new en(e,2,t,Ve.min(),Ve.min(),En.empty(),0)}static newUnknownDocument(e,t){return new en(e,3,t,Ve.min(),Ve.min(),En.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=En.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=En.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof en&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new en(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bc{constructor(e,t){this.position=e,this.inclusive=t}}function Iv(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],d=n.position[o];if(l.field.isKeyField()?i=Ce.comparator(Ce.fromName(d.referenceValue),t.key):i=ua(d,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Sv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ur(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Pl{constructor(e,t="asc"){this.field=e,this.dir=t}}function RR(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Kw{}class kt extends Kw{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new PR(e,t,i):t==="array-contains"?new bR(e,i):t==="in"?new DR(e,i):t==="not-in"?new OR(e,i):t==="array-contains-any"?new VR(e,i):new kt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new NR(e,i):new xR(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ua(t,this.value)):t!==null&&as(this.value)===as(t)&&this.matchesComparison(ua(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return xe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yr extends Kw{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new yr(e,t)}matches(e){return Gw(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Gw(n){return n.op==="and"}function Qw(n){return kR(n)&&Gw(n)}function kR(n){for(const e of n.filters)if(e instanceof yr)return!1;return!0}function Vf(n){if(n instanceof kt)return n.field.canonicalString()+n.op.toString()+ca(n.value);if(Qw(n))return n.filters.map((e=>Vf(e))).join(",");{const e=n.filters.map((t=>Vf(t))).join(",");return`${n.op}(${e})`}}function Xw(n,e){return n instanceof kt?(function(i,o){return o instanceof kt&&i.op===o.op&&i.field.isEqual(o.field)&&Ur(i.value,o.value)})(n,e):n instanceof yr?(function(i,o){return o instanceof yr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,d,f)=>l&&Xw(d,o.filters[f])),!0):!1})(n,e):void xe(19439)}function Yw(n){return n instanceof kt?(function(t){return`${t.field.canonicalString()} ${t.op} ${ca(t.value)}`})(n):n instanceof yr?(function(t){return t.op.toString()+" {"+t.getFilters().map(Yw).join(" ,")+"}"})(n):"Filter"}class PR extends kt{constructor(e,t,i){super(e,t,i),this.key=Ce.fromName(i.referenceValue)}matches(e){const t=Ce.comparator(e.key,this.key);return this.matchesComparison(t)}}class NR extends kt{constructor(e,t){super(e,"in",t),this.keys=Jw("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class xR extends kt{constructor(e,t){super(e,"not-in",t),this.keys=Jw("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Jw(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>Ce.fromName(i.referenceValue)))}class bR extends kt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return vp(t)&&kl(t.arrayValue,this.value)}}class DR extends kt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&kl(this.value.arrayValue,t)}}class OR extends kt{constructor(e,t){super(e,"not-in",t)}matches(e){if(kl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!kl(this.value.arrayValue,t)}}class VR extends kt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!vp(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>kl(this.value.arrayValue,i)))}}/**
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
 */class LR{constructor(e,t=null,i=[],o=[],l=null,d=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=d,this.endAt=f,this.Pe=null}}function Av(n,e=null,t=[],i=[],o=null,l=null,d=null){return new LR(n,e,t,i,o,l,d)}function _p(n){const e=Le(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Vf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),id(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>ca(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>ca(i))).join(",")),e.Pe=t}return e.Pe}function wp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!RR(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Xw(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Sv(n.startAt,e.startAt)&&Sv(n.endAt,e.endAt)}function Lf(n){return Ce.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class va{constructor(e,t=null,i=[],o=[],l=null,d="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=d,this.startAt=f,this.endAt=p,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function MR(n,e,t,i,o,l,d,f){return new va(n,e,t,i,o,l,d,f)}function Ep(n){return new va(n)}function Cv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Zw(n){return n.collectionGroup!==null}function vl(n){const e=Le(n);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(d){let f=new Dt(Ht.comparator);return d.filters.forEach((p=>{p.getFlattenedFilters().forEach((v=>{v.isInequality()&&(f=f.add(v.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new Pl(l,i))})),t.has(Ht.keyField().canonicalString())||e.Te.push(new Pl(Ht.keyField(),i))}return e.Te}function Vr(n){const e=Le(n);return e.Ie||(e.Ie=jR(e,vl(n))),e.Ie}function jR(n,e){if(n.limitType==="F")return Av(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new Pl(o.field,l)}));const t=n.endAt?new Bc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Bc(n.startAt.position,n.startAt.inclusive):null;return Av(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Mf(n,e){const t=n.filters.concat([e]);return new va(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function jf(n,e,t){return new va(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function od(n,e){return wp(Vr(n),Vr(e))&&n.limitType===e.limitType}function eE(n){return`${_p(Vr(n))}|lt:${n.limitType}`}function ea(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>Yw(o))).join(", ")}]`),id(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(d){return`${d.field.canonicalString()} (${d.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>ca(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>ca(o))).join(",")),`Target(${i})`})(Vr(n))}; limitType=${n.limitType})`}function ad(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):Ce.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of vl(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(d,f,p){const v=Iv(d,f,p);return d.inclusive?v<=0:v<0})(i.startAt,vl(i),o)||i.endAt&&!(function(d,f,p){const v=Iv(d,f,p);return d.inclusive?v>=0:v>0})(i.endAt,vl(i),o))})(n,e)}function UR(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function tE(n){return(e,t)=>{let i=!1;for(const o of vl(n)){const l=FR(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function FR(n,e,t){const i=n.field.isKeyField()?Ce.comparator(e.key,t.key):(function(l,d,f){const p=d.data.field(l),v=f.data.field(l);return p!==null&&v!==null?ua(p,v):xe(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return xe(19790,{direction:n.dir})}}/**
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
 */class fo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){fs(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return jw(this.inner)}size(){return this.innerSize}}/**
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
 */const BR=new ft(Ce.comparator);function yi(){return BR}const nE=new ft(Ce.comparator);function dl(...n){let e=nE;for(const t of n)e=e.insert(t.key,t);return e}function rE(n){let e=nE;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Ks(){return _l()}function iE(){return _l()}function _l(){return new fo((n=>n.toString()),((n,e)=>n.isEqual(e)))}const $R=new ft(Ce.comparator),zR=new Dt(Ce.comparator);function ze(...n){let e=zR;for(const t of n)e=e.add(t);return e}const qR=new Dt(je);function HR(){return qR}/**
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
 */function Tp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jc(e)?"-0":e}}function sE(n){return{integerValue:""+n}}function oE(n,e){return _R(e)?sE(e):Tp(n,e)}/**
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
 */class ld{constructor(){this._=void 0}}function WR(n,e,t){return n instanceof Nl?(function(o,l){const d={fields:{[Bw]:{stringValue:Fw},[zw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&yp(l)&&(l=sd(l)),l&&(d.fields[$w]=l),{mapValue:d}})(t,e):n instanceof da?lE(n,e):n instanceof xl?uE(n,e):(function(o,l){const d=aE(o,l),f=Rv(d)+Rv(o.Ee);return Of(d)&&Of(o.Ee)?sE(f):Tp(o.serializer,f)})(n,e)}function KR(n,e,t){return n instanceof da?lE(n,e):n instanceof xl?uE(n,e):t}function aE(n,e){return n instanceof bl?(function(i){return Of(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class Nl extends ld{}class da extends ld{constructor(e){super(),this.elements=e}}function lE(n,e){const t=cE(e);for(const i of n.elements)t.some((o=>Ur(o,i)))||t.push(i);return{arrayValue:{values:t}}}class xl extends ld{constructor(e){super(),this.elements=e}}function uE(n,e){let t=cE(e);for(const i of n.elements)t=t.filter((o=>!Ur(o,i)));return{arrayValue:{values:t}}}class bl extends ld{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Rv(n){return Tt(n.integerValue||n.doubleValue)}function cE(n){return vp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Ip{constructor(e,t){this.field=e,this.transform=t}}function GR(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof da&&o instanceof da||i instanceof xl&&o instanceof xl?la(i.elements,o.elements,Ur):i instanceof bl&&o instanceof bl?Ur(i.Ee,o.Ee):i instanceof Nl&&o instanceof Nl})(n.transform,e.transform)}class QR{constructor(e,t){this.version=e,this.transformResults=t}}class un{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ud{}function dE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new cd(n.key,un.none()):new $l(n.key,n.data,un.none());{const t=n.data,i=En.empty();let o=new Dt(Ht.comparator);for(let l of e.fields)if(!o.has(l)){let d=t.field(l);d===null&&l.length>1&&(l=l.popLast(),d=t.field(l)),d===null?i.delete(l):i.set(l,d),o=o.add(l)}return new ps(n.key,i,new On(o.toArray()),un.none())}}function XR(n,e,t){n instanceof $l?(function(o,l,d){const f=o.value.clone(),p=Pv(o.fieldTransforms,l,d.transformResults);f.setAll(p),l.convertToFoundDocument(d.version,f).setHasCommittedMutations()})(n,e,t):n instanceof ps?(function(o,l,d){if(!Rc(o.precondition,l))return void l.convertToUnknownDocument(d.version);const f=Pv(o.fieldTransforms,l,d.transformResults),p=l.data;p.setAll(hE(o)),p.setAll(f),l.convertToFoundDocument(d.version,p).setHasCommittedMutations()})(n,e,t):(function(o,l,d){l.convertToNoDocument(d.version).setHasCommittedMutations()})(0,e,t)}function wl(n,e,t,i){return n instanceof $l?(function(l,d,f,p){if(!Rc(l.precondition,d))return f;const v=l.value.clone(),E=Nv(l.fieldTransforms,p,d);return v.setAll(E),d.convertToFoundDocument(d.version,v).setHasLocalMutations(),null})(n,e,t,i):n instanceof ps?(function(l,d,f,p){if(!Rc(l.precondition,d))return f;const v=Nv(l.fieldTransforms,p,d),E=d.data;return E.setAll(hE(l)),E.setAll(v),d.convertToFoundDocument(d.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((A=>A.field)))})(n,e,t,i):(function(l,d,f){return Rc(l.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):f})(n,e,t)}function YR(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=aE(i.transform,o||null);l!=null&&(t===null&&(t=En.empty()),t.set(i.field,l))}return t||null}function kv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&la(i,o,((l,d)=>GR(l,d)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class $l extends ud{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ps extends ud{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function hE(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function Pv(n,e,t){const i=new Map;Je(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let o=0;o<t.length;o++){const l=n[o],d=l.transform,f=e.data.field(l.field);i.set(l.field,KR(d,f,t[o]))}return i}function Nv(n,e,t){const i=new Map;for(const o of n){const l=o.transform,d=t.data.field(o.field);i.set(o.field,WR(l,d,e))}return i}class cd extends ud{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JR extends ud{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ZR{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&XR(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=wl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=wl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=iE();return this.mutations.forEach((o=>{const l=e.get(o.key),d=l.overlayedDocument;let f=this.applyToLocalView(d,l.mutatedFields);f=t.has(o.key)?null:f;const p=dE(d,f);p!==null&&i.set(o.key,p),d.isValidDocument()||d.convertToNoDocument(Ve.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ze())}isEqual(e){return this.batchId===e.batchId&&la(this.mutations,e.mutations,((t,i)=>kv(t,i)))&&la(this.baseMutations,e.baseMutations,((t,i)=>kv(t,i)))}}class Sp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Je(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let o=(function(){return $R})();const l=e.mutations;for(let d=0;d<l.length;d++)o=o.insert(l[d].key,i[d].version);return new Sp(e,t,i,o)}}/**
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
 */class ek{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class tk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Rt,Ke;function nk(n){switch(n){case Y.OK:return xe(64938);case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0;default:return xe(15467,{code:n})}}function fE(n){if(n===void 0)return gi("GRPC error has no .code"),Y.UNKNOWN;switch(n){case Rt.OK:return Y.OK;case Rt.CANCELLED:return Y.CANCELLED;case Rt.UNKNOWN:return Y.UNKNOWN;case Rt.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case Rt.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case Rt.INTERNAL:return Y.INTERNAL;case Rt.UNAVAILABLE:return Y.UNAVAILABLE;case Rt.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case Rt.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case Rt.NOT_FOUND:return Y.NOT_FOUND;case Rt.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case Rt.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case Rt.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case Rt.ABORTED:return Y.ABORTED;case Rt.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case Rt.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case Rt.DATA_LOSS:return Y.DATA_LOSS;default:return xe(39323,{code:n})}}(Ke=Rt||(Rt={}))[Ke.OK=0]="OK",Ke[Ke.CANCELLED=1]="CANCELLED",Ke[Ke.UNKNOWN=2]="UNKNOWN",Ke[Ke.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ke[Ke.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ke[Ke.NOT_FOUND=5]="NOT_FOUND",Ke[Ke.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ke[Ke.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ke[Ke.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ke[Ke.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ke[Ke.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ke[Ke.ABORTED=10]="ABORTED",Ke[Ke.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ke[Ke.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ke[Ke.INTERNAL=13]="INTERNAL",Ke[Ke.UNAVAILABLE=14]="UNAVAILABLE",Ke[Ke.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const rk=new Zi([4294967295,4294967295],0);function xv(n){const e=Ow().encode(n),t=new Cw;return t.update(e),new Uint8Array(t.digest())}function bv(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Zi([t,i],0),new Zi([o,l],0)]}class Ap{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new hl(`Invalid padding: ${t}`);if(i<0)throw new hl(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new hl(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new hl(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Zi.fromNumber(this.fe)}pe(e,t,i){let o=e.add(t.multiply(Zi.fromNumber(i)));return o.compare(rk)===1&&(o=new Zi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=xv(e),[i,o]=bv(t);for(let l=0;l<this.hashCount;l++){const d=this.pe(i,o,l);if(!this.ye(d))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),d=new Ap(l,o,t);return i.forEach((f=>d.insert(f))),d}insert(e){if(this.fe===0)return;const t=xv(e),[i,o]=bv(t);for(let l=0;l<this.hashCount;l++){const d=this.pe(i,o,l);this.we(d)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class hl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class dd{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,zl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new dd(Ve.min(),o,new ft(je),yi(),ze())}}class zl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new zl(i,t,ze(),ze(),ze())}}/**
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
 */class kc{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=o}}class pE{constructor(e,t){this.targetId=e,this.De=t}}class mE{constructor(e,t,i=Wt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Dv{constructor(){this.ve=0,this.Ce=Ov(),this.Fe=Wt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ze(),t=ze(),i=ze();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:xe(38017,{changeType:l})}})),new zl(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=Ov()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Je(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class ik{constructor(e){this.We=e,this.Ge=new Map,this.ze=yi(),this.je=mc(),this.Je=mc(),this.He=new ft(je)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:xe(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((i,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,i=e.De.count,o=this.st(t);if(o){const l=o.target;if(Lf(l))if(i===0){const d=new Ce(l.path);this.Xe(t,d,en.newNoDocument(d,Ve.min()))}else Je(i===1,20013,{expectedCount:i});else{const d=this.ot(t);if(d!==i){const f=this._t(e),p=f?this.ut(f,e,d):1;if(p!==0){this.rt(t);const v=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,v)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let d,f;try{d=os(i).toUint8Array()}catch(p){if(p instanceof Uw)return rs("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new Ap(d,o,l)}catch(p){return rs(p instanceof hl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.fe===0?null:f}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const d=this.We.lt(),f=`projects/${d.projectId}/databases/${d.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,d)=>{const f=this.st(d);if(f){if(l.current&&Lf(f.target)){const p=new Ce(f.target.path);this.Tt(p).has(d)||this.It(d,p)||this.Xe(d,p,en.newNoDocument(p,e))}l.Ne&&(t.set(d,l.Le()),l.ke())}}));let i=ze();this.Je.forEach(((l,d)=>{let f=!0;d.forEachWhile((p=>{const v=this.st(p);return!v||v.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.ze.forEach(((l,d)=>d.setReadTime(e)));const o=new dd(e,t,this.He,this.ze,i);return this.ze=yi(),this.je=mc(),this.Je=mc(),this.He=new ft(je),o}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Dv,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Dt(je),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Dt(je),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ve("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Dv),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function mc(){return new ft(Ce.comparator)}function Ov(){return new ft(Ce.comparator)}const sk={asc:"ASCENDING",desc:"DESCENDING"},ok={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ak={and:"AND",or:"OR"};class lk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Uf(n,e){return n.useProto3Json||id(e)?e:{value:e}}function $c(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function uk(n,e){return $c(n,e.toTimestamp())}function Lr(n){return Je(!!n,49232),Ve.fromTimestamp((function(t){const i=ss(t);return new nt(i.seconds,i.nanos)})(n))}function Cp(n,e){return Ff(n,e).canonicalString()}function Ff(n,e){const t=(function(o){return new st(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function yE(n){const e=st.fromString(n);return Je(TE(e),10190,{key:e.toString()}),e}function Bf(n,e){return Cp(n.databaseId,e.path)}function uf(n,e){const t=yE(e);if(t.get(1)!==n.databaseId.projectId)throw new me(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new me(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Ce(_E(t))}function vE(n,e){return Cp(n.databaseId,e)}function ck(n){const e=yE(n);return e.length===4?st.emptyPath():_E(e)}function $f(n){return new st(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function _E(n){return Je(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Vv(n,e,t){return{name:Bf(n,e),fields:t.value.mapValue.fields}}function dk(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:xe(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(v,E){return v.useProto3Json?(Je(E===void 0||typeof E=="string",58123),Wt.fromBase64String(E||"")):(Je(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Wt.fromUint8Array(E||new Uint8Array))})(n,e.targetChange.resumeToken),d=e.targetChange.cause,f=d&&(function(v){const E=v.code===void 0?Y.UNKNOWN:fE(v.code);return new me(E,v.message||"")})(d);t=new mE(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=uf(n,i.document.name),l=Lr(i.document.updateTime),d=i.document.createTime?Lr(i.document.createTime):Ve.min(),f=new En({mapValue:{fields:i.document.fields}}),p=en.newFoundDocument(o,l,d,f),v=i.targetIds||[],E=i.removedTargetIds||[];t=new kc(v,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=uf(n,i.document),l=i.readTime?Lr(i.readTime):Ve.min(),d=en.newNoDocument(o,l),f=i.removedTargetIds||[];t=new kc([],f,d.key,d)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=uf(n,i.document),l=i.removedTargetIds||[];t=new kc([],l,o,null)}else{if(!("filter"in e))return xe(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,d=new tk(o,l),f=i.targetId;t=new pE(f,d)}}return t}function hk(n,e){let t;if(e instanceof $l)t={update:Vv(n,e.key,e.value)};else if(e instanceof cd)t={delete:Bf(n,e.key)};else if(e instanceof ps)t={update:Vv(n,e.key,e.data),updateMask:Ek(e.fieldMask)};else{if(!(e instanceof JR))return xe(16599,{Rt:e.type});t={verify:Bf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,d){const f=d.transform;if(f instanceof Nl)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof da)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof xl)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof bl)return{fieldPath:d.field.canonicalString(),increment:f.Ee};throw xe(20930,{transform:d.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:uk(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:xe(27497)})(n,e.precondition)),t}function fk(n,e){return n&&n.length>0?(Je(e!==void 0,14353),n.map((t=>(function(o,l){let d=o.updateTime?Lr(o.updateTime):Lr(l);return d.isEqual(Ve.min())&&(d=Lr(l)),new QR(d,o.transformResults||[])})(t,e)))):[]}function pk(n,e){return{documents:[vE(n,e.path)]}}function mk(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=vE(n,o);const l=(function(v){if(v.length!==0)return EE(yr.create(v,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const d=(function(v){if(v.length!==0)return v.map((E=>(function(R){return{field:ta(R.field),direction:vk(R.dir)}})(E)))})(e.orderBy);d&&(t.structuredQuery.orderBy=d);const f=Uf(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{Vt:t,parent:o}}function gk(n){let e=ck(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Je(i===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(A){const R=wE(A);return R instanceof yr&&Qw(R)?R.getFilters():[R]})(t.where));let d=[];t.orderBy&&(d=(function(A){return A.map((R=>(function(W){return new Pl(na(W.field),(function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(W.direction))})(R)))})(t.orderBy));let f=null;t.limit&&(f=(function(A){let R;return R=typeof A=="object"?A.value:A,id(R)?null:R})(t.limit));let p=null;t.startAt&&(p=(function(A){const R=!!A.before,b=A.values||[];return new Bc(b,R)})(t.startAt));let v=null;return t.endAt&&(v=(function(A){const R=!A.before,b=A.values||[];return new Bc(b,R)})(t.endAt)),MR(e,o,d,l,f,"F",p,v)}function yk(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return xe(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function wE(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=na(t.unaryFilter.field);return kt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=na(t.unaryFilter.field);return kt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=na(t.unaryFilter.field);return kt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=na(t.unaryFilter.field);return kt.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return xe(61313);default:return xe(60726)}})(n):n.fieldFilter!==void 0?(function(t){return kt.create(na(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return xe(58110);default:return xe(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return yr.create(t.compositeFilter.filters.map((i=>wE(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return xe(1026)}})(t.compositeFilter.op))})(n):xe(30097,{filter:n})}function vk(n){return sk[n]}function _k(n){return ok[n]}function wk(n){return ak[n]}function ta(n){return{fieldPath:n.canonicalString()}}function na(n){return Ht.fromServerFormat(n.fieldPath)}function EE(n){return n instanceof kt?(function(t){if(t.op==="=="){if(Tv(t.value))return{unaryFilter:{field:ta(t.field),op:"IS_NAN"}};if(Ev(t.value))return{unaryFilter:{field:ta(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Tv(t.value))return{unaryFilter:{field:ta(t.field),op:"IS_NOT_NAN"}};if(Ev(t.value))return{unaryFilter:{field:ta(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ta(t.field),op:_k(t.op),value:t.value}}})(n):n instanceof yr?(function(t){const i=t.getFilters().map((o=>EE(o)));return i.length===1?i[0]:{compositeFilter:{op:wk(t.op),filters:i}}})(n):xe(54877,{filter:n})}function Ek(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function TE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Yi{constructor(e,t,i,o,l=Ve.min(),d=Ve.min(),f=Wt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new Yi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Yi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Tk{constructor(e){this.gt=e}}function Ik(n){const e=gk({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?jf(e,e.limit,"L"):e}/**
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
 */class Sk{constructor(){this.Dn=new Ak}addToCollectionParentIndex(e,t){return this.Dn.add(t),ee.resolve()}getCollectionParents(e,t){return ee.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return ee.resolve()}deleteFieldIndex(e,t){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,t){return ee.resolve()}getDocumentsMatchingTarget(e,t){return ee.resolve(null)}getIndexType(e,t){return ee.resolve(0)}getFieldIndexes(e,t){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,t){return ee.resolve(is.min())}getMinOffsetFromCollectionGroup(e,t){return ee.resolve(is.min())}updateCollectionGroup(e,t,i){return ee.resolve()}updateIndexEntries(e,t){return ee.resolve()}}class Ak{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new Dt(st.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new Dt(st.comparator)).toArray()}}/**
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
 */const Lv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},IE=41943040;class wn{static withCacheSize(e){return new wn(e,wn.DEFAULT_COLLECTION_PERCENTILE,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */wn.DEFAULT_COLLECTION_PERCENTILE=10,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wn.DEFAULT=new wn(IE,wn.DEFAULT_COLLECTION_PERCENTILE,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wn.DISABLED=new wn(-1,0,0);/**
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
 */class ha{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new ha(0)}static ur(){return new ha(-1)}}/**
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
 */const Mv="LruGarbageCollector",Ck=1048576;function jv([n,e],[t,i]){const o=je(n,t);return o===0?je(e,i):o}class Rk{constructor(e){this.Tr=e,this.buffer=new Dt(jv),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();jv(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class kk{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ve(Mv,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ya(t)?ve(Mv,"Ignoring IndexedDB error during garbage collection: ",t):await ga(t)}await this.Rr(3e5)}))}}class Pk{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return ee.resolve(rd.ue);const i=new Rk(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ve("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(Lv)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(ve("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Lv):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,o,l,d,f,p,v;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(ve("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,d=Date.now(),this.nthSequenceNumber(e,o)))).next((A=>(i=A,f=Date.now(),this.removeTargets(e,i,t)))).next((A=>(l=A,p=Date.now(),this.removeOrphanedDocuments(e,i)))).next((A=>(v=Date.now(),Zo()<=$e.DEBUG&&ve("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-E}ms
	Determined least recently used ${o} in `+(f-d)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${A} documents in `+(v-p)+`ms
Total Duration: ${v-E}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:A}))))}}function Nk(n,e){return new Pk(n,e)}/**
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
 */class xk{constructor(){this.changes=new fo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,en.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?ee.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class bk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Dk{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&wl(i.mutation,o,On.empty(),nt.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,ze()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=ze()){const o=Ks();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let d=dl();return l.forEach(((f,p)=>{d=d.insert(f,p.overlayedDocument)})),d}))))}getOverlayedDocuments(e,t){const i=Ks();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,ze())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((d,f)=>{t.set(d,f)}))}))}computeViews(e,t,i,o){let l=yi();const d=_l(),f=(function(){return _l()})();return t.forEach(((p,v)=>{const E=i.get(v.key);o.has(v.key)&&(E===void 0||E.mutation instanceof ps)?l=l.insert(v.key,v):E!==void 0?(d.set(v.key,E.mutation.getFieldMask()),wl(E.mutation,v,E.mutation.getFieldMask(),nt.now())):d.set(v.key,On.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((v,E)=>d.set(v,E))),t.forEach(((v,E)=>{var A;return f.set(v,new bk(E,(A=d.get(v))!==null&&A!==void 0?A:null))})),f)))}recalculateAndSaveOverlays(e,t){const i=_l();let o=new ft(((d,f)=>d-f)),l=ze();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((d=>{for(const f of d)f.keys().forEach((p=>{const v=t.get(p);if(v===null)return;let E=i.get(p)||On.empty();E=f.applyToLocalView(v,E),i.set(p,E);const A=(o.get(f.batchId)||ze()).add(p);o=o.insert(f.batchId,A)}))})).next((()=>{const d=[],f=o.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),v=p.key,E=p.value,A=iE();E.forEach((R=>{if(!l.has(R)){const b=dE(t.get(R),i.get(R));b!==null&&A.set(R,b),l=l.add(R)}})),d.push(this.documentOverlayCache.saveOverlays(e,v,A))}return ee.waitFor(d)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(d){return Ce.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Zw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const d=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):ee.resolve(Ks());let f=Al,p=l;return d.next((v=>ee.forEach(v,((E,A)=>(f<A.largestBatchId&&(f=A.largestBatchId),l.get(E)?ee.resolve():this.remoteDocumentCache.getEntry(e,E).next((R=>{p=p.insert(E,R)}))))).next((()=>this.populateOverlays(e,v,l))).next((()=>this.computeViews(e,p,v,ze()))).next((E=>({batchId:f,changes:rE(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ce(t)).next((i=>{let o=dl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let d=dl();return this.indexManager.getCollectionParents(e,l).next((f=>ee.forEach(f,(p=>{const v=(function(A,R){return new va(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,v,i,o).next((E=>{E.forEach(((A,R)=>{d=d.insert(A,R)}))}))})).next((()=>d))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((d=>(l=d,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((d=>{l.forEach(((p,v)=>{const E=v.getKey();d.get(E)===null&&(d=d.insert(E,en.newInvalidDocument(E)))}));let f=dl();return d.forEach(((p,v)=>{const E=l.get(p);E!==void 0&&wl(E.mutation,v,On.empty(),nt.now()),ad(t,v)&&(f=f.insert(p,v))})),f}))}}/**
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
 */class Ok{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return ee.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:Lr(o.createTime)}})(t)),ee.resolve()}getNamedQuery(e,t){return ee.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:Ik(o.bundledQuery),readTime:Lr(o.readTime)}})(t)),ee.resolve()}}/**
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
 */class Vk{constructor(){this.overlays=new ft(Ce.comparator),this.kr=new Map}getOverlay(e,t){return ee.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Ks();return ee.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.wt(e,t,l)})),ee.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.kr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(i)),ee.resolve()}getOverlaysForCollection(e,t,i){const o=Ks(),l=t.length+1,d=new Ce(t.child("")),f=this.overlays.getIteratorFrom(d);for(;f.hasNext();){const p=f.getNext().value,v=p.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return ee.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new ft(((v,E)=>v-E));const d=this.overlays.getIterator();for(;d.hasNext();){const v=d.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>i){let E=l.get(v.largestBatchId);E===null&&(E=Ks(),l=l.insert(v.largestBatchId,E)),E.set(v.getKey(),v)}}const f=Ks(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((v,E)=>f.set(v,E))),!(f.size()>=o)););return ee.resolve(f)}wt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const d=this.kr.get(o.largestBatchId).delete(i.key);this.kr.set(o.largestBatchId,d)}this.overlays=this.overlays.insert(i.key,new ek(t,i));let l=this.kr.get(t);l===void 0&&(l=ze(),this.kr.set(t,l)),this.kr.set(t,l.add(i.key))}}/**
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
 */class Lk{constructor(){this.sessionToken=Wt.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ee.resolve()}}/**
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
 */class Rp{constructor(){this.qr=new Dt(jt.Qr),this.$r=new Dt(jt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new jt(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new jt(e,t))}Gr(e,t){e.forEach((i=>this.removeReference(i,t)))}zr(e){const t=new Ce(new st([])),i=new jt(t,e),o=new jt(t,e+1),l=[];return this.$r.forEachInRange([i,o],(d=>{this.Wr(d),l.push(d.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new Ce(new st([])),i=new jt(t,e),o=new jt(t,e+1);let l=ze();return this.$r.forEachInRange([i,o],(d=>{l=l.add(d.key)})),l}containsKey(e){const t=new jt(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class jt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return Ce.comparator(e.key,t.key)||je(e.Hr,t.Hr)}static Ur(e,t){return je(e.Hr,t.Hr)||Ce.comparator(e.key,t.key)}}/**
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
 */class Mk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Dt(jt.Qr)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new ZR(l,t,i,o);this.mutationQueue.push(d);for(const f of o)this.Yr=this.Yr.add(new jt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return ee.resolve(d)}lookupMutationBatch(e,t){return ee.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return ee.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?gp:this.er-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new jt(t,0),o=new jt(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([i,o],(d=>{const f=this.Zr(d.Hr);l.push(f)})),ee.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Dt(je);return t.forEach((o=>{const l=new jt(o,0),d=new jt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,d],(f=>{i=i.add(f.Hr)}))})),ee.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;Ce.isDocumentKey(l)||(l=l.child(""));const d=new jt(new Ce(l),0);let f=new Dt(je);return this.Yr.forEachWhile((p=>{const v=p.key.path;return!!i.isPrefixOf(v)&&(v.length===o&&(f=f.add(p.Hr)),!0)}),d),ee.resolve(this.ei(f))}ei(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Je(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return ee.forEach(t.mutations,(o=>{const l=new jt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=i}))}rr(e){}containsKey(e,t){const i=new jt(t,0),o=this.Yr.firstAfterOrEqual(i);return ee.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class jk{constructor(e){this.ni=e,this.docs=(function(){return new ft(Ce.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,d=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:d}),this.size+=d-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return ee.resolve(i?i.document.mutableCopy():en.newInvalidDocument(t))}getEntries(e,t){let i=yi();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():en.newInvalidDocument(o))})),ee.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=yi();const d=t.path,f=new Ce(d.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:v,value:{document:E}}=p.getNext();if(!d.isPrefixOf(v.path))break;v.path.length>d.length+1||mR(pR(E),i)<=0||(o.has(E.key)||ad(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return ee.resolve(l)}getAllFromCollectionGroup(e,t,i,o){xe(9500)}ri(e,t){return ee.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new Uk(this)}getSize(e){return ee.resolve(this.size)}}class Uk extends xk{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(i)})),ee.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class Fk{constructor(e){this.persistence=e,this.ii=new fo((t=>_p(t)),wp),this.lastRemoteSnapshotVersion=Ve.min(),this.highestTargetId=0,this.si=0,this.oi=new Rp,this.targetCount=0,this._i=ha.ar()}forEachTarget(e,t){return this.ii.forEach(((i,o)=>t(o))),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),ee.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new ha(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,ee.resolve()}updateTargetData(e,t){return this.hr(t),ee.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ii.forEach(((d,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ii.delete(d),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),ee.waitFor(l).next((()=>o))}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return ee.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),ee.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((d=>{l.push(o.markPotentiallyOrphaned(e,d))})),ee.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),ee.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return ee.resolve(i)}containsKey(e,t){return ee.resolve(this.oi.containsKey(t))}}/**
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
 */class SE{constructor(e,t){this.ai={},this.overlays={},this.ui=new rd(0),this.ci=!1,this.ci=!0,this.li=new Lk,this.referenceDelegate=e(this),this.hi=new Fk(this),this.indexManager=new Sk,this.remoteDocumentCache=(function(o){return new jk(o)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new Tk(t),this.Ti=new Ok(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Vk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new Mk(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){ve("MemoryPersistence","Starting transaction:",e);const o=new Bk(this.ui.next());return this.referenceDelegate.Ii(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return ee.or(Object.values(this.ai).map((i=>()=>i.containsKey(e,t))))}}class Bk extends yR{constructor(e){super(),this.currentSequenceNumber=e}}class kp{constructor(e){this.persistence=e,this.Ai=new Rp,this.Ri=null}static Vi(e){return new kp(e)}get mi(){if(this.Ri)return this.Ri;throw xe(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),ee.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),ee.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),ee.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.mi,(i=>{const o=Ce.fromPath(i);return this.fi(e,o).next((l=>{l||t.removeEntry(o,Ve.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return ee.or([()=>ee.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class zc{constructor(e,t){this.persistence=e,this.gi=new fo((i=>wR(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=Nk(this,t)}static Vi(e,t){return new zc(e,t)}Ii(){}di(e){return ee.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}yr(e){let t=0;return this.gr(e,(i=>{t++})).next((()=>t))}gr(e,t){return ee.forEach(this.gi,((i,o)=>this.Sr(e,i,o).next((l=>l?ee.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(d=>this.Sr(e,d,t).next((f=>{f||(i++,l.removeEntry(d,Ve.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),ee.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),ee.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),ee.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ac(e.data.value)),t}Sr(e,t,i){return ee.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return ee.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Pp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Is=i,this.ds=o}static Es(e,t){let i=ze(),o=ze();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Pp(e,t.fromCache,i,o)}}/**
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
 */class $k{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class zk{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return RI()?8:vR(tn())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ps(e,t).next((d=>{l.result=d})).next((()=>{if(!l.result)return this.ys(e,t,o,i).next((d=>{l.result=d}))})).next((()=>{if(l.result)return;const d=new $k;return this.ws(e,t,d).next((f=>{if(l.result=f,this.Rs)return this.Ss(e,t,d,f.size)}))})).next((()=>l.result))}Ss(e,t,i,o){return i.documentReadCount<this.Vs?(Zo()<=$e.DEBUG&&ve("QueryEngine","SDK will not create cache indexes for query:",ea(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),ee.resolve()):(Zo()<=$e.DEBUG&&ve("QueryEngine","Query:",ea(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.fs*o?(Zo()<=$e.DEBUG&&ve("QueryEngine","The SDK decides to create cache indexes for query:",ea(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vr(t))):ee.resolve())}ps(e,t){if(Cv(t))return ee.resolve(null);let i=Vr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=jf(t,null,"F"),i=Vr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const d=ze(...l);return this.gs.getDocuments(e,d).next((f=>this.indexManager.getMinOffset(e,i).next((p=>{const v=this.bs(t,f);return this.Ds(t,v,d,p.readTime)?this.ps(e,jf(t,null,"F")):this.vs(e,v,t,p)}))))})))))}ys(e,t,i,o){return Cv(t)||o.isEqual(Ve.min())?ee.resolve(null):this.gs.getDocuments(e,i).next((l=>{const d=this.bs(t,l);return this.Ds(t,d,i,o)?ee.resolve(null):(Zo()<=$e.DEBUG&&ve("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ea(t)),this.vs(e,d,t,fR(o,Al)).next((f=>f)))}))}bs(e,t){let i=new Dt(tE(e));return t.forEach(((o,l)=>{ad(e,l)&&(i=i.add(l))})),i}Ds(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,i){return Zo()<=$e.DEBUG&&ve("QueryEngine","Using full collection scan to execute query:",ea(t)),this.gs.getDocumentsMatchingQuery(e,t,is.min(),i)}vs(e,t,i,o){return this.gs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((d=>{l=l.insert(d.key,d)})),l)))}}/**
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
 */const Np="LocalStore",qk=3e8;class Hk{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new ft(je),this.Ms=new fo((l=>_p(l)),wp),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Dk(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Wk(n,e,t,i){return new Hk(n,e,t,i)}async function AE(n,e){const t=Le(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const d=[],f=[];let p=ze();for(const v of o){d.push(v.batchId);for(const E of v.mutations)p=p.add(E.key)}for(const v of l){f.push(v.batchId);for(const E of v.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(i,p).next((v=>({Bs:v,removedBatchIds:d,addedBatchIds:f})))}))}))}function Kk(n,e){const t=Le(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(f,p,v,E){const A=v.batch,R=A.keys();let b=ee.resolve();return R.forEach((W=>{b=b.next((()=>E.getEntry(p,W))).next((Q=>{const j=v.docVersions.get(W);Je(j!==null,48541),Q.version.compareTo(j)<0&&(A.applyToRemoteDocument(Q,v),Q.isValidDocument()&&(Q.setReadTime(v.commitVersion),E.addEntry(Q)))}))})),b.next((()=>f.mutationQueue.removeMutationBatch(p,A)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let p=ze();for(let v=0;v<f.mutationResults.length;++v)f.mutationResults[v].transformResults.length>0&&(p=p.add(f.batch.mutations[v].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function CE(n){const e=Le(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Gk(n,e){const t=Le(n),i=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const d=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const f=[];e.targetChanges.forEach(((E,A)=>{const R=o.get(A);if(!R)return;f.push(t.hi.removeMatchingKeys(l,E.removedDocuments,A).next((()=>t.hi.addMatchingKeys(l,E.addedDocuments,A))));let b=R.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(A)!==null?b=b.withResumeToken(Wt.EMPTY_BYTE_STRING,Ve.min()).withLastLimboFreeSnapshotVersion(Ve.min()):E.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(E.resumeToken,i)),o=o.insert(A,b),(function(Q,j,ne){return Q.resumeToken.approximateByteSize()===0||j.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=qk?!0:ne.addedDocuments.size+ne.modifiedDocuments.size+ne.removedDocuments.size>0})(R,b,E)&&f.push(t.hi.updateTargetData(l,b))}));let p=yi(),v=ze();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),f.push(Qk(l,d,e.documentUpdates).next((E=>{p=E.Ls,v=E.ks}))),!i.isEqual(Ve.min())){const E=t.hi.getLastRemoteSnapshotVersion(l).next((A=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(E)}return ee.waitFor(f).next((()=>d.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,v))).next((()=>p))})).then((l=>(t.Fs=o,l)))}function Qk(n,e,t){let i=ze(),o=ze();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let d=yi();return t.forEach(((f,p)=>{const v=l.get(f);p.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(f)),p.isNoDocument()&&p.version.isEqual(Ve.min())?(e.removeEntry(f,p.readTime),d=d.insert(f,p)):!v.isValidDocument()||p.version.compareTo(v.version)>0||p.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(p),d=d.insert(f,p)):ve(Np,"Ignoring outdated watch update for ",f,". Current version:",v.version," Watch version:",p.version)})),{Ls:d,ks:o}}))}function Xk(n,e){const t=Le(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=gp),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function Yk(n,e){const t=Le(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.hi.getTargetData(i,e).next((l=>l?(o=l,ee.resolve(o)):t.hi.allocateTargetId(i).next((d=>(o=new Yi(e,d,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Fs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i}))}async function zf(n,e,t){const i=Le(n),o=i.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(d=>i.persistence.referenceDelegate.removeTarget(d,o)))}catch(d){if(!ya(d))throw d;ve(Np,`Failed to update sequence numbers for target ${e}: ${d}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(o.target)}function Uv(n,e,t){const i=Le(n);let o=Ve.min(),l=ze();return i.persistence.runTransaction("Execute query","readwrite",(d=>(function(p,v,E){const A=Le(p),R=A.Ms.get(E);return R!==void 0?ee.resolve(A.Fs.get(R)):A.hi.getTargetData(v,E)})(i,d,Vr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(d,f.targetId).next((p=>{l=p}))})).next((()=>i.Cs.getDocumentsMatchingQuery(d,e,t?o:Ve.min(),t?l:ze()))).next((f=>(Jk(i,UR(e),f),{documents:f,qs:l})))))}function Jk(n,e,t){let i=n.xs.get(e)||Ve.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.xs.set(e,i)}class Fv{constructor(){this.activeTargetIds=HR()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Zk{constructor(){this.Fo=new Fv,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Fv,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class e1{xo(e){}shutdown(){}}/**
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
 */const Bv="ConnectivityMonitor";class $v{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ve(Bv,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ve(Bv,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let gc=null;function qf(){return gc===null?gc=(function(){return 268435456+Math.round(2147483648*Math.random())})():gc++,"0x"+gc.toString(16)}/**
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
 */const cf="RestConnection",t1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class n1{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.Ko=this.databaseId.database===Uc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const d=qf(),f=this.Go(e,t.toUriEncodedString());ve(cf,`Sending RPC '${e}' ${d}:`,f,i);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(p,o,l);const{host:v}=new URL(f),E=cs(v);return this.jo(e,f,p,i,E).then((A=>(ve(cf,`Received RPC '${e}' ${d}: `,A),A)),(A=>{throw rs(cf,`RPC '${e}' ${d} failed with error: `,A,"url: ",f,"request:",i),A}))}Jo(e,t,i,o,l,d){return this.Wo(e,t,i,o,l)}zo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ma})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const i=t1[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
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
 */class r1{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Yt="WebChannelConnection";class i1 extends n1{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,o,l){const d=qf();return new Promise(((f,p)=>{const v=new Rw;v.setWithCredentials(!0),v.listenOnce(kw.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case Sc.NO_ERROR:const A=v.getResponseJson();ve(Yt,`XHR for RPC '${e}' ${d} received:`,JSON.stringify(A)),f(A);break;case Sc.TIMEOUT:ve(Yt,`RPC '${e}' ${d} timed out`),p(new me(Y.DEADLINE_EXCEEDED,"Request time out"));break;case Sc.HTTP_ERROR:const R=v.getStatus();if(ve(Yt,`RPC '${e}' ${d} failed with status:`,R,"response text:",v.getResponseText()),R>0){let b=v.getResponseJson();Array.isArray(b)&&(b=b[0]);const W=b==null?void 0:b.error;if(W&&W.status&&W.message){const Q=(function(ne){const oe=ne.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(oe)>=0?oe:Y.UNKNOWN})(W.status);p(new me(Q,W.message))}else p(new me(Y.UNKNOWN,"Server responded with status "+v.getStatus()))}else p(new me(Y.UNAVAILABLE,"Connection failed."));break;default:xe(9055,{c_:e,streamId:d,l_:v.getLastErrorCode(),h_:v.getLastError()})}}finally{ve(Yt,`RPC '${e}' ${d} completed.`)}}));const E=JSON.stringify(o);ve(Yt,`RPC '${e}' ${d} sending request:`,o),v.send(t,"POST",E,i,15)}))}P_(e,t,i){const o=qf(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],d=xw(),f=Nw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(p.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(p.useFetchStreams=!0),this.zo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const E=l.join("");ve(Yt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const A=d.createWebChannel(E,p);this.T_(A);let R=!1,b=!1;const W=new r1({Ho:j=>{b?ve(Yt,`Not sending because RPC '${e}' stream ${o} is closed:`,j):(R||(ve(Yt,`Opening RPC '${e}' stream ${o} transport.`),A.open(),R=!0),ve(Yt,`RPC '${e}' stream ${o} sending:`,j),A.send(j))},Yo:()=>A.close()}),Q=(j,ne,oe)=>{j.listen(ne,(ie=>{try{oe(ie)}catch(G){setTimeout((()=>{throw G}),0)}}))};return Q(A,cl.EventType.OPEN,(()=>{b||(ve(Yt,`RPC '${e}' stream ${o} transport opened.`),W.s_())})),Q(A,cl.EventType.CLOSE,(()=>{b||(b=!0,ve(Yt,`RPC '${e}' stream ${o} transport closed`),W.__(),this.I_(A))})),Q(A,cl.EventType.ERROR,(j=>{b||(b=!0,rs(Yt,`RPC '${e}' stream ${o} transport errored. Name:`,j.name,"Message:",j.message),W.__(new me(Y.UNAVAILABLE,"The operation could not be completed")))})),Q(A,cl.EventType.MESSAGE,(j=>{var ne;if(!b){const oe=j.data[0];Je(!!oe,16349);const ie=oe,G=(ie==null?void 0:ie.error)||((ne=ie[0])===null||ne===void 0?void 0:ne.error);if(G){ve(Yt,`RPC '${e}' stream ${o} received error:`,G);const Te=G.status;let pe=(function(k){const x=Rt[k];if(x!==void 0)return fE(x)})(Te),N=G.message;pe===void 0&&(pe=Y.INTERNAL,N="Unknown error status: "+Te+" with message "+G.message),b=!0,W.__(new me(pe,N)),A.close()}else ve(Yt,`RPC '${e}' stream ${o} received:`,oe),W.a_(oe)}})),Q(f,Pw.STAT_EVENT,(j=>{j.stat===xf.PROXY?ve(Yt,`RPC '${e}' stream ${o} detected buffering proxy`):j.stat===xf.NOPROXY&&ve(Yt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{W.o_()}),0),W}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function df(){return typeof document<"u"?document:null}/**
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
 */function hd(n){return new lk(n,!0)}/**
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
 */class RE{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-i);o>0&&ve("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const zv="PersistentStream";class kE{constructor(e,t,i,o,l,d,f,p){this.Fi=e,this.w_=i,this.S_=o,this.connection=l,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new RE(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===Y.RESOURCE_EXHAUSTED?(gi(t.toString()),gi("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.b_===t&&this.W_(i,o)}),(i=>{e((()=>{const o=new me(Y.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(o)}))}))}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{i((()=>this.G_(o)))})),this.stream.onMessage((o=>{i((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ve(zv,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ve(zv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class s1 extends kE{constructor(e,t,i,o,l,d){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,d),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=dk(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Ve.min();const d=l.targetChange;return d.targetIds&&d.targetIds.length?Ve.min():d.readTime?Lr(d.readTime):Ve.min()})(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=$f(this.serializer),t.addTarget=(function(l,d){let f;const p=d.target;if(f=Lf(p)?{documents:pk(l,p)}:{query:mk(l,p).Vt},f.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){f.resumeToken=gE(l,d.resumeToken);const v=Uf(l,d.expectedCount);v!==null&&(f.expectedCount=v)}else if(d.snapshotVersion.compareTo(Ve.min())>0){f.readTime=$c(l,d.snapshotVersion.toTimestamp());const v=Uf(l,d.expectedCount);v!==null&&(f.expectedCount=v)}return f})(this.serializer,e);const i=yk(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=$f(this.serializer),t.removeTarget=e,this.k_(t)}}class o1 extends kE{constructor(e,t,i,o,l,d){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,d),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Je(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=fk(e.writeResults,e.commitTime),i=Lr(e.commitTime);return this.listener.ta(i,t)}na(){const e={};e.database=$f(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>hk(this.serializer,i)))};this.k_(t)}}/**
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
 */class a1{}class l1 extends a1{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new me(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,d])=>this.connection.Wo(e,Ff(t,i),o,l,d))).catch((l=>{throw l.name==="FirebaseError"?(l.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new me(Y.UNKNOWN,l.toString())}))}Jo(e,t,i,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([d,f])=>this.connection.Jo(e,Ff(t,i),o,d,f,l))).catch((d=>{throw d.name==="FirebaseError"?(d.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new me(Y.UNKNOWN,d.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class u1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(gi(t),this._a=!1):ve("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const ro="RemoteStore";class c1{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((d=>{i.enqueueAndForget((async()=>{po(this)&&(ve(ro,"Restarting streams for network reachability change."),await(async function(p){const v=Le(p);v.Ia.add(4),await ql(v),v.Aa.set("Unknown"),v.Ia.delete(4),await fd(v)})(this))}))})),this.Aa=new u1(i,o)}}async function fd(n){if(po(n))for(const e of n.da)await e(!0)}async function ql(n){for(const e of n.da)await e(!1)}function PE(n,e){const t=Le(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Op(t)?Dp(t):_a(t).x_()&&bp(t,e))}function xp(n,e){const t=Le(n),i=_a(t);t.Ta.delete(e),i.x_()&&NE(t,e),t.Ta.size===0&&(i.x_()?i.B_():po(t)&&t.Aa.set("Unknown"))}function bp(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ve.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}_a(n).H_(e)}function NE(n,e){n.Ra.$e(e),_a(n).Y_(e)}function Dp(n){n.Ra=new ik({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),_a(n).start(),n.Aa.aa()}function Op(n){return po(n)&&!_a(n).M_()&&n.Ta.size>0}function po(n){return Le(n).Ia.size===0}function xE(n){n.Ra=void 0}async function d1(n){n.Aa.set("Online")}async function h1(n){n.Ta.forEach(((e,t)=>{bp(n,e)}))}async function f1(n,e){xE(n),Op(n)?(n.Aa.la(e),Dp(n)):n.Aa.set("Unknown")}async function p1(n,e,t){if(n.Aa.set("Online"),e instanceof mE&&e.state===2&&e.cause)try{await(async function(o,l){const d=l.cause;for(const f of l.targetIds)o.Ta.has(f)&&(await o.remoteSyncer.rejectListen(f,d),o.Ta.delete(f),o.Ra.removeTarget(f))})(n,e)}catch(i){ve(ro,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await qc(n,i)}else if(e instanceof kc?n.Ra.Ye(e):e instanceof pE?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Ve.min()))try{const i=await CE(n.localStore);t.compareTo(i)>=0&&await(function(l,d){const f=l.Ra.Pt(d);return f.targetChanges.forEach(((p,v)=>{if(p.resumeToken.approximateByteSize()>0){const E=l.Ta.get(v);E&&l.Ta.set(v,E.withResumeToken(p.resumeToken,d))}})),f.targetMismatches.forEach(((p,v)=>{const E=l.Ta.get(p);if(!E)return;l.Ta.set(p,E.withResumeToken(Wt.EMPTY_BYTE_STRING,E.snapshotVersion)),NE(l,p);const A=new Yi(E.target,p,v,E.sequenceNumber);bp(l,A)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(i){ve(ro,"Failed to raise snapshot:",i),await qc(n,i)}}async function qc(n,e,t){if(!ya(e))throw e;n.Ia.add(1),await ql(n),n.Aa.set("Offline"),t||(t=()=>CE(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ve(ro,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await fd(n)}))}function bE(n,e){return e().catch((t=>qc(n,t,e)))}async function pd(n){const e=Le(n),t=ls(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:gp;for(;m1(e);)try{const o=await Xk(e.localStore,i);if(o===null){e.Pa.length===0&&t.B_();break}i=o.batchId,g1(e,o)}catch(o){await qc(e,o)}DE(e)&&OE(e)}function m1(n){return po(n)&&n.Pa.length<10}function g1(n,e){n.Pa.push(e);const t=ls(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function DE(n){return po(n)&&!ls(n).M_()&&n.Pa.length>0}function OE(n){ls(n).start()}async function y1(n){ls(n).na()}async function v1(n){const e=ls(n);for(const t of n.Pa)e.X_(t.mutations)}async function _1(n,e,t){const i=n.Pa.shift(),o=Sp.from(i,e,t);await bE(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await pd(n)}async function w1(n,e){e&&ls(n).Z_&&await(async function(i,o){if((function(d){return nk(d)&&d!==Y.ABORTED})(o.code)){const l=i.Pa.shift();ls(i).N_(),await bE(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await pd(i)}})(n,e),DE(n)&&OE(n)}async function qv(n,e){const t=Le(n);t.asyncQueue.verifyOperationInProgress(),ve(ro,"RemoteStore received new credentials");const i=po(t);t.Ia.add(3),await ql(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await fd(t)}async function E1(n,e){const t=Le(n);e?(t.Ia.delete(2),await fd(t)):e||(t.Ia.add(2),await ql(t),t.Aa.set("Unknown"))}function _a(n){return n.Va||(n.Va=(function(t,i,o){const l=Le(t);return l.ia(),new s1(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:d1.bind(null,n),e_:h1.bind(null,n),n_:f1.bind(null,n),J_:p1.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Op(n)?Dp(n):n.Aa.set("Unknown")):(await n.Va.stop(),xE(n))}))),n.Va}function ls(n){return n.ma||(n.ma=(function(t,i,o){const l=Le(t);return l.ia(),new o1(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:y1.bind(null,n),n_:w1.bind(null,n),ea:v1.bind(null,n),ta:_1.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await pd(n)):(await n.ma.stop(),n.Pa.length>0&&(ve(ro,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class Vp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new es,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const d=Date.now()+i,f=new Vp(e,t,d,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new me(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lp(n,e){if(gi("AsyncQueue",`${e}: ${n}`),ya(n))return new me(Y.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class aa{static emptySet(e){return new aa(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||Ce.comparator(t.key,i.key):(t,i)=>Ce.comparator(t.key,i.key),this.keyedMap=dl(),this.sortedSet=new ft(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof aa)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new aa;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class Hv{constructor(){this.fa=new ft(Ce.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):xe(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,i)=>{e.push(i)})),e}}class fa{constructor(e,t,i,o,l,d,f,p,v){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=d,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=v}static fromInitialDocuments(e,t,i,o,l){const d=[];return t.forEach((f=>{d.push({type:0,doc:f})})),new fa(e,t,aa.emptySet(t),d,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&od(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class T1{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class I1{constructor(){this.queries=Wv(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const o=Le(t),l=o.queries;o.queries=Wv(),l.forEach(((d,f)=>{for(const p of f.wa)p.onError(i)}))})(this,new me(Y.ABORTED,"Firestore shutting down"))}}function Wv(){return new fo((n=>eE(n)),od)}async function VE(n,e){const t=Le(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(i=2):(l=new T1,i=e.ba()?0:1);try{switch(i){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(d){const f=Lp(d,`Initialization of query '${ea(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&Mp(t)}async function LE(n,e){const t=Le(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const d=l.wa.indexOf(e);d>=0&&(l.wa.splice(d,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function S1(n,e){const t=Le(n);let i=!1;for(const o of e){const l=o.query,d=t.queries.get(l);if(d){for(const f of d.wa)f.Ca(o)&&(i=!0);d.ya=o}}i&&Mp(t)}function A1(n,e,t){const i=Le(n),o=i.queries.get(e);if(o)for(const l of o.wa)l.onError(t);i.queries.delete(e)}function Mp(n){n.Da.forEach((e=>{e.next()}))}var Hf,Kv;(Kv=Hf||(Hf={})).Fa="default",Kv.Cache="cache";class ME{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new fa(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=fa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Hf.Cache}}/**
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
 */class jE{constructor(e){this.key=e}}class UE{constructor(e){this.key=e}}class C1{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ze(),this.mutatedKeys=ze(),this.Xa=tE(e),this.eu=new aa(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new Hv,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,d=o,f=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,A)=>{const R=o.get(E),b=ad(this.query,A)?A:null,W=!!R&&this.mutatedKeys.has(R.key),Q=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let j=!1;R&&b?R.data.isEqual(b.data)?W!==Q&&(i.track({type:3,doc:b}),j=!0):this.iu(R,b)||(i.track({type:2,doc:b}),j=!0,(p&&this.Xa(b,p)>0||v&&this.Xa(b,v)<0)&&(f=!0)):!R&&b?(i.track({type:0,doc:b}),j=!0):R&&!b&&(i.track({type:1,doc:R}),j=!0,(p||v)&&(f=!0)),j&&(b?(d=d.add(b),l=Q?l.add(E):l.delete(E)):(d=d.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;d.size>this.query.limit;){const E=this.query.limitType==="F"?d.last():d.first();d=d.delete(E.key),l=l.delete(E.key),i.track({type:1,doc:E})}return{eu:d,ru:i,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const d=e.ru.pa();d.sort(((E,A)=>(function(b,W){const Q=j=>{switch(j){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return xe(20277,{At:j})}};return Q(b)-Q(W)})(E.type,A.type)||this.Xa(E.doc,A.doc))),this.su(i),o=o!=null&&o;const f=t&&!o?this.ou():[],p=this.Za.size===0&&this.current&&!o?1:0,v=p!==this.Ya;return this.Ya=p,d.length!==0||v?{snapshot:new fa(this.query,e.eu,l,d,e.mutatedKeys,p===0,v,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Hv,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ze(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const t=[];return e.forEach((i=>{this.Za.has(i)||t.push(new UE(i))})),this.Za.forEach((i=>{e.has(i)||t.push(new jE(i))})),t}uu(e){this.Ha=e.qs,this.Za=ze();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return fa.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const jp="SyncEngine";class R1{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class k1{constructor(e){this.key=e,this.lu=!1}}class P1{constructor(e,t,i,o,l,d){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=d,this.hu={},this.Pu=new fo((f=>eE(f)),od),this.Tu=new Map,this.Iu=new Set,this.du=new ft(Ce.comparator),this.Eu=new Map,this.Au=new Rp,this.Ru={},this.Vu=new Map,this.mu=ha.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function N1(n,e,t=!0){const i=HE(n);let o;const l=i.Pu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await FE(i,e,t,!0),o}async function x1(n,e){const t=HE(n);await FE(t,e,!0,!1)}async function FE(n,e,t,i){const o=await Yk(n.localStore,Vr(e)),l=o.targetId,d=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await b1(n,e,l,d==="current",o.resumeToken)),n.isPrimaryClient&&t&&PE(n.remoteStore,o),f}async function b1(n,e,t,i,o){n.gu=(A,R,b)=>(async function(Q,j,ne,oe){let ie=j.view.nu(ne);ie.Ds&&(ie=await Uv(Q.localStore,j.query,!1).then((({documents:N})=>j.view.nu(N,ie))));const G=oe&&oe.targetChanges.get(j.targetId),Te=oe&&oe.targetMismatches.get(j.targetId)!=null,pe=j.view.applyChanges(ie,Q.isPrimaryClient,G,Te);return Qv(Q,j.targetId,pe._u),pe.snapshot})(n,A,R,b);const l=await Uv(n.localStore,e,!0),d=new C1(e,l.qs),f=d.nu(l.documents),p=zl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),v=d.applyChanges(f,n.isPrimaryClient,p);Qv(n,t,v._u);const E=new R1(e,t,d);return n.Pu.set(e,E),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),v.snapshot}async function D1(n,e,t){const i=Le(n),o=i.Pu.get(e),l=i.Tu.get(o.targetId);if(l.length>1)return i.Tu.set(o.targetId,l.filter((d=>!od(d,e)))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await zf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&xp(i.remoteStore,o.targetId),Wf(i,o.targetId)})).catch(ga)):(Wf(i,o.targetId),await zf(i.localStore,o.targetId,!0))}async function O1(n,e){const t=Le(n),i=t.Pu.get(e),o=t.Tu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),xp(t.remoteStore,i.targetId))}async function V1(n,e,t){const i=$1(n);try{const o=await(function(d,f){const p=Le(d),v=nt.now(),E=f.reduce(((b,W)=>b.add(W.key)),ze());let A,R;return p.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let W=yi(),Q=ze();return p.Os.getEntries(b,E).next((j=>{W=j,W.forEach(((ne,oe)=>{oe.isValidDocument()||(Q=Q.add(ne))}))})).next((()=>p.localDocuments.getOverlayedDocuments(b,W))).next((j=>{A=j;const ne=[];for(const oe of f){const ie=YR(oe,A.get(oe.key).overlayedDocument);ie!=null&&ne.push(new ps(oe.key,ie,Ww(ie.value.mapValue),un.exists(!0)))}return p.mutationQueue.addMutationBatch(b,v,ne,f)})).next((j=>{R=j;const ne=j.applyToLocalDocumentSet(A,Q);return p.documentOverlayCache.saveOverlays(b,j.batchId,ne)}))})).then((()=>({batchId:R.batchId,changes:rE(A)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(d,f,p){let v=d.Ru[d.currentUser.toKey()];v||(v=new ft(je)),v=v.insert(f,p),d.Ru[d.currentUser.toKey()]=v})(i,o.batchId,t),await Hl(i,o.changes),await pd(i.remoteStore)}catch(o){const l=Lp(o,"Failed to persist write");t.reject(l)}}async function BE(n,e){const t=Le(n);try{const i=await Gk(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const d=t.Eu.get(l);d&&(Je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?d.lu=!0:o.modifiedDocuments.size>0?Je(d.lu,14607):o.removedDocuments.size>0&&(Je(d.lu,42227),d.lu=!1))})),await Hl(t,i,e)}catch(i){await ga(i)}}function Gv(n,e,t){const i=Le(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Pu.forEach(((l,d)=>{const f=d.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(d,f){const p=Le(d);p.onlineState=f;let v=!1;p.queries.forEach(((E,A)=>{for(const R of A.wa)R.va(f)&&(v=!0)})),v&&Mp(p)})(i.eventManager,e),o.length&&i.hu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function L1(n,e,t){const i=Le(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Eu.get(e),l=o&&o.key;if(l){let d=new ft(Ce.comparator);d=d.insert(l,en.newNoDocument(l,Ve.min()));const f=ze().add(l),p=new dd(Ve.min(),new Map,new ft(je),d,f);await BE(i,p),i.du=i.du.remove(l),i.Eu.delete(e),Up(i)}else await zf(i.localStore,e,!1).then((()=>Wf(i,e,t))).catch(ga)}async function M1(n,e){const t=Le(n),i=e.batch.batchId;try{const o=await Kk(t.localStore,e);zE(t,i,null),$E(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Hl(t,o)}catch(o){await ga(o)}}async function j1(n,e,t){const i=Le(n);try{const o=await(function(d,f){const p=Le(d);return p.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let E;return p.mutationQueue.lookupMutationBatch(v,f).next((A=>(Je(A!==null,37113),E=A.keys(),p.mutationQueue.removeMutationBatch(v,A)))).next((()=>p.mutationQueue.performConsistencyCheck(v))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(v,E,f))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,E))).next((()=>p.localDocuments.getDocuments(v,E)))}))})(i.localStore,e);zE(i,e,t),$E(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Hl(i,o)}catch(o){await ga(o)}}function $E(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function zE(n,e,t){const i=Le(n);let o=i.Ru[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ru[i.currentUser.toKey()]=o}}function Wf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Tu.get(e))n.Pu.delete(i),t&&n.hu.pu(i,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((i=>{n.Au.containsKey(i)||qE(n,i)}))}function qE(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(xp(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Up(n))}function Qv(n,e,t){for(const i of t)i instanceof jE?(n.Au.addReference(i.key,e),U1(n,i)):i instanceof UE?(ve(jp,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,e),n.Au.containsKey(i.key)||qE(n,i.key)):xe(19791,{yu:i})}function U1(n,e){const t=e.key,i=t.path.canonicalString();n.du.get(t)||n.Iu.has(i)||(ve(jp,"New document in limbo: "+t),n.Iu.add(i),Up(n))}function Up(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new Ce(st.fromString(e)),i=n.mu.next();n.Eu.set(i,new k1(t)),n.du=n.du.insert(t,i),PE(n.remoteStore,new Yi(Vr(Ep(t.path)),i,"TargetPurposeLimboResolution",rd.ue))}}async function Hl(n,e,t){const i=Le(n),o=[],l=[],d=[];i.Pu.isEmpty()||(i.Pu.forEach(((f,p)=>{d.push(i.gu(p,e,t).then((v=>{var E;if((v||t)&&i.isPrimaryClient){const A=v?!v.fromCache:(E=t==null?void 0:t.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;i.sharedClientState.updateQueryState(p.targetId,A?"current":"not-current")}if(v){o.push(v);const A=Pp.Es(p.targetId,v);l.push(A)}})))})),await Promise.all(d),i.hu.J_(o),await(async function(p,v){const E=Le(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>ee.forEach(v,(R=>ee.forEach(R.Is,(b=>E.persistence.referenceDelegate.addReference(A,R.targetId,b))).next((()=>ee.forEach(R.ds,(b=>E.persistence.referenceDelegate.removeReference(A,R.targetId,b)))))))))}catch(A){if(!ya(A))throw A;ve(Np,"Failed to update sequence numbers: "+A)}for(const A of v){const R=A.targetId;if(!A.fromCache){const b=E.Fs.get(R),W=b.snapshotVersion,Q=b.withLastLimboFreeSnapshotVersion(W);E.Fs=E.Fs.insert(R,Q)}}})(i.localStore,l))}async function F1(n,e){const t=Le(n);if(!t.currentUser.isEqual(e)){ve(jp,"User change. New user:",e.toKey());const i=await AE(t.localStore,e);t.currentUser=e,(function(l,d){l.Vu.forEach((f=>{f.forEach((p=>{p.reject(new me(Y.CANCELLED,d))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Hl(t,i.Bs)}}function B1(n,e){const t=Le(n),i=t.Eu.get(e);if(i&&i.lu)return ze().add(i.key);{let o=ze();const l=t.Tu.get(e);if(!l)return o;for(const d of l){const f=t.Pu.get(d);o=o.unionWith(f.view.tu)}return o}}function HE(n){const e=Le(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=BE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=B1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=L1.bind(null,e),e.hu.J_=S1.bind(null,e.eventManager),e.hu.pu=A1.bind(null,e.eventManager),e}function $1(n){const e=Le(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=M1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=j1.bind(null,e),e}class Hc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Wk(this.persistence,new zk,e.initialUser,this.serializer)}Du(e){return new SE(kp.Vi,this.serializer)}bu(e){return new Zk}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hc.provider={build:()=>new Hc};class z1 extends Hc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Je(this.persistence.referenceDelegate instanceof zc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new kk(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?wn.withCacheSize(this.cacheSizeBytes):wn.DEFAULT;return new SE((i=>zc.Vi(i,t)),this.serializer)}}class Kf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Gv(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=F1.bind(null,this.syncEngine),await E1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new I1})()}createDatastore(e){const t=hd(e.databaseInfo.databaseId),i=(function(l){return new i1(l)})(e.databaseInfo);return(function(l,d,f,p){return new l1(l,d,f,p)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,d,f){return new c1(i,o,l,d,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>Gv(this.syncEngine,t,0)),(function(){return $v.C()?new $v:new e1})())}createSyncEngine(e,t){return(function(o,l,d,f,p,v,E){const A=new P1(o,l,d,f,p,v);return E&&(A.fu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Le(o);ve(ro,"RemoteStore shutting down."),l.Ia.add(5),await ql(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Kf.provider={build:()=>new Kf};/**
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
 */class WE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):gi("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const us="FirestoreClient";class q1{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Jt.UNAUTHENTICATED,this.clientId=mp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async d=>{ve(us,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d})),this.appCheckCredentials.start(i,(d=>(ve(us,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new es;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Lp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function hf(n,e){n.asyncQueue.verifyOperationInProgress(),ve(us,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await AE(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>{rs("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{ve("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{rs("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),n._offlineComponents=e}async function Xv(n,e){n.asyncQueue.verifyOperationInProgress();const t=await H1(n);ve(us,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>qv(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>qv(e.remoteStore,o))),n._onlineComponents=e}async function H1(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ve(us,"Using user provided OfflineComponentProvider");try{await hf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===Y.FAILED_PRECONDITION||o.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;rs("Error using user provided cache. Falling back to memory cache: "+t),await hf(n,new Hc)}}else ve(us,"Using default OfflineComponentProvider"),await hf(n,new z1(void 0));return n._offlineComponents}async function KE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ve(us,"Using user provided OnlineComponentProvider"),await Xv(n,n._uninitializedComponentsProvider._online)):(ve(us,"Using default OnlineComponentProvider"),await Xv(n,new Kf))),n._onlineComponents}function W1(n){return KE(n).then((e=>e.syncEngine))}async function Gf(n){const e=await KE(n),t=e.eventManager;return t.onListen=N1.bind(null,e.syncEngine),t.onUnlisten=D1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=x1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=O1.bind(null,e.syncEngine),t}function K1(n,e,t={}){const i=new es;return n.asyncQueue.enqueueAndForget((async()=>(function(l,d,f,p,v){const E=new WE({next:R=>{E.Ou(),d.enqueueAndForget((()=>LE(l,A))),R.fromCache&&p.source==="server"?v.reject(new me(Y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(R)},error:R=>v.reject(R)}),A=new ME(f,E,{includeMetadataChanges:!0,ka:!0});return VE(l,A)})(await Gf(n),n.asyncQueue,e,t,i))),i.promise}/**
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
 */function GE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Yv=new Map;/**
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
 */const QE="firestore.googleapis.com",Jv=!0;class Zv{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new me(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=QE,this.ssl=Jv}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Jv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=IE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ck)throw new me(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=GE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new me(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new me(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new me(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class md{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new me(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new me(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new rR;switch(i.type){case"firstParty":return new aR(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new me(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Yv.get(t);i&&(ve("ComponentProvider","Removing Datastore"),Yv.delete(t),i.terminate())})(this),Promise.resolve()}}function G1(n,e,t,i={}){var o;n=Ln(n,md);const l=cs(e),d=n._getSettings(),f=Object.assign(Object.assign({},d),{emulatorOptions:n._getEmulatorOptions()}),p=`${e}:${t}`;l&&(tp(`https://${p}`),np("Firestore",!0)),d.host!==QE&&d.host!==p&&rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v=Object.assign(Object.assign({},d),{host:p,ssl:l,emulatorOptions:i});if(!ns(v,f)&&(n._setSettings(v),i.mockUserToken)){let E,A;if(typeof i.mockUserToken=="string")E=i.mockUserToken,A=Jt.MOCK_USER;else{E=j_(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const R=i.mockUserToken.sub||i.mockUserToken.user_id;if(!R)throw new me(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new Jt(R)}n._authCredentials=new iR(new Dw(E,A))}}/**
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
 */class ms{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ms(this.firestore,e,this._query)}}class It{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ts(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}toJSON(){return{type:It._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Bl(t,It._jsonSchema))return new It(e,i||null,new Ce(st.fromString(t.referencePath)))}}It._jsonSchemaVersion="firestore/documentReference/1.0",It._jsonSchema={type:Pt("string",It._jsonSchemaVersion),referencePath:Pt("string")};class ts extends ms{constructor(e,t,i){super(e,t,Ep(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new Ce(e))}withConverter(e){return new ts(this.firestore,e,this._path)}}function yt(n,e,...t){if(n=et(n),Vw("collection","path",e),n instanceof md){const i=st.fromString(e,...t);return hv(i),new ts(n,null,i)}{if(!(n instanceof It||n instanceof ts))throw new me(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(st.fromString(e,...t));return hv(i),new ts(n.firestore,null,i)}}function Xe(n,e,...t){if(n=et(n),arguments.length===1&&(e=mp.newId()),Vw("doc","path",e),n instanceof md){const i=st.fromString(e,...t);return dv(i),new It(n,null,new Ce(i))}{if(!(n instanceof It||n instanceof ts))throw new me(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(st.fromString(e,...t));return dv(i),new It(n.firestore,n instanceof ts?n.converter:null,new Ce(i))}}/**
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
 */const e_="AsyncQueue";class t_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new RE(this,"async_queue_retry"),this.oc=()=>{const i=df();i&&ve(e_,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=df();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=df();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new es;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ya(e))throw e;ve(e_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((i=>{throw this.tc=i,this.nc=!1,gi("INTERNAL UNHANDLED ERROR: ",n_(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=Vp.createAndSchedule(this,e,t,i,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&xe(47125,{hc:n_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function n_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function r_(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(n,["next","error","complete"])}class vi extends md{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new t_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new t_(e),this._firestoreClient=void 0,await e}}}function Q1(n,e){const t=typeof n=="object"?n:Jc(),i=typeof n=="string"?n:Uc,o=uo(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=V_("firestore");l&&G1(o,...l)}return o}function gd(n){if(n._terminated)throw new me(Y.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||X1(n),n._firestoreClient}function X1(n){var e,t,i;const o=n._freezeSettings(),l=(function(f,p,v,E){return new IR(f,p,v,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,GE(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new q1(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&(function(f){const p=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(p),_online:p}})(n._componentsProvider))}/**
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
 */class Xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xn(Wt.fromBase64String(e))}catch(t){throw new me(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Xn(Wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Bl(e,Xn._jsonSchema))return Xn.fromBase64String(e.bytes)}}Xn._jsonSchemaVersion="firestore/bytes/1.0",Xn._jsonSchema={type:Pt("string",Xn._jsonSchemaVersion),bytes:Pt("string")};/**
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
 */class Wl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new me(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class wa{constructor(e){this._methodName=e}}/**
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
 */class Mr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new me(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new me(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return je(this._lat,e._lat)||je(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Mr._jsonSchemaVersion}}static fromJSON(e){if(Bl(e,Mr._jsonSchema))return new Mr(e.latitude,e.longitude)}}Mr._jsonSchemaVersion="firestore/geoPoint/1.0",Mr._jsonSchema={type:Pt("string",Mr._jsonSchemaVersion),latitude:Pt("number"),longitude:Pt("number")};/**
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
 */class jr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:jr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Bl(e,jr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new jr(e.vectorValues);throw new me(Y.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}jr._jsonSchemaVersion="firestore/vectorValue/1.0",jr._jsonSchema={type:Pt("string",jr._jsonSchemaVersion),vectorValues:Pt("object")};/**
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
 */const Y1=/^__.*__$/;class J1{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new ps(e,this.data,this.fieldMask,t,this.fieldTransforms):new $l(e,this.data,t,this.fieldTransforms)}}class XE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new ps(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function YE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw xe(40011,{Ec:n})}}class yd{constructor(e,t,i,o,l,d){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new yd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.fc(e),o}gc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Wc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(YE(this.Ec)&&Y1.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Z1{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||hd(e)}Dc(e,t,i,o=!1){return new yd({Ec:e,methodName:t,bc:i,path:Ht.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kl(n){const e=n._freezeSettings(),t=hd(n._databaseId);return new Z1(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Fp(n,e,t,i,o,l={}){const d=n.Dc(l.merge||l.mergeFields?2:0,e,t,o);qp("Data must be an object, but it was:",d,i);const f=eT(i,d);let p,v;if(l.merge)p=new On(d.fieldMask),v=d.fieldTransforms;else if(l.mergeFields){const E=[];for(const A of l.mergeFields){const R=Qf(e,A,t);if(!d.contains(R))throw new me(Y.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);nT(E,R)||E.push(R)}p=new On(E),v=d.fieldTransforms.filter((A=>p.covers(A.field)))}else p=null,v=d.fieldTransforms;return new J1(new En(f),p,v)}class Gl extends wa{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gl}}function eP(n,e,t){return new yd({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Bp extends wa{_toFieldTransform(e){return new Ip(e.path,new Nl)}isEqual(e){return e instanceof Bp}}class $p extends wa{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=eP(this,e,!0),i=this.vc.map((l=>Ea(l,t))),o=new da(i);return new Ip(e.path,o)}isEqual(e){return e instanceof $p&&ns(this.vc,e.vc)}}class zp extends wa{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){const t=new bl(e.serializer,oE(e.serializer,this.Cc));return new Ip(e.path,t)}isEqual(e){return e instanceof zp&&this.Cc===e.Cc}}function JE(n,e,t,i){const o=n.Dc(1,e,t);qp("Data must be an object, but it was:",o,i);const l=[],d=En.empty();fs(i,((p,v)=>{const E=Hp(e,p,t);v=et(v);const A=o.gc(E);if(v instanceof Gl)l.push(E);else{const R=Ea(v,A);R!=null&&(l.push(E),d.set(E,R))}}));const f=new On(l);return new XE(d,f,o.fieldTransforms)}function ZE(n,e,t,i,o,l){const d=n.Dc(1,e,t),f=[Qf(e,i,t)],p=[o];if(l.length%2!=0)throw new me(Y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<l.length;R+=2)f.push(Qf(e,l[R])),p.push(l[R+1]);const v=[],E=En.empty();for(let R=f.length-1;R>=0;--R)if(!nT(v,f[R])){const b=f[R];let W=p[R];W=et(W);const Q=d.gc(b);if(W instanceof Gl)v.push(b);else{const j=Ea(W,Q);j!=null&&(v.push(b),E.set(b,j))}}const A=new On(v);return new XE(E,A,d.fieldTransforms)}function tP(n,e,t,i=!1){return Ea(t,n.Dc(i?4:3,e))}function Ea(n,e){if(tT(n=et(n)))return qp("Unsupported field value:",e,n),eT(n,e);if(n instanceof wa)return(function(i,o){if(!YE(o.Ec))throw o.wc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(i,o){const l=[];let d=0;for(const f of i){let p=Ea(f,o.yc(d));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),d++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=et(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return oE(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=nt.fromDate(i);return{timestampValue:$c(o.serializer,l)}}if(i instanceof nt){const l=new nt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:$c(o.serializer,l)}}if(i instanceof Mr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Xn)return{bytesValue:gE(o.serializer,i._byteString)};if(i instanceof It){const l=o.databaseId,d=i.firestore._databaseId;if(!d.isEqual(l))throw o.wc(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Cp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof jr)return(function(d,f){return{mapValue:{fields:{[qw]:{stringValue:Hw},[Fc]:{arrayValue:{values:d.toArray().map((v=>{if(typeof v!="number")throw f.wc("VectorValues must only contain numeric values.");return Tp(f.serializer,v)}))}}}}}})(i,o);throw o.wc(`Unsupported field value: ${nd(i)}`)})(n,e)}function eT(n,e){const t={};return jw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fs(n,((i,o)=>{const l=Ea(o,e.Vc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function tT(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof nt||n instanceof Mr||n instanceof Xn||n instanceof It||n instanceof wa||n instanceof jr)}function qp(n,e,t){if(!tT(t)||!Lw(t)){const i=nd(t);throw i==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+i)}}function Qf(n,e,t){if((e=et(e))instanceof Wl)return e._internalPath;if(typeof e=="string")return Hp(n,e);throw Wc("Field path arguments must be of type string or ",n,!1,void 0,t)}const nP=new RegExp("[~\\*/\\[\\]]");function Hp(n,e,t){if(e.search(nP)>=0)throw Wc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Wl(...e.split("."))._internalPath}catch{throw Wc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Wc(n,e,t,i,o){const l=i&&!i.isEmpty(),d=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||d)&&(p+=" (found",l&&(p+=` in field ${i}`),d&&(p+=` in document ${o}`),p+=")"),new me(Y.INVALID_ARGUMENT,f+n+p)}function nT(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class rT{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(vd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class rP extends rT{data(){return super.data()}}function vd(n,e){return typeof e=="string"?Hp(n,e):e instanceof Wl?e._internalPath:e._delegate._internalPath}/**
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
 */function iT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new me(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wp{}class sT extends Wp{}function xr(n,e,...t){let i=[];e instanceof Wp&&i.push(e),i=i.concat(t),(function(l){const d=l.filter((p=>p instanceof Kp)).length,f=l.filter((p=>p instanceof _d)).length;if(d>1||d>0&&f>0)throw new me(Y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class _d extends sT{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new _d(e,t,i)}_apply(e){const t=this._parse(e);return oT(e._query,t),new ms(e.firestore,e.converter,Mf(e._query,t))}_parse(e){const t=Kl(e.firestore);return(function(l,d,f,p,v,E,A){let R;if(v.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new me(Y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){s_(A,E);const W=[];for(const Q of A)W.push(i_(p,l,Q));R={arrayValue:{values:W}}}else R=i_(p,l,A)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||s_(A,E),R=tP(f,d,A,E==="in"||E==="not-in");return kt.create(v,E,R)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Qs(n,e,t){const i=e,o=vd("where",n);return _d._create(o,i,t)}class Kp extends Wp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Kp(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:yr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let d=o;const f=l.getFlattenedFilters();for(const p of f)oT(d,p),d=Mf(d,p)})(e._query,t),new ms(e.firestore,e.converter,Mf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Gp extends sT{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Gp(e,t)}_apply(e){const t=(function(o,l,d){if(o.startAt!==null)throw new me(Y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new me(Y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Pl(l,d)})(e._query,this._field,this._direction);return new ms(e.firestore,e.converter,(function(o,l){const d=o.explicitOrderBy.concat([l]);return new va(o.path,o.collectionGroup,d,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function Kc(n,e="asc"){const t=e,i=vd("orderBy",n);return Gp._create(i,t)}function i_(n,e,t){if(typeof(t=et(t))=="string"){if(t==="")throw new me(Y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Zw(e)&&t.indexOf("/")!==-1)throw new me(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(st.fromString(t));if(!Ce.isDocumentKey(i))throw new me(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return wv(n,new Ce(i))}if(t instanceof It)return wv(n,t._key);throw new me(Y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nd(t)}.`)}function s_(n,e){if(!Array.isArray(n)||n.length===0)throw new me(Y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function oT(n,e){const t=(function(o,l){for(const d of o)for(const f of d.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new me(Y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new me(Y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class iP{convertValue(e,t="none"){switch(as(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw xe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return fs(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[Fc].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((d=>Tt(d.doubleValue)));return new jr(l)}convertGeoPoint(e){return new Mr(Tt(e.latitude),Tt(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=sd(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Cl(e));default:return null}}convertTimestamp(e){const t=ss(e);return new nt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=st.fromString(e);Je(TE(i),9688,{name:e});const o=new Rl(i.get(1),i.get(3)),l=new Ce(i.popFirst(5));return o.isEqual(t)||gi(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function Qp(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class fl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xs extends rT{constructor(e,t,i,o,l,d){super(e,t,i,o,d),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Pc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(vd("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new me(Y.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Xs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Xs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Xs._jsonSchema={type:Pt("string",Xs._jsonSchemaVersion),bundleSource:Pt("string","DocumentSnapshot"),bundleName:Pt("string"),bundle:Pt("string")};class Pc extends Xs{data(e={}){return super.data(e)}}class Ys{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new fl(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Pc(this._firestore,this._userDataWriter,i.key,i,new fl(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new me(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let d=0;return o._snapshot.docChanges.map((f=>{const p=new Pc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new fl(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:d++}}))}{let d=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const p=new Pc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new fl(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,E=-1;return f.type!==0&&(v=d.indexOf(f.doc.key),d=d.delete(f.doc.key)),f.type!==1&&(d=d.add(f.doc),E=d.indexOf(f.doc.key)),{type:sP(f.type),doc:p,oldIndex:v,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new me(Y.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ys._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=mp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function sP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return xe(61501,{type:n})}}Ys._jsonSchemaVersion="firestore/querySnapshot/1.0",Ys._jsonSchema={type:Pt("string",Ys._jsonSchemaVersion),bundleSource:Pt("string","QuerySnapshot"),bundleName:Pt("string"),bundle:Pt("string")};class Xp extends iP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,t)}}function Gc(n){n=Ln(n,ms);const e=Ln(n.firestore,vi),t=gd(e),i=new Xp(e);return iT(n._query),K1(t,n._query).then((o=>new Ys(e,i,n,o)))}function Js(n,e,t){n=Ln(n,It);const i=Ln(n.firestore,vi),o=Qp(n.converter,e,t);return Ql(i,[Fp(Kl(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,un.none())])}function Ut(n,e,t,...i){n=Ln(n,It);const o=Ln(n.firestore,vi),l=Kl(o);let d;return d=typeof(e=et(e))=="string"||e instanceof Wl?ZE(l,"updateDoc",n._key,e,t,i):JE(l,"updateDoc",n._key,e),Ql(o,[d.toMutation(n._key,un.exists(!0))])}function Dl(n){return Ql(Ln(n.firestore,vi),[new cd(n._key,un.none())])}function io(n,e){const t=Ln(n.firestore,vi),i=Xe(n),o=Qp(n.converter,e);return Ql(t,[Fp(Kl(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,un.exists(!1))]).then((()=>i))}function Qn(n,...e){var t,i,o;n=et(n);let l={includeMetadataChanges:!1,source:"default"},d=0;typeof e[d]!="object"||r_(e[d])||(l=e[d++]);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(r_(e[d])){const A=e[d];e[d]=(t=A.next)===null||t===void 0?void 0:t.bind(A),e[d+1]=(i=A.error)===null||i===void 0?void 0:i.bind(A),e[d+2]=(o=A.complete)===null||o===void 0?void 0:o.bind(A)}let p,v,E;if(n instanceof It)v=Ln(n.firestore,vi),E=Ep(n._key.path),p={next:A=>{e[d]&&e[d](oP(v,n,A))},error:e[d+1],complete:e[d+2]};else{const A=Ln(n,ms);v=Ln(A.firestore,vi),E=A._query;const R=new Xp(v);p={next:b=>{e[d]&&e[d](new Ys(v,R,A,b))},error:e[d+1],complete:e[d+2]},iT(n._query)}return(function(R,b,W,Q){const j=new WE(Q),ne=new ME(b,j,W);return R.asyncQueue.enqueueAndForget((async()=>VE(await Gf(R),ne))),()=>{j.Ou(),R.asyncQueue.enqueueAndForget((async()=>LE(await Gf(R),ne)))}})(gd(v),E,f,p)}function Ql(n,e){return(function(i,o){const l=new es;return i.asyncQueue.enqueueAndForget((async()=>V1(await W1(i),o,l))),l.promise})(gd(n),e)}function oP(n,e,t){const i=t.docs.get(e._key),o=new Xp(n);return new Xs(n,o,e._key,i,new fl(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class aP{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Kl(e)}set(e,t,i){this._verifyNotCommitted();const o=ff(e,this._firestore),l=Qp(o.converter,t,i),d=Fp(this._dataReader,"WriteBatch.set",o._key,l,o.converter!==null,i);return this._mutations.push(d.toMutation(o._key,un.none())),this}update(e,t,i,...o){this._verifyNotCommitted();const l=ff(e,this._firestore);let d;return d=typeof(t=et(t))=="string"||t instanceof Wl?ZE(this._dataReader,"WriteBatch.update",l._key,t,i,o):JE(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(d.toMutation(l._key,un.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=ff(e,this._firestore);return this._mutations=this._mutations.concat(new cd(t._key,un.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new me(Y.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ff(n,e){if((n=et(n)).firestore!==e)throw new me(Y.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function lP(){return new Gl("deleteField")}function Zt(){return new Bp("serverTimestamp")}function Hs(...n){return new $p("arrayUnion",n)}function uP(n){return new zp("increment",n)}/**
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
 */function yc(n){return gd(n=Ln(n,vi)),new aP(n,(e=>Ql(n,e)))}(function(e,t=!0){(function(o){ma=o})(co),mr(new Yn("firestore",((i,{instanceIdentifier:o,options:l})=>{const d=i.getProvider("app").getImmediate(),f=new vi(new sR(i.getProvider("auth-internal")),new lR(d,i.getProvider("app-check-internal")),(function(v,E){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new me(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rl(v.options.projectId,E)})(d,o),d);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),Tn(ov,av,e),Tn(ov,av,"esm2017")})();var cP="firebase",dP="11.10.0";/**
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
 */Tn(cP,dP,"app");/**
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
 */const aT="firebasestorage.googleapis.com",lT="storageBucket",hP=120*1e3,fP=600*1e3;/**
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
 */class _t extends vr{constructor(e,t,i=0){super(pf(e),`Firebase Storage: ${t} (${pf(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_t.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return pf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var vt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(vt||(vt={}));function pf(n){return"storage/"+n}function Yp(){const n="An unknown error occurred, please check the error payload for server response.";return new _t(vt.UNKNOWN,n)}function pP(n){return new _t(vt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function mP(n){return new _t(vt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function gP(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new _t(vt.UNAUTHENTICATED,n)}function yP(){return new _t(vt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function vP(n){return new _t(vt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function _P(){return new _t(vt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function wP(){return new _t(vt.CANCELED,"User canceled the upload/download.")}function EP(n){return new _t(vt.INVALID_URL,"Invalid URL '"+n+"'.")}function TP(n){return new _t(vt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function IP(){return new _t(vt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+lT+"' property when initializing the app?")}function SP(){return new _t(vt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function AP(){return new _t(vt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function CP(n){return new _t(vt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Xf(n){return new _t(vt.INVALID_ARGUMENT,n)}function uT(){return new _t(vt.APP_DELETED,"The Firebase app was deleted.")}function RP(n){return new _t(vt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function El(n,e){return new _t(vt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function al(n){throw new _t(vt.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Vn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Vn.makeFromUrl(e,t)}catch{return new Vn(e,"")}if(i.path==="")return i;throw TP(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(G){G.path.charAt(G.path.length-1)==="/"&&(G.path_=G.path_.slice(0,-1))}const d="(/(.*))?$",f=new RegExp("^gs://"+o+d,"i"),p={bucket:1,path:3};function v(G){G.path_=decodeURIComponent(G.path)}const E="v[A-Za-z0-9_]+",A=t.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",b=new RegExp(`^https?://${A}/${E}/b/${o}/o${R}`,"i"),W={bucket:1,path:3},Q=t===aT?"(?:storage.googleapis.com|storage.cloud.google.com)":t,j="([^?#]*)",ne=new RegExp(`^https?://${Q}/${o}/${j}`,"i"),ie=[{regex:f,indices:p,postModify:l},{regex:b,indices:W,postModify:v},{regex:ne,indices:{bucket:1,path:2},postModify:v}];for(let G=0;G<ie.length;G++){const Te=ie[G],pe=Te.regex.exec(e);if(pe){const N=pe[Te.indices.bucket];let S=pe[Te.indices.path];S||(S=""),i=new Vn(N,S),Te.postModify(i);break}}if(i==null)throw EP(e);return i}}class kP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function PP(n,e,t){let i=1,o=null,l=null,d=!1,f=0;function p(){return f===2}let v=!1;function E(...j){v||(v=!0,e.apply(null,j))}function A(j){o=setTimeout(()=>{o=null,n(b,p())},j)}function R(){l&&clearTimeout(l)}function b(j,...ne){if(v){R();return}if(j){R(),E.call(null,j,...ne);return}if(p()||d){R(),E.call(null,j,...ne);return}i<64&&(i*=2);let ie;f===1?(f=2,ie=0):ie=(i+Math.random())*1e3,A(ie)}let W=!1;function Q(j){W||(W=!0,R(),!v&&(o!==null?(j||(f=2),clearTimeout(o),A(0)):j||(f=1)))}return A(0),l=setTimeout(()=>{d=!0,Q(!0)},t),Q}function NP(n){n(!1)}/**
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
 */function xP(n){return n!==void 0}function bP(n){return typeof n=="object"&&!Array.isArray(n)}function Jp(n){return typeof n=="string"||n instanceof String}function o_(n){return Zp()&&n instanceof Blob}function Zp(){return typeof Blob<"u"}function a_(n,e,t,i){if(i<e)throw Xf(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Xf(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function em(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function cT(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var Zs;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Zs||(Zs={}));/**
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
 */function DP(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
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
 */class OP{constructor(e,t,i,o,l,d,f,p,v,E,A,R=!0,b=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=d,this.callback_=f,this.errorCallback_=p,this.timeout_=v,this.progressCallback_=E,this.connectionFactory_=A,this.retry=R,this.isUsingEmulator=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((W,Q)=>{this.resolve_=W,this.reject_=Q,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new vc(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const d=f=>{const p=f.loaded,v=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,v)};this.progressCallback_!==null&&l.addUploadProgressListener(d),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(d),this.pendingConnection_=null;const f=l.getErrorCode()===Zs.NO_ERROR,p=l.getStatus();if(!f||DP(p,this.additionalRetryCodes_)&&this.retry){const E=l.getErrorCode()===Zs.ABORT;i(!1,new vc(!1,null,E));return}const v=this.successCodes_.indexOf(p)!==-1;i(!0,new vc(v,l))})},t=(i,o)=>{const l=this.resolve_,d=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(f,f.getResponse());xP(p)?l(p):l()}catch(p){d(p)}else if(f!==null){const p=Yp();p.serverResponse=f.getErrorText(),this.errorCallback_?d(this.errorCallback_(f,p)):d(p)}else if(o.canceled){const p=this.appDelete_?uT():wP();d(p)}else{const p=_P();d(p)}};this.canceled_?t(!1,new vc(!1,null,!0)):this.backoffId_=PP(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&NP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class vc{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function VP(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function LP(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function MP(n,e){e&&(n["X-Firebase-GMPID"]=e)}function jP(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function UP(n,e,t,i,o,l,d=!0,f=!1){const p=cT(n.urlParams),v=n.url+p,E=Object.assign({},n.headers);return MP(E,e),VP(E,t),LP(E,l),jP(E,i),new OP(v,n.method,E,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,d,f)}/**
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
 */function FP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function BP(...n){const e=FP();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Zp())return new Blob(n);throw new _t(vt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function $P(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function zP(n){if(typeof atob>"u")throw CP("base-64");return atob(n)}/**
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
 */const br={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class mf{constructor(e,t){this.data=e,this.contentType=t||null}}function qP(n,e){switch(n){case br.RAW:return new mf(dT(e));case br.BASE64:case br.BASE64URL:return new mf(hT(n,e));case br.DATA_URL:return new mf(WP(e),KP(e))}throw Yp()}function dT(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,d=n.charCodeAt(++t);i=65536|(l&1023)<<10|d&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function HP(n){let e;try{e=decodeURIComponent(n)}catch{throw El(br.DATA_URL,"Malformed data URL.")}return dT(e)}function hT(n,e){switch(n){case br.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw El(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case br.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw El(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=zP(e)}catch(o){throw o.message.includes("polyfill")?o:El(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class fT{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw El(br.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=GP(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function WP(n){const e=new fT(n);return e.base64?hT(br.BASE64,e.rest):HP(e.rest)}function KP(n){return new fT(n).contentType}function GP(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Xi{constructor(e,t){let i=0,o="";o_(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(o_(this.data_)){const i=this.data_,o=$P(i,e,t);return o===null?null:new Xi(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new Xi(i,!0)}}static getBlob(...e){if(Zp()){const t=e.map(i=>i instanceof Xi?i.data_:i);return new Xi(BP.apply(null,t))}else{const t=e.map(d=>Jp(d)?qP(br.RAW,d).data:d.data_);let i=0;t.forEach(d=>{i+=d.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(d=>{for(let f=0;f<d.length;f++)o[l++]=d[f]}),new Xi(o,!0)}}uploadData(){return this.data_}}/**
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
 */function pT(n){let e;try{e=JSON.parse(n)}catch{return null}return bP(e)?e:null}/**
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
 */function QP(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function XP(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function mT(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function YP(n,e){return e}class ln{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||YP}}let _c=null;function JP(n){return!Jp(n)||n.length<2?n:mT(n)}function gT(){if(_c)return _c;const n=[];n.push(new ln("bucket")),n.push(new ln("generation")),n.push(new ln("metageneration")),n.push(new ln("name","fullPath",!0));function e(l,d){return JP(d)}const t=new ln("name");t.xform=e,n.push(t);function i(l,d){return d!==void 0?Number(d):d}const o=new ln("size");return o.xform=i,n.push(o),n.push(new ln("timeCreated")),n.push(new ln("updated")),n.push(new ln("md5Hash",null,!0)),n.push(new ln("cacheControl",null,!0)),n.push(new ln("contentDisposition",null,!0)),n.push(new ln("contentEncoding",null,!0)),n.push(new ln("contentLanguage",null,!0)),n.push(new ln("contentType",null,!0)),n.push(new ln("metadata","customMetadata",!0)),_c=n,_c}function ZP(n,e){function t(){const i=n.bucket,o=n.fullPath,l=new Vn(i,o);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function eN(n,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const d=t[l];i[d.local]=d.xform(i,e[d.server])}return ZP(i,n),i}function yT(n,e,t){const i=pT(e);return i===null?null:eN(n,i,t)}function tN(n,e,t,i){const o=pT(e);if(o===null||!Jp(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const d=encodeURIComponent;return l.split(",").map(v=>{const E=n.bucket,A=n.fullPath,R="/b/"+d(E)+"/o/"+d(A),b=em(R,t,i),W=cT({alt:"media",token:v});return b+W})[0]}function nN(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class vT{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function _T(n){if(!n)throw Yp()}function rN(n,e){function t(i,o){const l=yT(n,o,e);return _T(l!==null),l}return t}function iN(n,e){function t(i,o){const l=yT(n,o,e);return _T(l!==null),tN(l,o,n.host,n._protocol)}return t}function wT(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=yP():o=gP():t.getStatus()===402?o=mP(n.bucket):t.getStatus()===403?o=vP(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function sN(n){const e=wT(n);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=pP(n.path)),l.serverResponse=o.serverResponse,l}return t}function oN(n,e,t){const i=e.fullServerUrl(),o=em(i,n.host,n._protocol),l="GET",d=n.maxOperationRetryTime,f=new vT(o,l,iN(n,t),d);return f.errorHandler=sN(e),f}function aN(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function lN(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=aN(null,e)),i}function uN(n,e,t,i,o){const l=e.bucketOnlyServerUrl(),d={"X-Goog-Upload-Protocol":"multipart"};function f(){let ie="";for(let G=0;G<2;G++)ie=ie+Math.random().toString().slice(2);return ie}const p=f();d["Content-Type"]="multipart/related; boundary="+p;const v=lN(e,i,o),E=nN(v,t),A="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+E+`\r
--`+p+`\r
Content-Type: `+v.contentType+`\r
\r
`,R=`\r
--`+p+"--",b=Xi.getBlob(A,i,R);if(b===null)throw SP();const W={name:v.fullPath},Q=em(l,n.host,n._protocol),j="POST",ne=n.maxUploadRetryTime,oe=new vT(Q,j,rN(n,t),ne);return oe.urlParams=W,oe.headers=d,oe.body=b.uploadData(),oe.errorHandler=wT(e),oe}class cN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Zs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Zs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Zs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o,l){if(this.sent_)throw al("cannot .send() more than once");if(cs(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),l!==void 0)for(const d in l)l.hasOwnProperty(d)&&this.xhr_.setRequestHeader(d,l[d].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw al("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw al("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw al("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw al("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class dN extends cN{initXhr(){this.xhr_.responseType="text"}}function ET(){return new dN}/**
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
 */class so{constructor(e,t){this._service=e,t instanceof Vn?this._location=t:this._location=Vn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new so(e,t)}get root(){const e=new Vn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mT(this._location.path)}get storage(){return this._service}get parent(){const e=QP(this._location.path);if(e===null)return null;const t=new Vn(this._location.bucket,e);return new so(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw RP(e)}}function hN(n,e,t){n._throwIfRoot("uploadBytes");const i=uN(n.storage,n._location,gT(),new Xi(e,!0),t);return n.storage.makeRequestWithTokens(i,ET).then(o=>({metadata:o,ref:n}))}function fN(n){n._throwIfRoot("getDownloadURL");const e=oN(n.storage,n._location,gT());return n.storage.makeRequestWithTokens(e,ET).then(t=>{if(t===null)throw AP();return t})}function pN(n,e){const t=XP(n._location.path,e),i=new Vn(n._location.bucket,t);return new so(n.storage,i)}/**
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
 */function mN(n){return/^[A-Za-z]+:\/\//.test(n)}function gN(n,e){return new so(n,e)}function TT(n,e){if(n instanceof tm){const t=n;if(t._bucket==null)throw IP();const i=new so(t,t._bucket);return e!=null?TT(i,e):i}else return e!==void 0?pN(n,e):n}function yN(n,e){if(e&&mN(e)){if(n instanceof tm)return gN(n,e);throw Xf("To use ref(service, url), the first argument must be a Storage instance.")}else return TT(n,e)}function l_(n,e){const t=e==null?void 0:e[lT];return t==null?null:Vn.makeFromBucketSpec(t,n)}function vN(n,e,t,i={}){n.host=`${e}:${t}`;const o=cs(e);o&&(tp(`https://${n.host}/b`),np("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:l}=i;l&&(n._overrideAuthToken=typeof l=="string"?l:j_(l,n.app.options.projectId))}class tm{constructor(e,t,i,o,l,d=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=d,this._bucket=null,this._host=aT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=hP,this._maxUploadRetryTime=fP,this._requests=new Set,o!=null?this._bucket=Vn.makeFromBucketSpec(o,this._host):this._bucket=l_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Vn.makeFromBucketSpec(this._url,e):this._bucket=l_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){a_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){a_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Dn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new so(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new kP(uT());{const d=UP(e,this._appId,i,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(d),d.getPromise().then(()=>this._requests.delete(d),()=>this._requests.delete(d)),d}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const u_="@firebase/storage",c_="0.13.14";/**
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
 */const IT="storage";function nm(n,e,t){return n=et(n),hN(n,e,t)}function rm(n){return n=et(n),fN(n)}function im(n,e){return n=et(n),yN(n,e)}function _N(n=Jc(),e){n=et(n);const i=uo(n,IT).getImmediate({identifier:e}),o=V_("storage");return o&&wN(i,...o),i}function wN(n,e,t,i={}){vN(n,e,t,i)}function EN(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new tm(t,i,o,e,co)}function TN(){mr(new Yn(IT,EN,"PUBLIC").setMultipleInstances(!0)),Tn(u_,c_,""),Tn(u_,c_,"esm2017")}TN();const ST="@firebase/installations",sm="0.6.18";/**
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
 */const AT=1e4,CT=`w:${sm}`,RT="FIS_v2",IN="https://firebaseinstallations.googleapis.com/v1",SN=3600*1e3,AN="installations",CN="Installations";/**
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
 */const RN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},oo=new lo(AN,CN,RN);function kT(n){return n instanceof vr&&n.code.includes("request-failed")}/**
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
 */function PT({projectId:n}){return`${IN}/projects/${n}/installations`}function NT(n){return{token:n.token,requestStatus:2,expiresIn:PN(n.expiresIn),creationTime:Date.now()}}async function xT(n,e){const i=(await e.json()).error;return oo.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function bT({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function kN(n,{refreshToken:e}){const t=bT(n);return t.append("Authorization",NN(e)),t}async function DT(n){const e=await n();return e.status>=500&&e.status<600?n():e}function PN(n){return Number(n.replace("s","000"))}function NN(n){return`${RT} ${n}`}/**
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
 */async function xN({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=PT(n),o=bT(n),l=e.getImmediate({optional:!0});if(l){const v=await l.getHeartbeatsHeader();v&&o.append("x-firebase-client",v)}const d={fid:t,authVersion:RT,appId:n.appId,sdkVersion:CT},f={method:"POST",headers:o,body:JSON.stringify(d)},p=await DT(()=>fetch(i,f));if(p.ok){const v=await p.json();return{fid:v.fid||t,registrationStatus:2,refreshToken:v.refreshToken,authToken:NT(v.authToken)}}else throw await xT("Create Installation",p)}/**
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
 */function OT(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function bN(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const DN=/^[cdef][\w-]{21}$/,Yf="";function ON(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=VN(n);return DN.test(t)?t:Yf}catch{return Yf}}function VN(n){return bN(n).substr(0,22)}/**
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
 */function wd(n){return`${n.appName}!${n.appId}`}/**
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
 */const VT=new Map;function LT(n,e){const t=wd(n);MT(t,e),LN(t,e)}function MT(n,e){const t=VT.get(n);if(t)for(const i of t)i(e)}function LN(n,e){const t=MN();t&&t.postMessage({key:n,fid:e}),jN()}let Gs=null;function MN(){return!Gs&&"BroadcastChannel"in self&&(Gs=new BroadcastChannel("[Firebase] FID Change"),Gs.onmessage=n=>{MT(n.data.key,n.data.fid)}),Gs}function jN(){VT.size===0&&Gs&&(Gs.close(),Gs=null)}/**
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
 */const UN="firebase-installations-database",FN=1,ao="firebase-installations-store";let gf=null;function om(){return gf||(gf=Yc(UN,FN,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ao)}}})),gf}async function Qc(n,e){const t=wd(n),o=(await om()).transaction(ao,"readwrite"),l=o.objectStore(ao),d=await l.get(t);return await l.put(e,t),await o.done,(!d||d.fid!==e.fid)&&LT(n,e.fid),e}async function jT(n){const e=wd(n),i=(await om()).transaction(ao,"readwrite");await i.objectStore(ao).delete(e),await i.done}async function Ed(n,e){const t=wd(n),o=(await om()).transaction(ao,"readwrite"),l=o.objectStore(ao),d=await l.get(t),f=e(d);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!d||d.fid!==f.fid)&&LT(n,f.fid),f}/**
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
 */async function am(n){let e;const t=await Ed(n.appConfig,i=>{const o=BN(i),l=$N(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Yf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function BN(n){const e=n||{fid:ON(),registrationStatus:0};return UT(e)}function $N(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(oo.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=zN(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:qN(n)}:{installationEntry:e}}async function zN(n,e){try{const t=await xN(n,e);return Qc(n.appConfig,t)}catch(t){throw kT(t)&&t.customData.serverCode===409?await jT(n.appConfig):await Qc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function qN(n){let e=await d_(n.appConfig);for(;e.registrationStatus===1;)await OT(100),e=await d_(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await am(n);return i||t}return e}function d_(n){return Ed(n,e=>{if(!e)throw oo.create("installation-not-found");return UT(e)})}function UT(n){return HN(n)?{fid:n.fid,registrationStatus:0}:n}function HN(n){return n.registrationStatus===1&&n.registrationTime+AT<Date.now()}/**
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
 */async function WN({appConfig:n,heartbeatServiceProvider:e},t){const i=KN(n,t),o=kN(n,t),l=e.getImmediate({optional:!0});if(l){const v=await l.getHeartbeatsHeader();v&&o.append("x-firebase-client",v)}const d={installation:{sdkVersion:CT,appId:n.appId}},f={method:"POST",headers:o,body:JSON.stringify(d)},p=await DT(()=>fetch(i,f));if(p.ok){const v=await p.json();return NT(v)}else throw await xT("Generate Auth Token",p)}function KN(n,{fid:e}){return`${PT(n)}/${e}/authTokens:generate`}/**
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
 */async function lm(n,e=!1){let t;const i=await Ed(n.appConfig,l=>{if(!FT(l))throw oo.create("not-registered");const d=l.authToken;if(!e&&XN(d))return l;if(d.requestStatus===1)return t=GN(n,e),l;{if(!navigator.onLine)throw oo.create("app-offline");const f=JN(l);return t=QN(n,f),f}});return t?await t:i.authToken}async function GN(n,e){let t=await h_(n.appConfig);for(;t.authToken.requestStatus===1;)await OT(100),t=await h_(n.appConfig);const i=t.authToken;return i.requestStatus===0?lm(n,e):i}function h_(n){return Ed(n,e=>{if(!FT(e))throw oo.create("not-registered");const t=e.authToken;return ZN(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function QN(n,e){try{const t=await WN(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Qc(n.appConfig,i),t}catch(t){if(kT(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await jT(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Qc(n.appConfig,i)}throw t}}function FT(n){return n!==void 0&&n.registrationStatus===2}function XN(n){return n.requestStatus===2&&!YN(n)}function YN(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+SN}function JN(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function ZN(n){return n.requestStatus===1&&n.requestTime+AT<Date.now()}/**
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
 */async function ex(n){const e=n,{installationEntry:t,registrationPromise:i}=await am(e);return i?i.catch(console.error):lm(e).catch(console.error),t.fid}/**
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
 */async function tx(n,e=!1){const t=n;return await nx(t),(await lm(t,e)).token}async function nx(n){const{registrationPromise:e}=await am(n);e&&await e}/**
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
 */function rx(n){if(!n||!n.options)throw yf("App Configuration");if(!n.name)throw yf("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw yf(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function yf(n){return oo.create("missing-app-config-values",{valueName:n})}/**
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
 */const BT="installations",ix="installations-internal",sx=n=>{const e=n.getProvider("app").getImmediate(),t=rx(e),i=uo(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},ox=n=>{const e=n.getProvider("app").getImmediate(),t=uo(e,BT).getImmediate();return{getId:()=>ex(t),getToken:o=>tx(t,o)}};function ax(){mr(new Yn(BT,sx,"PUBLIC")),mr(new Yn(ix,ox,"PRIVATE"))}ax();Tn(ST,sm);Tn(ST,sm,"esm2017");/**
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
 */const lx="/firebase-messaging-sw.js",ux="/firebase-cloud-messaging-push-scope",$T="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",cx="https://fcmregistrations.googleapis.com/v1",zT="google.c.a.c_id",dx="google.c.a.c_l",hx="google.c.a.ts",fx="google.c.a.e",f_=1e4;var p_;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(p_||(p_={}));/**
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
 */var Ol;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Ol||(Ol={}));/**
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
 */function li(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function px(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(t),o=new Uint8Array(i.length);for(let l=0;l<i.length;++l)o[l]=i.charCodeAt(l);return o}/**
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
 */const vf="fcm_token_details_db",mx=5,m_="fcm_token_object_Store";async function gx(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(vf))return null;let e=null;return(await Yc(vf,mx,{upgrade:async(i,o,l,d)=>{var f;if(o<2||!i.objectStoreNames.contains(m_))return;const p=d.objectStore(m_),v=await p.index("fcmSenderId").get(n);if(await p.clear(),!!v){if(o===2){const E=v;if(!E.auth||!E.p256dh||!E.endpoint)return;e={token:E.fcmToken,createTime:(f=E.createTime)!==null&&f!==void 0?f:Date.now(),subscriptionOptions:{auth:E.auth,p256dh:E.p256dh,endpoint:E.endpoint,swScope:E.swScope,vapidKey:typeof E.vapidKey=="string"?E.vapidKey:li(E.vapidKey)}}}else if(o===3){const E=v;e={token:E.fcmToken,createTime:E.createTime,subscriptionOptions:{auth:li(E.auth),p256dh:li(E.p256dh),endpoint:E.endpoint,swScope:E.swScope,vapidKey:li(E.vapidKey)}}}else if(o===4){const E=v;e={token:E.fcmToken,createTime:E.createTime,subscriptionOptions:{auth:li(E.auth),p256dh:li(E.p256dh),endpoint:E.endpoint,swScope:E.swScope,vapidKey:li(E.vapidKey)}}}}}})).close(),await rf(vf),await rf("fcm_vapid_details_db"),await rf("undefined"),yx(e)?e:null}function yx(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const vx="firebase-messaging-database",_x=1,Vl="firebase-messaging-store";let _f=null;function qT(){return _f||(_f=Yc(vx,_x,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Vl)}}})),_f}async function wx(n){const e=HT(n),i=await(await qT()).transaction(Vl).objectStore(Vl).get(e);if(i)return i;{const o=await gx(n.appConfig.senderId);if(o)return await um(n,o),o}}async function um(n,e){const t=HT(n),o=(await qT()).transaction(Vl,"readwrite");return await o.objectStore(Vl).put(e,t),await o.done,e}function HT({appConfig:n}){return n.appId}/**
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
 */const Ex={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},cn=new lo("messaging","Messaging",Ex);/**
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
 */async function Tx(n,e){const t=await dm(n),i=WT(e),o={method:"POST",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(cm(n.appConfig),o)).json()}catch(d){throw cn.create("token-subscribe-failed",{errorInfo:d==null?void 0:d.toString()})}if(l.error){const d=l.error.message;throw cn.create("token-subscribe-failed",{errorInfo:d})}if(!l.token)throw cn.create("token-subscribe-no-token");return l.token}async function Ix(n,e){const t=await dm(n),i=WT(e.subscriptionOptions),o={method:"PATCH",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(`${cm(n.appConfig)}/${e.token}`,o)).json()}catch(d){throw cn.create("token-update-failed",{errorInfo:d==null?void 0:d.toString()})}if(l.error){const d=l.error.message;throw cn.create("token-update-failed",{errorInfo:d})}if(!l.token)throw cn.create("token-update-no-token");return l.token}async function Sx(n,e){const i={method:"DELETE",headers:await dm(n)};try{const l=await(await fetch(`${cm(n.appConfig)}/${e}`,i)).json();if(l.error){const d=l.error.message;throw cn.create("token-unsubscribe-failed",{errorInfo:d})}}catch(o){throw cn.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function cm({projectId:n}){return`${cx}/projects/${n}/registrations`}async function dm({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function WT({p256dh:n,auth:e,endpoint:t,vapidKey:i}){const o={web:{endpoint:t,auth:e,p256dh:n}};return i!==$T&&(o.web.applicationPubKey=i),o}/**
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
 */const Ax=10080*60*1e3;async function Cx(n){const e=await kx(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:li(e.getKey("auth")),p256dh:li(e.getKey("p256dh"))},i=await wx(n.firebaseDependencies);if(i){if(Px(i.subscriptionOptions,t))return Date.now()>=i.createTime+Ax?Rx(n,{token:i.token,createTime:Date.now(),subscriptionOptions:t}):i.token;try{await Sx(n.firebaseDependencies,i.token)}catch(o){console.warn(o)}return g_(n.firebaseDependencies,t)}else return g_(n.firebaseDependencies,t)}async function Rx(n,e){try{const t=await Ix(n.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await um(n.firebaseDependencies,i),t}catch(t){throw t}}async function g_(n,e){const i={token:await Tx(n,e),createTime:Date.now(),subscriptionOptions:e};return await um(n,i),i.token}async function kx(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:px(e)})}function Px(n,e){const t=e.vapidKey===n.vapidKey,i=e.endpoint===n.endpoint,o=e.auth===n.auth,l=e.p256dh===n.p256dh;return t&&i&&o&&l}/**
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
 */function y_(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return Nx(e,n),xx(e,n),bx(e,n),e}function Nx(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const i=e.notification.body;i&&(n.notification.body=i);const o=e.notification.image;o&&(n.notification.image=o);const l=e.notification.icon;l&&(n.notification.icon=l)}function xx(n,e){e.data&&(n.data=e.data)}function bx(n,e){var t,i,o,l,d;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const f=(o=(i=e.fcmOptions)===null||i===void 0?void 0:i.link)!==null&&o!==void 0?o:(l=e.notification)===null||l===void 0?void 0:l.click_action;f&&(n.fcmOptions.link=f);const p=(d=e.fcmOptions)===null||d===void 0?void 0:d.analytics_label;p&&(n.fcmOptions.analyticsLabel=p)}/**
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
 */function Dx(n){return typeof n=="object"&&!!n&&zT in n}/**
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
 */function Ox(n){if(!n||!n.options)throw wf("App Configuration Object");if(!n.name)throw wf("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const i of e)if(!t[i])throw wf(i);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function wf(n){return cn.create("missing-app-config-values",{valueName:n})}/**
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
 */class Vx{constructor(e,t,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=Ox(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
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
 */async function Lx(n){try{n.swRegistration=await navigator.serviceWorker.register(lx,{scope:ux}),n.swRegistration.update().catch(()=>{}),await Mx(n.swRegistration)}catch(e){throw cn.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function Mx(n){return new Promise((e,t)=>{const i=setTimeout(()=>t(new Error(`Service worker not registered after ${f_} ms`)),f_),o=n.installing||n.waiting;n.active?(clearTimeout(i),e()):o?o.onstatechange=l=>{var d;((d=l.target)===null||d===void 0?void 0:d.state)==="activated"&&(o.onstatechange=null,clearTimeout(i),e())}:(clearTimeout(i),t(new Error("No incoming service worker found.")))})}/**
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
 */async function jx(n,e){if(!e&&!n.swRegistration&&await Lx(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw cn.create("invalid-sw-registration");n.swRegistration=e}}/**
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
 */async function Ux(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=$T)}/**
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
 */async function KT(n,e){if(!navigator)throw cn.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw cn.create("permission-blocked");return await Ux(n,e==null?void 0:e.vapidKey),await jx(n,e==null?void 0:e.serviceWorkerRegistration),Cx(n)}/**
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
 */async function Fx(n,e,t){const i=Bx(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:t[zT],message_name:t[dx],message_time:t[hx],message_device_time:Math.floor(Date.now()/1e3)})}function Bx(n){switch(n){case Ol.NOTIFICATION_CLICKED:return"notification_open";case Ol.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function $x(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===Ol.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(y_(t)):n.onMessageHandler.next(y_(t)));const i=t.data;Dx(i)&&i[fx]==="1"&&await Fx(n,t.messageType,i)}const v_="@firebase/messaging",__="0.12.22";/**
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
 */const zx=n=>{const e=new Vx(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>$x(e,t)),e},qx=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:i=>KT(e,i)}};function Hx(){mr(new Yn("messaging",zx,"PUBLIC")),mr(new Yn("messaging-internal",qx,"PRIVATE")),Tn(v_,__),Tn(v_,__,"esm2017")}/**
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
 */async function GT(){try{await F_()}catch{return!1}return typeof window<"u"&&U_()&&kI()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Wx(n=Jc()){return GT().then(e=>{if(!e)throw cn.create("unsupported-browser")},e=>{throw cn.create("indexed-db-unsupported")}),uo(et(n),"messaging").getImmediate()}async function Kx(n,e){return n=et(n),KT(n,e)}Hx();const Jf=window.__FIREBASE_CONFIG__;(!Jf||Jf.apiKey.startsWith("REMPLACER"))&&console.warn("Configuration Firebase Web à compléter dans public/firebase-config.js");const Td=z_(Jf),ui=tR(Td),Ae=Q1(Td),hm=_N(Td);async function Gx(){return await GT()?Wx(Td):null}const Qx=window.__FIREBASE_VAPID_KEY__;function Xx(){const[n,e]=Z.useState("login"),[t,i]=Z.useState(""),[o,l]=Z.useState(""),[d,f]=Z.useState(""),[p,v]=Z.useState(""),[E,A]=Z.useState(""),[R,b]=Z.useState(!1),[W,Q]=Z.useState(""),[j,ne]=Z.useState(!1);function oe(N){const S=(N==null?void 0:N.code)||"";return S==="auth/invalid-credential"?"Adresse e-mail ou mot de passe incorrect.":S==="auth/email-already-in-use"?"Cette adresse e-mail possède déjà un compte.":S==="auth/weak-password"?"Le mot de passe doit contenir au moins 6 caractères.":S==="auth/invalid-email"?"L'adresse e-mail n'est pas valide.":S==="auth/network-request-failed"?"Problème de connexion Internet.":S==="auth/api-key-not-valid.-please-pass-a-valid-api-key."?"Configuration Firebase incorrecte. Recharge l'application.":S?`Erreur : ${S}`:"Une erreur est survenue."}async function ie(){await BA(ui,t.trim(),o)}async function G(){const N=Number(p),S=Number(E);if(!d.trim())throw new Error("CODE_INVITATION_REQUIS");if(N<1||N>31||S<1||S>12)throw new Error("DATE_ANNIVERSAIRE_INVALIDE");const k=await FA(ui,t.trim(),o);try{const x=xr(yt(Ae,"members"),Qs("inviteCode","==",d.trim()),Qs("claimed","==",!1)),V=await Gc(x);if(V.empty)throw await Qy(k.user),await Pf(ui),new Error("CODE_INVITATION_INVALIDE");const C=V.docs[0],I=C.data().role||"membre";await Ut(C.ref,{uid:k.user.uid,claimed:!0,email:t.trim(),birthdayDay:N,birthdayMonth:S}),await Js(Xe(Ae,"userRoles",k.user.uid),{role:I})}catch(x){if(ui.currentUser)try{await Qy(ui.currentUser)}catch{await Pf(ui)}throw x}}async function Te(N){N.preventDefault(),Q(""),ne(!0);try{n==="login"?await ie():await G()}catch(S){console.error("Erreur Firebase Auth :",S),(S==null?void 0:S.message)==="CODE_INVITATION_REQUIS"?Q("Le code d'invitation est obligatoire."):(S==null?void 0:S.message)==="CODE_INVITATION_INVALIDE"?Q("Code d'invitation invalide ou déjà utilisé."):(S==null?void 0:S.message)==="DATE_ANNIVERSAIRE_INVALIDE"?Q("Jour ou mois d'anniversaire invalide."):Q(oe(S))}finally{ne(!1)}}function pe(N){e(N),Q(""),l("")}return y.jsxs("main",{className:"auth-page",children:[y.jsx("div",{className:"auth-glow auth-glow-top"}),y.jsx("div",{className:"auth-glow auth-glow-bottom"}),y.jsxs("section",{className:`auth-panel ${n==="register"?"register-mode":""}`,children:[y.jsx("div",{className:"auth-logo-wrap",children:y.jsx("img",{className:"auth-logo",src:"/icons/icon-512.png",alt:"Chœur Lumina"})}),y.jsx("h1",{children:"Chœur Lumina"}),y.jsxs("p",{className:"auth-subtitle",children:["Une interface plus élégante pour chanter,",y.jsx("br",{}),"s'organiser et échanger."]}),y.jsxs("form",{className:"auth-form",onSubmit:Te,children:[n==="register"&&y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"auth-field",children:y.jsx("input",{"aria-label":"Code d'invitation",placeholder:"Code d'invitation",value:d,onChange:N=>f(N.target.value),autoCapitalize:"characters",autoCorrect:"off",required:!0})}),y.jsxs("div",{className:"auth-birthday-grid",children:[y.jsx("div",{className:"auth-field",children:y.jsx("input",{"aria-label":"Jour de naissance",inputMode:"numeric",placeholder:"Jour de naissance",value:p,onChange:N=>v(N.target.value),required:!0})}),y.jsx("div",{className:"auth-field",children:y.jsx("input",{"aria-label":"Mois de naissance",inputMode:"numeric",placeholder:"Mois",value:E,onChange:N=>A(N.target.value),required:!0})})]})]}),y.jsx("div",{className:"auth-field",children:y.jsx("input",{"aria-label":"Email",placeholder:"Email",type:"email",autoComplete:"email",inputMode:"email",value:t,onChange:N=>i(N.target.value),required:!0})}),y.jsxs("div",{className:"auth-field auth-password-field",children:[y.jsx("input",{"aria-label":"Mot de passe",placeholder:"Mot de passe",type:R?"text":"password",autoComplete:n==="login"?"current-password":"new-password",value:o,onChange:N=>l(N.target.value),required:!0,minLength:6}),y.jsx("button",{className:"auth-eye",type:"button","aria-label":R?"Masquer le mot de passe":"Afficher le mot de passe",onClick:()=>b(N=>!N),children:R?y.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[y.jsx("path",{d:"M3 3l18 18"}),y.jsx("path",{d:"M10.6 10.7a2 2 0 0 0 2.7 2.7"}),y.jsx("path",{d:"M9.9 4.2A10.7 10.7 0 0 1 12 4c5.5 0 9 5 9 5s-1.1 1.6-3 3"}),y.jsx("path",{d:"M6.6 6.6C4.4 8 3 10 3 10s3.5 5 9 5c1.2 0 2.3-.2 3.3-.6"})]}):y.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[y.jsx("path",{d:"M3 12s3.5-5 9-5 9 5 9 5-3.5 5-9 5-9-5-9-5Z"}),y.jsx("circle",{cx:"12",cy:"12",r:"2.5"})]})})]}),W&&y.jsx("p",{className:"auth-error",children:W}),y.jsx("button",{className:"auth-primary-button",type:"submit",disabled:j,children:j?"Patiente...":n==="login"?"Se connecter":"Créer mon compte"})]}),n==="login"?y.jsx("button",{type:"button",className:"auth-switch-link",onClick:()=>pe("register"),children:"J'ai un code d'invitation, créer mon compte"}):y.jsxs(y.Fragment,{children:[y.jsx("p",{className:"auth-help",children:"Le code d'invitation est fourni par un administrateur du Chœur Lumina."}),y.jsx("button",{type:"button",className:"auth-switch-link",onClick:()=>pe("login"),children:"J'ai déjà un compte, me connecter"})]})]})]})}function w_({member:n,nextEvent:e,songs:t,onOpen:i}){var o;return y.jsxs("section",{className:"screen home-screen",children:[y.jsxs("div",{className:"welcome-row",children:[y.jsxs("div",{className:"brand-inline",children:[y.jsx("img",{src:"/icons/icon-192.png",alt:"Logo"}),y.jsxs("div",{children:[y.jsx("span",{children:"Chœur Lumina"}),y.jsxs("h1",{children:["Bonjour ",(n==null?void 0:n.prenom)||""]})]})]}),y.jsx("span",{className:"wave",children:"👋"})]}),y.jsx("p",{className:"welcome-copy",children:"Retrouve rapidement tes chants, ton agenda et les échanges du chœur."}),(n==null?void 0:n.pupitre)&&y.jsxs("span",{className:"gold-chip",children:["Pupitre : ",n.pupitre]}),y.jsxs("div",{className:"shortcut-grid",children:[y.jsxs("button",{onClick:()=>i("songs"),children:["♫",y.jsx("span",{children:"Répertoire"})]}),y.jsxs("button",{onClick:()=>i("agenda"),children:["▣",y.jsx("span",{children:"Agenda"})]}),y.jsxs("button",{onClick:()=>i("messages"),children:["✉",y.jsx("span",{children:"Messages"})]})]}),y.jsxs("article",{className:"card",children:[y.jsx("h2",{children:"Prochain événement"}),e?y.jsxs(y.Fragment,{children:[y.jsx("span",{className:`event-chip ${e.cancelled?"cancelled":""}`,children:e.cancelled?"Annulé":e.type}),y.jsx("h3",{children:e.titre}),y.jsx("p",{children:(o=e.date)==null?void 0:o.toDate().toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"})}),e.lieu&&y.jsx("small",{children:e.lieu})]}):y.jsx("p",{children:"Aucun événement à venir."})]}),y.jsxs("article",{className:"card",children:[y.jsx("h2",{children:"Derniers chants ajoutés"}),t.slice(0,4).map(l=>y.jsxs("div",{className:"list-row",children:[y.jsxs("div",{children:[y.jsx("strong",{children:l.titre}),y.jsx("small",{children:l.compositeur})]}),y.jsx("span",{className:l.appris?"status-ok":"status-work",children:l.appris?"Appris":"À travailler"})]},l.id))]})]})}function Ta({title:n}){return y.jsxs("header",{className:"lumina-header",children:[y.jsx("img",{src:"/icons/icon-192.png",alt:"Logo Chœur Lumina"}),y.jsxs("div",{children:[y.jsx("span",{children:"Chœur Lumina"}),y.jsx("strong",{children:n})]})]})}function E_(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Paris",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}const Yx=[["repetition","Répétition"],["messe","Messe"],["reunion","Réunion"],["concert","Concert"],["autre","Autre"]];function Jx(n){var i;const e=(i=n==null?void 0:n.date)==null?void 0:i.toDate();return e?new Date(e.getTime()-e.getTimezoneOffset()*6e4).toISOString().slice(0,16):""}function Zx(){return{titre:"",type:"repetition",dateLocal:"",lieu:"",description:""}}function eb(n){return{id:n.id,titre:n.titre,type:n.type,dateLocal:Jx(n),lieu:n.lieu||"",description:n.description||""}}function tb({events:n,uid:e,songs:t,canEdit:i}){const[o,l]=Z.useState(null),[d,f]=Z.useState(null),[p,v]=Z.useState(null),[E,A]=Z.useState([]),[R,b]=Z.useState(null),[W,Q]=Z.useState(""),[j,ne]=Z.useState(""),[oe,ie]=Z.useState(""),G=Z.useMemo(()=>new Map(t.map($=>[$.id,$])),[t]),Te=Z.useMemo(()=>{const $=E_();return n.filter(he=>{var L,J;const ge=(J=(L=he.date)==null?void 0:L.toDate)==null?void 0:J.call(L);return ge instanceof Date&&E_(ge)>=$})},[n]);async function pe($,he){if(!(!e||$.synthetic||$.type==="anniversaire"))try{await Ut(Xe(Ae,"events",$.id),{[`reponses.${e}`]:he})}catch(ge){console.error(ge),ne("Impossible d'enregistrer la réponse.")}}async function N(){if(!(d!=null&&d.titre.trim())||!d.dateLocal)return;ie("save-event");const $={titre:d.titre.trim(),type:d.type,date:nt.fromDate(new Date(d.dateLocal)),lieu:d.lieu.trim(),description:d.description.trim()};try{d.id?await Ut(Xe(Ae,"events",d.id),$):await io(yt(Ae,"events"),{...$,reponses:{},programme:[],compteRendu:"",createdAt:Zt(),createdBy:e,cancelled:!1,cancelledAt:null}),ne(d.id?"Événement mis à jour.":"Événement créé."),f(null)}catch(he){console.error(he),ne("Impossible d'enregistrer l'événement.")}finally{ie("")}}async function S($){var he;if(window.confirm(`Annuler « ${$.titre} » ? L'événement restera visible.`)){ie(`cancel-${$.id}`);try{await Ut(Xe(Ae,"events",$.id),{cancelled:!0,cancelledAt:Zt(),cancelledBy:e});const ge=((he=$.date)==null?void 0:he.toDate().toLocaleDateString("fr-FR"))||"";await io(yt(Ae,"groupChat"),{authorUid:e,authorName:"Chœur Lumina",texte:`ÉVÉNEMENT ANNULÉ : ${$.titre}${ge?` · ${ge}`:""}`,type:"system_cancelled",mediaUrl:"",durationMs:0,timestamp:Zt(),editedAt:null,deleted:!1,readBy:[e],hiddenFor:[],reactions:{},replyToId:"",replyToText:"",replyToAuthor:""}),ne("Événement annulé, notification envoyée et message publié dans le groupe.")}catch(ge){console.error(ge),ne("Impossible d'annuler l'événement.")}finally{ie("")}}}async function k($){if(window.confirm(`Supprimer définitivement « ${$.titre} » ?`)){ie(`delete-${$.id}`);try{await Dl(Xe(Ae,"events",$.id)),ne("Événement supprimé.")}catch(he){console.error(he),ne("Impossible de supprimer l'événement.")}finally{ie("")}}}function x($){v($),A([...$.programme||[]])}async function V(){if(p){ie("programme");try{await Ut(Xe(Ae,"events",p.id),{programme:E}),v(null),ne("Programme de messe enregistré.")}catch($){console.error($),ne("Impossible d'enregistrer le programme.")}finally{ie("")}}}function C($,he){const ge=$+he;if(ge<0||ge>=E.length)return;const L=[...E];[L[$],L[ge]]=[L[ge],L[$]],A(L)}function I($){b($),Q($.compteRendu||"")}async function de(){if(R){ie("report");try{await Ut(Xe(Ae,"events",R.id),{compteRendu:W.trim()}),b(null),ne("Compte rendu enregistré.")}catch($){console.error($),ne("Impossible d'enregistrer le compte rendu.")}finally{ie("")}}}return y.jsxs(y.Fragment,{children:[y.jsx(Ta,{title:"Agenda"}),y.jsxs("section",{className:"screen agenda-v2-screen",children:[y.jsxs("div",{className:"intro-card agenda-hero",children:[y.jsxs("div",{children:[y.jsx("span",{className:"section-kicker",children:"VIE DU CHŒUR"}),y.jsx("h2",{children:"Agenda Lumina"}),y.jsx("p",{children:"Répétitions, messes, réunions, concerts et anniversaires."})]}),i&&y.jsx("button",{className:"primary-action",onClick:()=>f(Zx()),children:"+ Nouvel événement"})]}),j&&y.jsx("p",{className:"notice compact-notice",children:j}),y.jsx("div",{className:"compact-list timeline-list",children:Te.map($=>{var q,fe;const he=(q=$.date)==null?void 0:q.toDate(),ge=e?(fe=$.reponses)==null?void 0:fe[e]:void 0,L=o===$.id,J=($.programme||[]).map(_e=>G.get(_e)).filter(Boolean),X=Object.values($.reponses||{}),O=X.length?`${X.filter(_e=>_e==="present").length} présent(s) · ${X.filter(_e=>_e==="absent").length} absent(s)`:"Aucune réponse pour le moment";return y.jsxs("article",{className:`event-card event-card-v2 ${$.cancelled?"event-cancelled":""}`,children:[y.jsxs("div",{className:"date-tile date-tile-v2",children:[y.jsx("strong",{children:(he==null?void 0:he.getDate())??"--"}),y.jsx("span",{children:he==null?void 0:he.toLocaleDateString("fr-FR",{month:"short"}).replace(".","").toUpperCase()}),y.jsx("small",{children:he==null?void 0:he.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})})]}),y.jsxs("div",{className:"event-main event-main-v2",children:[y.jsxs("div",{className:"event-topline",children:[y.jsx("span",{className:"event-chip",children:$.type}),$.cancelled&&y.jsx("span",{className:"danger-chip",children:"ANNULÉ"})]}),y.jsx("h3",{children:$.titre}),$.lieu&&y.jsxs("small",{className:"event-location",children:["⌖ ",$.lieu]}),!$.cancelled&&!$.synthetic&&$.type!=="anniversaire"&&y.jsx("div",{className:"presence-actions",children:[["present","Présent"],["absent","Absent"],["peut-etre","Peut-être"]].map(([_e,Oe])=>y.jsx("button",{className:ge===_e?"selected":"",onClick:()=>void pe($,_e),children:Oe},_e))}),y.jsx("button",{className:"details-toggle",onClick:()=>l(L?null:$.id),children:L?"Masquer les détails":"Voir les détails"}),L&&y.jsxs("div",{className:"event-details-panel",children:[$.description&&y.jsxs("div",{className:"event-detail-block",children:[y.jsx("h4",{children:"Description"}),y.jsx("p",{children:$.description})]}),!$.synthetic&&y.jsxs("div",{className:"event-detail-block",children:[y.jsx("h4",{children:"Présences"}),y.jsx("p",{children:O})]}),$.type==="messe"&&y.jsxs("div",{className:"event-detail-block",children:[y.jsxs("div",{className:"detail-title-row",children:[y.jsx("h4",{children:"Programme de messe"}),i&&y.jsx("button",{onClick:()=>x($),children:"Modifier"})]}),J.length?y.jsx("ol",{children:J.map(_e=>y.jsx("li",{children:_e.titre},_e.id))}):y.jsx("p",{children:"Aucun chant sélectionné."})]}),$.type==="reunion"&&y.jsxs("div",{className:"event-detail-block",children:[y.jsxs("div",{className:"detail-title-row",children:[y.jsx("h4",{children:"Compte rendu"}),i&&y.jsx("button",{onClick:()=>I($),children:"Modifier"})]}),y.jsx("p",{className:"pre-line",children:$.compteRendu||"Pas encore de compte rendu."})]}),i&&!$.synthetic&&y.jsxs("div",{className:"event-admin-actions",children:[y.jsx("button",{onClick:()=>f(eb($)),children:"Modifier"}),!$.cancelled&&y.jsx("button",{className:"warning-action",disabled:oe===`cancel-${$.id}`,onClick:()=>void S($),children:"Annuler"}),y.jsx("button",{className:"danger-text",disabled:oe===`delete-${$.id}`,onClick:()=>void k($),children:"Supprimer"})]})]})]})]},$.id)})})]}),d&&y.jsx("div",{className:"modal-backdrop",onClick:()=>f(null),children:y.jsxs("div",{className:"admin-modal event-editor-modal",onClick:$=>$.stopPropagation(),children:[y.jsxs("div",{className:"modal-title-row",children:[y.jsxs("div",{children:[y.jsx("span",{className:"section-kicker",children:"AGENDA"}),y.jsx("h2",{children:d.id?"Modifier l'événement":"Nouvel événement"})]}),y.jsx("button",{onClick:()=>f(null),children:"×"})]}),y.jsxs("div",{className:"admin-dialog-form two-column-form",children:[y.jsxs("label",{children:["Titre",y.jsx("input",{value:d.titre,onChange:$=>f({...d,titre:$.target.value})})]}),y.jsxs("label",{children:["Type",y.jsx("select",{value:d.type,onChange:$=>f({...d,type:$.target.value}),children:Yx.map(([$,he])=>y.jsx("option",{value:$,children:he},$))})]}),y.jsxs("label",{children:["Date et heure",y.jsx("input",{type:"datetime-local",value:d.dateLocal,onChange:$=>f({...d,dateLocal:$.target.value})})]}),y.jsxs("label",{children:["Lieu",y.jsx("input",{value:d.lieu,onChange:$=>f({...d,lieu:$.target.value})})]}),y.jsxs("label",{className:"full-span",children:["Description",y.jsx("textarea",{rows:5,value:d.description,onChange:$=>f({...d,description:$.target.value})})]})]}),y.jsxs("div",{className:"modal-actions",children:[y.jsx("button",{onClick:()=>f(null),children:"Annuler"}),y.jsx("button",{className:"primary",disabled:oe==="save-event"||!d.titre.trim()||!d.dateLocal,onClick:()=>void N(),children:"Enregistrer"})]})]})}),p&&y.jsx("div",{className:"modal-backdrop",onClick:()=>v(null),children:y.jsxs("div",{className:"admin-modal programme-modal",onClick:$=>$.stopPropagation(),children:[y.jsxs("div",{className:"modal-title-row",children:[y.jsxs("div",{children:[y.jsx("span",{className:"section-kicker",children:"PROGRAMME"}),y.jsx("h2",{children:p.titre})]}),y.jsx("button",{onClick:()=>v(null),children:"×"})]}),y.jsxs("div",{className:"programme-editor",children:[y.jsx("h3",{children:"Ordre des chants"}),E.length===0&&y.jsx("p",{children:"Aucun chant sélectionné."}),E.map(($,he)=>{var ge;return y.jsxs("div",{className:"programme-row",children:[y.jsx("span",{children:he+1}),y.jsx("strong",{children:((ge=G.get($))==null?void 0:ge.titre)||"Chant introuvable"}),y.jsx("button",{disabled:he===0,onClick:()=>C(he,-1),children:"↑"}),y.jsx("button",{disabled:he===E.length-1,onClick:()=>C(he,1),children:"↓"}),y.jsx("button",{onClick:()=>A(E.filter((L,J)=>J!==he)),children:"×"})]},`${$}-${he}`)}),y.jsx("h3",{children:"Ajouter un chant"}),y.jsx("div",{className:"available-song-list",children:t.filter($=>!E.includes($.id)).map($=>y.jsxs("button",{onClick:()=>A([...E,$.id]),children:["+ ",$.titre]},$.id))})]}),y.jsxs("div",{className:"modal-actions",children:[y.jsx("button",{onClick:()=>v(null),children:"Annuler"}),y.jsx("button",{className:"primary",disabled:oe==="programme",onClick:()=>void V(),children:"Enregistrer"})]})]})}),R&&y.jsx("div",{className:"modal-backdrop",onClick:()=>b(null),children:y.jsxs("div",{className:"admin-modal report-modal",onClick:$=>$.stopPropagation(),children:[y.jsxs("div",{className:"modal-title-row",children:[y.jsxs("div",{children:[y.jsx("span",{className:"section-kicker",children:"RÉUNION"}),y.jsx("h2",{children:"Compte rendu"})]}),y.jsx("button",{onClick:()=>b(null),children:"×"})]}),y.jsx("textarea",{rows:14,value:W,onChange:$=>Q($.target.value),placeholder:"Saisir le compte rendu de la réunion…"}),y.jsxs("div",{className:"modal-actions",children:[y.jsx("button",{onClick:()=>b(null),children:"Annuler"}),y.jsx("button",{className:"primary",disabled:oe==="report",onClick:()=>void de(),children:"Enregistrer"})]})]})})]})}const T_=[["soprano","Soprano"],["alto","Alto"],["tenor","Ténor"],["basse","Basse"]],nb=()=>({titre:"",compositeur:"",partitionUrl:"",partitionType:"link",youtubeUrl:"",folderId:"",appris:!1,audioUrlsByPupitre:{},audioFilesByPupitre:{}});function rb(n){return{id:n.id,titre:n.titre,compositeur:n.compositeur||"",partitionUrl:n.partitionUrl||"",partitionType:n.partitionType||"link",youtubeUrl:n.youtubeUrl||"",folderId:n.folderId||"",appris:!!n.appris,audioUrlsByPupitre:{...n.audioUrlsByPupitre||{}},audioFilesByPupitre:{...n.audioFilesByPupitre||{}}}}function I_(n){return n.replace(/[^a-zA-Z0-9._-]/g,"_")}function ib({songs:n,folders:e,canEdit:t,uid:i}){const[o,l]=Z.useState(""),[d,f]=Z.useState(null),[p,v]=Z.useState(null),[E,A]=Z.useState(null),[R,b]=Z.useState(""),[W,Q]=Z.useState(!1),[j,ne]=Z.useState(""),[oe,ie]=Z.useState(""),[G,Te]=Z.useState(null),pe=Z.useRef(null),N=Z.useRef(null),S=Z.useRef([]),k=Z.useMemo(()=>o?n.filter(L=>L.folderId===o):n,[n,o]);async function x(L,J){const X=im(hm,J);return await nm(X,L),rm(X)}async function V(){const L=R.trim();if(L){ne("folder");try{await io(yt(Ae,"folders"),{nom:L}),b(""),Q(!1),ie("Dossier ajouté.")}catch(J){console.error(J),ie("Impossible d'ajouter le dossier.")}finally{ne("")}}}async function C(){if(!(p!=null&&p.titre.trim()))return;ne("save");const L={titre:p.titre.trim(),compositeur:p.compositeur.trim(),partitionUrl:p.partitionUrl.trim(),partitionType:p.partitionType||"link",audioUrl:"",audioIsFile:!1,youtubeUrl:p.youtubeUrl.trim(),folderId:p.folderId,appris:p.appris,audioUrlsByPupitre:p.audioUrlsByPupitre,audioFilesByPupitre:p.audioFilesByPupitre};try{p.id?await Ut(Xe(Ae,"songs",p.id),L):await io(yt(Ae,"songs"),{...L,createdAt:Zt()}),v(null),ie(p.id?"Chant mis à jour.":"Chant ajouté.")}catch(J){console.error(J),ie("Impossible d'enregistrer le chant.")}finally{ne("")}}async function I(L){if(window.confirm(`Supprimer « ${L.titre} » ?`)){ne(`delete-${L.id}`);try{await Dl(Xe(Ae,"songs",L.id)),ie("Chant supprimé.")}catch(J){console.error(J),ie("Impossible de supprimer le chant.")}finally{ne("")}}}async function de(L){if(p){ne("partition");try{const J=await x(L,`songs/${p.id||i}_${Date.now()}/partition_${I_(L.name)}`),X=L.type.includes("pdf")?"pdf":"image";v(O=>O&&{...O,partitionUrl:J,partitionType:X}),ie("Partition importée.")}catch(J){console.error(J),ie("Impossible d'importer la partition. Vérifie les règles Storage.")}finally{ne("")}}}async function $(L,J,X){if(p){ne(`audio-${L}`);try{const O=await x(J,`songs/${p.id||i}_${Date.now()}/${L}_${I_(X)}`);v(q=>q&&{...q,audioUrlsByPupitre:{...q.audioUrlsByPupitre,[L]:O},audioFilesByPupitre:{...q.audioFilesByPupitre,[L]:!0}}),ie(`Audio ${L} importé.`)}catch(O){console.error(O),ie("Impossible d'importer l'audio. Vérifie les règles Storage.")}finally{ne("")}}}async function he(L){var J;if(!((J=navigator.mediaDevices)!=null&&J.getUserMedia)||typeof MediaRecorder>"u"){ie("L'enregistrement audio n'est pas pris en charge par ce navigateur.");return}try{const X=await navigator.mediaDevices.getUserMedia({audio:!0}),O=new MediaRecorder(X);N.current=X,pe.current=O,S.current=[],O.ondataavailable=q=>{q.data.size>0&&S.current.push(q.data)},O.onstop=()=>{var fe;const q=new Blob(S.current,{type:O.mimeType||"audio/webm"});(fe=N.current)==null||fe.getTracks().forEach(_e=>_e.stop()),N.current=null,pe.current=null,Te(null),$(L,q,`enregistrement_${Date.now()}.webm`)},O.start(),Te(L),ie("Enregistrement en cours…")}catch(X){console.error(X),ie("Accès au microphone refusé ou indisponible.")}}function ge(){var L;((L=pe.current)==null?void 0:L.state)==="recording"&&pe.current.stop()}return y.jsxs(y.Fragment,{children:[y.jsx(Ta,{title:"Bibliothèque"}),y.jsxs("section",{className:"screen songs-v2-screen",children:[y.jsxs("div",{className:"intro-card library-hero",children:[y.jsxs("div",{children:[y.jsx("span",{className:"section-kicker",children:"RÉPERTOIRE DU CHŒUR"}),y.jsx("h2",{children:"Bibliothèque musicale"}),y.jsx("p",{children:"Partitions, vidéos et jusqu'à 4 audios par chant, un pour chaque pupitre."})]}),t&&y.jsx("button",{className:"primary-action",onClick:()=>v(nb()),children:"+ Ajouter un chant"})]}),y.jsxs("div",{className:"folder-toolbar",children:[y.jsx("button",{className:o?"":"selected",onClick:()=>l(""),children:"Tous"}),e.map(L=>y.jsx("button",{className:o===L.id?"selected":"",onClick:()=>l(L.id),children:L.nom},L.id)),t&&y.jsx("button",{className:"folder-add",onClick:()=>Q(L=>!L),children:"+ Dossier"})]}),W&&t&&y.jsxs("div",{className:"inline-admin-form",children:[y.jsx("input",{value:R,onChange:L=>b(L.target.value),placeholder:"Nom du dossier"}),y.jsx("button",{disabled:j==="folder"||!R.trim(),onClick:V,children:"Créer"})]}),oe&&y.jsx("p",{className:"notice compact-notice",children:oe}),y.jsxs("div",{className:"compact-list song-list-v2",children:[k.length===0&&y.jsx("div",{className:"empty-panel",children:"Aucun chant dans ce dossier."}),k.map(L=>{const J=Object.values(L.audioUrlsByPupitre||{}).filter(Boolean).length,X=d===L.id;return y.jsxs("article",{className:"song-card song-card-v2",children:[y.jsxs("button",{className:"song-summary song-summary-button",onClick:()=>f(X?null:L.id),children:[y.jsx("div",{className:"song-icon-tile",children:"♫"}),y.jsxs("div",{className:"song-summary-copy",children:[y.jsx("h3",{children:L.titre}),y.jsx("small",{children:L.compositeur||"Compositeur non renseigné"}),y.jsxs("p",{children:[L.partitionUrl?"Partition disponible":"Sans partition"," · ",J,"/4 audio",J>1?"s":""]})]}),y.jsx("span",{className:L.appris?"status-ok":"status-work",children:L.appris?"Appris":"À travailler"}),y.jsx("span",{className:"chevron",children:X?"⌃":"⌄"})]}),X&&y.jsxs("div",{className:"song-details song-details-v2",children:[y.jsxs("div",{className:"resource-row resource-row-v2",children:[L.partitionUrl&&y.jsx("button",{onClick:()=>A({url:L.partitionUrl,type:L.partitionType||"link",title:L.titre}),children:"Voir la partition"}),L.youtubeUrl&&y.jsx("a",{href:L.youtubeUrl,target:"_blank",rel:"noreferrer",children:"Voir la vidéo"}),t&&y.jsx("button",{onClick:()=>v(rb(L)),children:"Modifier"}),t&&y.jsx("button",{className:"danger-text",disabled:j===`delete-${L.id}`,onClick:()=>void I(L),children:"Supprimer"})]}),y.jsx("div",{className:"voice-audio-grid",children:T_.map(([O,q])=>{var _e;const fe=(_e=L.audioUrlsByPupitre)==null?void 0:_e[O];return y.jsxs("div",{className:`voice-audio-card ${fe?"has-audio":""}`,children:[y.jsxs("div",{children:[y.jsx("strong",{children:q}),y.jsx("small",{children:fe?"Audio disponible":"Pas encore d'audio"})]}),fe&&y.jsx("audio",{controls:!0,preload:"metadata",src:fe})]},O)})})]})]},L.id)})]})]}),E&&y.jsx("div",{className:"modal-backdrop",onClick:()=>A(null),children:y.jsxs("div",{className:"viewer-modal",onClick:L=>L.stopPropagation(),children:[y.jsxs("div",{className:"viewer-header",children:[y.jsx("h2",{children:E.title}),y.jsx("button",{onClick:()=>A(null),children:"×"})]}),E.type==="image"?y.jsx("img",{src:E.url,alt:E.title}):y.jsx("iframe",{src:E.url,title:E.title}),y.jsx("a",{className:"secondary-button viewer-open-link",href:E.url,target:"_blank",rel:"noreferrer",children:"Ouvrir dans un nouvel onglet"})]})}),p&&y.jsx("div",{className:"modal-backdrop",onClick:()=>v(null),children:y.jsxs("div",{className:"admin-modal song-editor-modal",onClick:L=>L.stopPropagation(),children:[y.jsxs("div",{className:"modal-title-row",children:[y.jsxs("div",{children:[y.jsx("span",{className:"section-kicker",children:"BIBLIOTHÈQUE"}),y.jsx("h2",{children:p.id?"Modifier le chant":"Nouveau chant"})]}),y.jsx("button",{onClick:()=>v(null),children:"×"})]}),y.jsxs("div",{className:"song-editor-grid",children:[y.jsxs("label",{children:["Titre",y.jsx("input",{value:p.titre,onChange:L=>v({...p,titre:L.target.value})})]}),y.jsxs("label",{children:["Compositeur",y.jsx("input",{value:p.compositeur,onChange:L=>v({...p,compositeur:L.target.value})})]}),y.jsxs("label",{children:["Dossier",y.jsxs("select",{value:p.folderId,onChange:L=>v({...p,folderId:L.target.value}),children:[y.jsx("option",{value:"",children:"Sans dossier"}),e.map(L=>y.jsx("option",{value:L.id,children:L.nom},L.id))]})]}),y.jsxs("label",{className:"toggle-line",children:[y.jsx("input",{type:"checkbox",checked:p.appris,onChange:L=>v({...p,appris:L.target.checked})})," Chant appris"]}),y.jsxs("label",{className:"full-span",children:["Vidéo YouTube",y.jsx("input",{value:p.youtubeUrl,onChange:L=>v({...p,youtubeUrl:L.target.value}),placeholder:"https://…"})]}),y.jsxs("div",{className:"editor-section full-span",children:[y.jsx("div",{className:"editor-section-head",children:y.jsxs("div",{children:[y.jsx("h3",{children:"Partition"}),y.jsx("p",{children:"PDF, image ou lien externe."})]})}),y.jsx("input",{value:p.partitionUrl,onChange:L=>v({...p,partitionUrl:L.target.value,partitionType:"link"}),placeholder:"Coller un lien vers la partition"}),y.jsxs("label",{className:"file-action",children:["Importer un fichier",y.jsx("input",{type:"file",accept:"application/pdf,image/*",hidden:!0,onChange:L=>{var X;const J=(X=L.target.files)==null?void 0:X[0];J&&de(J),L.currentTarget.value=""}})]}),p.partitionUrl&&y.jsx("small",{className:"upload-ok",children:"Partition prête ✓"})]}),y.jsxs("div",{className:"editor-section full-span",children:[y.jsx("div",{className:"editor-section-head",children:y.jsxs("div",{children:[y.jsx("h3",{children:"Audios par pupitre"}),y.jsx("p",{children:"Ajoute un lien, importe un fichier ou enregistre directement depuis le navigateur."})]})}),y.jsx("div",{className:"voice-editor-grid",children:T_.map(([L,J])=>y.jsxs("div",{className:"voice-editor-card",children:[y.jsx("strong",{children:J}),y.jsx("input",{value:p.audioUrlsByPupitre[L]||"",onChange:X=>v({...p,audioUrlsByPupitre:{...p.audioUrlsByPupitre,[L]:X.target.value},audioFilesByPupitre:{...p.audioFilesByPupitre,[L]:!1}}),placeholder:"Lien audio"}),p.audioUrlsByPupitre[L]&&y.jsx("audio",{controls:!0,preload:"metadata",src:p.audioUrlsByPupitre[L]}),y.jsxs("div",{className:"voice-editor-actions",children:[y.jsxs("label",{className:"file-action",children:["Importer",y.jsx("input",{type:"file",accept:"audio/*",hidden:!0,onChange:X=>{var q;const O=(q=X.target.files)==null?void 0:q[0];O&&$(L,O,O.name),X.currentTarget.value=""}})]}),G===L?y.jsx("button",{className:"record-stop",onClick:ge,children:"■ Arrêter"}):y.jsx("button",{disabled:!!G,onClick:()=>void he(L),children:"● Enregistrer"}),p.audioUrlsByPupitre[L]&&y.jsx("button",{onClick:()=>v({...p,audioUrlsByPupitre:{...p.audioUrlsByPupitre,[L]:""},audioFilesByPupitre:{...p.audioFilesByPupitre,[L]:!1}}),children:"Retirer"})]})]},L))})]})]}),y.jsxs("div",{className:"modal-actions",children:[y.jsx("button",{onClick:()=>v(null),children:"Annuler"}),y.jsx("button",{className:"primary",disabled:j==="save"||!p.titre.trim(),onClick:()=>void C(),children:j==="save"?"Enregistrement…":"Enregistrer"})]})]})})]})}const sb=["😀","😃","😄","😁","😂","🤣","😊","😍","🥰","😘","😎","🤩","🥳","😇","🙂","😉","😌","😋","😜","🤗","🤔","😮","😢","😭","😡","🤯","🥺","👍","👎","👏","🙌","🙏","🤝","💪","❤️","💛","💙","💜","🔥","✨","🎉","🎶","🎵","🎤","🎼","⛪","📖","✅","❌","💯","🌟","🕊️","🙏🏽","👏🏽","👍🏽"],ob=["❤️","👍","👏","😂","🙏","🔥"],S_=["#7c3aed","#0f766e","#c2410c","#2563eb","#be185d","#15803d","#9333ea","#b45309","#0369a1","#a21caf"];function ab(n){let e=0;for(const t of n)e=(e<<5)-e+t.charCodeAt(0)|0;return S_[Math.abs(e)%S_.length]}function lb(n){const e=(n||"").trim();return e?/^(?:[\p{Extended_Pictographic}\p{Emoji_Presentation}\uFE0F\u200D]|\s)+$/u.test(e):!1}function ai(n,e){return[n,e].sort().join("_")}function Zf(n,e){return n==="voice"?"🎤 Note vocale":n==="image"?"📷 Image":n==="sticker"?`✨ ${e||"Sticker"}`:e||"Message"}function ub(n){var e;return((e=n.timestamp)==null?void 0:e.toDate().toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}))||""}function cb(n){var i;if(n!=null&&n.online)return"En ligne";const e=(i=n==null?void 0:n.lastSeen)==null?void 0:i.toDate();if(!e)return"Hors ligne";const t=new Date;return e.toDateString()===t.toDateString()?`Vu aujourd'hui à ${e.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}`:`Vu le ${e.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"})}`}function db({uid:n,member:e,members:t}){var wi,Ei;const[i,o]=Z.useState(()=>new URLSearchParams(window.location.search).get("mode")==="private"||localStorage.getItem("lumina_message_mode")==="private"?"private":"group"),[l,d]=Z.useState([]),[f,p]=Z.useState([]),[v,E]=Z.useState([]),[A,R]=Z.useState({}),[b,W]=Z.useState(null),Q=Z.useRef(new URLSearchParams(window.location.search).get("targetUid")||localStorage.getItem("lumina_private_target_uid")||""),[j,ne]=Z.useState(()=>localStorage.getItem("lumina_group_draft")||""),[oe,ie]=Z.useState(()=>{try{return JSON.parse(localStorage.getItem("lumina_direct_drafts")||"{}")}catch{return{}}}),[G,Te]=Z.useState(!1),[pe,N]=Z.useState(null),[S,k]=Z.useState(null),[x,V]=Z.useState(new Set),[C,I]=Z.useState([]),[de,$]=Z.useState(!1),[he,ge]=Z.useState(""),[L,J]=Z.useState(""),[X,O]=Z.useState(!1),[q,fe]=Z.useState(0),[_e,Oe]=Z.useState(null),Ue=Z.useRef(null),Be=Z.useRef(null),qe=Z.useRef(null),Ye=Z.useRef([]),St=Z.useMemo(()=>{const z=new Map(v.map(ae=>{var ce;return[ae.id,((ce=ae.lastTimestamp)==null?void 0:ce.toDate().getTime())||0]}));return t.filter(ae=>ae.uid&&ae.uid!==n&&ae.claimed!==!1).sort((ae,ce)=>(z.get(ai(n,ce.uid))||0)-(z.get(ai(n,ae.uid))||0)||`${ae.prenom} ${ae.nom}`.localeCompare(`${ce.prenom} ${ce.nom}`,"fr"))},[t,n,v]),In=i==="group"?l:f,Fr=Z.useMemo(()=>In.filter(z=>!(z.hiddenFor||[]).includes(n)),[In,n]),dn=i==="group"?j:b&&oe[b.uid]||"";Z.useEffect(()=>{const z=xr(yt(Ae,"groupChat"),Kc("timestamp","asc"));return Qn(z,ae=>{d(ae.docs.map(ce=>({id:ce.id,...ce.data()})))})},[]),Z.useEffect(()=>{const z=xr(yt(Ae,"conversations"),Qs("participants","array-contains",n));return Qn(z,ae=>{E(ae.docs.map(ce=>({id:ce.id,...ce.data()})))})},[n]),Z.useEffect(()=>Qn(yt(Ae,"userStatus"),z=>{const ae={};z.docs.forEach(ce=>{ae[ce.id]=ce.data()}),R(ae)}),[]),Z.useEffect(()=>Qn(yt(Ae,"groupTyping"),z=>{const ae=Date.now(),ce=z.docs.map(Me=>{var lt;if(Me.id===n)return null;const be=Me.data(),Re=((lt=be.updatedAt)==null?void 0:lt.toDate().getTime())||0;return be.isTyping&&ae-Re<6e3&&be.name||null}).filter(Me=>!!Me);I(ce)}),[n]),Z.useEffect(()=>{if(!b){p([]),$(!1);return}const z=ai(n,b.uid),ae=Qn(xr(yt(Ae,"conversations",z,"messages"),Kc("timestamp","asc")),Me=>p(Me.docs.map(be=>({id:be.id,...be.data()})))),ce=Qn(Xe(Ae,"conversations",z,"typing",b.uid),Me=>{var lt;const be=Me.data(),Re=((lt=be==null?void 0:be.updatedAt)==null?void 0:lt.toDate().getTime())||0;$(!!(be!=null&&be.isTyping&&Date.now()-Re<6e3))});return()=>{ae(),ce()}},[b,n]),Z.useEffect(()=>{localStorage.setItem("lumina_group_draft",j)},[j]),Z.useEffect(()=>{localStorage.setItem("lumina_direct_drafts",JSON.stringify(oe))},[oe]),Z.useEffect(()=>{const z=new URLSearchParams(window.location.search);if(z.get("notificationAction")!=="mark_read")return;const ae=z.get("notificationType"),ce=z.get("messageId"),Me=z.get("conversationId");if(!ce)return;(async()=>{try{if(ae==="group_message")await Ut(Xe(Ae,"groupChat",ce),"readBy",Hs(n));else if(ae==="direct_message"&&Me){const Re=yc(Ae);Re.update(Xe(Ae,"conversations",Me,"messages",ce),"readBy",Hs(n),"deliveredBy",Hs(n)),Re.update(Xe(Ae,"conversations",Me),`unreadCounts.${n}`,0),await Re.commit()}}finally{["notificationAction","notificationType","messageId","conversationId"].forEach(lt=>z.delete(lt));const Re=`${window.location.pathname}?${z.toString()}`.replace(/\?$/,"");window.history.replaceState({},"",Re)}})()},[n]),Z.useEffect(()=>{localStorage.setItem("lumina_message_mode",i)},[i]),Z.useEffect(()=>{b&&localStorage.setItem("lumina_private_target_uid",b.uid)},[b]),Z.useEffect(()=>{if(b||!Q.current)return;const z=t.find(ae=>ae.uid===Q.current);z&&W(z)},[t,b]),Z.useEffect(()=>{const z=window.setTimeout(()=>{if(i==="group")Js(Xe(Ae,"groupTyping",n),{name:(e==null?void 0:e.prenom)||"Choriste",isTyping:!!j.trim(),updatedAt:Zt()},{merge:!0}).catch(()=>{});else if(b){const ae=ai(n,b.uid);Js(Xe(Ae,"conversations",ae,"typing",n),{isTyping:!!(oe[b.uid]||"").trim(),updatedAt:Zt()},{merge:!0}).catch(()=>{})}},400);return()=>window.clearTimeout(z)},[i,j,oe,b,n,e==null?void 0:e.prenom]),Z.useEffect(()=>{if(i!=="group")return;const z=l.filter(ce=>ce.authorUid!==n&&!(ce.readBy||[]).includes(n));if(!z.length)return;const ae=yc(Ae);z.forEach(ce=>ae.update(Xe(Ae,"groupChat",ce.id),"readBy",Hs(n))),ae.commit().catch(()=>{})},[l,i,n]),Z.useEffect(()=>{if(i!=="private"||!b||f.length===0)return;const z=ai(n,b.uid),ae=f.filter(be=>be.authorUid!==n&&!(be.readBy||[]).includes(n)),ce=f.filter(be=>be.authorUid!==n&&!(be.deliveredBy||[]).includes(n));if(!ae.length&&!ce.length)return;const Me=yc(Ae);new Set([...ae,...ce].map(be=>be.id)).forEach(be=>{const Re=Xe(Ae,"conversations",z,"messages",be);Me.update(Re,"deliveredBy",Hs(n),"readBy",Hs(n))}),Me.update(Xe(Ae,"conversations",z),`unreadCounts.${n}`,0),Me.commit().catch(()=>{})},[f,i,b,n]);function Jn(z){i==="group"?ne(z):b&&ie(ae=>({...ae,[b.uid]:z}))}async function Br(z,ae){const ce=im(hm,ae);return await nm(ce,z),rm(ce)}async function _r({type:z="text",text:ae="",mediaUrl:ce="",durationMs:Me=0}){var lt;const be=ae.trim();if(z==="text"&&!be)return;const Re=pe;ge("send");try{if(i==="group")await io(yt(Ae,"groupChat"),{authorUid:n,authorName:`${(e==null?void 0:e.prenom)||""} ${(e==null?void 0:e.nom)||""}`.trim()||"Choriste",texte:be,type:z,mediaUrl:ce,durationMs:Me,timestamp:Zt(),editedAt:null,deleted:!1,readBy:[n],hiddenFor:[],reactions:{},replyToId:(Re==null?void 0:Re.id)||"",replyToText:(Re==null?void 0:Re.text)||"",replyToAuthor:(Re==null?void 0:Re.author)||""}),z==="text"&&ne("");else if(b){const Sn=ai(n,b.uid),An=Xe(Ae,"conversations",Sn);await Js(An,{participants:[n,b.uid].sort(),lastMessage:Zf(z,be),lastTimestamp:Zt()},{merge:!0}),await Ut(An,{[`unreadCounts.${b.uid}`]:uP(1),[`unreadCounts.${n}`]:0}),await io(yt(Ae,"conversations",Sn,"messages"),{authorUid:n,texte:be,type:z,mediaUrl:ce,durationMs:Me,timestamp:Zt(),editedAt:null,deleted:!1,readBy:[n],deliveredBy:(lt=A[b.uid])!=null&&lt.online?[n,b.uid]:[n],hiddenFor:[],reactions:{},replyToId:(Re==null?void 0:Re.id)||"",replyToText:(Re==null?void 0:Re.text)||"",replyToAuthor:(Re==null?void 0:Re.author)||""}),z==="text"&&ie(ws=>({...ws,[b.uid]:""}))}N(null),Te(!1)}catch(Sn){console.error(Sn),J("Envoi impossible. Vérifie les autorisations Firebase.")}finally{ge("")}}async function gs(z){ge("upload-image");try{const ae=await Br(z,`chat_images/${n}/${Date.now()}_${z.name.replace(/[^a-zA-Z0-9._-]/g,"_")}`);await _r({type:"image",mediaUrl:ae})}catch(ae){console.error(ae),J("Impossible d'envoyer l'image. Vérifie les règles Storage."),ge("")}}async function ys(){var z;if(!((z=navigator.mediaDevices)!=null&&z.getUserMedia)||typeof MediaRecorder>"u"){J("L'enregistrement audio n'est pas pris en charge par ce navigateur.");return}try{const ae=await navigator.mediaDevices.getUserMedia({audio:!0}),ce=new MediaRecorder(ae);qe.current=ae,Be.current=ce,Ye.current=[],ce.ondataavailable=Me=>{Me.data.size&&Ye.current.push(Me.data)},ce.onstop=()=>{var lt;const Me=Date.now()-q,be=new Blob(Ye.current,{type:ce.mimeType||"audio/webm"}),Re=URL.createObjectURL(be);(lt=qe.current)==null||lt.getTracks().forEach(Sn=>Sn.stop()),Be.current=null,qe.current=null,O(!1),Oe({blob:be,url:Re,durationMs:Me})},fe(Date.now()),ce.start(),O(!0)}catch(ae){console.error(ae),J("Microphone non disponible ou autorisation refusée.")}}function $r(){var z;((z=Be.current)==null?void 0:z.state)==="recording"&&Be.current.stop()}async function Mn(){if(_e){ge("voice");try{const z=await Br(_e.blob,`voice_notes/${n}/${Date.now()}.webm`);await _r({type:"voice",mediaUrl:z,durationMs:_e.durationMs}),URL.revokeObjectURL(_e.url),Oe(null)}catch(z){console.error(z),J("Impossible d'envoyer la note vocale. Vérifie les règles Storage."),ge("")}}}function nn(z){if(i==="group")return Xe(Ae,"groupChat",z);if(!b)throw new Error("Aucune conversation sélectionnée");return Xe(Ae,"conversations",ai(n,b.uid),"messages",z)}async function _i(z,ae){var be;const ce=In.find(Re=>Re.id===z),Me=(be=ce==null?void 0:ce.reactions)==null?void 0:be[n];try{await Ut(nn(z),{[`reactions.${n}`]:Me===ae?lP():ae}),k(null)}catch(Re){console.error(Re),J("Impossible d'ajouter la réaction.")}}async function zr(z){const ae=window.prompt("Modifier le message",z.texte||"");if(!(ae===null||!ae.trim()))try{await Ut(nn(z.id),{texte:ae.trim(),editedAt:Zt()}),k(null)}catch(ce){console.error(ce),J("Modification impossible.")}}async function qr(z){if(window.confirm("Supprimer ce message pour tout le monde ?"))try{await Ut(nn(z.id),{texte:"",mediaUrl:"",deleted:!0,editedAt:Zt()}),k(null)}catch(ae){console.error(ae),J("Suppression impossible.")}}async function Hr(z){if(z.length)try{const ae=yc(Ae);z.forEach(ce=>ae.update(nn(ce),"hiddenFor",Hs(n))),await ae.commit(),V(new Set),k(null)}catch(ae){console.error(ae),J("Suppression pour moi impossible.")}}async function pt(z){try{await Ut(nn(z.id),{pinned:!z.pinned,pinnedAt:z.pinned?null:Zt(),pinnedBy:z.pinned?"":n})}catch(ae){console.error(ae),J("Impossible de modifier l’épinglage. Vérifie les règles Firestore.")}}function mt(z){const ae=z.authorUid===n?"Vous":i==="group"?z.authorName||"Choriste":(b==null?void 0:b.prenom)||"Choriste";N({id:z.id,author:ae,text:Zf(z.type,z.texte)}),k(null)}function jn(z){V(ae=>{const ce=new Set(ae);return ce.has(z)?ce.delete(z):ce.add(z),ce}),k(null)}function vs(z){W(z),N(null),V(new Set),k(null)}const Un=l.filter(z=>z.authorUid!==n&&!(z.readBy||[]).includes(n)&&!(z.hiddenFor||[]).includes(n)).length,wr=v.reduce((z,ae)=>{var ce;return z+(((ce=ae.unreadCounts)==null?void 0:ce[n])||0)},0);function Wr(z){var ce,Me;const ae=ai(n,z);return((Me=(ce=v.find(be=>be.id===ae))==null?void 0:ce.unreadCounts)==null?void 0:Me[n])||0}function _s(z){const ae=ai(n,z);return v.find(ce=>ce.id===ae)}return y.jsxs(y.Fragment,{children:[y.jsx(Ta,{title:"Messages"}),y.jsxs("section",{className:"messages-screen messages-v2-screen",children:[y.jsxs("div",{className:"message-tabs message-tabs-v2",children:[y.jsxs("button",{className:i==="group"?"active":"",onClick:()=>{o("group"),N(null),V(new Set)},children:["Groupe ",Un>0&&y.jsx("b",{children:Un>99?"99+":Un})]}),y.jsxs("button",{className:i==="private"?"active":"",onClick:()=>{o("private"),N(null),V(new Set)},children:["Privé ",wr>0&&y.jsx("b",{children:wr})]})]}),L&&y.jsx("p",{className:"notice message-notice",children:L}),i==="private"?y.jsxs("div",{className:"private-messaging-layout",children:[y.jsxs("aside",{className:`conversation-sidebar ${b?"target-open":""}`,children:[y.jsxs("div",{className:"conversation-sidebar-head",children:[y.jsx("span",{className:"section-kicker",children:"CHORISTES"}),y.jsx("h2",{children:"Messages privés"})]}),y.jsx("div",{className:"conversation-search-list",children:St.map(z=>{var Me,be,Re;const ae=Wr(z.uid),ce=_s(z.uid);return y.jsxs("button",{className:`conversation-person ${(b==null?void 0:b.uid)===z.uid?"selected":""} ${ae>0?"has-unread":""}`,onClick:()=>vs(z),children:[y.jsx("div",{className:"message-avatar",children:z.photoUrl?y.jsx("img",{src:z.photoUrl,alt:`${z.prenom} ${z.nom}`}):`${((Me=z.prenom)==null?void 0:Me[0])||""}${((be=z.nom)==null?void 0:be[0])||""}`}),y.jsxs("div",{children:[y.jsxs("strong",{children:[z.prenom," ",z.nom]}),y.jsx("small",{children:(ce==null?void 0:ce.lastMessage)||"Aucun message pour le moment"})]}),y.jsx("span",{className:`online-dot ${(Re=A[z.uid])!=null&&Re.online?"online":""}`}),ae>0&&y.jsx("b",{className:"unread-count",children:ae>99?"99+":ae})]},z.id)})})]}),y.jsx("div",{className:`private-chat-panel ${b?"open":""}`,children:b?y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"private-chat-head",children:[y.jsx("button",{className:"mobile-back-chat",onClick:()=>W(null),children:"‹"}),y.jsx("div",{className:"message-avatar",children:b.photoUrl?y.jsx("img",{src:b.photoUrl,alt:""}):`${((wi=b.prenom)==null?void 0:wi[0])||""}${((Ei=b.nom)==null?void 0:Ei[0])||""}`}),y.jsxs("div",{children:[y.jsxs("strong",{children:[b.prenom," ",b.nom]}),y.jsx("small",{children:de?"écrit…":cb(A[b.uid])})]})]}),y.jsx(A_,{messages:Fr,uid:n,mode:"private",otherUid:b.uid,menuId:S,selectedIds:x,setMenuId:k,onReply:mt,onReact:_i,onEdit:zr,onDeleteEveryone:qr,onDeleteMe:z=>Hr([z.id]),onSelect:z=>jn(z.id),onPin:pt,members:t}),de&&y.jsxs("div",{className:"typing-indicator",children:[b.prenom," écrit…"]}),y.jsx(C_,{text:dn,onTextChange:Jn,onSend:()=>void _r({text:dn}),onSticker:()=>Te(z=>!z),onImage:()=>{var z;return(z=Ue.current)==null?void 0:z.click()},recording:X,pendingVoice:_e,onStartRecording:()=>void ys(),onStopRecording:$r,onSendVoice:()=>void Mn(),onDeleteVoice:()=>{_e&&URL.revokeObjectURL(_e.url),Oe(null)},replyingTo:pe,onCancelReply:()=>N(null),busy:!!he})]}):y.jsxs("div",{className:"private-empty-state",children:[y.jsx("div",{className:"private-empty-icon",children:"✉"}),y.jsx("h2",{children:"Choisis un choriste"}),y.jsx("p",{children:"Sélectionne un membre du chœur pour commencer ou reprendre une conversation privée."})]})})]}):y.jsxs("div",{className:"group-chat-shell",children:[y.jsxs("div",{className:"group-chat-head",children:[y.jsx("div",{className:"group-avatar",children:"♫"}),y.jsxs("div",{children:[y.jsx("strong",{children:"Groupe Chœur Lumina"}),y.jsx("small",{children:C.length?`${C.join(", ")} ${C.length>1?"écrivent":"écrit"}…`:`${t.filter(z=>!!z.uid).length} membre(s)`})]})]}),y.jsx(A_,{messages:Fr,uid:n,mode:"group",menuId:S,selectedIds:x,setMenuId:k,onReply:mt,onReact:_i,onEdit:zr,onDeleteEveryone:qr,onDeleteMe:z=>Hr([z.id]),onSelect:z=>jn(z.id),onPin:pt,members:t}),C.length>0&&y.jsxs("div",{className:"typing-indicator",children:[C.join(", ")," ",C.length>1?"écrivent":"écrit","…"]}),y.jsx(C_,{text:dn,onTextChange:Jn,onSend:()=>void _r({text:dn}),onSticker:()=>Te(z=>!z),onImage:()=>{var z;return(z=Ue.current)==null?void 0:z.click()},recording:X,pendingVoice:_e,onStartRecording:()=>void ys(),onStopRecording:$r,onSendVoice:()=>void Mn(),onDeleteVoice:()=>{_e&&URL.revokeObjectURL(_e.url),Oe(null)},replyingTo:pe,onCancelReply:()=>N(null),busy:!!he})]}),x.size>0&&y.jsxs("div",{className:"selection-action-bar",children:[y.jsxs("strong",{children:[x.size," sélectionné(s)"]}),y.jsx("button",{onClick:()=>void Hr([...x]),children:"Supprimer pour moi"}),y.jsx("button",{onClick:()=>V(new Set),children:"Annuler"})]}),G&&y.jsx("div",{className:"sticker-tray sticker-tray-v2","aria-label":"Sélecteur d’émoticônes",children:sb.map((z,ae)=>y.jsx("button",{onClick:()=>{Jn(`${dn}${z}`),Te(!1)},children:z},`${z}-${ae}`))}),y.jsx("input",{ref:Ue,type:"file",accept:"image/*",hidden:!0,onChange:z=>{var ce;const ae=(ce=z.target.files)==null?void 0:ce[0];ae&&gs(ae),z.currentTarget.value=""}})]})]})}function A_({messages:n,uid:e,mode:t,otherUid:i,menuId:o,selectedIds:l,setMenuId:d,onReply:f,onReact:p,onEdit:v,onDeleteEveryone:E,onDeleteMe:A,onSelect:R,onPin:b,members:W}){const Q=Z.useRef(null),j=Z.useRef(0),ne=Z.useRef(new Set),oe=Z.useRef(!0),[ie,G]=Z.useState(!1),[Te,pe]=Z.useState(0),N=Z.useMemo(()=>{const C=new Map;return W.forEach(I=>{const de=`${I.prenom||""} ${I.nom||""}`.trim();I.uid&&de&&C.set(I.uid,de)}),C},[W]),S=Z.useMemo(()=>[...n].filter(C=>C.pinned&&!C.deleted).sort((C,I)=>{var de,$;return(((de=I.pinnedAt)==null?void 0:de.toDate().getTime())||0)-((($=C.pinnedAt)==null?void 0:$.toDate().getTime())||0)})[0]||null,[n]);function k(C="auto"){const I=Q.current;I&&(I.scrollTo({top:I.scrollHeight,behavior:C}),oe.current=!0,G(!1),pe(0))}Z.useEffect(()=>{j.current=0,ne.current=new Set,oe.current=!0,pe(0),G(!1)},[t,i]),Z.useLayoutEffect(()=>{if(!n.length){j.current=0;return}const C=j.current,I=ne.current,de=n.filter($=>!I.has($.id)&&$.authorUid!==e).length;requestAnimationFrame(()=>{C===0||oe.current?k("auto"):de>0&&(pe($=>$+de),G(!0))}),j.current=n.length,ne.current=new Set(n.map($=>$.id))},[n.length,t,i]);function x(){const C=Q.current;if(!C)return;const de=C.scrollHeight-C.scrollTop-C.clientHeight<90;oe.current=de,G(!de),de&&pe(0)}function V(C){const I=Q.current,de=I==null?void 0:I.querySelector(`[data-message-id="${C}"]`);de==null||de.scrollIntoView({behavior:"smooth",block:"center"})}return y.jsxs("div",{className:"message-pane-shell",children:[S&&y.jsxs("button",{className:"pinned-message-banner",onClick:()=>V(S.id),children:[y.jsx("span",{children:"📌"}),y.jsxs("div",{children:[y.jsx("strong",{children:"Message épinglé"}),y.jsx("small",{children:Zf(S.type,S.texte)})]})]}),y.jsxs("div",{className:"messages-list messages-list-v2",ref:Q,onScroll:x,children:[n.length===0&&y.jsx("div",{className:"chat-empty",children:"Aucun message pour le moment."}),n.map(C=>{const I=C.authorUid===e,de=C,$=C,he=Object.values(C.reactions||{}).reduce((q,fe)=>(q[fe]=(q[fe]||0)+1,q),{}),ge=l.has(C.id),L=t==="private"&&I&&i?($.readBy||[]).includes(i)?"Lu":($.deliveredBy||[]).includes(i)?"✓✓":"✓":"",J=N.get(C.authorUid)||de.authorName||"Choriste",X=ab(C.authorUid||J),O=C.type!=="voice"&&C.type!=="image"&&lb(C.texte);return y.jsx("div",{className:`message-line ${I?"mine":""} ${ge?"message-selected":""}`,"data-message-id":C.id,children:y.jsxs("div",{className:`bubble bubble-v2 ${C.type==="system_cancelled"||C.type==="event_cancelled"?"alert-bubble":""}`,children:[t==="group"&&!I&&y.jsx("strong",{className:"message-author",style:{color:X},children:J}),C.pinned&&y.jsx("span",{className:"message-pin-indicator",title:"Message épinglé",children:"📌"}),C.replyToText&&y.jsxs("div",{className:"reply-quote",children:[y.jsx("strong",{children:C.replyToAuthor||"Message"}),y.jsx("span",{children:C.replyToText})]}),C.deleted?y.jsx("p",{className:"deleted-message",children:"Message supprimé"}):C.type==="sticker"?y.jsx("span",{className:"sticker-message",children:C.texte}):C.type==="image"?y.jsx("a",{href:C.mediaUrl,target:"_blank",rel:"noreferrer",children:y.jsx("img",{className:"chat-image",src:C.mediaUrl,alt:"Image envoyée"})}):C.type==="voice"?y.jsx("audio",{className:"voice-note-player",controls:!0,preload:"metadata",src:C.mediaUrl}):y.jsx("p",{className:O?"emoji-only-message":"",children:C.texte}),Object.keys(he).length>0&&y.jsx("div",{className:"reaction-summary",children:Object.entries(he).map(([q,fe])=>y.jsxs("span",{children:[q,fe>1?` ${fe}`:""]},q))}),y.jsxs("div",{className:"message-meta",children:[y.jsxs("small",{children:[ub(C),C.editedAt&&!C.deleted?" · modifié":""]}),L&&y.jsx("small",{className:L==="Lu"?"read-receipt":"",children:L}),t==="group"&&I&&y.jsxs("small",{children:[Math.max(0,(C.readBy||[]).length-1)," lu"]})]}),y.jsx("button",{className:"message-menu-button",onClick:()=>d(o===C.id?null:C.id),children:"⋯"}),o===C.id&&y.jsxs("div",{className:`message-context-menu ${I?"mine-menu":""}`,children:[y.jsx("div",{className:"reaction-picker",children:ob.map(q=>y.jsx("button",{onClick:()=>void p(C.id,q),children:q},q))}),!C.deleted&&y.jsx("button",{onClick:()=>f(C),children:"Répondre"}),!C.deleted&&y.jsx("button",{onClick:()=>void b(C),children:C.pinned?"Désépingler":"Épingler"}),I&&C.type==="text"&&!C.deleted&&y.jsx("button",{onClick:()=>void v(C),children:"Modifier"}),I&&!C.deleted&&y.jsx("button",{className:"danger-text",onClick:()=>void E(C),children:"Supprimer pour tous"}),y.jsx("button",{onClick:()=>void A(C),children:"Supprimer pour moi"}),y.jsx("button",{onClick:()=>R(C),children:"Sélectionner"})]})]})},C.id)})]}),ie&&y.jsxs("button",{className:"jump-to-latest",onClick:()=>k("smooth"),"aria-label":"Revenir aux derniers messages",children:["↓",Te>0&&y.jsx("b",{children:Te>99?"99+":Te})]})]})}function C_({text:n,onTextChange:e,onSend:t,onSticker:i,onImage:o,recording:l,pendingVoice:d,onStartRecording:f,onStopRecording:p,onSendVoice:v,onDeleteVoice:E,replyingTo:A,onCancelReply:R,busy:b}){return y.jsxs("div",{className:"composer-shell",children:[A&&y.jsxs("div",{className:"composer-reply",children:[y.jsxs("div",{children:[y.jsx("strong",{children:A.author}),y.jsx("span",{children:A.text})]}),y.jsx("button",{onClick:R,children:"×"})]}),d&&y.jsxs("div",{className:"voice-preview",children:[y.jsx("audio",{controls:!0,src:d.url}),y.jsx("button",{onClick:E,children:"Supprimer"}),y.jsx("button",{className:"send-voice",disabled:b,onClick:v,children:"Envoyer"})]}),l&&y.jsxs("div",{className:"recording-banner",children:[y.jsx("span",{className:"recording-dot"})," Enregistrement en cours…"," ",y.jsx("button",{onClick:p,children:"■ Arrêter"})]}),y.jsxs("div",{className:"composer composer-v2",children:[y.jsx("button",{title:"Émoticônes",onClick:i,children:"☺"}),y.jsx("button",{title:"Image",onClick:o,disabled:l,children:"▧"}),y.jsx("textarea",{value:n,onChange:W=>e(W.target.value),placeholder:"Écrire un message…",rows:1,autoFocus:new URLSearchParams(window.location.search).get("focusComposer")==="1",autoCapitalize:"sentences",onKeyDown:W=>{W.key==="Enter"&&!W.shiftKey&&(W.preventDefault(),n.trim()&&t())}}),n.trim()?y.jsx("button",{className:"send-button",disabled:b,onClick:t,children:"➤"}):l?y.jsx("button",{className:"record-button active",onClick:p,children:"■"}):y.jsx("button",{className:"record-button",disabled:b||!!d,onClick:f,children:"●"})]})]})}function hb({members:n}){const e=n.reduce((t,i)=>{const o=i.pupitre||"Autres";return t[o]||(t[o]=[]),t[o].push(i),t},{});return y.jsxs(y.Fragment,{children:[y.jsx(Ta,{title:"Trombinoscope"}),y.jsx("section",{className:"screen",children:Object.entries(e).map(([t,i])=>y.jsxs("div",{className:"voice-section",children:[y.jsx("h2",{children:t}),y.jsx("div",{className:"member-grid",children:i.map(o=>{var l,d;return y.jsxs("article",{className:"member-card",children:[o.photoUrl?y.jsx("img",{src:o.photoUrl,alt:`${o.prenom} ${o.nom}`}):y.jsxs("div",{className:"avatar",children:[(l=o.prenom)==null?void 0:l[0],(d=o.nom)==null?void 0:d[0]]}),y.jsx("strong",{children:o.prenom}),y.jsx("small",{children:o.nom})]},o.id)})})]},t))})]})}async function fb(){var l;if(!("Notification"in window)||await Notification.requestPermission()!=="granted")return null;const e=await Gx();if(!e)return null;const t=await navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope/"}),i=await Kx(e,{vapidKey:Qx,serviceWorkerRegistration:t}),o=(l=ui.currentUser)==null?void 0:l.uid;if(o&&i){const f=(await Gc(xr(yt(Ae,"members"),Qs("uid","==",o)))).docs[0];f&&await Js(Xe(Ae,"members",f.id,"notificationTokens",i.slice(-24)),{token:i,platform:"web",updatedAt:Zt()},{merge:!0})}return i}async function R_(){if("serviceWorker"in navigator)try{const n=await navigator.serviceWorker.getRegistrations();(await Promise.all(n.map(t=>t.getNotifications()))).flat().forEach(t=>t.close())}catch{}}function pb({member:n,onRefresh:e,onOpenAdmin:t}){var Q;const[i,o]=Z.useState(String((n==null?void 0:n.birthdayDay)||"")),[l,d]=Z.useState(String((n==null?void 0:n.birthdayMonth)||"")),[f,p]=Z.useState(""),[v,E]=Z.useState(!1),A=Z.useRef(null);async function R(){if(!n)return;const j=Number(i),ne=Number(l);if(j<1||j>31||ne<1||ne>12){p("Jour ou mois invalide.");return}await Ut(Xe(Ae,"members",n.id),{birthdayDay:j,birthdayMonth:ne}),p("Date d'anniversaire enregistrée."),await e()}async function b(j){if(n!=null&&n.uid){E(!0);try{const ne=im(hm,`profile_photos/${n.uid}`);await nm(ne,j);const oe=await rm(ne);await Ut(Xe(Ae,"members",n.id),{photoUrl:oe}),p("Photo de profil mise à jour."),await e()}catch(ne){console.error(ne),p("Impossible d'envoyer la photo. Vérifie les règles Storage.")}finally{E(!1)}}}async function W(){const j=await fb();p(j?"Notifications activées sur cet appareil.":"Notifications non activées.")}return y.jsxs(y.Fragment,{children:[y.jsx(Ta,{title:"Profil"}),y.jsxs("section",{className:"screen",children:[y.jsxs("article",{className:"profile-card",children:[y.jsxs("button",{className:"big-avatar profile-photo-button",type:"button",onClick:()=>{var j;return(j=A.current)==null?void 0:j.click()},"aria-label":"Modifier la photo de profil",children:[n!=null&&n.photoUrl?y.jsx("img",{src:n.photoUrl,alt:""}):(Q=n==null?void 0:n.prenom)==null?void 0:Q[0],y.jsx("span",{children:v?"…":"✎"})]}),y.jsx("input",{ref:A,type:"file",accept:"image/*",hidden:!0,onChange:j=>{var oe;const ne=(oe=j.target.files)==null?void 0:oe[0];ne&&b(ne),j.currentTarget.value=""}}),y.jsxs("h2",{children:[n==null?void 0:n.prenom," ",n==null?void 0:n.nom]}),y.jsx("span",{children:n==null?void 0:n.pupitre})]}),y.jsxs("article",{className:"card",children:[y.jsx("h2",{children:"Informations"}),y.jsxs("p",{children:[y.jsx("strong",{children:"Email"}),y.jsx("br",{}),n==null?void 0:n.email]}),y.jsxs("p",{children:[y.jsx("strong",{children:"Pupitre"}),y.jsx("br",{}),(n==null?void 0:n.pupitre)||"Non renseigné"]})]}),(n==null?void 0:n.role)==="admin"&&y.jsxs("article",{className:"card profile-admin-card",children:[y.jsx("div",{className:"profile-admin-icon","aria-hidden":"true",children:y.jsxs("svg",{viewBox:"0 0 24 24",children:[y.jsx("path",{d:"M12 3l7 3v5c0 4.6-2.9 8.6-7 10-4.1-1.4-7-5.4-7-10V6l7-3Z"}),y.jsx("path",{d:"M9.5 12.2l1.7 1.7 3.7-4"})]})}),y.jsxs("div",{className:"profile-admin-copy",children:[y.jsx("span",{className:"profile-admin-kicker",children:"ADMINISTRATEUR"}),y.jsx("h2",{children:"Administration"}),y.jsx("p",{children:"Gérer les membres, les invitations, les événements, les présences et les chants."})]}),y.jsxs("button",{type:"button",className:"profile-admin-button",onClick:t,children:["Accéder à l'administration",y.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:y.jsx("path",{d:"m9 18 6-6-6-6"})})]})]}),y.jsxs("article",{className:"card",children:[y.jsx("h2",{children:"Mon anniversaire"}),y.jsxs("div",{className:"birthday-fields",children:[y.jsxs("label",{children:["Jour",y.jsx("input",{inputMode:"numeric",value:i,onChange:j=>o(j.target.value)})]}),y.jsxs("label",{children:["Mois",y.jsx("input",{inputMode:"numeric",value:l,onChange:j=>d(j.target.value)})]})]}),y.jsx("button",{className:"secondary-button",onClick:R,children:"Enregistrer"})]}),y.jsxs("article",{className:"card",children:[y.jsx("h2",{children:"Notifications"}),y.jsx("p",{children:"Sur iPhone, ajoute d'abord l'application à l'écran d'accueil, puis active les notifications ici."}),y.jsx("button",{className:"secondary-button",onClick:W,children:"Activer les notifications"})]}),f&&y.jsx("p",{className:"notice",children:f}),y.jsx("button",{className:"logout-button",onClick:()=>Pf(ui),children:"Se déconnecter"})]})]})}const k_=[["membre","Membre"],["contributeur","Contributeur"],["admin","Admin"]];function P_(){const n="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="LUM-";for(let t=0;t<6;t+=1)e+=n[Math.floor(Math.random()*n.length)];return e}function mb({members:n,events:e,onBack:t}){const[i,o]=Z.useState(!1),[l,d]=Z.useState(null),[f,p]=Z.useState(null),[v,E]=Z.useState(null),[A,R]=Z.useState(""),b=Z.useMemo(()=>[...n].sort((G,Te)=>`${G.nom} ${G.prenom}`.localeCompare(`${Te.nom} ${Te.prenom}`,"fr")),[n]);function W(){d({prenom:"",nom:"",pupitre:"",role:"membre"})}function Q(G){d({id:G.id,prenom:G.prenom,nom:G.nom,pupitre:G.pupitre||"",role:G.role||"membre",uid:G.uid,claimed:G.claimed})}async function j(){if(!(!l||!l.prenom.trim()||!l.nom.trim())){if(R(""),!l.id){const G=P_();await io(yt(Ae,"members"),{prenom:l.prenom.trim(),nom:l.nom.trim(),pupitre:l.pupitre.trim(),role:l.role,inviteCode:G,claimed:!1,uid:"",email:"",createdAt:Zt()}),d(null),E({title:"Choriste ajouté !",code:G});return}await Ut(Xe(Ae,"members",l.id),{prenom:l.prenom.trim(),nom:l.nom.trim(),pupitre:l.pupitre.trim(),role:l.role}),l.uid&&await Js(Xe(Ae,"userRoles",l.uid),{role:l.role}),d(null),R("Choriste modifié.")}}async function ne(G){const Te=P_();await Ut(Xe(Ae,"members",G),{inviteCode:Te,claimed:!1}),E({title:"Nouveau code généré",code:Te})}async function oe(){f&&(await Dl(Xe(Ae,"members",f.id)),f.uid&&await Dl(Xe(Ae,"userRoles",f.uid)),p(null),R("Choriste supprimé."))}async function ie(G){await navigator.clipboard.writeText(G),R("Code copié.")}return y.jsxs(y.Fragment,{children:[y.jsx(Ta,{title:"Administration"}),y.jsxs("section",{className:"screen android-admin-screen",children:[y.jsxs("button",{type:"button",className:"android-admin-back",onClick:t,children:[y.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:y.jsx("path",{d:"m15 18-6-6 6-6"})}),"Retour"]}),y.jsx("button",{type:"button",className:"presence-overview-button",onClick:()=>o(!0),children:"Voir les réponses aux présences"}),y.jsxs("p",{className:"member-count",children:[b.length," choriste(s) enregistré(s)"]}),A&&y.jsx("p",{className:"admin-notice",children:A}),y.jsx("div",{className:"android-member-list",children:b.length===0?y.jsx("p",{className:"admin-empty",children:"Aucun choriste pour l'instant."}):b.map(G=>{var pe;const Te=((pe=k_.find(([N])=>N===G.role))==null?void 0:pe[1])||G.role||"Membre";return y.jsxs("article",{className:"android-member-card",children:[y.jsxs("div",{className:"member-card-top",children:[y.jsxs("div",{children:[y.jsxs("h3",{children:[G.prenom," ",G.nom]}),y.jsxs("p",{children:[G.pupitre||"-"," · ",Te]})]}),y.jsxs("div",{className:"member-card-actions",children:[y.jsx("button",{type:"button","aria-label":"Modifier",onClick:()=>Q(G),children:y.jsxs("svg",{viewBox:"0 0 24 24",children:[y.jsx("path",{d:"M4 20h4l11-11-4-4L4 16v4Z"}),y.jsx("path",{d:"m13.5 6.5 4 4"})]})}),y.jsx("button",{type:"button","aria-label":"Supprimer",onClick:()=>p(G),children:y.jsxs("svg",{viewBox:"0 0 24 24",children:[y.jsx("path",{d:"M4 7h16"}),y.jsx("path",{d:"M9 7V4h6v3"}),y.jsx("path",{d:"M7 7l1 13h8l1-13"})]})})]})]}),G.claimed?y.jsx("span",{className:"member-account-active",children:"✓ Compte actif"}):y.jsxs("div",{className:"pending-code-row",children:[y.jsxs("span",{children:["En attente · Code : ",G.inviteCode||"—"]}),G.inviteCode&&y.jsx("button",{type:"button","aria-label":"Copier le code",onClick:()=>ie(G.inviteCode||""),children:y.jsxs("svg",{viewBox:"0 0 24 24",children:[y.jsx("rect",{x:"9",y:"9",width:"10",height:"10",rx:"2"}),y.jsx("path",{d:"M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3"})]})})]})]},G.id)})}),y.jsx("button",{type:"button",className:"admin-fab","aria-label":"Ajouter un choriste",onClick:W,children:"+"})]}),i&&y.jsx("div",{className:"modal-backdrop",onClick:()=>o(!1),children:y.jsxs("div",{className:"admin-modal presence-modal",onClick:G=>G.stopPropagation(),children:[y.jsx("h2",{children:"Réponses aux présences"}),y.jsx("div",{className:"presence-events-list",children:e.map(G=>{var Te;return y.jsxs("article",{className:"presence-event-card",children:[y.jsx("h3",{children:G.titre}),y.jsx("p",{children:(Te=G.date)!=null&&Te.toDate?G.date.toDate().toLocaleDateString("fr-FR"):"Date à préciser"}),y.jsx("div",{className:"presence-member-lines",children:b.filter(pe=>!!pe.uid).map(pe=>{var k;const N=(k=G.reponses)==null?void 0:k[pe.uid],S=N==="present"?"Présent":N==="absent"?"Absent":N==="peut-etre"?"Peut-être":"Pas de réponse";return y.jsxs("div",{children:[y.jsxs("span",{children:[pe.prenom," ",pe.nom]}),y.jsx("strong",{className:`presence-label ${N||"none"}`,children:S})]},pe.id)})})]},G.id)})}),y.jsx("button",{type:"button",className:"modal-close-button",onClick:()=>o(!1),children:"Fermer"})]})}),l&&y.jsx("div",{className:"modal-backdrop",onClick:()=>d(null),children:y.jsxs("div",{className:"admin-modal",onClick:G=>G.stopPropagation(),children:[y.jsx("h2",{children:l.id?"Modifier le choriste":"Nouveau choriste"}),y.jsxs("div",{className:"admin-dialog-form",children:[y.jsxs("label",{children:["Prénom",y.jsx("input",{value:l.prenom,onChange:G=>d({...l,prenom:G.target.value})})]}),y.jsxs("label",{children:["Nom",y.jsx("input",{value:l.nom,onChange:G=>d({...l,nom:G.target.value})})]}),y.jsxs("label",{children:["Pupitre (ex : Ténor)",y.jsx("input",{value:l.pupitre,onChange:G=>d({...l,pupitre:G.target.value})})]}),y.jsxs("label",{children:["Rôle",y.jsx("select",{value:l.role,onChange:G=>d({...l,role:G.target.value}),children:k_.map(([G,Te])=>y.jsx("option",{value:G,children:Te},G))})]}),l.id?l.claimed?null:y.jsx("button",{type:"button",className:"regenerate-code-button",onClick:()=>ne(l.id),children:"Régénérer le code d'invitation"}):y.jsx("p",{className:"dialog-helper",children:"Un code d'invitation sera généré automatiquement."})]}),y.jsxs("div",{className:"modal-actions",children:[y.jsx("button",{type:"button",onClick:()=>d(null),children:"Annuler"}),y.jsx("button",{type:"button",className:"primary",disabled:!l.prenom.trim()||!l.nom.trim(),onClick:j,children:l.id?"Enregistrer":"Créer"})]})]})}),f&&y.jsx("div",{className:"modal-backdrop",onClick:()=>p(null),children:y.jsxs("div",{className:"admin-modal",onClick:G=>G.stopPropagation(),children:[y.jsx("h2",{children:"Supprimer ce choriste ?"}),y.jsxs("p",{children:["La fiche de « ",f.prenom," ",f.nom," » sera supprimée. Si son compte était déjà actif, cela ne supprime pas son compte de connexion, seulement ses informations dans l'application."]}),y.jsxs("div",{className:"modal-actions",children:[y.jsx("button",{type:"button",onClick:()=>p(null),children:"Annuler"}),y.jsx("button",{type:"button",className:"danger",onClick:oe,children:"Supprimer"})]})]})}),v&&y.jsx("div",{className:"modal-backdrop",onClick:()=>E(null),children:y.jsxs("div",{className:"admin-modal code-reveal-modal",onClick:G=>G.stopPropagation(),children:[y.jsx("h2",{children:v.title}),y.jsx("p",{children:"Transmets ce code au choriste pour qu'il crée son compte :"}),y.jsx("code",{children:v.code}),y.jsxs("div",{className:"modal-actions",children:[y.jsx("button",{type:"button",onClick:()=>E(null),children:"Fermer"}),y.jsx("button",{type:"button",className:"primary",onClick:()=>ie(v.code),children:"Copier"})]})]})})]})}const gb=[{id:"home",label:"Accueil",icon:"⌂"},{id:"songs",label:"Chants",icon:"♫"},{id:"agenda",label:"Agenda",icon:"▣"},{id:"messages",label:"Msgs",icon:"✉"},{id:"members",label:"Trombi",icon:"◉"},{id:"profile",label:"Profil",icon:"☺"}];function yb({active:n,onChange:e,messageUnread:t,agendaUnread:i}){return y.jsx("nav",{className:"bottom-nav",children:gb.map(o=>{const l=o.id==="messages"&&t||o.id==="agenda"&&i;return y.jsxs("button",{className:n===o.id?"active":"",onClick:()=>e(o.id),children:[y.jsxs("span",{className:"nav-icon",children:[o.icon,l&&y.jsx("i",{className:"badge-dot"})]}),y.jsx("small",{children:o.label})]},o.id)})})}function vb(){const n=new URLSearchParams(window.location.search).get("tab");return["home","songs","agenda","messages","members","profile","admin"].includes(n)?n:"home"}function pl(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Paris",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}function QT(n=new Date){const e=new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Paris",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(n),t=Object.fromEntries(e.filter(p=>p.type!=="literal").map(p=>[p.type,Number(p.value)])),i=new Date(Date.UTC(t.year,t.month-1,t.day,0,0,0)),o=new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Paris",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"}).formatToParts(i),l=Object.fromEntries(o.filter(p=>p.type!=="literal").map(p=>[p.type,Number(p.value)])),f=Date.UTC(l.year,l.month-1,l.day,l.hour,l.minute,l.second)-i.getTime();return new Date(i.getTime()-f)}function _b(n){const e=n.birthdayDay||0,t=n.birthdayMonth||0;if(!e||!t)return null;const i=new Date,o=QT(i);let l=Number(pl(i).slice(0,4)),d=new Date(l,t-1,e,9,0,0,0);return d.getTime()<o.getTime()&&(l+=1,d=new Date(l,t-1,e,9,0,0,0)),{id:`birthday_${n.id}_${l}`,titre:`Anniversaire de ${n.prenom}`,type:"anniversaire",date:{toDate:()=>d},description:`Souhaitons un joyeux anniversaire à ${n.prenom} !`,synthetic:!0}}function wb(){const[n,e]=Z.useState(null),[t,i]=Z.useState(null),[o,l]=Z.useState([]),[d,f]=Z.useState([]),[p,v]=Z.useState([]),[E,A]=Z.useState([]),[R,b]=Z.useState([]),[W,Q]=Z.useState([]),[j,ne]=Z.useState(vb),[oe,ie]=Z.useState(()=>pl());async function G(I){const $=(await Gc(xr(yt(Ae,"members"),Qs("uid","==",I)))).docs[0];i($?{id:$.id,...$.data()}:null)}Z.useEffect(()=>qA(ui,I=>{e(I),I?G(I.uid):(i(null),l([]),f([]),v([]),A([]),b([]),Q([]))}),[]),Z.useEffect(()=>{const I=()=>{document.visibilityState==="visible"&&R_()};return I(),document.addEventListener("visibilitychange",I),window.addEventListener("focus",I),()=>{document.removeEventListener("visibilitychange",I),window.removeEventListener("focus",I)}},[]),Z.useEffect(()=>{const I=window.setInterval(()=>{const de=pl();ie($=>$===de?$:de)},6e4);return()=>window.clearInterval(I)},[]),Z.useEffect(()=>{if(!n)return;const I=Xe(Ae,"userStatus",n.uid),de=ge=>Js(I,{online:ge,lastSeen:Zt()},{merge:!0}).catch(()=>{});de(!0);const $=()=>void de(document.visibilityState==="visible"),he=()=>void de(!1);return document.addEventListener("visibilitychange",$),window.addEventListener("pagehide",he),()=>{document.removeEventListener("visibilitychange",$),window.removeEventListener("pagehide",he),de(!1)}},[n]),Z.useEffect(()=>{if(!n)return;const I=Qn(yt(Ae,"members"),J=>{const X=J.docs.map(q=>({id:q.id,...q.data()}));l(X);const O=X.find(q=>q.uid===n.uid);O&&i(O)}),de=Qn(yt(Ae,"events"),J=>{f(J.docs.map(X=>({id:X.id,...X.data()})))}),$=Qn(xr(yt(Ae,"songs"),Kc("titre","asc")),J=>{v(J.docs.map(X=>({id:X.id,...X.data()})))}),he=Qn(yt(Ae,"folders"),J=>{A(J.docs.map(X=>({id:X.id,...X.data()})).sort((X,O)=>X.nom.localeCompare(O.nom,"fr")))}),ge=Qn(xr(yt(Ae,"groupChat"),Kc("timestamp","asc")),J=>{b(J.docs.map(X=>({id:X.id,...X.data()})))}),L=Qn(xr(yt(Ae,"conversations"),Qs("participants","array-contains",n.uid)),J=>Q(J.docs.map(X=>({id:X.id,...X.data()}))));return()=>{I(),de(),$(),he(),ge(),L()}},[n,oe]),Z.useEffect(()=>{const I=t==null?void 0:t.role;if(!n||I!=="admin"&&I!=="contributeur")return;const de=nt.fromDate(QT());Gc(xr(yt(Ae,"events"),Qs("date","<",de))).then($=>Promise.allSettled($.docs.map(he=>Dl(he.ref)))).catch(()=>{})},[oe,t==null?void 0:t.role,n]);const Te=Z.useMemo(()=>{const I=pl();return d.filter(de=>{var he,ge;const $=(ge=(he=de.date)==null?void 0:he.toDate)==null?void 0:ge.call(he);return $ instanceof Date&&pl($)>=I})},[d,oe]),pe=Z.useMemo(()=>{const I=o.map(_b).filter(de=>!!de);return[...Te,...I].sort((de,$)=>{var he,ge;return(((he=de.date)==null?void 0:he.toDate().getTime())||0)-(((ge=$.date)==null?void 0:ge.toDate().getTime())||0)})},[Te,o]),N=pe.find(I=>{var de;return(((de=I.date)==null?void 0:de.toDate().getTime())||0)>=Date.now()})||null,S=(t==null?void 0:t.role)==="admin"||(t==null?void 0:t.role)==="contributeur",k=!!(n&&(R.some(I=>I.authorUid!==n.uid&&!(I.readBy||[]).includes(n.uid))||W.some(I=>{var de;return(((de=I.unreadCounts)==null?void 0:de[n.uid])||0)>0}))),x=!!(t&&Te.some(I=>{var he,ge;const de=((he=I.createdAt)==null?void 0:he.toDate().getTime())||0,$=((ge=t.agendaLastSeenAt)==null?void 0:ge.toDate().getTime())||0;return de>$}));async function V(I){ne(I);const de=new URL(window.location.href);if(de.searchParams.set("tab",I),window.history.replaceState({},"",de),R_(),I==="agenda"&&t)try{await Ut(Xe(Ae,"members",t.id),{agendaLastSeenAt:Zt()})}catch{}}if(!n)return y.jsx(Xx,{});let C;switch(j){case"songs":C=y.jsx(ib,{songs:p,folders:E,canEdit:S,uid:n.uid});break;case"agenda":C=y.jsx(tb,{events:pe,uid:n.uid,songs:p,canEdit:S});break;case"messages":C=y.jsx(db,{uid:n.uid,member:t,members:o});break;case"members":C=y.jsx(hb,{members:o});break;case"admin":C=(t==null?void 0:t.role)==="admin"?y.jsx(mb,{members:o,events:Te,onBack:()=>void V("profile")}):y.jsx(w_,{member:t,nextEvent:N,songs:p,onOpen:I=>void V(I)});break;case"profile":C=y.jsx(pb,{member:t,onRefresh:()=>G(n.uid),onOpenAdmin:()=>void V("admin")});break;default:C=y.jsx(w_,{member:t,nextEvent:N,songs:p,onOpen:I=>void V(I)})}return y.jsxs("div",{className:"app-shell",children:[y.jsx("main",{className:"content",children:C}),y.jsx(yb,{active:j,onChange:I=>void V(I),messageUnread:k,agendaUnread:x})]})}uI.createRoot(document.getElementById("root")).render(y.jsx(nI.StrictMode,{children:y.jsx(wb,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.getRegistrations().then(n=>{n.filter(e=>!e.scope.includes("firebase-cloud-messaging-push-scope")).forEach(e=>void e.update())})});
