import{x as n}from"./lit-element-DGXdXVoE.js";import{o as m}from"./style-map-DWZVjDvr.js";import{I as u}from"./index-BEj-2O7q.js";import{a as r}from"./storybook-utils-DAVCxM-F.js";import"./index-CPdUOJpP.js";import"./directive-CF8sV3Lr.js";import"./chunk-GKNNPQCW-BkHQSocK.js";import"./index-8h8udRzn.js";const k={title:"ZTag",component:"z-tag",argTypes:{icon:{control:{type:"select"},options:Object.keys(u).sort()},"--z-tag-text-color":r(),"--z-tag-bg":r()},args:{text:"In progress",expandable:!1,icon:"gear","--z-tag-text-color":void 0,"--z-tag-bg":void 0}},e={render:t=>n`<z-tag
      icon="gear"
      expandable=${t.expandable}
      >${t.text}
    </z-tag>`},o={render:t=>n`<z-tag
      style=${m({"--z-tag-text-color":t["--z-tag-text-color"],"--z-tag-bg":t["--z-tag-bg"]})}
      .icon=${t.icon}
      .expandable=${t.expandable}
      >${t.text}
    </z-tag>`},a={args:{text:"In progress testo lungo molto lungo lungo lungo lungo lungolungo lungolungo"},render:t=>n`<z-tag
      style=${m({"--z-tag-text-color":t["--z-tag-text-color"],"--z-tag-bg":t["--z-tag-bg"]})}
      .icon=${t.icon}
      .expandable=${t.expandable}
      >${t.text}
    </z-tag>`};var g,s,l;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => html\`<z-tag
      icon="gear"
      expandable=\${args.expandable}
      >\${args.text}
    </z-tag>\`
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,p,x;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => html\`<z-tag
      style=\${styleMap({
    "--z-tag-text-color": args["--z-tag-text-color"],
    "--z-tag-bg": args["--z-tag-bg"]
  })}
      .icon=\${args.icon}
      .expandable=\${args.expandable}
      >\${args.text}
    </z-tag>\`
}`,...(x=(p=o.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var d,z,i;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    text: "In progress testo lungo molto lungo lungo lungo lungo lungolungo lungolungo"
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
}`,...(i=(z=a.parameters)==null?void 0:z.docs)==null?void 0:i.source}}};const h=["Default","ColorTokens","LongText"];export{o as ColorTokens,e as Default,a as LongText,h as __namedExportsOrder,k as default};
