import{x as a}from"./lit-element-DGXdXVoE.js";import{D as o,f as r}from"./index-BnC6Ywep.js";import{g as d}from"./storybook-utils-DAVCxM-F.js";import"./index-Jit6aNbC.js";import"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import"./index-DrFu-skq.js";import"./index-BZ0rSFNp.js";const D={title:"ZDivider",component:"z-divider",argTypes:{size:{control:{type:"select"},options:Object.values(o)},orientation:{control:{type:"select"},options:Object.values(r)},color:{control:{type:"select"},options:d().map(e=>e.replace("--",""))}},args:{size:o.SMALL,color:"gray200",orientation:r.HORIZONTAL}},i={render:e=>a`<div style="height: 300px; padding: 24px">
      <z-divider
        size="${e.size}"
        color="${e.color}"
        orientation="${e.orientation}"
      ></z-divider>
    </div>`,name:"ZDivider"};var t,n,s;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => html\`<div style="height: 300px; padding: 24px">
      <z-divider
        size="\${args.size}"
        color="\${args.color}"
        orientation="\${args.orientation}"
      ></z-divider>
    </div>\`,
  name: "ZDivider"
} satisfies StoryObj<ZDivider>`,...(s=(n=i.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const f=["Default"];export{i as Default,f as __namedExportsOrder,D as default};