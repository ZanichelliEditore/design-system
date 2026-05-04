import{r as e}from"./lit-CgIPLKVa.js";import{i as t}from"./z-icon-0wx6NWiZ.js";import{t as n}from"./storybook-utils-DtpJwcUL.js";import{t as r}from"./style-map-CH-uIwiZ.js";import"./z-tag-VtdtpVfW.js";var i={title:`ZTag`,component:`z-tag`,argTypes:{icon:{control:{type:`select`},options:Object.keys(t).sort()},"--z-tag-text-color":n(),"--z-tag-bg":n()},args:{text:`In progress`,expandable:!1,icon:`gear`}},a={render:t=>e`<z-tag
      icon=${t.icon}
      expandable=${t.expandable}
      >${t.text}
    </z-tag>`},o={args:{"--z-tag-text-color":null,"--z-tag-bg":null},render:t=>e`<z-tag
      style=${r({"--z-tag-text-color":t[`--z-tag-text-color`],"--z-tag-bg":t[`--z-tag-bg`]})}
      .icon=${t.icon}
      .expandable=${t.expandable}
      >${t.text}
    </z-tag>`},s={args:{text:`In progress testo lungo molto lungo lungo lungo lungo lungolungo lungolungo`,"--z-tag-text-color":null,"--z-tag-bg":null},render:t=>e`<z-tag
      style=${r({"--z-tag-text-color":t[`--z-tag-text-color`],"--z-tag-bg":t[`--z-tag-bg`]})}
      .icon=${t.icon}
      .expandable=${t.expandable}
      >${t.text}
    </z-tag>`};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => html\`<z-tag
      icon=\${args.icon}
      expandable=\${args.expandable}
      >\${args.text}
    </z-tag>\`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "--z-tag-text-color": null,
    "--z-tag-bg": null
  },
  render: args => html\`<z-tag
      style=\${styleMap({
    "--z-tag-text-color": args["--z-tag-text-color"],
    "--z-tag-bg": args["--z-tag-bg"]
  })}
      .icon=\${args.icon}
      .expandable=\${args.expandable}
      >\${args.text}
    </z-tag>\`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "text": "In progress testo lungo molto lungo lungo lungo lungo lungolungo lungolungo",
    "--z-tag-text-color": null,
    "--z-tag-bg": null
  },
  render: args => html\`<z-tag
      style=\${styleMap({
    "--z-tag-text-color": args["--z-tag-text-color"],
    "--z-tag-bg": args["--z-tag-bg"]
  })}
      .icon=\${args.icon}
      .expandable=\${args.expandable}
      >\${args.text}
    </z-tag>\`
}`,...s.parameters?.docs?.source}}};var c=[`Default`,`ColorTokens`,`LongText`];export{o as ColorTokens,a as Default,s as LongText,c as __namedExportsOrder,i as default};