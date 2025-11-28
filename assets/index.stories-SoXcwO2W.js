import{x as o}from"./lit-element-DGXdXVoE.js";import{f as s}from"./index-BBy8evlc.js";import{I as c}from"./index-BfGcbr3R.js";import"./index-DL6o3nSp.js";import"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import"./index-DrFu-skq.js";import"./index-BZ0rSFNp.js";const O={title:"ZChip",argTypes:{type:{options:Object.values(s),control:{type:"radio"}}},args:{type:s.DEFAULT,icon:"pdf"}},t={render:e=>o`
    <z-chip
      type=${e.type}
      icon=${e.icon}
      >my custom element</z-chip
    >
  `},n={render:e=>o`
    <z-chip
      type=${e.type}
      icon=${e.icon}
    >
      <strong>my</strong>
      <span style="margin-left: 4px">custom element</span>
    </z-chip>
  `},r={argTypes:{icon:{options:Object.keys(c),control:{type:"select"}},interactiveIcon:{options:Object.keys(c),control:{type:"select"}}},args:{interactiveIcon:"multiply-circled",disabled:!1},render:e=>o`
    <z-chip
      type=${e.type}
      icon=${e.icon}
      disabled=${e.disabled}
      .interactiveIcon=${e.interactiveIcon}
      >my custom element</z-chip
    >
  `};var i,a,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => html\`
    <z-chip
      type=\${args.type}
      icon=\${args.icon}
      >my custom element</z-chip
    >
  \`
} satisfies Story`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var m,l,y;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => html\`
    <z-chip
      type=\${args.type}
      icon=\${args.icon}
    >
      <strong>my</strong>
      <span style="margin-left: 4px">custom element</span>
    </z-chip>
  \`
} satisfies Story`,...(y=(l=n.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var d,g,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  argTypes: {
    icon: {
      options: Object.keys(ICONS),
      control: {
        type: "select"
      }
    },
    interactiveIcon: {
      options: Object.keys(ICONS),
      control: {
        type: "select"
      }
    }
  },
  args: {
    interactiveIcon: "multiply-circled",
    disabled: false
  },
  render: args => html\`
    <z-chip
      type=\${args.type}
      icon=\${args.icon}
      disabled=\${args.disabled}
      .interactiveIcon=\${args.interactiveIcon}
      >my custom element</z-chip
    >
  \`
} satisfies Story`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const j=["Default","DifferentFontWeight","InteractiveIcon"];export{t as Default,n as DifferentFontWeight,r as InteractiveIcon,j as __namedExportsOrder,O as default};
