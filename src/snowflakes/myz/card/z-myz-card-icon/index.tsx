import {Component, Prop, h} from "@stencil/core";

@Component({
  tag: "z-myz-card-icon",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZMyzCardIcon {
  /** icon name */
  @Prop()
  icon: string;

  /** disabled status flag */
  @Prop()
  isdisabled = false;

  /** description of the icon*/
  @Prop()
  ariaLabel: string = "";

  render(): HTMLButtonElement {
    return (
      <button disabled={this.isdisabled} aria-label={this.ariaLabel}>
        <span>
          <z-icon name={this.icon} width={16} height={16} />
        </span>
      </button>
    );
  }
}
