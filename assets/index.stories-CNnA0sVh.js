import{x as l}from"./lit-element-DGXdXVoE.js";import{e as z}from"./class-map-CUbHFwPI.js";import{I as d}from"./index-BN8hH0FG.js";import"./directive-CF8sV3Lr.js";import"./chunk-GKNNPQCW-BkHQSocK.js";import"./index-8h8udRzn.js";const v={title:"ZLink",argTypes:{colorVariant:{options:["default","z-link-black","z-link-white"],control:{type:"inline-radio"}},icon:{options:[null,...Object.keys(d)],control:{type:"select",labels:{null:"No icon"}}},"z-link-icon":{if:{arg:"icon",truthy:!0}}},args:{colorVariant:"default",text:"Zanichelli.it",icon:null,"z-link-active":!1,"z-link-inverse":!1,"z-link-disabled":!1,"z-link-underline":!1,"z-link-icon":!1,"z-link-sb":!1}},k=n=>({"z-link":!0,"z-link-black":n.colorVariant==="z-link-black","z-link-white":n.colorVariant==="z-link-white","z-link-active":n["z-link-active"],"z-link-inverse":n["z-link-inverse"],"z-link-disabled":n["z-link-disabled"],"z-link-underline":n["z-link-underline"],"z-link-icon":n["z-link-icon"],"z-link-sb":n["z-link-sb"]}),i={render:n=>l`
    <div class="z-link-story">
      <a
        href="zanichelli.it"
        class=${z(k(n))}
      >
        ${n.icon?l`<z-icon name=${n.icon}></z-icon>`:""} ${n.text}
      </a>
    </div>
  `},e={render:n=>l`
    <div class="z-link-story">
      <button class=${z(k(n))}>
        ${n.icon?l`<z-icon name=${n.icon}></z-icon>`:""} ${n.text}
      </button>
    </div>
  `};var t,o,s;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(s=(o=i.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var a,r,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:'{\n  render: args => html`\n    <div class="z-link-story">\n      <button class=${classMap(getClasses(args))}>\n        ${args.icon ? html`<z-icon name=${args.icon}></z-icon>` : ""} ${args.text}\n      </button>\n    </div>\n  `\n}',...(c=(r=e.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const h=["ZLink","ZLinkButton"];export{i as ZLink,e as ZLinkButton,h as __namedExportsOrder,v as default};
