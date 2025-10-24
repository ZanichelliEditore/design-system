import"./lit-element--ufgQf_M.js";import{x as n}from"./lit-html-rc9TYZL2.js";import"./index-Bawz-1SL.js";import{b as c,c as b}from"./storybook-utils-DX4XXC0w.js";import"./index-DZJXLXgx.js";import"./chunk-L4EGOTBX-BzYVsoCE.js";import"./entry-preview-uRqU0LK7.js";import"./index-DrFu-skq.js";import"./index-BZ0rSFNp.js";import"./index-BBy8evlc.js";const V={title:"Colors",parameters:{layout:"fullscreen"},tags:["!autodocs"]},s={render:(o,t)=>{const[k,g]=t.parameters.themes[t.globals.theme||"Default"].split(" "),l=c(k,g),r=c("theme-default");return n`
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
        <code>${'<div class="theme-black theme-black--red">'}</code>
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
            ${Object.keys(l).map(e=>n`
                <li>
                  <span class="token-name">${e}</span>
                  <div class="color">
                    <div
                      class="color-box"
                      style="background-color: var(${e})"
                    ></div>
                    <div>
                      <span class="interactive-2">${l[e]}</span>
                      <span class="interactive-3"
                        >(${getComputedStyle(document.documentElement).getPropertyValue(e)})</span
                      >
                    </div>
                  </div>
                </li>
              `)}
            ${Object.keys(r).map(e=>l[e]?"":n`
                    <li>
                      <span class="token-name inherited">${e}<span class="reference">*</span></span>
                      <div class="color">
                        <div
                          class="color-box"
                          style="background-color: var(${e})"
                        ></div>
                        <div>
                          <span class="interactive-2">${r[e]}</span>
                          <span class="interactive-3"
                            >(${getComputedStyle(document.documentElement).getPropertyValue(e)})</span
                          >
                        </div>
                      </div>
                    </li>
                  `)}
          </ul>
        </div>
      </div>
    `}},i=b(),a={render:()=>n`
    <div class="colors-story palettes">
      ${Object.keys(i).map(o=>n`<div class="tokens-container">
            <div class="title section-title-4">${o}</div>
            <ul>
              ${i[o].map(t=>n`
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
  `};var m,d,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
            \${Object.keys(themeColorTokens).map(token => html\`
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
            \${Object.keys(defaultTheme).map(token => !themeColorTokens[token] ? html\`
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
} satisfies StoryObj`,...(h=(d=s.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var p,v,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <div class="colors-story palettes">
      \${Object.keys(palettes).map(paletteName => html\`<div class="tokens-container">
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
} satisfies StoryObj`,...(u=(v=a.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};const j=["Themes","Palettes"];export{a as Palettes,s as Themes,j as __namedExportsOrder,V as default};
