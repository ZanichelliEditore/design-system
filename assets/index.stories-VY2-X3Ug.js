import{r as e}from"./lit-CgIPLKVa.js";import{i as t}from"./z-icon-jtOHWf42.js";import{h as n,t as r}from"./beans-CNd94UMz.js";import"./z-accordion-D2bwdcVo.js";import{t as i}from"./storybook-utils-DtpJwcUL.js";import{t as a}from"./style-map-CH-uIwiZ.js";import"./z-tag-xeObdDf3.js";var o={"--z-accordion-bg":i(!0),"--z-accordion-label-color":i(!0),"--z-accordion-disabled-label-color":{...i(!0),if:{arg:`isDisabled`,truthy:!0}},"--z-accordion-content-bg":i(!0),"--z-accordion-content-fg":i(!0),"--z-accordion-hover-color":i(!0),"--z-accordion-highlight-color":{...i(!0),if:{arg:`highlight`,truthy:!0}}},s={title:`ZAccordion`,component:`z-accordion`,argTypes:{...o,icon:{options:[null,...Object.keys(t).sort()],control:{type:`select`,labels:{null:`—`}}},shadow:{if:{arg:`variant`,eq:r.BACKGROUND}},size:{options:Object.values(n),control:{type:`inline-radio`}},variant:{options:Object.values(r),control:{type:`inline-radio`}}},args:{"--z-accordion-bg":null,"--z-accordion-label-color":null,"--z-accordion-disabled-label-color":null,"--z-accordion-content-bg":null,"--z-accordion-content-fg":null,"--z-accordion-hover-color":null,"--z-accordion-highlight-color":`var(--color-primary01)`,"--z-accordion-right-padding":`var(--space-unit)`,"--z-accordion-left-padding":`calc(var(--space-unit) * 2)`,"--z-accordion-label-font-weight":`var(--font-sb)`,highlight:!1,icon:null,isDisabled:!1,label:`Text label`,open:!1,shadow:!0,size:n.BIG,variant:r.DEFAULT},render:t=>e`<z-accordion
      .highlight=${t.highlight}
      .icon=${t.icon}
      .isDisabled=${t.isDisabled}
      .open=${t.open}
      .shadow=${t.shadow}
      label=${t.label}
      size=${t.size}
      variant=${t.variant}
      style=${a({"--z-accordion-highlight-color":t[`--z-accordion-highlight-color`],"--z-accordion-bg":t[`--z-accordion-bg`],"--z-accordion-label-color":t[`--z-accordion-label-color`],"--z-accordion-disabled-label-color":t[`--z-accordion-disabled-label-color`],"--z-accordion-content-bg":t[`--z-accordion-content-bg`],"--z-accordion-content-fg":t[`--z-accordion-content-fg`],"--z-accordion-hover-color":t[`--z-accordion-hover-color`],"--z-accordion-right-padding":t[`--z-accordion-right-padding`],"--z-accordion-left-padding":t[`--z-accordion-left-padding`],"--z-accordion-label-font-weight":t[`--z-accordion-label-font-weight`]})}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede,
      qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit? Possumusne ergo in vita
      summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo affectus, exul, orbus, egens,
      torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo, oblivisci non possum quae volo. Nec vero
      sum nescius esse utilitatem in historia, non modo voluptatem.
    </z-accordion>`,parameters:{docs:{description:{component:"To add the highlight band on the left, set the `highlight` property to `true` then set the `--z-accordion-highlight-color` CSS variable to the desired color."}}}},c={},l={argTypes:{"--z-accordion-highlight-color2":o[`--z-accordion-highlight-color`],"--z-accordion-highlight-color3":o[`--z-accordion-highlight-color`],"--z-accordion-highlight-color4":o[`--z-accordion-highlight-color`]},args:{"--z-accordion-highlight-color2":`var(--color-primary01)`,"--z-accordion-highlight-color3":`var(--color-primary01)`,"--z-accordion-highlight-color4":`var(--color-primary01)`},parameters:{controls:{exclude:[`open`]}},render:t=>e`${[s.render(t),s.render({...t,"--z-accordion-highlight-color":t[`--z-accordion-highlight-color2`]}),s.render({...t,"--z-accordion-highlight-color":t[`--z-accordion-highlight-color3`]}),s.render({...t,"--z-accordion-highlight-color":t[`--z-accordion-highlight-color4`]})]}`},u={render:t=>e`
    <z-accordion
      .highlight=${t.highlight}
      .icon=${t.icon}
      .isDisabled=${t.isDisabled}
      .open=${t.open}
      .shadow=${t.shadow}
      label=${t.label}
      size=${t.size}
      variant=${t.variant}
      style=${a({"--z-accordion-highlight-color":t[`--z-accordion-highlight-color`],"--z-accordion-bg":t[`--z-accordion-bg`],"--z-accordion-label-color":t[`--z-accordion-label-color`],"--z-accordion-disabled-label-color":t[`--z-accordion-disabled-label-color`],"--z-accordion-content-bg":t[`--z-accordion-content-bg`],"--z-accordion-content-fg":t[`--z-accordion-content-fg`],"--z-accordion-hover-color":t[`--z-accordion-hover-color`],"--z-accordion-right-padding":t[`--z-accordion-right-padding`],"--z-accordion-left-padding":t[`--z-accordion-left-padding`],"--z-accordion-label-font-weight":t[`--z-accordion-label-font-weight`]})}
    >
      <z-tag slot="tag">Tag 1</z-tag>
      <z-tag slot="tag">Tag 2</z-tag>
      <z-tag slot="tag">Tag 3</z-tag>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede,
      qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit? Possumusne ergo in vita
      summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo affectus, exul, orbus, egens,
      torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo, oblivisci non possum quae volo. Nec vero
      sum nescius esse utilitatem in historia, non modo voluptatem.
    </z-accordion>
  `};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  argTypes: {
    "--z-accordion-highlight-color2": cssPropsArgs["--z-accordion-highlight-color"],
    "--z-accordion-highlight-color3": cssPropsArgs["--z-accordion-highlight-color"],
    "--z-accordion-highlight-color4": cssPropsArgs["--z-accordion-highlight-color"]
  },
  args: {
    "--z-accordion-highlight-color2": "var(--color-primary01)",
    "--z-accordion-highlight-color3": "var(--color-primary01)",
    "--z-accordion-highlight-color4": "var(--color-primary01)"
  },
  parameters: {
    controls: {
      exclude: ["open"]
    }
  },
  render: args => html\`\${[StoryMeta.render(args), StoryMeta.render({
    ...args,
    "--z-accordion-highlight-color": args["--z-accordion-highlight-color2"]
  }), StoryMeta.render({
    ...args,
    "--z-accordion-highlight-color": args["--z-accordion-highlight-color3"]
  }), StoryMeta.render({
    ...args,
    "--z-accordion-highlight-color": args["--z-accordion-highlight-color4"]
  })]}\`
} satisfies Story`,...l.parameters?.docs?.source},description:{story:"When multiple `ZAccordion`s are placed in stack, the style is automatically optimized through global styles.",...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <z-accordion
      .highlight=\${args.highlight}
      .icon=\${args.icon}
      .isDisabled=\${args.isDisabled}
      .open=\${args.open}
      .shadow=\${args.shadow}
      label=\${args.label}
      size=\${args.size}
      variant=\${args.variant}
      style=\${styleMap({
    "--z-accordion-highlight-color": args["--z-accordion-highlight-color"],
    "--z-accordion-bg": args["--z-accordion-bg"],
    "--z-accordion-label-color": args["--z-accordion-label-color"],
    "--z-accordion-disabled-label-color": args["--z-accordion-disabled-label-color"],
    "--z-accordion-content-bg": args["--z-accordion-content-bg"],
    "--z-accordion-content-fg": args["--z-accordion-content-fg"],
    "--z-accordion-hover-color": args["--z-accordion-hover-color"],
    "--z-accordion-right-padding": args["--z-accordion-right-padding"],
    "--z-accordion-left-padding": args["--z-accordion-left-padding"],
    "--z-accordion-label-font-weight": args["--z-accordion-label-font-weight"]
  })}
    >
      <z-tag slot="tag">Tag 1</z-tag>
      <z-tag slot="tag">Tag 2</z-tag>
      <z-tag slot="tag">Tag 3</z-tag>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede,
      qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit? Possumusne ergo in vita
      summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo affectus, exul, orbus, egens,
      torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo, oblivisci non possum quae volo. Nec vero
      sum nescius esse utilitatem in historia, non modo voluptatem.
    </z-accordion>
  \`
} satisfies Story`,...u.parameters?.docs?.source}}};var d=[`Default`,`Stack`,`WithTags`];export{c as Default,l as Stack,u as WithTags,d as __namedExportsOrder,s as default};