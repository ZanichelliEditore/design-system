import{x as n}from"./lit-element-DGXdXVoE.js";import"./index-DNwVPGrS.js";import{S as r,F as l,B as d,L as m}from"./index-BEj-2O7q.js";import"./chunk-GKNNPQCW-BkHQSocK.js";import"./index-8h8udRzn.js";import"./index-DwFITWZA.js";const I={title:"Iconset",tags:["!autodocs"]},o={render:()=>n`<div class="icons-list">
      ${[r,l,d,m].map((s,t)=>n` <z-accordion
            open
            shadow
            highlight=${!0}
            variant="background"
            label="${["Stroke icons","Filled icons","Button icons","Legacy icon names"][t]} - (${Object.keys(s).length})"
          >
            <ol class="icons-container">
              ${Object.keys(s).sort().map(i=>n`
                    <li class="icon-box">
                      <z-icon name=${i}></z-icon>
                      <div class="icon-name">${i}</div>
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
} satisfies StoryObj`,...(a=(e=o.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const g=["Iconset"];export{o as Iconset,g as __namedExportsOrder,I as default};
