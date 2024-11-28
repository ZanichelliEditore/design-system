import {StoryObj} from "@storybook/web-components";
import {html} from "lit";
import "../../src/components/z-section-title/index";
import {getPalettes, getThemesColorTokens, getThemeTokenValue} from "../../src/utils/storybook-utils";
import "./index.stories.css";

export default {
  title: "Colors",
  argTypes: {
    theme: {
      control: {
        type: "inline-radio",
      },
      options: ["theme-default", "theme-black-yellow", "theme-dark", "theme-red"],
    },
  },
  args: {
    theme: "theme-default",
  },
  parameters: {
    layout: "fullscreen",
  },
  tags: ["!autodocs"],
};

export const Themes = {
  render: (args) => html`
    <div class="colors-story themes ${args.theme}">
      <p>
        Currently available color themes: <strong>default</strong>, <strong>black-yellow</strong>, <strong>dark</strong>
      </p>
      <p>On this page you can see the value of the color tokens for each theme, by switching it from the controls.</p>
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
                      ${getThemeTokenValue(args.theme, token) ??
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
