import{n as e}from"./chunk-DnJy8xQt.js";import{gt as t,ut as n}from"./iframe-CzRu_Q6e.js";import{a as r,i,o as a}from"./storybook-utils-BCDbkA4t.js";var o=e((()=>{})),s,c,l,u,d;e((()=>{n(),a(),o(),s={title:`Colors`,parameters:{layout:`fullscreen`,docs:{codePanel:!1},controls:{disable:!0}},tags:[`!autodocs`]},c={render:(e,n)=>{let[i,a]=n.parameters.themes[n.globals.theme||`Default`].split(` `),o=r(i,a),s=r(`theme-default`);return t(`div`,{class:`colors-story themes`},t(`p`,null,`The currently available color themes are: `,t(`strong`,null,`default`),`, `,t(`strong`,null,`black`),`,`,` `,t(`strong`,null,`black-red`),`,`,t(`strong`,null,`black-yellow`),`, `,t(`strong`,null,`dark`),`, and `,t(`strong`,null,`red`),`.`),t(`p`,null,`Each theme has a CSS class that can be used to style any HTML element. Each class name uses the "theme-" prefix followed by the theme name ("theme-default", "theme-red", ...). Theme variants such as "black-red" or "black-yellow" can be applied to the related main theme by using both classes (variant class names follow the same format as the main theme, plus a double dash and the variant name, such as "theme-black--red"):`),t(`code`,null,`<div class="theme-black theme-black--red">`),t(`p`,null,`On this page, you can see the values of the color tokens for each theme. Switch themes using the list in the toolbar.`),t(`p`,{class:`interactive-1`},`Note: the tokens marked with "`,t(`span`,{class:`reference`},`*`),`" are inherited from the default theme.`),t(`div`,{class:`tokens-container`},t(`div`,{class:`title section-title-4`},`Color tokens`),t(`ul`,null,Object.keys(o).map(e=>t(`li`,null,t(`span`,{class:`token-name`},e),t(`div`,{class:`color`},t(`div`,{class:`color-box`,style:{backgroundColor:`var(${e})`}}),t(`div`,null,t(`span`,{class:`interactive-2`},o[e]),t(`span`,{class:`interactive-3`},`(`,getComputedStyle(document.documentElement).getPropertyValue(e),`)`))))),Object.keys(s).map(e=>o[e]?``:t(`li`,null,t(`span`,{class:`token-name inherited`},e,t(`span`,{class:`reference`},`*`)),t(`div`,{class:`color`},t(`div`,{class:`color-box`,style:{backgroundColor:`var(${e})`}}),t(`div`,null,t(`span`,{class:`interactive-2`},s[e]),t(`span`,{class:`interactive-3`},`(`,getComputedStyle(document.documentElement).getPropertyValue(e),`)`))))))))}},l=i(),u={render:()=>t(`div`,{class:`colors-story palettes`},Object.keys(l).map(e=>t(`div`,{class:`tokens-container`},t(`div`,{class:`title section-title-4`},e),t(`ul`,null,l[e].map(e=>t(`li`,null,t(`span`,{class:`token-name`},e),t(`div`,{class:`color`},t(`div`,{class:`color-box`,style:{backgroundColor:`var(${e})`}}),t(`div`,{class:`interactive-2`},getComputedStyle(document.documentElement).getPropertyValue(e)))))))))},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (_, context) => {
    const [currentTheme, currentThemeVariant] = context.parameters.themes[context.globals.theme || "Default"].split(" ");
    const themeColorTokens = getThemeColorTokens(currentTheme, currentThemeVariant);
    const defaultTheme = getThemeColorTokens("theme-default");
    return <div class="colors-story themes">
        <p>
          The currently available color themes are: <strong>default</strong>, <strong>black</strong>,{" "}
          <strong>black-red</strong>,<strong>black-yellow</strong>, <strong>dark</strong>, and <strong>red</strong>.
        </p>
        <p>
          Each theme has a CSS class that can be used to style any HTML element. Each class name uses the "theme-"
          prefix followed by the theme name ("theme-default", "theme-red", ...). Theme variants such as "black-red" or
          "black-yellow" can be applied to the related main theme by using both classes (variant class names follow the
          same format as the main theme, plus a double dash and the variant name, such as "theme-black--red"):
        </p>
        <code>{'<div class="theme-black theme-black--red">'}</code>
        <p>
          On this page, you can see the values of the color tokens for each theme. Switch themes using the list in the
          toolbar.
        </p>
        <p class="interactive-1">
          Note: the tokens marked with "<span class="reference">*</span>" are inherited from the default theme.
        </p>
        <div class="tokens-container">
          <div class="title section-title-4">Color tokens</div>
          <ul>
            {(Object.keys(themeColorTokens) as \`--\${string}\`[]).map(token => <li>
                <span class="token-name">{token}</span>
                <div class="color">
                  <div class="color-box" style={{
                backgroundColor: \`var(\${token})\`
              }}></div>
                  <div>
                    <span class="interactive-2">{themeColorTokens[token]}</span>
                    <span class="interactive-3">
                      ({getComputedStyle(document.documentElement).getPropertyValue(token)})
                    </span>
                  </div>
                </div>
              </li>)}
            {(Object.keys(defaultTheme) as \`--\${string}\`[]).map(token => !themeColorTokens[token] ? <li>
                  <span class="token-name inherited">
                    {token}
                    <span class="reference">*</span>
                  </span>
                  <div class="color">
                    <div class="color-box" style={{
                backgroundColor: \`var(\${token})\`
              }}></div>
                    <div>
                      <span class="interactive-2">{defaultTheme[token]}</span>
                      <span class="interactive-3">
                        ({getComputedStyle(document.documentElement).getPropertyValue(token)})
                      </span>
                    </div>
                  </div>
                </li> : "")}
          </ul>
        </div>
      </div>;
  }
}`,...c.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div class="colors-story palettes">
      {(Object.keys(palettes) as (keyof typeof palettes)[]).map(paletteName => <div class="tokens-container">
          <div class="title section-title-4">{paletteName}</div>
          <ul>
            {palettes[paletteName].map(token => <li>
                <span class="token-name">{token}</span>
                <div class="color">
                  <div class="color-box" style={{
              backgroundColor: \`var(\${token})\`
            }}></div>
                  <div class="interactive-2">{getComputedStyle(document.documentElement).getPropertyValue(token)}</div>
                </div>
              </li>)}
          </ul>
        </div>)}
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Themes`,`Palettes`]}))();export{u as Palettes,c as Themes,d as __namedExportsOrder,s as default};