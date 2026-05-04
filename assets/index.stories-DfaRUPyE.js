import{r as e}from"./lit-CgIPLKVa.js";import"./z-menu-section-DnAGRTTk.js";import"./z-menu-DtWdussM.js";var t={title:`Zmenu/ZMenu`,component:`z-menu`,args:{active:!1,floating:!0}},n={render:t=>e`
    <z-menu
      .active=${t.active}
      .floating=${t.floating}
    >
      <h3>Menu label</h3>
      <a
        href=""
        slot="item"
        >Item 1</a
      >
      <a
        href=""
        slot="item"
        >Item 2</a
      >
      <z-menu-section slot="item">
        <h3>Item 3</h3>
        <a
          href=""
          slot="section"
          >Item 3.1</a
        >
        <a
          href=""
          slot="section"
          >Item 3.2</a
        >
      </z-menu-section>
      <z-menu-section slot="item">
        <h3>Item 4</h3>
        <a
          href=""
          slot="section"
          >Item 4.1</a
        >
        <a
          href=""
          slot="section"
          >Item 4.2</a
        >
      </z-menu-section>
      <a
        href=""
        slot="item"
        >Item 5</a
      >
    </z-menu>
  `},r={render:t=>e`
    <z-menu
      .active=${t.active}
      .floating=${t.floating}
    >
      <img
        slot="header"
        src="https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg"
      />
      <h4 slot="header">Menu header</h4>
      <h3>Menu label</h3>
      <a
        href=""
        slot="item"
        >Item 1</a
      >
      <a
        href=""
        slot="item"
        >Item 2</a
      >
      <z-menu-section slot="item">
        <h3>Item 3</h3>
        <a
          href=""
          slot="section"
          >Item 3.1</a
        >
        <a
          href=""
          slot="section"
          >Item 3.2</a
        >
      </z-menu-section>
      <a
        href=""
        slot="item"
        >Item 4</a
      >
    </z-menu>
  `},i={parameters:{controls:{exclude:[`floating`]}},render:()=>e`
    <z-menu .active=${!0}>
      <a
        href="https://cataas.com/cat/gif"
        target="_blank"
        >Click me</a
      >
    </z-menu>
  `};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <z-menu
      .active=\${args.active}
      .floating=\${args.floating}
    >
      <h3>Menu label</h3>
      <a
        href=""
        slot="item"
        >Item 1</a
      >
      <a
        href=""
        slot="item"
        >Item 2</a
      >
      <z-menu-section slot="item">
        <h3>Item 3</h3>
        <a
          href=""
          slot="section"
          >Item 3.1</a
        >
        <a
          href=""
          slot="section"
          >Item 3.2</a
        >
      </z-menu-section>
      <z-menu-section slot="item">
        <h3>Item 4</h3>
        <a
          href=""
          slot="section"
          >Item 4.1</a
        >
        <a
          href=""
          slot="section"
          >Item 4.2</a
        >
      </z-menu-section>
      <a
        href=""
        slot="item"
        >Item 5</a
      >
    </z-menu>
  \`
} satisfies Story`,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <z-menu
      .active=\${args.active}
      .floating=\${args.floating}
    >
      <img
        slot="header"
        src="https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg"
      />
      <h4 slot="header">Menu header</h4>
      <h3>Menu label</h3>
      <a
        href=""
        slot="item"
        >Item 1</a
      >
      <a
        href=""
        slot="item"
        >Item 2</a
      >
      <z-menu-section slot="item">
        <h3>Item 3</h3>
        <a
          href=""
          slot="section"
          >Item 3.1</a
        >
        <a
          href=""
          slot="section"
          >Item 3.2</a
        >
      </z-menu-section>
      <a
        href=""
        slot="item"
        >Item 4</a
      >
    </z-menu>
  \`
} satisfies Story`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["floating"]
    }
  },
  render: () => html\`
    <z-menu .active=\${true}>
      <a
        href="https://cataas.com/cat/gif"
        target="_blank"
        >Click me</a
      >
    </z-menu>
  \`
} satisfies Story`,...i.parameters?.docs?.source}}};var a=[`FloatingContentLayout`,`WithHeader`,`ActiveWithoutItems`];export{i as ActiveWithoutItems,n as FloatingContentLayout,r as WithHeader,a as __namedExportsOrder,t as default};