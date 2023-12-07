import{_ as a}from"./code-block.6282a0c7.js";import{_ as i,I as r,x as n,m as d,s as e,t as p,v as o,y as t}from"./entry.ce06a5d2.js";import{V as c}from"./VContainer.eb590ffa.js";import{V as u}from"./VAlert.280f1180.js";import"./tag.5a7d9c09.js";import"./VBtn.3e866bdd.js";const h={data:()=>({title:"Expressions"}),head(){return{title:"VJSF - "+this.title}}},m={class:"text-h2 mb-8"},_=e("p",null,"Expressions are used throughout VJSF to provide dynamic functionalities like conditional rendering, fetching items of a select component, etc.",-1),f=e("p",null,'There are 3 types of expressions supported for the time being : "js-fn", "js-eval" and "js-tpl". All of them are compiled to Javascript functions that accept the same parameters.',-1),b=e("h2",{class:"text-h4 my-6"}," Parameters ",-1),x=e("ul",null,[e("li",null,[e("b",null,"data"),t(" - it varies depending on the expression you are using, it can be the data from the current node, an item in a select component, etc.")]),e("li",null,[e("b",null,"options"),t(" - the options object passed to VJSF then merged with contextual options from all parent nodes.")]),e("li",null,[e("b",null,"display"),t(" - the display object used to manage responsive layouts.")])],-1),y=e("pre",null,`{
  width: number // the width of the parent container
  xs: boolean,
  sm: boolean,
  smAndDown: boolean,
  smAndUp: boolean,
  md: boolean,
  mdAndDown: boolean,
  mobile: boolean, // alias for mdAndDown
  mdAndUp: boolean,
  lg: boolean,
  lgAndDown: boolean,
  lgAndUp: boolean,
  xl: boolean,
  xlAndDown: boolean,
  xlAndUp: boolean,
  xxl: boolean
}`,-1),w=e("h2",{class:"text-h4 my-6"},[t(" Type "),e("code",null,"js-fn")],-1),g=e("p",null,"This type of expression lets you write the full body of a JS function including its return statement. It is compiled like this :",-1),v=e("h2",{class:"text-h4 my-6"},[t(" Type "),e("code",null,"js-eval")],-1),A=e("p",null,"This type of expression lets you write a single JS statement that will be evaluated and returned. It is compiled like this :",-1),S=e("p",null,[t("This is the default type when the expected result of the expression is a boolean or a complex object (like the "),e("code",null,"if"),t(" property).")],-1),T=e("h2",{class:"text-h4 my-6"},[t(" Type "),e("code",null,"js-tpl")],-1),V=e("p",null,[t("This type of expression lets you write a "),e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"},"JS template literal"),t(" that will be evaluated and returned. It is compiled like this :")],-1),J=e("p",null,[t("This is the default type when the expected result of the expression is a string (like the "),e("code",null,"url"),t(" property in a "),e("code",null,"fetch"),t(" instruction).")],-1);function j(l,k,F,D,U,$){const s=a;return d(),r(c,{class:"doc-content-page"},{default:n(()=>[e("h1",m,p(l.title),1),o(u,{type:"warning",variant:"outlined",class:"mb-8"},{default:n(()=>[t(" Expressions are pieces of imperative code dispersed in a declarative JSON schema. You must consider schemas interpreted by VJSF as part of the code source of your application and you cannot safely use schemas provided by an untrusted source. ")]),_:1}),_,f,b,x,t(" Content of the display parameter: "),o(s,null,{default:n(()=>[y]),_:1}),w,g,o(s,null,{default:n(()=>[t(" new Function(...params, expression) ")]),_:1}),v,A,o(s,null,{default:n(()=>[t(" new Function(...params, 'return (' + expression + ')') ")]),_:1}),S,T,V,o(s,null,{default:n(()=>[t(" new Function(...params, 'return `' + expression + '`') ")]),_:1}),J]),_:1})}const O=i(h,[["render",j]]);export{O as default};