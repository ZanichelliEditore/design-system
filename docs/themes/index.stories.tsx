import {h} from "@stencil/core";
import {getPalettes, getThemeColorTokens} from "../../src/utils/storybook-utils";
import "./index.stories.css";

export default {
  title: "Colors",
  parameters: {
    layout: "fullscreen",
    docs: {
      codePanel: false,
    },
    controls: {
      disable: true,
    },
  },
  tags: ["!autodocs"],
};

export const Themes = {
  render: (_, context) => {
    const [currentTheme, currentThemeVariant] =
      context.parameters.themes[context.globals.theme || "Default"].split(" ");
    const themeColorTokens = getThemeColorTokens(currentTheme, currentThemeVariant);
    const defaultTheme = getThemeColorTokens("theme-default");

    return (
      <div class="colors-story themes">
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
            {(Object.keys(themeColorTokens) as `--${string}`[]).map((token) => (
              <li>
                <span class="token-name">{token}</span>
                <div class="color">
                  <div
                    class="color-box"
                    style={{backgroundColor: `var(${token})`}}
                  ></div>
                  <div>
                    <span class="interactive-2">{themeColorTokens[token]}</span>
                    <span class="interactive-3">
                      ({getComputedStyle(document.documentElement).getPropertyValue(token)})
                    </span>
                  </div>
                </div>
              </li>
            ))}
            {(Object.keys(defaultTheme) as `--${string}`[]).map((token) =>
              !themeColorTokens[token] ? (
                <li>
                  <span class="token-name inherited">
                    {token}
                    <span class="reference">*</span>
                  </span>
                  <div class="color">
                    <div
                      class="color-box"
                      style={{backgroundColor: `var(${token})`}}
                    ></div>
                    <div>
                      <span class="interactive-2">{defaultTheme[token]}</span>
                      <span class="interactive-3">
                        ({getComputedStyle(document.documentElement).getPropertyValue(token)})
                      </span>
                    </div>
                  </div>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
      </div>
    );
  },
};

const palettes = getPalettes();

export const Palettes = {
  render: () => (
    <div class="colors-story palettes">
      {(Object.keys(palettes) as (keyof typeof palettes)[]).map((paletteName) => (
        <div class="tokens-container">
          <div class="title section-title-4">{paletteName}</div>
          <ul>
            {palettes[paletteName].map((token) => (
              <li>
                <span class="token-name">{token}</span>
                <div class="color">
                  <div
                    class="color-box"
                    style={{backgroundColor: `var(${token})`}}
                  ></div>
                  <div class="interactive-2">{getComputedStyle(document.documentElement).getPropertyValue(token)}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  ),
};
