import{r as e}from"./lit-CgIPLKVa.js";import{$ as t}from"./beans-CNd94UMz.js";import"./z-section-title-DTh_jVSn.js";import{t as n}from"./storybook-utils-DtpJwcUL.js";var r={title:`Deprecated/ZSectionTitle`,component:`z-section-title`,argTypes:{dividerPosition:{options:Object.values(t),control:{type:`inline-radio`}},"--z-section-title--divider-color":n()},args:{uppercase:!0,"--z-section-title--divider-color":`var(--red500)`},parameters:{docs:{description:{component:"⚠️ This component is **deprecated** and may be removed soon.\nUse the typography tokens or classes instead (see `Typography/Typography classes` section)."}}}},i={args:{dividerPosition:t.BEFORE},render:t=>e`
    <z-section-title
      .dividerPosition=${t.dividerPosition}
      .uppercase=${t.uppercase}
      .style="--z-section-title--divider-color: ${t[`--z-section-title--divider-color`]}"
    >
      <h4 slot="primary-title">Primary title</h4>
    </z-section-title>
  `},a={parameters:{controls:{exclude:[`dividerPosition`]}},render:t=>e`
    <z-section-title
      .uppercase=${t.uppercase}
      .style="--z-section-title--divider-color: ${t[`--z-section-title--divider-color`]}"
    >
      <h5 slot="secondary-title">Secondary title</h5>
      <h4 slot="primary-title">Primary title</h4>
    </z-section-title>
  `};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    dividerPosition: ZSectionTitleDividerPosition.BEFORE
  },
  render: args => html\`
    <z-section-title
      .dividerPosition=\${args.dividerPosition}
      .uppercase=\${args.uppercase}
      .style="--z-section-title--divider-color: \${args["--z-section-title--divider-color"]}"
    >
      <h4 slot="primary-title">Primary title</h4>
    </z-section-title>
  \`
} satisfies Story`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["dividerPosition"]
    }
  },
  render: args => html\`
    <z-section-title
      .uppercase=\${args.uppercase}
      .style="--z-section-title--divider-color: \${args["--z-section-title--divider-color"]}"
    >
      <h5 slot="secondary-title">Secondary title</h5>
      <h4 slot="primary-title">Primary title</h4>
    </z-section-title>
  \`
} satisfies Story`,...a.parameters?.docs?.source}}};var o=[`PrimaryTitleOnly`,`SecondaryTitle`];export{i as PrimaryTitleOnly,a as SecondaryTitle,o as __namedExportsOrder,r as default};