import {Component, h, Prop, State, Watch, Element, Host} from "@stencil/core";
import {HostElement} from "@stencil/core/internal";
import {InfoRevealPosition, InfoRevealPositionBean} from "../../beans";

@Component({
  tag: "z-info-reveal",
  styleUrl: "styles.css",
  shadow: true,
})

/**
 * Info reveal component.
 *
 * @slot - info to display in the info box. If more than one element has been slotted,
 * by clicking on the panel it switches to the next info element.
 * @cssprop --z-info-reveal-theme--surface - background color of the info reveal panel.
 * @cssprop --z-info-reveal-theme--text - foreground color of the info reveal panel.
 * @cssprop --z-info-reveal-shadow - shadow of the info reveal panel.
 * @cssprop --z-info-reveal-max-width - max width of the info reveal panel.
 */
export class ZInfoReveal {
  @Element() el: HTMLZInfoRevealElement;

  /** Name of the icon for the open button */
  @Prop()
  icon? = "informationsource";

  /** Info reveal's position */
  @Prop({reflect: true})
  position?: InfoRevealPositionBean = InfoRevealPosition.bottom_right;

  /** Text that appears on closed panel next to the open button. */
  @Prop()
  label?: string;

  /** Whether the info panel is open. */
  @State()
  open = false;

  /** Current index for the info queue. */
  @State()
  currentIndex: number = null;

  @Watch("currentIndex")
  watchItems(): void {
    Array.from(this.el.children).forEach((child, index) => {
      if (this.currentIndex === index) {
        child.setAttribute("data-current", "");
      } else {
        child.removeAttribute("data-current");
      }
    });
  }

  /**
   * Open the info box.
   */
  private openInfoBox(): void {
    this.currentIndex = 0;
    this.open = true;
  }

  /**
   * Close the info box.
   */
  private closeInfoBox(): void {
    this.open = false;
  }

  /**
   * Navigate slotted info.
   * It closes the info box after the last info has been navigated.
   */
  private next(): void {
    this.currentIndex = this.currentIndex + 1;
    if (this.currentIndex === this.el.children.length) {
      this.closeInfoBox();
    }
  }

  render(): HostElement {
    return (
      <Host open={this.open}>
        <button
          class="z-info-reveal-trigger"
          onClick={this.openInfoBox.bind(this)}
        >
          {this.label && <span class="z-info-reveal-label">{this.label}</span>}
          <z-icon name={this.icon}></z-icon>
        </button>
        {this.open && (
          <div
            class="info-box"
            onClick={this.next.bind(this)}
            tabIndex={0}
          >
            <slot></slot>
            <button
              class="z-info-reveal-close"
              onClick={this.closeInfoBox.bind(this)}
            >
              <z-icon name="close"></z-icon>
            </button>
          </div>
        )}
      </Host>
    );
  }
}
