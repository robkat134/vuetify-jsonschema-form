import{m as N,a as A,u as $}from"./tag.raXFAgTq.js";import{bw as W,O as V,b3 as Ze,bh as et,g as tt,b9 as nt,a7 as xe,N as y,c as r,aq as h,ai as P,bx as D,ap as we,by as me,bz as at,aZ as st,bA as it,z as v,J as lt,G as ge,a1 as G,am as M,a8 as E,au as U,a4 as ot,a5 as Ie,ab as rt,e as ne,S as ae,T as ut,Q as Be,o as ct,a3 as Ee,ac as dt,bB as vt,V as ft,a2 as Z,r as se,bC as mt,bD as gt,bE as ht,a9 as bt,bu as yt,as as Ct,al as Ve,a0 as pt,be as St,bF as he,ao as kt,ae as Pe,a6 as _t,ba as xt,bG as be,M as wt,I as It}from"./entry.IeafeRMX.js";import{u as Bt}from"./resizeObserver.2BDxBgMY.js";const Le=["top","bottom"],Et=["start","end","left","right"];function Vt(e,t){let[a,n]=e.split(" ");return n||(n=W(Le,a)?"start":W(Et,a)?"top":"center"),{side:ye(a,t),align:ye(n,t)}}function ye(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function hn(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function bn(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function yn(e){return{side:e.align,align:e.side}}function Cn(e){return W(Le,e.side)?"y":"x"}function pn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",a=arguments.length>2?arguments[2]:void 0;return V()({name:a??Ze(et(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...N()},setup(n,i){let{slots:s}=i;return()=>{var l;return tt(n.tag,{class:[e,n.class],style:n.style},(l=s.default)==null?void 0:l.call(s))}}})}const Pt=y({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),J=V(!1)({name:"VDefaultsProvider",props:Pt(),setup(e,t){let{slots:a}=t;const{defaults:n,disabled:i,reset:s,root:l,scoped:c}=nt(e);return xe(n,{reset:s,root:l,scoped:c,disabled:i}),()=>{var o;return(o=a.default)==null?void 0:o.call(a)}}}),Lt=y({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Tt(e){return{dimensionStyles:r(()=>({height:h(e.height),maxHeight:h(e.maxHeight),maxWidth:h(e.maxWidth),minHeight:h(e.minHeight),minWidth:h(e.minWidth),width:h(e.width)}))}}const Te=y({border:[Boolean,Number,String]},"border");function Ne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{borderClasses:r(()=>{const n=D(e)?e.value:e.border,i=[];if(n===!0||n==="")i.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))i.push(`border-${s}`);return i})}}function ie(e){return we(()=>{const t=[],a={};if(e.value.background)if(me(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text&&at(e.value.background)){const n=st(e.value.background);if(n.a==null||n.a===1){const i=it(n);a.color=i,a.caretColor=i}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(me(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:a}})}function q(e,t){const a=r(()=>({text:D(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:i}=ie(a);return{textColorClasses:n,textColorStyles:i}}function Ce(e,t){const a=r(()=>({background:D(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:i}=ie(a);return{backgroundColorClasses:n,backgroundColorStyles:i}}const $e=y({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Re(e){return{elevationClasses:r(()=>{const a=D(e)?e.value:e.elevation,n=[];return a==null||n.push(`elevation-${a}`),n})}}const le=y({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function oe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{roundedClasses:r(()=>{const n=D(e)?e.value:e.rounded,i=[];if(n===!0||n==="")i.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))i.push(`rounded-${s}`);return i})}}const Nt=[null,"default","comfortable","compact"],ze=y({density:{type:String,default:"default",validator:e=>Nt.includes(e)}},"density");function Oe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{densityClasses:r(()=>`${t}--density-${e.density}`)}}const $t=["elevated","flat","tonal","outlined","text","plain"];function Rt(e,t){return v(lt,null,[e&&v("span",{key:"overlay",class:`${t}__overlay`},null),v("span",{key:"underlay",class:`${t}__underlay`},null)])}const Ae=y({color:String,variant:{type:String,default:"elevated",validator:e=>$t.includes(e)}},"variant");function zt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();const a=r(()=>{const{variant:s}=ge(e);return`${t}--variant-${s}`}),{colorClasses:n,colorStyles:i}=ie(r(()=>{const{variant:s,color:l}=ge(e);return{[["elevated","flat"].includes(s)?"background":"text"]:l}}));return{colorClasses:n,colorStyles:i,variantClasses:a}}const De=y({divided:Boolean,...Te(),...N(),...ze(),...$e(),...le(),...A(),...G(),...Ae()},"VBtnGroup"),pe=V()({name:"VBtnGroup",props:De(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=M(e),{densityClasses:i}=Oe(e),{borderClasses:s}=Ne(e),{elevationClasses:l}=Re(e),{roundedClasses:c}=oe(e);xe({VBtn:{height:"auto",color:E(e,"color"),density:E(e,"density"),flat:!0,variant:E(e,"variant")}}),$(()=>v(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,s.value,i.value,l.value,c.value,e.class],style:e.style},a))}}),Ot=y({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),At=y({value:null,disabled:Boolean,selectedClass:String},"group-item");function Dt(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=U("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=ot();Ie(Symbol.for(`${t.description}:id`),i);const s=rt(t,null);if(!s){if(!a)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const l=E(e,"value"),c=r(()=>!!(s.disabled.value||e.disabled));s.register({id:i,value:l,disabled:c},n),ne(()=>{s.unregister(i)});const o=r(()=>s.isSelected(i)),g=r(()=>o.value&&[s.selectedClass.value,e.selectedClass]);return ae(o,b=>{n.emit("group:selected",{value:b})}),{id:i,isSelected:o,toggle:()=>s.select(i,!o.value),select:b=>s.select(i,b),selectedClass:g,value:l,disabled:c,group:s}}function Gt(e,t){let a=!1;const n=ut([]),i=Be(e,"modelValue",[],u=>u==null?[]:Ge(n,dt(u)),u=>{const d=Ht(n,u);return e.multiple?d:d[0]}),s=U("useGroup");function l(u,d){const C=u,m=Symbol.for(`${t.description}:id`),S=vt(m,s==null?void 0:s.vnode).indexOf(d);S>-1?n.splice(S,0,C):n.push(C)}function c(u){if(a)return;o();const d=n.findIndex(C=>C.id===u);n.splice(d,1)}function o(){const u=n.find(d=>!d.disabled);u&&e.mandatory==="force"&&!i.value.length&&(i.value=[u.id])}ct(()=>{o()}),ne(()=>{a=!0});function g(u,d){const C=n.find(m=>m.id===u);if(!(d&&(C!=null&&C.disabled)))if(e.multiple){const m=i.value.slice(),x=m.findIndex(f=>f===u),S=~x;if(d=d??!S,S&&e.mandatory&&m.length<=1||!S&&e.max!=null&&m.length+1>e.max)return;x<0&&d?m.push(u):x>=0&&!d&&m.splice(x,1),i.value=m}else{const m=i.value.includes(u);if(e.mandatory&&m)return;i.value=d??!m?[u]:[]}}function b(u){if(e.multiple,i.value.length){const d=i.value[0],C=n.findIndex(S=>S.id===d);let m=(C+u)%n.length,x=n[m];for(;x.disabled&&m!==C;)m=(m+u)%n.length,x=n[m];if(x.disabled)return;i.value=[n[m].id]}else{const d=n.find(C=>!C.disabled);d&&(i.value=[d.id])}}const k={register:l,unregister:c,selected:i,select:g,disabled:E(e,"disabled"),prev:()=>b(n.length-1),next:()=>b(1),isSelected:u=>i.value.includes(u),selectedClass:r(()=>e.selectedClass),items:r(()=>n),getItemIndex:u=>Mt(n,u)};return Ie(t,k),k}function Mt(e,t){const a=Ge(e,[t]);return a.length?e.findIndex(n=>n.id===a[0]):-1}function Ge(e,t){const a=[];return t.forEach(n=>{const i=e.find(l=>Ee(n,l.value)),s=e[n];(i==null?void 0:i.value)!=null?a.push(i.id):s!=null&&a.push(s.id)}),a}function Ht(e,t){const a=[];return t.forEach(n=>{const i=e.findIndex(s=>s.id===n);if(~i){const s=e[i];a.push(s.value!=null?s.value:i)}}),a}const Me=Symbol.for("vuetify:v-btn-toggle"),Ft=y({...De(),...Ot()},"VBtnToggle");V()({name:"VBtnToggle",props:Ft(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{isSelected:n,next:i,prev:s,select:l,selected:c}=Gt(e,Me);return $(()=>{const o=pe.filterProps(e);return v(pe,ft({class:["v-btn-toggle",e.class]},o,{style:e.style}),{default:()=>{var g;return[(g=a.default)==null?void 0:g.call(a,{isSelected:n,next:i,prev:s,select:l,selected:c})]}})}),{next:i,prev:s,select:l}}});const Wt=["x-small","small","default","large","x-large"],re=y({size:{type:[String,Number],default:"default"}},"size");function ue(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return we(()=>{let a,n;return W(Wt,e.size)?a=`${t}--size-${e.size}`:e.size&&(n={width:h(e.size),height:h(e.size)}),{sizeClasses:a,sizeStyles:n}})}const qt=y({color:String,start:Boolean,end:Boolean,icon:Z,...N(),...re(),...A({tag:"i"}),...G()},"VIcon"),K=V()({name:"VIcon",props:qt(),setup(e,t){let{attrs:a,slots:n}=t;const i=se(),{themeClasses:s}=M(e),{iconData:l}=mt(r(()=>i.value||e.icon)),{sizeClasses:c}=ue(e),{textColorClasses:o,textColorStyles:g}=q(E(e,"color"));return $(()=>{var k,u;const b=(k=n.default)==null?void 0:k.call(n);return b&&(i.value=(u=gt(b).filter(d=>d.type===ht&&d.children&&typeof d.children=="string")[0])==null?void 0:u.children),v(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",s.value,c.value,o.value,{"v-icon--clickable":!!a.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[c.value?void 0:{fontSize:h(e.size),height:h(e.size),width:h(e.size)},g.value,e.style],role:a.onClick?"button":void 0,"aria-hidden":!a.onClick},{default:()=>[b]})}),{}}});function He(e,t){const a=se(),n=bt(!1);if(yt){const i=new IntersectionObserver(s=>{e==null||e(s,i),n.value=!!s.find(l=>l.isIntersecting)},t);ne(()=>{i.disconnect()}),ae(a,(s,l)=>{l&&(i.unobserve(l),n.value=!1),s&&i.observe(s)},{flush:"post"})}return{intersectionRef:a,isIntersecting:n}}const Xt=y({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...N(),...re(),...A({tag:"div"}),...G()},"VProgressCircular"),Ut=V()({name:"VProgressCircular",props:Xt(),setup(e,t){let{slots:a}=t;const n=20,i=2*Math.PI*n,s=se(),{themeClasses:l}=M(e),{sizeClasses:c,sizeStyles:o}=ue(e),{textColorClasses:g,textColorStyles:b}=q(E(e,"color")),{textColorClasses:k,textColorStyles:u}=q(E(e,"bgColor")),{intersectionRef:d,isIntersecting:C}=He(),{resizeRef:m,contentRect:x}=Bt(),S=r(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),f=r(()=>Number(e.width)),p=r(()=>o.value?Number(e.size):x.value?x.value.width:Math.max(f.value,32)),B=r(()=>n/(1-f.value/p.value)*2),I=r(()=>f.value/p.value*B.value),R=r(()=>h((100-S.value)/100*i));return Ct(()=>{d.value=s.value,m.value=s.value}),$(()=>v(e.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":C.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},l.value,c.value,g.value,e.class],style:[o.value,b.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[v("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${B.value} ${B.value}`},[v("circle",{class:["v-progress-circular__underlay",k.value],style:u.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":I.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),v("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":I.value,"stroke-dasharray":i,"stroke-dashoffset":R.value},null)]),a.default&&v("div",{class:"v-progress-circular__content"},[a.default({value:S.value})])]})),{}}}),Se={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Fe=y({location:String},"location");function We(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=Ve();return{locationStyles:r(()=>{if(!e.location)return{};const{side:s,align:l}=Vt(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function c(g){return a?a(g):0}const o={};return s!=="center"&&(t?o[Se[s]]=`calc(100% - ${c(s)}px)`:o[s]=0),l!=="center"?t?o[Se[l]]=`calc(100% - ${c(l)}px)`:o[l]=0:(s==="center"?o.top=o.left="50%":o[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",o.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),o})}}const Yt=y({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...N(),...Fe({location:"top"}),...le(),...A(),...G()},"VProgressLinear"),jt=V()({name:"VProgressLinear",props:Yt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const n=Be(e,"modelValue"),{isRtl:i,rtlClasses:s}=Ve(),{themeClasses:l}=M(e),{locationStyles:c}=We(e),{textColorClasses:o,textColorStyles:g}=q(e,"color"),{backgroundColorClasses:b,backgroundColorStyles:k}=Ce(r(()=>e.bgColor||e.color)),{backgroundColorClasses:u,backgroundColorStyles:d}=Ce(e,"color"),{roundedClasses:C}=oe(e),{intersectionRef:m,isIntersecting:x}=He(),S=r(()=>parseInt(e.max,10)),f=r(()=>parseInt(e.height,10)),p=r(()=>parseFloat(e.bufferValue)/S.value*100),B=r(()=>parseFloat(n.value)/S.value*100),I=r(()=>i.value!==e.reverse),R=r(()=>e.indeterminate?"fade-transition":"slide-x-transition"),H=r(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function Y(_){if(!m.value)return;const{left:L,right:j,width:T}=m.value.getBoundingClientRect(),F=I.value?T-_.clientX+(j-T):_.clientX-L;n.value=Math.round(F/T*S.value)}return $(()=>v(e.tag,{ref:m,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&x.value,"v-progress-linear--reverse":I.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},C.value,l.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?h(f.value):0,"--v-progress-linear-height":h(f.value),...c.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:B.value,onClick:e.clickable&&Y},{default:()=>[e.stream&&v("div",{key:"stream",class:["v-progress-linear__stream",o.value],style:{...g.value,[I.value?"left":"right"]:h(-f.value),borderTop:`${h(f.value/2)} dotted`,opacity:H.value,top:`calc(50% - ${h(f.value/4)})`,width:h(100-p.value,"%"),"--v-progress-linear-stream-to":h(f.value*(I.value?1:-1))}},null),v("div",{class:["v-progress-linear__background",b.value],style:[k.value,{opacity:H.value,width:h(e.stream?p.value:100,"%")}]},null),v(pt,{name:R.value},{default:()=>[e.indeterminate?v("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(_=>v("div",{key:_,class:["v-progress-linear__indeterminate",_,u.value],style:d.value},null))]):v("div",{class:["v-progress-linear__determinate",u.value],style:[d.value,{width:h(B.value,"%")}]},null)]}),a.default&&v("div",{class:"v-progress-linear__content"},[a.default({value:B.value,buffer:p.value})])]})),{}}}),Jt=y({loading:[Boolean,String]},"loader");function Kt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{loaderClasses:r(()=>({[`${t}--loading`]:e.loading}))}}function Sn(e,t){var n;let{slots:a}=t;return v("div",{class:`${e.name}__loader`},[((n=a.default)==null?void 0:n.call(a,{color:e.color,isActive:e.active}))||v(jt,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Qt=["static","relative","fixed","absolute","sticky"],Zt=y({position:{type:String,validator:e=>Qt.includes(e)}},"position");function en(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{positionClasses:r(()=>e.position?`${t}--${e.position}`:void 0)}}function tn(){const e=U("useRoute");return r(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function kn(){var e,t;return(t=(e=U("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function nn(e,t){const a=St("RouterLink"),n=r(()=>!!(e.href||e.to)),i=r(()=>(n==null?void 0:n.value)||he(t,"click")||he(e,"click"));if(typeof a=="string")return{isLink:n,isClickable:i,href:E(e,"href")};const s=e.to?a.useLink(e):void 0,l=tn();return{isLink:n,isClickable:i,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&r(()=>{var c,o,g;return e.exact?l.value?((g=s.isExactActive)==null?void 0:g.value)&&Ee(s.route.value.query,l.value.query):(o=s.isExactActive)==null?void 0:o.value:(c=s.isActive)==null?void 0:c.value}),href:r(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const an=y({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let Q=!1;function _n(e,t){let a=!1,n,i;kt&&(Pe(()=>{window.addEventListener("popstate",s),n=e==null?void 0:e.beforeEach((l,c,o)=>{Q?a?t(o):o():setTimeout(()=>a?t(o):o()),Q=!0}),i=e==null?void 0:e.afterEach(()=>{Q=!1})}),_t(()=>{window.removeEventListener("popstate",s),n==null||n(),i==null||i()}));function s(l){var c;(c=l.state)!=null&&c.replaced||(a=!0,setTimeout(()=>a=!1))}}function sn(e,t){ae(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&t&&Pe(()=>{t(!0)})},{immediate:!0})}const ee=Symbol("rippleStop"),ln=80;function ke(e,t){e.style.transform=t,e.style.webkitTransform=t}function te(e){return e.constructor.name==="TouchEvent"}function qe(e){return e.constructor.name==="KeyboardEvent"}const on=function(e,t){var k;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,i=0;if(!qe(e)){const u=t.getBoundingClientRect(),d=te(e)?e.touches[e.touches.length-1]:e;n=d.clientX-u.left,i=d.clientY-u.top}let s=0,l=.3;(k=t._ripple)!=null&&k.circle?(l=.15,s=t.clientWidth/2,s=a.center?s:s+Math.sqrt((n-s)**2+(i-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const c=`${(t.clientWidth-s*2)/2}px`,o=`${(t.clientHeight-s*2)/2}px`,g=a.center?c:`${n-s}px`,b=a.center?o:`${i-s}px`;return{radius:s,scale:l,x:g,y:b,centerX:c,centerY:o}},X={show(e,t){var d;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((d=t==null?void 0:t._ripple)!=null&&d.enabled))return;const n=document.createElement("span"),i=document.createElement("span");n.appendChild(i),n.className="v-ripple__container",a.class&&(n.className+=` ${a.class}`);const{radius:s,scale:l,x:c,y:o,centerX:g,centerY:b}=on(e,t,a),k=`${s*2}px`;i.className="v-ripple__animation",i.style.width=k,i.style.height=k,t.appendChild(n);const u=window.getComputedStyle(t);u&&u.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),ke(i,`translate(${c}, ${o}) scale3d(${l},${l},${l})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),ke(i,`translate(${g}, ${b}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const a=t[t.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const n=performance.now()-Number(a.dataset.activated),i=Math.max(250-n,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var c;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((c=a.parentNode)==null?void 0:c.parentNode)===e&&e.removeChild(a.parentNode)},300)},i)}};function Xe(e){return typeof e>"u"||!!e}function z(e){const t={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[ee])){if(e[ee]=!0,te(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(t.center=a._ripple.centered||qe(e),a._ripple.class&&(t.class=a._ripple.class),te(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{X.show(e,a,t)},a._ripple.showTimer=window.setTimeout(()=>{var n;(n=a==null?void 0:a._ripple)!=null&&n.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},ln)}else X.show(e,a,t)}}function _e(e){e[ee]=!0}function w(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{w(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),X.hide(t)}}function Ue(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let O=!1;function Ye(e){!O&&(e.keyCode===be.enter||e.keyCode===be.space)&&(O=!0,z(e))}function je(e){O=!1,w(e)}function Je(e){O&&(O=!1,w(e))}function Ke(e,t,a){const{value:n,modifiers:i}=t,s=Xe(n);if(s||X.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=i.center,e._ripple.circle=i.circle,xt(n)&&n.class&&(e._ripple.class=n.class),s&&!a){if(i.stop){e.addEventListener("touchstart",_e,{passive:!0}),e.addEventListener("mousedown",_e);return}e.addEventListener("touchstart",z,{passive:!0}),e.addEventListener("touchend",w,{passive:!0}),e.addEventListener("touchmove",Ue,{passive:!0}),e.addEventListener("touchcancel",w),e.addEventListener("mousedown",z),e.addEventListener("mouseup",w),e.addEventListener("mouseleave",w),e.addEventListener("keydown",Ye),e.addEventListener("keyup",je),e.addEventListener("blur",Je),e.addEventListener("dragstart",w,{passive:!0})}else!s&&a&&Qe(e)}function Qe(e){e.removeEventListener("mousedown",z),e.removeEventListener("touchstart",z),e.removeEventListener("touchend",w),e.removeEventListener("touchmove",Ue),e.removeEventListener("touchcancel",w),e.removeEventListener("mouseup",w),e.removeEventListener("mouseleave",w),e.removeEventListener("keydown",Ye),e.removeEventListener("keyup",je),e.removeEventListener("dragstart",w),e.removeEventListener("blur",Je)}function rn(e,t){Ke(e,t,!1)}function un(e){delete e._ripple,Qe(e)}function cn(e,t){if(t.value===t.oldValue)return;const a=Xe(t.oldValue);Ke(e,t,a)}const dn={mounted:rn,unmounted:un,updated:cn},vn=y({active:{type:Boolean,default:void 0},symbol:{type:null,default:Me},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Z,appendIcon:Z,block:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...Te(),...N(),...ze(),...Lt(),...$e(),...At(),...Jt(),...Fe(),...Zt(),...le(),...an(),...re(),...A({tag:"button"}),...G(),...Ae({variant:"elevated"})},"VBtn"),xn=V()({name:"VBtn",directives:{Ripple:dn},props:vn(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:a,slots:n}=t;const{themeClasses:i}=M(e),{borderClasses:s}=Ne(e),{colorClasses:l,colorStyles:c,variantClasses:o}=zt(e),{densityClasses:g}=Oe(e),{dimensionStyles:b}=Tt(e),{elevationClasses:k}=Re(e),{loaderClasses:u}=Kt(e),{locationStyles:d}=We(e),{positionClasses:C}=en(e),{roundedClasses:m}=oe(e),{sizeClasses:x,sizeStyles:S}=ue(e),f=Dt(e,e.symbol,!1),p=nn(e,a),B=r(()=>{var _;return e.active!==void 0?e.active:p.isLink.value?(_=p.isActive)==null?void 0:_.value:f==null?void 0:f.isSelected.value}),I=r(()=>(f==null?void 0:f.disabled.value)||e.disabled),R=r(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),H=r(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function Y(_){var L;I.value||p.isLink.value&&(_.metaKey||_.ctrlKey||_.shiftKey||_.button!==0||a.target==="_blank")||((L=p.navigate)==null||L.call(p,_),f==null||f.toggle())}return sn(p,f==null?void 0:f.select),$(()=>{var ce,de;const _=p.isLink.value?"a":e.tag,L=!!(e.prependIcon||n.prepend),j=!!(e.appendIcon||n.append),T=!!(e.icon&&e.icon!==!0),F=(f==null?void 0:f.isSelected.value)&&(!p.isLink.value||((ce=p.isActive)==null?void 0:ce.value))||!f||((de=p.isActive)==null?void 0:de.value);return wt(v(_,{type:_==="a"?void 0:"button",class:["v-btn",f==null?void 0:f.selectedClass.value,{"v-btn--active":B.value,"v-btn--block":e.block,"v-btn--disabled":I.value,"v-btn--elevated":R.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},i.value,s.value,F?l.value:void 0,g.value,k.value,u.value,C.value,m.value,x.value,o.value,e.class],style:[F?c.value:void 0,b.value,d.value,S.value,e.style],disabled:I.value||void 0,href:p.href.value,onClick:Y,value:H.value},{default:()=>{var ve;return[Rt(!0,"v-btn"),!e.icon&&L&&v("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?v(J,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):v(K,{key:"prepend-icon",icon:e.prependIcon},null)]),v("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&T?v(K,{key:"content-icon",icon:e.icon},null):v(J,{key:"content-defaults",disabled:!T,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var fe;return[((fe=n.default)==null?void 0:fe.call(n))??e.text]}})]),!e.icon&&j&&v("span",{key:"append",class:"v-btn__append"},[n.append?v(J,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):v(K,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&v("span",{key:"loader",class:"v-btn__loader"},[((ve=n.loader)==null?void 0:ve.call(n))??v(Ut,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[It("ripple"),!I.value&&e.ripple,null]])}),{}}});export{Vt as A,hn as B,bn as C,yn as D,Cn as E,kn as F,_n as G,Jt as H,Kt as I,Fe as J,Zt as K,Sn as L,We as M,en as N,pn as O,Ut as P,vn as Q,dn as R,ye as S,xn as V,pe as a,K as b,ze as c,Oe as d,q as e,Ce as f,Ot as g,Ae as h,Gt as i,Te as j,$e as k,At as l,Lt as m,le as n,an as o,re as p,Ne as q,zt as r,Re as s,oe as t,Tt as u,ue as v,Dt as w,nn as x,Rt as y,J as z};
