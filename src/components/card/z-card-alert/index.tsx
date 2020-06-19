import { Component, Prop, h } from "@stencil/core";
import { AlertTypesEnum } from "../../../beans/index";

@Component({
  tag: "z-card-alert",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardAlert {
  /** icon name */
  @Prop() iconname: string;
  /** content text */
  @Prop() contenttext: string;
  /** action button text */
  @Prop() actiontext?: string;
  /** alert variant type */
  @Prop() type: AlertTypesEnum;

  render() {
    return (
      // <div class={`card-alert-container ${this.type}`}>
      <z-alert
      // iconname={this.iconname}
      // contenttext={this.contenttext}
      // type={this.type}
      // actiontext={this.actiontext}
      >
        suka
      </z-alert>
      // </div>
    );
  }
}
