import {Component, Prop, h, Host} from "@stencil/core";
import {StatusTagStatus, ThemeVariant} from "../../beans";
import classNames from "classnames";
import {HostElement} from "@stencil/core/internal";

@Component({
  tag: "z-status-tag",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZStatusTag {
  /** [optional] Status tag icon */
  @Prop()
  icon?: string;
  /** [optional] Status tag text */
  @Prop()
  text?: string;
  /** [optional] Hide the text and show it on hover*/
  @Prop()
  expandable?: boolean;
  /** [optional] Status tag color */
  @Prop({reflect: true})
	status?: StatusTagStatus = StatusTagStatus.default;
  /** [optional] Status tag style */
  @Prop()
  variant?: ThemeVariant;

  constructor() {
    if (!this.icon && !this.text) {
      console.warn("z-status-tag must contain at least one prop between icon and text");
    }
  }

  render(): HostElement {
    return (
      <Host
        class={classNames(this.variant, "body-5-sb", {
          expandable: this.expandable && this.icon && this.text,
        })}
      >
        {this.icon && <z-icon name={this.icon} />}
        {this.text && <span>{this.text}</span>}
      </Host>
    );
  }
}
