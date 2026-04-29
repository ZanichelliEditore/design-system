import{r as e}from"./lit-CgIPLKVa.js";import{C as t,h as n,u as r}from"./beans-CNd94UMz.js";import"./z-button-BRN_Z_XJ.js";var i={title:`ZButton`,component:`z-button`,args:{variant:r.PRIMARY,size:n.BIG,disabled:!1,icon:`download`,iconPosition:t.LEFT,ariaLabel:`Clicca sul bottone`,htmlrole:`button`},argTypes:{variant:{options:Object.values(r),control:{type:`inline-radio`}},size:{options:Object.values(n),control:{type:`inline-radio`}},iconPosition:{options:Object.values(t),control:{type:`inline-radio`}}},render:t=>e`<z-button
      variant=${t.variant}
      size=${t.size}
      disabled=${t.disabled}
      icon=${t.icon}
      .iconPosition=${t.iconPosition}
      .ariaLabel=${t.ariaLabel}
      htmlrole=${t.htmlrole}
    >
      Click me
    </z-button>`},a={},o={args:{variant:r.SECONDARY,size:n.X_SMALL},parameters:{controls:{exclude:[`variant`,`icon`]}}},s={args:{variant:r.TERTIARY,size:n.SMALL},parameters:{controls:{exclude:[`variant`,`icon`]}}},c={render:t=>e`<z-button
      variant=${t.variant}
      size=${t.size}
      disabled=${t.disabled}
      icon=${t.icon}
      .iconPosition=${t.iconPosition}
      .ariaLabel=${t.ariaLabel}
      htmlrole=${t.htmlrole}
    />`},l={args:{icon:`arrow-quad-north-east`,href:`https://wikipedia.com`,target:`_blank`,role:`link`},render:t=>e`<z-button
      variant=${t.variant}
      size=${t.size}
      disabled=${t.disabled}
      icon=${t.icon}
      .iconPosition=${t.iconPosition}
      .ariaLabel=${t.ariaLabel}
      htmlrole=${t.htmlrole}
      href=${t.href}
      target=${t.target}
    >
      Go to wikipedia
    </z-button>`},u={args:{icon:`arrow-right`,iconPosition:t.RIGHT}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: ButtonVariant.SECONDARY,
    size: ControlSize.X_SMALL
  },
  parameters: {
    controls: {
      exclude: ["variant", "icon"]
    }
  }
} satisfies Story`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: ButtonVariant.TERTIARY,
    size: ControlSize.SMALL
  },
  parameters: {
    controls: {
      exclude: ["variant", "icon"]
    }
  }
} satisfies Story`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => html\`<z-button
      variant=\${args.variant}
      size=\${args.size}
      disabled=\${args.disabled}
      icon=\${args.icon}
      .iconPosition=\${args.iconPosition}
      .ariaLabel=\${args.ariaLabel}
      htmlrole=\${args.htmlrole}
    />\`
} satisfies Story`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    icon: "arrow-quad-north-east",
    href: "https://wikipedia.com",
    target: "_blank",
    role: "link"
  },
  render: args => html\`<z-button
      variant=\${args.variant}
      size=\${args.size}
      disabled=\${args.disabled}
      icon=\${args.icon}
      .iconPosition=\${args.iconPosition}
      .ariaLabel=\${args.ariaLabel}
      htmlrole=\${args.htmlrole}
      href=\${args.href}
      target=\${args.target}
    >
      Go to wikipedia
    </z-button>\`
} satisfies Story`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    icon: "arrow-right",
    iconPosition: IconPosition.RIGHT
  }
} satisfies Story`,...u.parameters?.docs?.source}}};var d=[`Primary`,`SecondaryXSmall`,`TertiarySmall`,`IconOnly`,`LinkButton`,`IconRight`];export{c as IconOnly,u as IconRight,l as LinkButton,a as Primary,o as SecondaryXSmall,s as TertiarySmall,d as __namedExportsOrder,i as default};