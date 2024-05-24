import {StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {getThemesColorTokens} from "../../src/utils/storybook-utils";
import "./index.stories.css";

export default {
  title: "Themes",
  argTypes: {
    theme: {
      control: {
        type: "inline-radio",
      },
      options: ["default", "theme-black-yellow", "theme-dark"],
    },
  },
  args: {
    theme: "default",
  },
  parameters: {
    layout: "fullscreen",
  },
  tags: ["!autodocs"],
};

export const Themes = {
  render: (args) => html`
    <div class="themes-story ${args.theme}">
      <p>Currently available color themes:</p>
      <ul>
        <li>
          <a
            class="z-link"
            target="_blank"
            href="https://albe.zanichelli.it/485b31545/v/0/p/68aa0a-colori/t/421e81"
          >
            default
          </a>
        </li>
        <li>
          <a
            class="z-link"
            target="_blank"
            href="https://app.abstract.com/projects/fd370780-e659-11e8-99dc-0d08537c5fde/branches/eac24e1a-798f-445d-b8c4-3812cd9adb9f/commits/latest/files/9f586aa0-bd5b-4c12-9541-aed2e98a7a9c/layers/4EF5FE71-9450-4CBA-811C-D72CC0203A8A?collectionId=1a973a75-0d81-49aa-b31f-f38f2e36879a&collectionLayerId=98c9877b-1058-4039-8619-26db7a27e2e3"
          >
            black-yellow
          </a>
        </li>
        <li>theme-dark</li>
      </ul>
      <p>On this page you can see the color tokens of each theme by switching from the controls.</p>
      <h3>Color Tokens</h3>
      <ul class="theme-list">
        ${getThemesColorTokens().map(
          (color) => html`
            <li>
              <code>${color}</code>
              <span style="background-color: var(${color})"></span>
            </li>
          `
        )}
      </ul>
    </div>
  `,
} satisfies StoryObj;
