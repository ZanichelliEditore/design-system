import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {CarouselArrowsPosition, CarouselProgressMode} from "../../beans";
import {CSSVarsArguments} from "../../utils/storybook-utils";
import {ZCarousel} from "./index";
import "./index.stories.css";

type ZCarouselStoriesArgs = ZCarousel & {itemsCount: number} & CSSVarsArguments<"z-carousel-gutter">;

const StoryMeta = {
  title: "ZCarousel",
  component: ZCarousel,
  decorators: [(Story) => <div class="z-carousel-story-container">{Story()}</div>],
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
  render: (args) => (
    <z-carousel
      arrowsPosition={CarouselArrowsPosition.OVER}
      fixedArrows={args.fixedArrows}
      infinite={args.infinite}
      label={args.label}
      style={{"--z-carousel-gutter": args["--z-carousel-gutter"]}}
    >
      {[...new Array(args.itemsCount)].map((_, index) => (
        <li>
          <div class="carousel-box">{index + 1}</div>
        </li>
      ))}
    </z-carousel>
  ),
} satisfies Story;

export const SingleMode = {
  parameters: {
    layout: "centered",
  },
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
  },
  render: (args) => (
    <z-carousel
      arrowsPosition={args.arrowsPosition}
      fixedArrows={args.fixedArrows}
      infinite={args.infinite}
      progressMode={args.progressMode}
      single={true}
      label={args.label}
    >
      {[...new Array(args.itemsCount)].map((_, index) => (
        <li>
          <div class="carousel-box">{index + 1}</div>
        </li>
      ))}
    </z-carousel>
  ),
} satisfies Story;

export const GhostLoading = {
  args: {
    label: "Carousel title",
    ghostLoadingHeight: 265,
  },
  parameters: {
    controls: {
      exclude: ["infinite"],
    },
  },
  render: (args) => (
    <z-carousel
      label={args.label}
      isLoading={true}
      ghostLoadingHeight={args.ghostLoadingHeight}
    ></z-carousel>
  ),
} satisfies Story;

export const LoadingItems = {
  args: {
    "label": "Carousel title",
    "--z-carousel-gutter": "8px",
  },
  parameters: {
    controls: {
      exclude: ["infinite"],
    },
  },
  render: (args) => (
    <z-carousel
      label={args.label}
      infinite={args.infinite}
      style={{"--z-carousel-gutter": args["--z-carousel-gutter"]}}
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
