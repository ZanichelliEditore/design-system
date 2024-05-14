import {html} from "lit";
import {repeat} from "lit/directives/repeat.js";
import {CarouselArrowsPosition, CarouselProgressMode} from "../../beans";

import "./index.stories.css";

export default {
  title: "ZCarousel",
  component: "z-carousel",
  decorators: [(Story) => html`<div class="z-carousel-story-container">${Story()}</div>`],
};

export const SlideshowWithArrowsOver = {
  render: (args) =>
    html`<z-carousel
      label=${args.label}
      .arrowsPosition=${CarouselArrowsPosition.OVER}
      .infinite=${args.infinite}
      .fixedArrows=${args.fixedArrows}
      style="--z-carousel-gutter: ${args["--z-carousel-gutter"]}"
    >
      ${repeat(
        [...new Array(args.itemsCount)].map((_, i) => i),
        (i) => i,
        (_, index) => html`<li><div class="carousel-box">${index + 1}</div></li>`
      )}
    </z-carousel>`,

  name: "Slideshow with arrows over",

  args: {
    "label": "",
    "--z-carousel-gutter": "var(--space-unit)",
    "infinite": false,
    "fixedArrows": true,
    "itemsCount": 8,
  },
};

export const SingleMode = {
  render: (args) =>
    html`<z-carousel
      label=${args.label}
      .single=${true}
      .progressMode=${args.progressMode}
      .arrowsPosition=${args.arrowsPosition}
      .infinite=${args.infinite}
      .fixedArrows=${args.fixedArrows}
    >
      ${repeat(
        [...new Array(args.itemsCount)].map((_, i) => i),
        (i) => i,
        (_, index) => html`<li><div class="carousel-box">${index + 1}</div></li>`
      )}
    </z-carousel>`,

  name: "Single mode",

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
};

export const GhostLoading = {
  render: (args) =>
    html`<z-carousel
      label=${args.label}
      .isLoading=${true}
      .ghostLoadingHeight=${args.ghostLoadingHeight}
    ></z-carousel>`,

  name: "Ghost loading",

  args: {
    label: "Carousel title",
    ghostLoadingHeight: 265,
  },

  parameters: {
    controls: {
      exclude: ["infinite"],
    },
  },
};

export const LoadingItems = {
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

  name: "Loading items",

  args: {
    "label": "Carousel title",
    "--z-carousel-gutter": "8px",
  },

  parameters: {
    controls: {
      exclude: ["infinite"],
    },
  },
};
