import{n as e}from"./chunk-DnJy8xQt.js";import{gt as t,ut as n}from"./iframe-CzRu_Q6e.js";import{K as r,t as i}from"./beans-zckFsBZy.js";import{a,o,r as s,s as c,t as l}from"./iconset-BfOAkyaN.js";var u=e((()=>{})),d,f,p,m;e((()=>{n(),r(),c(),u(),d={title:`Iconset`,tags:[`!autodocs`],parameters:{docs:{codePanel:!1},controls:{disable:!0}}},f={"Stroke icons":o,"Filled icons":s,"Button icons":l,"Legacy icons":a},p={render:()=>t(`div`,{class:`icons-list`},Object.entries(f).map(([e,n])=>t(`z-accordion`,{open:!0,shadow:!0,variant:i.BACKGROUND,label:`${e} - (${Object.keys(n).length})`},t(`ol`,{class:`icons-container`},Object.keys(n).sort().map(e=>t(`li`,{class:`icon-box`},t(`z-icon`,{name:e}),t(`div`,{class:`icon-name`},e)))))))},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div class="icons-list">
      {Object.entries(ICONS).map(([groupName, iconsGroup]) => <z-accordion open shadow variant={AccordionVariant.BACKGROUND} label={\`\${groupName} - (\${Object.keys(iconsGroup).length})\`}>
          <ol class="icons-container">
            {Object.keys(iconsGroup).sort().map(iconName => <li class="icon-box">
                  <z-icon name={iconName}></z-icon>
                  <div class="icon-name">{iconName}</div>
                </li>)}
          </ol>
        </z-accordion>)}
    </div>
}`,...p.parameters?.docs?.source}}},m=[`Iconset`]}))();export{p as Iconset,m as __namedExportsOrder,d as default};