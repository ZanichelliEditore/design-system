import{x as c}from"./lit-element-DGXdXVoE.js";import"./index-C54Ox_B3.js";import{s as p,g as s}from"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import{d as u,H as z,h as a}from"./index-CedYZwFP.js";import"./index-Bo_H2aQL.js";import"./utils-CvJv1lj0.js";import"./index-C0TNZEjZ.js";import"./breakpoints-p3CVLX0Q.js";import"./index-DrFu-skq.js";import"./iframe-DzRr37qK.js";const h=()=>"ul{padding:0;margin:0}",y=class extends z{constructor(t){super(),t!==!1&&this.__registerHost(),this.__attachShadow()}componentWillLoad(){this.inputrawdata&&this.parseinputrawdata(this.inputrawdata)}parseinputrawdata(t){this.list=[...JSON.parse(t)]}oninputrawdataChange(t){this.parseinputrawdata(t)}render(){const t=this.list?this.list.length-1:-1;return a("ul",{key:"df687dd01c6e5335a4bab99955249528d09eee2a"},this.list&&this.list.map((i,d)=>a("z-myz-list-item",{listitemid:i.listitemid,text:i.text,link:i.link,linktarget:i.linktarget,icon:i.icon,underlined:t!=d})))}static get watchers(){return{inputrawdata:[{oninputrawdataChange:0}]}}static get style(){return h()}};u(y,[1,"z-myz-list",{inputrawdata:[1],list:[1040]},void 0,{inputrawdata:[{oninputrawdataChange:0}]}]);const n={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZMyzList",tagName:"z-myz-list",customElement:!0,members:[{kind:"field",name:"inputrawdata",type:"string",description:"json stringified list data (mutable, optional)"},{kind:"field",name:"list",type:"unknown",description:"list item data (mutable, optional)"}],events:[]}],exports:[{kind:"js",name:"ZMyzList",declaration:{name:"ZMyzList",module:"src/snowflakes/myz/list/z-myz-list/index.tsx"}},{kind:"custom-element-definition",name:"z-myz-list",declaration:{name:"ZMyzList",module:"src/snowflakes/myz/list/z-myz-list/index.tsx"}}]}]};p({...s()||{},...n,modules:[...(s()||{}).modules||[],...n.modules]});const S={title:"Snowflakes/List/ZMyzList",component:"z-myz-list"},e={render:o=>c`<z-myz-list
      inputrawdata='[
        {"text":"list element 1","link":"http://www.zanichelli.it","listitemid":"id1","icon":"checkbox-checked"},
        {"text":"list element 2","link":"http://my.zanichelli.it","listitemid":"id2","icon":"checkbox"},
        {"text":""}
      ]'
    ></z-myz-list>`};var l,r,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => html\`<z-myz-list
      inputrawdata='[
        {"text":"list element 1","link":"http://www.zanichelli.it","listitemid":"id1","icon":"checkbox-checked"},
        {"text":"list element 2","link":"http://my.zanichelli.it","listitemid":"id2","icon":"checkbox"},
        {"text":""}
      ]'
    ></z-myz-list>\`
}`,...(m=(r=e.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const j=["ZMyzList"];export{e as ZMyzList,j as __namedExportsOrder,S as default};
