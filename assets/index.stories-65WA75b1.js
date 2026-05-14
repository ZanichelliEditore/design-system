import{n as e}from"./chunk-DnJy8xQt.js";import{X as t,tt as n}from"./iframe-DCi19jo_.js";import{a as r,i,o as a}from"./storybook-utils-B8oonaCr.js";var o=e((()=>{})),s,c,l,u,d;e((()=>{t(),a(),o(),s={title:`Colors`,parameters:{layout:`fullscreen`,docs:{codePanel:!1},controls:{disable:!0}},tags:[`!autodocs`]},c={render:(e,t)=>{let[i,a]=t.parameters.themes[t.globals.theme||`Default`].split(` `),o=r(i,a),s=r(`theme-default`);return n(`div`,{class:`colors-story themes`},n(`p`,null,`The currently available color themes are: `,n(`strong`,null,`default`),`, `,n(`strong`,null,`black`),`,`,` `,n(`strong`,null,`black-red`),`,`,n(`strong`,null,`black-yellow`),`, `,n(`strong`,null,`dark`),`, and `,n(`strong`,null,`red`),`.`),n(`p`,null,`Each theme has a CSS class that can be used to style any HTML element. Each class name uses the "theme-" prefix followed by the theme name ("theme-default", "theme-red", ...). Theme variants such as "black-red" or "black-yellow" can be applied to the related main theme by using both classes (variant class names follow the same format as the main theme, plus a double dash and the variant name, such as "theme-black--red"):`),n(`code`,null,`<div class="theme-black theme-black--red">`),n(`p`,null,`On this page, you can see the values of the color tokens for each theme. Switch themes using the list in the toolbar.`),n(`p`,{class:`interactive-1`},`Note: the tokens marked with "`,n(`span`,{class:`reference`},`*`),`" are inherited from the default theme.`),n(`div`,{class:`tokens-container`},n(`div`,{class:`title section-title-4`},`Color tokens`),n(`ul`,null,Object.keys(o).map(e=>n(`li`,null,n(`span`,{class:`token-name`},e),n(`div`,{class:`color`},n(`div`,{class:`color-box`,style:{backgroundColor:`var(${e})`}}),n(`div`,null,n(`span`,{class:`interactive-2`},o[e]),n(`span`,{class:`interactive-3`},`(`,getComputedStyle(document.documentElement).getPropertyValue(e),`)`))))),Object.keys(s).map(e=>o[e]?``:n(`li`,null,n(`span`,{class:`token-name inherited`},e,n(`span`,{class:`reference`},`*`)),n(`div`,{class:`color`},n(`div`,{class:`color-box`,style:{backgroundColor:`var(${e})`}}),n(`div`,null,n(`span`,{class:`interactive-2`},s[e]),n(`span`,{class:`interactive-3`},`(`,getComputedStyle(document.documentElement).getPropertyValue(e),`)`))))))))}},l=i(),u={render:()=>n(`div`,{class:`colors-story palettes`},Object.keys(l).map(e=>n(`div`,{class:`tokens-container`},n(`div`,{class:`title section-title-4`},e),n(`ul`,null,l[e].map(e=>n(`li`,null,n(`span`,{class:`token-name`},e),n(`div`,{class:`color`},n(`div`,{class:`color-box`,style:{backgroundColor:`var(${e})`}}),n(`div`,{class:`interactive-2`},getComputedStyle(document.documentElement).getPropertyValue(e)))))))))},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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