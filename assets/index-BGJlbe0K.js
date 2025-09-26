(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vc="170",Cr={ROTATE:0,DOLLY:1,PAN:2},Tr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pp=0,mh=1,mp=2,hd=1,ud=2,Qn=3,ai=0,Xt=1,On=2,Ei=0,Pr=1,_h=2,gh=3,vh=4,_p=5,Yi=100,gp=101,vp=102,xp=103,yp=104,Mp=200,Sp=201,Tp=202,bp=203,ul=204,dl=205,Ap=206,Ep=207,wp=208,Rp=209,Cp=210,Pp=211,Lp=212,Ip=213,Dp=214,fl=0,pl=1,ml=2,Fr=3,_l=4,gl=5,vl=6,xl=7,dd=0,Np=1,Up=2,wi=0,Op=1,Fp=2,Bp=3,fd=4,kp=5,zp=6,Hp=7,xh="attached",Vp="detached",pd=300,Br=301,kr=302,yl=303,Ml=304,na=306,zr=1e3,Mi=1001,Go=1002,zt=1003,md=1004,Ms=1005,kt=1006,Do=1007,ri=1008,li=1009,_d=1010,gd=1011,Us=1012,xc=1013,tr=1014,wn=1015,qs=1016,yc=1017,Mc=1018,Hr=1020,vd=35902,xd=1021,yd=1022,pn=1023,Md=1024,Sd=1025,Lr=1026,Vr=1027,Sc=1028,Tc=1029,Td=1030,bc=1031,Ac=1033,No=33776,Uo=33777,Oo=33778,Fo=33779,Sl=35840,Tl=35841,bl=35842,Al=35843,El=36196,wl=37492,Rl=37496,Cl=37808,Pl=37809,Ll=37810,Il=37811,Dl=37812,Nl=37813,Ul=37814,Ol=37815,Fl=37816,Bl=37817,kl=37818,zl=37819,Hl=37820,Vl=37821,Bo=36492,Gl=36494,Wl=36495,bd=36283,Xl=36284,ql=36285,Yl=36286,Ad=2200,Ed=2201,Gp=2202,Os=2300,Fs=2301,pa=2302,br=2400,Ar=2401,Wo=2402,Ec=2500,Wp=2501,Xp=0,wd=1,jl=2,qp=3200,Yp=3201,Rd=0,jp=1,yi="",ut="srgb",Ut="srgb-linear",ia="linear",Qe="srgb",ar=7680,yh=519,Kp=512,Zp=513,$p=514,Cd=515,Jp=516,Qp=517,em=518,tm=519,Kl=35044,Mh="300 es",si=2e3,Xo=2001;class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sh=1234567;const Es=Math.PI/180,Gr=180/Math.PI;function Cn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[s&255]+Lt[s>>8&255]+Lt[s>>16&255]+Lt[s>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function vt(s,e,t){return Math.max(e,Math.min(t,s))}function wc(s,e){return(s%e+e)%e}function nm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function im(s,e,t){return s!==e?(t-s)/(e-s):0}function ws(s,e,t){return(1-t)*s+t*e}function rm(s,e,t,n){return ws(s,e,1-Math.exp(-t*n))}function sm(s,e=1){return e-Math.abs(wc(s,e*2)-e)}function om(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function am(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function lm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function cm(s,e){return s+Math.random()*(e-s)}function hm(s){return s*(.5-Math.random())}function um(s){s!==void 0&&(Sh=s);let e=Sh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dm(s){return s*Es}function fm(s){return s*Gr}function pm(s){return(s&s-1)===0&&s!==0}function mm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function _m(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function gm(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),h=r((e+n)/2),d=o((e+n)/2),l=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*d,c*l,c*u,a*h);break;case"YZY":s.set(c*u,a*d,c*l,a*h);break;case"ZXZ":s.set(c*l,c*u,a*d,a*h);break;case"XZX":s.set(a*d,c*_,c*f,a*h);break;case"YXY":s.set(c*f,a*d,c*_,a*h);break;case"ZYZ":s.set(c*_,c*f,a*d,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function En(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Je(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Pd={DEG2RAD:Es,RAD2DEG:Gr,generateUUID:Cn,clamp:vt,euclideanModulo:wc,mapLinear:nm,inverseLerp:im,lerp:ws,damp:rm,pingpong:sm,smoothstep:om,smootherstep:am,randInt:lm,randFloat:cm,randFloatSpread:hm,seededRandom:um,degToRad:dm,radToDeg:fm,isPowerOfTwo:pm,ceilPowerOfTwo:mm,floorPowerOfTwo:_m,setQuaternionFromProperEuler:gm,normalize:Je,denormalize:En};class ie{constructor(e=0,t=0){ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,t,n,i,r,o,a,c,h){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,h)}set(e,t,n,i,r,o,a,c,h){const d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=o,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],h=n[1],d=n[4],l=n[7],u=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],v=i[1],M=i[4],x=i[7],w=i[2],E=i[5],A=i[8];return r[0]=o*g+a*v+c*w,r[3]=o*m+a*M+c*E,r[6]=o*p+a*x+c*A,r[1]=h*g+d*v+l*w,r[4]=h*m+d*M+l*E,r[7]=h*p+d*x+l*A,r[2]=u*g+f*v+_*w,r[5]=u*m+f*M+_*E,r[8]=u*p+f*x+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],h=e[7],d=e[8];return t*o*d-t*a*h-n*r*d+n*a*c+i*r*h-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],h=e[7],d=e[8],l=d*o-a*h,u=a*c-d*r,f=h*r-o*c,_=t*l+n*u+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=l*g,e[1]=(i*h-d*n)*g,e[2]=(a*n-i*o)*g,e[3]=u*g,e[4]=(d*t-i*c)*g,e[5]=(i*r-a*t)*g,e[6]=f*g,e[7]=(n*c-h*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*o+h*a)+o+e,-i*h,i*c,-i*(-h*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ma.makeScale(e,t)),this}rotate(e){return this.premultiply(ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new De;function Ld(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Bs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function vm(){const s=Bs("canvas");return s.style.display="block",s}const Th={};function Ss(s){s in Th||(Th[s]=!0,console.warn(s))}function xm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function ym(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Mm(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Be={enabled:!0,workingColorSpace:Ut,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Qe&&(s.r=oi(s.r),s.g=oi(s.g),s.b=oi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Qe&&(s.r=Ir(s.r),s.g=Ir(s.g),s.b=Ir(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yi?ia:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function oi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ir(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const bh=[.64,.33,.3,.6,.15,.06],Ah=[.2126,.7152,.0722],Eh=[.3127,.329],wh=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rh=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Be.define({[Ut]:{primaries:bh,whitePoint:Eh,transfer:ia,toXYZ:wh,fromXYZ:Rh,luminanceCoefficients:Ah,workingColorSpaceConfig:{unpackColorSpace:ut},outputColorSpaceConfig:{drawingBufferColorSpace:ut}},[ut]:{primaries:bh,whitePoint:Eh,transfer:Qe,toXYZ:wh,fromXYZ:Rh,luminanceCoefficients:Ah,outputColorSpaceConfig:{drawingBufferColorSpace:ut}}});let lr;class Sm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{lr===void 0&&(lr=Bs("canvas")),lr.width=e.width,lr.height=e.height;const n=lr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=lr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=oi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tm=0;class Id{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Cn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(_a(i[o].image)):r.push(_a(i[o]))}else r=_a(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function _a(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Sm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bm=0;class Tt extends Di{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=Mi,i=Mi,r=kt,o=ri,a=pn,c=li,h=Tt.DEFAULT_ANISOTROPY,d=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Cn(),this.name="",this.source=new Id(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zr:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case Go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zr:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case Go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=pd;Tt.DEFAULT_ANISOTROPY=1;class qe{constructor(e=0,t=0,n=0,i=1){qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,h=c[0],d=c[4],l=c[8],u=c[1],f=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(d-u)<.01&&Math.abs(l-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(l+g)<.1&&Math.abs(_+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(h+1)/2,x=(f+1)/2,w=(p+1)/2,E=(d+u)/4,A=(l+g)/4,P=(_+m)/4;return M>x&&M>w?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=E/n,r=A/n):x>w?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=E/i,r=P/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=A/r,i=P/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-_)*(m-_)+(l-g)*(l-g)+(u-d)*(u-d));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(l-g)/v,this.z=(u-d)/v,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Am extends Di{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Tt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Id(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nr extends Am{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Dd extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Em extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],h=n[i+1],d=n[i+2],l=n[i+3];const u=r[o+0],f=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=c,e[t+1]=h,e[t+2]=d,e[t+3]=l;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(l!==g||c!==u||h!==f||d!==_){let m=1-a;const p=c*u+h*f+d*_+l*g,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const w=Math.sqrt(M),E=Math.atan2(w,p*v);m=Math.sin(m*E)/w,a=Math.sin(a*E)/w}const x=a*v;if(c=c*m+u*x,h=h*m+f*x,d=d*m+_*x,l=l*m+g*x,m===1-a){const w=1/Math.sqrt(c*c+h*h+d*d+l*l);c*=w,h*=w,d*=w,l*=w}}e[t]=c,e[t+1]=h,e[t+2]=d,e[t+3]=l}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],h=n[i+2],d=n[i+3],l=r[o],u=r[o+1],f=r[o+2],_=r[o+3];return e[t]=a*_+d*l+c*f-h*u,e[t+1]=c*_+d*u+h*l-a*f,e[t+2]=h*_+d*f+a*u-c*l,e[t+3]=d*_-a*l-c*u-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,h=a(n/2),d=a(i/2),l=a(r/2),u=c(n/2),f=c(i/2),_=c(r/2);switch(o){case"XYZ":this._x=u*d*l+h*f*_,this._y=h*f*l-u*d*_,this._z=h*d*_+u*f*l,this._w=h*d*l-u*f*_;break;case"YXZ":this._x=u*d*l+h*f*_,this._y=h*f*l-u*d*_,this._z=h*d*_-u*f*l,this._w=h*d*l+u*f*_;break;case"ZXY":this._x=u*d*l-h*f*_,this._y=h*f*l+u*d*_,this._z=h*d*_+u*f*l,this._w=h*d*l-u*f*_;break;case"ZYX":this._x=u*d*l-h*f*_,this._y=h*f*l+u*d*_,this._z=h*d*_-u*f*l,this._w=h*d*l+u*f*_;break;case"YZX":this._x=u*d*l+h*f*_,this._y=h*f*l+u*d*_,this._z=h*d*_-u*f*l,this._w=h*d*l-u*f*_;break;case"XZY":this._x=u*d*l-h*f*_,this._y=h*f*l-u*d*_,this._z=h*d*_+u*f*l,this._w=h*d*l+u*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],h=t[2],d=t[6],l=t[10],u=n+a+l;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-c)*f,this._y=(r-h)*f,this._z=(o-i)*f}else if(n>a&&n>l){const f=2*Math.sqrt(1+n-a-l);this._w=(d-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+h)/f}else if(a>l){const f=2*Math.sqrt(1+a-n-l);this._w=(r-h)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+l-n-a);this._w=(o-i)/f,this._x=(r+h)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,h=t._z,d=t._w;return this._x=n*d+o*a+i*h-r*c,this._y=i*d+o*c+r*a-n*h,this._z=r*d+o*h+n*c-i*a,this._w=o*d-n*a-i*c-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const h=Math.sqrt(c),d=Math.atan2(h,a),l=Math.sin((1-t)*d)/h,u=Math.sin(t*d)/h;return this._w=o*l+this._w*u,this._x=n*l+this._x*u,this._y=i*l+this._y*u,this._z=r*l+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ch.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ch.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,h=2*(o*i-a*n),d=2*(a*t-r*i),l=2*(r*n-o*t);return this.x=t+c*h+o*l-a*d,this.y=n+c*d+a*h-r*l,this.z=i+c*l+r*d-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ga.copy(this).projectOnVector(e),this.sub(ga)}reflect(e){return this.sub(ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new C,Ch=new rn;class Pn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Js.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Js.copy(n.boundingBox)),Js.applyMatrix4(e.matrixWorld),this.union(Js)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),Qs.subVectors(this.max,os),cr.subVectors(e.a,os),hr.subVectors(e.b,os),ur.subVectors(e.c,os),fi.subVectors(hr,cr),pi.subVectors(ur,hr),Oi.subVectors(cr,ur);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Oi.z,Oi.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Oi.z,0,-Oi.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Oi.y,Oi.x,0];return!va(t,cr,hr,ur,Qs)||(t=[1,0,0,0,1,0,0,0,1],!va(t,cr,hr,ur,Qs))?!1:(eo.crossVectors(fi,pi),t=[eo.x,eo.y,eo.z],va(t,cr,hr,ur,Qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new C,new C,new C,new C,new C,new C,new C,new C],Sn=new C,Js=new Pn,cr=new C,hr=new C,ur=new C,fi=new C,pi=new C,Oi=new C,os=new C,Qs=new C,eo=new C,Fi=new C;function va(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Fi.fromArray(s,r);const a=i.x*Math.abs(Fi.x)+i.y*Math.abs(Fi.y)+i.z*Math.abs(Fi.z),c=e.dot(Fi),h=t.dot(Fi),d=n.dot(Fi);if(Math.max(-Math.max(c,h,d),Math.min(c,h,d))>a)return!1}return!0}const wm=new Pn,as=new C,xa=new C;class Ln{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);const t=as.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(as,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(xa)),this.expandByPoint(as.copy(e.center).sub(xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new C,ya=new C,to=new C,mi=new C,Ma=new C,no=new C,Sa=new C;class es{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ya.copy(e).add(t).multiplyScalar(.5),to.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(ya);const r=e.distanceTo(t)*.5,o=-this.direction.dot(to),a=mi.dot(this.direction),c=-mi.dot(to),h=mi.lengthSq(),d=Math.abs(1-o*o);let l,u,f,_;if(d>0)if(l=o*c-a,u=o*a-c,_=r*d,l>=0)if(u>=-_)if(u<=_){const g=1/d;l*=g,u*=g,f=l*(l+o*u+2*a)+u*(o*l+u+2*c)+h}else u=r,l=Math.max(0,-(o*u+a)),f=-l*l+u*(u+2*c)+h;else u=-r,l=Math.max(0,-(o*u+a)),f=-l*l+u*(u+2*c)+h;else u<=-_?(l=Math.max(0,-(-o*r+a)),u=l>0?-r:Math.min(Math.max(-r,-c),r),f=-l*l+u*(u+2*c)+h):u<=_?(l=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+h):(l=Math.max(0,-(o*r+a)),u=l>0?r:Math.min(Math.max(-r,-c),r),f=-l*l+u*(u+2*c)+h);else u=o>0?-r:r,l=Math.max(0,-(o*u+a)),f=-l*l+u*(u+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,l),i&&i.copy(ya).addScaledVector(to,u),f}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const n=jn.dot(this.direction),i=jn.dot(jn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const h=1/this.direction.x,d=1/this.direction.y,l=1/this.direction.z,u=this.origin;return h>=0?(n=(e.min.x-u.x)*h,i=(e.max.x-u.x)*h):(n=(e.max.x-u.x)*h,i=(e.min.x-u.x)*h),d>=0?(r=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),l>=0?(a=(e.min.z-u.z)*l,c=(e.max.z-u.z)*l):(a=(e.max.z-u.z)*l,c=(e.min.z-u.z)*l),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,i,r){Ma.subVectors(t,e),no.subVectors(n,e),Sa.crossVectors(Ma,no);let o=this.direction.dot(Sa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);const c=a*this.direction.dot(no.crossVectors(mi,no));if(c<0)return null;const h=a*this.direction.dot(Ma.cross(mi));if(h<0||c+h>o)return null;const d=-a*mi.dot(Sa);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(e,t,n,i,r,o,a,c,h,d,l,u,f,_,g,m){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,h,d,l,u,f,_,g,m)}set(e,t,n,i,r,o,a,c,h,d,l,u,f,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=h,p[6]=d,p[10]=l,p[14]=u,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/dr.setFromMatrixColumn(e,0).length(),r=1/dr.setFromMatrixColumn(e,1).length(),o=1/dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),h=Math.sin(i),d=Math.cos(r),l=Math.sin(r);if(e.order==="XYZ"){const u=o*d,f=o*l,_=a*d,g=a*l;t[0]=c*d,t[4]=-c*l,t[8]=h,t[1]=f+_*h,t[5]=u-g*h,t[9]=-a*c,t[2]=g-u*h,t[6]=_+f*h,t[10]=o*c}else if(e.order==="YXZ"){const u=c*d,f=c*l,_=h*d,g=h*l;t[0]=u+g*a,t[4]=_*a-f,t[8]=o*h,t[1]=o*l,t[5]=o*d,t[9]=-a,t[2]=f*a-_,t[6]=g+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*d,f=c*l,_=h*d,g=h*l;t[0]=u-g*a,t[4]=-o*l,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*d,t[9]=g-u*a,t[2]=-o*h,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*d,f=o*l,_=a*d,g=a*l;t[0]=c*d,t[4]=_*h-f,t[8]=u*h+g,t[1]=c*l,t[5]=g*h+u,t[9]=f*h-_,t[2]=-h,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,f=o*h,_=a*c,g=a*h;t[0]=c*d,t[4]=g-u*l,t[8]=_*l+f,t[1]=l,t[5]=o*d,t[9]=-a*d,t[2]=-h*d,t[6]=f*l+_,t[10]=u-g*l}else if(e.order==="XZY"){const u=o*c,f=o*h,_=a*c,g=a*h;t[0]=c*d,t[4]=-l,t[8]=h*d,t[1]=u*l+g,t[5]=o*d,t[9]=f*l-_,t[2]=_*l-f,t[6]=a*d,t[10]=g*l+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rm,e,Cm)}lookAt(e,t,n){const i=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),_i.crossVectors(n,Jt),_i.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),_i.crossVectors(n,Jt)),_i.normalize(),io.crossVectors(Jt,_i),i[0]=_i.x,i[4]=io.x,i[8]=Jt.x,i[1]=_i.y,i[5]=io.y,i[9]=Jt.y,i[2]=_i.z,i[6]=io.z,i[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],h=n[12],d=n[1],l=n[5],u=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],v=n[3],M=n[7],x=n[11],w=n[15],E=i[0],A=i[4],P=i[8],y=i[12],T=i[1],L=i[5],z=i[9],O=i[13],G=i[2],q=i[6],V=i[10],Y=i[14],H=i[3],te=i[7],ae=i[11],pe=i[15];return r[0]=o*E+a*T+c*G+h*H,r[4]=o*A+a*L+c*q+h*te,r[8]=o*P+a*z+c*V+h*ae,r[12]=o*y+a*O+c*Y+h*pe,r[1]=d*E+l*T+u*G+f*H,r[5]=d*A+l*L+u*q+f*te,r[9]=d*P+l*z+u*V+f*ae,r[13]=d*y+l*O+u*Y+f*pe,r[2]=_*E+g*T+m*G+p*H,r[6]=_*A+g*L+m*q+p*te,r[10]=_*P+g*z+m*V+p*ae,r[14]=_*y+g*O+m*Y+p*pe,r[3]=v*E+M*T+x*G+w*H,r[7]=v*A+M*L+x*q+w*te,r[11]=v*P+M*z+x*V+w*ae,r[15]=v*y+M*O+x*Y+w*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],h=e[13],d=e[2],l=e[6],u=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+r*c*l-i*h*l-r*a*u+n*h*u+i*a*f-n*c*f)+g*(+t*c*f-t*h*u+r*o*u-i*o*f+i*h*d-r*c*d)+m*(+t*h*l-t*a*f-r*o*l+n*o*f+r*a*d-n*h*d)+p*(-i*a*d-t*c*l+t*a*u+i*o*l-n*o*u+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],h=e[7],d=e[8],l=e[9],u=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],v=l*m*h-g*u*h+g*c*f-a*m*f-l*c*p+a*u*p,M=_*u*h-d*m*h-_*c*f+o*m*f+d*c*p-o*u*p,x=d*g*h-_*l*h+_*a*f-o*g*f-d*a*p+o*l*p,w=_*l*c-d*g*c-_*a*u+o*g*u+d*a*m-o*l*m,E=t*v+n*M+i*x+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=v*A,e[1]=(g*u*r-l*m*r-g*i*f+n*m*f+l*i*p-n*u*p)*A,e[2]=(a*m*r-g*c*r+g*i*h-n*m*h-a*i*p+n*c*p)*A,e[3]=(l*c*r-a*u*r-l*i*h+n*u*h+a*i*f-n*c*f)*A,e[4]=M*A,e[5]=(d*m*r-_*u*r+_*i*f-t*m*f-d*i*p+t*u*p)*A,e[6]=(_*c*r-o*m*r-_*i*h+t*m*h+o*i*p-t*c*p)*A,e[7]=(o*u*r-d*c*r+d*i*h-t*u*h-o*i*f+t*c*f)*A,e[8]=x*A,e[9]=(_*l*r-d*g*r-_*n*f+t*g*f+d*n*p-t*l*p)*A,e[10]=(o*g*r-_*a*r+_*n*h-t*g*h-o*n*p+t*a*p)*A,e[11]=(d*a*r-o*l*r-d*n*h+t*l*h+o*n*f-t*a*f)*A,e[12]=w*A,e[13]=(d*g*i-_*l*i+_*n*u-t*g*u-d*n*m+t*l*m)*A,e[14]=(_*a*i-o*g*i-_*n*c+t*g*c+o*n*m-t*a*m)*A,e[15]=(o*l*i-d*a*i+d*n*c-t*l*c-o*n*u+t*a*u)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,h=r*o,d=r*a;return this.set(h*o+n,h*a-i*c,h*c+i*a,0,h*a+i*c,d*a+n,d*c-i*o,0,h*c-i*a,d*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,h=r+r,d=o+o,l=a+a,u=r*h,f=r*d,_=r*l,g=o*d,m=o*l,p=a*l,v=c*h,M=c*d,x=c*l,w=n.x,E=n.y,A=n.z;return i[0]=(1-(g+p))*w,i[1]=(f+x)*w,i[2]=(_-M)*w,i[3]=0,i[4]=(f-x)*E,i[5]=(1-(u+p))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(_+M)*A,i[9]=(m-v)*A,i[10]=(1-(u+g))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=dr.set(i[0],i[1],i[2]).length();const o=dr.set(i[4],i[5],i[6]).length(),a=dr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Tn.copy(this);const h=1/r,d=1/o,l=1/a;return Tn.elements[0]*=h,Tn.elements[1]*=h,Tn.elements[2]*=h,Tn.elements[4]*=d,Tn.elements[5]*=d,Tn.elements[6]*=d,Tn.elements[8]*=l,Tn.elements[9]*=l,Tn.elements[10]*=l,t.setFromRotationMatrix(Tn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=si){const c=this.elements,h=2*r/(t-e),d=2*r/(n-i),l=(t+e)/(t-e),u=(n+i)/(n-i);let f,_;if(a===si)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Xo)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=si){const c=this.elements,h=1/(t-e),d=1/(n-i),l=1/(o-r),u=(t+e)*h,f=(n+i)*d;let _,g;if(a===si)_=(o+r)*l,g=-2*l;else if(a===Xo)_=r*l,g=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const dr=new C,Tn=new Ce,Rm=new C(0,0,0),Cm=new C(1,1,1),_i=new C,io=new C,Jt=new C,Ph=new Ce,Lh=new rn;class zn{constructor(e=0,t=0,n=0,i=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],h=i[5],d=i[9],l=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-l,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ph.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ph,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lh.setFromEuler(this),this.setFromQuaternion(Lh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class ra{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pm=0;const Ih=new C,fr=new rn,Kn=new Ce,ro=new C,ls=new C,Lm=new C,Im=new rn,Dh=new C(1,0,0),Nh=new C(0,1,0),Uh=new C(0,0,1),Oh={type:"added"},Dm={type:"removed"},pr={type:"childadded",child:null},Ta={type:"childremoved",child:null};class ft extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new C,t=new zn,n=new rn,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new De}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.multiply(fr),this}rotateOnWorldAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.premultiply(fr),this}rotateX(e){return this.rotateOnAxis(Dh,e)}rotateY(e){return this.rotateOnAxis(Nh,e)}rotateZ(e){return this.rotateOnAxis(Uh,e)}translateOnAxis(e,t){return Ih.copy(e).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dh,e)}translateY(e){return this.translateOnAxis(Nh,e)}translateZ(e){return this.translateOnAxis(Uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ro.copy(e):ro.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(ls,ro,this.up):Kn.lookAt(ro,ls,this.up),this.quaternion.setFromRotationMatrix(Kn),i&&(Kn.extractRotation(i.matrixWorld),fr.setFromRotationMatrix(Kn),this.quaternion.premultiply(fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oh),pr.child=e,this.dispatchEvent(pr),pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dm),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oh),pr.child=e,this.dispatchEvent(pr),pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,e,Lm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,Im,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){const l=c[h];r(e.shapes,l)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),h=o(e.textures),d=o(e.images),l=o(e.shapes),u=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),l.length>0&&(n.shapes=l),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const h in a){const d=a[h];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DEFAULT_UP=new C(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new C,Zn=new C,ba=new C,$n=new C,mr=new C,_r=new C,Fh=new C,Aa=new C,Ea=new C,wa=new C,Ra=new qe,Ca=new qe,Pa=new qe;class fn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),bn.subVectors(e,t),i.cross(bn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){bn.subVectors(i,t),Zn.subVectors(n,t),ba.subVectors(e,t);const o=bn.dot(bn),a=bn.dot(Zn),c=bn.dot(ba),h=Zn.dot(Zn),d=Zn.dot(ba),l=o*h-a*a;if(l===0)return r.set(0,0,0),null;const u=1/l,f=(h*c-a*d)*u,_=(o*d-a*c)*u;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,$n.x),c.addScaledVector(o,$n.y),c.addScaledVector(a,$n.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return Ra.setScalar(0),Ca.setScalar(0),Pa.setScalar(0),Ra.fromBufferAttribute(e,t),Ca.fromBufferAttribute(e,n),Pa.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ra,r.x),o.addScaledVector(Ca,r.y),o.addScaledVector(Pa,r.z),o}static isFrontFacing(e,t,n,i){return bn.subVectors(n,t),Zn.subVectors(e,t),bn.cross(Zn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),bn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return fn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;mr.subVectors(i,n),_r.subVectors(r,n),Aa.subVectors(e,n);const c=mr.dot(Aa),h=_r.dot(Aa);if(c<=0&&h<=0)return t.copy(n);Ea.subVectors(e,i);const d=mr.dot(Ea),l=_r.dot(Ea);if(d>=0&&l<=d)return t.copy(i);const u=c*l-d*h;if(u<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(mr,o);wa.subVectors(e,r);const f=mr.dot(wa),_=_r.dot(wa);if(_>=0&&f<=_)return t.copy(r);const g=f*h-c*_;if(g<=0&&h>=0&&_<=0)return a=h/(h-_),t.copy(n).addScaledVector(_r,a);const m=d*_-f*l;if(m<=0&&l-d>=0&&f-_>=0)return Fh.subVectors(r,i),a=(l-d)/(l-d+(f-_)),t.copy(i).addScaledVector(Fh,a);const p=1/(m+g+u);return o=g*p,a=u*p,t.copy(n).addScaledVector(mr,o).addScaledVector(_r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},so={h:0,s:0,l:0};function La(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class we{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Be.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Be.workingColorSpace){return this.r=e,this.g=t,this.b=n,Be.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Be.workingColorSpace){if(e=wc(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=La(o,r,e+1/3),this.g=La(o,r,e),this.b=La(o,r,e-1/3)}return Be.toWorkingColorSpace(this,i),this}setStyle(e,t=ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){const n=Nd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return Be.fromWorkingColorSpace(It.copy(this),e),Math.round(vt(It.r*255,0,255))*65536+Math.round(vt(It.g*255,0,255))*256+Math.round(vt(It.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Be.workingColorSpace){Be.fromWorkingColorSpace(It.copy(this),t);const n=It.r,i=It.g,r=It.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,h;const d=(a+o)/2;if(a===o)c=0,h=0;else{const l=o-a;switch(h=d<=.5?l/(o+a):l/(2-o-a),o){case n:c=(i-r)/l+(i<r?6:0);break;case i:c=(r-n)/l+2;break;case r:c=(n-i)/l+4;break}c/=6}return e.h=c,e.s=h,e.l=d,e}getRGB(e,t=Be.workingColorSpace){return Be.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=ut){Be.fromWorkingColorSpace(It.copy(this),e);const t=It.r,n=It.g,i=It.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(so);const n=ws(gi.h,so.h,t),i=ws(gi.s,so.s,t),r=ws(gi.l,so.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new we;we.NAMES=Nd;let Nm=0;class kn extends Di{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Cn(),this.name="",this.blending=Pr,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ul,this.blendDst=dl,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ul&&(n.blendSrc=this.blendSrc),this.blendDst!==dl&&(n.blendDst=this.blendDst),this.blendEquation!==Yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rn extends kn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=dd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new C,oo=new ie;class Rt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kl,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oo.fromBufferAttribute(this,t),oo.applyMatrix3(e),this.setXY(t,oo.x,oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kl&&(e.usage=this.usage),e}}class Ud extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Od extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vn extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Um=0;const hn=new Ce,Ia=new ft,gr=new C,Qt=new Pn,cs=new Pn,Et=new C;class xn extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ld(e)?Od:Ud)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return Ia.lookAt(e),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vn(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];cs.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(Qt.min,cs.min),Qt.expandByPoint(Et),Et.addVectors(Qt.max,cs.max),Qt.expandByPoint(Et)):(Qt.expandByPoint(cs.min),Qt.expandByPoint(cs.max))}Qt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Et.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Et));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let h=0,d=a.count;h<d;h++)Et.fromBufferAttribute(a,h),c&&(gr.fromBufferAttribute(e,h),Et.add(gr)),i=Math.max(i,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new C,c[P]=new C;const h=new C,d=new C,l=new C,u=new ie,f=new ie,_=new ie,g=new C,m=new C;function p(P,y,T){h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,y),l.fromBufferAttribute(n,T),u.fromBufferAttribute(r,P),f.fromBufferAttribute(r,y),_.fromBufferAttribute(r,T),d.sub(h),l.sub(h),f.sub(u),_.sub(u);const L=1/(f.x*_.y-_.x*f.y);isFinite(L)&&(g.copy(d).multiplyScalar(_.y).addScaledVector(l,-f.y).multiplyScalar(L),m.copy(l).multiplyScalar(f.x).addScaledVector(d,-_.x).multiplyScalar(L),a[P].add(g),a[y].add(g),a[T].add(g),c[P].add(m),c[y].add(m),c[T].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,y=v.length;P<y;++P){const T=v[P],L=T.start,z=T.count;for(let O=L,G=L+z;O<G;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const M=new C,x=new C,w=new C,E=new C;function A(P){w.fromBufferAttribute(i,P),E.copy(w);const y=a[P];M.copy(y),M.sub(w.multiplyScalar(w.dot(y))).normalize(),x.crossVectors(E,y);const L=x.dot(c[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,L)}for(let P=0,y=v.length;P<y;++P){const T=v[P],L=T.start,z=T.count;for(let O=L,G=L+z;O<G;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new C,r=new C,o=new C,a=new C,c=new C,h=new C,d=new C,l=new C;if(e)for(let u=0,f=e.count;u<f;u+=3){const _=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),d.subVectors(o,r),l.subVectors(i,r),d.cross(l),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),h.fromBufferAttribute(n,m),a.add(d),c.add(d),h.add(d),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,r),l.subVectors(i,r),d.cross(l),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,c){const h=a.array,d=a.itemSize,l=a.normalized,u=new h.constructor(c.length*d);let f=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?f=c[g]*a.data.stride+a.offset:f=c[g]*d;for(let p=0;p<d;p++)u[_++]=h[f++]}return new Rt(u,d,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],h=e(c,n);t.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const c=[],h=r[a];for(let d=0,l=h.length;d<l;d++){const u=h[d],f=e(u,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const h=o[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const h=n[c];e.data.attributes[c]=h.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],d=[];for(let l=0,u=h.length;l<u;l++){const f=h[l];d.push(f.toJSON(e.data))}d.length>0&&(i[c]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const d=i[h];this.setAttribute(h,d.clone(t))}const r=e.morphAttributes;for(const h in r){const d=[],l=r[h];for(let u=0,f=l.length;u<f;u++)d.push(l[u].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,d=o.length;h<d;h++){const l=o[h];this.addGroup(l.start,l.count,l.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bh=new Ce,Bi=new es,ao=new Ln,kh=new C,lo=new C,co=new C,ho=new C,Da=new C,uo=new C,zh=new C,fo=new C;class Wt extends ft{constructor(e=new xn,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){uo.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const d=a[c],l=r[c];d!==0&&(Da.fromBufferAttribute(l,e),o?uo.addScaledVector(Da,d):uo.addScaledVector(Da.sub(t),d))}t.add(uo)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(r),Bi.copy(e.ray).recast(e.near),!(ao.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(ao,kh)===null||Bi.origin.distanceToSquared(kh)>(e.far-e.near)**2))&&(Bh.copy(r).invert(),Bi.copy(e.ray).applyMatrix4(Bh),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,l=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){const m=u[_],p=o[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,w=M;x<w;x+=3){const E=a.getX(x),A=a.getX(x+1),P=a.getX(x+2);i=po(this,p,e,n,h,d,l,E,A,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const v=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);i=po(this,o,e,n,h,d,l,v,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){const m=u[_],p=o[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,w=M;x<w;x+=3){const E=x,A=x+1,P=x+2;i=po(this,p,e,n,h,d,l,E,A,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const v=m,M=m+1,x=m+2;i=po(this,o,e,n,h,d,l,v,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Om(s,e,t,n,i,r,o,a){let c;if(e.side===Xt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===ai,a),c===null)return null;fo.copy(a),fo.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(fo);return h<t.near||h>t.far?null:{distance:h,point:fo.clone(),object:s}}function po(s,e,t,n,i,r,o,a,c,h){s.getVertexPosition(a,lo),s.getVertexPosition(c,co),s.getVertexPosition(h,ho);const d=Om(s,e,t,n,lo,co,ho,zh);if(d){const l=new C;fn.getBarycoord(zh,lo,co,ho,l),i&&(d.uv=fn.getInterpolatedAttribute(i,a,c,h,l,new ie)),r&&(d.uv1=fn.getInterpolatedAttribute(r,a,c,h,l,new ie)),o&&(d.normal=fn.getInterpolatedAttribute(o,a,c,h,l,new C),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:c,c:h,normal:new C,materialIndex:0};fn.getNormal(lo,co,ho,u.normal),d.face=u,d.barycoord=l}return d}class Ys extends xn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],h=[],d=[],l=[];let u=0,f=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new vn(h,3)),this.setAttribute("normal",new vn(d,3)),this.setAttribute("uv",new vn(l,2));function _(g,m,p,v,M,x,w,E,A,P,y){const T=x/A,L=w/P,z=x/2,O=w/2,G=E/2,q=A+1,V=P+1;let Y=0,H=0;const te=new C;for(let ae=0;ae<V;ae++){const pe=ae*L-O;for(let Ae=0;Ae<q;Ae++){const Ye=Ae*T-z;te[g]=Ye*v,te[m]=pe*M,te[p]=G,h.push(te.x,te.y,te.z),te[g]=0,te[m]=0,te[p]=E>0?1:-1,d.push(te.x,te.y,te.z),l.push(Ae/A),l.push(1-ae/P),Y+=1}}for(let ae=0;ae<P;ae++)for(let pe=0;pe<A;pe++){const Ae=u+pe+q*ae,Ye=u+pe+q*(ae+1),X=u+(pe+1)+q*(ae+1),J=u+(pe+1)+q*ae;c.push(Ae,Ye,J),c.push(Ye,X,J),H+=6}a.addGroup(f,H,y),f+=H,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ft(s){const e={};for(let t=0;t<s.length;t++){const n=Wr(s[t]);for(const i in n)e[i]=n[i]}return e}function Fm(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Fd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Be.workingColorSpace}const Bm={clone:Wr,merge:Ft};var km=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends kn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=km,this.fragmentShader=zm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=Fm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bd extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new C,Hh=new ie,Vh=new ie;class Gt extends Bd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,Hh,Vh),t.subVectors(Vh,Hh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Es*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,h=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/h,i*=o.width/c,n*=o.height/h}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vr=-90,xr=1;class Hm extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Gt(vr,xr,e,t);i.layers=this.layers,this.add(i);const r=new Gt(vr,xr,e,t);r.layers=this.layers,this.add(r);const o=new Gt(vr,xr,e,t);o.layers=this.layers,this.add(o);const a=new Gt(vr,xr,e,t);a.layers=this.layers,this.add(a);const c=new Gt(vr,xr,e,t);c.layers=this.layers,this.add(c);const h=new Gt(vr,xr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const h of t)this.remove(h);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,h,d]=this.children,l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(l,u,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class kd extends Tt{constructor(e,t,n,i,r,o,a,c,h,d){e=e!==void 0?e:[],t=t!==void 0?t:Br,super(e,t,n,i,r,o,a,c,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vm extends nr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new kd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ys(5,5,5),r=new Pi({name:"CubemapFromEquirect",uniforms:Wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:Ei});r.uniforms.tEquirect.value=t;const o=new Wt(i,r),a=t.minFilter;return t.minFilter===ri&&(t.minFilter=kt),new Hm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Na=new C,Gm=new C,Wm=new De;class ni{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Na.subVectors(n,t).cross(Gm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Na),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wm.getNormalMatrix(e),i=this.coplanarPoint(Na).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new Ln,mo=new C;class Rc{constructor(e=new ni,t=new ni,n=new ni,i=new ni,r=new ni,o=new ni){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],h=i[4],d=i[5],l=i[6],u=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],v=i[13],M=i[14],x=i[15];if(n[0].setComponents(c-r,u-h,m-f,x-p).normalize(),n[1].setComponents(c+r,u+h,m+f,x+p).normalize(),n[2].setComponents(c+o,u+d,m+_,x+v).normalize(),n[3].setComponents(c-o,u-d,m-_,x-v).normalize(),n[4].setComponents(c-a,u-l,m-g,x-M).normalize(),t===si)n[5].setComponents(c+a,u+l,m+g,x+M).normalize();else if(t===Xo)n[5].setComponents(a,l,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(mo.x=i.normal.x>0?e.max.x:e.min.x,mo.y=i.normal.y>0?e.max.y:e.min.y,mo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(mo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zd(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Xm(s){const e=new WeakMap;function t(a,c){const h=a.array,d=a.usage,l=h.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,h,d),a.onUploadCallback();let f;if(h instanceof Float32Array)f=s.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=s.SHORT;else if(h instanceof Uint32Array)f=s.UNSIGNED_INT;else if(h instanceof Int32Array)f=s.INT;else if(h instanceof Int8Array)f=s.BYTE;else if(h instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:l}}function n(a,c,h){const d=c.array,l=c.updateRanges;if(s.bindBuffer(h,a),l.length===0)s.bufferSubData(h,0,d);else{l.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<l.length;f++){const _=l[u],g=l[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++u,l[u]=g)}l.length=u+1;for(let f=0,_=l.length;f<_;f++){const g=l[f];s.bufferSubData(h,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=e.get(a);if(h===void 0)e.set(a,t(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,c),h.version=a.version}}return{get:i,remove:r,update:o}}class sa extends xn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),h=a+1,d=c+1,l=e/a,u=t/c,f=[],_=[],g=[],m=[];for(let p=0;p<d;p++){const v=p*u-o;for(let M=0;M<h;M++){const x=M*l-r;_.push(x,-v,0),g.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const M=v+h*p,x=v+h*(p+1),w=v+1+h*(p+1),E=v+1+h*p;f.push(M,x,E),f.push(x,w,E)}this.setIndex(f),this.setAttribute("position",new vn(_,3)),this.setAttribute("normal",new vn(g,3)),this.setAttribute("uv",new vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.width,e.height,e.widthSegments,e.heightSegments)}}var qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ym=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,t_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,n_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,i_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,s_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,o_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,m_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,__=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,g_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,v_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,M_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S_="gl_FragColor = linearToOutputTexel( gl_FragColor );",T_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,A_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,E_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,w_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,C_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,D_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,N_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,B_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,k_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,W_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,X_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,q_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Y_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,j_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Q_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ig=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,og=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_g=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Mg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ig=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ng=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ug=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Og=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,e0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,o0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,h0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,d0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,f0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,T0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:qm,alphahash_pars_fragment:Ym,alphamap_fragment:jm,alphamap_pars_fragment:Km,alphatest_fragment:Zm,alphatest_pars_fragment:$m,aomap_fragment:Jm,aomap_pars_fragment:Qm,batching_pars_vertex:e_,batching_vertex:t_,begin_vertex:n_,beginnormal_vertex:i_,bsdfs:r_,iridescence_fragment:s_,bumpmap_pars_fragment:o_,clipping_planes_fragment:a_,clipping_planes_pars_fragment:l_,clipping_planes_pars_vertex:c_,clipping_planes_vertex:h_,color_fragment:u_,color_pars_fragment:d_,color_pars_vertex:f_,color_vertex:p_,common:m_,cube_uv_reflection_fragment:__,defaultnormal_vertex:g_,displacementmap_pars_vertex:v_,displacementmap_vertex:x_,emissivemap_fragment:y_,emissivemap_pars_fragment:M_,colorspace_fragment:S_,colorspace_pars_fragment:T_,envmap_fragment:b_,envmap_common_pars_fragment:A_,envmap_pars_fragment:E_,envmap_pars_vertex:w_,envmap_physical_pars_fragment:B_,envmap_vertex:R_,fog_vertex:C_,fog_pars_vertex:P_,fog_fragment:L_,fog_pars_fragment:I_,gradientmap_pars_fragment:D_,lightmap_pars_fragment:N_,lights_lambert_fragment:U_,lights_lambert_pars_fragment:O_,lights_pars_begin:F_,lights_toon_fragment:k_,lights_toon_pars_fragment:z_,lights_phong_fragment:H_,lights_phong_pars_fragment:V_,lights_physical_fragment:G_,lights_physical_pars_fragment:W_,lights_fragment_begin:X_,lights_fragment_maps:q_,lights_fragment_end:Y_,logdepthbuf_fragment:j_,logdepthbuf_pars_fragment:K_,logdepthbuf_pars_vertex:Z_,logdepthbuf_vertex:$_,map_fragment:J_,map_pars_fragment:Q_,map_particle_fragment:eg,map_particle_pars_fragment:tg,metalnessmap_fragment:ng,metalnessmap_pars_fragment:ig,morphinstance_vertex:rg,morphcolor_vertex:sg,morphnormal_vertex:og,morphtarget_pars_vertex:ag,morphtarget_vertex:lg,normal_fragment_begin:cg,normal_fragment_maps:hg,normal_pars_fragment:ug,normal_pars_vertex:dg,normal_vertex:fg,normalmap_pars_fragment:pg,clearcoat_normal_fragment_begin:mg,clearcoat_normal_fragment_maps:_g,clearcoat_pars_fragment:gg,iridescence_pars_fragment:vg,opaque_fragment:xg,packing:yg,premultiplied_alpha_fragment:Mg,project_vertex:Sg,dithering_fragment:Tg,dithering_pars_fragment:bg,roughnessmap_fragment:Ag,roughnessmap_pars_fragment:Eg,shadowmap_pars_fragment:wg,shadowmap_pars_vertex:Rg,shadowmap_vertex:Cg,shadowmask_pars_fragment:Pg,skinbase_vertex:Lg,skinning_pars_vertex:Ig,skinning_vertex:Dg,skinnormal_vertex:Ng,specularmap_fragment:Ug,specularmap_pars_fragment:Og,tonemapping_fragment:Fg,tonemapping_pars_fragment:Bg,transmission_fragment:kg,transmission_pars_fragment:zg,uv_pars_fragment:Hg,uv_pars_vertex:Vg,uv_vertex:Gg,worldpos_vertex:Wg,background_vert:Xg,background_frag:qg,backgroundCube_vert:Yg,backgroundCube_frag:jg,cube_vert:Kg,cube_frag:Zg,depth_vert:$g,depth_frag:Jg,distanceRGBA_vert:Qg,distanceRGBA_frag:e0,equirect_vert:t0,equirect_frag:n0,linedashed_vert:i0,linedashed_frag:r0,meshbasic_vert:s0,meshbasic_frag:o0,meshlambert_vert:a0,meshlambert_frag:l0,meshmatcap_vert:c0,meshmatcap_frag:h0,meshnormal_vert:u0,meshnormal_frag:d0,meshphong_vert:f0,meshphong_frag:p0,meshphysical_vert:m0,meshphysical_frag:_0,meshtoon_vert:g0,meshtoon_frag:v0,points_vert:x0,points_frag:y0,shadow_vert:M0,shadow_frag:S0,sprite_vert:T0,sprite_frag:b0},ne={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Un={basic:{uniforms:Ft([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Ft([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new we(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Ft([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Ft([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Ft([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new we(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Ft([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Ft([ne.points,ne.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Ft([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Ft([ne.common,ne.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Ft([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Ft([ne.sprite,ne.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Ft([ne.common,ne.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Ft([ne.lights,ne.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Un.physical={uniforms:Ft([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const _o={r:0,b:0,g:0},zi=new zn,A0=new Ce;function E0(s,e,t,n,i,r,o){const a=new we(0);let c=r===!0?0:1,h,d,l=null,u=0,f=null;function _(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?t:e).get(M)),M}function g(v){let M=!1;const x=_(v);x===null?p(a,c):x&&x.isColor&&(p(x,1),M=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,M){const x=_(M);x&&(x.isCubeTexture||x.mapping===na)?(d===void 0&&(d=new Wt(new Ys(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:Wr(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(w,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),zi.copy(M.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(A0.makeRotationFromEuler(zi)),d.material.toneMapped=Be.getTransfer(x.colorSpace)!==Qe,(l!==x||u!==x.version||f!==s.toneMapping)&&(d.material.needsUpdate=!0,l=x,u=x.version,f=s.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(h===void 0&&(h=new Wt(new sa(2,2),new Pi({name:"BackgroundMaterial",uniforms:Wr(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=Be.getTransfer(x.colorSpace)!==Qe,x.matrixAutoUpdate===!0&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),(l!==x||u!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,l=x,u=x.version,f=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null))}function p(v,M){v.getRGB(_o,Fd(s)),n.buffers.color.setClear(_o.r,_o.g,_o.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:g,addToRenderList:m}}function w0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(T,L,z,O,G){let q=!1;const V=l(O,z,L);r!==V&&(r=V,h(r.object)),q=f(T,O,z,G),q&&_(T,O,z,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,x(T,L,z,O),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return s.createVertexArray()}function h(T){return s.bindVertexArray(T)}function d(T){return s.deleteVertexArray(T)}function l(T,L,z){const O=z.wireframe===!0;let G=n[T.id];G===void 0&&(G={},n[T.id]=G);let q=G[L.id];q===void 0&&(q={},G[L.id]=q);let V=q[O];return V===void 0&&(V=u(c()),q[O]=V),V}function u(T){const L=[],z=[],O=[];for(let G=0;G<t;G++)L[G]=0,z[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:O,object:T,attributes:{},index:null}}function f(T,L,z,O){const G=r.attributes,q=L.attributes;let V=0;const Y=z.getAttributes();for(const H in Y)if(Y[H].location>=0){const ae=G[H];let pe=q[H];if(pe===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(pe=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(pe=T.instanceColor)),ae===void 0||ae.attribute!==pe||pe&&ae.data!==pe.data)return!0;V++}return r.attributesNum!==V||r.index!==O}function _(T,L,z,O){const G={},q=L.attributes;let V=0;const Y=z.getAttributes();for(const H in Y)if(Y[H].location>=0){let ae=q[H];ae===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(ae=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(ae=T.instanceColor));const pe={};pe.attribute=ae,ae&&ae.data&&(pe.data=ae.data),G[H]=pe,V++}r.attributes=G,r.attributesNum=V,r.index=O}function g(){const T=r.newAttributes;for(let L=0,z=T.length;L<z;L++)T[L]=0}function m(T){p(T,0)}function p(T,L){const z=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;z[T]=1,O[T]===0&&(s.enableVertexAttribArray(T),O[T]=1),G[T]!==L&&(s.vertexAttribDivisor(T,L),G[T]=L)}function v(){const T=r.newAttributes,L=r.enabledAttributes;for(let z=0,O=L.length;z<O;z++)L[z]!==T[z]&&(s.disableVertexAttribArray(z),L[z]=0)}function M(T,L,z,O,G,q,V){V===!0?s.vertexAttribIPointer(T,L,z,G,q):s.vertexAttribPointer(T,L,z,O,G,q)}function x(T,L,z,O){g();const G=O.attributes,q=z.getAttributes(),V=L.defaultAttributeValues;for(const Y in q){const H=q[Y];if(H.location>=0){let te=G[Y];if(te===void 0&&(Y==="instanceMatrix"&&T.instanceMatrix&&(te=T.instanceMatrix),Y==="instanceColor"&&T.instanceColor&&(te=T.instanceColor)),te!==void 0){const ae=te.normalized,pe=te.itemSize,Ae=e.get(te);if(Ae===void 0)continue;const Ye=Ae.buffer,X=Ae.type,J=Ae.bytesPerElement,ve=X===s.INT||X===s.UNSIGNED_INT||te.gpuType===xc;if(te.isInterleavedBufferAttribute){const se=te.data,be=se.stride,Pe=te.offset;if(se.isInstancedInterleavedBuffer){for(let Oe=0;Oe<H.locationSize;Oe++)p(H.location+Oe,se.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Oe=0;Oe<H.locationSize;Oe++)m(H.location+Oe);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let Oe=0;Oe<H.locationSize;Oe++)M(H.location+Oe,pe/H.locationSize,X,ae,be*J,(Pe+pe/H.locationSize*Oe)*J,ve)}else{if(te.isInstancedBufferAttribute){for(let se=0;se<H.locationSize;se++)p(H.location+se,te.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let se=0;se<H.locationSize;se++)m(H.location+se);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let se=0;se<H.locationSize;se++)M(H.location+se,pe/H.locationSize,X,ae,pe*J,pe/H.locationSize*se*J,ve)}}else if(V!==void 0){const ae=V[Y];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(H.location,ae);break;case 3:s.vertexAttrib3fv(H.location,ae);break;case 4:s.vertexAttrib4fv(H.location,ae);break;default:s.vertexAttrib1fv(H.location,ae)}}}}v()}function w(){P();for(const T in n){const L=n[T];for(const z in L){const O=L[z];for(const G in O)d(O[G].object),delete O[G];delete L[z]}delete n[T]}}function E(T){if(n[T.id]===void 0)return;const L=n[T.id];for(const z in L){const O=L[z];for(const G in O)d(O[G].object),delete O[G];delete L[z]}delete n[T.id]}function A(T){for(const L in n){const z=n[L];if(z[T.id]===void 0)continue;const O=z[T.id];for(const G in O)d(O[G].object),delete O[G];delete z[T.id]}}function P(){y(),o=!0,r!==i&&(r=i,h(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function R0(s,e,t){let n;function i(h){n=h}function r(h,d){s.drawArrays(n,h,d),t.update(d,n,1)}function o(h,d,l){l!==0&&(s.drawArraysInstanced(n,h,d,l),t.update(d,n,l))}function a(h,d,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,l);let f=0;for(let _=0;_<l;_++)f+=d[_];t.update(f,n,1)}function c(h,d,l,u){if(l===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<h.length;_++)o(h[_],d[_],u[_]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,d,0,u,0,l);let _=0;for(let g=0;g<l;g++)_+=d[g]*u[g];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function C0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==pn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===qs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==li&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==wn&&!P)}function c(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const d=c(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const l=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:l,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:w,maxSamples:E}}function P0(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ni,a=new De,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,u){const f=l.length!==0||u||n!==0||i;return i=u,n=l.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,u){t=d(l,u,0)},this.setState=function(l,u,f){const _=l.clippingPlanes,g=l.clipIntersection,m=l.clipShadows,p=s.get(l);if(!i||_===null||_.length===0||r&&!m)r?d(null):h();else{const v=r?0:n,M=v*4;let x=p.clippingState||null;c.value=x,x=d(_,u,M,f);for(let w=0;w!==M;++w)x[w]=t[w];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(l,u,f,_){const g=l!==null?l.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=f+g*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=f;M!==g;++M,x+=4)o.copy(l[M]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function L0(s){let e=new WeakMap;function t(o,a){return a===yl?o.mapping=Br:a===Ml&&(o.mapping=kr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===yl||a===Ml)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const h=new Vm(c.height);return h.fromEquirectangularTexture(s,o),e.set(o,h),o.addEventListener("dispose",i),t(h.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class oa extends Bd{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Er=4,Gh=[.125,.215,.35,.446,.526,.582],ji=20,Ua=new oa,Wh=new we;let Oa=null,Fa=0,Ba=0,ka=!1;const Xi=(1+Math.sqrt(5))/2,yr=1/Xi,Xh=[new C(-Xi,yr,0),new C(Xi,yr,0),new C(-yr,0,Xi),new C(yr,0,Xi),new C(0,Xi,-yr),new C(0,Xi,yr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class qh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Oa=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oa,Fa,Ba),this._renderer.xr.enabled=ka,e.scissorTest=!1,go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Br||e.mapping===kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oa=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:qs,format:pn,colorSpace:Ut,depthBuffer:!1},i=Yh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I0(r)),this._blurMaterial=D0(r,e,t)}return i}_compileMaterial(e){const t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,Ua)}_sceneToCubeUV(e,t,n,i){const a=new Gt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,l=d.autoClear,u=d.toneMapping;d.getClearColor(Wh),d.toneMapping=wi,d.autoClear=!1;const f=new Rn({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),_=new Wt(new Ys,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(Wh),g=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(h[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,h[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,h[p]));const M=this._cubeSize;go(i,v*M,p>2?M:0,M,M),d.setRenderTarget(i),g&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=u,d.autoClear=l,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Br||e.mapping===kr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;go(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ua)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xh[(i-r-1)%Xh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,l=new Wt(this._lodPlanes[i],h),u=h.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ji-1),g=r/_,m=isFinite(r)?1+Math.floor(d*g):ji;m>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ji}`);const p=[];let v=0;for(let A=0;A<ji;++A){const P=A/g,y=Math.exp(-P*P/2);p.push(y),A===0?v+=y:A<m&&(v+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:M}=this;u.dTheta.value=_,u.mipInt.value=M-n;const x=this._sizeLods[i],w=3*x*(i>M-Er?i-M+Er:0),E=4*(this._cubeSize-x);go(t,w,E,3*x,2*x),c.setRenderTarget(t),c.render(l,Ua)}}function I0(s){const e=[],t=[],n=[];let i=s;const r=s-Er+1+Gh.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Er?c=Gh[o-s+Er-1]:o===0&&(c=0),n.push(c);const h=1/(a-2),d=-h,l=1+h,u=[d,d,l,d,l,l,d,d,l,l,d,l],f=6,_=6,g=3,m=2,p=1,v=new Float32Array(g*_*f),M=new Float32Array(m*_*f),x=new Float32Array(p*_*f);for(let E=0;E<f;E++){const A=E%3*2/3-1,P=E>2?0:-1,y=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];v.set(y,g*_*E),M.set(u,m*_*E);const T=[E,E,E,E,E,E];x.set(T,p*_*E)}const w=new xn;w.setAttribute("position",new Rt(v,g)),w.setAttribute("uv",new Rt(M,m)),w.setAttribute("faceIndex",new Rt(x,p)),e.push(w),i>Er&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Yh(s,e,t){const n=new nr(s,e,t);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function go(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function D0(s,e,t){const n=new Float32Array(ji),i=new C(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function jh(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Kh(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Cc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function N0(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,h=c===yl||c===Ml,d=c===Br||c===kr;if(h||d){let l=e.get(a);const u=l!==void 0?l.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new qh(s)),l=h?t.fromEquirectangular(a,l):t.fromCubemap(a,l),l.texture.pmremVersion=a.pmremVersion,e.set(a,l),l.texture;if(l!==void 0)return l.texture;{const f=a.image;return h&&f&&f.height>0||d&&f&&i(f)?(t===null&&(t=new qh(s)),l=h?t.fromEquirectangular(a):t.fromCubemap(a),l.texture.pmremVersion=a.pmremVersion,e.set(a,l),a.addEventListener("dispose",r),l.texture):null}}}return a}function i(a){let c=0;const h=6;for(let d=0;d<h;d++)a[d]!==void 0&&c++;return c===h}function r(a){const c=a.target;c.removeEventListener("dispose",r);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function U0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ss("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function O0(s,e,t,n){const i={},r=new WeakMap;function o(l){const u=l.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);for(const _ in u.morphAttributes){const g=u.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}u.removeEventListener("dispose",o),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(l,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function c(l){const u=l.attributes;for(const _ in u)e.update(u[_],s.ARRAY_BUFFER);const f=l.morphAttributes;for(const _ in f){const g=f[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],s.ARRAY_BUFFER)}}function h(l){const u=[],f=l.index,_=l.attributes.position;let g=0;if(f!==null){const v=f.array;g=f.version;for(let M=0,x=v.length;M<x;M+=3){const w=v[M+0],E=v[M+1],A=v[M+2];u.push(w,E,E,A,A,w)}}else if(_!==void 0){const v=_.array;g=_.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const w=M+0,E=M+1,A=M+2;u.push(w,E,E,A,A,w)}}else return;const m=new(Ld(u)?Od:Ud)(u,1);m.version=g;const p=r.get(l);p&&e.remove(p),r.set(l,m)}function d(l){const u=r.get(l);if(u){const f=l.index;f!==null&&u.version<f.version&&h(l)}else h(l);return r.get(l)}return{get:a,update:c,getWireframeAttribute:d}}function F0(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){s.drawElements(n,f,r,u*o),t.update(f,n,1)}function h(u,f,_){_!==0&&(s.drawElementsInstanced(n,f,r,u*o,_),t.update(f,n,_))}function d(u,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,n,1)}function l(u,f,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)h(u[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,g,0,_);let p=0;for(let v=0;v<_;v++)p+=f[v]*g[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=l}function B0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function k0(s,e,t){const n=new WeakMap,i=new qe;function r(o,a,c){const h=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,l=d!==void 0?d.length:0;let u=n.get(a);if(u===void 0||u.count!==l){let T=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",T)};var f=T;u!==void 0&&u.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let w=a.attributes.position.count*x,E=1;w>e.maxTextureSize&&(E=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const A=new Float32Array(w*E*4*l),P=new Dd(A,w,E,l);P.type=wn,P.needsUpdate=!0;const y=x*4;for(let L=0;L<l;L++){const z=p[L],O=v[L],G=M[L],q=w*E*4*L;for(let V=0;V<z.count;V++){const Y=V*y;_===!0&&(i.fromBufferAttribute(z,V),A[q+Y+0]=i.x,A[q+Y+1]=i.y,A[q+Y+2]=i.z,A[q+Y+3]=0),g===!0&&(i.fromBufferAttribute(O,V),A[q+Y+4]=i.x,A[q+Y+5]=i.y,A[q+Y+6]=i.z,A[q+Y+7]=0),m===!0&&(i.fromBufferAttribute(G,V),A[q+Y+8]=i.x,A[q+Y+9]=i.y,A[q+Y+10]=i.z,A[q+Y+11]=G.itemSize===4?i.w:1)}}u={count:l,texture:P,size:new ie(w,E)},n.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<h.length;m++)_+=h[m];const g=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",h)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function z0(s,e,t,n){let i=new WeakMap;function r(c){const h=n.render.frame,d=c.geometry,l=e.get(c,d);if(i.get(l)!==h&&(e.update(l),i.set(l,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==h&&(u.update(),i.set(u,h))}return l}function o(){i=new WeakMap}function a(c){const h=c.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}class Hd extends Tt{constructor(e,t,n,i,r,o,a,c,h,d=Lr){if(d!==Lr&&d!==Vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Lr&&(n=tr),n===void 0&&d===Vr&&(n=Hr),super(null,i,r,o,a,c,d,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zt,this.minFilter=c!==void 0?c:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Vd=new Tt,Zh=new Hd(1,1),Gd=new Dd,Wd=new Em,Xd=new kd,$h=[],Jh=[],Qh=new Float32Array(16),eu=new Float32Array(9),tu=new Float32Array(4);function ts(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=$h[i];if(r===void 0&&(r=new Float32Array(i),$h[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function At(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function aa(s,e){let t=Jh[e];t===void 0&&(t=new Int32Array(e),Jh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function H0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function V0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2fv(this.addr,e),At(t,e)}}function G0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;s.uniform3fv(this.addr,e),At(t,e)}}function W0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4fv(this.addr,e),At(t,e)}}function X0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(bt(t,n))return;tu.set(n),s.uniformMatrix2fv(this.addr,!1,tu),At(t,n)}}function q0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(bt(t,n))return;eu.set(n),s.uniformMatrix3fv(this.addr,!1,eu),At(t,n)}}function Y0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(bt(t,n))return;Qh.set(n),s.uniformMatrix4fv(this.addr,!1,Qh),At(t,n)}}function j0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function K0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2iv(this.addr,e),At(t,e)}}function Z0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;s.uniform3iv(this.addr,e),At(t,e)}}function $0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4iv(this.addr,e),At(t,e)}}function J0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Q0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2uiv(this.addr,e),At(t,e)}}function ev(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;s.uniform3uiv(this.addr,e),At(t,e)}}function tv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4uiv(this.addr,e),At(t,e)}}function nv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Zh.compareFunction=Cd,r=Zh):r=Vd,t.setTexture2D(e||r,i)}function iv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Wd,i)}function rv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Xd,i)}function sv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Gd,i)}function ov(s){switch(s){case 5126:return H0;case 35664:return V0;case 35665:return G0;case 35666:return W0;case 35674:return X0;case 35675:return q0;case 35676:return Y0;case 5124:case 35670:return j0;case 35667:case 35671:return K0;case 35668:case 35672:return Z0;case 35669:case 35673:return $0;case 5125:return J0;case 36294:return Q0;case 36295:return ev;case 36296:return tv;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return iv;case 35680:case 36300:case 36308:case 36293:return rv;case 36289:case 36303:case 36311:case 36292:return sv}}function av(s,e){s.uniform1fv(this.addr,e)}function lv(s,e){const t=ts(e,this.size,2);s.uniform2fv(this.addr,t)}function cv(s,e){const t=ts(e,this.size,3);s.uniform3fv(this.addr,t)}function hv(s,e){const t=ts(e,this.size,4);s.uniform4fv(this.addr,t)}function uv(s,e){const t=ts(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function dv(s,e){const t=ts(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function fv(s,e){const t=ts(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function pv(s,e){s.uniform1iv(this.addr,e)}function mv(s,e){s.uniform2iv(this.addr,e)}function _v(s,e){s.uniform3iv(this.addr,e)}function gv(s,e){s.uniform4iv(this.addr,e)}function vv(s,e){s.uniform1uiv(this.addr,e)}function xv(s,e){s.uniform2uiv(this.addr,e)}function yv(s,e){s.uniform3uiv(this.addr,e)}function Mv(s,e){s.uniform4uiv(this.addr,e)}function Sv(s,e,t){const n=this.cache,i=e.length,r=aa(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Vd,r[o])}function Tv(s,e,t){const n=this.cache,i=e.length,r=aa(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Wd,r[o])}function bv(s,e,t){const n=this.cache,i=e.length,r=aa(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Xd,r[o])}function Av(s,e,t){const n=this.cache,i=e.length,r=aa(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Gd,r[o])}function Ev(s){switch(s){case 5126:return av;case 35664:return lv;case 35665:return cv;case 35666:return hv;case 35674:return uv;case 35675:return dv;case 35676:return fv;case 5124:case 35670:return pv;case 35667:case 35671:return mv;case 35668:case 35672:return _v;case 35669:case 35673:return gv;case 5125:return vv;case 36294:return xv;case 36295:return yv;case 36296:return Mv;case 35678:case 36198:case 36298:case 36306:case 35682:return Sv;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return bv;case 36289:case 36303:case 36311:case 36292:return Av}}class wv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ov(t.type)}}class Rv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ev(t.type)}}class Cv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const za=/(\w+)(\])?(\[|\.)?/g;function nu(s,e){s.seq.push(e),s.map[e.id]=e}function Pv(s,e,t){const n=s.name,i=n.length;for(za.lastIndex=0;;){const r=za.exec(n),o=za.lastIndex;let a=r[1];const c=r[2]==="]",h=r[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===i){nu(t,h===void 0?new wv(a,s,e):new Rv(a,s,e));break}else{let l=t.map[a];l===void 0&&(l=new Cv(a),nu(t,l)),t=l}}}class ko{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Pv(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function iu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Lv=37297;let Iv=0;function Dv(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ru=new De;function Nv(s){Be._getMatrix(ru,Be.workingColorSpace,s);const e=`mat3( ${ru.elements.map(t=>t.toFixed(4))} )`;switch(Be.getTransfer(s)){case ia:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function su(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Dv(s.getShaderSource(e),o)}else return i}function Uv(s,e){const t=Nv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ov(s,e){let t;switch(e){case Op:t="Linear";break;case Fp:t="Reinhard";break;case Bp:t="Cineon";break;case fd:t="ACESFilmic";break;case zp:t="AgX";break;case Hp:t="Neutral";break;case kp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vo=new C;function Fv(){Be.getLuminanceCoefficients(vo);const s=vo.x.toFixed(4),e=vo.y.toFixed(4),t=vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function kv(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zv(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ts(s){return s!==""}function ou(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function au(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(s){return s.replace(Hv,Gv)}const Vv=new Map;function Gv(s,e){let t=Ue[e];if(t===void 0){const n=Vv.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zl(t)}const Wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lu(s){return s.replace(Wv,Xv)}function Xv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function cu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===hd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ud?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function Yv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Br:case kr:e="ENVMAP_TYPE_CUBE";break;case na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case kr:e="ENVMAP_MODE_REFRACTION";break}return e}function Kv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case dd:e="ENVMAP_BLENDING_MULTIPLY";break;case Np:e="ENVMAP_BLENDING_MIX";break;case Up:e="ENVMAP_BLENDING_ADD";break}return e}function Zv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $v(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=qv(t),h=Yv(t),d=jv(t),l=Kv(t),u=Zv(t),f=Bv(t),_=kv(r),g=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ts).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ts).join(`
`),p.length>0&&(p+=`
`)):(m=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),p=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+l:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?Ue.tonemapping_pars_fragment:"",t.toneMapping!==wi?Ov("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Uv("linearToOutputTexel",t.outputColorSpace),Fv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),o=Zl(o),o=ou(o,t),o=au(o,t),a=Zl(a),a=ou(a,t),a=au(a,t),o=lu(o),a=lu(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=v+m+o,x=v+p+a,w=iu(i,i.VERTEX_SHADER,M),E=iu(i,i.FRAGMENT_SHADER,x);i.attachShader(g,w),i.attachShader(g,E),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(L){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(g).trim(),O=i.getShaderInfoLog(w).trim(),G=i.getShaderInfoLog(E).trim();let q=!0,V=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,w,E);else{const Y=su(i,w,"vertex"),H=su(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+Y+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||G==="")&&(V=!1);V&&(L.diagnostics={runnable:q,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(w),i.deleteShader(E),P=new ko(i,g),y=zv(i,g)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(g,Lv)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Iv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=E,this}let Jv=0;class Qv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ex(e),t.set(e,n)),n}}class ex{constructor(e){this.id=Jv++,this.code=e,this.usedTimes=0}}function tx(s,e,t,n,i,r,o){const a=new ra,c=new Qv,h=new Set,d=[],l=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return h.add(y),y===0?"uv":`uv${y}`}function m(y,T,L,z,O){const G=z.fog,q=O.geometry,V=y.isMeshStandardMaterial?z.environment:null,Y=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),H=Y&&Y.mapping===na?Y.image.height:null,te=_[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pe=ae!==void 0?ae.length:0;let Ae=0;q.morphAttributes.position!==void 0&&(Ae=1),q.morphAttributes.normal!==void 0&&(Ae=2),q.morphAttributes.color!==void 0&&(Ae=3);let Ye,X,J,ve;if(te){const $e=Un[te];Ye=$e.vertexShader,X=$e.fragmentShader}else Ye=y.vertexShader,X=y.fragmentShader,c.update(y),J=c.getVertexShaderID(y),ve=c.getFragmentShaderID(y);const se=s.getRenderTarget(),be=s.state.buffers.depth.getReversed(),Pe=O.isInstancedMesh===!0,Oe=O.isBatchedMesh===!0,ct=!!y.map,Ge=!!y.matcap,_t=!!Y,U=!!y.aoMap,ln=!!y.lightMap,ze=!!y.bumpMap,He=!!y.normalMap,Se=!!y.displacementMap,st=!!y.emissiveMap,Me=!!y.metalnessMap,R=!!y.roughnessMap,S=y.anisotropy>0,F=y.clearcoat>0,K=y.dispersion>0,$=y.iridescence>0,j=y.sheen>0,xe=y.transmission>0,oe=S&&!!y.anisotropyMap,ue=F&&!!y.clearcoatMap,We=F&&!!y.clearcoatNormalMap,Q=F&&!!y.clearcoatRoughnessMap,de=$&&!!y.iridescenceMap,Te=$&&!!y.iridescenceThicknessMap,Ee=j&&!!y.sheenColorMap,fe=j&&!!y.sheenRoughnessMap,Ve=!!y.specularMap,Ne=!!y.specularColorMap,it=!!y.specularIntensityMap,I=xe&&!!y.transmissionMap,re=xe&&!!y.thicknessMap,W=!!y.gradientMap,Z=!!y.alphaMap,he=y.alphaTest>0,le=!!y.alphaHash,Le=!!y.extensions;let pt=wi;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(pt=s.toneMapping);const Pt={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:Ye,fragmentShader:X,defines:y.defines,customVertexShaderID:J,customFragmentShaderID:ve,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Oe,batchingColor:Oe&&O._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&O.instanceColor!==null,instancingMorph:Pe&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:se===null?s.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ut,alphaToCoverage:!!y.alphaToCoverage,map:ct,matcap:Ge,envMap:_t,envMapMode:_t&&Y.mapping,envMapCubeUVHeight:H,aoMap:U,lightMap:ln,bumpMap:ze,normalMap:He,displacementMap:u&&Se,emissiveMap:st,normalMapObjectSpace:He&&y.normalMapType===jp,normalMapTangentSpace:He&&y.normalMapType===Rd,metalnessMap:Me,roughnessMap:R,anisotropy:S,anisotropyMap:oe,clearcoat:F,clearcoatMap:ue,clearcoatNormalMap:We,clearcoatRoughnessMap:Q,dispersion:K,iridescence:$,iridescenceMap:de,iridescenceThicknessMap:Te,sheen:j,sheenColorMap:Ee,sheenRoughnessMap:fe,specularMap:Ve,specularColorMap:Ne,specularIntensityMap:it,transmission:xe,transmissionMap:I,thicknessMap:re,gradientMap:W,opaque:y.transparent===!1&&y.blending===Pr&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:he,alphaHash:le,combine:y.combine,mapUv:ct&&g(y.map.channel),aoMapUv:U&&g(y.aoMap.channel),lightMapUv:ln&&g(y.lightMap.channel),bumpMapUv:ze&&g(y.bumpMap.channel),normalMapUv:He&&g(y.normalMap.channel),displacementMapUv:Se&&g(y.displacementMap.channel),emissiveMapUv:st&&g(y.emissiveMap.channel),metalnessMapUv:Me&&g(y.metalnessMap.channel),roughnessMapUv:R&&g(y.roughnessMap.channel),anisotropyMapUv:oe&&g(y.anisotropyMap.channel),clearcoatMapUv:ue&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:We&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:fe&&g(y.sheenRoughnessMap.channel),specularMapUv:Ve&&g(y.specularMap.channel),specularColorMapUv:Ne&&g(y.specularColorMap.channel),specularIntensityMapUv:it&&g(y.specularIntensityMap.channel),transmissionMapUv:I&&g(y.transmissionMap.channel),thicknessMapUv:re&&g(y.thicknessMap.channel),alphaMapUv:Z&&g(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(He||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(ct||Z),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:l,reverseDepthBuffer:be,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Ae,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:pt,decodeVideoTexture:ct&&y.map.isVideoTexture===!0&&Be.getTransfer(y.map.colorSpace)===Qe,decodeVideoTextureEmissive:st&&y.emissiveMap.isVideoTexture===!0&&Be.getTransfer(y.emissiveMap.colorSpace)===Qe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===On,flipSided:y.side===Xt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Le&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&y.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Pt.vertexUv1s=h.has(1),Pt.vertexUv2s=h.has(2),Pt.vertexUv3s=h.has(3),h.clear(),Pt}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)T.push(L),T.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(v(T,y),M(T,y),T.push(s.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function v(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function M(y,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const T=_[y.type];let L;if(T){const z=Un[T];L=Bm.clone(z.uniforms)}else L=y.uniforms;return L}function w(y,T){let L;for(let z=0,O=d.length;z<O;z++){const G=d[z];if(G.cacheKey===T){L=G,++L.usedTimes;break}}return L===void 0&&(L=new $v(s,T,y,r),d.push(L)),L}function E(y){if(--y.usedTimes===0){const T=d.indexOf(y);d[T]=d[d.length-1],d.pop(),y.destroy()}}function A(y){c.remove(y)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:E,releaseShaderCache:A,programs:d,dispose:P}}function nx(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function ix(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function hu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function uu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(l,u,f,_,g,m){let p=s[e];return p===void 0?(p={id:l.id,object:l,geometry:u,material:f,groupOrder:_,renderOrder:l.renderOrder,z:g,group:m},s[e]=p):(p.id=l.id,p.object=l,p.geometry=u,p.material=f,p.groupOrder=_,p.renderOrder=l.renderOrder,p.z=g,p.group=m),e++,p}function a(l,u,f,_,g,m){const p=o(l,u,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(l,u,f,_,g,m){const p=o(l,u,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function h(l,u){t.length>1&&t.sort(l||ix),n.length>1&&n.sort(u||hu),i.length>1&&i.sort(u||hu)}function d(){for(let l=e,u=s.length;l<u;l++){const f=s[l];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:d,sort:h}}function rx(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new uu,s.set(n,[o])):i>=r.length?(o=new uu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function sx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new we};break;case"SpotLight":t={position:new C,direction:new C,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function ox(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ax=0;function lx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function cx(s){const e=new sx,t=ox(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new C);const i=new C,r=new Ce,o=new Ce;function a(h){let d=0,l=0,u=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,v=0,M=0,x=0,w=0,E=0,A=0;h.sort(lx);for(let y=0,T=h.length;y<T;y++){const L=h[y],z=L.color,O=L.intensity,G=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=z.r*O,l+=z.g*O,u+=z.b*O;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],O);A++}else if(L.isDirectionalLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,H=t.get(L);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=L.shadow.matrix,v++}n.directional[f]=V,f++}else if(L.isSpotLight){const V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(z).multiplyScalar(O),V.distance=G,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[g]=V;const Y=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,Y.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[g]=Y.matrix,L.castShadow){const H=t.get(L);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=q,x++}g++}else if(L.isRectAreaLight){const V=e.get(L);V.color.copy(z).multiplyScalar(O),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=V,m++}else if(L.isPointLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const Y=L.shadow,H=t.get(L);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=L.shadow.matrix,M++}n.point[_]=V,_++}else if(L.isHemisphereLight){const V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(O),V.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[p]=V,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=l,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==f||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==M||P.numSpotShadows!==x||P.numSpotMaps!==w||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,P.directionalLength=f,P.pointLength=_,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=M,P.numSpotShadows=x,P.numSpotMaps=w,P.numLightProbes=A,n.version=ax++)}function c(h,d){let l=0,u=0,f=0,_=0,g=0;const m=d.matrixWorldInverse;for(let p=0,v=h.length;p<v;p++){const M=h[p];if(M.isDirectionalLight){const x=n.directional[l];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),l++}else if(M.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function du(s){const e=new cx(s),t=[],n=[];function i(d){h.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function c(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function hx(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new du(s),e.set(i,[a])):r>=o.length?(a=new du(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class ux extends kn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dx extends kn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,px=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mx(s,e,t){let n=new Rc;const i=new ie,r=new ie,o=new qe,a=new ux({depthPacking:Yp}),c=new dx,h={},d=t.maxTextureSize,l={[ai]:Xt,[Xt]:ai,[On]:On},u=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:fx,fragmentShader:px}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const _=new xn;_.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Wt(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hd;let p=this.type;this.render=function(E,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const y=s.getRenderTarget(),T=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Ei),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=p!==Qn&&this.type===Qn,G=p===Qn&&this.type!==Qn;for(let q=0,V=E.length;q<V;q++){const Y=E[q],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const te=H.getFrameExtents();if(i.multiply(te),r.copy(H.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/te.x),i.x=r.x*te.x,H.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/te.y),i.y=r.y*te.y,H.mapSize.y=r.y)),H.map===null||O===!0||G===!0){const pe=this.type!==Qn?{minFilter:zt,magFilter:zt}:{};H.map!==null&&H.map.dispose(),H.map=new nr(i.x,i.y,pe),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const ae=H.getViewportCount();for(let pe=0;pe<ae;pe++){const Ae=H.getViewport(pe);o.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),z.viewport(o),H.updateMatrices(Y,pe),n=H.getFrustum(),x(A,P,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===Qn&&v(H,P),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,T,L)};function v(E,A){const P=e.update(g);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new nr(i.x,i.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(A,null,P,u,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(A,null,P,f,g,null)}function M(E,A,P,y){let T=null;const L=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)T=L;else if(T=P.isPointLight===!0?c:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=T.uuid,O=A.uuid;let G=h[z];G===void 0&&(G={},h[z]=G);let q=G[O];q===void 0&&(q=T.clone(),G[O]=q,A.addEventListener("dispose",w)),T=q}if(T.visible=A.visible,T.wireframe=A.wireframe,y===Qn?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:l[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,P.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const z=s.properties.get(T);z.light=P}return T}function x(E,A,P,y,T){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===Qn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const O=e.update(E),G=E.material;if(Array.isArray(G)){const q=O.groups;for(let V=0,Y=q.length;V<Y;V++){const H=q[V],te=G[H.materialIndex];if(te&&te.visible){const ae=M(E,te,y,T);E.onBeforeShadow(s,E,A,P,O,ae,H),s.renderBufferDirect(P,null,O,ae,E,H),E.onAfterShadow(s,E,A,P,O,ae,H)}}}else if(G.visible){const q=M(E,G,y,T);E.onBeforeShadow(s,E,A,P,O,q,null),s.renderBufferDirect(P,null,O,q,E,null),E.onAfterShadow(s,E,A,P,O,q,null)}}const z=E.children;for(let O=0,G=z.length;O<G;O++)x(z[O],A,P,y,T)}function w(E){E.target.removeEventListener("dispose",w);for(const P in h){const y=h[P],T=E.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}const _x={[fl]:pl,[ml]:vl,[_l]:xl,[Fr]:gl,[pl]:fl,[vl]:ml,[xl]:_l,[gl]:Fr};function gx(s,e){function t(){let I=!1;const re=new qe;let W=null;const Z=new qe(0,0,0,0);return{setMask:function(he){W!==he&&!I&&(s.colorMask(he,he,he,he),W=he)},setLocked:function(he){I=he},setClear:function(he,le,Le,pt,Pt){Pt===!0&&(he*=pt,le*=pt,Le*=pt),re.set(he,le,Le,pt),Z.equals(re)===!1&&(s.clearColor(he,le,Le,pt),Z.copy(re))},reset:function(){I=!1,W=null,Z.set(-1,0,0,0)}}}function n(){let I=!1,re=!1,W=null,Z=null,he=null;return{setReversed:function(le){if(re!==le){const Le=e.get("EXT_clip_control");re?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT);const pt=he;he=null,this.setClear(pt)}re=le},getReversed:function(){return re},setTest:function(le){le?se(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(le){W!==le&&!I&&(s.depthMask(le),W=le)},setFunc:function(le){if(re&&(le=_x[le]),Z!==le){switch(le){case fl:s.depthFunc(s.NEVER);break;case pl:s.depthFunc(s.ALWAYS);break;case ml:s.depthFunc(s.LESS);break;case Fr:s.depthFunc(s.LEQUAL);break;case _l:s.depthFunc(s.EQUAL);break;case gl:s.depthFunc(s.GEQUAL);break;case vl:s.depthFunc(s.GREATER);break;case xl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=le}},setLocked:function(le){I=le},setClear:function(le){he!==le&&(re&&(le=1-le),s.clearDepth(le),he=le)},reset:function(){I=!1,W=null,Z=null,he=null,re=!1}}}function i(){let I=!1,re=null,W=null,Z=null,he=null,le=null,Le=null,pt=null,Pt=null;return{setTest:function($e){I||($e?se(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function($e){re!==$e&&!I&&(s.stencilMask($e),re=$e)},setFunc:function($e,yn,Xn){(W!==$e||Z!==yn||he!==Xn)&&(s.stencilFunc($e,yn,Xn),W=$e,Z=yn,he=Xn)},setOp:function($e,yn,Xn){(le!==$e||Le!==yn||pt!==Xn)&&(s.stencilOp($e,yn,Xn),le=$e,Le=yn,pt=Xn)},setLocked:function($e){I=$e},setClear:function($e){Pt!==$e&&(s.clearStencil($e),Pt=$e)},reset:function(){I=!1,re=null,W=null,Z=null,he=null,le=null,Le=null,pt=null,Pt=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,h=new WeakMap;let d={},l={},u=new WeakMap,f=[],_=null,g=!1,m=null,p=null,v=null,M=null,x=null,w=null,E=null,A=new we(0,0,0),P=0,y=!1,T=null,L=null,z=null,O=null,G=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=Y>=2);let te=null,ae={};const pe=s.getParameter(s.SCISSOR_BOX),Ae=s.getParameter(s.VIEWPORT),Ye=new qe().fromArray(pe),X=new qe().fromArray(Ae);function J(I,re,W,Z){const he=new Uint8Array(4),le=s.createTexture();s.bindTexture(I,le),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Le=0;Le<W;Le++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(re,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,he):s.texImage2D(re+Le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,he);return le}const ve={};ve[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),ve[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ve[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(s.DEPTH_TEST),o.setFunc(Fr),ze(!1),He(mh),se(s.CULL_FACE),U(Ei);function se(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function be(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function Pe(I,re){return l[I]!==re?(s.bindFramebuffer(I,re),l[I]=re,I===s.DRAW_FRAMEBUFFER&&(l[s.FRAMEBUFFER]=re),I===s.FRAMEBUFFER&&(l[s.DRAW_FRAMEBUFFER]=re),!0):!1}function Oe(I,re){let W=f,Z=!1;if(I){W=u.get(re),W===void 0&&(W=[],u.set(re,W));const he=I.textures;if(W.length!==he.length||W[0]!==s.COLOR_ATTACHMENT0){for(let le=0,Le=he.length;le<Le;le++)W[le]=s.COLOR_ATTACHMENT0+le;W.length=he.length,Z=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,Z=!0);Z&&s.drawBuffers(W)}function ct(I){return _!==I?(s.useProgram(I),_=I,!0):!1}const Ge={[Yi]:s.FUNC_ADD,[gp]:s.FUNC_SUBTRACT,[vp]:s.FUNC_REVERSE_SUBTRACT};Ge[xp]=s.MIN,Ge[yp]=s.MAX;const _t={[Mp]:s.ZERO,[Sp]:s.ONE,[Tp]:s.SRC_COLOR,[ul]:s.SRC_ALPHA,[Cp]:s.SRC_ALPHA_SATURATE,[wp]:s.DST_COLOR,[Ap]:s.DST_ALPHA,[bp]:s.ONE_MINUS_SRC_COLOR,[dl]:s.ONE_MINUS_SRC_ALPHA,[Rp]:s.ONE_MINUS_DST_COLOR,[Ep]:s.ONE_MINUS_DST_ALPHA,[Pp]:s.CONSTANT_COLOR,[Lp]:s.ONE_MINUS_CONSTANT_COLOR,[Ip]:s.CONSTANT_ALPHA,[Dp]:s.ONE_MINUS_CONSTANT_ALPHA};function U(I,re,W,Z,he,le,Le,pt,Pt,$e){if(I===Ei){g===!0&&(be(s.BLEND),g=!1);return}if(g===!1&&(se(s.BLEND),g=!0),I!==_p){if(I!==m||$e!==y){if((p!==Yi||x!==Yi)&&(s.blendEquation(s.FUNC_ADD),p=Yi,x=Yi),$e)switch(I){case Pr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _h:s.blendFunc(s.ONE,s.ONE);break;case gh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Pr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _h:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case gh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,M=null,w=null,E=null,A.set(0,0,0),P=0,m=I,y=$e}return}he=he||re,le=le||W,Le=Le||Z,(re!==p||he!==x)&&(s.blendEquationSeparate(Ge[re],Ge[he]),p=re,x=he),(W!==v||Z!==M||le!==w||Le!==E)&&(s.blendFuncSeparate(_t[W],_t[Z],_t[le],_t[Le]),v=W,M=Z,w=le,E=Le),(pt.equals(A)===!1||Pt!==P)&&(s.blendColor(pt.r,pt.g,pt.b,Pt),A.copy(pt),P=Pt),m=I,y=!1}function ln(I,re){I.side===On?be(s.CULL_FACE):se(s.CULL_FACE);let W=I.side===Xt;re&&(W=!W),ze(W),I.blending===Pr&&I.transparent===!1?U(Ei):U(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const Z=I.stencilWrite;a.setTest(Z),Z&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),st(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function ze(I){T!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),T=I)}function He(I){I!==pp?(se(s.CULL_FACE),I!==L&&(I===mh?s.cullFace(s.BACK):I===mp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),L=I}function Se(I){I!==z&&(V&&s.lineWidth(I),z=I)}function st(I,re,W){I?(se(s.POLYGON_OFFSET_FILL),(O!==re||G!==W)&&(s.polygonOffset(re,W),O=re,G=W)):be(s.POLYGON_OFFSET_FILL)}function Me(I){I?se(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function R(I){I===void 0&&(I=s.TEXTURE0+q-1),te!==I&&(s.activeTexture(I),te=I)}function S(I,re,W){W===void 0&&(te===null?W=s.TEXTURE0+q-1:W=te);let Z=ae[W];Z===void 0&&(Z={type:void 0,texture:void 0},ae[W]=Z),(Z.type!==I||Z.texture!==re)&&(te!==W&&(s.activeTexture(W),te=W),s.bindTexture(I,re||ve[I]),Z.type=I,Z.texture=re)}function F(){const I=ae[te];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function We(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(I){Ye.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Ye.copy(I))}function fe(I){X.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),X.copy(I))}function Ve(I,re){let W=h.get(re);W===void 0&&(W=new WeakMap,h.set(re,W));let Z=W.get(I);Z===void 0&&(Z=s.getUniformBlockIndex(re,I.name),W.set(I,Z))}function Ne(I,re){const Z=h.get(re).get(I);c.get(re)!==Z&&(s.uniformBlockBinding(re,Z,I.__bindingPointIndex),c.set(re,Z))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},te=null,ae={},l={},u=new WeakMap,f=[],_=null,g=!1,m=null,p=null,v=null,M=null,x=null,w=null,E=null,A=new we(0,0,0),P=0,y=!1,T=null,L=null,z=null,O=null,G=null,Ye.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:be,bindFramebuffer:Pe,drawBuffers:Oe,useProgram:ct,setBlending:U,setMaterial:ln,setFlipSided:ze,setCullFace:He,setLineWidth:Se,setPolygonOffset:st,setScissorTest:Me,activeTexture:R,bindTexture:S,unbindTexture:F,compressedTexImage2D:K,compressedTexImage3D:$,texImage2D:de,texImage3D:Te,updateUBOMapping:Ve,uniformBlockBinding:Ne,texStorage2D:We,texStorage3D:Q,texSubImage2D:j,texSubImage3D:xe,compressedTexSubImage2D:oe,compressedTexSubImage3D:ue,scissor:Ee,viewport:fe,reset:it}}function fu(s,e,t,n){const i=vx(n);switch(t){case xd:return s*e;case Md:return s*e;case Sd:return s*e*2;case Sc:return s*e/i.components*i.byteLength;case Tc:return s*e/i.components*i.byteLength;case Td:return s*e*2/i.components*i.byteLength;case bc:return s*e*2/i.components*i.byteLength;case yd:return s*e*3/i.components*i.byteLength;case pn:return s*e*4/i.components*i.byteLength;case Ac:return s*e*4/i.components*i.byteLength;case No:case Uo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Oo:case Fo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tl:case Al:return Math.max(s,16)*Math.max(e,8)/4;case Sl:case bl:return Math.max(s,8)*Math.max(e,8)/2;case El:case wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Rl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Il:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Fl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case kl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case zl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Hl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Bo:case Gl:case Wl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case bd:case Xl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ql:case Yl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vx(s){switch(s){case li:case _d:return{byteLength:1,components:1};case Us:case gd:case qs:return{byteLength:2,components:1};case yc:case Mc:return{byteLength:2,components:4};case tr:case xc:case wn:return{byteLength:4,components:1};case vd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function xx(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ie,d=new WeakMap;let l;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,S){return f?new OffscreenCanvas(R,S):Bs("canvas")}function g(R,S,F){let K=1;const $=Me(R);if(($.width>F||$.height>F)&&(K=F/Math.max($.width,$.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(K*$.width),xe=Math.floor(K*$.height);l===void 0&&(l=_(j,xe));const oe=S?_(j,xe):l;return oe.width=j,oe.height=xe,oe.getContext("2d").drawImage(R,0,0,j,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+j+"x"+xe+")."),oe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(R,S,F,K,$=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=S;if(S===s.RED&&(F===s.FLOAT&&(j=s.R32F),F===s.HALF_FLOAT&&(j=s.R16F),F===s.UNSIGNED_BYTE&&(j=s.R8)),S===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(j=s.R8UI),F===s.UNSIGNED_SHORT&&(j=s.R16UI),F===s.UNSIGNED_INT&&(j=s.R32UI),F===s.BYTE&&(j=s.R8I),F===s.SHORT&&(j=s.R16I),F===s.INT&&(j=s.R32I)),S===s.RG&&(F===s.FLOAT&&(j=s.RG32F),F===s.HALF_FLOAT&&(j=s.RG16F),F===s.UNSIGNED_BYTE&&(j=s.RG8)),S===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(j=s.RG8UI),F===s.UNSIGNED_SHORT&&(j=s.RG16UI),F===s.UNSIGNED_INT&&(j=s.RG32UI),F===s.BYTE&&(j=s.RG8I),F===s.SHORT&&(j=s.RG16I),F===s.INT&&(j=s.RG32I)),S===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(j=s.RGB8UI),F===s.UNSIGNED_SHORT&&(j=s.RGB16UI),F===s.UNSIGNED_INT&&(j=s.RGB32UI),F===s.BYTE&&(j=s.RGB8I),F===s.SHORT&&(j=s.RGB16I),F===s.INT&&(j=s.RGB32I)),S===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),F===s.UNSIGNED_INT&&(j=s.RGBA32UI),F===s.BYTE&&(j=s.RGBA8I),F===s.SHORT&&(j=s.RGBA16I),F===s.INT&&(j=s.RGBA32I)),S===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),S===s.RGBA){const xe=$?ia:Be.getTransfer(K);F===s.FLOAT&&(j=s.RGBA32F),F===s.HALF_FLOAT&&(j=s.RGBA16F),F===s.UNSIGNED_BYTE&&(j=xe===Qe?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(R,S){let F;return R?S===null||S===tr||S===Hr?F=s.DEPTH24_STENCIL8:S===wn?F=s.DEPTH32F_STENCIL8:S===Us&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===tr||S===Hr?F=s.DEPTH_COMPONENT24:S===wn?F=s.DEPTH_COMPONENT32F:S===Us&&(F=s.DEPTH_COMPONENT16),F}function w(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==zt&&R.minFilter!==kt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function E(R){const S=R.target;S.removeEventListener("dispose",E),P(S),S.isVideoTexture&&d.delete(S)}function A(R){const S=R.target;S.removeEventListener("dispose",A),T(S)}function P(R){const S=n.get(R);if(S.__webglInit===void 0)return;const F=R.source,K=u.get(F);if(K){const $=K[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&y(R),Object.keys(K).length===0&&u.delete(F)}n.remove(R)}function y(R){const S=n.get(R);s.deleteTexture(S.__webglTexture);const F=R.source,K=u.get(F);delete K[S.__cacheKey],o.memory.textures--}function T(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let $=0;$<S.__webglFramebuffer[K].length;$++)s.deleteFramebuffer(S.__webglFramebuffer[K][$]);else s.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)s.deleteFramebuffer(S.__webglFramebuffer[K]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const F=R.textures;for(let K=0,$=F.length;K<$;K++){const j=n.get(F[K]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(F[K])}n.remove(R)}let L=0;function z(){L=0}function O(){const R=L;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),L+=1,R}function G(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function q(R,S){const F=n.get(R);if(R.isVideoTexture&&Se(R),R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(F,R,S);return}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+S)}function V(R,S){const F=n.get(R);if(R.version>0&&F.__version!==R.version){X(F,R,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+S)}function Y(R,S){const F=n.get(R);if(R.version>0&&F.__version!==R.version){X(F,R,S);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+S)}function H(R,S){const F=n.get(R);if(R.version>0&&F.__version!==R.version){J(F,R,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+S)}const te={[zr]:s.REPEAT,[Mi]:s.CLAMP_TO_EDGE,[Go]:s.MIRRORED_REPEAT},ae={[zt]:s.NEAREST,[md]:s.NEAREST_MIPMAP_NEAREST,[Ms]:s.NEAREST_MIPMAP_LINEAR,[kt]:s.LINEAR,[Do]:s.LINEAR_MIPMAP_NEAREST,[ri]:s.LINEAR_MIPMAP_LINEAR},pe={[Kp]:s.NEVER,[tm]:s.ALWAYS,[Zp]:s.LESS,[Cd]:s.LEQUAL,[$p]:s.EQUAL,[em]:s.GEQUAL,[Jp]:s.GREATER,[Qp]:s.NOTEQUAL};function Ae(R,S){if(S.type===wn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===kt||S.magFilter===Do||S.magFilter===Ms||S.magFilter===ri||S.minFilter===kt||S.minFilter===Do||S.minFilter===Ms||S.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,te[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,te[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,te[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ae[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ae[S.minFilter]),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,pe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===zt||S.minFilter!==Ms&&S.minFilter!==ri||S.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ye(R,S){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",E));const K=S.source;let $=u.get(K);$===void 0&&($={},u.set(K,$));const j=G(S);if(j!==R.__cacheKey){$[j]===void 0&&($[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),$[j].usedTimes++;const xe=$[R.__cacheKey];xe!==void 0&&($[R.__cacheKey].usedTimes--,xe.usedTimes===0&&y(S)),R.__cacheKey=j,R.__webglTexture=$[j].texture}return F}function X(R,S,F){let K=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=s.TEXTURE_3D);const $=Ye(R,S),j=S.source;t.bindTexture(K,R.__webglTexture,s.TEXTURE0+F);const xe=n.get(j);if(j.version!==xe.__version||$===!0){t.activeTexture(s.TEXTURE0+F);const oe=Be.getPrimaries(Be.workingColorSpace),ue=S.colorSpace===yi?null:Be.getPrimaries(S.colorSpace),We=S.colorSpace===yi||oe===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let Q=g(S.image,!1,i.maxTextureSize);Q=st(S,Q);const de=r.convert(S.format,S.colorSpace),Te=r.convert(S.type);let Ee=M(S.internalFormat,de,Te,S.colorSpace,S.isVideoTexture);Ae(K,S);let fe;const Ve=S.mipmaps,Ne=S.isVideoTexture!==!0,it=xe.__version===void 0||$===!0,I=j.dataReady,re=w(S,Q);if(S.isDepthTexture)Ee=x(S.format===Vr,S.type),it&&(Ne?t.texStorage2D(s.TEXTURE_2D,1,Ee,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,Ee,Q.width,Q.height,0,de,Te,null));else if(S.isDataTexture)if(Ve.length>0){Ne&&it&&t.texStorage2D(s.TEXTURE_2D,re,Ee,Ve[0].width,Ve[0].height);for(let W=0,Z=Ve.length;W<Z;W++)fe=Ve[W],Ne?I&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,fe.width,fe.height,de,Te,fe.data):t.texImage2D(s.TEXTURE_2D,W,Ee,fe.width,fe.height,0,de,Te,fe.data);S.generateMipmaps=!1}else Ne?(it&&t.texStorage2D(s.TEXTURE_2D,re,Ee,Q.width,Q.height),I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,de,Te,Q.data)):t.texImage2D(s.TEXTURE_2D,0,Ee,Q.width,Q.height,0,de,Te,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ne&&it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,re,Ee,Ve[0].width,Ve[0].height,Q.depth);for(let W=0,Z=Ve.length;W<Z;W++)if(fe=Ve[W],S.format!==pn)if(de!==null)if(Ne){if(I)if(S.layerUpdates.size>0){const he=fu(fe.width,fe.height,S.format,S.type);for(const le of S.layerUpdates){const Le=fe.data.subarray(le*he/fe.data.BYTES_PER_ELEMENT,(le+1)*he/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,le,fe.width,fe.height,1,de,Le)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,fe.width,fe.height,Q.depth,de,fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,Ee,fe.width,fe.height,Q.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,fe.width,fe.height,Q.depth,de,Te,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,W,Ee,fe.width,fe.height,Q.depth,0,de,Te,fe.data)}else{Ne&&it&&t.texStorage2D(s.TEXTURE_2D,re,Ee,Ve[0].width,Ve[0].height);for(let W=0,Z=Ve.length;W<Z;W++)fe=Ve[W],S.format!==pn?de!==null?Ne?I&&t.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,W,Ee,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?I&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,fe.width,fe.height,de,Te,fe.data):t.texImage2D(s.TEXTURE_2D,W,Ee,fe.width,fe.height,0,de,Te,fe.data)}else if(S.isDataArrayTexture)if(Ne){if(it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,re,Ee,Q.width,Q.height,Q.depth),I)if(S.layerUpdates.size>0){const W=fu(Q.width,Q.height,S.format,S.type);for(const Z of S.layerUpdates){const he=Q.data.subarray(Z*W/Q.data.BYTES_PER_ELEMENT,(Z+1)*W/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,de,Te,he)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,de,Te,Q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ee,Q.width,Q.height,Q.depth,0,de,Te,Q.data);else if(S.isData3DTexture)Ne?(it&&t.texStorage3D(s.TEXTURE_3D,re,Ee,Q.width,Q.height,Q.depth),I&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,de,Te,Q.data)):t.texImage3D(s.TEXTURE_3D,0,Ee,Q.width,Q.height,Q.depth,0,de,Te,Q.data);else if(S.isFramebufferTexture){if(it)if(Ne)t.texStorage2D(s.TEXTURE_2D,re,Ee,Q.width,Q.height);else{let W=Q.width,Z=Q.height;for(let he=0;he<re;he++)t.texImage2D(s.TEXTURE_2D,he,Ee,W,Z,0,de,Te,null),W>>=1,Z>>=1}}else if(Ve.length>0){if(Ne&&it){const W=Me(Ve[0]);t.texStorage2D(s.TEXTURE_2D,re,Ee,W.width,W.height)}for(let W=0,Z=Ve.length;W<Z;W++)fe=Ve[W],Ne?I&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,de,Te,fe):t.texImage2D(s.TEXTURE_2D,W,Ee,de,Te,fe);S.generateMipmaps=!1}else if(Ne){if(it){const W=Me(Q);t.texStorage2D(s.TEXTURE_2D,re,Ee,W.width,W.height)}I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,de,Te,Q)}else t.texImage2D(s.TEXTURE_2D,0,Ee,de,Te,Q);m(S)&&p(K),xe.__version=j.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function J(R,S,F){if(S.image.length!==6)return;const K=Ye(R,S),$=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+F);const j=n.get($);if($.version!==j.__version||K===!0){t.activeTexture(s.TEXTURE0+F);const xe=Be.getPrimaries(Be.workingColorSpace),oe=S.colorSpace===yi?null:Be.getPrimaries(S.colorSpace),ue=S.colorSpace===yi||xe===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const We=S.isCompressedTexture||S.image[0].isCompressedTexture,Q=S.image[0]&&S.image[0].isDataTexture,de=[];for(let Z=0;Z<6;Z++)!We&&!Q?de[Z]=g(S.image[Z],!0,i.maxCubemapSize):de[Z]=Q?S.image[Z].image:S.image[Z],de[Z]=st(S,de[Z]);const Te=de[0],Ee=r.convert(S.format,S.colorSpace),fe=r.convert(S.type),Ve=M(S.internalFormat,Ee,fe,S.colorSpace),Ne=S.isVideoTexture!==!0,it=j.__version===void 0||K===!0,I=$.dataReady;let re=w(S,Te);Ae(s.TEXTURE_CUBE_MAP,S);let W;if(We){Ne&&it&&t.texStorage2D(s.TEXTURE_CUBE_MAP,re,Ve,Te.width,Te.height);for(let Z=0;Z<6;Z++){W=de[Z].mipmaps;for(let he=0;he<W.length;he++){const le=W[he];S.format!==pn?Ee!==null?Ne?I&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,0,0,le.width,le.height,Ee,le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,Ve,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,0,0,le.width,le.height,Ee,fe,le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,Ve,le.width,le.height,0,Ee,fe,le.data)}}}else{if(W=S.mipmaps,Ne&&it){W.length>0&&re++;const Z=Me(de[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,re,Ve,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){Ne?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,de[Z].width,de[Z].height,Ee,fe,de[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,de[Z].width,de[Z].height,0,Ee,fe,de[Z].data);for(let he=0;he<W.length;he++){const Le=W[he].image[Z].image;Ne?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,0,0,Le.width,Le.height,Ee,fe,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,Ve,Le.width,Le.height,0,Ee,fe,Le.data)}}else{Ne?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ee,fe,de[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,Ee,fe,de[Z]);for(let he=0;he<W.length;he++){const le=W[he];Ne?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,0,0,Ee,fe,le.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,Ve,Ee,fe,le.image[Z])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),j.__version=$.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ve(R,S,F,K,$,j){const xe=r.convert(F.format,F.colorSpace),oe=r.convert(F.type),ue=M(F.internalFormat,xe,oe,F.colorSpace),We=n.get(S),Q=n.get(F);if(Q.__renderTarget=S,!We.__hasExternalTextures){const de=Math.max(1,S.width>>j),Te=Math.max(1,S.height>>j);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,j,ue,de,Te,S.depth,0,xe,oe,null):t.texImage2D($,j,ue,de,Te,0,xe,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),He(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,$,Q.__webglTexture,0,ze(S)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,$,Q.__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function se(R,S,F){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer){const K=S.depthTexture,$=K&&K.isDepthTexture?K.type:null,j=x(S.stencilBuffer,$),xe=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=ze(S);He(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,j,S.width,S.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,j,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,j,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,R)}else{const K=S.textures;for(let $=0;$<K.length;$++){const j=K[$],xe=r.convert(j.format,j.colorSpace),oe=r.convert(j.type),ue=M(j.internalFormat,xe,oe,j.colorSpace),We=ze(S);F&&He(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,We,ue,S.width,S.height):He(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,We,ue,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ue,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function be(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const $=K.__webglTexture,j=ze(S);if(S.depthTexture.format===Lr)He(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(S.depthTexture.format===Vr)He(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Pe(R){const S=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const $=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",$)};K.addEventListener("dispose",$),S.__depthDisposeCallback=$}S.__boundDepthTexture=K}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");be(S.__webglFramebuffer,R)}else if(F){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=s.createRenderbuffer(),se(S.__webglDepthbuffer[K],R,!1);else{const $=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,j)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),se(S.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,$)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(R,S,F){const K=n.get(R);S!==void 0&&ve(K.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Pe(R)}function ct(R){const S=R.texture,F=n.get(R),K=n.get(S);R.addEventListener("dispose",A);const $=R.textures,j=R.isWebGLCubeRenderTarget===!0,xe=$.length>1;if(xe||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=S.version,o.memory.textures++),j){F.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[oe]=[];for(let ue=0;ue<S.mipmaps.length;ue++)F.__webglFramebuffer[oe][ue]=s.createFramebuffer()}else F.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)F.__webglFramebuffer[oe]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(xe)for(let oe=0,ue=$.length;oe<ue;oe++){const We=n.get($[oe]);We.__webglTexture===void 0&&(We.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&He(R)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let oe=0;oe<$.length;oe++){const ue=$[oe];F.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[oe]);const We=r.convert(ue.format,ue.colorSpace),Q=r.convert(ue.type),de=M(ue.internalFormat,We,Q,ue.colorSpace,R.isXRRenderTarget===!0),Te=ze(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,de,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,F.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),se(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Ae(s.TEXTURE_CUBE_MAP,S);for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)ve(F.__webglFramebuffer[oe][ue],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else ve(F.__webglFramebuffer[oe],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(S)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let oe=0,ue=$.length;oe<ue;oe++){const We=$[oe],Q=n.get(We);t.bindTexture(s.TEXTURE_2D,Q.__webglTexture),Ae(s.TEXTURE_2D,We),ve(F.__webglFramebuffer,R,We,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,0),m(We)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,K.__webglTexture),Ae(oe,S),S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)ve(F.__webglFramebuffer[ue],R,S,s.COLOR_ATTACHMENT0,oe,ue);else ve(F.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,oe,0);m(S)&&p(oe),t.unbindTexture()}R.depthBuffer&&Pe(R)}function Ge(R){const S=R.textures;for(let F=0,K=S.length;F<K;F++){const $=S[F];if(m($)){const j=v(R),xe=n.get($).__webglTexture;t.bindTexture(j,xe),p(j),t.unbindTexture()}}}const _t=[],U=[];function ln(R){if(R.samples>0){if(He(R)===!1){const S=R.textures,F=R.width,K=R.height;let $=s.COLOR_BUFFER_BIT;const j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=n.get(R),oe=S.length>1;if(oe)for(let ue=0;ue<S.length;ue++)t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ue=0;ue<S.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xe.__webglColorRenderbuffer[ue]);const We=n.get(S[ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,We,0)}s.blitFramebuffer(0,0,F,K,0,0,F,K,$,s.NEAREST),c===!0&&(_t.length=0,U.length=0,_t.push(s.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.resolveDepthBuffer===!1&&(_t.push(j),U.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let ue=0;ue<S.length;ue++){t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,xe.__webglColorRenderbuffer[ue]);const We=n.get(S[ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,We,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const S=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function ze(R){return Math.min(i.maxSamples,R.samples)}function He(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Se(R){const S=o.render.frame;d.get(R)!==S&&(d.set(R,S),R.update())}function st(R,S){const F=R.colorSpace,K=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Ut&&F!==yi&&(Be.getTransfer(F)===Qe?(K!==pn||$!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}function Me(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=Oe,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=He}function yx(s,e){function t(n,i=yi){let r;const o=Be.getTransfer(i);if(n===li)return s.UNSIGNED_BYTE;if(n===yc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Mc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===vd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===_d)return s.BYTE;if(n===gd)return s.SHORT;if(n===Us)return s.UNSIGNED_SHORT;if(n===xc)return s.INT;if(n===tr)return s.UNSIGNED_INT;if(n===wn)return s.FLOAT;if(n===qs)return s.HALF_FLOAT;if(n===xd)return s.ALPHA;if(n===yd)return s.RGB;if(n===pn)return s.RGBA;if(n===Md)return s.LUMINANCE;if(n===Sd)return s.LUMINANCE_ALPHA;if(n===Lr)return s.DEPTH_COMPONENT;if(n===Vr)return s.DEPTH_STENCIL;if(n===Sc)return s.RED;if(n===Tc)return s.RED_INTEGER;if(n===Td)return s.RG;if(n===bc)return s.RG_INTEGER;if(n===Ac)return s.RGBA_INTEGER;if(n===No||n===Uo||n===Oo||n===Fo)if(o===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===No)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===No)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sl||n===Tl||n===bl||n===Al)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===El||n===wl||n===Rl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===El||n===wl)return o===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Cl||n===Pl||n===Ll||n===Il||n===Dl||n===Nl||n===Ul||n===Ol||n===Fl||n===Bl||n===kl||n===zl||n===Hl||n===Vl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ll)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Il)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ul)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ol)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bo||n===Gl||n===Wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Bo)return o===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bd||n===Xl||n===ql||n===Yl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Bo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ql)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class Mx extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ki extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sx={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(h,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=h.joints["index-finger-tip"],l=h.joints["thumb-tip"],u=d.position.distanceTo(l.position),f=.02,_=.005;h.inputState.pinching&&u>f+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&u<=f-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sx)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ki;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Tx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ax{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Tt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Pi({vertexShader:Tx,fragmentShader:bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wt(new sa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ex extends Di{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,h=null,d=null,l=null,u=null,f=null,_=null;const g=new Ax,m=t.getContextAttributes();let p=null,v=null;const M=[],x=[],w=new ie;let E=null;const A=new Gt;A.viewport=new qe;const P=new Gt;P.viewport=new qe;const y=[A,P],T=new Mx;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=M[X];return J===void 0&&(J=new Ha,M[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=M[X];return J===void 0&&(J=new Ha,M[X]=J),J.getGripSpace()},this.getHand=function(X){let J=M[X];return J===void 0&&(J=new Ha,M[X]=J),J.getHandSpace()};function O(X){const J=x.indexOf(X.inputSource);if(J===-1)return;const ve=M[J];ve!==void 0&&(ve.update(X.inputSource,X.frame,h||o),ve.dispatchEvent({type:X.type,data:X.inputSource}))}function G(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",q);for(let X=0;X<M.length;X++){const J=x[X];J!==null&&(x[X]=null,M[X].disconnect(J))}L=null,z=null,g.reset(),e.setRenderTarget(p),f=null,u=null,l=null,i=null,v=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(X){h=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return l},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",G),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new nr(f.framebufferWidth,f.framebufferHeight,{format:pn,type:li,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,ve=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=m.stencil?Vr:Lr,ve=m.stencil?Hr:tr);const be={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};l=new XRWebGLBinding(i,t),u=l.createProjectionLayer(be),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new nr(u.textureWidth,u.textureHeight,{format:pn,type:li,depthTexture:new Hd(u.textureWidth,u.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await i.requestReferenceSpace(a),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(X){for(let J=0;J<X.removed.length;J++){const ve=X.removed[J],se=x.indexOf(ve);se>=0&&(x[se]=null,M[se].disconnect(ve))}for(let J=0;J<X.added.length;J++){const ve=X.added[J];let se=x.indexOf(ve);if(se===-1){for(let Pe=0;Pe<M.length;Pe++)if(Pe>=x.length){x.push(ve),se=Pe;break}else if(x[Pe]===null){x[Pe]=ve,se=Pe;break}if(se===-1)break}const be=M[se];be&&be.connect(ve)}}const V=new C,Y=new C;function H(X,J,ve){V.setFromMatrixPosition(J.matrixWorld),Y.setFromMatrixPosition(ve.matrixWorld);const se=V.distanceTo(Y),be=J.projectionMatrix.elements,Pe=ve.projectionMatrix.elements,Oe=be[14]/(be[10]-1),ct=be[14]/(be[10]+1),Ge=(be[9]+1)/be[5],_t=(be[9]-1)/be[5],U=(be[8]-1)/be[0],ln=(Pe[8]+1)/Pe[0],ze=Oe*U,He=Oe*ln,Se=se/(-U+ln),st=Se*-U;if(J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(st),X.translateZ(Se),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),be[10]===-1)X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Me=Oe+Se,R=ct+Se,S=ze-st,F=He+(se-st),K=Ge*ct/R*Me,$=_t*ct/R*Me;X.projectionMatrix.makePerspective(S,F,K,$,Me,R),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function te(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let J=X.near,ve=X.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(ve=g.depthFar)),T.near=P.near=A.near=J,T.far=P.far=A.far=ve,(L!==T.near||z!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),L=T.near,z=T.far),A.layers.mask=X.layers.mask|2,P.layers.mask=X.layers.mask|4,T.layers.mask=A.layers.mask|P.layers.mask;const se=X.parent,be=T.cameras;te(T,se);for(let Pe=0;Pe<be.length;Pe++)te(be[Pe],se);be.length===2?H(T,A,P):T.projectionMatrix.copy(A.projectionMatrix),ae(X,T,se)};function ae(X,J,ve){ve===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(ve.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Gr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(X){c=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(T)};let pe=null;function Ae(X,J){if(d=J.getViewerPose(h||o),_=J,d!==null){const ve=d.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let se=!1;ve.length!==T.cameras.length&&(T.cameras.length=0,se=!0);for(let Pe=0;Pe<ve.length;Pe++){const Oe=ve[Pe];let ct=null;if(f!==null)ct=f.getViewport(Oe);else{const _t=l.getViewSubImage(u,Oe);ct=_t.viewport,Pe===0&&(e.setRenderTargetTextures(v,_t.colorTexture,u.ignoreDepthValues?void 0:_t.depthStencilTexture),e.setRenderTarget(v))}let Ge=y[Pe];Ge===void 0&&(Ge=new Gt,Ge.layers.enable(Pe),Ge.viewport=new qe,y[Pe]=Ge),Ge.matrix.fromArray(Oe.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Oe.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(ct.x,ct.y,ct.width,ct.height),Pe===0&&(T.matrix.copy(Ge.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),se===!0&&T.cameras.push(Ge)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")){const Pe=l.getDepthInformation(ve[0]);Pe&&Pe.isValid&&Pe.texture&&g.init(e,Pe,i.renderState)}}for(let ve=0;ve<M.length;ve++){const se=x[ve],be=M[ve];se!==null&&be!==void 0&&be.update(se,J,h||o)}pe&&pe(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}const Ye=new zd;Ye.setAnimationLoop(Ae),this.setAnimationLoop=function(X){pe=X},this.dispose=function(){}}}const Hi=new zn,wx=new Ce;function Rx(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Fd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),l(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,M):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),M=v.envMap,x=v.envMapRotation;M&&(m.envMap.value=M,Hi.copy(x),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),m.envMapRotation.value.setFromMatrix4(wx.makeRotationFromEuler(Hi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function l(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Cx(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){const x=M.program;n.uniformBlockBinding(v,x)}function h(v,M){let x=i[v.id];x===void 0&&(_(v),x=d(v),i[v.id]=x,v.addEventListener("dispose",m));const w=M.program;n.updateUBOMapping(v,w);const E=e.render.frame;r[v.id]!==E&&(u(v),r[v.id]=E)}function d(v){const M=l();v.__bindingPointIndex=M;const x=s.createBuffer(),w=v.__size,E=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,w,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,x),x}function l(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const M=i[v.id],x=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let E=0,A=x.length;E<A;E++){const P=Array.isArray(x[E])?x[E]:[x[E]];for(let y=0,T=P.length;y<T;y++){const L=P[y];if(f(L,E,y,w)===!0){const z=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let G=0;for(let q=0;q<O.length;q++){const V=O[q],Y=g(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,z+G,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,G),G+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,M,x,w){const E=v.value,A=M+"_"+x;if(w[A]===void 0)return typeof E=="number"||typeof E=="boolean"?w[A]=E:w[A]=E.clone(),!0;{const P=w[A];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return w[A]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function _(v){const M=v.uniforms;let x=0;const w=16;for(let A=0,P=M.length;A<P;A++){const y=Array.isArray(M[A])?M[A]:[M[A]];for(let T=0,L=y.length;T<L;T++){const z=y[T],O=Array.isArray(z.value)?z.value:[z.value];for(let G=0,q=O.length;G<q;G++){const V=O[G],Y=g(V),H=x%w,te=H%Y.boundary,ae=H+te;x+=te,ae!==0&&w-ae<Y.storage&&(x+=w-ae),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=Y.storage}}}const E=x%w;return E>0&&(x+=w-E),v.__size=x,v.__cache={},this}function g(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:h,dispose:p}}class Px{constructor(e={}){const{canvas:t=vm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:l=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const v=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ut,this.toneMapping=wi,this.toneMappingExposure=1;const x=this;let w=!1,E=0,A=0,P=null,y=-1,T=null;const L=new qe,z=new qe;let O=null;const G=new we(0);let q=0,V=t.width,Y=t.height,H=1,te=null,ae=null;const pe=new qe(0,0,V,Y),Ae=new qe(0,0,V,Y);let Ye=!1;const X=new Rc;let J=!1,ve=!1;const se=new Ce,be=new Ce,Pe=new C,Oe=new qe,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function _t(){return P===null?H:1}let U=n;function ln(b,D){return t.getContext(b,D)}try{const b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vc}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",le,!1),U===null){const D="webgl2";if(U=ln(D,b),U===null)throw ln(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ze,He,Se,st,Me,R,S,F,K,$,j,xe,oe,ue,We,Q,de,Te,Ee,fe,Ve,Ne,it,I;function re(){ze=new U0(U),ze.init(),Ne=new yx(U,ze),He=new C0(U,ze,e,Ne),Se=new gx(U,ze),He.reverseDepthBuffer&&u&&Se.buffers.depth.setReversed(!0),st=new B0(U),Me=new nx,R=new xx(U,ze,Se,Me,He,Ne,st),S=new L0(x),F=new N0(x),K=new Xm(U),it=new w0(U,K),$=new O0(U,K,st,it),j=new z0(U,$,K,st),Ee=new k0(U,He,R),Q=new P0(Me),xe=new tx(x,S,F,ze,He,it,Q),oe=new Rx(x,Me),ue=new rx,We=new hx(ze),Te=new E0(x,S,F,Se,j,f,c),de=new mx(x,j,He),I=new Cx(U,st,He,Se),fe=new R0(U,ze,st),Ve=new F0(U,ze,st),st.programs=xe.programs,x.capabilities=He,x.extensions=ze,x.properties=Me,x.renderLists=ue,x.shadowMap=de,x.state=Se,x.info=st}re();const W=new Ex(x,U);this.xr=W,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=ze.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ze.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(V,Y,!1))},this.getSize=function(b){return b.set(V,Y)},this.setSize=function(b,D,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=b,Y=D,t.width=Math.floor(b*H),t.height=Math.floor(D*H),B===!0&&(t.style.width=b+"px",t.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(V*H,Y*H).floor()},this.setDrawingBufferSize=function(b,D,B){V=b,Y=D,H=B,t.width=Math.floor(b*B),t.height=Math.floor(D*B),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(pe)},this.setViewport=function(b,D,B,k){b.isVector4?pe.set(b.x,b.y,b.z,b.w):pe.set(b,D,B,k),Se.viewport(L.copy(pe).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(Ae)},this.setScissor=function(b,D,B,k){b.isVector4?Ae.set(b.x,b.y,b.z,b.w):Ae.set(b,D,B,k),Se.scissor(z.copy(Ae).multiplyScalar(H).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(b){Se.setScissorTest(Ye=b)},this.setOpaqueSort=function(b){te=b},this.setTransparentSort=function(b){ae=b},this.getClearColor=function(b){return b.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(b=!0,D=!0,B=!0){let k=0;if(b){let N=!1;if(P!==null){const ee=P.texture.format;N=ee===Ac||ee===bc||ee===Tc}if(N){const ee=P.texture.type,ce=ee===li||ee===tr||ee===Us||ee===Hr||ee===yc||ee===Mc,me=Te.getClearColor(),_e=Te.getClearAlpha(),Re=me.r,Ie=me.g,ge=me.b;ce?(_[0]=Re,_[1]=Ie,_[2]=ge,_[3]=_e,U.clearBufferuiv(U.COLOR,0,_)):(g[0]=Re,g[1]=Ie,g[2]=ge,g[3]=_e,U.clearBufferiv(U.COLOR,0,g))}else k|=U.COLOR_BUFFER_BIT}D&&(k|=U.DEPTH_BUFFER_BIT),B&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",le,!1),ue.dispose(),We.dispose(),Me.dispose(),S.dispose(),F.dispose(),j.dispose(),it.dispose(),I.dispose(),xe.dispose(),W.dispose(),W.removeEventListener("sessionstart",ah),W.removeEventListener("sessionend",lh),Ui.stop()};function Z(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const b=st.autoReset,D=de.enabled,B=de.autoUpdate,k=de.needsUpdate,N=de.type;re(),st.autoReset=b,de.enabled=D,de.autoUpdate=B,de.needsUpdate=k,de.type=N}function le(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Le(b){const D=b.target;D.removeEventListener("dispose",Le),pt(D)}function pt(b){Pt(b),Me.remove(b)}function Pt(b){const D=Me.get(b).programs;D!==void 0&&(D.forEach(function(B){xe.releaseProgram(B)}),b.isShaderMaterial&&xe.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,B,k,N,ee){D===null&&(D=ct);const ce=N.isMesh&&N.matrixWorld.determinant()<0,me=up(b,D,B,k,N);Se.setMaterial(k,ce);let _e=B.index,Re=1;if(k.wireframe===!0){if(_e=$.getWireframeAttribute(B),_e===void 0)return;Re=2}const Ie=B.drawRange,ge=B.attributes.position;let Xe=Ie.start*Re,rt=(Ie.start+Ie.count)*Re;ee!==null&&(Xe=Math.max(Xe,ee.start*Re),rt=Math.min(rt,(ee.start+ee.count)*Re)),_e!==null?(Xe=Math.max(Xe,0),rt=Math.min(rt,_e.count)):ge!=null&&(Xe=Math.max(Xe,0),rt=Math.min(rt,ge.count));const ot=rt-Xe;if(ot<0||ot===1/0)return;it.setup(N,k,me,B,_e);let Ht,je=fe;if(_e!==null&&(Ht=K.get(_e),je=Ve,je.setIndex(Ht)),N.isMesh)k.wireframe===!0?(Se.setLineWidth(k.wireframeLinewidth*_t()),je.setMode(U.LINES)):je.setMode(U.TRIANGLES);else if(N.isLine){let ye=k.linewidth;ye===void 0&&(ye=1),Se.setLineWidth(ye*_t()),N.isLineSegments?je.setMode(U.LINES):N.isLineLoop?je.setMode(U.LINE_LOOP):je.setMode(U.LINE_STRIP)}else N.isPoints?je.setMode(U.POINTS):N.isSprite&&je.setMode(U.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)je.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))je.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const ye=N._multiDrawStarts,qn=N._multiDrawCounts,Ke=N._multiDrawCount,Mn=_e?K.get(_e).bytesPerElement:1,or=Me.get(k).currentProgram.getUniforms();for(let $t=0;$t<Ke;$t++)or.setValue(U,"_gl_DrawID",$t),je.render(ye[$t]/Mn,qn[$t])}else if(N.isInstancedMesh)je.renderInstances(Xe,ot,N.count);else if(B.isInstancedBufferGeometry){const ye=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,qn=Math.min(B.instanceCount,ye);je.renderInstances(Xe,ot,qn)}else je.render(Xe,ot)};function $e(b,D,B){b.transparent===!0&&b.side===On&&b.forceSinglePass===!1?(b.side=Xt,b.needsUpdate=!0,$s(b,D,B),b.side=ai,b.needsUpdate=!0,$s(b,D,B),b.side=On):$s(b,D,B)}this.compile=function(b,D,B=null){B===null&&(B=b),p=We.get(B),p.init(D),M.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),b!==B&&b.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const k=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ee=N.material;if(ee)if(Array.isArray(ee))for(let ce=0;ce<ee.length;ce++){const me=ee[ce];$e(me,B,N),k.add(me)}else $e(ee,B,N),k.add(ee)}),M.pop(),p=null,k},this.compileAsync=function(b,D,B=null){const k=this.compile(b,D,B);return new Promise(N=>{function ee(){if(k.forEach(function(ce){Me.get(ce).currentProgram.isReady()&&k.delete(ce)}),k.size===0){N(b);return}setTimeout(ee,10)}ze.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let yn=null;function Xn(b){yn&&yn(b)}function ah(){Ui.stop()}function lh(){Ui.start()}const Ui=new zd;Ui.setAnimationLoop(Xn),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(b){yn=b,W.setAnimationLoop(b),b===null?Ui.stop():Ui.start()},W.addEventListener("sessionstart",ah),W.addEventListener("sessionend",lh),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(D),D=W.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,D,P),p=We.get(b,M.length),p.init(D),M.push(p),be.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),X.setFromProjectionMatrix(be),ve=this.localClippingEnabled,J=Q.init(this.clippingPlanes,ve),m=ue.get(b,v.length),m.init(),v.push(m),W.enabled===!0&&W.isPresenting===!0){const ee=x.xr.getDepthSensingMesh();ee!==null&&fa(ee,D,-1/0,x.sortObjects)}fa(b,D,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(te,ae),Ge=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Ge&&Te.addToRenderList(m,b),this.info.render.frame++,J===!0&&Q.beginShadows();const B=p.state.shadowsArray;de.render(B,b,D),J===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,N=m.transmissive;if(p.setupLights(),D.isArrayCamera){const ee=D.cameras;if(N.length>0)for(let ce=0,me=ee.length;ce<me;ce++){const _e=ee[ce];hh(k,N,b,_e)}Ge&&Te.render(b);for(let ce=0,me=ee.length;ce<me;ce++){const _e=ee[ce];ch(m,b,_e,_e.viewport)}}else N.length>0&&hh(k,N,b,D),Ge&&Te.render(b),ch(m,b,D);P!==null&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(x,b,D),it.resetDefaultState(),y=-1,T=null,M.pop(),M.length>0?(p=M[M.length-1],J===!0&&Q.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function fa(b,D,B,k){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||X.intersectsSprite(b)){k&&Oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(be);const ce=j.update(b),me=b.material;me.visible&&m.push(b,ce,me,B,Oe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||X.intersectsObject(b))){const ce=j.update(b),me=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Oe.copy(b.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Oe.copy(ce.boundingSphere.center)),Oe.applyMatrix4(b.matrixWorld).applyMatrix4(be)),Array.isArray(me)){const _e=ce.groups;for(let Re=0,Ie=_e.length;Re<Ie;Re++){const ge=_e[Re],Xe=me[ge.materialIndex];Xe&&Xe.visible&&m.push(b,ce,Xe,B,Oe.z,ge)}}else me.visible&&m.push(b,ce,me,B,Oe.z,null)}}const ee=b.children;for(let ce=0,me=ee.length;ce<me;ce++)fa(ee[ce],D,B,k)}function ch(b,D,B,k){const N=b.opaque,ee=b.transmissive,ce=b.transparent;p.setupLightsView(B),J===!0&&Q.setGlobalState(x.clippingPlanes,B),k&&Se.viewport(L.copy(k)),N.length>0&&Zs(N,D,B),ee.length>0&&Zs(ee,D,B),ce.length>0&&Zs(ce,D,B),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function hh(b,D,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new nr(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?qs:li,minFilter:ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Be.workingColorSpace}));const ee=p.state.transmissionRenderTarget[k.id],ce=k.viewport||L;ee.setSize(ce.z,ce.w);const me=x.getRenderTarget();x.setRenderTarget(ee),x.getClearColor(G),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),Ge&&Te.render(B);const _e=x.toneMapping;x.toneMapping=wi;const Re=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),J===!0&&Q.setGlobalState(x.clippingPlanes,k),Zs(b,B,k),R.updateMultisampleRenderTarget(ee),R.updateRenderTargetMipmap(ee),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ge=0,Xe=D.length;ge<Xe;ge++){const rt=D[ge],ot=rt.object,Ht=rt.geometry,je=rt.material,ye=rt.group;if(je.side===On&&ot.layers.test(k.layers)){const qn=je.side;je.side=Xt,je.needsUpdate=!0,uh(ot,B,k,Ht,je,ye),je.side=qn,je.needsUpdate=!0,Ie=!0}}Ie===!0&&(R.updateMultisampleRenderTarget(ee),R.updateRenderTargetMipmap(ee))}x.setRenderTarget(me),x.setClearColor(G,q),Re!==void 0&&(k.viewport=Re),x.toneMapping=_e}function Zs(b,D,B){const k=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ee=b.length;N<ee;N++){const ce=b[N],me=ce.object,_e=ce.geometry,Re=k===null?ce.material:k,Ie=ce.group;me.layers.test(B.layers)&&uh(me,D,B,_e,Re,Ie)}}function uh(b,D,B,k,N,ee){b.onBeforeRender(x,D,B,k,N,ee),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(x,D,B,k,b,ee),N.transparent===!0&&N.side===On&&N.forceSinglePass===!1?(N.side=Xt,N.needsUpdate=!0,x.renderBufferDirect(B,D,k,N,b,ee),N.side=ai,N.needsUpdate=!0,x.renderBufferDirect(B,D,k,N,b,ee),N.side=On):x.renderBufferDirect(B,D,k,N,b,ee),b.onAfterRender(x,D,B,k,N,ee)}function $s(b,D,B){D.isScene!==!0&&(D=ct);const k=Me.get(b),N=p.state.lights,ee=p.state.shadowsArray,ce=N.state.version,me=xe.getParameters(b,N.state,ee,D,B),_e=xe.getProgramCacheKey(me);let Re=k.programs;k.environment=b.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(b.isMeshStandardMaterial?F:S).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Re===void 0&&(b.addEventListener("dispose",Le),Re=new Map,k.programs=Re);let Ie=Re.get(_e);if(Ie!==void 0){if(k.currentProgram===Ie&&k.lightsStateVersion===ce)return fh(b,me),Ie}else me.uniforms=xe.getUniforms(b),b.onBeforeCompile(me,x),Ie=xe.acquireProgram(me,_e),Re.set(_e,Ie),k.uniforms=me.uniforms;const ge=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ge.clippingPlanes=Q.uniform),fh(b,me),k.needsLights=fp(b),k.lightsStateVersion=ce,k.needsLights&&(ge.ambientLightColor.value=N.state.ambient,ge.lightProbe.value=N.state.probe,ge.directionalLights.value=N.state.directional,ge.directionalLightShadows.value=N.state.directionalShadow,ge.spotLights.value=N.state.spot,ge.spotLightShadows.value=N.state.spotShadow,ge.rectAreaLights.value=N.state.rectArea,ge.ltc_1.value=N.state.rectAreaLTC1,ge.ltc_2.value=N.state.rectAreaLTC2,ge.pointLights.value=N.state.point,ge.pointLightShadows.value=N.state.pointShadow,ge.hemisphereLights.value=N.state.hemi,ge.directionalShadowMap.value=N.state.directionalShadowMap,ge.directionalShadowMatrix.value=N.state.directionalShadowMatrix,ge.spotShadowMap.value=N.state.spotShadowMap,ge.spotLightMatrix.value=N.state.spotLightMatrix,ge.spotLightMap.value=N.state.spotLightMap,ge.pointShadowMap.value=N.state.pointShadowMap,ge.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Ie,k.uniformsList=null,Ie}function dh(b){if(b.uniformsList===null){const D=b.currentProgram.getUniforms();b.uniformsList=ko.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function fh(b,D){const B=Me.get(b);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function up(b,D,B,k,N){D.isScene!==!0&&(D=ct),R.resetTextureUnits();const ee=D.fog,ce=k.isMeshStandardMaterial?D.environment:null,me=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ut,_e=(k.isMeshStandardMaterial?F:S).get(k.envMap||ce),Re=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ie=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),ge=!!B.morphAttributes.position,Xe=!!B.morphAttributes.normal,rt=!!B.morphAttributes.color;let ot=wi;k.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ot=x.toneMapping);const Ht=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,je=Ht!==void 0?Ht.length:0,ye=Me.get(k),qn=p.state.lights;if(J===!0&&(ve===!0||b!==T)){const cn=b===T&&k.id===y;Q.setState(k,b,cn)}let Ke=!1;k.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==qn.state.version||ye.outputColorSpace!==me||N.isBatchedMesh&&ye.batching===!1||!N.isBatchedMesh&&ye.batching===!0||N.isBatchedMesh&&ye.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&ye.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&ye.instancing===!1||!N.isInstancedMesh&&ye.instancing===!0||N.isSkinnedMesh&&ye.skinning===!1||!N.isSkinnedMesh&&ye.skinning===!0||N.isInstancedMesh&&ye.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&ye.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&ye.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&ye.instancingMorph===!1&&N.morphTexture!==null||ye.envMap!==_e||k.fog===!0&&ye.fog!==ee||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Q.numPlanes||ye.numIntersection!==Q.numIntersection)||ye.vertexAlphas!==Re||ye.vertexTangents!==Ie||ye.morphTargets!==ge||ye.morphNormals!==Xe||ye.morphColors!==rt||ye.toneMapping!==ot||ye.morphTargetsCount!==je)&&(Ke=!0):(Ke=!0,ye.__version=k.version);let Mn=ye.currentProgram;Ke===!0&&(Mn=$s(k,D,N));let or=!1,$t=!1,rs=!1;const at=Mn.getUniforms(),In=ye.uniforms;if(Se.useProgram(Mn.program)&&(or=!0,$t=!0,rs=!0),k.id!==y&&(y=k.id,$t=!0),or||T!==b){Se.buffers.depth.getReversed()?(se.copy(b.projectionMatrix),ym(se),Mm(se),at.setValue(U,"projectionMatrix",se)):at.setValue(U,"projectionMatrix",b.projectionMatrix),at.setValue(U,"viewMatrix",b.matrixWorldInverse);const ui=at.map.cameraPosition;ui!==void 0&&ui.setValue(U,Pe.setFromMatrixPosition(b.matrixWorld)),He.logarithmicDepthBuffer&&at.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&at.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),T!==b&&(T=b,$t=!0,rs=!0)}if(N.isSkinnedMesh){at.setOptional(U,N,"bindMatrix"),at.setOptional(U,N,"bindMatrixInverse");const cn=N.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),at.setValue(U,"boneTexture",cn.boneTexture,R))}N.isBatchedMesh&&(at.setOptional(U,N,"batchingTexture"),at.setValue(U,"batchingTexture",N._matricesTexture,R),at.setOptional(U,N,"batchingIdTexture"),at.setValue(U,"batchingIdTexture",N._indirectTexture,R),at.setOptional(U,N,"batchingColorTexture"),N._colorsTexture!==null&&at.setValue(U,"batchingColorTexture",N._colorsTexture,R));const ss=B.morphAttributes;if((ss.position!==void 0||ss.normal!==void 0||ss.color!==void 0)&&Ee.update(N,B,Mn),($t||ye.receiveShadow!==N.receiveShadow)&&(ye.receiveShadow=N.receiveShadow,at.setValue(U,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(In.envMap.value=_e,In.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(In.envMapIntensity.value=D.environmentIntensity),$t&&(at.setValue(U,"toneMappingExposure",x.toneMappingExposure),ye.needsLights&&dp(In,rs),ee&&k.fog===!0&&oe.refreshFogUniforms(In,ee),oe.refreshMaterialUniforms(In,k,H,Y,p.state.transmissionRenderTarget[b.id]),ko.upload(U,dh(ye),In,R)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ko.upload(U,dh(ye),In,R),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&at.setValue(U,"center",N.center),at.setValue(U,"modelViewMatrix",N.modelViewMatrix),at.setValue(U,"normalMatrix",N.normalMatrix),at.setValue(U,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const cn=k.uniformsGroups;for(let ui=0,di=cn.length;ui<di;ui++){const ph=cn[ui];I.update(ph,Mn),I.bind(ph,Mn)}}return Mn}function dp(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function fp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,D,B){Me.get(b.texture).__webglTexture=D,Me.get(b.depthTexture).__webglTexture=B;const k=Me.get(b);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,D){const B=Me.get(b);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,B=0){P=b,E=D,A=B;let k=!0,N=null,ee=!1,ce=!1;if(b){const _e=Me.get(b);if(_e.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(U.FRAMEBUFFER,null),k=!1;else if(_e.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(_e.__hasExternalTextures)R.rebindTextures(b,Me.get(b.texture).__webglTexture,Me.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ge=b.depthTexture;if(_e.__boundDepthTexture!==ge){if(ge!==null&&Me.has(ge)&&(b.width!==ge.image.width||b.height!==ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}const Re=b.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ce=!0);const Ie=Me.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ie[D])?N=Ie[D][B]:N=Ie[D],ee=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?N=Me.get(b).__webglMultisampledFramebuffer:Array.isArray(Ie)?N=Ie[B]:N=Ie,L.copy(b.viewport),z.copy(b.scissor),O=b.scissorTest}else L.copy(pe).multiplyScalar(H).floor(),z.copy(Ae).multiplyScalar(H).floor(),O=Ye;if(Se.bindFramebuffer(U.FRAMEBUFFER,N)&&k&&Se.drawBuffers(b,N),Se.viewport(L),Se.scissor(z),Se.setScissorTest(O),ee){const _e=Me.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,_e.__webglTexture,B)}else if(ce){const _e=Me.get(b.texture),Re=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,_e.__webglTexture,B||0,Re)}y=-1},this.readRenderTargetPixels=function(b,D,B,k,N,ee,ce){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Me.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ce!==void 0&&(me=me[ce]),me){Se.bindFramebuffer(U.FRAMEBUFFER,me);try{const _e=b.texture,Re=_e.format,Ie=_e.type;if(!He.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-k&&B>=0&&B<=b.height-N&&U.readPixels(D,B,k,N,Ne.convert(Re),Ne.convert(Ie),ee)}finally{const _e=P!==null?Me.get(P).__webglFramebuffer:null;Se.bindFramebuffer(U.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(b,D,B,k,N,ee,ce){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Me.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ce!==void 0&&(me=me[ce]),me){const _e=b.texture,Re=_e.format,Ie=_e.type;if(!He.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=b.width-k&&B>=0&&B<=b.height-N){Se.bindFramebuffer(U.FRAMEBUFFER,me);const ge=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ge),U.bufferData(U.PIXEL_PACK_BUFFER,ee.byteLength,U.STREAM_READ),U.readPixels(D,B,k,N,Ne.convert(Re),Ne.convert(Ie),0);const Xe=P!==null?Me.get(P).__webglFramebuffer:null;Se.bindFramebuffer(U.FRAMEBUFFER,Xe);const rt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await xm(U,rt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ge),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ee),U.deleteBuffer(ge),U.deleteSync(rt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,D=null,B=0){b.isTexture!==!0&&(Ss("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,b=arguments[1]);const k=Math.pow(2,-B),N=Math.floor(b.image.width*k),ee=Math.floor(b.image.height*k),ce=D!==null?D.x:0,me=D!==null?D.y:0;R.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,ce,me,N,ee),Se.unbindTexture()},this.copyTextureToTexture=function(b,D,B=null,k=null,N=0){b.isTexture!==!0&&(Ss("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1],D=arguments[2],N=arguments[3]||0,B=null);let ee,ce,me,_e,Re,Ie,ge,Xe,rt;const ot=b.isCompressedTexture?b.mipmaps[N]:b.image;B!==null?(ee=B.max.x-B.min.x,ce=B.max.y-B.min.y,me=B.isBox3?B.max.z-B.min.z:1,_e=B.min.x,Re=B.min.y,Ie=B.isBox3?B.min.z:0):(ee=ot.width,ce=ot.height,me=ot.depth||1,_e=0,Re=0,Ie=0),k!==null?(ge=k.x,Xe=k.y,rt=k.z):(ge=0,Xe=0,rt=0);const Ht=Ne.convert(D.format),je=Ne.convert(D.type);let ye;D.isData3DTexture?(R.setTexture3D(D,0),ye=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(R.setTexture2DArray(D,0),ye=U.TEXTURE_2D_ARRAY):(R.setTexture2D(D,0),ye=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const qn=U.getParameter(U.UNPACK_ROW_LENGTH),Ke=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Mn=U.getParameter(U.UNPACK_SKIP_PIXELS),or=U.getParameter(U.UNPACK_SKIP_ROWS),$t=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ot.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ot.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,_e),U.pixelStorei(U.UNPACK_SKIP_ROWS,Re),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ie);const rs=b.isDataArrayTexture||b.isData3DTexture,at=D.isDataArrayTexture||D.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const In=Me.get(b),ss=Me.get(D),cn=Me.get(In.__renderTarget),ui=Me.get(ss.__renderTarget);Se.bindFramebuffer(U.READ_FRAMEBUFFER,cn.__webglFramebuffer),Se.bindFramebuffer(U.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let di=0;di<me;di++)rs&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Me.get(b).__webglTexture,N,Ie+di),b.isDepthTexture?(at&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Me.get(D).__webglTexture,N,rt+di),U.blitFramebuffer(_e,Re,ee,ce,ge,Xe,ee,ce,U.DEPTH_BUFFER_BIT,U.NEAREST)):at?U.copyTexSubImage3D(ye,N,ge,Xe,rt+di,_e,Re,ee,ce):U.copyTexSubImage2D(ye,N,ge,Xe,rt+di,_e,Re,ee,ce);Se.bindFramebuffer(U.READ_FRAMEBUFFER,null),Se.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else at?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(ye,N,ge,Xe,rt,ee,ce,me,Ht,je,ot.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(ye,N,ge,Xe,rt,ee,ce,me,Ht,ot.data):U.texSubImage3D(ye,N,ge,Xe,rt,ee,ce,me,Ht,je,ot):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,N,ge,Xe,ee,ce,Ht,je,ot.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,N,ge,Xe,ot.width,ot.height,Ht,ot.data):U.texSubImage2D(U.TEXTURE_2D,N,ge,Xe,ee,ce,Ht,je,ot);U.pixelStorei(U.UNPACK_ROW_LENGTH,qn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ke),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Mn),U.pixelStorei(U.UNPACK_SKIP_ROWS,or),U.pixelStorei(U.UNPACK_SKIP_IMAGES,$t),N===0&&D.generateMipmaps&&U.generateMipmap(ye),Se.unbindTexture()},this.copyTextureToTexture3D=function(b,D,B=null,k=null,N=0){return b.isTexture!==!0&&(Ss("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,b=arguments[2],D=arguments[3],N=arguments[4]||0),Ss('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,D,B,k,N)},this.initRenderTarget=function(b){Me.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),Se.unbindTexture()},this.resetState=function(){E=0,A=0,P=null,Se.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Be._getDrawingBufferColorSpace(e),t.unpackColorSpace=Be._getUnpackColorSpace()}}class Lx extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ix{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kl,this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ot=new C;class Pc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Je(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const pu=new C,mu=new qe,_u=new qe,Dx=new C,gu=new Ce,xo=new C,Va=new Ln,vu=new Ce,Ga=new es;class Nx extends Wt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xh,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xo),this.boundingBox.expandByPoint(xo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ln),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xo),this.boundingSphere.expandByPoint(xo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Va.copy(this.boundingSphere),Va.applyMatrix4(i),e.ray.intersectsSphere(Va)!==!1&&(vu.copy(i).invert(),Ga.copy(e.ray).applyMatrix4(vu),!(this.boundingBox!==null&&Ga.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ga)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;mu.fromBufferAttribute(i.attributes.skinIndex,e),_u.fromBufferAttribute(i.attributes.skinWeight,e),pu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=_u.getComponent(r);if(o!==0){const a=mu.getComponent(r);gu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Dx.copy(pu).applyMatrix4(gu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class qd extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Yd extends Tt{constructor(e=null,t=1,n=1,i,r,o,a,c,h=zt,d=zt,l,u){super(null,o,a,c,h,d,i,r,l,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xu=new Ce,Ux=new Ce;class Lc{constructor(e=[],t=[]){this.uuid=Cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ce;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Ux;xu.multiplyMatrices(a,t[r]),xu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Lc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Yd(t,e,e,pn,wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new qd),this.bones.push(o),this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class $l extends Rt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Mr=new Ce,yu=new Ce,yo=[],Mu=new Pn,Ox=new Ce,hs=new Wt,us=new Ln;class Fx extends Wt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $l(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ox)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mr),Mu.copy(e.boundingBox).applyMatrix4(Mr),this.boundingBox.union(Mu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mr),us.copy(e.boundingSphere).applyMatrix4(Mr),this.boundingSphere.union(us)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(hs.geometry=this.geometry,hs.material=this.material,hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),us.copy(this.boundingSphere),us.applyMatrix4(n),e.ray.intersectsSphere(us)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Mr),yu.multiplyMatrices(n,Mr),hs.matrixWorld=yu,hs.raycast(e,yo);for(let o=0,a=yo.length;o<a;o++){const c=yo[o];c.instanceId=r,c.object=this,t.push(c)}yo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $l(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yd(new Float32Array(i*this.count),i,this.count,Sc,wn));const r=this.morphTexture.source.data.data;let o=0;for(let h=0;h<n.length;h++)o+=n[h];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class jd extends kn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qo=new C,Yo=new C,Su=new Ce,ds=new es,Mo=new Ln,Wa=new C,Tu=new C;class Ic extends ft{constructor(e=new xn,t=new jd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)qo.fromBufferAttribute(t,i-1),Yo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=qo.distanceTo(Yo);e.setAttribute("lineDistance",new vn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(i),Mo.radius+=r,e.ray.intersectsSphere(Mo)===!1)return;Su.copy(i).invert(),ds.copy(e.ray).applyMatrix4(Su);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const f=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=h){const p=d.getX(g),v=d.getX(g+1),M=So(this,e,ds,c,p,v);M&&t.push(M)}if(this.isLineLoop){const g=d.getX(_-1),m=d.getX(f),p=So(this,e,ds,c,g,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=h){const p=So(this,e,ds,c,g,g+1);p&&t.push(p)}if(this.isLineLoop){const g=So(this,e,ds,c,_-1,f);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function So(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(qo.fromBufferAttribute(o,i),Yo.fromBufferAttribute(o,r),t.distanceSqToSegment(qo,Yo,Wa,Tu)>n)return;Wa.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Wa);if(!(c<e.near||c>e.far))return{distance:c,point:Tu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const bu=new C,Au=new C;class Bx extends Ic{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)bu.fromBufferAttribute(t,i),Au.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+bu.distanceTo(Au);e.setAttribute("lineDistance",new vn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kx extends Ic{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Kd extends kn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Eu=new Ce,Jl=new es,To=new Ln,bo=new C;class zx extends ft{constructor(e=new xn,t=new Kd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(i),To.radius+=r,e.ray.intersectsSphere(To)===!1)return;Eu.copy(i).invert(),Jl.copy(e.ray).applyMatrix4(Eu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=n.index,l=n.attributes.position;if(h!==null){const u=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let _=u,g=f;_<g;_++){const m=h.getX(_);bo.fromBufferAttribute(l,m),wu(bo,m,c,i,e,t,this)}}else{const u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let _=u,g=f;_<g;_++)bo.fromBufferAttribute(l,_),wu(bo,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function wu(s,e,t,n,i,r,o){const a=Jl.distanceSqToPoint(s);if(a<t){const c=new C;Jl.closestPointToPoint(s,c),c.applyMatrix4(n);const h=i.ray.origin.distanceTo(c);if(h<i.near||h>i.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Hx extends Tt{constructor(e,t,n,i,r,o,a,c,h){super(e,t,n,i,r,o,a,c,h),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:kt,this.magFilter=r!==void 0?r:kt,this.generateMipmaps=!1;const d=this;function l(){d.needsUpdate=!0,e.requestVideoFrameCallback(l)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(l)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,h;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),h=n[i]-o,h<0)a=i+1;else if(h>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const d=n[i],u=n[i+1]-d,f=(o-d)/u;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new ie:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new C,i=[],r=[],o=[],a=new C,c=new Ce;for(let f=0;f<=e;f++){const _=f/e;i[f]=this.getTangentAt(_,new C)}r[0]=new C,o[0]=new C;let h=Number.MAX_VALUE;const d=Math.abs(i[0].x),l=Math.abs(i[0].y),u=Math.abs(i[0].z);d<=h&&(h=d,n.set(1,0,0)),l<=h&&(h=l,n.set(0,1,0)),u<=h&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(vt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,_))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(vt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(i[_],f*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Dc extends Vn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ie){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),l=Math.sin(this.aRotation),u=c-this.aX,f=h-this.aY;c=u*d-f*l+this.aX,h=u*l+f*d+this.aY}return n.set(c,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Vx extends Dc{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Nc(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,h){i(o,a,h*(a-r),h*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,h,d,l){let u=(o-r)/h-(a-r)/(h+d)+(a-o)/d,f=(a-o)/d-(c-o)/(d+l)+(c-a)/l;u*=d,f*=d,i(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Ao=new C,Xa=new Nc,qa=new Nc,Ya=new Nc;class Gx extends Vn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let h,d;this.closed||a>0?h=i[(a-1)%r]:(Ao.subVectors(i[0],i[1]).add(i[0]),h=Ao);const l=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?d=i[(a+2)%r]:(Ao.subVectors(i[r-1],i[r-2]).add(i[r-1]),d=Ao),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(h.distanceToSquared(l),f),g=Math.pow(l.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(d),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Xa.initNonuniformCatmullRom(h.x,l.x,u.x,d.x,_,g,m),qa.initNonuniformCatmullRom(h.y,l.y,u.y,d.y,_,g,m),Ya.initNonuniformCatmullRom(h.z,l.z,u.z,d.z,_,g,m)}else this.curveType==="catmullrom"&&(Xa.initCatmullRom(h.x,l.x,u.x,d.x,this.tension),qa.initCatmullRom(h.y,l.y,u.y,d.y,this.tension),Ya.initCatmullRom(h.z,l.z,u.z,d.z,this.tension));return n.set(Xa.calc(c),qa.calc(c),Ya.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ru(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function Wx(s,e){const t=1-s;return t*t*e}function Xx(s,e){return 2*(1-s)*s*e}function qx(s,e){return s*s*e}function Rs(s,e,t,n){return Wx(s,e)+Xx(s,t)+qx(s,n)}function Yx(s,e){const t=1-s;return t*t*t*e}function jx(s,e){const t=1-s;return 3*t*t*s*e}function Kx(s,e){return 3*(1-s)*s*s*e}function Zx(s,e){return s*s*s*e}function Cs(s,e,t,n,i){return Yx(s,e)+jx(s,t)+Kx(s,n)+Zx(s,i)}class Zd extends Vn{constructor(e=new ie,t=new ie,n=new ie,i=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ie){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cs(e,i.x,r.x,o.x,a.x),Cs(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $x extends Vn{constructor(e=new C,t=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new C){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cs(e,i.x,r.x,o.x,a.x),Cs(e,i.y,r.y,o.y,a.y),Cs(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $d extends Vn{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jx extends Vn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jd extends Vn{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Rs(e,i.x,r.x,o.x),Rs(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qx extends Vn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Rs(e,i.x,r.x,o.x),Rs(e,i.y,r.y,o.y),Rs(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qd extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],h=i[o],d=i[o>i.length-2?i.length-1:o+1],l=i[o>i.length-3?i.length-1:o+2];return n.set(Ru(a,c.x,h.x,d.x,l.x),Ru(a,c.y,h.y,d.y,l.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ie().fromArray(i))}return this}}var Cu=Object.freeze({__proto__:null,ArcCurve:Vx,CatmullRomCurve3:Gx,CubicBezierCurve:Zd,CubicBezierCurve3:$x,EllipseCurve:Dc,LineCurve:$d,LineCurve3:Jx,QuadraticBezierCurve:Jd,QuadraticBezierCurve3:Qx,SplineCurve:Qd});class ey extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),h=c===0?0:1-o/c;return a.getPointAt(h,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let h=0;h<c.length;h++){const d=c[h];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Cu[i.type]().fromJSON(i))}return this}}class ty extends ey{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new $d(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Jd(this.currentPoint.clone(),new ie(e,t),new ie(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Zd(this.currentPoint.clone(),new ie(e,t),new ie(n,i),new ie(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Qd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+h,t+d,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const h=new Dc(e,t,n,i,r,o,a,c);if(this.curves.length>0){const l=h.getPoint(0);l.equals(this.currentPoint)||this.lineTo(l.x,l.y)}this.curves.push(h);const d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Uc extends xn{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=vt(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],h=[],d=1/t,l=new C,u=new ie,f=new C,_=new C,g=new C;let m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(g.x,g.y,g.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),c.push(f.x,f.y,f.z),g.copy(_)}for(let v=0;v<=t;v++){const M=n+v*d*i,x=Math.sin(M),w=Math.cos(M);for(let E=0;E<=e.length-1;E++){l.x=e[E].x*x,l.y=e[E].y,l.z=e[E].x*w,o.push(l.x,l.y,l.z),u.x=v/t,u.y=E/(e.length-1),a.push(u.x,u.y);const A=c[3*E+0]*x,P=c[3*E+1],y=c[3*E+0]*w;h.push(A,P,y)}}for(let v=0;v<t;v++)for(let M=0;M<e.length-1;M++){const x=M+v*e.length,w=x,E=x+e.length,A=x+e.length+1,P=x+1;r.push(w,E,P),r.push(A,P,E)}this.setIndex(r),this.setAttribute("position",new vn(o,3)),this.setAttribute("uv",new vn(a,2)),this.setAttribute("normal",new vn(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.points,e.segments,e.phiStart,e.phiLength)}}class Oc extends Uc{constructor(e=1,t=1,n=4,i=8){const r=new ty;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Oc(e.radius,e.length,e.capSegments,e.radialSegments)}}class Fc extends kn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rd,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gn extends Fc{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Eo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function ny(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function iy(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Pu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function ef(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class js{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ry extends js{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:br,endingEnd:br}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ar:r=e,a=2*t-n;break;case Wo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ar:o=e,c=2*n-t;break;case Wo:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const h=(n-t)*.5,d=this.valueSize;this._weightPrev=h/(t-a),this._weightNext=h/(c-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,h=c-a,d=this._offsetPrev,l=this._offsetNext,u=this._weightPrev,f=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-u*m+2*u*g-u*_,v=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*_+1,M=(-1-f)*m+(1.5+f)*g+.5*_,x=f*m-f*g;for(let w=0;w!==a;++w)r[w]=p*o[d+w]+v*o[h+w]+M*o[c+w]+x*o[l+w];return r}}class tf extends js{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,h=c-a,d=(n-t)/(i-t),l=1-d;for(let u=0;u!==a;++u)r[u]=o[h+u]*l+o[c+u]*d;return r}}class sy extends js{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Wn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Eo(t,this.TimeBufferType),this.values=Eo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Eo(e.times,Array),values:Eo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new sy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ry(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Os:t=this.InterpolantFactoryMethodDiscrete;break;case Fs:t=this.InterpolantFactoryMethodLinear;break;case pa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return Fs;case this.InterpolantFactoryMethodSmooth:return pa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&ny(i))for(let a=0,c=i.length;a!==c;++a){const h=i[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===pa,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const h=e[a],d=e[a+1];if(h!==d&&(a!==1||h!==e[0]))if(i)c=!0;else{const l=a*n,u=l-n,f=l+n;for(let _=0;_!==n;++_){const g=t[l+_];if(g!==t[u+_]||g!==t[f+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const l=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[l+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,h=0;h!==n;++h)t[c+h]=t[a+h];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=Fs;class ns extends Wn{constructor(e,t,n){super(e,t,n)}}ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Os;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;class nf extends Wn{}nf.prototype.ValueTypeName="color";class Xr extends Wn{}Xr.prototype.ValueTypeName="number";class oy extends js{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let h=e*a;for(let d=h+a;h!==d;h+=4)rn.slerpFlat(r,0,o,h-a,o,h,c);return r}}class qr extends Wn{InterpolantFactoryMethodLinear(e){return new oy(this.times,this.values,this.getValueSize(),e)}}qr.prototype.ValueTypeName="quaternion";qr.prototype.InterpolantFactoryMethodSmooth=void 0;class is extends Wn{constructor(e,t,n){super(e,t,n)}}is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Os;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;class Yr extends Wn{}Yr.prototype.ValueTypeName="vector";class Ql{constructor(e="",t=-1,n=[],i=Ec){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Cn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ly(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Wn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],h=[];c.push((a+r-1)%r,a,(a+1)%r),h.push(0,1,0);const d=iy(c);c=Pu(c,1,d),h=Pu(h,1,d),!i&&c[0]===0&&(c.push(r),h.push(h[0])),o.push(new Xr(".morphTargetInfluences["+t[a].name+"]",c,h).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const h=e[a],d=h.name.match(r);if(d&&d.length>1){const l=d[1];let u=i[l];u||(i[l]=u=[]),u.push(h)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(l,u,f,_,g){if(f.length!==0){const m=[],p=[];ef(f,m,p,_),m.length!==0&&g.push(new l(u,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const h=e.hierarchy||[];for(let l=0;l<h.length;l++){const u=h[l].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let _;for(_=0;_<u.length;_++)if(u[_].morphTargets)for(let g=0;g<u[_].morphTargets.length;g++)f[u[_].morphTargets[g]]=-1;for(const g in f){const m=[],p=[];for(let v=0;v!==u[_].morphTargets.length;++v){const M=u[_];m.push(M.time),p.push(M.morphTarget===g?1:0)}i.push(new Xr(".morphTargetInfluence["+g+"]",m,p))}c=f.length*o}else{const f=".bones["+t[l].name+"]";n(Yr,f+".position",u,"pos",i),n(qr,f+".quaternion",u,"rot",i),n(Yr,f+".scale",u,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ay(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xr;case"vector":case"vector2":case"vector3":case"vector4":return Yr;case"color":return nf;case"quaternion":return qr;case"bool":case"boolean":return ns;case"string":return is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function ly(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ay(s.type);if(s.times===void 0){const t=[],n=[];ef(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Si={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class rf{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){a++,r===!1&&i.onStart!==void 0&&i.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,l){return h.push(d,l),this},this.removeHandler=function(d){const l=h.indexOf(d);return l!==-1&&h.splice(l,2),this},this.getHandler=function(d){for(let l=0,u=h.length;l<u;l+=2){const f=h[l],_=h[l+1];if(f.global&&(f.lastIndex=0),f.test(d))return _}return null}}}const cy=new rf;class rr{constructor(e){this.manager=e!==void 0?e:cy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}rr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Jn={};class hy extends Error{constructor(e,t){super(e),this.response=t}}class jo extends rr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Si.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Jn[e]!==void 0){Jn[e].push({onLoad:t,onProgress:n,onError:i});return}Jn[e]=[],Jn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const d=Jn[e],l=h.body.getReader(),u=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),f=u?parseInt(u):0,_=f!==0;let g=0;const m=new ReadableStream({start(p){v();function v(){l.read().then(({done:M,value:x})=>{if(M)p.close();else{g+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let E=0,A=d.length;E<A;E++){const P=d[E];P.onProgress&&P.onProgress(w)}p.enqueue(x),v()}},M=>{p.error(M)})}}});return new Response(m)}else throw new hy(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(c){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return h.json();default:if(a===void 0)return h.text();{const l=/charset="?([^;"\s]*)"?/i.exec(a),u=l&&l[1]?l[1].toLowerCase():void 0,f=new TextDecoder(u);return h.arrayBuffer().then(_=>f.decode(_))}}}).then(h=>{Si.add(e,h);const d=Jn[e];delete Jn[e];for(let l=0,u=d.length;l<u;l++){const f=d[l];f.onLoad&&f.onLoad(h)}}).catch(h=>{const d=Jn[e];if(d===void 0)throw this.manager.itemError(e),h;delete Jn[e];for(let l=0,u=d.length;l<u;l++){const f=d[l];f.onError&&f.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class uy extends rr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Si.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Bs("img");function c(){d(),Si.add(e,this),t&&t(this),r.manager.itemEnd(e)}function h(l){d(),i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){a.removeEventListener("load",c,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class sf extends rr{constructor(e){super(e)}load(e,t,n,i){const r=new Tt,o=new uy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class la extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ja=new Ce,Lu=new C,Iu=new C;class Bc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rc,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Lu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lu),Iu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Iu),t.updateMatrixWorld(),ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class dy extends Bc{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Gr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class fy extends la{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new dy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Du=new Ce,fs=new C,Ka=new C;class py extends Bc{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),fs.setFromMatrixPosition(e.matrixWorld),n.position.copy(fs),Ka.copy(n.position),Ka.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ka),n.updateMatrixWorld(),i.makeTranslation(-fs.x,-fs.y,-fs.z),Du.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Du)}}class my extends la{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new py}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class _y extends Bc{constructor(){super(new oa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class of extends la{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new _y}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gy extends la{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ps{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class vy extends rr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Si.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(h=>{t&&t(h),r.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(h){return Si.add(e,h),t&&t(h),r.manager.itemEnd(e),h}).catch(function(h){i&&i(h),Si.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Si.add(e,c),r.manager.itemStart(e)}}class af{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Nu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Nu(){return performance.now()}class xy{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,h=t+t;c!==h;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){rn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;rn.multiplyQuaternionsFlat(e,o,e,t,e,n),rn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const kc="\\[\\]\\.:\\/",yy=new RegExp("["+kc+"]","g"),zc="[^"+kc+"]",My="[^"+kc.replace("\\.","")+"]",Sy=/((?:WC+[\/:])*)/.source.replace("WC",zc),Ty=/(WCOD+)?/.source.replace("WCOD",My),by=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zc),Ay=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zc),Ey=new RegExp("^"+Sy+Ty+by+Ay+"$"),wy=["material","materials","bones","map"];class Ry{constructor(e,t,n){const i=n||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ze{constructor(e,t,n){this.path=t,this.parsedPath=n||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,n):new Ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yy,"")}static parseTrackName(e){const t=Ey.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);wy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===h){h=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const o=e[i];if(o===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=Ry;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Cy{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:br,endingEnd:br};for(let h=0;h!==o;++h){const d=r[h].createInterpolant(null);a[h]=d,d.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ed,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,h=a.sampleValues;return c[0]=r,c[1]=r+n,h[0]=e/o,h[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case Wp:for(let d=0,l=c.length;d!==l;++d)c[d].evaluate(o),h[d].accumulateAdditive(a);break;case Ec:default:for(let d=0,l=c.length;d!==l;++d)c[d].evaluate(o),h[d].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Gp;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Ad){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const h=e<0;this._setEndings(h,!h,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ar,i.endingEnd=Ar):(e?i.endingStart=this.zeroSlopeAtStart?Ar:br:i.endingStart=Wo,t?i.endingEnd=this.zeroSlopeAtEnd?Ar:br:i.endingEnd=Wo)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}const Py=new Float32Array(1);class Ly extends Di{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,h=this._bindingsByRootAndName;let d=h[c];d===void 0&&(d={},h[c]=d);for(let l=0;l!==r;++l){const u=i[l],f=u.name;let _=d[f];if(_!==void 0)++_.referenceCount,o[l]=_;else{if(_=o[l],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,c,f));continue}const g=t&&t._propertyBindings[l].binding.parsedPath;_=new xy(Ze.create(n,f,g),u.ValueTypeName,u.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,c,f),o[l]=_}a[l].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,h=c[c.length-1],d=e._byClipCacheIndex;h._byClipCacheIndex=d,c[d]=h,c.pop(),e._byClipCacheIndex=null;const l=a.actionByRoot,u=(e._localRoot||this._root).uuid;delete l[u],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],h=e._cacheIndex;c._cacheIndex=h,t[h]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new tf(new Float32Array(2),new Float32Array(2),1,Py),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?Ql.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let h=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ec),c!==void 0){const l=c.actionByRoot[r];if(l!==void 0&&l.blendMode===n)return l;h=c.knownActions[0],o===null&&(o=h._clip)}if(o===null)return null;const d=new Cy(this,o,t,n);return this._bindAction(d,h),this._addInactiveAction(d,a,r),d}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Ql.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let h=0;h!==c;++h)a[h].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const h=o[a];this._deactivateAction(h);const d=h._cacheIndex,l=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,l._cacheIndex=d,t[d]=l,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Uu=new Ce;class Iy{constructor(e,t,n=0,i=1/0){this.ray=new es(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ra,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Uu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uu),this}intersectObject(e,t=!0,n=[]){return ec(e,this,n,t),n.sort(Ou),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ec(e[i],this,n,t);return n.sort(Ou),n}}function Ou(s,e){return s.distance-e.distance}function ec(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)ec(r[o],e,t,!0)}}class Fu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Bu=new C,wo=new C;class lf{constructor(e=new C,t=new C){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Bu.subVectors(e,this.start),wo.subVectors(this.end,this.start);const n=wo.dot(wo);let r=wo.dot(Bu)/n;return t&&(r=vt(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Dy extends Di{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vc);const ku={type:"change"},Hc={type:"start"},cf={type:"end"},Ro=new es,zu=new ni,Ny=Math.cos(70*Pd.DEG2RAD),St=new C,Vt=2*Math.PI,et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Za=1e-6;class Uy extends Dy{constructor(e,t=null){super(e,t),this.state=et.NONE,this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Cr.ROTATE,MIDDLE:Cr.DOLLY,RIGHT:Cr.PAN},this.touches={ONE:Tr.ROTATE,TWO:Tr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new rn,this._lastTargetPosition=new C,this._quat=new rn().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fu,this._sphericalDelta=new Fu,this._scale=1,this._panOffset=new C,this._rotateStart=new ie,this._rotateEnd=new ie,this._rotateDelta=new ie,this._panStart=new ie,this._panEnd=new ie,this._panDelta=new ie,this._dollyStart=new ie,this._dollyEnd=new ie,this._dollyDelta=new ie,this._dollyDirection=new C,this._mouse=new ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Fy.bind(this),this._onPointerDown=Oy.bind(this),this._onPointerUp=By.bind(this),this._onContextMenu=Xy.bind(this),this._onMouseWheel=Hy.bind(this),this._onKeyDown=Vy.bind(this),this._onTouchStart=Gy.bind(this),this._onTouchMove=Wy.bind(this),this._onMouseDown=ky.bind(this),this._onMouseMove=zy.bind(this),this._interceptControlDown=qy.bind(this),this._interceptControlUp=Yy.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ku),this.update(),this.state=et.NONE}update(e=null){const t=this.object.position;St.copy(t).sub(this.target),St.applyQuaternion(this._quat),this._spherical.setFromVector3(St),this.autoRotate&&this.state===et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Vt:n>Math.PI&&(n-=Vt),i<-Math.PI?i+=Vt:i>Math.PI&&(i-=Vt),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(St.setFromSpherical(this._spherical),St.applyQuaternion(this._quatInverse),t.copy(this.target).add(St),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=St.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const h=new C(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(a),this.object.updateMatrixWorld(),o=St.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ro.origin.copy(this.object.position),Ro.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ro.direction))<Ny?this.object.lookAt(this.target):(zu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ro.intersectPlane(zu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Za||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Za||this._lastTargetPosition.distanceToSquared(this.target)>Za?(this.dispatchEvent(ku),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Vt/60*this.autoRotateSpeed*e:Vt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){St.setFromMatrixColumn(t,0),St.multiplyScalar(-e),this._panOffset.add(St)}_panUp(e,t){this.screenSpacePanning===!0?St.setFromMatrixColumn(t,1):(St.setFromMatrixColumn(t,0),St.crossVectors(this.object.up,St)),St.multiplyScalar(e),this._panOffset.add(St)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;St.copy(i).sub(this.target);let r=St.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Vt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Vt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Vt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Vt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Oy(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Fy(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function By(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cf),this.state=et.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ky(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Cr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=et.DOLLY;break;case Cr.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=et.ROTATE}break;case Cr.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=et.PAN}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(Hc)}function zy(s){switch(this.state){case et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Hy(s){this.enabled===!1||this.enableZoom===!1||this.state!==et.NONE||(s.preventDefault(),this.dispatchEvent(Hc),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(cf))}function Vy(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function Gy(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Tr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=et.TOUCH_ROTATE;break;case Tr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=et.TOUCH_PAN;break;default:this.state=et.NONE}break;case 2:switch(this.touches.TWO){case Tr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=et.TOUCH_DOLLY_PAN;break;case Tr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=et.TOUCH_DOLLY_ROTATE;break;default:this.state=et.NONE}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(Hc)}function Wy(s){switch(this._trackPointer(s),this.state){case et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=et.NONE}}function Xy(s){this.enabled!==!1&&s.preventDefault()}function qy(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Yy(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Hu(s,e){if(e===Xp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===jl||e===wd){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===jl)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class jy extends rr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Qy(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new cM(t)}),this.register(function(t){return new hM(t)}),this.register(function(t){return new uM(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new rM(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new Jy(t)}),this.register(function(t){return new oM(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new lM(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new Zy(t)}),this.register(function(t){return new dM(t)}),this.register(function(t){return new fM(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const h=Ps.extractUrlBase(e);o=Ps.resolveURL(h,this.path)}else o=Ps.extractUrlBase(e);this.manager.itemStart(e);const a=function(h){i?i(h):console.error(h),r.manager.itemError(e),r.manager.itemEnd(e)},c=new jo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(h){try{r.parse(h,o,function(d){t(d),r.manager.itemEnd(e)},a)}catch(d){a(d)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===hf){try{o[Fe.KHR_BINARY_GLTF]=new pM(e)}catch(l){i&&i(l);return}r=JSON.parse(o[Fe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new wM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const l=this.pluginCallbacks[d](h);l.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[l.name]=l,o[l.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const l=r.extensionsUsed[d],u=r.extensionsRequired||[];switch(l){case Fe.KHR_MATERIALS_UNLIT:o[l]=new $y;break;case Fe.KHR_DRACO_MESH_COMPRESSION:o[l]=new mM(r,this.dracoLoader);break;case Fe.KHR_TEXTURE_TRANSFORM:o[l]=new _M;break;case Fe.KHR_MESH_QUANTIZATION:o[l]=new gM;break;default:u.indexOf(l)>=0&&a[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}h.setExtensions(o),h.setPlugins(a),h.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Ky(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Fe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Zy{constructor(e){this.parser=e,this.name=Fe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let h;const d=new we(16777215);c.color!==void 0&&d.setRGB(c.color[0],c.color[1],c.color[2],Ut);const l=c.range!==void 0?c.range:0;switch(c.type){case"directional":h=new of(d),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new my(d),h.distance=l;break;case"spot":h=new fy(d),h.distance=l,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,h.angle=c.spot.outerConeAngle,h.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return h.position.set(0,0,0),h.decay=2,ei(h,c),c.intensity!==void 0&&(h.intensity=c.intensity),h.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class $y{constructor(){this.name=Fe.KHR_MATERIALS_UNLIT}getMaterialType(){return Rn}extendParams(e,t,n){const i=[];e.color=new we(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ut),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,ut))}return Promise.all(i)}}class Jy{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Qy{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ie(a,a)}return Promise.all(r)}}class eM{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class tM{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class nM{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ut)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ut)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class iM{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class rM{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(a[0],a[1],a[2],Ut),Promise.all(r)}}class sM{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class oM{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(a[0],a[1],a[2],Ut),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ut)),Promise.all(r)}}class aM{constructor(e){this.parser=e,this.name=Fe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class lM{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class cM{constructor(e){this.parser=e,this.name=Fe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class hM{constructor(e){this.parser=e,this.name=Fe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const h=n.options.manager.getHandler(a.uri);h!==null&&(c=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class uM{constructor(e){this.parser=e,this.name=Fe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const h=n.options.manager.getHandler(a.uri);h!==null&&(c=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class dM{constructor(e){this.name=Fe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,h=i.byteLength||0,d=i.count,l=i.byteStride,u=new Uint8Array(a,c,h);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,l,u,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(d*l);return o.decodeGltfBuffer(new Uint8Array(f),d,l,u,i.mode,i.filter),f})})}else return null}}class fM{constructor(e){this.name=Fe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==dn.TRIANGLES&&h.mode!==dn.TRIANGLE_STRIP&&h.mode!==dn.TRIANGLE_FAN&&h.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const h in o)a.push(this.parser.getDependency("accessor",o[h]).then(d=>(c[h]=d,c[h])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(h=>{const d=h.pop(),l=d.isGroup?d.children:[d],u=h[0].count,f=[];for(const _ of l){const g=new Ce,m=new C,p=new rn,v=new C(1,1,1),M=new Fx(_.geometry,_.material,u);for(let x=0;x<u;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),M.setMatrixAt(x,g.compose(m,p,v));for(const x in c)if(x==="_COLOR_0"){const w=c[x];M.instanceColor=new $l(w.array,w.itemSize,w.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,c[x]);ft.prototype.copy.call(M,_),this.parser.assignFinalMaterial(M),f.push(M)}return d.isGroup?(d.clear(),d.add(...f),d):f[0]}))}}const hf="glTF",ps=12,Vu={JSON:1313821514,BIN:5130562};class pM{constructor(e){this.name=Fe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ps),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ps,r=new DataView(e,ps);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Vu.JSON){const h=new Uint8Array(e,ps+o,a);this.content=n.decode(h)}else if(c===Vu.BIN){const h=ps+o;this.body=e.slice(h,h+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class mM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Fe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},h={};for(const d in o){const l=tc[d]||d.toLowerCase();a[l]=o[d]}for(const d in e.attributes){const l=tc[d]||d.toLowerCase();if(o[d]!==void 0){const u=n.accessors[e.attributes[d]],f=Dr[u.componentType];h[l]=f.name,c[l]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(l,u){i.decodeDracoFile(d,function(f){for(const _ in f.attributes){const g=f.attributes[_],m=c[_];m!==void 0&&(g.normalized=m)}l(f)},a,h,Ut,u)})})}}class _M{constructor(){this.name=Fe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class gM{constructor(){this.name=Fe.KHR_MESH_QUANTIZATION}}class uf extends js{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,h=a*3,d=i-t,l=(n-t)/d,u=l*l,f=u*l,_=e*h,g=_-h,m=-2*f+3*u,p=f-u,v=1-m,M=p-u+l;for(let x=0;x!==a;x++){const w=o[g+x+a],E=o[g+x+c]*d,A=o[_+x+a],P=o[_+x]*d;r[x]=v*w+M*E+m*A+p*P}return r}}const vM=new rn;class xM extends uf{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return vM.fromArray(r).normalize().toArray(r),r}}const dn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Dr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gu={9728:zt,9729:kt,9984:md,9985:Do,9986:Ms,9987:ri},Wu={33071:Mi,33648:Go,10497:zr},$a={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yM={CUBICSPLINE:void 0,LINEAR:Fs,STEP:Os},Ja={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function MM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Fc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ai})),s.DefaultMaterial}function Vi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ei(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function SM(s,e,t){let n=!1,i=!1,r=!1;for(let h=0,d=e.length;h<d;h++){const l=e[h];if(l.POSITION!==void 0&&(n=!0),l.NORMAL!==void 0&&(i=!0),l.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let h=0,d=e.length;h<d;h++){const l=e[h];if(n){const u=l.POSITION!==void 0?t.getDependency("accessor",l.POSITION):s.attributes.position;o.push(u)}if(i){const u=l.NORMAL!==void 0?t.getDependency("accessor",l.NORMAL):s.attributes.normal;a.push(u)}if(r){const u=l.COLOR_0!==void 0?t.getDependency("accessor",l.COLOR_0):s.attributes.color;c.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(h){const d=h[0],l=h[1],u=h[2];return n&&(s.morphAttributes.position=d),i&&(s.morphAttributes.normal=l),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function TM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function bM(s){let e;const t=s.extensions&&s.extensions[Fe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Qa(t.attributes):e=s.indices+":"+Qa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Qa(s.targets[n]);return e}function Qa(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function nc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function AM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const EM=new Ce;class wM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ky,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new sf(this.options.manager):this.textureLoader=new vy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Vi(r,a,i),ei(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[h,d]of o.children.entries())r(d,a.children[h])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Fe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Ps.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=$a[i.type],a=Dr[i.componentType],c=i.normalized===!0,h=new a(i.count*o);return Promise.resolve(new Rt(h,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=$a[i.type],h=Dr[i.componentType],d=h.BYTES_PER_ELEMENT,l=d*c,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(f&&f!==l){const p=Math.floor(u/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let M=t.cache.get(v);M||(g=new h(a,p*f,i.count*f/d),M=new Ix(g,f/d),t.cache.add(v,M)),m=new Pc(M,c,u%f/d,_)}else a===null?g=new h(i.count*c):g=new h(a,u,i.count*c),m=new Rt(g,c,_);if(i.sparse!==void 0){const p=$a.SCALAR,v=Dr[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,w=new v(o[1],M,i.sparse.count*p),E=new h(o[2],x,i.sparse.count*c);a!==null&&(m=new Rt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,P=w.length;A<P;A++){const y=w[A];if(m.setX(y,E[A*c]),c>=2&&m.setY(y,E[A*c+1]),c>=3&&m.setZ(y,E[A*c+2]),c>=4&&m.setW(y,E[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const h=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=o.name||a.name||"",d.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(d.name=a.uri);const u=(r.samplers||{})[o.sampler]||{};return d.magFilter=Gu[u.magFilter]||kt,d.minFilter=Gu[u.minFilter]||ri,d.wrapS=Wu[u.wrapS]||zr,d.wrapT=Wu[u.wrapT]||zr,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==zt&&d.minFilter!==kt,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[c]=h,h}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(l=>l.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",h=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(l){h=!0;const u=new Blob([l],{type:o.mimeType});return c=a.createObjectURL(u),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(c).then(function(l){return new Promise(function(u,f){let _=u;t.isImageBitmapLoader===!0&&(_=function(g){const m=new Tt(g);m.needsUpdate=!0,u(m)}),t.load(Ps.resolveURL(l,r.path),_,void 0,f)})}).then(function(l){return h===!0&&a.revokeObjectURL(c),ei(l,o),l.userData.mimeType=o.mimeType||AM(o.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),l});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Fe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Fe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Fe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Kd,kn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new jd,kn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Fc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},h=[];if(c[Fe.KHR_MATERIALS_UNLIT]){const l=i[Fe.KHR_MATERIALS_UNLIT];o=l.getMaterialType(),h.push(l.extendParams(a,r,t))}else{const l=r.pbrMetallicRoughness||{};if(a.color=new we(1,1,1),a.opacity=1,Array.isArray(l.baseColorFactor)){const u=l.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],Ut),a.opacity=u[3]}l.baseColorTexture!==void 0&&h.push(t.assignTexture(a,"map",l.baseColorTexture,ut)),a.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,a.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(a,"metalnessMap",l.metallicRoughnessTexture)),h.push(t.assignTexture(a,"roughnessMap",l.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=On);const d=r.alphaMode||Ja.OPAQUE;if(d===Ja.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,d===Ja.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Rn&&(h.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ie(1,1),r.normalTexture.scale!==void 0)){const l=r.normalTexture.scale;a.normalScale.set(l,l)}if(r.occlusionTexture!==void 0&&o!==Rn&&(h.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Rn){const l=r.emissiveFactor;a.emissive=new we().setRGB(l[0],l[1],l[2],Ut)}return r.emissiveTexture!==void 0&&o!==Rn&&h.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ut)),Promise.all(h).then(function(){const l=new o(a);return r.name&&(l.name=r.name),ei(l,r),t.associations.set(l,{materials:e}),r.extensions&&Vi(i,l,r),l})}createUniqueName(e){const t=Ze.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Fe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Xu(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const h=e[a],d=bM(h),l=i[d];if(l)o.push(l.promise);else{let u;h.extensions&&h.extensions[Fe.KHR_DRACO_MESH_COMPRESSION]?u=r(h):u=Xu(new xn,h,t),i[d]={primitive:h,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,h=o.length;c<h;c++){const d=o[c].material===void 0?MM(this.cache):this.getDependency("material",o[c].material);a.push(d)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const h=c.slice(0,c.length-1),d=c[c.length-1],l=[];for(let f=0,_=d.length;f<_;f++){const g=d[f],m=o[f];let p;const v=h[f];if(m.mode===dn.TRIANGLES||m.mode===dn.TRIANGLE_STRIP||m.mode===dn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Nx(g,v):new Wt(g,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===dn.TRIANGLE_STRIP?p.geometry=Hu(p.geometry,wd):m.mode===dn.TRIANGLE_FAN&&(p.geometry=Hu(p.geometry,jl));else if(m.mode===dn.LINES)p=new Bx(g,v);else if(m.mode===dn.LINE_STRIP)p=new Ic(g,v);else if(m.mode===dn.LINE_LOOP)p=new kx(g,v);else if(m.mode===dn.POINTS)p=new zx(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&TM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ei(p,r),m.extensions&&Vi(i,p,m),t.assignFinalMaterial(p),l.push(p)}for(let f=0,_=l.length;f<_;f++)t.associations.set(l[f],{meshes:e,primitives:f});if(l.length===1)return r.extensions&&Vi(i,l[0],r),l[0];const u=new Ki;r.extensions&&Vi(i,u,r),t.associations.set(u,{meshes:e});for(let f=0,_=l.length;f<_;f++)u.add(l[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(Pd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new oa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ei(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let h=0,d=o.length;h<d;h++){const l=o[h];if(l){a.push(l);const u=new Ce;r!==null&&u.fromArray(r.array,h*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Lc(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],h=[],d=[];for(let l=0,u=i.channels.length;l<u;l++){const f=i.channels[l],_=i.samplers[f.sampler],g=f.target,m=g.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,v=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),h.push(_),d.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(h),Promise.all(d)]).then(function(l){const u=l[0],f=l[1],_=l[2],g=l[3],m=l[4],p=[];for(let v=0,M=u.length;v<M;v++){const x=u[v],w=f[v],E=_[v],A=g[v],P=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const y=n._createAnimationTracks(x,w,E,A,P);if(y)for(let T=0;T<y.length;T++)p.push(y[T])}return new Ql(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,h=i.weights.length;c<h;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let h=0,d=a.length;h<d;h++)o.push(n.getDependency("node",a[h]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(h){const d=h[0],l=h[1],u=h[2];u!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(u,EM)});for(let f=0,_=l.length;f<_;f++)d.add(l[f]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(h){return i._getNodeRef(i.cameraCache,r.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){a.push(h)}),this.nodeCache[e]=Promise.all(a).then(function(h){let d;if(r.isBone===!0?d=new qd:h.length>1?d=new Ki:h.length===1?d=h[0]:d=new ft,d!==h[0])for(let l=0,u=h.length;l<u;l++)d.add(h[l]);if(r.name&&(d.userData.name=r.name,d.name=o),ei(d,r),r.extensions&&Vi(n,d,r),r.matrix!==void 0){const l=new Ce;l.fromArray(r.matrix),d.applyMatrix4(l)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);return i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Ki;n.name&&(r.name=i.createUniqueName(n.name)),ei(r,n),n.extensions&&Vi(t,r,n);const o=n.nodes||[],a=[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let d=0,l=c.length;d<l;d++)r.add(c[d]);const h=d=>{const l=new Map;for(const[u,f]of i.associations)(u instanceof kn||u instanceof Tt)&&l.set(u,f);return d.traverse(u=>{const f=i.associations.get(u);f!=null&&l.set(u,f)}),l};return i.associations=h(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];xi[r.path]===xi.weights?e.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(a);let h;switch(xi[r.path]){case xi.weights:h=Xr;break;case xi.rotation:h=qr;break;case xi.position:case xi.scale:h=Yr;break;default:switch(n.itemSize){case 1:h=Xr;break;case 2:case 3:default:h=Yr;break}break}const d=i.interpolation!==void 0?yM[i.interpolation]:Fs,l=this._getArrayFromAccessor(n);for(let u=0,f=c.length;u<f;u++){const _=new h(c[u]+"."+xi[r.path],t.array,l,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=nc(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof qr?xM:uf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function RM(s,e,t){const n=e.attributes,i=new Pn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,h=a.max;if(c!==void 0&&h!==void 0){if(i.set(new C(c[0],c[1],c[2]),new C(h[0],h[1],h[2])),a.normalized){const d=nc(Dr[a.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new C,c=new C;for(let h=0,d=r.length;h<d;h++){const l=r[h];if(l.POSITION!==void 0){const u=t.json.accessors[l.POSITION],f=u.min,_=u.max;if(f!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),u.normalized){const g=nc(Dr[u.componentType]);c.multiplyScalar(g)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Ln;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Xu(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=tc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Be.workingColorSpace!==Ut&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Be.workingColorSpace}" not supported.`),ei(s,e),RM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?SM(s,e.targets,t):s})}const el=new WeakMap;class CM extends rr{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new jo(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,ut,n).catch(n)}decodeDracoFile(e,t,n,i,r=Ut,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(el.has(e)){const c=el.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(c=>(i=c,new Promise((h,d)=>{i._callbacks[r]={resolve:h,reject:d},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),el.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new xn;e.index&&t.setIndex(new Rt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,c=new Rt(o,a);r==="color"&&(this._assignVertexColorSpace(c,i.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==ut)return;const n=new we;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),Be.toWorkingColorSpace(n,ut),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new jo(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=PM.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function PM(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(d){s.onModuleLoaded=function(l){d({draco:l})},DracoDecoderModule(s)});break;case"decode":const c=a.buffer,h=a.taskConfig;e.then(d=>{const l=d.draco,u=new l.Decoder;try{const f=t(l,u,new Int8Array(c),h),_=f.attributes.map(g=>g.array.buffer);f.index&&_.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},_)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{l.destroy(u)}});break}};function t(o,a,c,h){const d=h.attributeIDs,l=h.attributeTypes;let u,f;const _=a.GetEncodedGeometryType(c);if(_===o.TRIANGULAR_MESH)u=new o.Mesh,f=a.DecodeArrayToMesh(c,c.byteLength,u);else if(_===o.POINT_CLOUD)u=new o.PointCloud,f=a.DecodeArrayToPointCloud(c,c.byteLength,u);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||u.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const g={index:null,attributes:[]};for(const m in d){const p=self[l[m]];let v,M;if(h.useUniqueIDs)M=d[m],v=a.GetAttributeByUniqueId(u,M);else{if(M=a.GetAttributeId(u,o[d[m]]),M===-1)continue;v=a.GetAttribute(u,M)}const x=i(o,a,u,m,p,v);m==="color"&&(x.vertexColorSpace=h.vertexColorSpace),g.attributes.push(x)}return _===o.TRIANGULAR_MESH&&(g.index=n(o,a,u)),o.destroy(u),g}function n(o,a,c){const d=c.num_faces()*3,l=d*4,u=o._malloc(l);a.GetTrianglesUInt32Array(c,l,u);const f=new Uint32Array(o.HEAPF32.buffer,u,d).slice();return o._free(u),{array:f,itemSize:1}}function i(o,a,c,h,d,l){const u=l.num_components(),_=c.num_points()*u,g=_*d.BYTES_PER_ELEMENT,m=r(o,d),p=o._malloc(g);a.GetAttributeDataArrayForAllPoints(c,l,m,g,p);const v=new d(o.HEAPF32.buffer,p,_).slice();return o._free(p),{name:h,array:v,itemSize:u}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}class ca{constructor(e=new C(0,0,0),t=new C(0,1,0),n=1){this.start=e,this.end=t,this.radius=n}clone(){return new ca(this.start.clone(),this.end.clone(),this.radius)}set(e,t,n){this.start.copy(e),this.end.copy(t),this.radius=n}copy(e){this.start.copy(e.start),this.end.copy(e.end),this.radius=e.radius}getCenter(e){return e.copy(this.end).add(this.start).multiplyScalar(.5)}translate(e){this.start.add(e),this.end.add(e)}checkAABBAxis(e,t,n,i,r,o,a,c,h){return(r-e<h||r-n<h)&&(e-o<h||n-o<h)&&(a-t<h||a-i<h)&&(t-c<h||i-c<h)}intersectsBox(e){return this.checkAABBAxis(this.start.x,this.start.y,this.end.x,this.end.y,e.min.x,e.max.x,e.min.y,e.max.y,this.radius)&&this.checkAABBAxis(this.start.x,this.start.z,this.end.x,this.end.z,e.min.x,e.max.x,e.min.z,e.max.z,this.radius)&&this.checkAABBAxis(this.start.y,this.start.z,this.end.y,this.end.z,e.min.y,e.max.y,e.min.z,e.max.z,this.radius)}}const ms=new C,_s=new C,Co=new C,gs=new C,Dn=new ni,tl=new lf,LM=new lf,Po=new Ln,vs=new ca,IM=new C,DM=new C,NM=new C,UM=1e-10;function OM(s,e,t=null,n=null){const i=IM.copy(s.end).sub(s.start),r=DM.copy(e.end).sub(e.start),o=NM.copy(e.start).sub(s.start),a=i.dot(r),c=i.dot(i),h=r.dot(r),d=r.dot(o),l=i.dot(o);let u,f;const _=c*h-a*a;if(Math.abs(_)<UM){const g=-d/h,m=(a-d)/h;Math.abs(g-.5)<Math.abs(m-.5)?(u=0,f=g):(u=1,f=m)}else u=(d*a+l*h)/_,f=(u*a-d)/h;f=Math.max(0,Math.min(1,f)),u=Math.max(0,Math.min(1,u)),t&&t.copy(i).multiplyScalar(u).add(s.start),n&&n.copy(r).multiplyScalar(f).add(e.start)}class Vc{constructor(e){this.box=e,this.bounds=new Pn,this.subTrees=[],this.triangles=[],this.layers=new ra}addTriangle(e){return this.bounds.min.x=Math.min(this.bounds.min.x,e.a.x,e.b.x,e.c.x),this.bounds.min.y=Math.min(this.bounds.min.y,e.a.y,e.b.y,e.c.y),this.bounds.min.z=Math.min(this.bounds.min.z,e.a.z,e.b.z,e.c.z),this.bounds.max.x=Math.max(this.bounds.max.x,e.a.x,e.b.x,e.c.x),this.bounds.max.y=Math.max(this.bounds.max.y,e.a.y,e.b.y,e.c.y),this.bounds.max.z=Math.max(this.bounds.max.z,e.a.z,e.b.z,e.c.z),this.triangles.push(e),this}calcBox(){return this.box=this.bounds.clone(),this.box.min.x-=.01,this.box.min.y-=.01,this.box.min.z-=.01,this}split(e){if(!this.box)return;const t=[],n=_s.copy(this.box.max).sub(this.box.min).multiplyScalar(.5);for(let r=0;r<2;r++)for(let o=0;o<2;o++)for(let a=0;a<2;a++){const c=new Pn,h=ms.set(r,o,a);c.min.copy(this.box.min).add(h.multiply(n)),c.max.copy(c.min).add(n),t.push(new Vc(c))}let i;for(;i=this.triangles.pop();)for(let r=0;r<t.length;r++)t[r].box.intersectsTriangle(i)&&t[r].triangles.push(i);for(let r=0;r<t.length;r++){const o=t[r].triangles.length;o>8&&e<16&&t[r].split(e+1),o!==0&&this.subTrees.push(t[r])}return this}build(){return this.calcBox(),this.split(0),this}getRayTriangles(e,t){for(let n=0;n<this.subTrees.length;n++){const i=this.subTrees[n];if(e.intersectsBox(i.box))if(i.triangles.length>0)for(let r=0;r<i.triangles.length;r++)t.indexOf(i.triangles[r])===-1&&t.push(i.triangles[r]);else i.getRayTriangles(e,t)}return t}triangleCapsuleIntersect(e,t){t.getPlane(Dn);const n=Dn.distanceToPoint(e.start)-e.radius,i=Dn.distanceToPoint(e.end)-e.radius;if(n>0&&i>0||n<-e.radius&&i<-e.radius)return!1;const r=Math.abs(n/(Math.abs(n)+Math.abs(i))),o=ms.copy(e.start).lerp(e.end,r);if(t.containsPoint(o))return{normal:Dn.normal.clone(),point:o.clone(),depth:Math.abs(Math.min(n,i))};const a=e.radius*e.radius,c=tl.set(e.start,e.end),h=[[t.a,t.b],[t.b,t.c],[t.c,t.a]];for(let d=0;d<h.length;d++){const l=LM.set(h[d][0],h[d][1]);if(OM(c,l,Co,gs),Co.distanceToSquared(gs)<a)return{normal:Co.clone().sub(gs).normalize(),point:gs.clone(),depth:e.radius-Co.distanceTo(gs)}}return!1}triangleSphereIntersect(e,t){if(t.getPlane(Dn),!e.intersectsPlane(Dn))return!1;const n=Math.abs(Dn.distanceToSphere(e)),i=e.radius*e.radius-n*n,r=Dn.projectPoint(e.center,ms);if(t.containsPoint(e.center))return{normal:Dn.normal.clone(),point:r.clone(),depth:Math.abs(Dn.distanceToSphere(e))};const o=[[t.a,t.b],[t.b,t.c],[t.c,t.a]];for(let a=0;a<o.length;a++){tl.set(o[a][0],o[a][1]),tl.closestPointToPoint(r,!0,_s);const c=_s.distanceToSquared(e.center);if(c<i)return{normal:e.center.clone().sub(_s).normalize(),point:_s.clone(),depth:e.radius-Math.sqrt(c)}}return!1}getSphereTriangles(e,t){for(let n=0;n<this.subTrees.length;n++){const i=this.subTrees[n];if(e.intersectsBox(i.box))if(i.triangles.length>0)for(let r=0;r<i.triangles.length;r++)t.indexOf(i.triangles[r])===-1&&t.push(i.triangles[r]);else i.getSphereTriangles(e,t)}}getCapsuleTriangles(e,t){for(let n=0;n<this.subTrees.length;n++){const i=this.subTrees[n];if(e.intersectsBox(i.box))if(i.triangles.length>0)for(let r=0;r<i.triangles.length;r++)t.indexOf(i.triangles[r])===-1&&t.push(i.triangles[r]);else i.getCapsuleTriangles(e,t)}}sphereIntersect(e){Po.copy(e);const t=[];let n,i=!1;this.getSphereTriangles(e,t);for(let r=0;r<t.length;r++)(n=this.triangleSphereIntersect(Po,t[r]))&&(i=!0,Po.center.add(n.normal.multiplyScalar(n.depth)));if(i){const r=Po.center.clone().sub(e.center),o=r.length();return{normal:r.normalize(),depth:o}}return!1}capsuleIntersect(e){vs.copy(e);const t=[];let n,i=!1;this.getCapsuleTriangles(vs,t);for(let r=0;r<t.length;r++)(n=this.triangleCapsuleIntersect(vs,t[r]))&&(i=!0,vs.translate(n.normal.multiplyScalar(n.depth)));if(i){const r=vs.getCenter(new C).sub(e.getCenter(ms)),o=r.length();return{normal:r.normalize(),depth:o}}return!1}rayIntersect(e){if(e.direction.length()===0)return;const t=[];let n,i,r=1e100;this.getRayTriangles(e,t);for(let o=0;o<t.length;o++){const a=e.intersectTriangle(t[o].a,t[o].b,t[o].c,!0,ms);if(a){const c=a.sub(e.origin).length();r>c&&(i=a.clone().add(e.origin),r=c,n=t[o])}}return r<1e100?{distance:r,triangle:n,position:i}:!1}fromGraphNode(e){return e.updateWorldMatrix(!0,!0),e.traverse(t=>{if(t.isMesh===!0&&this.layers.test(t.layers)){let n,i=!1;t.geometry.index!==null?(i=!0,n=t.geometry.toNonIndexed()):n=t.geometry;const r=n.getAttribute("position");for(let o=0;o<r.count;o+=3){const a=new C().fromBufferAttribute(r,o),c=new C().fromBufferAttribute(r,o+1),h=new C().fromBufferAttribute(r,o+2);a.applyMatrix4(t.matrixWorld),c.applyMatrix4(t.matrixWorld),h.applyMatrix4(t.matrixWorld),this.addTriangle(new fn(a,c,h))}i&&n.dispose()}}),this.build(),this}clear(){return this.box=null,this.bounds.makeEmpty(),this.subTrees.length=0,this.triangles.length=0,this}}var Ls=function(){var s=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(d){d.preventDefault(),n(++s%e.children.length)},!1);function t(d){return e.appendChild(d.dom),d}function n(d){for(var l=0;l<e.children.length;l++)e.children[l].style.display=l===d?"block":"none";s=d}var i=(performance||Date).now(),r=i,o=0,a=t(new Ls.Panel("FPS","#0ff","#002")),c=t(new Ls.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=t(new Ls.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){o++;var d=(performance||Date).now();if(c.update(d-i,200),d>=r+1e3&&(a.update(o*1e3/(d-r),100),r=d,o=0,h)){var l=performance.memory;h.update(l.usedJSHeapSize/1048576,l.jsHeapSizeLimit/1048576)}return d},update:function(){i=this.end()},domElement:e,setMode:n}};Ls.Panel=function(s,e,t){var n=1/0,i=0,r=Math.round,o=r(window.devicePixelRatio||1),a=80*o,c=48*o,h=3*o,d=2*o,l=3*o,u=15*o,f=74*o,_=30*o,g=document.createElement("canvas");g.width=a,g.height=c,g.style.cssText="width:80px;height:48px";var m=g.getContext("2d");return m.font="bold "+9*o+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,a,c),m.fillStyle=e,m.fillText(s,h,d),m.fillRect(l,u,f,_),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(l,u,f,_),{dom:g,update:function(p,v){n=Math.min(n,p),i=Math.max(i,p),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,a,u),m.fillStyle=e,m.fillText(r(p)+" "+s+" ("+r(n)+"-"+r(i)+")",h,d),m.drawImage(g,l+o,u,f-o,_,l,u,f-o,_),m.fillRect(l+f-o,u,o,_),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(l+f-o,u,o,r((1-p/v)*_))}}};function ti(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function df(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var sn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},jr={duration:.5,overwrite:!1,delay:0},Gc,Ct,lt,mn=1e8,nt=1/mn,ic=Math.PI*2,FM=ic/4,BM=0,ff=Math.sqrt,kM=Math.cos,zM=Math.sin,wt=function(e){return typeof e=="string"},mt=function(e){return typeof e=="function"},ci=function(e){return typeof e=="number"},Wc=function(e){return typeof e>"u"},Hn=function(e){return typeof e=="object"},qt=function(e){return e!==!1},Xc=function(){return typeof window<"u"},Lo=function(e){return mt(e)||wt(e)},pf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Nt=Array.isArray,rc=/(?:-?\.?\d|\.)+/gi,mf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,wr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_f=/[+-]=-?[.\d]+/,gf=/[^,'"\[\]\s]+/gi,HM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ht,Nn,sc,qc,on={},Ko={},vf,xf=function(e){return(Ko=Kr(e,on))&&Zt},Yc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ks=function(e,t){return!t&&console.warn(e)},yf=function(e,t){return e&&(on[e]=t)&&Ko&&(Ko[e]=t)||on},zs=function(){return 0},VM={suppressEvents:!0,isStart:!0,kill:!1},zo={suppressEvents:!0,kill:!1},GM={suppressEvents:!0},jc={},Ri=[],oc={},Mf,en={},il={},qu=30,Ho=[],Kc="",Zc=function(e){var t=e[0],n,i;if(Hn(t)||mt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ho.length;i--&&!Ho[i].targetTest(t););n=Ho[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Xf(e[i],n)))||e.splice(i,1);return e},$i=function(e){return e._gsap||Zc(_n(e))[0]._gsap},Sf=function(e,t,n){return(n=e[t])&&mt(n)?e[t]():Wc(n)&&e.getAttribute&&e.getAttribute(t)||n},Yt=function(e,t){return(e=e.split(",")).forEach(t)||e},gt=function(e){return Math.round(e*1e5)/1e5||0},Mt=function(e){return Math.round(e*1e7)/1e7||0},Nr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},WM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Zo=function(){var e=Ri.length,t=Ri.slice(0),n,i;for(oc={},Ri.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},$c=function(e){return!!(e._initted||e._startAt||e.add)},Tf=function(e,t,n,i){Ri.length&&!Ct&&Zo(),e.render(t,n,!!(Ct&&t<0&&$c(e))),Ri.length&&!Ct&&Zo()},bf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(gf).length<2?t:wt(e)?e.trim():e},Af=function(e){return e},an=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},XM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Kr=function(e,t){for(var n in t)e[n]=t[n];return e},Yu=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Hn(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},$o=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Is=function(e){var t=e.parent||ht,n=e.keyframes?XM(Nt(e.keyframes)):an;if(qt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},qM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Ef=function(e,t,n,i,r){var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},ha=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Li=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ji=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},YM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ac=function(e,t,n,i){return e._startAt&&(Ct?e._startAt.revert(zo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},jM=function s(e){return!e||e._ts&&s(e.parent)},ju=function(e){return e._repeat?Zr(e._tTime,e=e.duration()+e._rDelay)*e:0},Zr=function(e,t){var n=Math.floor(e=Mt(e/t));return e&&n===e?n-1:n},Jo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ua=function(e){return e._end=Mt(e._start+(e._tDur/Math.abs(e._ts||e._rts||nt)||0))},da=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Mt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ua(e),n._dirty||Ji(n,e)),e},wf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Jo(e.rawTime(),t),(!t._dur||Ks(0,t.totalDuration(),n)-t._tTime>nt)&&t.render(n,!0)),Ji(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-nt}},Fn=function(e,t,n,i){return t.parent&&Li(t),t._start=Mt((ci(n)?n:n||e!==ht?un(e,n,t):e._time)+t._delay),t._end=Mt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ef(e,t,"_first","_last",e._sort?"_start":0),lc(t)||(e._recent=t),i||wf(e,t),e._ts<0&&da(e,e._tTime),e},Rf=function(e,t){return(on.ScrollTrigger||Yc("scrollTrigger",t))&&on.ScrollTrigger.create(t,e)},Cf=function(e,t,n,i,r){if(Qc(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Ct&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Mf!==tn.frame)return Ri.push(e),e._lazy=[r,i],1},KM=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},lc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ZM=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&KM(e)&&!(!e._initted&&lc(e))||(e._ts<0||e._dp._ts<0)&&!lc(e))?0:1,a=e._rDelay,c=0,h,d,l;if(a&&e._repeat&&(c=Ks(0,e._tDur,t),d=Zr(c,a),e._yoyo&&d&1&&(o=1-o),d!==Zr(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||Ct||i||e._zTime===nt||!t&&e._zTime){if(!e._initted&&Cf(e,t,i,n,c))return;for(l=e._zTime,e._zTime=t||(n?nt:0),n||(n=t&&!l),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,h=e._pt;h;)h.r(o,h.d),h=h._next;t<0&&ac(e,t,n,!0),e._onUpdate&&!n&&nn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&nn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Li(e,1),!n&&!Ct&&(nn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},$M=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},$r=function(e,t,n,i){var r=e._repeat,o=Mt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Mt(o*(r+1)+e._rDelay*r):o,a>0&&!i&&da(e,e._tTime=e._tDur*a),e.parent&&ua(e),n||Ji(e.parent,e),e},Ku=function(e){return e instanceof Bt?Ji(e):$r(e,e._dur)},JM={_start:0,endTime:zs,totalDuration:zs},un=function s(e,t,n){var i=e.labels,r=e._recent||JM,o=e.duration()>=mn?r.endTime(!1):e._dur,a,c,h;return wt(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),h=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),h&&n&&(c=c/100*(Nt(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+c:o+c)):t==null?o:+t},Ds=function(e,t,n){var i=ci(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,c;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=qt(c.vars.inherit)&&c.parent;o.immediateRender=qt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new yt(t[0],o,t[r+1])},Ni=function(e,t){return e||e===0?t(e):t},Ks=function(e,t,n){return n<e?e:n>t?t:n},Dt=function(e,t){return!wt(e)||!(t=HM.exec(e))?"":t[1]},QM=function(e,t,n){return Ni(n,function(i){return Ks(e,t,i)})},cc=[].slice,Pf=function(e,t){return e&&Hn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Hn(e[0]))&&!e.nodeType&&e!==Nn},eS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return wt(i)&&!t||Pf(i,1)?(r=n).push.apply(r,_n(i)):n.push(i)})||n},_n=function(e,t,n){return lt&&!t&&lt.selector?lt.selector(e):wt(e)&&!n&&(sc||!Jr())?cc.call((t||qc).querySelectorAll(e),0):Nt(e)?eS(e,n):Pf(e)?cc.call(e,0):e?[e]:[]},hc=function(e){return e=_n(e)[0]||ks("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return _n(t,n.querySelectorAll?n:n===e?ks("Invalid scope")||qc.createElement("div"):e)}},Lf=function(e){return e.sort(function(){return .5-Math.random()})},If=function(e){if(mt(e))return e;var t=Hn(e)?e:{each:e},n=Qi(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,h=t.axis,d=i,l=i;return wt(i)?d=l={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(d=i[0],l=i[1]),function(u,f,_){var g=(_||t).length,m=o[g],p,v,M,x,w,E,A,P,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,mn])[1],!y){for(A=-mn;A<(A=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=o[g]=[],p=c?Math.min(y,g)*d-.5:i%y,v=y===mn?0:c?g*l/y-.5:i/y|0,A=0,P=mn,E=0;E<g;E++)M=E%y-p,x=v-(E/y|0),m[E]=w=h?Math.abs(h==="y"?x:M):ff(M*M+x*x),w>A&&(A=w),w<P&&(P=w);i==="random"&&Lf(m),m.max=A-P,m.min=P,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:h?h==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Dt(t.amount||t.each)||0,n=n&&g<0?Vf(n):n}return g=(m[u]-m.min)/m.max||0,Mt(m.b+(n?n(g):g)*m.v)+m.u}},uc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Mt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ci(n)?0:Dt(n))}},Df=function(e,t){var n=Nt(e),i,r;return!n&&Hn(e)&&(i=n=e.radius||mn,e.values?(e=_n(e.values),(r=!ci(e[0]))&&(i*=i)):e=uc(e.increment)),Ni(t,n?mt(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),c=parseFloat(r?o.y:0),h=mn,d=0,l=e.length,u,f;l--;)r?(u=e[l].x-a,f=e[l].y-c,u=u*u+f*f):u=Math.abs(e[l]-a),u<h&&(h=u,d=l);return d=!i||h<=i?e[d]:o,r||d===o||ci(o)?d:d+Dt(o)}:uc(e))},Nf=function(e,t,n,i){return Ni(Nt(e)?!t:n===!0?!!(n=0):!i,function(){return Nt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},tS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},nS=function(e,t){return function(n){return e(parseFloat(n))+(t||Dt(n))}},iS=function(e,t,n){return Of(e,t,0,1,n)},Uf=function(e,t,n){return Ni(n,function(i){return e[~~t(i)]})},rS=function s(e,t,n){var i=t-e;return Nt(e)?Uf(e,s(0,e.length),t):Ni(n,function(r){return(i+(r-e)%i)%i+e})},sS=function s(e,t,n){var i=t-e,r=i*2;return Nt(e)?Uf(e,s(0,e.length-1),t):Ni(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Hs=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?gf:rc),n+=e.substr(t,i-t)+Nf(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Of=function(e,t,n,i,r){var o=t-e,a=i-n;return Ni(r,function(c){return n+((c-e)/o*a||0)})},oS=function s(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var o=wt(e),a={},c,h,d,l,u;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Nt(e)&&!Nt(t)){for(d=[],l=e.length,u=l-2,h=1;h<l;h++)d.push(s(e[h-1],e[h]));l--,r=function(_){_*=l;var g=Math.min(u,~~_);return d[g](_-g)},n=t}else i||(e=Kr(Nt(e)?[]:{},e));if(!d){for(c in t)Jc.call(a,e,c,"get",t[c]);r=function(_){return nh(_,a)||(o?e.p:e)}}}return Ni(n,r)},Zu=function(e,t,n){var i=e.labels,r=mn,o,a,c;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(c=o,r=a);return c},nn=function(e,t,n){var i=e.vars,r=i[t],o=lt,a=e._ctx,c,h,d;if(r)return c=i[t+"Params"],h=i.callbackScope||e,n&&Ri.length&&Zo(),a&&(lt=a),d=c?r.apply(h,c):r.call(h),lt=o,d},bs=function(e){return Li(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ct),e.progress()<1&&nn(e,"onInterrupt"),e},Rr,Ff=[],Bf=function(e){if(e)if(e=!e.name&&e.default||e,Xc()||e.headless){var t=e.name,n=mt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:zs,render:nh,add:Jc,kill:SS,modifier:MS,rawVars:0},o={targetTest:0,get:0,getSetter:th,aliases:{},register:0};if(Jr(),e!==i){if(en[t])return;an(i,an($o(e,r),o)),Kr(i.prototype,Kr(r,$o(e,o))),en[i.prop=t]=i,e.targetTest&&(Ho.push(i),jc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}yf(t,i),e.register&&e.register(Zt,i,jt)}else Ff.push(e)},tt=255,As={aqua:[0,tt,tt],lime:[0,tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,tt],navy:[0,0,128],white:[tt,tt,tt],olive:[128,128,0],yellow:[tt,tt,0],orange:[tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[tt,0,0],pink:[tt,192,203],cyan:[0,tt,tt],transparent:[tt,tt,tt,0]},rl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*tt+.5|0},kf=function(e,t,n){var i=e?ci(e)?[e>>16,e>>8&tt,e&tt]:0:As.black,r,o,a,c,h,d,l,u,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),As[e])i=As[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&tt,i&tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&tt,e&tt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(rc),!t)c=+i[0]%360/360,h=+i[1]/100,d=+i[2]/100,o=d<=.5?d*(h+1):d+h-d*h,r=d*2-o,i.length>3&&(i[3]*=1),i[0]=rl(c+1/3,r,o),i[1]=rl(c,r,o),i[2]=rl(c-1/3,r,o);else if(~e.indexOf("="))return i=e.match(mf),n&&i.length<4&&(i[3]=1),i}else i=e.match(rc)||As.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/tt,o=i[1]/tt,a=i[2]/tt,l=Math.max(r,o,a),u=Math.min(r,o,a),d=(l+u)/2,l===u?c=h=0:(f=l-u,h=d>.5?f/(2-l-u):f/(l+u),c=l===r?(o-a)/f+(o<a?6:0):l===o?(a-r)/f+2:(r-o)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(h*100+.5),i[2]=~~(d*100+.5)),n&&i.length<4&&(i[3]=1),i},zf=function(e){var t=[],n=[],i=-1;return e.split(Ci).forEach(function(r){var o=r.match(wr)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},$u=function(e,t,n){var i="",r=(e+i).match(Ci),o=t?"hsla(":"rgba(",a=0,c,h,d,l;if(!r)return e;if(r=r.map(function(u){return(u=kf(u,t,1))&&o+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(d=zf(e),c=n.c,c.join(i)!==d.c.join(i)))for(h=e.replace(Ci,"1").split(wr),l=h.length-1;a<l;a++)i+=h[a]+(~c.indexOf(a)?r.shift()||o+"0,0,0,0)":(d.length?d:r.length?r:n).shift());if(!h)for(h=e.split(Ci),l=h.length-1;a<l;a++)i+=h[a]+r[a];return i+h[l]},Ci=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in As)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),aS=/hsl[a]?\(/,Hf=function(e){var t=e.join(" "),n;if(Ci.lastIndex=0,Ci.test(t))return n=aS.test(t),e[1]=$u(e[1],n),e[0]=$u(e[0],n,zf(e[1])),!0},Vs,tn=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],c,h,d,l,u,f,_=function g(m){var p=s()-i,v=m===!0,M,x,w,E;if((p>e||p<0)&&(n+=p-t),i+=p,w=i-n,M=w-o,(M>0||v)&&(E=++l.frame,u=w-l.time*1e3,l.time=w=w/1e3,o+=M+(M>=r?4:r-M),x=1),v||(c=h(g)),x)for(f=0;f<a.length;f++)a[f](w,u,E,m)};return l={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){vf&&(!sc&&Xc()&&(Nn=sc=window,qc=Nn.document||{},on.gsap=Zt,(Nn.gsapVersions||(Nn.gsapVersions=[])).push(Zt.version),xf(Ko||Nn.GreenSockGlobals||!Nn.gsap&&Nn||{}),Ff.forEach(Bf)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&l.sleep(),h=d||function(m){return setTimeout(m,o-l.time*1e3+1|0)},Vs=1,_(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(c),Vs=0,h=zs},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),o=l.time*1e3+r},add:function(m,p,v){var M=p?function(x,w,E,A){m(x,w,E,A),l.remove(M)}:m;return l.remove(m),a[v?"unshift":"push"](M),Jr(),M},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},l})(),Jr=function(){return!Vs&&tn.wake()},ke={},lS=/^[\d.\-M][\d.\-,\s]/,cS=/["']/g,hS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,c,h;r<o;r++)c=n[r],a=r!==o-1?c.lastIndexOf(","):c.length,h=c.substr(0,a),t[i]=isNaN(h)?h.replace(cS,"").trim():+h,i=c.substr(a+1).trim();return t},uS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},dS=function(e){var t=(e+"").split("("),n=ke[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[hS(t[1])]:uS(e).split(",").map(bf)):ke._CE&&lS.test(e)?ke._CE("",e):n},Vf=function(e){return function(t){return 1-e(1-t)}},Gf=function s(e,t){for(var n=e._first,i;n;)n instanceof Bt?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Qi=function(e,t){return e&&(mt(e)?e:ke[e]||dS(e))||t},sr=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Yt(e,function(a){ke[a]=on[a]=r,ke[o=a.toLowerCase()]=n;for(var c in r)ke[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=ke[a+"."+c]=r[c]}),r},Wf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},sl=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/ic*(Math.asin(1/i)||0),a=function(d){return d===1?1:i*Math.pow(2,-10*d)*zM((d-o)*r)+1},c=e==="out"?a:e==="in"?function(h){return 1-a(1-h)}:Wf(a);return r=ic/r,c.config=function(h,d){return s(e,h,d)},c},ol=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Wf(n);return i.config=function(r){return s(e,r)},i};Yt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;sr(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ke.Linear.easeNone=ke.none=ke.Linear.easeIn;sr("Elastic",sl("in"),sl("out"),sl());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};sr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);sr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});sr("Circ",function(s){return-(ff(1-s*s)-1)});sr("Sine",function(s){return s===1?1:-kM(s*FM)+1});sr("Back",ol("in"),ol("out"),ol());ke.SteppedEase=ke.steps=on.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-nt;return function(a){return((i*Ks(0,o,a)|0)+r)*n}}};jr.ease=ke["quad.out"];Yt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Kc+=s+","+s+"Params,"});var Xf=function(e,t){this.id=BM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Sf,this.set=t?t.getSetter:th},Gs=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,$r(this,+t.duration,1,1),this.data=t.data,lt&&(this._ctx=lt,lt.data.push(this)),Vs||tn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,$r(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Jr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(da(this,n),!r._dp||r.parent||wf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Fn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===nt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Tf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ju(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ju(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Zr(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-nt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Jo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-nt?0:this._rts,this.totalTime(Ks(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),ua(this),YM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Jr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==nt&&(this._tTime-=nt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Fn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(qt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Jo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=GM);var i=Ct;return Ct=n,$c(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ct=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ku(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ku(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(un(this,n),qt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,qt(i)),this._dur||(this._zTime=-nt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-nt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-nt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-nt)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=mt(n)?n:Af,a=function(){var h=i.then;i.then=null,mt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),r(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){bs(this)},s})();an(Gs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-nt,_prom:0,_ps:!1,_rts:1});var Bt=(function(s){df(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=qt(n.sortChildren),ht&&Fn(n.parent||ht,ti(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Rf(ti(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return Ds(0,arguments,this),this},t.from=function(i,r,o){return Ds(1,arguments,this),this},t.fromTo=function(i,r,o,a){return Ds(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,Is(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new yt(i,r,un(this,o),1),this},t.call=function(i,r,o){return Fn(this,yt.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,c,h,d){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=h,o.onCompleteParams=d,o.parent=this,new yt(i,o,un(this,c)),this},t.staggerFrom=function(i,r,o,a,c,h,d){return o.runBackwards=1,Is(o).immediateRender=qt(o.immediateRender),this.staggerTo(i,r,o,a,c,h,d)},t.staggerFromTo=function(i,r,o,a,c,h,d,l){return a.startAt=o,Is(a).immediateRender=qt(a.immediateRender),this.staggerTo(i,r,a,c,h,d,l)},t.render=function(i,r,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,h=this._dur,d=i<=0?0:Mt(i),l=this._zTime<0!=i<0&&(this._initted||!h),u,f,_,g,m,p,v,M,x,w,E,A;if(this!==ht&&d>c&&i>=0&&(d=c),d!==this._tTime||o||l){if(a!==this._time&&h&&(d+=this._time-a,i+=this._time-a),u=d,x=this._start,M=this._ts,p=!M,l&&(h||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=h+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(u=Mt(d%m),d===c?(g=this._repeat,u=h):(w=Mt(d/m),g=~~w,g&&g===w&&(u=h,g--),u>h&&(u=h)),w=Zr(this._tTime,m),!a&&this._tTime&&w!==g&&this._tTime-w*m-this._dur<=0&&(w=g),E&&g&1&&(u=h-u,A=1),g!==w&&!this._lock){var P=E&&w&1,y=P===(E&&g&1);if(g<w&&(P=!P),a=P?0:d%h?h:d,this._lock=1,this.render(a||(A?0:Mt(g*m)),r,!h)._lock=0,this._tTime=d,!r&&this.parent&&nn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,c=this._tDur,y&&(this._lock=2,a=P?h:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Gf(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=$M(this,Mt(a),Mt(u)),v&&(d-=u-(u=v._start))),this._tTime=d,this._time=u,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!r&&!w&&(nn(this,"onStart"),this._tTime!==d))return this;if(u>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||u>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,o),u!==this._time||!this._ts&&!p){v=0,_&&(d+=this._zTime=-nt);break}}f=_}else{f=this._last;for(var T=i<0?i:u;f;){if(_=f._prev,(f._act||T<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(T-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(T-f._start)*f._ts,r,o||Ct&&$c(f)),u!==this._time||!this._ts&&!p){v=0,_&&(d+=this._zTime=T?-nt:nt);break}}f=_}}if(v&&!r&&(this.pause(),v.render(u>=a?0:-nt)._zTime=u>=a?1:-1,this._ts))return this._start=x,ua(this),this.render(i,r,o);this._onUpdate&&!r&&nn(this,"onUpdate",!0),(d===c&&this._tTime>=this.totalDuration()||!d&&a)&&(x===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!h)&&(d===c&&this._ts>0||!d&&this._ts<0)&&Li(this,1),!r&&!(i<0&&!a)&&(d||a||!c)&&(nn(this,d===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(ci(r)||(r=un(this,r,i)),!(i instanceof Gs)){if(Nt(i))return i.forEach(function(a){return o.add(a,r)}),this;if(wt(i))return this.addLabel(i,r);if(mt(i))i=yt.delayedCall(0,i);else return this}return this!==i?Fn(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-mn);for(var c=[],h=this._first;h;)h._start>=a&&(h instanceof yt?r&&c.push(h):(o&&c.push(h),i&&c.push.apply(c,h.getChildren(!0,r,o)))),h=h._next;return c},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return wt(i)?this.removeLabel(i):mt(i)?this.killTweensOf(i):(i.parent===this&&ha(this,i),i===this._recent&&(this._recent=this._last),Ji(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Mt(tn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=un(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=yt.delayedCall(0,r||zs,o);return a.data="isPause",this._hasPause=1,Fn(this,a,un(this,i))},t.removePause=function(i){var r=this._first;for(i=un(this,i);r;)r._start===i&&r.data==="isPause"&&Li(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)Ti!==a[c]&&a[c].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=_n(i),c=this._first,h=ci(r),d;c;)c instanceof yt?WM(c._targets,a)&&(h?(!Ti||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&o.push(c):(d=c.getTweensOf(a,r)).length&&o.push.apply(o,d),c=c._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=un(o,i),c=r,h=c.startAt,d=c.onStart,l=c.onStartParams,u=c.immediateRender,f,_=yt.to(o,an({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(h&&"time"in h?h.time:o._time))/o.timeScale())||nt,onStart:function(){if(o.pause(),!f){var m=r.duration||Math.abs((a-(h&&"time"in h?h.time:o._time))/o.timeScale());_._dur!==m&&$r(_,m,0,1).render(_._time,!0,!0),f=1}d&&d.apply(_,l||[])}},r));return u?_.render(0):_},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,an({startAt:{time:un(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Zu(this,un(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Zu(this,un(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+nt)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,h;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(h in c)c[h]>=o&&(c[h]+=i);return Ji(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ji(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,c=mn,h,d,l;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(l=o.parent;a;)h=a._prev,a._dirty&&a.totalDuration(),d=a._start,d>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,Fn(o,a,d-a._delay,1)._lock=0):c=d,d<0&&a._ts&&(r-=d,(!l&&!o._dp||l&&l.smoothChildTiming)&&(o._start+=d/o._ts,o._time-=d,o._tTime-=d),o.shiftChildren(-d,!1,-1/0),c=0),a._end>r&&a._ts&&(r=a._end),a=h;$r(o,o===ht&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(ht._ts&&(Tf(ht,Jo(i,ht)),Mf=tn.frame),tn.frame>=qu){qu+=sn.autoSleep||120;var r=ht._first;if((!r||!r._ts)&&sn.autoSleep&&tn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||tn.sleep()}}},e})(Gs);an(Bt.prototype,{_lock:0,_hasPause:0,_forcing:0});var fS=function(e,t,n,i,r,o,a){var c=new jt(this._pt,e,t,0,1,$f,null,r),h=0,d=0,l,u,f,_,g,m,p,v;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Hs(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),u=n.match(nl)||[];l=nl.exec(i);)_=l[0],g=i.substring(h,l.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==u[d++]&&(m=parseFloat(u[d-1])||0,c._pt={_next:c._pt,p:g||d===1?g:",",s:m,c:_.charAt(1)==="="?Nr(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},h=nl.lastIndex);return c.c=h<i.length?i.substring(h,i.length):"",c.fp=a,(_f.test(i)||p)&&(c.e=0),this._pt=c,c},Jc=function(e,t,n,i,r,o,a,c,h,d){mt(i)&&(i=i(r||0,e,o));var l=e[t],u=n!=="get"?n:mt(l)?h?e[t.indexOf("set")||!mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():l,f=mt(l)?h?vS:Kf:eh,_;if(wt(i)&&(~i.indexOf("random(")&&(i=Hs(i)),i.charAt(1)==="="&&(_=Nr(u,i)+(Dt(u)||0),(_||_===0)&&(i=_))),!d||u!==i||dc)return!isNaN(u*i)&&i!==""?(_=new jt(this._pt,e,t,+u||0,i-(u||0),typeof l=="boolean"?yS:Zf,0,f),h&&(_.fp=h),a&&_.modifier(a,this,e),this._pt=_):(!l&&!(t in e)&&Yc(t,i),fS.call(this,e,t,u,i,f,c||sn.stringFilter,h))},pS=function(e,t,n,i,r){if(mt(e)&&(e=Ns(e,r,t,n,i)),!Hn(e)||e.style&&e.nodeType||Nt(e)||pf(e))return wt(e)?Ns(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=Ns(e[a],r,t,n,i);return o},qf=function(e,t,n,i,r,o){var a,c,h,d;if(en[e]&&(a=new en[e]).init(r,a.rawVars?t[e]:pS(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=c=new jt(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Rr))for(h=n._ptLookup[n._targets.indexOf(r)],d=a._props.length;d--;)h[a._props[d]]=c;return a},Ti,dc,Qc=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,h=i.onUpdate,d=i.runBackwards,l=i.yoyoEase,u=i.keyframes,f=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:m,M=e._overwrite==="auto"&&!Gc,x=e.timeline,w,E,A,P,y,T,L,z,O,G,q,V,Y;if(x&&(!u||!r)&&(r="none"),e._ease=Qi(r,jr.ease),e._yEase=l?Vf(Qi(l===!0?r:l,jr.ease)):0,l&&e._yoyo&&!e._repeat&&(l=e._yEase,e._yEase=e._ease,e._ease=l),e._from=!x&&!!i.runBackwards,!x||u&&!i.stagger){if(z=m[0]?$i(m[0]).harness:0,V=z&&i[z.prop],w=$o(i,jc),g&&(g._zTime<0&&g.progress(1),t<0&&d&&a&&!f?g.render(-1,!0):g.revert(d&&_?zo:VM),g._lazy=0),o){if(Li(e._startAt=yt.set(m,an({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&qt(c),startAt:null,delay:0,onUpdate:h&&function(){return nn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ct||!a&&!f)&&e._startAt.revert(zo),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&_&&!g){if(t&&(a=!1),A=an({overwrite:!1,data:"isFromStart",lazy:a&&!g&&qt(c),immediateRender:a,stagger:0,parent:p},w),V&&(A[z.prop]=V),Li(e._startAt=yt.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ct?e._startAt.revert(zo):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,nt,nt);else if(!t)return}for(e._pt=e._ptCache=0,c=_&&qt(c)||c&&!_,E=0;E<m.length;E++){if(y=m[E],L=y._gsap||Zc(m)[E]._gsap,e._ptLookup[E]=G={},oc[L.id]&&Ri.length&&Zo(),q=v===m?E:v.indexOf(y),z&&(O=new z).init(y,V||w,e,q,v)!==!1&&(e._pt=P=new jt(e._pt,y,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(H){G[H]=P}),O.priority&&(T=1)),!z||V)for(A in w)en[A]&&(O=qf(A,w,e,q,y,v))?O.priority&&(T=1):G[A]=P=Jc.call(e,y,A,"get",w[A],q,v,0,i.stringFilter);e._op&&e._op[E]&&e.kill(y,e._op[E]),M&&e._pt&&(Ti=e,ht.killTweensOf(y,G,e.globalTime(t)),Y=!e.parent,Ti=0),e._pt&&c&&(oc[L.id]=1)}T&&Jf(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!Y,u&&t<=0&&x.render(mn,!0,!0)},mS=function(e,t,n,i,r,o,a,c){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,l,u,f;if(!h)for(h=e._ptCache[t]=[],u=e._ptLookup,f=e._targets.length;f--;){if(d=u[f][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return dc=1,e.vars[t]="+=0",Qc(e,a),dc=0,c?ks(t+" not eligible for reset"):1;h.push(d)}for(f=h.length;f--;)l=h[f],d=l._pt||l,d.s=(i||i===0)&&!r?i:d.s+(i||0)+o*d.c,d.c=n-d.s,l.e&&(l.e=gt(n)+Dt(l.e)),l.b&&(l.b=d.s+Dt(l.b))},_S=function(e,t){var n=e[0]?$i(e[0]).harness:0,i=n&&n.aliases,r,o,a,c;if(!i)return t;r=Kr({},t);for(o in i)if(o in r)for(c=i[o].split(","),a=c.length;a--;)r[c[a]]=r[o];return r},gS=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(Nt(t))a=n[e]||(n[e]=[]),t.forEach(function(c,h){return a.push({t:h/(t.length-1)*100,v:c,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},Ns=function(e,t,n,i,r){return mt(e)?e.call(t,n,i,r):wt(e)&&~e.indexOf("random(")?Hs(e):e},Yf=Kc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",jf={};Yt(Yf+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return jf[s]=1});var yt=(function(s){df(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Is(i))||this;var c=a.vars,h=c.duration,d=c.delay,l=c.immediateRender,u=c.stagger,f=c.overwrite,_=c.keyframes,g=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,v=i.parent||ht,M=(Nt(n)||pf(n)?ci(n[0]):"length"in i)?[n]:_n(n),x,w,E,A,P,y,T,L;if(a._targets=M.length?Zc(M):ks("GSAP target "+n+" not found. https://gsap.com",!sn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||u||Lo(h)||Lo(d)){if(i=a.vars,x=a.timeline=new Bt({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:M}),x.kill(),x.parent=x._dp=ti(a),x._start=0,u||Lo(h)||Lo(d)){if(A=M.length,T=u&&If(u),Hn(u))for(P in u)~Yf.indexOf(P)&&(L||(L={}),L[P]=u[P]);for(w=0;w<A;w++)E=$o(i,jf),E.stagger=0,p&&(E.yoyoEase=p),L&&Kr(E,L),y=M[w],E.duration=+Ns(h,ti(a),w,y,M),E.delay=(+Ns(d,ti(a),w,y,M)||0)-a._delay,!u&&A===1&&E.delay&&(a._delay=d=E.delay,a._start+=d,E.delay=0),x.to(y,E,T?T(w,y,M):0),x._ease=ke.none;x.duration()?h=d=0:a.timeline=0}else if(_){Is(an(x.vars.defaults,{ease:"none"})),x._ease=Qi(_.ease||i.ease||"none");var z=0,O,G,q;if(Nt(_))_.forEach(function(V){return x.to(M,V,">")}),x.duration();else{E={};for(P in _)P==="ease"||P==="easeEach"||gS(P,_[P],E,_.easeEach);for(P in E)for(O=E[P].sort(function(V,Y){return V.t-Y.t}),z=0,w=0;w<O.length;w++)G=O[w],q={ease:G.e,duration:(G.t-(w?O[w-1].t:0))/100*h},q[P]=G.v,x.to(M,q,z),z+=q.duration;x.duration()<h&&x.to({},{duration:h-x.duration()})}}h||a.duration(h=x.duration())}else a.timeline=0;return f===!0&&!Gc&&(Ti=ti(a),ht.killTweensOf(M),Ti=0),Fn(v,ti(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(l||!h&&!_&&a._start===Mt(v._time)&&qt(l)&&jM(ti(a))&&v.data!=="nested")&&(a._tTime=-nt,a.render(Math.max(0,-d)||0)),m&&Rf(ti(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,c=this._tDur,h=this._dur,d=i<0,l=i>c-nt&&!d?c:i<nt?0:i,u,f,_,g,m,p,v,M,x;if(!h)ZM(this,i,r,o);else if(l!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(u=l,M=this.timeline,this._repeat){if(g=h+this._rDelay,this._repeat<-1&&d)return this.totalTime(g*100+i,r,o);if(u=Mt(l%g),l===c?(_=this._repeat,u=h):(m=Mt(l/g),_=~~m,_&&_===m?(u=h,_--):u>h&&(u=h)),p=this._yoyo&&_&1,p&&(x=this._yEase,u=h-u),m=Zr(this._tTime,g),u===a&&!o&&this._initted&&_===m)return this._tTime=l,this;_!==m&&(M&&this._yEase&&Gf(M,p),this.vars.repeatRefresh&&!p&&!this._lock&&u!==g&&this._initted&&(this._lock=o=1,this.render(Mt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Cf(this,d?i:u,o,r,l))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(h!==this._dur)return this.render(i,r,o)}if(this._tTime=l,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(x||this._ease)(u/h),this._from&&(this.ratio=v=1-v),!a&&l&&!r&&!m&&(nn(this,"onStart"),this._tTime!==l))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;M&&M.render(i<0?i:M._dur*M._ease(u/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(d&&ac(this,i,r,o),nn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&nn(this,"onRepeat"),(l===this._tDur||!l)&&this._tTime===l&&(d&&!this._onUpdate&&ac(this,i,!0,!0),(i||!h)&&(l===this._tDur&&this._ts>0||!l&&this._ts<0)&&Li(this,1),!r&&!(d&&!a)&&(l||a||p)&&(nn(this,l===c?"onComplete":"onReverseComplete",!0),this._prom&&!(l<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,c){Vs||tn.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||Qc(this,h),d=this._ease(h/this._dur),mS(this,i,r,o,a,d,h,c)?this.resetTo(i,r,o,a,1):(da(this,0),this.parent||Ef(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?bs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ct),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Ti&&Ti.vars.overwrite!==!0)._first||bs(this),this.parent&&o!==this.timeline.totalDuration()&&$r(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?_n(i):a,h=this._ptLookup,d=this._pt,l,u,f,_,g,m,p;if((!r||r==="all")&&qM(a,c))return r==="all"&&(this._pt=0),bs(this);for(l=this._op=this._op||[],r!=="all"&&(wt(r)&&(g={},Yt(r,function(v){return g[v]=1}),r=g),r=_S(a,r)),p=a.length;p--;)if(~c.indexOf(a[p])){u=h[p],r==="all"?(l[p]=r,_=u,f={}):(f=l[p]=l[p]||{},_=r);for(g in _)m=u&&u[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&ha(this,m,"_pt"),delete u[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&d&&bs(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Ds(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return Ds(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return ht.killTweensOf(i,r,o)},e})(Gs);an(yt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Yt("staggerTo,staggerFrom,staggerFromTo",function(s){yt[s]=function(){var e=new Bt,t=cc.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var eh=function(e,t,n){return e[t]=n},Kf=function(e,t,n){return e[t](n)},vS=function(e,t,n,i){return e[t](i.fp,n)},xS=function(e,t,n){return e.setAttribute(t,n)},th=function(e,t){return mt(e[t])?Kf:Wc(e[t])&&e.setAttribute?xS:eh},Zf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},yS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},$f=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},nh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},MS=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},SS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ha(this,t,"_pt"):t.dep||(n=1),t=i;return!n},TS=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Jf=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},jt=(function(){function s(t,n,i,r,o,a,c,h,d){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Zf,this.d=c||this,this.set=h||eh,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=TS,this.m=n,this.mt=r,this.tween=i},s})();Yt(Kc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return jc[s]=1});on.TweenMax=on.TweenLite=yt;on.TimelineLite=on.TimelineMax=Bt;ht=new Bt({sortChildren:!1,defaults:jr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});sn.stringFilter=Hf;var er=[],Vo={},bS=[],Ju=0,AS=0,al=function(e){return(Vo[e]||bS).map(function(t){return t()})},fc=function(){var e=Date.now(),t=[];e-Ju>2&&(al("matchMediaInit"),er.forEach(function(n){var i=n.queries,r=n.conditions,o,a,c,h;for(a in i)o=Nn.matchMedia(i[a]).matches,o&&(c=1),o!==r[a]&&(r[a]=o,h=1);h&&(n.revert(),c&&t.push(n))}),al("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ju=e,al("matchMedia"))},Qf=(function(){function s(t,n){this.selector=n&&hc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=AS++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){mt(n)&&(r=i,i=n,n=mt);var o=this,a=function(){var h=lt,d=o.selector,l;return h&&h!==o&&h.data.push(o),r&&(o.selector=hc(r)),lt=o,l=i.apply(o,arguments),mt(l)&&o._r.push(l),lt=h,o.selector=d,o.isReverted=!1,l};return o.last=a,n===mt?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},e.ignore=function(n){var i=lt;lt=null,n(this),lt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof yt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),c=r.data.length,h;c--;)h=r.data[c],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(d){return a.splice(a.indexOf(d),1)}));for(a.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,l){return l.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),c=r.data.length;c--;)h=r.data[c],h instanceof Bt?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof yt)&&h.revert&&h.revert(n);r._r.forEach(function(d){return d(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=er.length;o--;)er[o].id===this.id&&er.splice(o,1)},e.revert=function(n){this.kill(n||{})},s})(),ES=(function(){function s(t){this.contexts=[],this.scope=t,lt&&lt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Hn(n)||(n={matches:n});var o=new Qf(0,r||this.scope),a=o.conditions={},c,h,d;lt&&!o.selector&&(o.selector=lt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(h in n)h==="all"?d=1:(c=Nn.matchMedia(n[h]),c&&(er.indexOf(o)<0&&er.push(o),(a[h]=c.matches)&&(d=1),c.addListener?c.addListener(fc):c.addEventListener("change",fc)));return d&&i(o,function(l){return o.add(null,l)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Qo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Bf(i)})},timeline:function(e){return new Bt(e)},getTweensOf:function(e,t){return ht.getTweensOf(e,t)},getProperty:function(e,t,n,i){wt(e)&&(e=_n(e)[0]);var r=$i(e||{}).get,o=n?Af:bf;return n==="native"&&(n=""),e&&(t?o((en[t]&&en[t].get||r)(e,t,n,i)):function(a,c,h){return o((en[a]&&en[a].get||r)(e,a,c,h))})},quickSetter:function(e,t,n){if(e=_n(e),e.length>1){var i=e.map(function(d){return Zt.quickSetter(d,t,n)}),r=i.length;return function(d){for(var l=r;l--;)i[l](d)}}e=e[0]||{};var o=en[t],a=$i(e),c=a.harness&&(a.harness.aliases||{})[t]||t,h=o?function(d){var l=new o;Rr._pt=0,l.init(e,n?d+n:d,Rr,0,[e]),l.render(1,l),Rr._pt&&nh(1,Rr)}:a.set(e,c);return o?h:function(d){return h(e,c,n?d+n:d,a,1)}},quickTo:function(e,t,n){var i,r=Zt.to(e,an((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(c,h,d){return r.resetTo(t,c,h,d)};return o.tween=r,o},isTweening:function(e){return ht.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Qi(e.ease,jr.ease)),Yu(jr,e||{})},config:function(e){return Yu(sn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!en[a]&&!on[a]&&ks(t+" effect requires "+a+" plugin.")}),il[t]=function(a,c,h){return n(_n(a),an(c||{},r),h)},o&&(Bt.prototype[t]=function(a,c,h){return this.add(il[t](a,Hn(c)?c:(h=c)&&{},this),h)})},registerEase:function(e,t){ke[e]=Qi(t)},parseEase:function(e,t){return arguments.length?Qi(e,t):ke},getById:function(e){return ht.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Bt(e),i,r;for(n.smoothChildTiming=qt(e.smoothChildTiming),ht.remove(n),n._dp=0,n._time=n._tTime=ht._time,i=ht._first;i;)r=i._next,(t||!(!i._dur&&i instanceof yt&&i.vars.onComplete===i._targets[0]))&&Fn(n,i,i._start-i._delay),i=r;return Fn(ht,n,0),n},context:function(e,t){return e?new Qf(e,t):lt},matchMedia:function(e){return new ES(e)},matchMediaRefresh:function(){return er.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||fc()},addEventListener:function(e,t){var n=Vo[e]||(Vo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Vo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:rS,wrapYoyo:sS,distribute:If,random:Nf,snap:Df,normalize:iS,getUnit:Dt,clamp:QM,splitColor:kf,toArray:_n,selector:hc,mapRange:Of,pipe:tS,unitize:nS,interpolate:oS,shuffle:Lf},install:xf,effects:il,ticker:tn,updateRoot:Bt.updateRoot,plugins:en,globalTimeline:ht,core:{PropTween:jt,globals:yf,Tween:yt,Timeline:Bt,Animation:Gs,getCache:$i,_removeLinkedListItem:ha,reverting:function(){return Ct},context:function(e){return e&&lt&&(lt.data.push(e),e._ctx=lt),lt},suppressOverwrites:function(e){return Gc=e}}};Yt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Qo[s]=yt[s]});tn.add(Bt.updateRoot);Rr=Qo.to({},{duration:0});var wS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},RS=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=wS(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},ll=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var c,h;if(wt(r)&&(c={},Yt(r,function(d){return c[d]=1}),r=c),t){c={};for(h in r)c[h]=t(r[h]);r=c}RS(a,r)}}}},Zt=Qo.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,c;this.tween=n;for(o in t)c=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(c||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Ct?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ll("roundProps",uc),ll("modifiers"),ll("snap",Df))||Qo;yt.version=Bt.version=Zt.version="3.13.0";vf=1;Xc()&&Jr();ke.Power0;ke.Power1;ke.Power2;ke.Power3;ke.Power4;ke.Linear;ke.Quad;ke.Cubic;ke.Quart;ke.Quint;ke.Strong;ke.Elastic;ke.Back;ke.SteppedEase;ke.Bounce;ke.Sine;ke.Expo;ke.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Qu,bi,Ur,ih,Zi,ed,rh,CS=function(){return typeof window<"u"},hi={},qi=180/Math.PI,Or=Math.PI/180,Sr=Math.atan2,td=1e8,sh=/([A-Z])/g,PS=/(left|right|width|margin|padding|x)/i,LS=/[\s,\(]\S/,Bn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},pc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},IS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},DS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},NS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},ep=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},tp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},US=function(e,t,n){return e.style[t]=n},OS=function(e,t,n){return e.style.setProperty(t,n)},FS=function(e,t,n){return e._gsap[t]=n},BS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},kS=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},zS=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},dt="transform",Kt=dt+"Origin",HS=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in hi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Bn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=ii(i,a)}):this.tfm[e]=o.x?o[e]:ii(i,e),e===Kt&&(this.tfm.zOrigin=o.zOrigin);else return Bn.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(dt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Kt,t,"")),e=dt}(r||t)&&this.props.push(e,t,r[e])},np=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},VS=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(sh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=rh(),(!r||!r.isStart)&&!n[dt]&&(np(n),i.zOrigin&&n[Kt]&&(n[Kt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},ip=function(e,t){var n={target:e,props:[],revert:VS,save:HS};return e._gsap||Zt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},rp,mc=function(e,t){var n=bi.createElementNS?bi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):bi.createElement(e);return n&&n.style?n:bi.createElement(e)},gn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(sh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Qr(t)||t,1)||""},nd="O,Moz,ms,Ms,Webkit".split(","),Qr=function(e,t,n){var i=t||Zi,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(nd[o]+e in r););return o<0?null:(o===3?"ms":o>=0?nd[o]:"")+e},_c=function(){CS()&&window.document&&(Qu=window,bi=Qu.document,Ur=bi.documentElement,Zi=mc("div")||{style:{}},mc("div"),dt=Qr(dt),Kt=dt+"Origin",Zi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",rp=!!Qr("perspective"),rh=Zt.core.reverting,ih=1)},id=function(e){var t=e.ownerSVGElement,n=mc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Ur.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Ur.removeChild(n),r},rd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},sp=function(e){var t,n;try{t=e.getBBox()}catch{t=id(e),n=1}return t&&(t.width||t.height)||n||(t=id(e)),t&&!t.width&&!t.x&&!t.y?{x:+rd(e,["x","cx","x1"])||0,y:+rd(e,["y","cy","y1"])||0,width:0,height:0}:t},op=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&sp(e))},ir=function(e,t){if(t){var n=e.style,i;t in hi&&t!==Kt&&(t=dt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(sh,"-$1").toLowerCase())):n.removeAttribute(t)}},Ai=function(e,t,n,i,r,o){var a=new jt(e._pt,t,n,0,1,o?tp:ep);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},sd={deg:1,rad:1,turn:1},GS={grid:1,flex:1},Ii=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Zi.style,c=PS.test(t),h=e.tagName.toLowerCase()==="svg",d=(h?"client":"offset")+(c?"Width":"Height"),l=100,u=i==="px",f=i==="%",_,g,m,p;if(i===o||!r||sd[i]||sd[o])return r;if(o!=="px"&&!u&&(r=s(e,t,n,"px")),p=e.getCTM&&op(e),(f||o==="%")&&(hi[t]||~t.indexOf("adius")))return _=p?e.getBBox()[c?"width":"height"]:e[d],gt(f?r/_*l:r/100*_);if(a[c?"width":"height"]=l+(u?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!h?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===bi||!g.appendChild)&&(g=bi.body),m=g._gsap,m&&f&&m.width&&c&&m.time===tn.time&&!m.uncache)return gt(r/m.width*l);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=l+i,_=e[d],v?e.style[t]=v:ir(e,t)}else(f||o==="%")&&!GS[gn(g,"display")]&&(a.position=gn(e,"position")),g===e&&(a.position="static"),g.appendChild(Zi),_=Zi[d],g.removeChild(Zi),a.position="absolute";return c&&f&&(m=$i(g),m.time=tn.time,m.width=g[d]),gt(u?_*r/l:_&&r?l/_*r:0)},ii=function(e,t,n,i){var r;return ih||_c(),t in Bn&&t!=="transform"&&(t=Bn[t],~t.indexOf(",")&&(t=t.split(",")[0])),hi[t]&&t!=="transform"?(r=Xs(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:ta(gn(e,Kt))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ea[t]&&ea[t](e,t,n)||gn(e,t)||Sf(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ii(e,t,r,n)+n:r},WS=function(e,t,n,i){if(!n||n==="none"){var r=Qr(t,e,1),o=r&&gn(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=gn(e,"borderTopColor"))}var a=new jt(this._pt,e.style,t,0,1,$f),c=0,h=0,d,l,u,f,_,g,m,p,v,M,x,w;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=gn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=gn(e,t)||i,g?e.style[t]=g:ir(e,t)),d=[n,i],Hf(d),n=d[0],i=d[1],u=n.match(wr)||[],w=i.match(wr)||[],w.length){for(;l=wr.exec(i);)m=l[0],v=i.substring(c,l.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=u[h++]||"")&&(f=parseFloat(g)||0,x=g.substr((f+"").length),m.charAt(1)==="="&&(m=Nr(f,m)+x),p=parseFloat(m),M=m.substr((p+"").length),c=wr.lastIndex-M.length,M||(M=M||sn.units[t]||x,c===i.length&&(i+=M,a.e+=M)),x!==M&&(f=Ii(e,t,g,M)||0),a._pt={_next:a._pt,p:v||h===1?v:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=t==="display"&&i==="none"?tp:ep;return _f.test(i)&&(a.e=0),this._pt=a,a},od={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},XS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=od[n]||n,t[1]=od[i]||i,t.join(" ")},qS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,c,h;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),h=r.length;--h>-1;)a=r[h],hi[a]&&(c=1,a=a==="transformOrigin"?Kt:dt),ir(n,a);c&&(ir(n,dt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Xs(n,1),o.uncache=1,np(i)))}},ea={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new jt(e._pt,t,n,0,0,qS);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},Ws=[1,0,0,1,0,0],ap={},lp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ad=function(e){var t=gn(e,dt);return lp(t)?Ws:t.substr(7).match(mf).map(gt)},oh=function(e,t){var n=e._gsap||$i(e),i=e.style,r=ad(e),o,a,c,h;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?Ws:r):(r===Ws&&!e.offsetParent&&e!==Ur&&!n.svg&&(c=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,a=e.nextElementSibling,Ur.appendChild(e)),r=ad(e),c?i.display=c:ir(e,"display"),h&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ur.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},gc=function(e,t,n,i,r,o){var a=e._gsap,c=r||oh(e,!0),h=a.xOrigin||0,d=a.yOrigin||0,l=a.xOffset||0,u=a.yOffset||0,f=c[0],_=c[1],g=c[2],m=c[3],p=c[4],v=c[5],M=t.split(" "),x=parseFloat(M[0])||0,w=parseFloat(M[1])||0,E,A,P,y;n?c!==Ws&&(A=f*m-_*g)&&(P=x*(m/A)+w*(-g/A)+(g*v-m*p)/A,y=x*(-_/A)+w*(f/A)-(f*v-_*p)/A,x=P,w=y):(E=sp(e),x=E.x+(~M[0].indexOf("%")?x/100*E.width:x),w=E.y+(~(M[1]||M[0]).indexOf("%")?w/100*E.height:w)),i||i!==!1&&a.smooth?(p=x-h,v=w-d,a.xOffset=l+(p*f+v*g)-p,a.yOffset=u+(p*_+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=w,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Kt]="0px 0px",o&&(Ai(o,a,"xOrigin",h,x),Ai(o,a,"yOrigin",d,w),Ai(o,a,"xOffset",l,a.xOffset),Ai(o,a,"yOffset",u,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+w)},Xs=function(e,t){var n=e._gsap||new Xf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",c=getComputedStyle(e),h=gn(e,Kt)||"0",d,l,u,f,_,g,m,p,v,M,x,w,E,A,P,y,T,L,z,O,G,q,V,Y,H,te,ae,pe,Ae,Ye,X,J;return d=l=u=g=m=p=v=M=x=0,f=_=1,n.svg=!!(e.getCTM&&op(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[dt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[dt]!=="none"?c[dt]:"")),i.scale=i.rotate=i.translate="none"),A=oh(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),h=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),gc(e,Y||h,!!Y||n.originIsAbsolute,n.smooth!==!1,A)),w=n.xOrigin||0,E=n.yOrigin||0,A!==Ws&&(L=A[0],z=A[1],O=A[2],G=A[3],d=q=A[4],l=V=A[5],A.length===6?(f=Math.sqrt(L*L+z*z),_=Math.sqrt(G*G+O*O),g=L||z?Sr(z,L)*qi:0,v=O||G?Sr(O,G)*qi+g:0,v&&(_*=Math.abs(Math.cos(v*Or))),n.svg&&(d-=w-(w*L+E*O),l-=E-(w*z+E*G))):(J=A[6],Ye=A[7],ae=A[8],pe=A[9],Ae=A[10],X=A[11],d=A[12],l=A[13],u=A[14],P=Sr(J,Ae),m=P*qi,P&&(y=Math.cos(-P),T=Math.sin(-P),Y=q*y+ae*T,H=V*y+pe*T,te=J*y+Ae*T,ae=q*-T+ae*y,pe=V*-T+pe*y,Ae=J*-T+Ae*y,X=Ye*-T+X*y,q=Y,V=H,J=te),P=Sr(-O,Ae),p=P*qi,P&&(y=Math.cos(-P),T=Math.sin(-P),Y=L*y-ae*T,H=z*y-pe*T,te=O*y-Ae*T,X=G*T+X*y,L=Y,z=H,O=te),P=Sr(z,L),g=P*qi,P&&(y=Math.cos(P),T=Math.sin(P),Y=L*y+z*T,H=q*y+V*T,z=z*y-L*T,V=V*y-q*T,L=Y,q=H),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=gt(Math.sqrt(L*L+z*z+O*O)),_=gt(Math.sqrt(V*V+J*J)),P=Sr(q,V),v=Math.abs(P)>2e-4?P*qi:0,x=X?1/(X<0?-X:X):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!lp(gn(e,dt)),Y&&e.setAttribute("transform",Y))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(f*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=d-((n.xPercent=d&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=l-((n.yPercent=l&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-l)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=gt(f),n.scaleY=gt(_),n.rotation=gt(g)+a,n.rotationX=gt(m)+a,n.rotationY=gt(p)+a,n.skewX=v+a,n.skewY=M+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(h.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Kt]=ta(h)),n.xOffset=n.yOffset=0,n.force3D=sn.force3D,n.renderTransform=n.svg?jS:rp?cp:YS,n.uncache=0,n},ta=function(e){return(e=e.split(" "))[0]+" "+e[1]},cl=function(e,t,n){var i=Dt(t);return gt(parseFloat(t)+parseFloat(Ii(e,"x",n+"px",i)))+i},YS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,cp(e,t)},Gi="0deg",xs="0px",Wi=") ",cp=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.z,h=n.rotation,d=n.rotationY,l=n.rotationX,u=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,M=n.zOrigin,x="",w=p==="auto"&&e&&e!==1||p===!0;if(M&&(l!==Gi||d!==Gi)){var E=parseFloat(d)*Or,A=Math.sin(E),P=Math.cos(E),y;E=parseFloat(l)*Or,y=Math.cos(E),o=cl(v,o,A*y*-M),a=cl(v,a,-Math.sin(E)*-M),c=cl(v,c,P*y*-M+M)}m!==xs&&(x+="perspective("+m+Wi),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(w||o!==xs||a!==xs||c!==xs)&&(x+=c!==xs||w?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+Wi),h!==Gi&&(x+="rotate("+h+Wi),d!==Gi&&(x+="rotateY("+d+Wi),l!==Gi&&(x+="rotateX("+l+Wi),(u!==Gi||f!==Gi)&&(x+="skew("+u+", "+f+Wi),(_!==1||g!==1)&&(x+="scale("+_+", "+g+Wi),v.style[dt]=x||"translate(0, 0)"},jS=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.rotation,h=n.skewX,d=n.skewY,l=n.scaleX,u=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,M=parseFloat(o),x=parseFloat(a),w,E,A,P,y;c=parseFloat(c),h=parseFloat(h),d=parseFloat(d),d&&(d=parseFloat(d),h+=d,c+=d),c||h?(c*=Or,h*=Or,w=Math.cos(c)*l,E=Math.sin(c)*l,A=Math.sin(c-h)*-u,P=Math.cos(c-h)*u,h&&(d*=Or,y=Math.tan(h-d),y=Math.sqrt(1+y*y),A*=y,P*=y,d&&(y=Math.tan(d),y=Math.sqrt(1+y*y),w*=y,E*=y)),w=gt(w),E=gt(E),A=gt(A),P=gt(P)):(w=l,P=u,E=A=0),(M&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(M=Ii(f,"x",o,"px"),x=Ii(f,"y",a,"px")),(_||g||m||p)&&(M=gt(M+_-(_*w+g*A)+m),x=gt(x+g-(_*E+g*P)+p)),(i||r)&&(y=f.getBBox(),M=gt(M+i/100*y.width),x=gt(x+r/100*y.height)),y="matrix("+w+","+E+","+A+","+P+","+M+","+x+")",f.setAttribute("transform",y),v&&(f.style[dt]=y)},KS=function(e,t,n,i,r){var o=360,a=wt(r),c=parseFloat(r)*(a&&~r.indexOf("rad")?qi:1),h=c-i,d=i+h+"deg",l,u;return a&&(l=r.split("_")[1],l==="short"&&(h%=o,h!==h%(o/2)&&(h+=h<0?o:-o)),l==="cw"&&h<0?h=(h+o*td)%o-~~(h/o)*o:l==="ccw"&&h>0&&(h=(h-o*td)%o-~~(h/o)*o)),e._pt=u=new jt(e._pt,t,n,i,h,IS),u.e=d,u.u="deg",e._props.push(n),u},ld=function(e,t){for(var n in t)e[n]=t[n];return e},ZS=function(e,t,n){var i=ld({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,h,d,l,u,f,_;i.svg?(h=n.getAttribute("transform"),n.setAttribute("transform",""),o[dt]=t,a=Xs(n,1),ir(n,dt),n.setAttribute("transform",h)):(h=getComputedStyle(n)[dt],o[dt]=t,a=Xs(n,1),o[dt]=h);for(c in hi)h=i[c],d=a[c],h!==d&&r.indexOf(c)<0&&(f=Dt(h),_=Dt(d),l=f!==_?Ii(n,c,h,_):parseFloat(h),u=parseFloat(d),e._pt=new jt(e._pt,a,c,l,u-l,pc),e._pt.u=_||0,e._props.push(c));ld(a,i)};Yt("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});ea[e>1?"border"+s:s]=function(a,c,h,d,l){var u,f;if(arguments.length<4)return u=o.map(function(_){return ii(a,_,h)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(d+"").split(" "),f={},o.forEach(function(_,g){return f[_]=u[g]=u[g]||u[(g-1)/2|0]}),a.init(c,f,l)}});var hp={name:"css",register:_c,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,c=n.vars.startAt,h,d,l,u,f,_,g,m,p,v,M,x,w,E,A,P;ih||_c(),this.styles=this.styles||ip(e),P=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(d=t[g],!(en[g]&&qf(g,t,n,i,e,r)))){if(f=typeof d,_=ea[g],f==="function"&&(d=d.call(n,i,e,r),f=typeof d),f==="string"&&~d.indexOf("random(")&&(d=Hs(d)),_)_(this,e,g,d,n)&&(A=1);else if(g.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(g)+"").trim(),d+="",Ci.lastIndex=0,Ci.test(h)||(m=Dt(h),p=Dt(d)),p?m!==p&&(h=Ii(e,g,h,p)+p):m&&(d+=m),this.add(a,"setProperty",h,d,i,r,0,0,g),o.push(g),P.push(g,0,a[g]);else if(f!=="undefined"){if(c&&g in c?(h=typeof c[g]=="function"?c[g].call(n,i,e,r):c[g],wt(h)&&~h.indexOf("random(")&&(h=Hs(h)),Dt(h+"")||h==="auto"||(h+=sn.units[g]||Dt(ii(e,g))||""),(h+"").charAt(1)==="="&&(h=ii(e,g))):h=ii(e,g),u=parseFloat(h),v=f==="string"&&d.charAt(1)==="="&&d.substr(0,2),v&&(d=d.substr(2)),l=parseFloat(d),g in Bn&&(g==="autoAlpha"&&(u===1&&ii(e,"visibility")==="hidden"&&l&&(u=0),P.push("visibility",0,a.visibility),Ai(this,a,"visibility",u?"inherit":"hidden",l?"inherit":"hidden",!l)),g!=="scale"&&g!=="transform"&&(g=Bn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in hi,M){if(this.styles.save(g),f==="string"&&d.substring(0,6)==="var(--"&&(d=gn(e,d.substring(4,d.indexOf(")"))),l=parseFloat(d)),x||(w=e._gsap,w.renderTransform&&!t.parseTransform||Xs(e,t.parseTransform),E=t.smoothOrigin!==!1&&w.smooth,x=this._pt=new jt(this._pt,a,dt,0,1,w.renderTransform,w,0,-1),x.dep=1),g==="scale")this._pt=new jt(this._pt,w,"scaleY",w.scaleY,(v?Nr(w.scaleY,v+l):l)-w.scaleY||0,pc),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(Kt,0,a[Kt]),d=XS(d),w.svg?gc(e,d,0,E,0,this):(p=parseFloat(d.split(" ")[2])||0,p!==w.zOrigin&&Ai(this,w,"zOrigin",w.zOrigin,p),Ai(this,a,g,ta(h),ta(d)));continue}else if(g==="svgOrigin"){gc(e,d,1,E,0,this);continue}else if(g in ap){KS(this,w,g,u,v?Nr(u,v+d):d);continue}else if(g==="smoothOrigin"){Ai(this,w,"smooth",w.smooth,d);continue}else if(g==="force3D"){w[g]=d;continue}else if(g==="transform"){ZS(this,d,e);continue}}else g in a||(g=Qr(g)||g);if(M||(l||l===0)&&(u||u===0)&&!LS.test(d)&&g in a)m=(h+"").substr((u+"").length),l||(l=0),p=Dt(d)||(g in sn.units?sn.units[g]:m),m!==p&&(u=Ii(e,g,h,p)),this._pt=new jt(this._pt,M?w:a,g,u,(v?Nr(u,v+l):l)-u,!M&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?NS:pc),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=h,this._pt.r=DS);else if(g in a)WS.call(this,e,g,h,v?v+d:d);else if(g in e)this.add(e,g,h||e[g],v?v+d:d,i,r);else if(g!=="parseTransform"){Yc(g,d);continue}M||(g in a?P.push(g,0,a[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,h||e[g])),o.push(g)}}A&&Jf(this)},render:function(e,t){if(t.tween._time||!rh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ii,aliases:Bn,getSetter:function(e,t,n){var i=Bn[t];return i&&i.indexOf(",")<0&&(t=i),t in hi&&t!==Kt&&(e._gsap.x||ii(e,"x"))?n&&ed===n?t==="scale"?BS:FS:(ed=n||{})&&(t==="scale"?kS:zS):e.style&&!Wc(e.style[t])?US:~t.indexOf("-")?OS:th(e,t)},core:{_removeProperty:ir,_getMatrix:oh}};Zt.utils.checkPrefix=Qr;Zt.core.getStyleSaver=ip;(function(s,e,t,n){var i=Yt(s+","+e+","+t,function(r){hi[r]=1});Yt(e,function(r){sn.units[r]="deg",ap[r]=1}),Bn[i[13]]=s+","+e,Yt(n,function(r){var o=r.split(":");Bn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Yt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){sn.units[s]="px"});Zt.registerPlugin(hp);var An=Zt.registerPlugin(hp)||Zt;An.core.Tween;var ys=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},hl={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */var cd;function $S(){return cd||(cd=1,(function(s){(function(){var e=function(){this.init()};e.prototype={init:function(){var l=this||t;return l._counter=1e3,l._html5AudioPool=[],l.html5PoolSize=10,l._codecs={},l._howls=[],l._muted=!1,l._volume=1,l._canPlayEvent="canplaythrough",l._navigator=typeof window<"u"&&window.navigator?window.navigator:null,l.masterGain=null,l.noAudio=!1,l.usingWebAudio=!0,l.autoSuspend=!0,l.ctx=null,l.autoUnlock=!0,l._setup(),l},volume:function(l){var u=this||t;if(l=parseFloat(l),u.ctx||d(),typeof l<"u"&&l>=0&&l<=1){if(u._volume=l,u._muted)return u;u.usingWebAudio&&u.masterGain.gain.setValueAtTime(l,t.ctx.currentTime);for(var f=0;f<u._howls.length;f++)if(!u._howls[f]._webAudio)for(var _=u._howls[f]._getSoundIds(),g=0;g<_.length;g++){var m=u._howls[f]._soundById(_[g]);m&&m._node&&(m._node.volume=m._volume*l)}return u}return u._volume},mute:function(l){var u=this||t;u.ctx||d(),u._muted=l,u.usingWebAudio&&u.masterGain.gain.setValueAtTime(l?0:u._volume,t.ctx.currentTime);for(var f=0;f<u._howls.length;f++)if(!u._howls[f]._webAudio)for(var _=u._howls[f]._getSoundIds(),g=0;g<_.length;g++){var m=u._howls[f]._soundById(_[g]);m&&m._node&&(m._node.muted=l?!0:m._muted)}return u},stop:function(){for(var l=this||t,u=0;u<l._howls.length;u++)l._howls[u].stop();return l},unload:function(){for(var l=this||t,u=l._howls.length-1;u>=0;u--)l._howls[u].unload();return l.usingWebAudio&&l.ctx&&typeof l.ctx.close<"u"&&(l.ctx.close(),l.ctx=null,d()),l},codecs:function(l){return(this||t)._codecs[l.replace(/^x-/,"")]},_setup:function(){var l=this||t;if(l.state=l.ctx&&l.ctx.state||"suspended",l._autoSuspend(),!l.usingWebAudio)if(typeof Audio<"u")try{var u=new Audio;typeof u.oncanplaythrough>"u"&&(l._canPlayEvent="canplay")}catch{l.noAudio=!0}else l.noAudio=!0;try{var u=new Audio;u.muted&&(l.noAudio=!0)}catch{}return l.noAudio||l._setupCodecs(),l},_setupCodecs:function(){var l=this||t,u=null;try{u=typeof Audio<"u"?new Audio:null}catch{return l}if(!u||typeof u.canPlayType!="function")return l;var f=u.canPlayType("audio/mpeg;").replace(/^no$/,""),_=l._navigator?l._navigator.userAgent:"",g=_.match(/OPR\/(\d+)/g),m=g&&parseInt(g[0].split("/")[1],10)<33,p=_.indexOf("Safari")!==-1&&_.indexOf("Chrome")===-1,v=_.match(/Version\/(.*?) /),M=p&&v&&parseInt(v[1],10)<15;return l._codecs={mp3:!!(!m&&(f||u.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!f,opus:!!u.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(u.canPlayType('audio/wav; codecs="1"')||u.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!u.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!u.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(u.canPlayType("audio/x-m4a;")||u.canPlayType("audio/m4a;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(u.canPlayType("audio/x-m4b;")||u.canPlayType("audio/m4b;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(u.canPlayType("audio/x-mp4;")||u.canPlayType("audio/mp4;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!M&&u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!M&&u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!u.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(u.canPlayType("audio/x-flac;")||u.canPlayType("audio/flac;")).replace(/^no$/,"")},l},_unlockAudio:function(){var l=this||t;if(!(l._audioUnlocked||!l.ctx)){l._audioUnlocked=!1,l.autoUnlock=!1,!l._mobileUnloaded&&l.ctx.sampleRate!==44100&&(l._mobileUnloaded=!0,l.unload()),l._scratchBuffer=l.ctx.createBuffer(1,1,22050);var u=function(f){for(;l._html5AudioPool.length<l.html5PoolSize;)try{var _=new Audio;_._unlocked=!0,l._releaseHtml5Audio(_)}catch{l.noAudio=!0;break}for(var g=0;g<l._howls.length;g++)if(!l._howls[g]._webAudio)for(var m=l._howls[g]._getSoundIds(),p=0;p<m.length;p++){var v=l._howls[g]._soundById(m[p]);v&&v._node&&!v._node._unlocked&&(v._node._unlocked=!0,v._node.load())}l._autoResume();var M=l.ctx.createBufferSource();M.buffer=l._scratchBuffer,M.connect(l.ctx.destination),typeof M.start>"u"?M.noteOn(0):M.start(0),typeof l.ctx.resume=="function"&&l.ctx.resume(),M.onended=function(){M.disconnect(0),l._audioUnlocked=!0,document.removeEventListener("touchstart",u,!0),document.removeEventListener("touchend",u,!0),document.removeEventListener("click",u,!0),document.removeEventListener("keydown",u,!0);for(var x=0;x<l._howls.length;x++)l._howls[x]._emit("unlock")}};return document.addEventListener("touchstart",u,!0),document.addEventListener("touchend",u,!0),document.addEventListener("click",u,!0),document.addEventListener("keydown",u,!0),l}},_obtainHtml5Audio:function(){var l=this||t;if(l._html5AudioPool.length)return l._html5AudioPool.pop();var u=new Audio().play();return u&&typeof Promise<"u"&&(u instanceof Promise||typeof u.then=="function")&&u.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(l){var u=this||t;return l._unlocked&&u._html5AudioPool.push(l),u},_autoSuspend:function(){var l=this;if(!(!l.autoSuspend||!l.ctx||typeof l.ctx.suspend>"u"||!t.usingWebAudio)){for(var u=0;u<l._howls.length;u++)if(l._howls[u]._webAudio){for(var f=0;f<l._howls[u]._sounds.length;f++)if(!l._howls[u]._sounds[f]._paused)return l}return l._suspendTimer&&clearTimeout(l._suspendTimer),l._suspendTimer=setTimeout(function(){if(l.autoSuspend){l._suspendTimer=null,l.state="suspending";var _=function(){l.state="suspended",l._resumeAfterSuspend&&(delete l._resumeAfterSuspend,l._autoResume())};l.ctx.suspend().then(_,_)}},3e4),l}},_autoResume:function(){var l=this;if(!(!l.ctx||typeof l.ctx.resume>"u"||!t.usingWebAudio))return l.state==="running"&&l.ctx.state!=="interrupted"&&l._suspendTimer?(clearTimeout(l._suspendTimer),l._suspendTimer=null):l.state==="suspended"||l.state==="running"&&l.ctx.state==="interrupted"?(l.ctx.resume().then(function(){l.state="running";for(var u=0;u<l._howls.length;u++)l._howls[u]._emit("resume")}),l._suspendTimer&&(clearTimeout(l._suspendTimer),l._suspendTimer=null)):l.state==="suspending"&&(l._resumeAfterSuspend=!0),l}};var t=new e,n=function(l){var u=this;if(!l.src||l.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}u.init(l)};n.prototype={init:function(l){var u=this;return t.ctx||d(),u._autoplay=l.autoplay||!1,u._format=typeof l.format!="string"?l.format:[l.format],u._html5=l.html5||!1,u._muted=l.mute||!1,u._loop=l.loop||!1,u._pool=l.pool||5,u._preload=typeof l.preload=="boolean"||l.preload==="metadata"?l.preload:!0,u._rate=l.rate||1,u._sprite=l.sprite||{},u._src=typeof l.src!="string"?l.src:[l.src],u._volume=l.volume!==void 0?l.volume:1,u._xhr={method:l.xhr&&l.xhr.method?l.xhr.method:"GET",headers:l.xhr&&l.xhr.headers?l.xhr.headers:null,withCredentials:l.xhr&&l.xhr.withCredentials?l.xhr.withCredentials:!1},u._duration=0,u._state="unloaded",u._sounds=[],u._endTimers={},u._queue=[],u._playLock=!1,u._onend=l.onend?[{fn:l.onend}]:[],u._onfade=l.onfade?[{fn:l.onfade}]:[],u._onload=l.onload?[{fn:l.onload}]:[],u._onloaderror=l.onloaderror?[{fn:l.onloaderror}]:[],u._onplayerror=l.onplayerror?[{fn:l.onplayerror}]:[],u._onpause=l.onpause?[{fn:l.onpause}]:[],u._onplay=l.onplay?[{fn:l.onplay}]:[],u._onstop=l.onstop?[{fn:l.onstop}]:[],u._onmute=l.onmute?[{fn:l.onmute}]:[],u._onvolume=l.onvolume?[{fn:l.onvolume}]:[],u._onrate=l.onrate?[{fn:l.onrate}]:[],u._onseek=l.onseek?[{fn:l.onseek}]:[],u._onunlock=l.onunlock?[{fn:l.onunlock}]:[],u._onresume=[],u._webAudio=t.usingWebAudio&&!u._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(u),u._autoplay&&u._queue.push({event:"play",action:function(){u.play()}}),u._preload&&u._preload!=="none"&&u.load(),u},load:function(){var l=this,u=null;if(t.noAudio){l._emit("loaderror",null,"No audio support.");return}typeof l._src=="string"&&(l._src=[l._src]);for(var f=0;f<l._src.length;f++){var _,g;if(l._format&&l._format[f])_=l._format[f];else{if(g=l._src[f],typeof g!="string"){l._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}_=/^data:audio\/([^;,]+);/i.exec(g),_||(_=/\.([^.]+)$/.exec(g.split("?",1)[0])),_&&(_=_[1].toLowerCase())}if(_||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),_&&t.codecs(_)){u=l._src[f];break}}if(!u){l._emit("loaderror",null,"No codec support for selected audio sources.");return}return l._src=u,l._state="loading",window.location.protocol==="https:"&&u.slice(0,5)==="http:"&&(l._html5=!0,l._webAudio=!1),new i(l),l._webAudio&&o(l),l},play:function(l,u){var f=this,_=null;if(typeof l=="number")_=l,l=null;else{if(typeof l=="string"&&f._state==="loaded"&&!f._sprite[l])return null;if(typeof l>"u"&&(l="__default",!f._playLock)){for(var g=0,m=0;m<f._sounds.length;m++)f._sounds[m]._paused&&!f._sounds[m]._ended&&(g++,_=f._sounds[m]._id);g===1?l=null:_=null}}var p=_?f._soundById(_):f._inactiveSound();if(!p)return null;if(_&&!l&&(l=p._sprite||"__default"),f._state!=="loaded"){p._sprite=l,p._ended=!1;var v=p._id;return f._queue.push({event:"play",action:function(){f.play(v)}}),v}if(_&&!p._paused)return u||f._loadQueue("play"),p._id;f._webAudio&&t._autoResume();var M=Math.max(0,p._seek>0?p._seek:f._sprite[l][0]/1e3),x=Math.max(0,(f._sprite[l][0]+f._sprite[l][1])/1e3-M),w=x*1e3/Math.abs(p._rate),E=f._sprite[l][0]/1e3,A=(f._sprite[l][0]+f._sprite[l][1])/1e3;p._sprite=l,p._ended=!1;var P=function(){p._paused=!1,p._seek=M,p._start=E,p._stop=A,p._loop=!!(p._loop||f._sprite[l][2])};if(M>=A){f._ended(p);return}var y=p._node;if(f._webAudio){var T=function(){f._playLock=!1,P(),f._refreshBuffer(p);var G=p._muted||f._muted?0:p._volume;y.gain.setValueAtTime(G,t.ctx.currentTime),p._playStart=t.ctx.currentTime,typeof y.bufferSource.start>"u"?p._loop?y.bufferSource.noteGrainOn(0,M,86400):y.bufferSource.noteGrainOn(0,M,x):p._loop?y.bufferSource.start(0,M,86400):y.bufferSource.start(0,M,x),w!==1/0&&(f._endTimers[p._id]=setTimeout(f._ended.bind(f,p),w)),u||setTimeout(function(){f._emit("play",p._id),f._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?T():(f._playLock=!0,f.once("resume",T),f._clearTimer(p._id))}else{var L=function(){y.currentTime=M,y.muted=p._muted||f._muted||t._muted||y.muted,y.volume=p._volume*t.volume(),y.playbackRate=p._rate;try{var G=y.play();if(G&&typeof Promise<"u"&&(G instanceof Promise||typeof G.then=="function")?(f._playLock=!0,P(),G.then(function(){f._playLock=!1,y._unlocked=!0,u?f._loadQueue():f._emit("play",p._id)}).catch(function(){f._playLock=!1,f._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),p._ended=!0,p._paused=!0})):u||(f._playLock=!1,P(),f._emit("play",p._id)),y.playbackRate=p._rate,y.paused){f._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}l!=="__default"||p._loop?f._endTimers[p._id]=setTimeout(f._ended.bind(f,p),w):(f._endTimers[p._id]=function(){f._ended(p),y.removeEventListener("ended",f._endTimers[p._id],!1)},y.addEventListener("ended",f._endTimers[p._id],!1))}catch(q){f._emit("playerror",p._id,q)}};y.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(y.src=f._src,y.load());var z=window&&window.ejecta||!y.readyState&&t._navigator.isCocoonJS;if(y.readyState>=3||z)L();else{f._playLock=!0,f._state="loading";var O=function(){f._state="loaded",L(),y.removeEventListener(t._canPlayEvent,O,!1)};y.addEventListener(t._canPlayEvent,O,!1),f._clearTimer(p._id)}}return p._id},pause:function(l){var u=this;if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"pause",action:function(){u.pause(l)}}),u;for(var f=u._getSoundIds(l),_=0;_<f.length;_++){u._clearTimer(f[_]);var g=u._soundById(f[_]);if(g&&!g._paused&&(g._seek=u.seek(f[_]),g._rateSeek=0,g._paused=!0,u._stopFade(f[_]),g._node))if(u._webAudio){if(!g._node.bufferSource)continue;typeof g._node.bufferSource.stop>"u"?g._node.bufferSource.noteOff(0):g._node.bufferSource.stop(0),u._cleanBuffer(g._node)}else(!isNaN(g._node.duration)||g._node.duration===1/0)&&g._node.pause();arguments[1]||u._emit("pause",g?g._id:null)}return u},stop:function(l,u){var f=this;if(f._state!=="loaded"||f._playLock)return f._queue.push({event:"stop",action:function(){f.stop(l)}}),f;for(var _=f._getSoundIds(l),g=0;g<_.length;g++){f._clearTimer(_[g]);var m=f._soundById(_[g]);m&&(m._seek=m._start||0,m._rateSeek=0,m._paused=!0,m._ended=!0,f._stopFade(_[g]),m._node&&(f._webAudio?m._node.bufferSource&&(typeof m._node.bufferSource.stop>"u"?m._node.bufferSource.noteOff(0):m._node.bufferSource.stop(0),f._cleanBuffer(m._node)):(!isNaN(m._node.duration)||m._node.duration===1/0)&&(m._node.currentTime=m._start||0,m._node.pause(),m._node.duration===1/0&&f._clearSound(m._node))),u||f._emit("stop",m._id))}return f},mute:function(l,u){var f=this;if(f._state!=="loaded"||f._playLock)return f._queue.push({event:"mute",action:function(){f.mute(l,u)}}),f;if(typeof u>"u")if(typeof l=="boolean")f._muted=l;else return f._muted;for(var _=f._getSoundIds(u),g=0;g<_.length;g++){var m=f._soundById(_[g]);m&&(m._muted=l,m._interval&&f._stopFade(m._id),f._webAudio&&m._node?m._node.gain.setValueAtTime(l?0:m._volume,t.ctx.currentTime):m._node&&(m._node.muted=t._muted?!0:l),f._emit("mute",m._id))}return f},volume:function(){var l=this,u=arguments,f,_;if(u.length===0)return l._volume;if(u.length===1||u.length===2&&typeof u[1]>"u"){var g=l._getSoundIds(),m=g.indexOf(u[0]);m>=0?_=parseInt(u[0],10):f=parseFloat(u[0])}else u.length>=2&&(f=parseFloat(u[0]),_=parseInt(u[1],10));var p;if(typeof f<"u"&&f>=0&&f<=1){if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"volume",action:function(){l.volume.apply(l,u)}}),l;typeof _>"u"&&(l._volume=f),_=l._getSoundIds(_);for(var v=0;v<_.length;v++)p=l._soundById(_[v]),p&&(p._volume=f,u[2]||l._stopFade(_[v]),l._webAudio&&p._node&&!p._muted?p._node.gain.setValueAtTime(f,t.ctx.currentTime):p._node&&!p._muted&&(p._node.volume=f*t.volume()),l._emit("volume",p._id))}else return p=_?l._soundById(_):l._sounds[0],p?p._volume:0;return l},fade:function(l,u,f,_){var g=this;if(g._state!=="loaded"||g._playLock)return g._queue.push({event:"fade",action:function(){g.fade(l,u,f,_)}}),g;l=Math.min(Math.max(0,parseFloat(l)),1),u=Math.min(Math.max(0,parseFloat(u)),1),f=parseFloat(f),g.volume(l,_);for(var m=g._getSoundIds(_),p=0;p<m.length;p++){var v=g._soundById(m[p]);if(v){if(_||g._stopFade(m[p]),g._webAudio&&!v._muted){var M=t.ctx.currentTime,x=M+f/1e3;v._volume=l,v._node.gain.setValueAtTime(l,M),v._node.gain.linearRampToValueAtTime(u,x)}g._startFadeInterval(v,l,u,f,m[p],typeof _>"u")}}return g},_startFadeInterval:function(l,u,f,_,g,m){var p=this,v=u,M=f-u,x=Math.abs(M/.01),w=Math.max(4,x>0?_/x:_),E=Date.now();l._fadeTo=f,l._interval=setInterval(function(){var A=(Date.now()-E)/_;E=Date.now(),v+=M*A,v=Math.round(v*100)/100,M<0?v=Math.max(f,v):v=Math.min(f,v),p._webAudio?l._volume=v:p.volume(v,l._id,!0),m&&(p._volume=v),(f<u&&v<=f||f>u&&v>=f)&&(clearInterval(l._interval),l._interval=null,l._fadeTo=null,p.volume(f,l._id),p._emit("fade",l._id))},w)},_stopFade:function(l){var u=this,f=u._soundById(l);return f&&f._interval&&(u._webAudio&&f._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(f._interval),f._interval=null,u.volume(f._fadeTo,l),f._fadeTo=null,u._emit("fade",l)),u},loop:function(){var l=this,u=arguments,f,_,g;if(u.length===0)return l._loop;if(u.length===1)if(typeof u[0]=="boolean")f=u[0],l._loop=f;else return g=l._soundById(parseInt(u[0],10)),g?g._loop:!1;else u.length===2&&(f=u[0],_=parseInt(u[1],10));for(var m=l._getSoundIds(_),p=0;p<m.length;p++)g=l._soundById(m[p]),g&&(g._loop=f,l._webAudio&&g._node&&g._node.bufferSource&&(g._node.bufferSource.loop=f,f&&(g._node.bufferSource.loopStart=g._start||0,g._node.bufferSource.loopEnd=g._stop,l.playing(m[p])&&(l.pause(m[p],!0),l.play(m[p],!0)))));return l},rate:function(){var l=this,u=arguments,f,_;if(u.length===0)_=l._sounds[0]._id;else if(u.length===1){var g=l._getSoundIds(),m=g.indexOf(u[0]);m>=0?_=parseInt(u[0],10):f=parseFloat(u[0])}else u.length===2&&(f=parseFloat(u[0]),_=parseInt(u[1],10));var p;if(typeof f=="number"){if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"rate",action:function(){l.rate.apply(l,u)}}),l;typeof _>"u"&&(l._rate=f),_=l._getSoundIds(_);for(var v=0;v<_.length;v++)if(p=l._soundById(_[v]),p){l.playing(_[v])&&(p._rateSeek=l.seek(_[v]),p._playStart=l._webAudio?t.ctx.currentTime:p._playStart),p._rate=f,l._webAudio&&p._node&&p._node.bufferSource?p._node.bufferSource.playbackRate.setValueAtTime(f,t.ctx.currentTime):p._node&&(p._node.playbackRate=f);var M=l.seek(_[v]),x=(l._sprite[p._sprite][0]+l._sprite[p._sprite][1])/1e3-M,w=x*1e3/Math.abs(p._rate);(l._endTimers[_[v]]||!p._paused)&&(l._clearTimer(_[v]),l._endTimers[_[v]]=setTimeout(l._ended.bind(l,p),w)),l._emit("rate",p._id)}}else return p=l._soundById(_),p?p._rate:l._rate;return l},seek:function(){var l=this,u=arguments,f,_;if(u.length===0)l._sounds.length&&(_=l._sounds[0]._id);else if(u.length===1){var g=l._getSoundIds(),m=g.indexOf(u[0]);m>=0?_=parseInt(u[0],10):l._sounds.length&&(_=l._sounds[0]._id,f=parseFloat(u[0]))}else u.length===2&&(f=parseFloat(u[0]),_=parseInt(u[1],10));if(typeof _>"u")return 0;if(typeof f=="number"&&(l._state!=="loaded"||l._playLock))return l._queue.push({event:"seek",action:function(){l.seek.apply(l,u)}}),l;var p=l._soundById(_);if(p)if(typeof f=="number"&&f>=0){var v=l.playing(_);v&&l.pause(_,!0),p._seek=f,p._ended=!1,l._clearTimer(_),!l._webAudio&&p._node&&!isNaN(p._node.duration)&&(p._node.currentTime=f);var M=function(){v&&l.play(_,!0),l._emit("seek",_)};if(v&&!l._webAudio){var x=function(){l._playLock?setTimeout(x,0):M()};setTimeout(x,0)}else M()}else if(l._webAudio){var w=l.playing(_)?t.ctx.currentTime-p._playStart:0,E=p._rateSeek?p._rateSeek-p._seek:0;return p._seek+(E+w*Math.abs(p._rate))}else return p._node.currentTime;return l},playing:function(l){var u=this;if(typeof l=="number"){var f=u._soundById(l);return f?!f._paused:!1}for(var _=0;_<u._sounds.length;_++)if(!u._sounds[_]._paused)return!0;return!1},duration:function(l){var u=this,f=u._duration,_=u._soundById(l);return _&&(f=u._sprite[_._sprite][1]/1e3),f},state:function(){return this._state},unload:function(){for(var l=this,u=l._sounds,f=0;f<u.length;f++)u[f]._paused||l.stop(u[f]._id),l._webAudio||(l._clearSound(u[f]._node),u[f]._node.removeEventListener("error",u[f]._errorFn,!1),u[f]._node.removeEventListener(t._canPlayEvent,u[f]._loadFn,!1),u[f]._node.removeEventListener("ended",u[f]._endFn,!1),t._releaseHtml5Audio(u[f]._node)),delete u[f]._node,l._clearTimer(u[f]._id);var _=t._howls.indexOf(l);_>=0&&t._howls.splice(_,1);var g=!0;for(f=0;f<t._howls.length;f++)if(t._howls[f]._src===l._src||l._src.indexOf(t._howls[f]._src)>=0){g=!1;break}return r&&g&&delete r[l._src],t.noAudio=!1,l._state="unloaded",l._sounds=[],l=null,null},on:function(l,u,f,_){var g=this,m=g["_on"+l];return typeof u=="function"&&m.push(_?{id:f,fn:u,once:_}:{id:f,fn:u}),g},off:function(l,u,f){var _=this,g=_["_on"+l],m=0;if(typeof u=="number"&&(f=u,u=null),u||f)for(m=0;m<g.length;m++){var p=f===g[m].id;if(u===g[m].fn&&p||!u&&p){g.splice(m,1);break}}else if(l)_["_on"+l]=[];else{var v=Object.keys(_);for(m=0;m<v.length;m++)v[m].indexOf("_on")===0&&Array.isArray(_[v[m]])&&(_[v[m]]=[])}return _},once:function(l,u,f){var _=this;return _.on(l,u,f,1),_},_emit:function(l,u,f){for(var _=this,g=_["_on"+l],m=g.length-1;m>=0;m--)(!g[m].id||g[m].id===u||l==="load")&&(setTimeout((function(p){p.call(this,u,f)}).bind(_,g[m].fn),0),g[m].once&&_.off(l,g[m].fn,g[m].id));return _._loadQueue(l),_},_loadQueue:function(l){var u=this;if(u._queue.length>0){var f=u._queue[0];f.event===l&&(u._queue.shift(),u._loadQueue()),l||f.action()}return u},_ended:function(l){var u=this,f=l._sprite;if(!u._webAudio&&l._node&&!l._node.paused&&!l._node.ended&&l._node.currentTime<l._stop)return setTimeout(u._ended.bind(u,l),100),u;var _=!!(l._loop||u._sprite[f][2]);if(u._emit("end",l._id),!u._webAudio&&_&&u.stop(l._id,!0).play(l._id),u._webAudio&&_){u._emit("play",l._id),l._seek=l._start||0,l._rateSeek=0,l._playStart=t.ctx.currentTime;var g=(l._stop-l._start)*1e3/Math.abs(l._rate);u._endTimers[l._id]=setTimeout(u._ended.bind(u,l),g)}return u._webAudio&&!_&&(l._paused=!0,l._ended=!0,l._seek=l._start||0,l._rateSeek=0,u._clearTimer(l._id),u._cleanBuffer(l._node),t._autoSuspend()),!u._webAudio&&!_&&u.stop(l._id,!0),u},_clearTimer:function(l){var u=this;if(u._endTimers[l]){if(typeof u._endTimers[l]!="function")clearTimeout(u._endTimers[l]);else{var f=u._soundById(l);f&&f._node&&f._node.removeEventListener("ended",u._endTimers[l],!1)}delete u._endTimers[l]}return u},_soundById:function(l){for(var u=this,f=0;f<u._sounds.length;f++)if(l===u._sounds[f]._id)return u._sounds[f];return null},_inactiveSound:function(){var l=this;l._drain();for(var u=0;u<l._sounds.length;u++)if(l._sounds[u]._ended)return l._sounds[u].reset();return new i(l)},_drain:function(){var l=this,u=l._pool,f=0,_=0;if(!(l._sounds.length<u)){for(_=0;_<l._sounds.length;_++)l._sounds[_]._ended&&f++;for(_=l._sounds.length-1;_>=0;_--){if(f<=u)return;l._sounds[_]._ended&&(l._webAudio&&l._sounds[_]._node&&l._sounds[_]._node.disconnect(0),l._sounds.splice(_,1),f--)}}},_getSoundIds:function(l){var u=this;if(typeof l>"u"){for(var f=[],_=0;_<u._sounds.length;_++)f.push(u._sounds[_]._id);return f}else return[l]},_refreshBuffer:function(l){var u=this;return l._node.bufferSource=t.ctx.createBufferSource(),l._node.bufferSource.buffer=r[u._src],l._panner?l._node.bufferSource.connect(l._panner):l._node.bufferSource.connect(l._node),l._node.bufferSource.loop=l._loop,l._loop&&(l._node.bufferSource.loopStart=l._start||0,l._node.bufferSource.loopEnd=l._stop||0),l._node.bufferSource.playbackRate.setValueAtTime(l._rate,t.ctx.currentTime),u},_cleanBuffer:function(l){var u=this,f=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!l.bufferSource)return u;if(t._scratchBuffer&&l.bufferSource&&(l.bufferSource.onended=null,l.bufferSource.disconnect(0),f))try{l.bufferSource.buffer=t._scratchBuffer}catch{}return l.bufferSource=null,u},_clearSound:function(l){var u=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);u||(l.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var i=function(l){this._parent=l,this.init()};i.prototype={init:function(){var l=this,u=l._parent;return l._muted=u._muted,l._loop=u._loop,l._volume=u._volume,l._rate=u._rate,l._seek=0,l._paused=!0,l._ended=!0,l._sprite="__default",l._id=++t._counter,u._sounds.push(l),l.create(),l},create:function(){var l=this,u=l._parent,f=t._muted||l._muted||l._parent._muted?0:l._volume;return u._webAudio?(l._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),l._node.gain.setValueAtTime(f,t.ctx.currentTime),l._node.paused=!0,l._node.connect(t.masterGain)):t.noAudio||(l._node=t._obtainHtml5Audio(),l._errorFn=l._errorListener.bind(l),l._node.addEventListener("error",l._errorFn,!1),l._loadFn=l._loadListener.bind(l),l._node.addEventListener(t._canPlayEvent,l._loadFn,!1),l._endFn=l._endListener.bind(l),l._node.addEventListener("ended",l._endFn,!1),l._node.src=u._src,l._node.preload=u._preload===!0?"auto":u._preload,l._node.volume=f*t.volume(),l._node.load()),l},reset:function(){var l=this,u=l._parent;return l._muted=u._muted,l._loop=u._loop,l._volume=u._volume,l._rate=u._rate,l._seek=0,l._rateSeek=0,l._paused=!0,l._ended=!0,l._sprite="__default",l._id=++t._counter,l},_errorListener:function(){var l=this;l._parent._emit("loaderror",l._id,l._node.error?l._node.error.code:0),l._node.removeEventListener("error",l._errorFn,!1)},_loadListener:function(){var l=this,u=l._parent;u._duration=Math.ceil(l._node.duration*10)/10,Object.keys(u._sprite).length===0&&(u._sprite={__default:[0,u._duration*1e3]}),u._state!=="loaded"&&(u._state="loaded",u._emit("load"),u._loadQueue()),l._node.removeEventListener(t._canPlayEvent,l._loadFn,!1)},_endListener:function(){var l=this,u=l._parent;u._duration===1/0&&(u._duration=Math.ceil(l._node.duration*10)/10,u._sprite.__default[1]===1/0&&(u._sprite.__default[1]=u._duration*1e3),u._ended(l)),l._node.removeEventListener("ended",l._endFn,!1)}};var r={},o=function(l){var u=l._src;if(r[u]){l._duration=r[u].duration,h(l);return}if(/^data:[^;]+;base64,/.test(u)){for(var f=atob(u.split(",")[1]),_=new Uint8Array(f.length),g=0;g<f.length;++g)_[g]=f.charCodeAt(g);c(_.buffer,l)}else{var m=new XMLHttpRequest;m.open(l._xhr.method,u,!0),m.withCredentials=l._xhr.withCredentials,m.responseType="arraybuffer",l._xhr.headers&&Object.keys(l._xhr.headers).forEach(function(p){m.setRequestHeader(p,l._xhr.headers[p])}),m.onload=function(){var p=(m.status+"")[0];if(p!=="0"&&p!=="2"&&p!=="3"){l._emit("loaderror",null,"Failed loading audio file with status: "+m.status+".");return}c(m.response,l)},m.onerror=function(){l._webAudio&&(l._html5=!0,l._webAudio=!1,l._sounds=[],delete r[u],l.load())},a(m)}},a=function(l){try{l.send()}catch{l.onerror()}},c=function(l,u){var f=function(){u._emit("loaderror",null,"Decoding audio data failed.")},_=function(g){g&&u._sounds.length>0?(r[u._src]=g,h(u,g)):f()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(l).then(_).catch(f):t.ctx.decodeAudioData(l,_,f)},h=function(l,u){u&&!l._duration&&(l._duration=u.duration),Object.keys(l._sprite).length===0&&(l._sprite={__default:[0,l._duration*1e3]}),l._state!=="loaded"&&(l._state="loaded",l._emit("load"),l._loadQueue())},d=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var l=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),u=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),f=u?parseInt(u[1],10):null;if(l&&f&&f<9){var _=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!_&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};s.Howler=t,s.Howl=n,typeof ys<"u"?(ys.HowlerGlobal=e,ys.Howler=t,ys.Howl=n,ys.Sound=i):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=i)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var i=n._howls.length-1;i>=0;i--)n._howls[i].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,i){var r=this;if(!r.ctx||!r.ctx.listener)return r;if(n=typeof n!="number"?r._pos[1]:n,i=typeof i!="number"?r._pos[2]:i,typeof t=="number")r._pos=[t,n,i],typeof r.ctx.listener.positionX<"u"?(r.ctx.listener.positionX.setTargetAtTime(r._pos[0],Howler.ctx.currentTime,.1),r.ctx.listener.positionY.setTargetAtTime(r._pos[1],Howler.ctx.currentTime,.1),r.ctx.listener.positionZ.setTargetAtTime(r._pos[2],Howler.ctx.currentTime,.1)):r.ctx.listener.setPosition(r._pos[0],r._pos[1],r._pos[2]);else return r._pos;return r},HowlerGlobal.prototype.orientation=function(t,n,i,r,o,a){var c=this;if(!c.ctx||!c.ctx.listener)return c;var h=c._orientation;if(n=typeof n!="number"?h[1]:n,i=typeof i!="number"?h[2]:i,r=typeof r!="number"?h[3]:r,o=typeof o!="number"?h[4]:o,a=typeof a!="number"?h[5]:a,typeof t=="number")c._orientation=[t,n,i,r,o,a],typeof c.ctx.listener.forwardX<"u"?(c.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),c.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),c.ctx.listener.forwardZ.setTargetAtTime(i,Howler.ctx.currentTime,.1),c.ctx.listener.upX.setTargetAtTime(r,Howler.ctx.currentTime,.1),c.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),c.ctx.listener.upZ.setTargetAtTime(a,Howler.ctx.currentTime,.1)):c.ctx.listener.setOrientation(t,n,i,r,o,a);else return h;return c},Howl.prototype.init=(function(t){return function(n){var i=this;return i._orientation=n.orientation||[1,0,0],i._stereo=n.stereo||null,i._pos=n.pos||null,i._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},i._onstereo=n.onstereo?[{fn:n.onstereo}]:[],i._onpos=n.onpos?[{fn:n.onpos}]:[],i._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}})(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"stereo",action:function(){i.stereo(t,n)}}),i;var r=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")i._stereo=t,i._pos=[t,0,0];else return i._stereo;for(var o=i._getSoundIds(n),a=0;a<o.length;a++){var c=i._soundById(o[a]);if(c)if(typeof t=="number")c._stereo=t,c._pos=[t,0,0],c._node&&(c._pannerAttr.panningModel="equalpower",(!c._panner||!c._panner.pan)&&e(c,r),r==="spatial"?typeof c._panner.positionX<"u"?(c._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),c._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),c._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):c._panner.setPosition(t,0,0):c._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),i._emit("stereo",c._id);else return c._stereo}return i},Howl.prototype.pos=function(t,n,i,r){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(t,n,i,r)}}),o;if(n=typeof n!="number"?0:n,i=typeof i!="number"?-.5:i,typeof r>"u")if(typeof t=="number")o._pos=[t,n,i];else return o._pos;for(var a=o._getSoundIds(r),c=0;c<a.length;c++){var h=o._soundById(a[c]);if(h)if(typeof t=="number")h._pos=[t,n,i],h._node&&((!h._panner||h._panner.pan)&&e(h,"spatial"),typeof h._panner.positionX<"u"?(h._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),h._panner.positionZ.setValueAtTime(i,Howler.ctx.currentTime)):h._panner.setPosition(t,n,i)),o._emit("pos",h._id);else return h._pos}return o},Howl.prototype.orientation=function(t,n,i,r){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(t,n,i,r)}}),o;if(n=typeof n!="number"?o._orientation[1]:n,i=typeof i!="number"?o._orientation[2]:i,typeof r>"u")if(typeof t=="number")o._orientation=[t,n,i];else return o._orientation;for(var a=o._getSoundIds(r),c=0;c<a.length;c++){var h=o._soundById(a[c]);if(h)if(typeof t=="number")h._orientation=[t,n,i],h._node&&(h._panner||(h._pos||(h._pos=o._pos||[0,0,-.5]),e(h,"spatial")),typeof h._panner.orientationX<"u"?(h._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),h._panner.orientationZ.setValueAtTime(i,Howler.ctx.currentTime)):h._panner.setOrientation(t,n,i)),o._emit("orientation",h._id);else return h._orientation}return o},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,i,r,o;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")i=n[0],typeof r>"u"&&(i.pannerAttr||(i.pannerAttr={coneInnerAngle:i.coneInnerAngle,coneOuterAngle:i.coneOuterAngle,coneOuterGain:i.coneOuterGain,distanceModel:i.distanceModel,maxDistance:i.maxDistance,refDistance:i.refDistance,rolloffFactor:i.rolloffFactor,panningModel:i.panningModel}),t._pannerAttr={coneInnerAngle:typeof i.pannerAttr.coneInnerAngle<"u"?i.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof i.pannerAttr.coneOuterAngle<"u"?i.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof i.pannerAttr.coneOuterGain<"u"?i.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof i.pannerAttr.distanceModel<"u"?i.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof i.pannerAttr.maxDistance<"u"?i.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof i.pannerAttr.refDistance<"u"?i.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof i.pannerAttr.rolloffFactor<"u"?i.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof i.pannerAttr.panningModel<"u"?i.pannerAttr.panningModel:t._panningModel});else return o=t._soundById(parseInt(n[0],10)),o?o._pannerAttr:t._pannerAttr;else n.length===2&&(i=n[0],r=parseInt(n[1],10));for(var a=t._getSoundIds(r),c=0;c<a.length;c++)if(o=t._soundById(a[c]),o){var h=o._pannerAttr;h={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:h.coneInnerAngle,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:h.coneOuterAngle,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:h.coneOuterGain,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:h.distanceModel,maxDistance:typeof i.maxDistance<"u"?i.maxDistance:h.maxDistance,refDistance:typeof i.refDistance<"u"?i.refDistance:h.refDistance,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:h.rolloffFactor,panningModel:typeof i.panningModel<"u"?i.panningModel:h.panningModel};var d=o._panner;d||(o._pos||(o._pos=t._pos||[0,0,-.5]),e(o,"spatial"),d=o._panner),d.coneInnerAngle=h.coneInnerAngle,d.coneOuterAngle=h.coneOuterAngle,d.coneOuterGain=h.coneOuterGain,d.distanceModel=h.distanceModel,d.maxDistance=h.maxDistance,d.refDistance=h.refDistance,d.rolloffFactor=h.rolloffFactor,d.panningModel=h.panningModel}return t},Sound.prototype.init=(function(t){return function(){var n=this,i=n._parent;n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,t.call(this),n._stereo?i.stereo(n._stereo):n._pos&&i.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}})(Sound.prototype.init),Sound.prototype.reset=(function(t){return function(){var n=this,i=n._parent;return n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,n._stereo?i.stereo(n._stereo):n._pos?i.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,i._refreshBuffer(n)),t.call(this)}})(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()})(hl)),hl}var Io=$S();const JS="/sq-three-farm/assets/bg-DGUrENlS.mp3",QS="/sq-three-farm/assets/foot-CjUeBl5h.wav",eT="/sq-three-farm/assets/click-BuyyKR_m.mp3",tT="/sq-three-farm/assets/btn-CGlK-V9C.mp3";let nT=class{constructor(e){this.playStatus=!1,this.status=e,this.footInstance=null,this.sounds={bgm:new Io.Howl({src:[JS],loop:!0,volume:.1,preload:!0}),foot:new Io.Howl({src:[QS],volume:.2}),click:new Io.Howl({src:[eT],volume:.5}),btn:new Io.Howl({src:[tT],volume:.5})}}play(e){this.sounds[e].playing()||this.sounds[e].play()}playFoot(){this.sounds.foot.playing()||(this.footInstance=this.sounds.foot.play())}ss;stop(e){if(e){this.sounds[e].stop();return}for(let t in this.sounds)this.sounds[t].stop();this.playStatus=!1}};class iT{constructor(e,t,n,i,r){this.model=e.instance,this.mixer=e.mixer,this.spawnPosition=e.spawnPosition,this.spawnCapsule=i.spawnCapsule,this.animations=t,this.currentAction={instance:null,name:null},this.sound=n,this.octree=i.octree,this.capsule=i.characterCapsule,this.camera=r.camera,this.cameraOffset=r.cameraOffset,this.orbControl=r.orbControl,this.clock=new af,this.GRAVITY=30,this.angle=0,this.playerVelocity=new C,this.playerOnFloor=!1,this.playerDirection=new C,this.moveState={},this.moveSpeed=3,this.mobileControlsDom={forward:document.querySelector(".up-arrow"),backward:document.querySelector(".down-arrow"),left:document.querySelector(".left-arrow"),right:document.querySelector(".right-arrow")},this.cameraFollowSpeed=.05,this.lookAtFollowSpeed=.08,this.currentCameraOffset=new C().copy(this.cameraOffset),this.initMobileControls(),this.initAnimation(),this.init(),this.animate()}initMobileControls(){this.mobileControlsDom.forward.addEventListener("touchstart",()=>{this.moveState.forward=!0,this.sound.playFoot("foot")}),this.mobileControlsDom.backward.addEventListener("touchstart",()=>{this.moveState.backward=!0,this.sound.playFoot("foot")}),this.mobileControlsDom.left.addEventListener("touchstart",()=>{this.moveState.left=!0,this.sound.playFoot("foot")}),this.mobileControlsDom.right.addEventListener("touchstart",()=>{this.moveState.right=!0,this.sound.playFoot("foot")}),this.mobileControlsDom.forward.addEventListener("touchend",()=>{this.moveState.forward=!1,this.isMoving()||this.sound.stop("foot")}),this.mobileControlsDom.backward.addEventListener("touchend",()=>{this.moveState.backward=!1,this.isMoving()||this.sound.stop("foot")}),this.mobileControlsDom.left.addEventListener("touchend",()=>{this.moveState.left=!1,this.isMoving()||this.sound.stop("foot")}),this.mobileControlsDom.right.addEventListener("touchend",()=>{this.moveState.right=!1,this.isMoving()||this.sound.stop("foot")})}initAnimation(){this.actions={Idle:this.mixer.clipAction(this.animations[1]),Walk:this.mixer.clipAction(this.animations[5]),Run:this.mixer.clipAction(this.animations[3]),Jump:this.mixer.clipAction(this.animations[2])};for(const e in this.actions)this.actions[e].enabled=!0,this.actions[e].setEffectiveTimeScale(1),this.actions[e].setLoop(Ed),e!=="Idle"?this.actions[e].setEffectiveWeight(0):this.actions[e].setEffectiveWeight(1);this.actions.Jump.setLoop(Ad),this.actions.Jump.clampWhenFinished=!0,this.currentAction.instance=this.actions.Idle,this.currentAction.instance.play(),this.currentAction.name="Idle"}init(){window.addEventListener("keydown",e=>{switch(event.key.toLowerCase()){case"w":this.moveState.forward=!0,this.sound.playFoot("foot");break;case"s":this.moveState.backward=!0,this.sound.playFoot("foot");break;case"a":this.moveState.left=!0,this.sound.playFoot("foot");break;case"d":this.moveState.right=!0,this.sound.playFoot("foot");break}}),window.addEventListener("keyup",e=>{switch(event.key.toLowerCase()){case"w":this.moveState.forward=!1,this.isMoving()||this.sound.stop("foot");break;case"s":this.moveState.backward=!1,this.isMoving()||this.sound.stop("foot");break;case"a":this.moveState.left=!1,this.isMoving()||this.sound.stop("foot");break;case"d":this.moveState.right=!1,this.isMoving()||this.sound.stop("foot");break}})}isMoving(){return this.moveState.forward||this.moveState.backward||this.moveState.left||this.moveState.right}handleContinuousMovement(e){if(!this.model)return;const t=this.playerVelocity.y;this.playerVelocity.x=0,this.playerVelocity.z=0,this.moveState.forward&&(this.playerVelocity.z+=this.moveSpeed),this.moveState.backward&&(this.playerVelocity.z-=this.moveSpeed),this.moveState.left&&(this.playerVelocity.x-=this.moveSpeed),this.moveState.right&&(this.playerVelocity.x+=this.moveSpeed),this.playerVelocity.y=t}updatePlayer(e){if(!this.model)return;if(this.model.position.y<-20){this.respawnCharacter();return}this.playerOnFloor||(this.playerVelocity.y-=this.GRAVITY*e);const t=this.playerVelocity.clone().multiplyScalar(.025);if(this.capsule.translate(t),this.playerCollisions(),this.model.position.copy(this.capsule.start),this.model.position.y-=2.2,this.playerVelocity.length()>0){const n=Math.atan2(-this.playerVelocity.x,-this.playerVelocity.z);this.model.rotation.y=n}this.isMoving()&&this.updateCamera()}playerCollisions(){const e=this.octree.capsuleIntersect(this.capsule);if(this.playerOnFloor=!1,e)if(this.playerOnFloor=e.normal.y>0,e.depth>=1e-10&&this.capsule.translate(e.normal.multiplyScalar(e.depth)),this.playerOnFloor){this.playerVelocity.y=Math.max(this.playerVelocity.y,0);const t=Math.max(.5,e.normal.y);this.playerVelocity.x*=t,this.playerVelocity.z*=t}else{const t=this.playerVelocity.dot(e.normal);t<0&&this.playerVelocity.addScaledVector(e.normal,-t)}}respawnCharacter(){this.model.position.copy(this.spawnPosition),this.capsule.start=this.spawnCapsule.start.clone(),this.capsule.end=this.spawnCapsule.end.clone(),this.playerVelocity.set(0,0,0)}updateAnimation(){let t=this.isMoving()?"Walk":"Idle";this.currentAction.name!==t&&this.switchToAction(t)}switchToAction(e){const t=this.actions[e],n=this.currentAction.instance,i=.3;n.fadeOut(i),t.reset(),t.setEffectiveWeight(1),t.fadeIn(i),t.play(),this.currentAction.instance=t,this.currentAction.name=e}updateCamera(){if(!this.model)return;const e=new C(this.model.position.x+this.cameraOffset.x,this.model.position.y+this.cameraOffset.y,this.model.position.z+this.cameraOffset.z),t=new C(this.model.position.x,this.model.position.y+1.5,this.model.position.z);this.camera.position.lerp(e,this.cameraFollowSpeed);const n=new C;this.camera.getWorldDirection(n);const i=new C().subVectors(t,this.camera.position).normalize(),r=new C;r.lerpVectors(n,i,this.lookAtFollowSpeed);const o=new C().copy(this.camera.position).add(r);this.camera.lookAt(o),this.orbControl&&(this.orbControl.target.lerp(t,this.lookAtFollowSpeed),this.orbControl.update())}animate(){const e=this.clock.getDelta();this.mixer&&this.mixer.update(e),this.handleContinuousMovement(e),this.updatePlayer(e),this.updateAnimation(),requestAnimationFrame(()=>this.animate())}}const rT={about:{title:"关于我 (Seven_Sun) 💕💕💕 ",content:`
            <p>我是一名前端开发工程师，对前端技术充满热情，热衷于探索和尝试新技术。</p>
            <p>我熟练使用HTML、CSS、JavaScript等前端技术，熟练Vue等主流前端框架。</p>
            <p>熟悉THREE.js、WebGL等图形学技术。</p>
            <div>HTML CSS JavaScript </div>
            <progress value="98" max="100"></progress>
            <div>Vue</div> 
            <progress value="98" max="100"></progress>
            <div>ThreeJS</div> 
            <progress value="50" max="100"></progress>
            <div>Blender</div> 
            <progress value="20" max="100"></progress>
            <div>Ctrl C&V😁</div> 
            <progress value="100" max="100"></progress>
            <div>Author Email: <em>1274562341@qq.com</em></div>
        `},item:{title:"项目介绍 ❤️❤️❤️",content:`
            <p>框架: Vite + ThreeJs</p>
            <p>动画: Gsap</p>
            <p>模型: Blender</p>
            <p>相关链接:</p>
            <p>BGM : 洛克王国BGM remix <a href="https://music.163.com/#/song?id=1467183188" target="_black">🔗</a><p>
            <p>ThreeJS : <a href="https://threejs.org/manual/#en/installation" target="_black">🔗</a><p>
            <p>Blender : <a href="https://www.blender.org/" target="_black">🔗</a><p>
            <p>Gsap : <a href="https://greensock.com/gsap/" target="_black">🔗</a><p>
            <p>人物模型 : <a href="https://www.mixamo.com/" target="_black">🔗</a><p>
        `},other1:{title:"其他 🤔🤔🤔",content:`
            <h3>永远相信，美好的事情即将发生。</h3>
        `},other2:{title:"其他 🤔🤔🤔",content:`
            <h3>不见得每天都是好日子，但是每天总会有些好事是要发生的。</h3>
        `},other3:{title:"其他 🤔🤔🤔",content:`
            <h3>愿你心存美好，永远相信美好的事情即将发生。</h3>
        `}};class sT{constructor(e){this.sound=e,this.closeModalButton=document.getElementById("closeModal"),this.modalOverlay=document.getElementById("modalOverlay"),this.confirmButton=document.getElementById("confirmButton"),this.modalTitle=document.querySelector(".modal-title"),this.modalContent=document.querySelector(".modal-content"),this.closeModalButton.addEventListener("click",this.closeModal.bind(this),!1),this.confirmButton.addEventListener("click",this.closeModal.bind(this),!1),this.modalOverlay.addEventListener("click",t=>{t.target===modalOverlay&&this.closeModal()})}openModal(e){const t=rT[e];this.sound.play("btn"),this.modalOverlay.classList.add("active"),this.modalTitle.textContent=t.title,this.modalContent.innerHTML=t.content}closeModal(){this.sound.play("btn"),this.modalOverlay.classList.remove("active")}}class oT{constructor(){this.BASE_PATH="/sq-three-farm/",this.sound=new nT,this.modal=new sT(this.sound),this.octree=new Vc,this.CAPSULE_RADIUS=1,this.CAPSULE_HEIGHT=4,this.characterCapsule=new ca(new C(0,this.CAPSULE_RADIUS,0),new C(0,this.CAPSULE_HEIGHT,0),this.CAPSULE_RADIUS),this.doms={canvas:document.getElementById("canvas"),parent:document.querySelector(".loading"),loadingValue:document.querySelector(".loading-value"),startGame:document.querySelector(".loaded"),musicDom:document.querySelector(".right-music")},this.sizes={width:window.innerWidth,height:window.innerHeight},this.cameraAniimations={default:{pos:new C(1.18,79.06,7e-5),zom:.06},center:{pos:new C(1.18,79.06,7e-5),zom:.36},laset:{pos:new C(56.74,33.35,56.9),zom:1.56}},this.musicStatus=!0,this.currentActionShowMore={object:null,name:null},this.currentAnimal={object:null,name:null},this.clock=new af,this.videoDom=[],this.initScene(),this.initCamera(),this.initRender(),this.initControl(),this.initLight(),this.initLoader(),this.initMaterial(),this.initModel(),this.initRaycaster(),this.initEvent(),this.animate()}initStats(){this.stats=new Ls,this.stats.showPanel(0),document.body.appendChild(this.stats.dom)}initScene(){this.scene=new Lx,this.scene.background=new we(11454834)}initCamera(){this._a=50;const e=this.sizes.width/this.sizes.height;this.camera=new oa(-e*50,e*50,50,-50,1,1e3),this.camera.position.copy(this.cameraAniimations.default.pos),this.camera.zoom=this.cameraAniimations.default.zom,this.cameraOffset=this.cameraAniimations.laset.pos.clone()}initRender(){this.renderer=new Px({canvas:this.doms.canvas,antialias:!0}),this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ud,this.renderer.toneMapping=fd,this.renderer.toneMappingExposure=1.7,this.renderer.outputColorSpace=ut}initControl(){this.orbControl=new Uy(this.camera,this.renderer.domElement),this.orbControl.enableDamping=!0,this.orbControl.target.set(0,10,0),this.orbControl.enablePan=!1,this.orbControl.maxPolarAngle=Math.PI/2-.3}initLight(){this.lightColor=16777215,this.ambientLight=new gy(this.lightColor,2.7),this.directionLight=new of(this.lightColor,1),this.directionLight.position.set(-120,160,50),this.directionLight.castShadow=!0,this.directionLight.shadow.mapSize.width=4096,this.directionLight.shadow.mapSize.height=4096;const e=150;this.directionLight.shadow.camera.left=-e,this.directionLight.shadow.camera.right=e,this.directionLight.shadow.camera.top=e,this.directionLight.shadow.camera.bottom=-e,this.directionLight.shadow.normalBias=.2,this.scene.add(this.ambientLight,this.directionLight)}initLoader(){this.loadingManger=new rf,this.textureLoader=new sf(this.loadingManger),this.gltfLoader=new jy(this.loadingManger),this.dracoLoader=new CM(this.loadingManger),this.dracoLoader.setDecoderPath(`${this.BASE_PATH}/draco/`),this.dracoLoader.setDecoderConfig({type:"js"}),this.gltfLoader.setDRACOLoader(this.dracoLoader),this.progress={value:0},this.progressTo=An.quickTo(this.progress,"value",{duration:.5,ease:"power1.inOut",onUpdate:()=>{this.doms.loadingValue.innerHTML=Math.round(this.progress.value)}}),this.loadingManger.onProgress=(e,t,n)=>{const i=t/n*100;this.progressTo(i)}}initMaterial(){const e=this.textureLoader.load(`${this.BASE_PATH}/textures/road.png`);e.flipY=!1,e.colorSpace=ut,this.roadMaterial=new Rn({map:e}),this.videoMaterial=new Rn({map:this.createVideoMaterial(`${this.BASE_PATH}/textures/item.mp4`),transparent:!0,opacity:1}),this.videoMaterial2=new Rn({map:this.createVideoMaterial(`${this.BASE_PATH}/textures/item2.mp4`),transparent:!0,opacity:.5})}createVideoMaterial(e){const t=document.createElement("video");t.src=e,t.muted=!0,t.loop=!0,this.videoDom.push(t),t.setAttribute("playsinline",""),t.setAttribute("autoPlay",""),t.setAttribute("preload","auto");const n=new Hx(t);return n.flipY=!1,n.colorSpace=ut,n}async initModel(){this.farmModel=await this.gltfLoader.loadAsync(`${this.BASE_PATH}/model/farm.glb`),this.handleFarmModel(),this.characterModel=await this.gltfLoader.loadAsync(`${this.BASE_PATH}/model/character.glb`),this.handleCharacterModel(),this.startAnimation(),this.collicionModel=await this.gltfLoader.loadAsync(`${this.BASE_PATH}/model/pz.glb`),this.handCollisionModel()}handleFarmModel(){const e=this.farmModel.scene;this.handleNode(e,t=>{t.name==="road"&&(t.material=this.roadMaterial),t.name==="视频展示"&&(t.material=this.videoMaterial),t.name==="视频展示2"&&(t.material=this.videoMaterial2),t.name==="风车"&&An.to(t.rotation,{x:Math.PI*2,duration:10,repeat:-1,ease:"linear"})}),this.scene.add(e)}handleCharacterModel(){const e=this.characterModel.scene;this.characterCapsule.start.copy(new C(0,4.25,0)).add(new C(0,this.CAPSULE_RADIUS,0)),this.characterCapsule.end.copy(new C(0,4.25,0)).add(new C(0,this.CAPSULE_HEIGHT,0)),this.characterMoveInstance=new iT({instance:e,mixer:new Ly(e),spawnPosition:e.position.clone()},this.characterModel.animations,this.sound,{octree:this.octree,characterCapsule:this.characterCapsule,spawnCapsule:{start:this.characterCapsule.start.clone(),end:this.characterCapsule.end.clone()}},{camera:this.camera,cameraOffset:this.cameraOffset,orbControl:this.orbControl}),this.scene.add(e);const t=new Oc(this.CAPSULE_RADIUS,this.CAPSULE_HEIGHT,4,8),n=new Rn({color:16711680,wireframe:!0});new Wt(t,n).position.set(0,4.25,0)}handleNode(e,t){e.traverse(n=>{n.castShadow=!0,n.receiveShadow=!0,t&&t(n)})}handCollisionModel(){const e=this.collicionModel.scene;this.octree.fromGraphNode(e)}startAnimation(){this.progressTo(100),An.timeline({repeat:-1,yoyo:!0}).to([".loading-bar",".loading-text"],{duration:2,color:"rgba(255, 255, 255, 0.3)",ease:"sine.inOut"},0).to(".loading-value",{duration:2,color:"rgba(255, 255, 255, 0.8)",ease:"sine.inOut"},0).to(".loading",{duration:2,backgroundColor:"rgba(174, 201, 114, 0.95)",ease:"sine.inOut"},0),An.to([this.camera.position,this.camera],{duration:2,x:this.cameraAniimations.center.pos.x,y:this.cameraAniimations.center.pos.y,z:this.cameraAniimations.center.pos.z,zoom:this.cameraAniimations.center.zom,ease:"power2.inOut",onUpdate:()=>{this.camera.updateProjectionMatrix()}},0),An.to([this.camera.position,this.camera],{duration:6,x:this.cameraAniimations.laset.pos.x,y:this.cameraAniimations.laset.pos.y,z:this.cameraAniimations.laset.pos.z,zoom:this.cameraAniimations.laset.zom,ease:"power2.inOut",onUpdate:()=>{this.camera.updateProjectionMatrix()},onComplete:()=>{this.doms.startGame.classList.add("active-cursor"),An.to([".loaded",".tip"],{duration:1,opacity:1,ease:"sine.inOut"})}})}initEvent(){this.doms.startGame.addEventListener("click",this.onStartGame.bind(this),!1),this.doms.musicDom.addEventListener("click",this.onMusic.bind(this),!1),this.doms.canvas.addEventListener("click",this.onCanvas.bind(this),!1),window.addEventListener("mousemove",this.onMouseMove.bind(this),!1),window.addEventListener("resize",this.onResize.bind(this),!1),window.addEventListener("contextmenu",function(e){e.preventDefault()}),window.addEventListener("dblclick",function(e){e.preventDefault()}),window.addEventListener("touchstart",function(e){e.touches.length>1&&e.preventDefault()}),window.addEventListener("gesturestart",function(e){e.preventDefault()}),window.addEventListener("gesturechange",function(e){e.preventDefault()}),window.addEventListener("gestureend",function(e){e.preventDefault()})}onStartGame(){this.sound.play("btn"),An.to(".loading",{duration:2,opacity:0,ease:"sine.inOut",onComplete:()=>{this.doms.parent.remove(),this.sound.play("bgm"),this.videoDom.forEach(t=>{t.play()})}}),An.timeline().to(".controls",{duration:2,opacity:1,ease:"sine.inOut"}).to(".right-music",{rotation:360,duration:10,repeat:-1,ease:"linear"},"<")}onMusic(){this.sound.play("btn");const e=this.doms.musicDom.children[0];switch(this.musicStatus=!this.musicStatus,this.musicStatus){case!0:this.sound.play("bgm"),e.src="/assets/music.png";break;case!1:this.sound.stop("bgm"),e.src="/assets/stop_music.png";break}}onCanvas(){this.currentActionShowMore.object?(this.sound.play("btn"),this.currentActionShowMore.name.includes("关于我")?this.modal.openModal("about"):this.currentActionShowMore.name.includes("关于项目")?this.modal.openModal("item"):this.currentActionShowMore.name==="视频展示"?this.modal.openModal("other1"):this.currentActionShowMore.name==="视频展示2"?this.modal.openModal("other2"):this.currentActionShowMore.name==="视频展示3"&&this.modal.openModal("other3")):this.currentAnimal.object&&(this.sound.play("click"),this.animalStart=!0,An.to(this.currentAnimal.object.position,{y:1,duration:.5,yoyo:!0,repeat:1,onComplete:()=>{this.currentAnimal.object&&An.to(this.currentAnimal.object.position,{y:0,duration:.5})}}))}onMouseMove(e){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1}initRaycaster(){this.raycaster=new Iy,this.mouse=new ie}checkRaycast(){if(!this.farmModel)return;this.raycaster.setFromCamera(this.mouse,this.camera);const e=this.raycaster.intersectObjects(this.farmModel.scene.children,!0);if(e.length>0){const t=e[0];t.object.parent.name.includes("展示牌")?(this.currentActionShowMore.object=t.object.parent,this.currentActionShowMore.name=t.object.name,document.body.style.cursor="pointer"):t.object.name.includes("animal")?(this.doms.canvas.classList.add("cursor-pointer"),document.body.style.cursor="pointer",this.currentAnimal.object=t.object,this.currentAnimal.name=t.object.name):t.object.name.includes("视频展示")?(this.currentActionShowMore.object=t.object,this.currentActionShowMore.name=t.object.name,document.body.style.cursor="pointer"):(this.currentActionShowMore.object=null,this.currentActionShowMore.name=null,this.currentAnimal.object=null,this.currentAnimal.name=null,document.body.style.cursor="default")}}onResize(){this.sizes.width=window.innerWidth,this.sizes.height=window.innerHeight;const e=this.sizes.width/this.sizes.height;this.camera.left=-e*this._a,this.camera.right=e*this._a,this.camera.top=this._a,this.camera.bottom=-this._a,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}animate(){this.clock.getDelta(),this.checkRaycast(),this.orbControl.update(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate.bind(this))}}new oT;
