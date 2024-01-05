import{_ as C,t as m,v as x,N as B,O as J,Q as W,M as F,I as K,z as l,i as s,F as V,A as i,J as I,y as p,B as g,L as $,x as f,H as w,K as R,R as E}from"./entry.IeafeRMX.js";import{_ as q}from"./code-block.4UrQ-Uj4.js";import{a as H,c as G,r as Q,b as X,i as Y,_ as Z,V as ee,d as te,e as ae,f as le,g as oe,h as ie,j as se,k as ne,l as de}from"./index.CHJvrvBF.js";import{V as re}from"./index.zp9BlI3U.js";import{m as ue,a as pe,u as me}from"./tag.raXFAgTq.js";import{m as fe,u as ve,V as ce}from"./VBtn.qgJBhbvf.js";import{m as ye,I as Ve,M as _e,d as ge,e as xe}from"./VSpacer.c4jQ-gOi.js";import{V as he}from"./VContainer.EP1F4As5.js";const we={props:{content:{type:String,required:!0}}},be=["innerHTML"];function Oe(e,a,t,d,n,r){return m(),x("div",{class:"markdown-block",innerHTML:e.$markdown(t.content)},null,8,be)}const Fe=C(we,[["render",Oe]]),ke=B({modelValue:Boolean,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},...ue(),...fe(),...pe(),...ye({transition:"fade-transition"})},"VLazy"),Se=J()({name:"VLazy",directives:{intersect:Ve},props:ke(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const{dimensionStyles:d}=ve(e),n=W(e,"modelValue");function r(u){n.value||(n.value=u)}return me(()=>F(l(e.tag,{class:["v-lazy",e.class],style:[d.value,e.style]},{default:()=>[n.value&&l(_e,{transition:e.transition,appear:!0},{default:()=>{var u;return[(u=t.default)==null?void 0:u.call(t)]}})]}),[[K("intersect"),{handler:r,options:e.options},null]])),{}}}),je=X,v=e=>{var a;if(!e.layout){const t={};if(e["x-display"]==="icon"&&(e.enum||(a=e.items)!=null&&a.enum)&&(t.getItems={itemIcon:e["x-itemIcon"]||"data.value"},delete e["x-display"]),e["x-display"]&&(t.comp=e["x-display"],delete e["x-display"]),e.format==="hexcolor"&&(t.comp="color-picker",delete e.format),e["x-props"]&&(t.props=e["x-props"],delete e["x-props"]),e["x-fromData"]&&(t.comp="select",t.getItems={expr:e["x-fromData"]},delete e["x-fromData"]),e["x-fromUrl"]){let d=e["x-fromUrl"];for(const n of d.matchAll(/\{(.*?)\}/g))n[1]!=="q"&&(d=d.replace(n[0],"$"+n[0]));t.getItems={url:d},delete e["x-fromUrl"]}t.getItems&&Y(t.getItems)&&(e["x-itemKey"]&&(t.getItems.itemKey=`data["${e["x-itemKey"]}"]`),e["x-itemTitle"]&&(t.getItems.itemTitle=`data["${e["x-itemTitle"]}"]`),e["x-itemValue"]&&(t.getItems.itemValue=`data["${e["x-itemValue"]}"]`),e["x-itemIcon"]&&(t.getItems.itemIcon=`data["${e["x-itemIcon"]}"]`),e["x-itemsProp"]&&(t.getItems.itemsResults=`data["${e["x-itemsProp"]}"]`),delete e["x-itemKey"],delete e["x-itemTitle"],delete e["x-itemValue"],delete e["x-itemsProp"]),Object.keys(t).length===1&&"comp"in t?e.layout=t.comp:Object.keys(t).length>0&&(e.layout=t)}if(e.type==="object"){if(e.properties)for(const t of Object.keys(e.properties))v(e.properties[t]);if(e.allOf)for(const t of e.allOf)v(t);if(e.oneOf)for(const t of e.oneOf)v(t);if(e.anyOf)for(const t of e.anyOf)v(t)}if(e.type==="array"&&e.items)if(Array.isArray(e.items))for(const t of e.items)v(t);else v(e.items)};function Ie(e,a,t="en"){let d=a;if(!d){const r={strict:!1,allErrors:!0},u=new je(r);H.default(u),d=u}const n=G(e);return n.$id=n.$id??"_jl",Q(n,d,t),v(n),n}const $e={"custom-textarea":`
  <template #custom-textarea="{node, statefulLayout}">
    <textarea
      :value="node.data"
      style="border: 1px solid red;"
      placeholder="A custom textarea"
      @input="event => statefulLayout.input(node, event.target.value)"
    />
  </template>`,"custom-message":`
  <template #custom-message="{node, statefulLayout}">
    This message is defined in a slot (key={{ node.key }})
  </template>`},Ce={components:{Vjsf:Z,VContainer:he,VRow:ee,VCol:te,VSpacer:ge,VForm:ae,VBtn:ce,VDivider:xe,VSelect:le,VSwitch:oe,VToolbar:re,VSheet:ie,VWindow:se,VSlider:ne,VWindowItem:de,VLazy:Se},props:{example:{type:Object,required:!0},v2:{type:Boolean,default:!1}},data:()=>({data:null,tab:null,stateTree:null,display:null,options:{readOnly:!1,summary:!1,density:"default",initialValidation:"withData",validateOn:"input",locale:"en"},filledOptions:null,wrapperWidth:100,slotCodes:$e,valid:null}),computed:{tabs(){var a;const e=[];return this.v2&&e.push({value:"schemaV2",title:"Schema V2"}),e.push({value:"schema",title:"Schema"}),e.push({value:"model",title:"Data"}),(a=this.example.codeSlots)!=null&&a.length&&e.push({value:"slots",title:"Slots"}),e.push({value:"options",title:"Options"}),e},schema(){return this.v2?Ie(this.example.schema):this.example.schema},changeOption(e){return a=>{this.options={...this.options,[e]:a}}},validateColor(){return this.valid===!1?"error":this.valid===!0?"success":"default"}},created(){this.example.options&&Object.assign(this.options,this.example.options),this.example.data&&(this.data=JSON.parse(JSON.stringify(this.example.data)))},methods:{updateState(e){this.stateTree=e.stateTree,this.data=e.data,this.display=e.display,this.filledOptions=e.options},editExample(){localStorage.setItem("vjsf-editor-state",JSON.stringify({schema:this.schema,options:this.options,data:this.data})),this.$router.push("/editor")}}},Te={key:0,class:"text-caption ml-2"},Ue=f("div",{class:"text-subtitle"}," Options filled with default values: ",-1),De=["value","onInput"];function Ne(e,a,t,d,n,r){const u=s("v-btn"),b=s("v-spacer"),T=s("v-toolbar"),h=s("v-divider"),c=q,y=s("v-window-item"),O=s("v-switch"),_=s("v-select"),U=s("v-slider"),k=s("v-col"),S=s("v-row"),D=s("v-window"),N=s("vjsf"),L=s("v-form"),z=s("v-lazy"),P=s("v-container"),A=s("v-sheet");return m(),V(A,{class:"my-6",border:"",rounded:"",color:"transparent"},{default:i(()=>[l(T,{density:"compact"},{default:i(()=>[(m(!0),x(I,null,$(r.tabs,o=>(m(),V(u,{key:o.value,class:"text-none font-weight-bold",size:"small",variant:"text",active:e.tab===o.value,onClick:j=>e.tab=e.tab===o.value?null:o.value},{default:i(()=>[g(p(o.title),1)]),_:2},1032,["active","onClick"]))),128)),l(b),l(u,{color:"primary",icon:"mdi-pencil",onClick:r.editExample},null,8,["onClick"])]),_:1}),l(h),e.tab?(m(),V(D,{key:0,modelValue:e.tab,"onUpdate:modelValue":a[7]||(a[7]=o=>e.tab=o),style:{height:"400px","overflow-y":"auto"}},{default:i(()=>[l(y,{value:"schemaV2",class:"ma-3"},{default:i(()=>[l(c,null,{default:i(()=>[f("pre",null,p(JSON.stringify(t.example.schema,null,2)),1)]),_:1})]),_:1}),l(y,{value:"schema",class:"ma-3"},{default:i(()=>[l(c,null,{default:i(()=>[f("pre",null,p(JSON.stringify(r.schema,null,2)),1)]),_:1})]),_:1}),l(y,{value:"model",class:"ma-3 fill-height"},{default:i(()=>[e.data!==null&&e.data!==void 0?(m(),V(c,{key:0},{default:i(()=>[f("pre",null,p(JSON.stringify(e.data,null,2)),1)]),_:1})):w("",!0)]),_:1}),l(y,{value:"slots",class:"ma-3"},{default:i(()=>[(m(!0),x(I,null,$(t.example.codeSlots,o=>(m(),V(c,{key:o},{default:i(()=>[f("pre",null,p(e.slotCodes[o]),1)]),_:2},1024))),128))]),_:1}),l(y,{value:"options",class:"ma-3",style:{height:"400px"}},{default:i(()=>[l(S,{style:{height:"400px"}},{default:i(()=>[l(k,null,{default:i(()=>[l(O,{modelValue:e.options.readOnly,"onUpdate:modelValue":a[0]||(a[0]=o=>e.options.readOnly=o),label:"readOnly",color:"primary","hide-details":"",density:"compact"},null,8,["modelValue"]),l(O,{modelValue:e.options.summary,"onUpdate:modelValue":a[1]||(a[1]=o=>e.options.summary=o),label:"summary",color:"primary","hide-details":"",density:"compact"},null,8,["modelValue"]),l(_,{modelValue:e.options.density,"onUpdate:modelValue":a[2]||(a[2]=o=>e.options.density=o),density:"compact","hide-details":"",label:"density",style:{"max-width":"300px"},items:["default","comfortable","compact"]},null,8,["modelValue"]),l(_,{modelValue:e.options.initialValidation,"onUpdate:modelValue":a[3]||(a[3]=o=>e.options.initialValidation=o),density:"compact","hide-details":"",label:"initialValidation",style:{"max-width":"300px"},items:["never","withData","always"]},null,8,["modelValue"]),l(_,{modelValue:e.options.validateOn,"onUpdate:modelValue":a[4]||(a[4]=o=>e.options.validateOn=o),density:"compact","hide-details":"",label:"validateOn",style:{"max-width":"300px"},items:["input","blur","submit"]},null,8,["modelValue"]),l(_,{modelValue:e.options.locale,"onUpdate:modelValue":a[5]||(a[5]=o=>e.options.locale=o),density:"compact","hide-details":"",label:"locale",style:{"max-width":"300px"},items:["en","fr"]},null,8,["modelValue"]),l(U,{modelValue:e.wrapperWidth,"onUpdate:modelValue":a[6]||(a[6]=o=>e.wrapperWidth=o),min:0,max:100,step:1,color:"primary",label:"container width",style:{"max-width":"500px"},"hide-details":"",density:"compact"},{append:i(()=>[g(p(e.wrapperWidth)+" % ",1)]),_:1},8,["modelValue"]),e.display?(m(),x("div",Te," width="+p(e.display.width)+"px, display="+p(e.display.name),1)):w("",!0)]),_:1}),l(h,{vertical:""}),l(k,{style:{height:"400px","overflow-y":"auto"}},{default:i(()=>[Ue,l(c,null,{default:i(()=>[f("pre",null,p(JSON.stringify(e.filledOptions,null,2)),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])):w("",!0),l(h),l(P,{fluid:""},{default:i(()=>[l(z,{"min-height":120},{default:i(()=>[f("div",{style:R(`width: ${e.wrapperWidth}%`)},[l(L,{ref:"form",modelValue:e.valid,"onUpdate:modelValue":a[9]||(a[9]=o=>e.valid=o)},{default:i(()=>[E(e.$slots,"vjsf",{modelValue:e.data,options:e.options,updateState:r.updateState},()=>[l(N,{"model-value":e.data,schema:r.schema,options:e.options,"onUpdate:state":r.updateState},{"custom-textarea":i(({node:o,statefulLayout:j})=>[f("textarea",{value:o.data,style:{border:"1px solid red"},placeholder:"A custom textarea",onInput:M=>j.input(o,M.target.value)},null,40,De)]),"custom-message":i(({node:o})=>[g(" This message is defined in a slot (key="+p(o.key)+") ",1)]),_:1},8,["model-value","schema","options","onUpdate:state"])]),l(S,null,{default:i(()=>[l(b),l(u,{color:r.validateColor,flat:"",class:"ma-2",onClick:a[8]||(a[8]=o=>e.$refs.form.validate())},{default:i(()=>[g(" Validate ")]),_:1},8,["color"])]),_:1})]),_:3},8,["modelValue"])],4)]),_:3})]),_:3})]),_:3})}const Ke=C(Ce,[["render",Ne]]);export{Fe as _,Ke as a};