import{r as e}from"./lit-CgIPLKVa.js";import{i as t}from"./z-icon-6rrsih2X.js";import{q as n}from"./beans-CNd94UMz.js";import"./z-chip-Cg1gw15J.js";var r={title:`ZChip`,argTypes:{type:{options:Object.values(n),control:{type:`radio`}}},args:{type:n.DEFAULT,icon:`pdf`}},i={render:t=>e`
    <z-chip
      type=${t.type}
      icon=${t.icon}
      >my custom element</z-chip
    >
  `},a={render:t=>e`
    <z-chip
      type=${t.type}
      icon=${t.icon}
    >
      <strong>my</strong>
      <span style="margin-left: 4px">custom element</span>
    </z-chip>
  `},o={argTypes:{icon:{options:Object.keys(t),control:{type:`select`}},interactiveIcon:{options:Object.keys(t),control:{type:`select`}}},args:{interactiveIcon:`multiply-circled`,disabled:!1},render:t=>e`
    <z-chip
      type=${t.type}
      icon=${t.icon}
      disabled=${t.disabled}
      .interactiveIcon=${t.interactiveIcon}
      >my custom element</z-chip
    >
  `};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <z-chip
      type=\${args.type}
      icon=\${args.icon}
      >my custom element</z-chip
    >
  \`
} satisfies Story`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <z-chip
      type=\${args.type}
      icon=\${args.icon}
    >
      <strong>my</strong>
      <span style="margin-left: 4px">custom element</span>
    </z-chip>
  \`
} satisfies Story`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...o.parameters?.docs?.source}}};var s=[`Default`,`DifferentFontWeight`,`InteractiveIcon`];export{i as Default,a as DifferentFontWeight,o as InteractiveIcon,s as __namedExportsOrder,r as default};