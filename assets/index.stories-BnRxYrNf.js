import{n as e}from"./chunk-DnJy8xQt.js";import{X as t,nt as n}from"./iframe-BmS_1CGU.js";var r=e((()=>{})),i,a,o,s,c,l,u,d,f,p,m,h;e((()=>{t(),r(),i={title:`Typography`,argTypes:{fontFamily:{options:[`--font-family-sans`,`--font-family-serif`],control:{type:`inline-radio`}}},args:{fontFamily:`--font-family-sans`},parameters:{docs:{codePanel:!1,description:{component:`The typographic styles are based on the \`IBM Plex\` font family.
Some CSS classes and props are provided to apply the typographic styles:
- a set of CSS custom props for font sizes and font weights
- a set of classes for headings, body text, and interactive text
- a set of classes and CSS custom props for section titles`}}}},a=`The quick brown fox jumps over the lazy dog`,o=[`--font-size-1`,`--font-size-2`,`--font-size-3`,`--font-size-4`,`--font-size-5`,`--font-size-6`,`--font-size-7`,`--font-size-8`,`--font-size-9`,`--font-size-10`,`--font-size-11`,`--font-size-12`,`--font-size-13`,`--font-size-14`,`--font-size-15`,`--font-size-16`,`--font-size-17`],s=4,c=5,l=3,u=6,d=e=>e?`-${e}`:``,f=e=>{let t=getComputedStyle(document.documentElement);return`${Number.parseFloat(t.getPropertyValue(e))*Number.parseFloat(t.getPropertyValue(`font-size`))}px`},p={argTypes:{fontWeight:{options:[`--font-lt`,`--font-rg`,`--font-sb`,`--font-bd`],control:{type:`inline-radio`}}},args:{fontWeight:`--font-rg`},render:e=>n(`div`,{class:`type-scale`},o.map(t=>[n(`span`,{class:`body-5-sb`},t),n(`span`,{class:`body-5`},f(t)),n(`span`,{class:`sample-text`,style:{fontSize:`var(${t})`,fontFamily:`var(${e.fontFamily})`,fontWeight:`var(${e.fontWeight})`}},a)]))},m={argTypes:{headingWeight:{options:[`lt`,null,`sb`],control:{type:`inline-radio`,labels:{lt:`Light`,null:`Regular`,sb:`Semibold`}}},fontWeight:{options:[null,`sb`],control:{type:`inline-radio`,labels:{null:`Regular`,sb:`Semibold`}}}},args:{headingWeight:null,fontWeight:null},render:e=>n(`div`,{class:`typography-classes`},n(`div`,{class:`section-title-classes`},Array.from({length:u},(e,t)=>t+1).map(e=>n(`div`,{class:`typography-group`},n(`div`,{class:`section-title-${e}`},`Section title ${e}`),n(`div`,{class:`body-5-sb`},`.section-title-${e} / --section-title-${e}`)))),n(`div`,{class:`heading-classes`},Array.from({length:s},(e,t)=>t+1).map(t=>n(`div`,{class:`typography-group`},n(`div`,{class:`heading-${t}${d(e.headingWeight)}`,style:{fontFamily:`var(${e.fontFamily})`}},`Heading `,t),n(`div`,{class:`body-5-sb`},`.heading-${t}${d(e.headingWeight)}`)))),n(`div`,{class:`body-classes`},Array.from({length:c},(e,t)=>t+1).map(t=>n(`div`,{class:`typography-group`},n(`div`,{class:`body-${t}${d(e.fontWeight)}`,style:{fontFamily:`var(${e.fontFamily})`}},`Body `,t),n(`div`,{class:`body-5-sb`},`.body-${t}${d(e.fontWeight)}`)))),n(`div`,{class:`interactive-classes`},Array.from({length:l},(e,t)=>t+1).map(t=>n(`div`,{class:`typography-group`},n(`div`,{class:`interactive-${t}${d(e.fontWeight)}`,style:{fontFamily:`var(${e.fontFamily})`}},`Interactive `,t),n(`div`,{class:`body-5-sb`},`.interactive-${t}${d(e.fontWeight)}`)))),n(`div`,{class:`helper-classes`},n(`div`,{class:`typography-group`},n(`div`,{class:`helper${d(e.fontWeight)}`,style:{fontFamily:`var(${e.fontFamily})`}},`Helper`),n(`div`,{class:`body-5-sb`},`.helper${d(e.fontWeight)}`))))},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  argTypes: {
    fontWeight: {
      options: ["--font-lt", "--font-rg", "--font-sb", "--font-bd"],
      control: {
        type: "inline-radio"
      }
    }
  },
  args: {
    fontWeight: "--font-rg"
  },
  render: (args: TypeScaleArgs) => <div class="type-scale">
      {scaleProps.map(prop => [<span class="body-5-sb">{prop}</span>, <span class="body-5">{getPxValue(prop)}</span>, <span class="sample-text" style={{
      fontSize: \`var(\${prop})\`,
      fontFamily: \`var(\${args.fontFamily})\`,
      fontWeight: \`var(\${args.fontWeight})\`
    }}>
          {sampleText}
        </span>])}
    </div>
} satisfies StoryObj<TypeScaleArgs>`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  argTypes: {
    headingWeight: {
      options: ["lt", null, "sb"],
      control: {
        type: "inline-radio",
        labels: {
          lt: "Light",
          null: "Regular",
          sb: "Semibold"
        }
      }
    },
    fontWeight: {
      options: [null, "sb"],
      control: {
        type: "inline-radio",
        labels: {
          null: "Regular",
          sb: "Semibold"
        }
      }
    }
  },
  args: {
    headingWeight: null,
    fontWeight: null
  },
  render: (args: TypographyClassesArgs) => <div class="typography-classes">
      <div class="section-title-classes">
        {Array.from({
        length: sectionTitleLevels
      }, (_, i) => i + 1).map(level => <div class="typography-group">
            <div class={\`section-title-\${level}\`}>{\`Section title \${level}\`}</div>
            <div class="body-5-sb">{\`.section-title-\${level} / --section-title-\${level}\`}</div>
          </div>)}
      </div>

      <div class="heading-classes">
        {Array.from({
        length: headingLevels
      }, (_, i) => i + 1).map(level => <div class="typography-group">
            <div class={\`heading-\${level}\${getWeightSuffix(args.headingWeight)}\`} style={{
          fontFamily: \`var(\${args.fontFamily})\`
        }}>
              Heading {level}
            </div>
            <div class="body-5-sb">{\`.heading-\${level}\${getWeightSuffix(args.headingWeight)}\`}</div>
          </div>)}
      </div>

      <div class="body-classes">
        {Array.from({
        length: bodyLevels
      }, (_, i) => i + 1).map(level => <div class="typography-group">
            <div class={\`body-\${level}\${getWeightSuffix(args.fontWeight)}\`} style={{
          fontFamily: \`var(\${args.fontFamily})\`
        }}>
              Body {level}
            </div>
            <div class="body-5-sb">{\`.body-\${level}\${getWeightSuffix(args.fontWeight)}\`}</div>
          </div>)}
      </div>

      <div class="interactive-classes">
        {Array.from({
        length: interactiveLevels
      }, (_, i) => i + 1).map(level => <div class="typography-group">
            <div class={\`interactive-\${level}\${getWeightSuffix(args.fontWeight)}\`} style={{
          fontFamily: \`var(\${args.fontFamily})\`
        }}>
              Interactive {level}
            </div>
            <div class="body-5-sb">{\`.interactive-\${level}\${getWeightSuffix(args.fontWeight)}\`}</div>
          </div>)}
      </div>

      <div class="helper-classes">
        <div class="typography-group">
          <div class={\`helper\${getWeightSuffix(args.fontWeight)}\`} style={{
          fontFamily: \`var(\${args.fontFamily})\`
        }}>
            Helper
          </div>
          <div class="body-5-sb">{\`.helper\${getWeightSuffix(args.fontWeight)}\`}</div>
        </div>
      </div>
    </div>
} satisfies StoryObj<TypographyClassesArgs>`,...m.parameters?.docs?.source},description:{story:'`.heading-1` and `.heading-2` classes automatically scale in size starting from desktop viewport.\nTypography classes (except for `helper`) can also be used with a viewport prefix (`mobile`, `tablet`, `desktop`, `wide`)\nto apply the styles only on specific viewport sizes.\nFor example:\n\n```html\n<p class="mobile-body-3 tablet-body-2 body-1">Lorem ipsum...</p>\n```\n\nwill apply the `body-3` style on mobile, `body-2` on tablet, and `body-1` on desktop and wide viewports.\n\nSection titles are also available as CSS custom properties:\nthose properties are meant to be used with the "font" shorthand property. For example:\n\n```css\nh4 {\n font: var(--section-title-4);\n}\n```',...m.parameters?.docs?.description}}},h=[`TypeScale`,`TypographyClasses`]}))();export{p as TypeScale,m as TypographyClasses,h as __namedExportsOrder,i as default};