import{n as e}from"./chunk-DnJy8xQt.js";import{dt as t,pt as n}from"./iframe-urO_rj3a.js";import{K as r,t as i}from"./beans-B5co_AyU.js";import{a,o,r as s,s as c,t as l}from"./iconset-Ek2n_a-a.js";var u=e((()=>{})),d,f,p,m;e((()=>{t(),r(),c(),u(),d={title:`Iconset`,tags:[`!autodocs`],parameters:{docs:{codePanel:!1},controls:{disable:!0}}},f={"Stroke icons":o,"Filled icons":s,"Button icons":l,"Legacy icons":a},p={render:()=>n(`div`,{class:`icons-list`},Object.entries(f).map(([e,t])=>n(`z-accordion`,{open:!0,shadow:!0,variant:i.BACKGROUND,label:`${e} - (${Object.keys(t).length})`},n(`ol`,{class:`icons-container`},Object.keys(t).sort().map(e=>n(`li`,{class:`icon-box`},n(`z-icon`,{name:e}),n(`div`,{class:`icon-name`},e)))))))},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Iconset`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}}}))();export{p as Iconset,m as __namedExportsOrder,d as default};