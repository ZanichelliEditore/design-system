import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "list-item",
  styleUrl: "../../global-styles.css"
})
export class ListItem {
  @Prop() text: String;
  @Prop() isLink: Boolean;
  @Prop() icon?: String;
  @Prop() isLeaf: Boolean;

  render() {
    return (
      <li>
        {this.icon && <icon class={this.icon} />} {this.text}
      </li>
    );
  }
}
