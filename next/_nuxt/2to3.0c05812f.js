import{_ as l}from"./code-block.b932c093.js";import{_ as s,i as r,E as c,A as o,t as p,x as t,y as u,z as m,B as e}from"./entry.6803ef97.js";import{V as h}from"./VContainer.71280a51.js";import"./prism.787a2285.js";import"./VGrid.613d977e.js";const d={components:{VContainer:h},data:()=>({title:"v2 to v3"}),head(){return{title:"VJSF - "+this.title}}},f={class:"text-h2 mb-8"},v=t("p",null,[e(" The old documentation for v2 is still available "),t("a",{href:"https://koumoul-dev.github.io/vuetify-jsonschema-form/2.x/"},"here"),e(". ")],-1),_=t("p",null," VJSF v3 is a complete rewrite. The motivation was to : ",-1),y=t("p",null,[t("ul",null,[t("li",null,"migrate to vue 3 and vuetify 3"),t("li",null,"rethink the annotations vocabulary and the options for more power and clarity"),t("li",null,"losen the coupling between schema structure and presentation while preserving simplicity"),t("li",null,"implement a saner reactivity model and hopefully see gains in performance and stability"),t("li",null,"fully validate the data (using Ajv) and offer a stronger guarantee that a valid form means a valid output data"),t("li",null,[e("extract all the core logic into a separate project ("),t("a",{href:"https://github.com/json-layout/json-layout"},"JSON Layout"),e(") to pave the way for implementations in other UI frameworks")]),t("li",null,"provide a compilation solution that allows the users to move as much pre-processing as possible (and the associated dependencies) to build time")])],-1),g=t("p",null," Being an entirely new major version of VJSF with a new vocabulary of annotations, breaking changes are inevitable. But a compatibility function is provided to help facilitate the migration. ",-1),b=t("pre",null,`import { v2compat } from '@koumoul/vjsf/compat/v2'
const v3Schema = v2compat(schema)
      `,-1);function w(a,k,x,V,j,B){const n=l,i=r("v-container");return p(),c(i,{class:"doc-content-page"},{default:o(()=>[t("h1",f,u(a.title),1),v,_,y,g,m(n,null,{default:o(()=>[b]),_:1})]),_:1})}const F=s(d,[["render",w]]);export{F as default};
