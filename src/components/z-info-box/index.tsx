import {Component, ComponentInterface, Event, EventEmitter, Host, Prop, h} from "@stencil/core";
import {IconName} from "../../constants/iconset";

/**
 * @slot content - set the info box content
 */
@Component({
  tag: "z-info-box",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZInfoBox implements ComponentInterface {
  /** info box unique id */
  @Prop()
  boxid: string;

  /** render close icon */
  @Prop()
  isclosable = true;

  /** Aria label for the close button */
  @Prop()
  closeButtonAriaLabel = "Chiudi pannello informazioni";

  /**
   * Name of the icon to display on the top left of the info box.
   * The icon's color will be inherited from the border color set through the `--z-info-box--border-color` CSS variable, if set.
   * Otherwise it can be customized using the `--z-info-box--left-icon-color` CSS variable.
   * If none of them is set, the icon will be colored using the `--color-primary01-icon` token.
   */
  @Prop()
  leftIcon: IconName;

  /** emitted on close icon click */
  @Event()
  infoBoxClose: EventEmitter<{boxid: string}>;

  private emitInfoBoxClose(): void {
    this.infoBoxClose.emit({boxid: this.boxid});
  }

  render(): HTMLDivElement {
    return (
      <Host id={this.boxid}>
        <div class="main-content">
          {this.leftIcon && (
            <div class="left-icon">
              <z-icon name={this.leftIcon} />
            </div>
          )}

          <slot name="content" />

          {this.isclosable && (
            <button
              class="close-button"
              aria-label={this.closeButtonAriaLabel}
              onClick={() => this.emitInfoBoxClose()}
            >
              <z-icon name="multiply" />
            </button>
          )}
        </div>

        <slot name="additional-content" />
      </Host>
    );
  }
}
