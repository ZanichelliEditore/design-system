import { Component, Prop, h } from "@stencil/core";
import { AlertTypes } from "../../../beans/index";

@Component({
  tag: "z-modal-alert",
  styleUrl: "styles.css",
  shadow: true
})
export class ZModalAlert {
  /** icon name */
  @Prop() iconname: string;
  /** content text */
  @Prop() contenttext: string;
  /** action button text */
  @Prop() actiontext?: string;
  /** alert variant type */
  @Prop() type: AlertTypes;

  render() {
    return (
      <div class={`modal-alert-container ${this.type}`}>
        <z-alert
          iconname={this.iconname}
          contenttext={this.contenttext}
          type={this.type}
          actiontext={this.actiontext}
        />
      </div>
    );
  }
}
