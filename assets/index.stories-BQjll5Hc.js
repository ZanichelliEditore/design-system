import{x as l}from"./lit-element-DGXdXVoE.js";import{e as z}from"./class-map-CUbHFwPI.js";import{I as d}from"./index-hYK8SFEW.js";import"./directive-CF8sV3Lr.js";import"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import"./index-DrFu-skq.js";import"./index-BZ0rSFNp.js";const x={title:"ZLink",argTypes:{colorVariant:{options:["z-link","z-link-blue","z-link-red","z-link-inverse"],control:{type:"inline-radio"}},icon:{options:[null,...Object.keys(d)],control:{type:"select",labels:{null:"No icon"}}},"z-link-icon":{if:{arg:"icon",truthy:!0}}},args:{colorVariant:"z-link",text:"Zanichelli.it",icon:null,"z-link-active":!1,"z-link-disabled":!1,"z-link-underline":!1,"z-link-icon":!1,"z-link-sb":!1}},k=n=>({"z-link":!0,"z-link-blue":n.colorVariant==="z-link-blue","z-link-red":n.colorVariant==="z-link-red","z-link-inverse":n.colorVariant==="z-link-inverse","z-link-active":n["z-link-active"],"z-link-disabled":n["z-link-disabled"],"z-link-underline":n["z-link-underline"],"z-link-icon":n["z-link-icon"],"z-link-sb":n["z-link-sb"]}),i={render:n=>l`
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
  `};var o,t,r;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(r=(t=i.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};var s,a,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:'{\n  render: args => html`\n    <div class="z-link-story">\n      <button class=${classMap(getClasses(args))}>\n        ${args.icon ? html`<z-icon name=${args.icon}></z-icon>` : ""} ${args.text}\n      </button>\n    </div>\n  `\n}',...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const y=["ZLink","ZLinkButton"];export{i as ZLink,e as ZLinkButton,y as __namedExportsOrder,x as default};
