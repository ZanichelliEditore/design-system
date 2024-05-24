import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {repeat} from "lit/directives/repeat.js";
import {CarouselArrowsPosition, CarouselProgressMode} from "../../beans";
import {CssVarsArguments} from "../../utils/storybook-utils";
import "./index";
import {ZCarousel} from ".";
import "./index.stories.css";

type ZCarouselStoriesArgs = ZCarousel & {itemsCount: number} & CssVarsArguments<"z-carousel-gutter">;

/**
 * This component was conceived as a list of elements to respect the rules of accessibility (https://www.w3.org/WAI/tutorials/carousels/working-example/).
 * Pass any number of elements inside its main `slot`.
 * @example```html
 * <z-carousel>
 *  <li>element</li>
 *  <li>element</li>
 *  <li>element</li>
 * </z-carousel>
 * ```
 * > Note: always use `li` elements as direct children of `z-carousel`, as it wraps them with an `ul` element.
 * You can set the gutter between the elements by using the `--z-carousel-gutter` custom property.
 * @example```css
 * z-carousel {
 *  --z-carousel-gutter: calc(var(--space-unit) * 2);
 * }```
 */
const StoryMeta = {
  title: "ZCarousel",
  component: "z-carousel",
  decorators: [(Story) => html`<div class="z-carousel-story-container">${Story()}</div>`],
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
  render: (args) =>
    html`<z-carousel
      .arrowsPosition=${CarouselArrowsPosition.OVER}
      .fixedArrows=${args.fixedArrows}
      .infinite=${args.infinite}
      label=${args.label}
      style="--z-carousel-gutter: ${args["--z-carousel-gutter"]}"
    >
      ${repeat(
        [...new Array(args.itemsCount)].map((_, i) => i),
        (i) => i,
        (_, index) => html`<li><div class="carousel-box">${index + 1}</div></li>`
      )}
    </z-carousel>`,
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
  render: (args) =>
    html`<z-carousel
      .arrowsPosition=${args.arrowsPosition}
      .fixedArrows=${args.fixedArrows}
      .infinite=${args.infinite}
      .progressMode=${args.progressMode}
      .single=${true}
      label=${args.label}
    >
      ${repeat(
        [...new Array(args.itemsCount)].map((_, i) => i),
        (i) => i,
        (_, index) => html`<li><div class="carousel-box">${index + 1}</div></li>`
      )}
    </z-carousel>`,
} satisfies Story;

/**
 * You can handle ghost loading for the whole z-carousel by setting two properties:
 * - `isLoading` (boolean): to show a `z-ghost-loading` component instead of the carousel content.
 * - `ghostLoadingHeight` (number): to set the height of the `z-ghost-loading` component.
 * You can also manually handle ghost loading by putting <z-ghost-loading> elements as items.
 */
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
  render: (args) =>
    html`<z-carousel
      label=${args.label}
      .isLoading=${true}
      .ghostLoadingHeight=${args.ghostLoadingHeight}
    ></z-carousel>`,
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
  render: (args) =>
    html`<z-carousel
      label=${args.label}
      .infinite=${args.infinite}
      style="--z-carousel-gutter: ${args["--z-carousel-gutter"]}"
    >
      ${repeat(
        new Array(8),
        () =>
          html`<li>
            <div class="carousel-box-loading">
              <z-ghost-loading></z-ghost-loading>
            </div>
          </li>`
      )}
    </z-carousel>`,
} satisfies Story;
