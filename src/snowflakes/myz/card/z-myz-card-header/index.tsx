import {Component, Prop, State, h} from "@stencil/core";
import {JSXBase} from "@stencil/core/internal";
import {LicenseType} from "../../../../beans/index";

/**
 * @slot icon - card header icon slot
 */
@Component({
  tag: "z-myz-card-header",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZMyzCardHeader {
  /** volume title */
  @Prop()
  titolo: string;

  /** faded status */
  @Prop()
  faded: boolean;

  /** card graphic variant (optional) */
  @Prop()
  cardtype?: LicenseType;

  @State()
  allowTooltip = false;

  private ellipsis?: HTMLElement;

  private getTitle(): string {
    return this.allowTooltip ? this.titolo : "";
  }

  componentDidLoad(): void {
    if (this.elementHasEllipsis()) {
      this.allowTooltip = true;
    }
  }

  private elementHasEllipsis(): boolean {
    return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
  }

  private retrieveClass(): JSXBase.HTMLAttributes["class"] {
    return {
      real: this.cardtype === LicenseType.REAL,
      trial: this.cardtype === LicenseType.TRIAL,
      temp: this.cardtype === LicenseType.TEMP,
      faded: this.faded,
    };
  }

  render(): HTMLElement {
    return (
      <header class={this.retrieveClass()}>
        <slot name="aria-heading" />
        <span
          class="card-title"
          ref={(el) => (this.ellipsis = el as HTMLElement)}
          title={this.getTitle()}
        >
          {this.titolo}
        </span>
        <slot name="icon" />
      </header>
    );
  }
}
