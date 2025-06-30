import"./lit-element--ufgQf_M.js";import{x as n}from"./lit-html-rc9TYZL2.js";import"./index-BylaiR-U.js";import{S as r,F as l,B as m,L as d}from"./index-9WVNbtLu.js";import"./chunk-L4EGOTBX-BzYVsoCE.js";import"./entry-preview-uRqU0LK7.js";import"./index-DrFu-skq.js";import"./index-BZ0rSFNp.js";import"./index-Dk5nO_yw.js";const b={title:"Iconset",tags:["!autodocs"]},o={render:()=>n`<div class="icons-list">
      ${[r,l,m,d].map((i,t)=>n` <z-accordion
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
} satisfies StoryObj`,...(a=(e=o.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const _=["Iconset"];export{o as Iconset,_ as __namedExportsOrder,b as default};
