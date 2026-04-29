import{r as e}from"./lit-CgIPLKVa.js";import{a as t,o as n,r,t as i}from"./z-icon-BmF0hk_o.js";import"./z-accordion-anHl5rAA.js";var a={title:`Iconset`,tags:[`!autodocs`]},o={render:()=>e`<div class="icons-list">
      ${[n,r,i,t].map((t,n)=>e` <z-accordion
            open
            shadow
            highlight=${!0}
            variant="background"
            label="${[`Stroke icons`,`Filled icons`,`Button icons`,`Legacy icon names`][n]} - (${Object.keys(t).length})"
          >
            <ol class="icons-container">
              ${Object.keys(t).sort().map(t=>e`
                    <li class="icon-box">
                      <z-icon name=${t}></z-icon>
                      <div class="icon-name">${t}</div>
                    </li>
                  `)}
            </ol>
          </z-accordion>`)}
    </div>`};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
} satisfies StoryObj`,...o.parameters?.docs?.source}}};var s=[`Iconset`];export{o as Iconset,s as __namedExportsOrder,a as default};