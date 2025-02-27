import{x as t}from"./lit-element-DGXdXVoE.js";import"./index-Ciq9834O.js";import{b as v,c as u,d as g}from"./storybook-utils-DAVCxM-F.js";import"./index-Ds2hsy7f.js";import"./chunk-L4EGOTBX-lo-pZyle.js";import"./entry-preview-Cx7Tr7Nx.js";import"./index-DrFu-skq.js";import"./index-BZ0rSFNp.js";import"./index-Dm3VcLdc.js";const S={title:"Colors",parameters:{layout:"fullscreen"},tags:["!autodocs"]},n={render:(o,e)=>t`
    <div class="colors-story themes">
      <p>
        Currently available color themes: <strong>default</strong>, <strong>black-yellow</strong>,
        <strong>dark</strong>, and <strong>red</strong>
      </p>
      <p>
        On this page you can see the value of the color tokens for each theme. Switch the theme from the list in the
        toolbar.
      </p>
      <div class="tokens-container">
        <z-section-title divider-position="after">
          <div slot="primary-title">Color tokens</div>
        </z-section-title>
        <ul>
          ${v().sort().map(s=>t`
                <li>
                  <span class="token-name">${s}</span>
                  <div class="color">
                    <div
                      class="color-box"
                      style="background-color: var(${s})"
                    ></div>
                    <div class="interactive-2">
                      ${u(`theme-${e.globals.theme.toLowerCase()}`,s)??getComputedStyle(document.documentElement).getPropertyValue(s)}
                    </div>
                  </div>
                </li>
              `)}
        </ul>
      </div>
    </div>
  `},l=g(),r={render:()=>t`
    <div class="colors-story palettes">
      ${Object.keys(l).map(o=>t`<div class="tokens-container">
            <z-section-title
              divider-position="after"
              style="--z-section-title--divider-color: var(${l[o].find(e=>e.includes("500"))})"
            >
              <div slot="primary-title">${o}</div>
            </z-section-title>
            <ul>
              ${l[o].map(e=>t`
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
  `};var i,a,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (_, context) => html\`
    <div class="colors-story themes">
      <p>
        Currently available color themes: <strong>default</strong>, <strong>black-yellow</strong>,
        <strong>dark</strong>, and <strong>red</strong>
      </p>
      <p>
        On this page you can see the value of the color tokens for each theme. Switch the theme from the list in the
        toolbar.
      </p>
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
                      \${getThemeTokenValue(\`theme-\${context.globals.theme.toLowerCase()}\`, token) ?? getComputedStyle(document.documentElement).getPropertyValue(token)}
                    </div>
                  </div>
                </li>
              \`)}
        </ul>
      </div>
    </div>
  \`
} satisfies StoryObj`,...(c=(a=n.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
} satisfies StoryObj`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const T=["Themes","Palettes"];export{r as Palettes,n as Themes,T as __namedExportsOrder,S as default};
