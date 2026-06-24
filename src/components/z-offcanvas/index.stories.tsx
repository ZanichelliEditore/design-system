import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {OffCanvasVariant, TransitionDirection} from "../../beans";
import {CSSVarsArguments, extractCSSVars} from "../../utils/storybook-utils";
import {ZOffcanvas} from "./index";
import "./index.stories.css";

type ZOffcanvasStoriesArgs = ZOffcanvas &
  CSSVarsArguments<"z-offcanvas--top-space" | "--z-offcanvas--container-width" | "--z-offcanvas--container-height">;

const StoryMeta = {
  title: "ZOffcanvas",
  component: "z-offcanvas",
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: "600px",
      },
    },
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
    showBackdrop: {
      control: {
        if: {
          arg: "variant",
          eq: OffCanvasVariant.OVERLAY,
        },
      },
    },
  },
  args: {
    "open": true,
    "showBackdrop": true,
    "transitiondirection": TransitionDirection.RIGHT,
    "variant": OffCanvasVariant.OVERLAY,
    "--z-offcanvas--top-space": "0px",
    "--z-offcanvas--container-width": "375px",
  },
} satisfies Meta<ZOffcanvasStoriesArgs>;
export default StoryMeta;

type Story = StoryObj<ZOffcanvasStoriesArgs>;

const DEMO_TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna ac urna aliquet lacinia eu ac augue. Nullam consectetur rutrum ultrices. Cras eros ex, cursus nec nisi sed, porttitor fringilla metus. Etiam eleifend fringilla quam et tincidunt. Cras gravida, tortor at consectetur iaculis, lacus eros sagittis magna, ac iaculis orci augue in dolor. Nullam nibh orci, maximus vel tempor sit amet, scelerisque eget velit. Quisque dignissim non dolor iaculis scelerisque. Cras at lectus arcu. Morbi dignissim fermentum magna, sed interdum leo condimentum et. Sed vitae consectetur leo, vel placerat turpis. Donec sagittis rutrum felis, eu consequat tortor efficitur in. Vivamus non nunc vehicula, laoreet lorem id, molestie eros. Etiam ornare at turpis ut suscipit. Nulla non diam eget lorem hendrerit imperdiet. Integer maximus quam non ligula lacinia pharetra. Mauris ullamcorper ligula nec elit pellentesque, a pellentesque mauris tristique. Maecenas tortor enim, rutrum ornare tincidunt sed, tempor vitae urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce feugiat egestas mollis. In eleifend neque quis tellus bibendum sodales. Curabitur mattis, magna maximus volutpat dapibus, velit nibh dictum elit, eu sodales leo elit vel odio. Quisque sit amet lorem molestie sapien interdum faucibus. Nunc in ex nisi. In hac habitasse platea dictumst. Maecenas dictum, nunc at finibus dapibus, nunc ligula congue odio, in hendrerit dui mauris vel magna. Vivamus sapien dui, eleifend auctor ornare vitae, aliquet in mi. Ut eget risus ex. Vivamus pharetra tellus in volutpat faucibus. Suspendisse interdum sapien ut dui molestie ullamcorper. Ut iaculis, nunc tincidunt posuere convallis, metus lorem mattis mi, nec ullamcorper mi ligula sit amet leo. Fusce at lectus risus. Aliquam tempor sollicitudin ullamcorper. Quisque eget dignissim purus. Nullam convallis purus a sem varius tincidunt ut in dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur fermentum rutrum nibh, nec vulputate nisi mollis in. Nullam venenatis metus nulla, at rhoncus neque gravida non. Nam vehicula mollis nunc nec faucibus. Phasellus eu turpis purus. Proin aliquam, ipsum non rutrum tincidunt, erat metus laoreet augue, facilisis ultricies magna tellus sed neque. Suspendisse quis tristique lorem. Pellentesque diam urna, congue et massa in, laoreet aliquet nibh.mybutton Ut vitae ligula eu elit ornare gravida. Vivamus ultricies, augue in fermentum tempus, purus ligula aliquet sapien, viverra condimentum tortor ante et est. Vivamus ex urna, gravida a enim auctor, ultrices ornare turpis. Quisque at lacus massa. Nulla facilisi. Ut id quam at ante sagittis posuere vitae sit amet sem. Fusce suscipit ante pellentesque felis facilisis tincidunt.";

let offcanvasRef: HTMLZOffcanvasElement;

export const OverlayTransitionDirectionRight = {
  parameters: {
    controls: {
      exclude: ["transitiondirection"],
    },
  },
  render: (args) => (
    <div id="offcanvas-story-container">
      <z-offcanvas
        {...args}
        ref={(el) => (offcanvasRef = el)}
        style={extractCSSVars(args)}
        variant={OffCanvasVariant.OVERLAY}
      >
        <div slot="canvasContent">
          <div class="offcanvas-header">
            <button onClick={() => (offcanvasRef.open = false)}>
              <z-icon name="multiply" />
            </button>
          </div>
          <p>{DEMO_TEXT}</p>
          <a href="google.com">A link to google</a>
        </div>
      </z-offcanvas>
      <div class="offcanvas-story-content">
        <div class="heading-2-sb">Page content</div>
        {DEMO_TEXT}
      </div>
    </div>
  ),
} satisfies Story;

export const OverlayTransitionDirectionLeft = {
  parameters: {
    controls: {
      exclude: ["transitiondirection"],
    },
  },
  render: (args) => (
    <div id="offcanvas-story-container">
      <div class="offcanvas-story-content">
        <div class="heading-2-sb">Page content</div>
        {DEMO_TEXT}
      </div>
      <z-offcanvas
        {...args}
        style={extractCSSVars(args)}
        variant={OffCanvasVariant.OVERLAY}
        transitiondirection={TransitionDirection.LEFT}
      >
        <div slot="canvasContent">
          <p>{DEMO_TEXT}</p>
        </div>
      </z-offcanvas>
    </div>
  ),
} satisfies Story;

export const TransitionDirectionUp = {
  parameters: {
    controls: {
      exclude: ["variant", "transitiondirection", "--z-offcanvas--top-space", "--z-offcanvas--container-width"],
    },
  },
  args: {
    "--z-offcanvas--container-height": "90%",
  },
  render: (args) => (
    <div id="offcanvas-story-container">
      <div class="offcanvas-story-content">
        <div class="heading-2-sb">Page content</div>
        {DEMO_TEXT}
      </div>
      <z-offcanvas
        {...args}
        style={extractCSSVars(args)}
        variant={OffCanvasVariant.OVERLAY}
        transitiondirection={TransitionDirection.UP}
      >
        <div slot="canvasContent">
          <p>{DEMO_TEXT}</p>
        </div>
      </z-offcanvas>
    </div>
  ),
} satisfies Story;

export const PushContent = {
  parameters: {
    controls: {
      exclude: ["variant", "--z-offcanvas--top-space"],
    },
  },
  args: {
    transitiondirection: TransitionDirection.RIGHT,
  },
  render: (args) => (
    <div
      class={{"pushcontent-story": true, [args.transitiondirection]: true}}
      id="offcanvas-story-container"
    >
      <z-offcanvas
        {...args}
        style={extractCSSVars(args)}
        variant={OffCanvasVariant.PUSHCONTENT}
      >
        <div slot="canvasContent">
          <p>Offcanvas content</p>
        </div>
      </z-offcanvas>

      <div class="offcanvas-story-content">
        <div class="heading-2-sb">Page content</div>
        {DEMO_TEXT}
      </div>
    </div>
  ),
} satisfies Story;

export const WithNestedComponents = {
  render: (args) => (
    <div id="offcanvas-story-container">
      <div class="offcanvas-story-content">
        <div class="heading-2-sb">Page content</div>
        <z-button onClick={() => (offcanvasRef.open = true)}>apri offcanvas</z-button>
        {DEMO_TEXT}
      </div>
      <z-offcanvas
        {...args}
        ref={(el) => (offcanvasRef = el)}
      >
        <div slot="canvasContent">
          <div class="offcanvas-header">
            <z-button
              icon="chevron-left"
              onClick={() => (offcanvasRef.open = false)}
            >
              Chiudi
            </z-button>
          </div>
          <z-select
            resetItem="Tutte le aree"
            ariaLabel="Filtra i risultati in base all’area del catalogo"
            htmlid="search-categories-1"
            message={false}
            placeholder="Seleziona un’area"
            items={[
              {id: "1", name: "Opzione 1", selected: true},
              {id: "2", name: "Opzione 2", selected: false},
              {id: "3", name: "Opzione 3", selected: false},
              {id: "4", name: "Opzione 4", selected: false},
              {id: "5", name: "Opzione 5", selected: false},
            ]}
          ></z-select>
          <z-combobox
            html-aria-label="Filtra i risultati in base alle materie del catalogo"
            inputid="search-categories-2"
            label="Materia"
            searchlabel="Materia"
            searchplaceholder="Cerca"
            items={[
              {
                id: "12",
                name: "Opzione 1",
                checked: false,
              },
              {id: "22", name: "Opzione 2", checked: false},
              {id: "32", name: "Opzione 3", checked: false},
              {
                id: "42",
                name: "Opzione 4",
                checked: false,
              },
              {id: "52", name: "Opzione 5", checked: false},
            ]}
          ></z-combobox>
          <z-combobox
            html-aria-label="Filtra i risultati in base all’ambito"
            inputid="search-categories-3"
            label="Ambito"
            searchlabel="Ambito"
            searchplaceholder="Cerca"
            items={[
              {id: "13", name: "Opzione 1", checked: false},
              {id: "23", name: "Opzione 2", checked: false},
            ]}
          ></z-combobox>
        </div>
      </z-offcanvas>
    </div>
  ),
} satisfies Story;
