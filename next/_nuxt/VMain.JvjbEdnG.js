import{m as c,u,a as f}from"./tag.raXFAgTq.js";import{a as d,c as V,b as g}from"./layout.t2oKEnm8.js";import{N as i,a1 as k,O as p,am as P,al as b,z as o}from"./entry.IeafeRMX.js";import{u as h}from"./ssrBoot.cC_iISjD.js";const C=i({...c(),...d({fullHeight:!0}),...k()},"VApp"),R=p()({name:"VApp",props:C(),setup(a,r){let{slots:e}=r;const s=P(a),{layoutClasses:m,getLayoutItem:t,items:l,layoutRef:v}=V(a),{rtlClasses:y}=b();return u(()=>{var n;return o("div",{ref:v,class:["v-application",s.themeClasses.value,m.value,y.value,a.class],style:[a.style]},[o("div",{class:"v-application__wrap"},[(n=e.default)==null?void 0:n.call(e)])])}),{getLayoutItem:t,items:l,theme:s}}}),A=i({scrollable:Boolean,...c(),...f({tag:"main"})},"VMain"),S=p()({name:"VMain",props:A(),setup(a,r){let{slots:e}=r;const{mainStyles:s}=g(),{ssrBootStyles:m}=h();return u(()=>o(a.tag,{class:["v-main",{"v-main--scrollable":a.scrollable},a.class],style:[s.value,m.value,a.style]},{default:()=>{var t,l;return[a.scrollable?o("div",{class:"v-main__scroller"},[(t=e.default)==null?void 0:t.call(e)]):(l=e.default)==null?void 0:l.call(e)]}})),{}}});export{S as V,R as a};