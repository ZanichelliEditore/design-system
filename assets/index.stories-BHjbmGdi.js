import{x as d}from"./lit-element-DGXdXVoE.js";import{B as s,C as c,I as l}from"./index-BBy8evlc.js";import"./index-DElTBBEa.js";import"./index-Di9u4Hee.js";import"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import"./index-DrFu-skq.js";import"./index-BZ0rSFNp.js";const _={title:"ZButton",component:"z-button",args:{variant:s.PRIMARY,size:c.BIG,disabled:!1,icon:"download",iconPosition:l.LEFT,ariaLabel:"Clicca sul bottone",htmlrole:"button"},argTypes:{variant:{options:Object.values(s),control:{type:"inline-radio"}},size:{options:Object.values(c),control:{type:"inline-radio"}},iconPosition:{options:Object.values(l),control:{type:"inline-radio"}}},render:o=>d`<z-button
      variant=${o.variant}
      size=${o.size}
      disabled=${o.disabled}
      icon=${o.icon}
      .iconPosition=${o.iconPosition}
      .ariaLabel=${o.ariaLabel}
      htmlrole=${o.htmlrole}
    >
      Click me
    </z-button>`},r={},a={args:{variant:s.SECONDARY,size:c.X_SMALL},parameters:{controls:{exclude:["variant","icon"]}}},n={args:{variant:s.TERTIARY,size:c.SMALL},parameters:{controls:{exclude:["variant","icon"]}}},i={render:o=>d`<z-button
      variant=${o.variant}
      size=${o.size}
      disabled=${o.disabled}
      icon=${o.icon}
      .iconPosition=${o.iconPosition}
      .ariaLabel=${o.ariaLabel}
      htmlrole=${o.htmlrole}
    />`},e={args:{icon:"arrow-quad-north-east",href:"https://wikipedia.com",target:"_blank",role:"link"},render:o=>d`<z-button
      variant=${o.variant}
      size=${o.size}
      disabled=${o.disabled}
      icon=${o.icon}
      .iconPosition=${o.iconPosition}
      .ariaLabel=${o.ariaLabel}
      htmlrole=${o.htmlrole}
      href=${o.href}
      target=${o.target}
    >
      Go to wikipedia
    </z-button>`},t={args:{icon:"arrow-right",iconPosition:l.RIGHT}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var $,b,z;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: ButtonVariant.SECONDARY,
    size: ControlSize.X_SMALL
  },
  parameters: {
    controls: {
      exclude: ["variant", "icon"]
    }
  }
} satisfies Story`,...(z=(b=a.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var h,S,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: ButtonVariant.TERTIARY,
    size: ControlSize.SMALL
  },
  parameters: {
    controls: {
      exclude: ["variant", "icon"]
    }
  }
} satisfies Story`,...(g=(S=n.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var v,L,P;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => html\`<z-button
      variant=\${args.variant}
      size=\${args.size}
      disabled=\${args.disabled}
      icon=\${args.icon}
      .iconPosition=\${args.iconPosition}
      .ariaLabel=\${args.ariaLabel}
      htmlrole=\${args.htmlrole}
    />\`
} satisfies Story`,...(P=(L=i.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var y,f,I;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
} satisfies Story`,...(I=(f=e.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var R,k,T;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    icon: "arrow-right",
    iconPosition: IconPosition.RIGHT
  }
} satisfies Story`,...(T=(k=t.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const G=["Primary","SecondaryXSmall","TertiarySmall","IconOnly","LinkButton","IconRight"];export{i as IconOnly,t as IconRight,e as LinkButton,r as Primary,a as SecondaryXSmall,n as TertiarySmall,G as __namedExportsOrder,_ as default};
