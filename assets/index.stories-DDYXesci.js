import{x as n}from"./lit-element-DGXdXVoE.js";import{o as m}from"./style-map-DWZVjDvr.js";import{I as d}from"./index-KOgRmbf5.js";import{g as r}from"./storybook-utils-DX4XXC0w.js";import"./index-CMwpvawq.js";import"./directive-CF8sV3Lr.js";import"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import"./index-DrFu-skq.js";import"./index-BZ0rSFNp.js";const M={title:"ZTag",component:"z-tag",argTypes:{icon:{control:{type:"select"},options:Object.keys(d).sort()},"--z-tag-text-color":r(),"--z-tag-bg":r()},args:{text:"In progress",expandable:!1,icon:"gear"}},o={render:t=>n`<z-tag
      icon=${t.icon}
      expandable=${t.expandable}
      >${t.text}
    </z-tag>`},e={args:{"--z-tag-text-color":null,"--z-tag-bg":null},render:t=>n`<z-tag
      style=${m({"--z-tag-text-color":t["--z-tag-text-color"],"--z-tag-bg":t["--z-tag-bg"]})}
      .icon=${t.icon}
      .expandable=${t.expandable}
      >${t.text}
    </z-tag>`},a={args:{text:"In progress testo lungo molto lungo lungo lungo lungo lungolungo lungolungo","--z-tag-text-color":null,"--z-tag-bg":null},render:t=>n`<z-tag
      style=${m({"--z-tag-text-color":t["--z-tag-text-color"],"--z-tag-bg":t["--z-tag-bg"]})}
      .icon=${t.icon}
      .expandable=${t.expandable}
      >${t.text}
    </z-tag>`};var g,l,s;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => html\`<z-tag
      icon=\${args.icon}
      expandable=\${args.expandable}
      >\${args.text}
    </z-tag>\`
}`,...(s=(l=o.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var c,p,x;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(p=e.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var z,u,i;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const O=["Default","ColorTokens","LongText"];export{e as ColorTokens,o as Default,a as LongText,O as __namedExportsOrder,M as default};
