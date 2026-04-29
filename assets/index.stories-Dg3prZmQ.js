import{r as e}from"./lit-CgIPLKVa.js";import{i as t}from"./z-icon-6rrsih2X.js";import{t as n}from"./class-map-BbCMXtX9.js";var r={title:`ZLink`,argTypes:{colorVariant:{options:[`z-link`,`z-link-blue`,`z-link-red`,`z-link-inverse`],control:{type:`inline-radio`}},icon:{options:[null,...Object.keys(t)],control:{type:`select`,labels:{null:`No icon`}}},"z-link-icon":{if:{arg:`icon`,truthy:!0}}},args:{colorVariant:`z-link`,text:`Zanichelli.it`,icon:null,"z-link-active":!1,"z-link-disabled":!1,"z-link-underline":!1,"z-link-icon":!1,"z-link-sb":!1}},i=e=>({"z-link":!0,"z-link-blue":e.colorVariant===`z-link-blue`,"z-link-red":e.colorVariant===`z-link-red`,"z-link-inverse":e.colorVariant===`z-link-inverse`,"z-link-active":e[`z-link-active`],"z-link-disabled":e[`z-link-disabled`],"z-link-underline":e[`z-link-underline`],"z-link-icon":e[`z-link-icon`],"z-link-sb":e[`z-link-sb`]}),a={render:t=>e`
    <div class="z-link-story">
      <a
        href="zanichelli.it"
        class=${n(i(t))}
      >
        ${t.icon?e`<z-icon name=${t.icon}></z-icon>`:``} ${t.text}
      </a>
    </div>
  `},o={render:t=>e`
    <div class="z-link-story">
      <button class=${n(i(t))}>
        ${t.icon?e`<z-icon name=${t.icon}></z-icon>`:``} ${t.text}
      </button>
    </div>
  `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <div class="z-link-story">
      <a
        href="zanichelli.it"
        class=\${classMap(getClasses(args))}
      >
        \${args.icon ? html\`<z-icon name=\${args.icon}></z-icon>\` : ""} \${args.text}
      </a>
    </div>
  \`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <div class="z-link-story">
      <button class=\${classMap(getClasses(args))}>
        \${args.icon ? html\`<z-icon name=\${args.icon}></z-icon>\` : ""} \${args.text}
      </button>
    </div>
  \`
}`,...o.parameters?.docs?.source}}};var s=[`ZLink`,`ZLinkButton`];export{a as ZLink,o as ZLinkButton,s as __namedExportsOrder,r as default};