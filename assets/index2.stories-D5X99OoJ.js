import{r as e}from"./lit-CgIPLKVa.js";import{T as t,h as n}from"./beans-CNd94UMz.js";import"./z-input-message-B1S9GfTe.js";var r={title:`ZInputMessage`,component:`z-input-message`,argTypes:{status:{control:{type:`inline-radio`},options:[`default`,...Object.values(t)]},class:{control:{type:`inline-radio`},options:Object.values(n)}},args:{message:`messaggio`,status:t.ERROR,class:n.BIG}},i={render:t=>e`
    <z-input-message
      message=${t.message}
      status=${t.status}
      class=${t.class}
    ></z-input-message>
  `};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <z-input-message
      message=\${args.message}
      status=\${args.status}
      class=\${args.class}
    ></z-input-message>
  \`
} satisfies StoryObj<ZInputMessageStoriesArgs>`,...i.parameters?.docs?.source}}};var a=[`Default`];export{i as Default,a as __namedExportsOrder,r as default};