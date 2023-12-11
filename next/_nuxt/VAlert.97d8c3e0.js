import{P as D,m as I,D as z,i as L,K as R,M as w,k as E,f as F,p as O,u as p,E as M,q as N,N as j,O as q,r as K,c as X,w as Z,b as G,x as d,V as H}from"./VBtn.f5a36c98.js";import{m as J,a as Q}from"./VGrid.613d977e.js";import{Z as U,a0 as W,$ as Y,X as ee,a2 as ae,c as o,al as te,a7 as le,af as ne,z as t,R as se}from"./entry.6803ef97.js";const oe=D("v-alert-title"),re=["success","info","warning","error"],ie=U({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:W,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>re.includes(e)},...J(),...I(),...z(),...L(),...R(),...w(),...E(),...Q(),...Y(),...F({variant:"flat"})},"VAlert"),ve=ee()({name:"VAlert",props:ie(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,v){let{emit:m,slots:a}=v;const r=ae(e,"modelValue"),n=o(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),y=o(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:f}=te(e),{colorClasses:k,colorStyles:b,variantClasses:P}=O(y),{densityClasses:V}=p(e),{dimensionStyles:C}=M(e),{elevationClasses:g}=N(e),{locationStyles:x}=j(e),{positionClasses:S}=q(e),{roundedClasses:_}=K(e),{textColorClasses:A,textColorStyles:B}=X(le(e,"borderColor")),{t:T}=ne(),i=o(()=>({"aria-label":T(e.closeLabel),onClick(s){r.value=!1,m("click:close",s)}}));return()=>{const s=!!(a.prepend||n.value),$=!!(a.title||e.title),h=!!(a.close||e.closable);return r.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},f.value,k.value,V.value,g.value,S.value,_.value,P.value,e.class],style:[b.value,C.value,x.value,e.style],role:"alert"},{default:()=>{var c,u;return[Z(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",A.value],style:B.value},null),s&&t("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?t(d,{key:"prepend-defaults",disabled:!n.value,defaults:{VIcon:{density:e.density,icon:n.value,size:e.prominent?44:28}}},a.prepend):t(G,{key:"prepend-icon",density:e.density,icon:n.value,size:e.prominent?44:28},null)]),t("div",{class:"v-alert__content"},[$&&t(oe,{key:"title"},{default:()=>{var l;return[((l=a.title)==null?void 0:l.call(a))??e.title]}}),((c=a.text)==null?void 0:c.call(a))??e.text,(u=a.default)==null?void 0:u.call(a)]),a.append&&t("div",{key:"append",class:"v-alert__append"},[a.append()]),h&&t("div",{key:"close",class:"v-alert__close"},[a.close?t(d,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var l;return[(l=a.close)==null?void 0:l.call(a,{props:i.value})]}}):t(H,se({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},i.value),null)])]}})}}});export{ve as V};
