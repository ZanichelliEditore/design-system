import{r as e}from"./lit-CgIPLKVa.js";import"./z-menu-section-BpgC-UKr.js";var t={title:`ZMenu/ZMenuSection`,component:`z-menu-section`,args:{active:!1}},n={render:t=>e`
    <z-menu-section .active=${t.active}>
      <h3>Label</h3>
      <a
        href=""
        slot="section"
        >Item 1</a
      >
      <a
        href=""
        slot="section"
        >Item 2</a
      >
      <a
        href=""
        slot="seection"
        active
        >Item 3 - active</a
      >
    </z-menu-section>
  `},r={render:t=>e`
    <z-menu-section .active=${t.active}>
      <h3>Label</h3>
    </z-menu-section>
  `};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <z-menu-section .active=\${args.active}>
      <h3>Label</h3>
      <a
        href=""
        slot="section"
        >Item 1</a
      >
      <a
        href=""
        slot="section"
        >Item 2</a
      >
      <a
        href=""
        slot="seection"
        active
        >Item 3 - active</a
      >
    </z-menu-section>
  \`
} satisfies Story`,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <z-menu-section .active=\${args.active}>
      <h3>Label</h3>
    </z-menu-section>
  \`
} satisfies Story`,...r.parameters?.docs?.source}}};var i=[`WithItems`,`WithoutItems`];export{n as WithItems,r as WithoutItems,i as __namedExportsOrder,t as default};