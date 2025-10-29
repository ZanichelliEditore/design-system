import{x as i}from"./lit-element-DGXdXVoE.js";const S={title:"Typography",argTypes:{fontFamily:{options:["--font-family-sans","--font-family-serif"],control:{type:"inline-radio"}}},args:{fontFamily:"--font-family-sans"},parameters:{docs:{description:{component:`The typographic styles are based on the \`IBM Plex\` font family.
Some CSS classes and props are provided to apply the typographic styles:
- a set of CSS custom props for font sizes and font weights
- a set of classes for headings, body text, and interactive text
- a set of classes and CSS custom props for section titles`}}}},v="The quick brown fox jumps over the lazy dog",h=["--font-size-1","--font-size-2","--font-size-3","--font-size-4","--font-size-5","--font-size-6","--font-size-7","--font-size-8","--font-size-9","--font-size-10","--font-size-11","--font-size-12","--font-size-13","--font-size-14","--font-size-15","--font-size-16","--font-size-17"],a={parameters:{docs:{story:{inline:!1,height:"300px"}}},argTypes:{fontWeight:{options:["--font-lt","--font-rg","--font-sb","--font-bd"],control:{type:"inline-radio"}}},args:{fontWeight:"--font-rg"},render:t=>i`<div class="type-scale">
      ${h.map(e=>i`
          <span class="body-5-sb">${e}</span>
          <span class="body-5"
            >${parseFloat(getComputedStyle(document.documentElement).getPropertyValue(e))*parseFloat(getComputedStyle(document.documentElement).getPropertyValue("font-size"))}px</span
          >
          <span
            class="sample-text"
            style="font-size: var(${e}); font-family: var(${t.fontFamily}); font-weight: var(${t.fontWeight})"
            >${v}</span
          >
        `)}
    </div>`},m=4,b=5,$=3,u=6,n=t=>t?`-${t}`:"",o={argTypes:{headingWeight:{options:["lt",null,"sb"],control:{type:"inline-radio",labels:{lt:"Light",null:"Regular",sb:"Semibold"}}},fontWeight:{options:[null,"sb"],control:{type:"inline-radio",labels:{null:"Regular",sb:"Semibold"}}}},args:{headingWeight:null,fontWeight:null},render:t=>i`<div class="typography-classes">
      <div class="section-title-classes">
        ${Array.from({length:u},(e,s)=>s+1).map(e=>i`<div class="typography-group">
              <div class="section-title-${e}">Section title ${e}</div>
              <div class="body-5-sb">.section-title-${e} / --section-title-${e}</div>
            </div>`)}
      </div>
      <div class="heading-classes">
        ${Array.from({length:m},(e,s)=>s+1).map(e=>i`
            <div class="typography-group">
              <div
                class="heading-${e}${n(t.headingWeight)}"
                style="font-family: var(${t.fontFamily})"
              >
                Heading ${e}
              </div>
              <div class="body-5-sb">.heading-${e}${n(t.headingWeight)}</div>
            </div>
          `)}
      </div>
      <div class="body-classes">
        ${Array.from({length:b},(e,s)=>s+1).map(e=>i`
            <div class="typography-group">
              <div
                class="body-${e}${n(t.fontWeight)}"
                style="font-family: var(${t.fontFamily})"
              >
                Body ${e}
              </div>
              <div class="body-5-sb">.body-${e}${n(t.fontWeight)}</div>
            </div>
          `)}
      </div>
      <div class="interactive-classes">
        ${Array.from({length:$},(e,s)=>s+1).map(e=>i`<div class="typography-group">
              <div
                class="interactive-${e}${n(t.fontWeight)}"
                style="font-family: var(${t.fontFamily})"
              >
                Interactive ${e}
              </div>
              <div class="body-5-sb">.interactive-${e}${n(t.fontWeight)}</div>
            </div>`)}
      </div>
      <div class="helper-classes">
        <div class="typography-group">
          <div
            class="helper${n(t.fontWeight)}"
            style="font-family: var(${t.fontFamily})"
          >
            Helper
          </div>
          <div class="body-5-sb">.helper${n(t.fontWeight)}</div>
        </div>
      </div>
    </div> `};var l,r,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        height: "300px"
      }
    }
  },
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
  render: args => html\`<div class="type-scale">
      \${scaleProps.map(prop => html\`
          <span class="body-5-sb">\${prop}</span>
          <span class="body-5"
            >\${parseFloat(getComputedStyle(document.documentElement).getPropertyValue(prop)) * parseFloat(getComputedStyle(document.documentElement).getPropertyValue("font-size"))}px</span
          >
          <span
            class="sample-text"
            style="font-size: var(\${prop}); font-family: var(\${args.fontFamily}); font-weight: var(\${args.fontWeight})"
            >\${sampleText}</span
          >
        \`)}
    </div>\`
} satisfies StoryObj`,...(d=(r=a.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var p,c,y,g,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
  render: args => html\`<div class="typography-classes">
      <div class="section-title-classes">
        \${Array.from({
    length: sectionTitleLevels
  }, (_, i) => i + 1).map(level => html\`<div class="typography-group">
              <div class="section-title-\${level}">Section title \${level}</div>
              <div class="body-5-sb">.section-title-\${level} / --section-title-\${level}</div>
            </div>\`)}
      </div>
      <div class="heading-classes">
        \${Array.from({
    length: headingLevels
  }, (_, i) => i + 1).map(level => html\`
            <div class="typography-group">
              <div
                class="heading-\${level}\${getWeightSuffix(args.headingWeight)}"
                style="font-family: var(\${args.fontFamily})"
              >
                Heading \${level}
              </div>
              <div class="body-5-sb">.heading-\${level}\${getWeightSuffix(args.headingWeight)}</div>
            </div>
          \`)}
      </div>
      <div class="body-classes">
        \${Array.from({
    length: bodyLevels
  }, (_, i) => i + 1).map(level => html\`
            <div class="typography-group">
              <div
                class="body-\${level}\${getWeightSuffix(args.fontWeight)}"
                style="font-family: var(\${args.fontFamily})"
              >
                Body \${level}
              </div>
              <div class="body-5-sb">.body-\${level}\${getWeightSuffix(args.fontWeight)}</div>
            </div>
          \`)}
      </div>
      <div class="interactive-classes">
        \${Array.from({
    length: interactiveLevels
  }, (_, i) => i + 1).map(level => html\`<div class="typography-group">
              <div
                class="interactive-\${level}\${getWeightSuffix(args.fontWeight)}"
                style="font-family: var(\${args.fontFamily})"
              >
                Interactive \${level}
              </div>
              <div class="body-5-sb">.interactive-\${level}\${getWeightSuffix(args.fontWeight)}</div>
            </div>\`)}
      </div>
      <div class="helper-classes">
        <div class="typography-group">
          <div
            class="helper\${getWeightSuffix(args.fontWeight)}"
            style="font-family: var(\${args.fontFamily})"
          >
            Helper
          </div>
          <div class="body-5-sb">.helper\${getWeightSuffix(args.fontWeight)}</div>
        </div>
      </div>
    </div> \`
} satisfies StoryObj`,...(y=(c=o.parameters)==null?void 0:c.docs)==null?void 0:y.source},description:{story:'`.heading-1` and `.heading-2` classes automatically scale in size starting from desktop viewport.\nTypography classes (except for `helper`) can also be used with a viewport prefix (`mobile`, `tablet`, `desktop`, `wide`)\nto apply the styles only on specific viewport sizes.\nFor example:\n\n```\n<p class="mobile-body-3 tablet-body-2 body-1">Lorem ipsum...</p>\n```\n\nwill apply the `body-3` style on mobile, `body-2` on tablet, and `body-1` on desktop and wide viewports.\n\nSection titles are also available as CSS custom properties:\nthose properties are meant to be used with the "font" shorthand property. For example:\n\n```\nh4 {\n font: var(--section-title-4);\n}\n```',...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.description}}};const x=["TypeScale","TypographyClasses"];export{a as TypeScale,o as TypographyClasses,x as __namedExportsOrder,S as default};
