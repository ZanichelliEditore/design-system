import{x as l}from"./lit-element-DGXdXVoE.js";import{B as i,C as s}from"./index-CjlG6izv.js";import"./index-CroDk4Ym.js";import"./index-Bq6BsZx0.js";import"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import"./index-DrFu-skq.js";import"./index-BZ0rSFNp.js";const T={title:"ZButton",component:"z-button",args:{variant:i.PRIMARY,size:s.BIG,disabled:!1,icon:"download",ariaLabel:"Clicca sul bottone",role:"button"},argTypes:{variant:{options:Object.values(i),control:{type:"inline-radio"}},size:{options:Object.values(s),control:{type:"inline-radio"}}},render:a=>l`<z-button
      variant=${a.variant}
      size=${a.size}
      disabled=${a.disabled}
      icon=${a.icon}
      .ariaLabel=${a.ariaLabel}
      role=${a.role}
    >
      Click me
    </z-button>`},r={},e={args:{variant:i.SECONDARY,size:s.X_SMALL},parameters:{controls:{exclude:["variant","icon"]}}},n={args:{variant:i.TERTIARY,size:s.SMALL},parameters:{controls:{exclude:["variant","icon"]}}},t={render:a=>l`<z-button
      variant=${a.variant}
      size=${a.size}
      disabled=${a.disabled}
      icon=${a.icon}
      .ariaLabel=${a.ariaLabel}
      role=${a.role}
    />`},o={args:{icon:"arrow-quad-north-east",href:"https://wikipedia.com",target:"_blank",role:"link"},render:a=>l`<z-button
      variant=${a.variant}
      size=${a.size}
      disabled=${a.disabled}
      icon=${a.icon}
      .ariaLabel=${a.ariaLabel}
      role=${a.role}
      href=${a.href}
      target=${a.target}
    >
      Go to wikipedia
    </z-button>`};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,b;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: ButtonVariant.SECONDARY,
    size: ControlSize.X_SMALL
  },
  parameters: {
    controls: {
      exclude: ["variant", "icon"]
    }
  }
} satisfies Story`,...(b=(u=e.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var $,z,S;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: ButtonVariant.TERTIARY,
    size: ControlSize.SMALL
  },
  parameters: {
    controls: {
      exclude: ["variant", "icon"]
    }
  }
} satisfies Story`,...(S=(z=n.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var v,L,g;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => html\`<z-button
      variant=\${args.variant}
      size=\${args.size}
      disabled=\${args.disabled}
      icon=\${args.icon}
      .ariaLabel=\${args.ariaLabel}
      role=\${args.role}
    />\`
} satisfies Story`,...(g=(L=t.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};var y,f,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
      .ariaLabel=\${args.ariaLabel}
      role=\${args.role}
      href=\${args.href}
      target=\${args.target}
    >
      Go to wikipedia
    </z-button>\`
} satisfies Story`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const I=["Primary","SecondaryXSmall","TertiarySmall","IconOnly","LinkButton"];export{t as IconOnly,o as LinkButton,r as Primary,e as SecondaryXSmall,n as TertiarySmall,I as __namedExportsOrder,T as default};
