import{n as e}from"./chunk-DnJy8xQt.js";import{Q as t,X as n,it as r,nt as i,rt as a}from"./iframe-e9i3gKXJ.js";import{n as o}from"./index3-DmUKOwU9.js";import{t as s}from"./index27-sGbGByEO.js";var c,l,u,d=e((()=>{a(),o(),s(),c=()=>`ul{padding:0;margin:0}`,l=r(class extends t{constructor(e){super(),e!==!1&&this.__registerHost(),this.__attachShadow()}componentWillLoad(){this.inputrawdata&&this.parseinputrawdata(this.inputrawdata)}parseinputrawdata(e){this.list=[...JSON.parse(e)]}oninputrawdataChange(e){this.parseinputrawdata(e)}render(){let e=this.list?this.list.length-1:-1;return i(`ul`,{key:`68407f9f3732f51af43763651c228bf950aada69`},this.list&&this.list.map(((t,n)=>i(`z-myz-list-item`,{listitemid:t.listitemid,text:t.text,link:t.link,linktarget:t.linktarget,icon:t.icon,underlined:e!=n}))))}static get watchers(){return{inputrawdata:[{oninputrawdataChange:0}]}}static get style(){return c()}},[1,`z-myz-list`,{inputrawdata:[1],list:[1040]},void 0,{inputrawdata:[{oninputrawdataChange:0}]}]),u=l})),f,p,m;e((()=>{n(),d(),f={title:`Snowflakes/List/ZMyzList`,component:u},p={render:()=>i(`z-myz-list`,{inputrawdata:`[
        {"text":"list element 1","link":"http://www.zanichelli.it","listitemid":"id1","icon":"checkbox-checked"},
        {"text":"list element 2","link":"http://my.zanichelli.it","listitemid":"id2","icon":"checkbox"},
        {"text":""}
      ]`})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <z-myz-list inputrawdata='[
        {"text":"list element 1","link":"http://www.zanichelli.it","listitemid":"id1","icon":"checkbox-checked"},
        {"text":"list element 2","link":"http://my.zanichelli.it","listitemid":"id2","icon":"checkbox"},
        {"text":""}
      ]'></z-myz-list>
} satisfies StoryObj<ZMyzList>`,...p.parameters?.docs?.source}}},m=[`Default`]}))();export{p as Default,m as __namedExportsOrder,f as default};