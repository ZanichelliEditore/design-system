import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ButtonVariant, ControlSize} from "../../beans";
import {ZAnchorNavigation} from "./index";
import "./index.stories.css";

const StoryMeta = {
  title: "ZAnchorNavigation",
  component: ZAnchorNavigation,
  args: {
    hideUnselected: false,
    collapsedLabel: "salta a",
    isCollapsed: false,
  },
} satisfies Meta<ZAnchorNavigation>;

export default StoryMeta;

function handleManualCurrentClick(ev: MouseEvent): void {
  const btn = (ev.target as Element).closest("z-button") as HTMLElement | null;
  const sectionID = btn?.dataset.to;
  if (!sectionID) {
    return;
  }
  const current = document.querySelector(`#${sectionID}-anchor`);
  const nav = current?.closest("nav");
  Array.from(nav?.children ?? []).forEach((item) => {
    const isCurrent = item.contains(current);
    if (isCurrent) {
      item.setAttribute("data-current", "");
    } else {
      item.removeAttribute("data-current");
    }
    item.setAttribute("aria-current", isCurrent.toString());
  });
  document.querySelector(`#${sectionID}`)?.scrollIntoView();
}

export const Default = {
  render: (args) => (
    <div class={{"z-anchor-navigation-story-wrapper": true, "collapsed": args.isCollapsed}}>
      <z-anchor-navigation {...args}>
        <div>
          <a
            href="#first-section"
            target="_self"
          >
            First section
          </a>
          <z-button
            variant={ButtonVariant.TERTIARY}
            size={ControlSize.X_SMALL}
            icon="share"
          ></z-button>
        </div>
        <div>
          <a
            href="#second-section"
            target="_self"
          >
            Second section
          </a>
        </div>
        <div>
          <a
            href="#third-section"
            target="_self"
          >
            Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
            Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
          </a>
          <button
            type="button"
            aria-label="share"
          >
            <z-icon name="share" />
          </button>
        </div>
        <a
          href="#fourth-section"
          target="_self"
        >
          Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
          Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
        </a>
      </z-anchor-navigation>
      <div>
        <div
          class="section"
          id="first-section"
        >
          <h4>First section</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
            Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
          </p>
        </div>
        <div class="separator"></div>
        <div
          class="section"
          id="second-section"
        >
          <h4>Second section</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
            Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
          </p>
        </div>
        <div class="separator"></div>
        <div
          class="section"
          id="third-section"
        >
          <h4>Third section</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
            Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
          </p>
        </div>
        <div class="separator"></div>
        <div
          class="section"
          id="fourth-section"
        >
          <h4>Fourth section</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
            Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
          </p>
        </div>
        <div class="separator"></div>
      </div>
    </div>
  ),
} satisfies StoryObj<ZAnchorNavigation>;

/**
 * Setting `autoCurrent` to `false` disables the automatic highlighting of the current section in the anchor navigation
 * and allows manual handling.
 * In this story, for example, the highlighting of the current section is done by clicking on the related button.
 */
export const AutoCurrentDisabling = {
  args: {
    autoCurrent: false,
  },
  parameters: {
    controls: {
      exclude: ["auto-current"],
    },
  },
  render: (args) => (
    <div>
      <div class="z-anchor-navigation-manual-current">
        <z-button
          size={ControlSize.X_SMALL}
          data-to="first-section"
          onClick={handleManualCurrentClick}
        >
          To first section
        </z-button>
        <z-button
          size={ControlSize.X_SMALL}
          data-to="second-section"
          onClick={handleManualCurrentClick}
        >
          To second section
        </z-button>
        <z-button
          size={ControlSize.X_SMALL}
          data-to="third-section"
          onClick={handleManualCurrentClick}
        >
          To third section
        </z-button>
        <z-button
          size={ControlSize.X_SMALL}
          data-to="fourth-section"
          onClick={handleManualCurrentClick}
        >
          Highlight fourth section
        </z-button>
      </div>
      <div class="z-anchor-navigation-story-wrapper">
        <z-anchor-navigation
          collapsedLabel={args.collapsedLabel}
          hideUnselected={args.hideUnselected}
          autoCurrent={args.autoCurrent}
        >
          <div>
            <a id="first-section-anchor">First section</a>
            <z-button
              variant={ButtonVariant.TERTIARY}
              size={ControlSize.X_SMALL}
              icon="share"
            ></z-button>
          </div>
          <div>
            <a id="second-section-anchor">Second section</a>
          </div>
          <div>
            <a id="third-section-anchor">
              Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
              Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
            </a>
            <button
              type="button"
              aria-label="share"
            >
              <z-icon name="share" />
            </button>
          </div>
          <a id="fourth-section-anchor">
            Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
            Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
          </a>
        </z-anchor-navigation>
        <div class="z-anchor-navigation-demo-sections">
          <div
            class="section"
            id="first-section"
          >
            <h4>First section</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
              Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
            </p>
          </div>
          <div class="separator"></div>
          <div
            class="section"
            id="second-section"
          >
            <h4>Second section</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
              Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
            </p>
          </div>
          <div class="separator"></div>
          <div
            class="section"
            id="third-section"
          >
            <h4>Third section</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
              Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
            </p>
          </div>
          <div class="separator"></div>
          <div
            class="section"
            id="fourth-section"
          >
            <h4>Fourth section</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
              Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
            </p>
          </div>
          <div class="separator"></div>
        </div>
      </div>
    </div>
  ),
} satisfies StoryObj<ZAnchorNavigation>;
