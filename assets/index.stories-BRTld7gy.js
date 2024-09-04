import{x as o}from"./lit-element-DGXdXVoE.js";import"./index-DyfrrTOO.js";import{b as p,c as v,d as u}from"./storybook-utils-DAVCxM-F.js";import"./index-DTfIIv0H.js";import"./chunk-GKNNPQCW-BkHQSocK.js";import"./index-8h8udRzn.js";import"./index-DwFITWZA.js";const C={title:"Colors",argTypes:{theme:{control:{type:"inline-radio"},options:["theme-default","theme-black-yellow","theme-dark"]}},args:{theme:"theme-default"},parameters:{layout:"fullscreen"},tags:["!autodocs"]},s={render:t=>o`
    <div class="colors-story themes ${t.theme}">
      <p>
        Currently available color themes: <strong>default</strong>, <strong>black-yellow</strong>, <strong>dark</strong>
      </p>
      <p>On this page you can see the value of the color tokens for each theme, by switching it from the controls.</p>
      <div class="tokens-container">
        <z-section-title divider-position="after">
          <div slot="primary-title">Color tokens</div>
        </z-section-title>
        <ul>
          ${p().sort().map(e=>o`
                <li>
                  <span class="token-name">${e}</span>
                  <div class="color">
                    <div
                      class="color-box"
                      style="background-color: var(${e})"
                    ></div>
                    <div class="interactive-2">
                      ${v(t.theme,e)??getComputedStyle(document.documentElement).getPropertyValue(e)}
                    </div>
                  </div>
                </li>
              `)}
        </ul>
      </div>
    </div>
  `},r=u(),n={render:()=>o`
    <div class="colors-story palettes">
      ${Object.keys(r).map(t=>o`<div class="tokens-container">
            <z-section-title
              divider-position="after"
              style="--z-section-title--divider-color: var(${r[t].find(e=>e.includes("500"))})"
            >
              <div slot="primary-title">${t}</div>
            </z-section-title>
            <ul>
              ${r[t].map(e=>o`
                  <li>
                    <span class="token-name">${e}</span>
                    <div class="color">
                      <div
                        class="color-box"
                        style="background-color: var(${e})"
                      ></div>
                      <div class="interactive-2">
                        ${getComputedStyle(document.documentElement).getPropertyValue(e)}
                      </div>
                    </div>
                  </li>
                `)}
            </ul>
          </div>`)}
    </div>
  `};var l,i,a;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => html\`
    <div class="colors-story themes \${args.theme}">
      <p>
        Currently available color themes: <strong>default</strong>, <strong>black-yellow</strong>, <strong>dark</strong>
      </p>
      <p>On this page you can see the value of the color tokens for each theme, by switching it from the controls.</p>
      <div class="tokens-container">
        <z-section-title divider-position="after">
          <div slot="primary-title">Color tokens</div>
        </z-section-title>
        <ul>
          \${getThemesColorTokens().sort().map(token => html\`
                <li>
                  <span class="token-name">\${token}</span>
                  <div class="color">
                    <div
                      class="color-box"
                      style="background-color: var(\${token})"
                    ></div>
                    <div class="interactive-2">
                      \${getThemeTokenValue(args.theme, token) ?? getComputedStyle(document.documentElement).getPropertyValue(token)}
                    </div>
                  </div>
                </li>
              \`)}
        </ul>
      </div>
    </div>
  \`
} satisfies StoryObj`,...(a=(i=s.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var c,d,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`
    <div class="colors-story palettes">
      \${Object.keys(palettes).map(paletteName => html\`<div class="tokens-container">
            <z-section-title
              divider-position="after"
              style="--z-section-title--divider-color: var(\${palettes[paletteName].find(token => token.includes("500"))})"
            >
              <div slot="primary-title">\${paletteName}</div>
            </z-section-title>
            <ul>
              \${palettes[paletteName].map(token => html\`
                  <li>
                    <span class="token-name">\${token}</span>
                    <div class="color">
                      <div
                        class="color-box"
                        style="background-color: var(\${token})"
                      ></div>
                      <div class="interactive-2">
                        \${getComputedStyle(document.documentElement).getPropertyValue(token)}
                      </div>
                    </div>
                  </li>
                \`)}
            </ul>
          </div>\`)}
    </div>
  \`
} satisfies StoryObj`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const T=["Themes","Palettes"];export{n as Palettes,s as Themes,T as __namedExportsOrder,C as default};
