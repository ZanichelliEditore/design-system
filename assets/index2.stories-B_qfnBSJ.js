import{r as e}from"./lit-CgIPLKVa.js";import{b as t,y as n}from"./beans-CNd94UMz.js";import"./z-divider-DalSVgoc.js";import{n as r}from"./storybook-utils-DtpJwcUL.js";var i={title:`ZDivider`,component:`z-divider`,argTypes:{size:{control:{type:`select`},options:Object.values(t)},orientation:{control:{type:`select`},options:Object.values(n)},color:{control:{type:`select`},options:r().map(e=>e.replace(`--`,``))}},args:{size:t.SMALL,color:`gray200`,orientation:n.HORIZONTAL}},a={render:t=>e`<div style="height: 300px; padding: 24px">
      <z-divider
        size="${t.size}"
        color="${t.color}"
        orientation="${t.orientation}"
      ></z-divider>
    </div>`,name:`ZDivider`};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => html\`<div style="height: 300px; padding: 24px">
      <z-divider
        size="\${args.size}"
        color="\${args.color}"
        orientation="\${args.orientation}"
      ></z-divider>
    </div>\`,
  name: "ZDivider"
} satisfies StoryObj<ZDivider>`,...a.parameters?.docs?.source}}};var o=[`Default`];export{a as Default,o as __namedExportsOrder,i as default};