import{x as l}from"./lit-element-DGXdXVoE.js";import{o as $}from"./style-map-DWZVjDvr.js";import{A as t,C as d}from"./index-C0TNZEjZ.js";import{I as q}from"./index-Bo_H2aQL.js";import{g as i}from"./storybook-utils-DX4XXC0w.js";import"./index-BN0aZgub.js";import"./index-CyWq3egP.js";import"./directive-CF8sV3Lr.js";import"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import"./index-DrFu-skq.js";import"./index-CedYZwFP.js";import"./iframe-DzRr37qK.js";const a={"--z-accordion-bg":i(!0),"--z-accordion-label-color":i(!0),"--z-accordion-disabled-label-color":{...i(!0),if:{arg:"isDisabled",truthy:!0}},"--z-accordion-content-bg":i(!0),"--z-accordion-content-fg":i(!0),"--z-accordion-hover-color":i(!0),"--z-accordion-highlight-color":{...i(!0),if:{arg:"highlight",truthy:!0}}},c={title:"ZAccordion",component:"z-accordion",argTypes:{...a,icon:{options:[null,...Object.keys(q).sort()],control:{type:"select",labels:{null:"—"}}},shadow:{if:{arg:"variant",eq:t.BACKGROUND}},size:{options:Object.values(d),control:{type:"inline-radio"}},variant:{options:Object.values(t),control:{type:"inline-radio"}}},args:{"--z-accordion-bg":null,"--z-accordion-label-color":null,"--z-accordion-disabled-label-color":null,"--z-accordion-content-bg":null,"--z-accordion-content-fg":null,"--z-accordion-hover-color":null,"--z-accordion-highlight-color":"var(--color-primary01)","--z-accordion-right-padding":"var(--space-unit)","--z-accordion-left-padding":"calc(var(--space-unit) * 2)","--z-accordion-label-font-weight":"var(--font-sb)",highlight:!1,icon:null,isDisabled:!1,label:"Text label",open:!1,shadow:!0,size:d.BIG,variant:t.DEFAULT},render:o=>l`<z-accordion
      .highlight=${o.highlight}
      .icon=${o.icon}
      .isDisabled=${o.isDisabled}
      .open=${o.open}
      .shadow=${o.shadow}
      label=${o.label}
      size=${o.size}
      variant=${o.variant}
      style=${$({"--z-accordion-highlight-color":o["--z-accordion-highlight-color"],"--z-accordion-bg":o["--z-accordion-bg"],"--z-accordion-label-color":o["--z-accordion-label-color"],"--z-accordion-disabled-label-color":o["--z-accordion-disabled-label-color"],"--z-accordion-content-bg":o["--z-accordion-content-bg"],"--z-accordion-content-fg":o["--z-accordion-content-fg"],"--z-accordion-hover-color":o["--z-accordion-hover-color"],"--z-accordion-right-padding":o["--z-accordion-right-padding"],"--z-accordion-left-padding":o["--z-accordion-left-padding"],"--z-accordion-label-font-weight":o["--z-accordion-label-font-weight"]})}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede,
      qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit? Possumusne ergo in vita
      summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo affectus, exul, orbus, egens,
      torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo, oblivisci non possum quae volo. Nec vero
      sum nescius esse utilitatem in historia, non modo voluptatem.
    </z-accordion>`,parameters:{docs:{description:{component:"To add the highlight band on the left, set the `highlight` property to `true` then set the `--z-accordion-highlight-color` CSS variable to the desired color."}}}},e={},r={argTypes:{"--z-accordion-highlight-color2":a["--z-accordion-highlight-color"],"--z-accordion-highlight-color3":a["--z-accordion-highlight-color"],"--z-accordion-highlight-color4":a["--z-accordion-highlight-color"]},args:{"--z-accordion-highlight-color2":"var(--color-primary01)","--z-accordion-highlight-color3":"var(--color-primary01)","--z-accordion-highlight-color4":"var(--color-primary01)"},parameters:{controls:{exclude:["open"]}},render:o=>l`${[c.render(o),c.render({...o,"--z-accordion-highlight-color":o["--z-accordion-highlight-color2"]}),c.render({...o,"--z-accordion-highlight-color":o["--z-accordion-highlight-color3"]}),c.render({...o,"--z-accordion-highlight-color":o["--z-accordion-highlight-color4"]})]}`},n={render:o=>l`
    <z-accordion
      .highlight=${o.highlight}
      .icon=${o.icon}
      .isDisabled=${o.isDisabled}
      .open=${o.open}
      .shadow=${o.shadow}
      label=${o.label}
      size=${o.size}
      variant=${o.variant}
      style=${$({"--z-accordion-highlight-color":o["--z-accordion-highlight-color"],"--z-accordion-bg":o["--z-accordion-bg"],"--z-accordion-label-color":o["--z-accordion-label-color"],"--z-accordion-disabled-label-color":o["--z-accordion-disabled-label-color"],"--z-accordion-content-bg":o["--z-accordion-content-bg"],"--z-accordion-content-fg":o["--z-accordion-content-fg"],"--z-accordion-hover-color":o["--z-accordion-hover-color"],"--z-accordion-right-padding":o["--z-accordion-right-padding"],"--z-accordion-left-padding":o["--z-accordion-left-padding"],"--z-accordion-label-font-weight":o["--z-accordion-label-font-weight"]})}
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
  `};var s,h,g;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(g=(h=e.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,m,z,p,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
} satisfies Story`,...(z=(m=r.parameters)==null?void 0:m.docs)==null?void 0:z.source},description:{story:"When multiple `ZAccordion`s are placed in stack, the style is automatically optimized through global styles.",...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.description}}};var v,f,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
} satisfies Story`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const L=["Default","Stack","WithTags"];export{e as Default,r as Stack,n as WithTags,L as __namedExportsOrder,c as default};
