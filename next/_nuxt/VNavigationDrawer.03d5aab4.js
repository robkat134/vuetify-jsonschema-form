import{a2 as G,af as Q,c as v,r as re,U as D,au as W,ax as ce,ac as $,o as ee,a8 as ve,br as fe,a7 as me,I as ge,J as he,e as te,H as _,bs as ye,ba as pe,a3 as we,a0 as be,ap as Se,aq as xe,ab as ne,az as Ie,a6 as Me,ao as J,an as Ee,aa as ke,z as L,V as oe,a1 as Te,O as Re,ai as Ce}from"./entry.64394c32.js";import{J as Le,h as Ve,i as Be,k as Pe,o as $e,d as le,q as ze,r as He,F as Oe,T as Ne}from"./VBtn.0f87dde8.js";import{m as Ye,a as De,u as We}from"./VGrid.82551ad7.js";import{n as _e,u as Ae}from"./index.8e662957.js";const F=Symbol.for("vuetify:layout"),de=Symbol.for("vuetify:layout-item"),ue=1e3,lt=G({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Xe=G({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function ut(){const e=Q(F);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Ze(e){const i=Q(F);if(!i)throw new Error("[Vuetify] Could not find injected layout");const r=e.id??`layout-item-${me()}`,u=ce("useLayoutItem");ve(de,{id:r});const t=$(!1);ge(()=>t.value=!0),he(()=>t.value=!1);const{layoutItemStyles:a,layoutItemScrimStyles:d}=i.register(u,{...e,active:v(()=>t.value?!1:e.active.value),id:r});return te(()=>i.unregister(r)),{layoutItemStyles:a,layoutRect:i.layoutRect,layoutItemScrimStyles:d}}const qe=(e,i,r,u)=>{let t={top:0,left:0,right:0,bottom:0};const a=[{id:"",layer:{...t}}];for(const d of e){const p=i.get(d),b=r.get(d),h=u.get(d);if(!p||!b||!h)continue;const c={...t,[p.value]:parseInt(t[p.value],10)+(h.value?parseInt(b.value,10):0)};a.push({id:d,layer:c}),t=c}return a};function it(e){const i=Q(F,null),r=v(()=>i?i.rootZIndex.value-100:ue),u=re([]),t=D(new Map),a=D(new Map),d=D(new Map),p=D(new Map),b=D(new Map),{resizeRef:h,contentRect:c}=Le(),y=v(()=>{const n=new Map,l=e.overlaps??[];for(const o of l.filter(g=>g.includes(":"))){const[g,m]=o.split(":");if(!u.value.includes(g)||!u.value.includes(m))continue;const M=t.get(g),T=t.get(m),H=a.get(g),B=a.get(m);!M||!T||!H||!B||(n.set(m,{position:M.value,amount:parseInt(H.value,10)}),n.set(g,{position:T.value,amount:-parseInt(B.value,10)}))}return n}),f=v(()=>{const n=[...new Set([...d.values()].map(o=>o.value))].sort((o,g)=>o-g),l=[];for(const o of n){const g=u.value.filter(m=>{var M;return((M=d.get(m))==null?void 0:M.value)===o});l.push(...g)}return qe(l,t,a,p)}),w=v(()=>!Array.from(b.values()).some(n=>n.value)),S=v(()=>f.value[f.value.length-1].layer),x=v(()=>({"--v-layout-left":W(S.value.left),"--v-layout-right":W(S.value.right),"--v-layout-top":W(S.value.top),"--v-layout-bottom":W(S.value.bottom),...w.value?void 0:{transition:"none"}})),k=v(()=>f.value.slice(1).map((n,l)=>{let{id:o}=n;const{layer:g}=f.value[l],m=a.get(o),M=t.get(o);return{id:o,...g,size:Number(m.value),position:M.value}})),V=n=>k.value.find(l=>l.id===n),C=ce("createLayout"),E=$(!1);ee(()=>{E.value=!0}),ve(F,{register:(n,l)=>{let{id:o,order:g,position:m,layoutSize:M,elementSize:T,active:H,disableTransitions:B,absolute:U}=l;d.set(o,g),t.set(o,m),a.set(o,M),p.set(o,H),B&&b.set(o,B);const A=fe(de,C==null?void 0:C.vnode).indexOf(n);A>-1?u.value.splice(A,0,o):u.value.push(o);const X=v(()=>k.value.findIndex(P=>P.id===o)),Y=v(()=>r.value+f.value.length*2-X.value*2),I=v(()=>{const P=m.value==="left"||m.value==="right",O=m.value==="right",q=m.value==="bottom",ae={[m.value]:0,zIndex:Y.value,transform:`translate${P?"X":"Y"}(${(H.value?0:-110)*(O||q?-1:1)}%)`,position:U.value||r.value!==ue?"absolute":"fixed",...w.value?void 0:{transition:"none"}};if(!E.value)return ae;const R=k.value[X.value];if(!R)throw new Error(`[Vuetify] Could not find layout item "${o}"`);const K=y.value.get(o);return K&&(R[K.position]+=K.amount),{...ae,height:P?`calc(100% - ${R.top}px - ${R.bottom}px)`:T.value?`${T.value}px`:void 0,left:O?void 0:`${R.left}px`,right:O?`${R.right}px`:void 0,top:m.value!=="bottom"?`${R.top}px`:void 0,bottom:m.value!=="top"?`${R.bottom}px`:void 0,width:P?T.value?`${T.value}px`:void 0:`calc(100% - ${R.left}px - ${R.right}px)`}}),Z=v(()=>({zIndex:Y.value-1}));return{layoutItemStyles:I,layoutItemScrimStyles:Z,zIndex:Y}},unregister:n=>{d.delete(n),t.delete(n),a.delete(n),p.delete(n),b.delete(n),u.value=u.value.filter(l=>l!==n)},mainRect:S,mainStyles:x,getLayoutItem:V,items:k,layoutRect:c,rootZIndex:r});const z=v(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),s=v(()=>({zIndex:i?r.value:void 0,position:i?"relative":void 0,overflow:i?"hidden":void 0}));return{layoutClasses:z,layoutStyles:s,getLayoutItem:V,items:k,layoutRect:c,layoutRef:h}}function Fe(e){let{rootEl:i,isSticky:r,layoutItemStyles:u}=e;const t=$(!1),a=$(0),d=v(()=>{const h=typeof t.value=="boolean"?"top":t.value;return[r.value?{top:"auto",bottom:"auto",height:void 0}:void 0,t.value?{[h]:W(a.value)}:{top:u.value.top}]});ee(()=>{_(r,h=>{h?window.addEventListener("scroll",b,{passive:!0}):window.removeEventListener("scroll",b)},{immediate:!0})}),te(()=>{window.removeEventListener("scroll",b)});let p=0;function b(){const h=p>window.scrollY?"up":"down",c=i.value.getBoundingClientRect(),y=parseFloat(u.value.top??0),f=window.scrollY-Math.max(0,a.value-y),w=c.height+Math.max(a.value,y)-window.scrollY-window.innerHeight,S=parseFloat(getComputedStyle(i.value).getPropertyValue("--v-body-scroll-y"))||0;c.height<window.innerHeight-y?(t.value="top",a.value=y):h==="up"&&t.value==="bottom"||h==="down"&&t.value==="top"?(a.value=window.scrollY+c.top-S,t.value=!0):h==="down"&&w<=0?(a.value=0,t.value="bottom"):h==="up"&&f<=0&&(S?t.value!=="top"&&(a.value=-f+S+y,t.value="top"):(a.value=c.top+f,t.value="top")),p=window.scrollY}return{isStuck:t,stickyStyles:d}}const Ue=100,je=20;function ie(e){const i=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*i}function se(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let i=0;for(let r=e.length-1;r>0;r--){if(e[r].t===e[r-1].t)continue;const u=ie(i),t=(e[r].d-e[r-1].d)/(e[r].t-e[r-1].t);i+=(t-u)*Math.abs(t),r===e.length-1&&(i*=.5)}return ie(i)*1e3}function Ke(){const e={};function i(t){Array.from(t.changedTouches).forEach(a=>{(e[a.identifier]??(e[a.identifier]=new ye(je))).push([t.timeStamp,a])})}function r(t){Array.from(t.changedTouches).forEach(a=>{delete e[a.identifier]})}function u(t){var h;const a=(h=e[t])==null?void 0:h.values().reverse();if(!a)throw new Error(`No samples for touch id ${t}`);const d=a[0],p=[],b=[];for(const c of a){if(d[0]-c[0]>Ue)break;p.push({t:c[0],d:c[1].clientX}),b.push({t:c[0],d:c[1].clientY})}return{x:se(p),y:se(b),get direction(){const{x:c,y}=this,[f,w]=[Math.abs(c),Math.abs(y)];return f>w&&c>=0?"right":f>w&&c<=0?"left":w>f&&y>=0?"down":w>f&&y<=0?"up":Je()}}}return{addMovement:i,endTouch:r,getVelocity:u}}function Je(){throw new Error}function Ge(e){let{isActive:i,isTemporary:r,width:u,touchless:t,position:a}=e;ee(()=>{window.addEventListener("touchstart",V,{passive:!0}),window.addEventListener("touchmove",C,{passive:!1}),window.addEventListener("touchend",E,{passive:!0})}),te(()=>{window.removeEventListener("touchstart",V),window.removeEventListener("touchmove",C),window.removeEventListener("touchend",E)});const d=v(()=>["left","right"].includes(a.value)),{addMovement:p,endTouch:b,getVelocity:h}=Ke();let c=!1;const y=$(!1),f=$(0),w=$(0);let S;function x(s,n){return(a.value==="left"?s:a.value==="right"?document.documentElement.clientWidth-s:a.value==="top"?s:a.value==="bottom"?document.documentElement.clientHeight-s:N())-(n?u.value:0)}function k(s){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const l=a.value==="left"?(s-w.value)/u.value:a.value==="right"?(document.documentElement.clientWidth-s-w.value)/u.value:a.value==="top"?(s-w.value)/u.value:a.value==="bottom"?(document.documentElement.clientHeight-s-w.value)/u.value:N();return n?Math.max(0,Math.min(1,l)):l}function V(s){if(t.value)return;const n=s.changedTouches[0].clientX,l=s.changedTouches[0].clientY,o=25,g=a.value==="left"?n<o:a.value==="right"?n>document.documentElement.clientWidth-o:a.value==="top"?l<o:a.value==="bottom"?l>document.documentElement.clientHeight-o:N(),m=i.value&&(a.value==="left"?n<u.value:a.value==="right"?n>document.documentElement.clientWidth-u.value:a.value==="top"?l<u.value:a.value==="bottom"?l>document.documentElement.clientHeight-u.value:N());(g||m||i.value&&r.value)&&(c=!0,S=[n,l],w.value=x(d.value?n:l,i.value),f.value=k(d.value?n:l),b(s),p(s))}function C(s){const n=s.changedTouches[0].clientX,l=s.changedTouches[0].clientY;if(c){if(!s.cancelable){c=!1;return}const g=Math.abs(n-S[0]),m=Math.abs(l-S[1]);(d.value?g>m&&g>3:m>g&&m>3)?(y.value=!0,c=!1):(d.value?m:g)>3&&(c=!1)}if(!y.value)return;s.preventDefault(),p(s);const o=k(d.value?n:l,!1);f.value=Math.max(0,Math.min(1,o)),o>1?w.value=x(d.value?n:l,!0):o<0&&(w.value=x(d.value?n:l,!1))}function E(s){if(c=!1,!y.value)return;p(s),y.value=!1;const n=h(s.changedTouches[0].identifier),l=Math.abs(n.x),o=Math.abs(n.y);(d.value?l>o&&l>400:o>l&&o>3)?i.value=n.direction===({left:"right",right:"left",top:"down",bottom:"up"}[a.value]||N()):i.value=f.value>.5}const z=v(()=>y.value?{transform:a.value==="left"?`translateX(calc(-100% + ${f.value*u.value}px))`:a.value==="right"?`translateX(calc(100% - ${f.value*u.value}px))`:a.value==="top"?`translateY(calc(-100% + ${f.value*u.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${f.value*u.value}px))`:N(),transition:"none"}:void 0);return{isDragging:y,dragProgress:f,dragStyles:z}}function N(){throw new Error}const Qe=["start","end","left","right","top","bottom"],et=G({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Qe.includes(e)},sticky:Boolean,...Ve(),...Ye(),...pe(),...Be(),...Xe(),...Pe(),...De({tag:"nav"}),...we()},"VNavigationDrawer"),st=be()({name:"VNavigationDrawer",props:et(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,i){let{attrs:r,emit:u,slots:t}=i;const{isRtl:a}=Se(),{themeClasses:d}=xe(e),{borderClasses:p}=$e(e),{backgroundColorClasses:b,backgroundColorStyles:h}=le(ne(e,"color")),{elevationClasses:c}=ze(e),{displayClasses:y,mobile:f}=Ie(e),{roundedClasses:w}=He(e),S=Oe(),x=Me(e,"modelValue",null,I=>!!I),{ssrBootStyles:k}=_e(),{scopeId:V}=Ae(),C=re(),E=$(!1),z=v(()=>e.rail&&e.expandOnHover&&E.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),s=v(()=>Ne(e.location,a.value)),n=v(()=>!e.permanent&&(f.value||e.temporary)),l=v(()=>e.sticky&&!n.value&&s.value!=="bottom");J(()=>e.expandOnHover&&e.rail!=null,()=>{_(E,I=>u("update:rail",!I))}),J(()=>!e.disableResizeWatcher,()=>{_(n,I=>!e.permanent&&Ce(()=>x.value=!I))}),J(()=>!e.disableRouteWatcher&&!!S,()=>{_(S.currentRoute,()=>n.value&&(x.value=!1))}),_(()=>e.permanent,I=>{I&&(x.value=!0)}),Ee(()=>{e.modelValue!=null||n.value||(x.value=e.permanent||!f.value)});const{isDragging:o,dragProgress:g,dragStyles:m}=Ge({isActive:x,isTemporary:n,width:z,touchless:ne(e,"touchless"),position:s}),M=v(()=>{const I=n.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):z.value;return o.value?I*g.value:I}),{layoutItemStyles:T,layoutItemScrimStyles:H}=Ze({id:e.name,order:v(()=>parseInt(e.order,10)),position:s,layoutSize:M,elementSize:z,active:v(()=>x.value||o.value),disableTransitions:v(()=>o.value),absolute:v(()=>e.absolute||l.value&&typeof B.value!="string")}),{isStuck:B,stickyStyles:U}=Fe({rootEl:C,isSticky:l,layoutItemStyles:T}),j=le(v(()=>typeof e.scrim=="string"?e.scrim:null)),A=v(()=>({...o.value?{opacity:g.value*.2,transition:"none"}:void 0,...H.value}));ke({VList:{bgColor:"transparent"}});function X(){E.value=!0}function Y(){E.value=!1}return We(()=>{const I=t.image||e.image;return L(Re,null,[L(e.tag,oe({ref:C,onMouseenter:X,onMouseleave:Y,class:["v-navigation-drawer",`v-navigation-drawer--${s.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":E.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":n.value,"v-navigation-drawer--active":x.value,"v-navigation-drawer--sticky":l.value},d.value,b.value,p.value,y.value,c.value,w.value,e.class],style:[h.value,T.value,m.value,k.value,U.value,e.style]},V,r),{default:()=>{var Z,P,O,q;return[I&&L("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?(Z=t.image)==null?void 0:Z.call(t,{image:e.image}):L("img",{src:e.image,alt:""},null)]),t.prepend&&L("div",{class:"v-navigation-drawer__prepend"},[(P=t.prepend)==null?void 0:P.call(t)]),L("div",{class:"v-navigation-drawer__content"},[(O=t.default)==null?void 0:O.call(t)]),t.append&&L("div",{class:"v-navigation-drawer__append"},[(q=t.append)==null?void 0:q.call(t)])]}}),L(Te,{name:"fade-transition"},{default:()=>[n.value&&(o.value||x.value)&&!!e.scrim&&L("div",oe({class:["v-navigation-drawer__scrim",j.backgroundColorClasses.value],style:[A.value,j.backgroundColorStyles.value],onClick:()=>x.value=!1},V),null)]})])}),{isStuck:B}}});export{st as V,Xe as a,ut as b,it as c,lt as m,Ze as u};
