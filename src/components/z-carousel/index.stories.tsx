import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {CarouselArrowsPosition, CarouselProgressMode} from "../../beans";
import {CSSVarsArguments, extractCSSVars} from "../../utils/storybook-utils";
import {ZCarousel} from "./index";
import "./index.stories.css";

type ZCarouselStoriesArgs = ZCarousel & {itemsCount: number} & CSSVarsArguments<"z-carousel-gutter">;

const StoryMeta = {
  title: "ZCarousel",
  component: ZCarousel,
  decorators: [(Story) => <div class="z-carousel-story-container">{Story()}</div>],
  render: (args) => (
    <z-carousel
      {...args}
      arrowsPosition={CarouselArrowsPosition.OVER}
      style={extractCSSVars(args)}
    >
      {[...new Array(args.itemsCount)].map((_, index) => (
        <li>
          <div class="carousel-box">{index + 1}</div>
        </li>
      ))}
    </z-carousel>
  ),
} satisfies Meta<ZCarouselStoriesArgs>;

export default StoryMeta;

type Story = StoryObj<ZCarouselStoriesArgs>;

export const SlideshowWithArrowsOver = {
  args: {
    "label": "",
    "--z-carousel-gutter": "var(--space-unit)",
    "infinite": false,
    "fixedArrows": true,
    "itemsCount": 8,
  },
} satisfies Story;

export const SingleMode = {
  argTypes: {
    arrowsPosition: {
      control: {
        type: "inline-radio",
      },
      options: Object.values(CarouselArrowsPosition),
    },
    progressMode: {
      control: {
        type: "inline-radio",
      },
      options: Object.values(CarouselProgressMode),
    },
  },
  args: {
    label: "Carousel title",
    progressMode: CarouselProgressMode.DOTS,
    arrowsPosition: CarouselArrowsPosition.BOTTOM,
    infinite: false,
    fixedArrows: true,
    itemsCount: 8,
    single: true,
  },
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["single"],
    },
  },
} satisfies Story;

export const GhostLoading = {
  args: {
    label: "Carousel title",
    ghostLoadingHeight: 265,
    isLoading: true,
  },
  parameters: {
    controls: {
      exclude: ["isLoading"],
    },
  },
} satisfies Story;

export const LoadingItems = {
  args: {
    "label": "Carousel title",
    "infinite": false,
    "--z-carousel-gutter": "8px",
  },
  parameters: {
    controls: {
      exclude: ["infinite"],
    },
  },
  render: (args) => (
    <z-carousel
      {...args}
      style={extractCSSVars(args)}
    >
      {[...new Array(8)].map(() => (
        <li>
          <div class="carousel-box-loading">
            <z-ghost-loading></z-ghost-loading>
          </div>
        </li>
      ))}
    </z-carousel>
  ),
} satisfies Story;
