import {Component, Element, Host, Listen, Prop, State, Watch, h} from "@stencil/core";
import {ControlSize, InfoRevealPosition} from "../../beans";

/**
 * Info reveal component.
 *
 * @slot - content of the info panel.
 * @cssprop --z-info-reveal-panel-width - Width of the info panel.
 * @cssprop --trigger-icon-size - Size of the trigger icon for big size.
 * @cssprop --trigger-icon-size-small - Size of the trigger icon for small size.
 * @cssprop --trigger-icon-size-x-small - Size of the trigger icon for x-small size.
 */
@Component({
  tag: "z-info-reveal",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZInfoReveal {
  /** Name of the icon for the trigger button */
  @Prop()
  icon? = "informationsource";

  /**
   * The position of the z-info-reveal in the page. This helps to correctly place the info panel.
   * The panel will grow in the opposite direction of the position.
   * For example, with the default position `BOTTOM_RIGHT`, the panel will grow vertically upwards and horizontally to the left.
   */
  @Prop({reflect: true})
  position?: InfoRevealPosition = InfoRevealPosition.BOTTOM_RIGHT;

  /** Label of the trigger button. */
  @Prop()
  label?: string;

  /** Aria label of the trigger button. It will be only used when `label` prop is empty. */
  @Prop()
  ariaLabel = "Apri pannello informazioni";

  /** Size of the trigger button */
  @Prop({reflect: true})
  size?: ControlSize = ControlSize.BIG;

  /** Whether the info panel is open. */
  @State()
  open = false;

  @Element() host: HTMLZInfoRevealElement;

  private panel: HTMLDivElement;

  /**
   * Adjust the position of the info panel to prevent exiting the viewport.
   */
  @Watch("position")
  @Watch("open")
  @Listen("resize", {target: "window", passive: true})
  adjustPanelPosition(): void {
    if (!this.open || !this.panel) {
      return;
    }

    const rect = this.host.getBoundingClientRect();
    const gridMargin = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--grid-margin"), 10);
    const pageWidth = document.documentElement.offsetWidth;
    // Available space for the info panel to grow towards the edge of the page, based on the `position` prop.
    const availableSpace = Math.round(
      (this.position.includes("left") ? pageWidth - rect.left : rect.right) - gridMargin
    );
    this.panel.style.maxWidth = `${availableSpace}px`;
  }

  /**
   * Toggle the open state of the info panel.
   */
  private togglePanel(): void {
    this.open = !this.open;
  }

  /**
   * Close the info panel.
   */
  private closePanel(): void {
    this.open = false;
  }

  @Listen("keydown", {target: "window", capture: true})
  handleEscapeKey(event: KeyboardEvent): void {
    if (event.key === "Escape" && this.open) {
      this.closePanel();
    }
  }

  render(): HTMLZInfoRevealElement {
    return (
      <Host open={this.open}>
        <button
          class="z-info-reveal-trigger"
          type="button"
          onClick={this.togglePanel.bind(this)}
          aria-label={!this.label ? this.ariaLabel : undefined}
          aria-expanded={this.open ? "true" : "false"}
          aria-controls="z-info-reveal-panel"
        >
          {this.icon && <z-icon name={this.icon} />}
          {this.label && <span class="z-info-reveal-label">{this.label}</span>}
        </button>
        <div
          class="z-info-reveal-panel"
          id="z-info-reveal-panel"
          ref={(el) => (this.panel = el)}
          hidden={!this.open}
        >
          <slot></slot>
          <button
            class="z-info-reveal-close"
            type="button"
            onClick={this.closePanel.bind(this)}
            aria-label="Chiudi pannello informazioni"
          >
            <z-icon name="multiply" />
          </button>
        </div>
      </Host>
    );
  }
}
