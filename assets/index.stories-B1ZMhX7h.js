import{r as e}from"./lit-CgIPLKVa.js";import"./z-section-title-DTh_jVSn.js";import{i as t,r as n}from"./storybook-utils-DtpJwcUL.js";var r={title:`Colors`,parameters:{layout:`fullscreen`},tags:[`!autodocs`]},i={render:(n,r)=>{let[i,a]=r.parameters.themes[r.globals.theme||`Default`].split(` `),o=t(i,a),s=t(`theme-default`);return e`
      <div class="colors-story themes">
        <p>
          Currently available color themes: <strong>default</strong>, <strong>black</strong>,
          <strong>black-red</strong>, <strong>black-yellow</strong>, <strong>dark</strong>, and <strong>red</strong>.
        </p>
        <p>
          Each theme has a CSS class that can be used to theme any html element and each class name is the "theme-"
          prefix + the theme's name ("theme-default", "theme-red", ...). Themes variants like "black-red" or
          "black-yellow" can be applied to the related main theme by using both classes (variant class names have te
          same form of main themes plus a double dash and the variant name, like "theme-black--red"):
        </p>
        <code>${`<div class="theme-black theme-black--red">`}</code>
        <p>
          On this page you can see the value of the color tokens for each theme. Switch the theme from the list in the
          toolbar.
        </p>
        <p class="interactive-1">
          Note: the tokens marked with "<span class="reference">*</span>" are inherited from the default theme.
        </p>
        <div class="tokens-container">
          <div class="title section-title-4">Color tokens</div>
          <ul>
            ${Object.keys(o).map(t=>e`
                <li>
                  <span class="token-name">${t}</span>
                  <div class="color">
                    <div
                      class="color-box"
                      style="background-color: var(${t})"
                    ></div>
                    <div>
                      <span class="interactive-2">${o[t]}</span>
                      <span class="interactive-3"
                        >(${getComputedStyle(document.documentElement).getPropertyValue(t)})</span
                      >
                    </div>
                  </div>
                </li>
              `)}
            ${Object.keys(s).map(t=>o[t]?``:e`
                    <li>
                      <span class="token-name inherited">${t}<span class="reference">*</span></span>
                      <div class="color">
                        <div
                          class="color-box"
                          style="background-color: var(${t})"
                        ></div>
                        <div>
                          <span class="interactive-2">${s[t]}</span>
                          <span class="interactive-3"
                            >(${getComputedStyle(document.documentElement).getPropertyValue(t)})</span
                          >
                        </div>
                      </div>
                    </li>
                  `)}
          </ul>
        </div>
      </div>
    `}},a=n(),o={render:()=>e`
    <div class="colors-story palettes">
      ${Object.keys(a).map(t=>e`<div class="tokens-container">
            <div class="title section-title-4">${t}</div>
            <ul>
              ${a[t].map(t=>e`
                  <li>
                    <span class="token-name">${t}</span>
                    <div class="color">
                      <div
                        class="color-box"
                        style="background-color: var(${t})"
                      ></div>
                      <div class="interactive-2">
                        ${getComputedStyle(document.documentElement).getPropertyValue(t)}
                      </div>
                    </div>
                  </li>
                `)}
            </ul>
          </div>`)}
    </div>
  `};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (_, context) => {
    const [currentTheme, currentThemeVariant] = context.parameters.themes[context.globals.theme || "Default"].split(" ");
    const themeColorTokens = getThemeColorTokens(currentTheme, currentThemeVariant);
    const defaultTheme = getThemeColorTokens("theme-default");
    return html\`
      <div class="colors-story themes">
        <p>
          Currently available color themes: <strong>default</strong>, <strong>black</strong>,
          <strong>black-red</strong>, <strong>black-yellow</strong>, <strong>dark</strong>, and <strong>red</strong>.
        </p>
        <p>
          Each theme has a CSS class that can be used to theme any html element and each class name is the "theme-"
          prefix + the theme's name ("theme-default", "theme-red", ...). Themes variants like "black-red" or
          "black-yellow" can be applied to the related main theme by using both classes (variant class names have te
          same form of main themes plus a double dash and the variant name, like "theme-black--red"):
        </p>
        <code>\${'<div class="theme-black theme-black--red">'}</code>
        <p>
          On this page you can see the value of the color tokens for each theme. Switch the theme from the list in the
          toolbar.
        </p>
        <p class="interactive-1">
          Note: the tokens marked with "<span class="reference">*</span>" are inherited from the default theme.
        </p>
        <div class="tokens-container">
          <div class="title section-title-4">Color tokens</div>
          <ul>
            \${(Object.keys(themeColorTokens) as \`--\${string}\`[]).map(token => html\`
                <li>
                  <span class="token-name">\${token}</span>
                  <div class="color">
                    <div
                      class="color-box"
                      style="background-color: var(\${token})"
                    ></div>
                    <div>
                      <span class="interactive-2">\${themeColorTokens[token]}</span>
                      <span class="interactive-3"
                        >(\${getComputedStyle(document.documentElement).getPropertyValue(token)})</span
                      >
                    </div>
                  </div>
                </li>
              \`)}
            \${(Object.keys(defaultTheme) as \`--\${string}\`[]).map(token => !themeColorTokens[token] ? html\`
                    <li>
                      <span class="token-name inherited">\${token}<span class="reference">*</span></span>
                      <div class="color">
                        <div
                          class="color-box"
                          style="background-color: var(\${token})"
                        ></div>
                        <div>
                          <span class="interactive-2">\${defaultTheme[token]}</span>
                          <span class="interactive-3"
                            >(\${getComputedStyle(document.documentElement).getPropertyValue(token)})</span
                          >
                        </div>
                      </div>
                    </li>
                  \` : "")}
          </ul>
        </div>
      </div>
    \`;
  }
} satisfies StoryObj`,...i.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div class="colors-story palettes">
      \${(Object.keys(palettes) as (keyof typeof palettes)[]).map(paletteName => html\`<div class="tokens-container">
            <div class="title section-title-4">\${paletteName}</div>
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
} satisfies StoryObj`,...o.parameters?.docs?.source}}};var s=[`Themes`,`Palettes`];export{o as Palettes,i as Themes,s as __namedExportsOrder,r as default};