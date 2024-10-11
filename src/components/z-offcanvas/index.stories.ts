import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {ZOffcanvas} from ".";
import {OffCanvasVariant, TransitionDirection} from "../../beans";
import {CSSVarsArguments} from "../../utils/storybook-utils";
import "./index";
import "./index.stories.css";

type ZOffcanvasStoriesArgs = ZOffcanvas & CSSVarsArguments<"z-offcanvas--top-space" | "--z-offcanvas--container-width">;

const StoryMeta = {
  title: "ZOffcanvas",
  component: "z-offcanvas",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    variant: {
      control: {
        type: "inline-radio",
      },
      options: Object.values(OffCanvasVariant),
    },
    transitiondirection: {
      control: {
        type: "inline-radio",
      },
      options: Object.values(TransitionDirection),
    },
  },
  args: {
    "open": true,
    "variant": OffCanvasVariant.PUSHCONTENT,
    "--z-offcanvas--top-space": "0",
    "--z-offcanvas--container-width": "375px",
  },
} satisfies Meta<ZOffcanvasStoriesArgs>;
export default StoryMeta;

type Story = StoryObj<ZOffcanvasStoriesArgs>;

const DEMO_TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna ac urna aliquet lacinia eu ac augue. Nullam consectetur rutrum ultrices. Cras eros ex, cursus nec nisi sed, porttitor fringilla metus. Etiam eleifend fringilla quam et tincidunt. Cras gravida, tortor at consectetur iaculis, lacus eros sagittis magna, ac iaculis orci augue in dolor. Nullam nibh orci, maximus vel tempor sit amet, scelerisque eget velit. Quisque dignissim non dolor iaculis scelerisque. Cras at lectus arcu. Morbi dignissim fermentum magna, sed interdum leo condimentum et. Sed vitae consectetur leo, vel placerat turpis. Donec sagittis rutrum felis, eu consequat tortor efficitur in. Vivamus non nunc vehicula, laoreet lorem id, molestie eros. Etiam ornare at turpis ut suscipit. Nulla non diam eget lorem hendrerit imperdiet. Integer maximus quam non ligula lacinia pharetra. Mauris ullamcorper ligula nec elit pellentesque, a pellentesque mauris tristique. Maecenas tortor enim, rutrum ornare tincidunt sed, tempor vitae urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce feugiat egestas mollis. In eleifend neque quis tellus bibendum sodales. Curabitur mattis, magna maximus volutpat dapibus, velit nibh dictum elit, eu sodales leo elit vel odio. Quisque sit amet lorem molestie sapien interdum faucibus. Nunc in ex nisi. In hac habitasse platea dictumst. Maecenas dictum, nunc at finibus dapibus, nunc ligula congue odio, in hendrerit dui mauris vel magna. Vivamus sapien dui, eleifend auctor ornare vitae, aliquet in mi. Ut eget risus ex. Vivamus pharetra tellus in volutpat faucibus. Suspendisse interdum sapien ut dui molestie ullamcorper. Ut iaculis, nunc tincidunt posuere convallis, metus lorem mattis mi, nec ullamcorper mi ligula sit amet leo. Fusce at lectus risus. Aliquam tempor sollicitudin ullamcorper. Quisque eget dignissim purus. Nullam convallis purus a sem varius tincidunt ut in dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur fermentum rutrum nibh, nec vulputate nisi mollis in. Nullam venenatis metus nulla, at rhoncus neque gravida non. Nam vehicula mollis nunc nec faucibus. Phasellus eu turpis purus. Proin aliquam, ipsum non rutrum tincidunt, erat metus laoreet augue, facilisis ultricies magna tellus sed neque. Suspendisse quis tristique lorem. Pellentesque diam urna, congue et massa in, laoreet aliquet nibh.mybutton Ut vitae ligula eu elit ornare gravida. Vivamus ultricies, augue in fermentum tempus, purus ligula aliquet sapien, viverra condimentum tortor ante et est. Vivamus ex urna, gravida a enim auctor, ultrices ornare turpis. Quisque at lacus massa. Nulla facilisi. Ut id quam at ante sagittis posuere vitae sit amet sem. Fusce suscipit ante pellentesque felis facilisis tincidunt.";

export const TransitionDirectionRight = {
  render: (args) =>
    html`<div id="offcanvas-story-container">
      <z-offcanvas
        .variant=${args.variant}
        .open=${args.open}
        .transitiondirection=${TransitionDirection.RIGHT}
        style="--z-offcanvas--top-space: ${args["--z-offcanvas--top-space"]}; --z-offcanvas--container-width: ${args[
          "--z-offcanvas--container-width"
        ]}"
      >
        <div slot="canvasContent">
          <span>${DEMO_TEXT}</span>
        </div>
      </z-offcanvas>
      <div class="offcanvas-story-content"></div>
    </div>`,
} satisfies Story;

export const TransitionDirectionLeft = {
  render: (args) =>
    html`<div id="offcanvas-story-container">
      <div class="offcanvas-story-content"></div>
      <z-offcanvas
        .variant=${args.variant}
        .open=${args.open}
        .transitiondirection=${TransitionDirection.LEFT}
        style="--z-offcanvas--top-space: ${args["--z-offcanvas--top-space"]}; --z-offcanvas--container-width: ${args[
          "--z-offcanvas--container-width"
        ]}"
      >
        <div slot="canvasContent">
          <span>${DEMO_TEXT}</span>
        </div>
      </z-offcanvas>
      ${args.transitiondirection === "right" ? html`<div class="offcanvas-story-content"></div>` : ""}
    </div>`,
} satisfies Story;

export const TransitionDirectionUp = {
  parameters: {
    controls: {
      exclude: ["variant", "transitiondirection", "--z-offcanvas--top-space", "--z-offcanvas--container-width"],
    },
  },
  render: (args) =>
    html`<div id="offcanvas-story-container">
      <div class="offcanvas-story-content"></div>
      <z-offcanvas
        .open=${args.open}
        .variant=${OffCanvasVariant.OVERLAY}
        .transitiondirection=${TransitionDirection.UP}
      >
        <div slot="canvasContent">
          <span>${DEMO_TEXT}</span>
        </div>
      </z-offcanvas>
    </div>`,
} satisfies Story;
