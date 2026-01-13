import{x as n}from"./lit-element-DGXdXVoE.js";import"./index-BN5twS2g.js";import{S as r,F as l,B as d,L as m}from"./index-Di9u4Hee.js";import"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import"./index-DrFu-skq.js";import"./index-BZ0rSFNp.js";import"./index-BBy8evlc.js";const N={title:"Iconset",tags:["!autodocs"]},o={render:()=>n`<div class="icons-list">
      ${[r,l,d,m].map((i,t)=>n` <z-accordion
            open
            shadow
            highlight=${!0}
            variant="background"
            label="${["Stroke icons","Filled icons","Button icons","Legacy icon names"][t]} - (${Object.keys(i).length})"
          >
            <ol class="icons-container">
              ${Object.keys(i).sort().map(s=>n`
                    <li class="icon-box">
                      <z-icon name=${s}></z-icon>
                      <div class="icon-name">${s}</div>
                    </li>
                  `)}
            </ol>
          </z-accordion>`)}
    </div>`};var c,e,a;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`<div class="icons-list">
      \${[STROKE_ICONS, FILLED_ICONS, BUTTON_ICONS, LEGACY_ICONS].map((iconsGroup, index) => html\` <z-accordion
            open
            shadow
            highlight=\${true}
            variant="background"
            label="\${["Stroke icons", "Filled icons", "Button icons", "Legacy icon names"][index]} - (\${Object.keys(iconsGroup).length})"
          >
            <ol class="icons-container">
              \${Object.keys(iconsGroup).sort().map(iconName => html\`
                    <li class="icon-box">
                      <z-icon name=\${iconName}></z-icon>
                      <div class="icon-name">\${iconName}</div>
                    </li>
                  \`)}
            </ol>
          </z-accordion>\`)}
    </div>\`
} satisfies StoryObj`,...(a=(e=o.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const b=["Iconset"];export{o as Iconset,b as __namedExportsOrder,N as default};
