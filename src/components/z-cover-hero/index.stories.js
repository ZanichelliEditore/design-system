import {styleMap} from "lit/directives/style-map.js";
import {CoverHeroVariant, CoverHeroContentPosition} from "../../beans";
import {getColorVars, getColorVarsLabels} from "../../utils/storybook-utils";
import {html} from "lit";

import "./index.stories.css";

export default {
  title: "ZCoverHero",
  component: "z-cover-hero",

  argTypes: {
    "variant": {
      control: {
        type: "inline-radio",
      },

      options: Object.values(CoverHeroVariant),
    },

    "contentPosition": {
      if: {
        arg: "variant",
        eq: CoverHeroVariant.STACKED,
      },

      control: {
        type: "inline-radio",
      },

      options: Object.values(CoverHeroContentPosition),
    },

    "preserveAspectRatio": {
      control: {
        type: "boolean",
      },
    },

    "--cover-hero-text-color": {
      control: {
        type: "select",
        labels: getColorVarsLabels(),
      },

      options: getColorVars(),
    },

    "--cover-hero-overlay": {
      if: {
        arg: "variant",
        eq: CoverHeroVariant.OVERLAY,
      },

      control: {
        type: "text",
      },
    },

    "--cover-hero-aspect-ratio": {
      if: {
        arg: "preserveAspectRatio",
        eq: true,
      },

      control: {
        type: "text",
      },
    },
  },

  args: {
    "variant": CoverHeroVariant.OVERLAY,
    "contentPosition": CoverHeroContentPosition.TOP,
    "preserveAspectRatio": true,
    "--cover-hero-aspect-ratio": "",
    "--cover-hero-overlay": "linear-gradient(270deg, #0000 0%, #000000e6 100%)",
    "--cover-hero-text-color": "var(--color-text-inverse)",
  },
};

export const Default = {
  render: (args) => html`
    <div class="z-cover-hero-story-container">
      <z-cover-hero
        .contentPosition=${args.contentPosition}
        .variant=${args.variant}
        .preserveAspectRatio=${args.preserveAspectRatio}
        style=${styleMap({
          "--cover-hero-overlay": args["--cover-hero-overlay"],
          "--cover-hero-text-color": args["--cover-hero-text-color"],
          "--cover-hero-aspect-ratio": args["--cover-hero-aspect-ratio"],
        })}
      >
        <img
          slot="cover"
          src="https://images.pexels.com/photos/10323759/pexels-photo-10323759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div slot="content">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea
            commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div class="buttons">
            <z-button variant="primary">Primary</z-button>
            <z-button variant="secondary">Secondary</z-button>
          </div>
        </div>
        <z-info-reveal
          slot="info-reveal"
          position="bottom_right"
        >
          <span>Lorem ipsum dolor sit amet.</span>
        </z-info-reveal>
      </z-cover-hero>
    </div>
  `,

  name: "Default",
};

export const CustomAspectRatio = {
  render: (args) => html`
    <div class="z-cover-hero-story-container">
      <z-cover-hero
        style=${styleMap({
          "--cover-hero-overlay": args["--cover-hero-overlay"],
          "--cover-hero-text-color": args["--cover-hero-text-color"],
          "--cover-hero-aspect-ratio": args["--cover-hero-aspect-ratio"],
        })}
      >
        <img
          slot="cover"
          src="https://images.pexels.com/photos/10323759/pexels-photo-10323759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div slot="content">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea
            commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div class="buttons">
            <z-button variant="primary">Primary</z-button>
            <z-button variant="secondary">Secondary</z-button>
          </div>
        </div>
        <z-info-reveal
          slot="info-reveal"
          position="bottom_right"
        >
          <span>Lorem ipsum dolor sit amet.</span>
        </z-info-reveal>
      </z-cover-hero>
    </div>
  `,

  name: "Custom aspect ratio",

  argTypes: {
    variant: {
      control: false,
    },

    preserveAspectRatio: {
      control: false,
    },
  },

  args: {
    "--cover-hero-aspect-ratio": "16/8",
  },
};

export const AutoAspectRatio = {
  render: (args) => html`
    <div class="z-cover-hero-story-container z-cover-hero-auto-ratio">
      <z-cover-hero
        style=${styleMap({
          "--cover-hero-overlay": args["--cover-hero-overlay"],
          "--cover-hero-text-color": args["--cover-hero-text-color"],
          "--cover-hero-aspect-ratio": args["--cover-hero-aspect-ratio"],
        })}
      >
        <img
          slot="cover"
          src="https://images.pexels.com/photos/4934920/pexels-photo-4934920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div slot="content">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea
            commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div class="buttons">
            <z-button variant="primary">Primary</z-button>
            <z-button variant="secondary">Secondary</z-button>
          </div>
        </div>
      </z-cover-hero>
    </div>
  `,

  name: "Auto aspect ratio",

  argTypes: {
    variant: {
      control: false,
    },

    preserveAspectRatio: {
      control: false,
    },
  },

  args: {
    "--cover-hero-aspect-ratio": "",
  },
};

export const WithoutPreservingAspectRatio = {
  render: (args) => html`
    <div class="z-cover-hero-story-container">
      <z-cover-hero
        .preserveAspectRatio=${false}
        style=${styleMap({
          "--cover-hero-overlay": args["--cover-hero-overlay"],
          "--cover-hero-text-color": args["--cover-hero-text-color"],
        })}
      >
        <img
          slot="cover"
          src="https://images.pexels.com/photos/10323759/pexels-photo-10323759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div slot="content">
          <div>${args.textContent}</div>
          <div class="buttons">
            <z-button variant="primary">Primary</z-button>
            <z-button variant="secondary">Secondary</z-button>
          </div>
        </div>
      </z-cover-hero>
    </div>
  `,

  name: "Without preserving aspect ratio",

  argTypes: {
    "variant": {
      control: false,
    },

    "preserveAspectRatio": {
      control: false,
    },

    "--cover-hero-aspect-ratio": {
      control: false,
    },
  },

  args: {
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
};

export const StackedVariant = {
  render: (args) => html`
    <div class="z-cover-hero-story-container">
      <z-cover-hero
        .contentPosition=${args.contentPosition}
        .preserveAspectRatio=${args.preserveAspectRatio}
        .variant=${args.variant}
      >
        <img
          slot="cover"
          src="https://images.pexels.com/photos/10323759/pexels-photo-10323759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div slot="content">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea
            commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div class="buttons">
            <z-button variant="primary">Primary</z-button>
            <z-button variant="secondary">Secondary</z-button>
          </div>
        </div>
        <z-info-reveal
          slot="info-reveal"
          position="bottom_right"
        >
          <span>Lorem ipsum dolor sit amet.</span>
        </z-info-reveal>
      </z-cover-hero>
    </div>
  `,

  name: "Stacked variant",

  argTypes: {
    "variant": {
      control: false,
    },

    "preserveAspectRatio": {
      control: false,
    },

    "--cover-hero-aspect-ratio": {
      control: false,
    },

    "--cover-hero-text-color": {
      control: false,
    },
  },

  args: {
    variant: CoverHeroVariant.STACKED,
  },
};
