import {StoryObj} from "@storybook/web-components";
import {html} from "lit";
import "../../src/components/z-section-title/index";
import {getPalettes, getThemesColorTokens, getThemeTokenValue} from "../../src/utils/storybook-utils";
import "./index.stories.css";

export default {
  title: "Colors",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["!autodocs"],
};

export const Themes = {
  render: (_, context) => html`
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
          ${getThemesColorTokens()
            .sort()
            .map(
              (token) => html`
                <li>
                  <span class="token-name">${token}</span>
                  <div class="color">
                    <div
                      class="color-box"
                      style="background-color: var(${token})"
                    ></div>
                    <div class="interactive-2">
                      ${getThemeTokenValue(`theme-${context.globals.theme.toLowerCase()}`, token) ??
                      getComputedStyle(document.documentElement).getPropertyValue(token)}
                    </div>
                  </div>
                </li>
              `
            )}
        </ul>
      </div>
    </div>
  `,
} satisfies StoryObj;

const palettes = getPalettes();

export const Palettes = {
  render: () => html`
    <div class="colors-story palettes">
      ${Object.keys(palettes).map(
        (paletteName) =>
          html`<div class="tokens-container">
            <z-section-title
              divider-position="after"
              style="--z-section-title--divider-color: var(${palettes[paletteName].find((token) =>
                token.includes("500")
              )})"
            >
              <div slot="primary-title">${paletteName}</div>
            </z-section-title>
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
