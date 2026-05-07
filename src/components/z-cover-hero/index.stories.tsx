import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ButtonVariant, CoverHeroContentPosition, CoverHeroVariant, InfoRevealPosition} from "../../beans";
import {CSSVarsArguments, getColorTokenArgConfig} from "../../utils/storybook-utils";
import {ZCoverHero} from "./index";
import "./index.stories.css";

type ZCoverHeroStoriesArgs = ZCoverHero &
  CSSVarsArguments<"cover-hero-text-color" | "cover-hero-overlay" | "cover-hero-aspect-ratio">;

const StoryMeta = {
  title: "ZCoverHero",
  component: ZCoverHero,
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
    "--cover-hero-text-color": getColorTokenArgConfig(),
    "--cover-hero-overlay": {
      if: {
        arg: "variant",
        eq: CoverHeroVariant.OVERLAY,
      },
    },
    "--cover-hero-aspect-ratio": {
      if: {
        arg: "preserveAspectRatio",
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
    "--cover-hero-aspect-ratio": undefined,
    "--cover-hero-overlay": "linear-gradient(270deg, #0000 0%, #000000e6 100%)",
    "--cover-hero-text-color": "var(--color-text-inverse)",
  },
} satisfies Meta<ZCoverHeroStoriesArgs>;

export default StoryMeta;

type Story = StoryObj<ZCoverHeroStoriesArgs>;

export const Default = {
  render: (args) => (
    <div class="z-cover-hero-story-container">
      <z-cover-hero
        contentPosition={args.contentPosition}
        variant={args.variant}
        preserveAspectRatio={args.preserveAspectRatio}
        style={{
          "--cover-hero-overlay": args["--cover-hero-overlay"],
          "--cover-hero-text-color": args["--cover-hero-text-color"],
          "--cover-hero-aspect-ratio": args["--cover-hero-aspect-ratio"],
        }}
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
            <z-button>Primary</z-button>
            <z-button variant={ButtonVariant.SECONDARY}>Secondary</z-button>
          </div>
        </div>
        <z-info-reveal
          slot="info-reveal"
          position={InfoRevealPosition.BOTTOM_RIGHT}
        >
          <span>Lorem ipsum dolor sit amet.</span>
        </z-info-reveal>
      </z-cover-hero>
    </div>
  ),
} satisfies Story;

export const CustomAspectRatio = {
  parameters: {
    controls: {
      exclude: ["variant", "preserveAspectRatio"],
    },
  },
  args: {
    "--cover-hero-aspect-ratio": "16/8",
  },
  render: (args) => (
    <div class="z-cover-hero-story-container">
      <z-cover-hero
        style={{
          "--cover-hero-overlay": args["--cover-hero-overlay"],
          "--cover-hero-text-color": args["--cover-hero-text-color"],
          "--cover-hero-aspect-ratio": args["--cover-hero-aspect-ratio"],
        }}
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
            <z-button>Primary</z-button>
            <z-button variant={ButtonVariant.SECONDARY}>Secondary</z-button>
          </div>
        </div>
        <z-info-reveal
          slot="info-reveal"
          position={InfoRevealPosition.BOTTOM_RIGHT}
        >
          <span>Lorem ipsum dolor sit amet.</span>
        </z-info-reveal>
      </z-cover-hero>
    </div>
  ),
};

export const AutoAspectRatio = {
  parameters: {
    controls: {
      exclude: ["variant", "preserveAspectRatio"],
    },
  },
  args: {
    "--cover-hero-aspect-ratio": "",
  },
  render: (args) => (
    <div class="z-cover-hero-story-container z-cover-hero-auto-ratio">
      <z-cover-hero
        style={{
          "--cover-hero-overlay": args["--cover-hero-overlay"],
          "--cover-hero-text-color": args["--cover-hero-text-color"],
          "--cover-hero-aspect-ratio": args["--cover-hero-aspect-ratio"],
        }}
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
            <z-button>Primary</z-button>
            <z-button variant={ButtonVariant.SECONDARY}>Secondary</z-button>
          </div>
        </div>
      </z-cover-hero>
    </div>
  ),
};

export const WithoutPreservingAspectRatio = {
  argTypes: {
    "variant": {table: {disable: true}},
    "preserveAspectRatio": {table: {disable: true}},
    "--cover-hero-aspect-ratio": {table: {disable: true}},
  },
  args: {
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  render: (args) => (
    <div class="z-cover-hero-story-container">
      <z-cover-hero
        preserveAspectRatio={false}
        style={{
          "--cover-hero-overlay": args["--cover-hero-overlay"],
          "--cover-hero-text-color": args["--cover-hero-text-color"],
        }}
      >
        <img
          slot="cover"
          src="https://images.pexels.com/photos/10323759/pexels-photo-10323759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div slot="content">
          <div>{args.textContent}</div>
          <div class="buttons">
            <z-button>Primary</z-button>
            <z-button variant={ButtonVariant.SECONDARY}>Secondary</z-button>
          </div>
        </div>
      </z-cover-hero>
    </div>
  ),
};

export const StackedVariant = {
  parameters: {
    controls: {
      exclude: ["variant", "preserveAspectRatio", "--cover-hero-aspect-ratio", "--cover-hero-text-color"],
    },
  },
  args: {
    variant: CoverHeroVariant.STACKED,
  },
  render: (args) => (
    <div class="z-cover-hero-story-container">
      <z-cover-hero
        contentPosition={args.contentPosition}
        preserveAspectRatio={args.preserveAspectRatio}
        variant={args.variant}
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
            <z-button>Primary</z-button>
            <z-button variant={ButtonVariant.SECONDARY}>Secondary</z-button>
          </div>
        </div>
        <z-info-reveal
          slot="info-reveal"
          position={InfoRevealPosition.BOTTOM_RIGHT}
        >
          <span>Lorem ipsum dolor sit amet.</span>
        </z-info-reveal>
      </z-cover-hero>
    </div>
  ),
};
