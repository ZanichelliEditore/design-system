import {Component, h, Prop, State, Host} from "@stencil/core";
import {ControlSize, InfoRevealPosition} from "../../beans";

/**
 * Info reveal component.
 *
 * @slot - content of the info panel.
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

  render(): HTMLZInfoRevealElement {
    return (
      <Host open={this.open}>
        <button
          class="z-info-reveal-trigger"
          onClick={this.togglePanel.bind(this)}
          aria-label={!this.label ? this.ariaLabel : undefined}
          aria-expanded={this.open ? "true" : "false"}
          aria-controls="z-info-reveal-panel"
        >
          {this.icon && <z-icon name={this.icon} />}
          {this.label && <span class="z-info-reveal-label">{this.label}</span>}
        </button>
        {this.open && (
          <div
            class="z-info-reveal-panel"
            id="z-info-reveal-panel"
          >
            <slot></slot>
            <button
              class="z-info-reveal-close"
              onClick={this.closePanel.bind(this)}
              aria-label="Chiudi pannello informazioni"
            >
              <z-icon name="multiply" />
            </button>
          </div>
        )}
      </Host>
    );
  }
}
