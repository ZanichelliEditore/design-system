import {StoryObj} from "@storybook/web-components";
import {html} from "lit";
import "../../src/components/deprecated/z-section-title/index";
import {getPalettes, getThemeColorTokens} from "../../src/utils/storybook-utils";
import "./index.stories.css";

export default {
  title: "Colors",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["!autodocs"],
};

export const Themes = {
  render: (_, context) => {
    const [currentTheme, currentThemeVariant] =
      context.parameters.themes[context.globals.theme || "Default"].split(" ");
    const themeColorTokens = getThemeColorTokens(currentTheme, currentThemeVariant);
    const defaultTheme = getThemeColorTokens("theme-default");

    return html`
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
            ${Object.keys(themeColorTokens).map(
              (token) => html`
                <li>
                  <span class="token-name">${token}</span>
                  <div class="color">
                    <div
                      class="color-box"
                      style="background-color: var(${token})"
                    ></div>
                    <div>
                      <span class="interactive-2">${themeColorTokens[token]}</span>
                      <span class="interactive-3"
                        >(${getComputedStyle(document.documentElement).getPropertyValue(token)})</span
                      >
                    </div>
                  </div>
                </li>
              `
            )}
            ${Object.keys(defaultTheme).map((token) =>
              !themeColorTokens[token]
                ? html`
                    <li>
                      <span class="token-name inherited">${token}<span class="reference">*</span></span>
                      <div class="color">
                        <div
                          class="color-box"
                          style="background-color: var(${token})"
                        ></div>
                        <div>
                          <span class="interactive-2">${defaultTheme[token]}</span>
                          <span class="interactive-3"
                            >(${getComputedStyle(document.documentElement).getPropertyValue(token)})</span
                          >
                        </div>
                      </div>
                    </li>
                  `
                : ""
            )}
          </ul>
        </div>
      </div>
    `;
  },
} satisfies StoryObj;

const palettes = getPalettes();

export const Palettes = {
  render: () => html`
    <div class="colors-story palettes">
      ${Object.keys(palettes).map(
        (paletteName) =>
          html`<div class="tokens-container">
            <div class="title section-title-4">${paletteName}</div>
            <ul>
              ${palettes[paletteName].map(
                (token) => html`
                  <li>
                    <span class="token-name">${token}</span>
                    <div class="color">
                      <div
                        class="color-box"
                        style="background-color: var(${token})"
                      ></div>
                      <div class="interactive-2">
                        ${getComputedStyle(document.documentElement).getPropertyValue(token)}
                      </div>
                    </div>
                  </li>
                `
              )}
            </ul>
          </div>`
      )}
    </div>
  `,
} satisfies StoryObj;
