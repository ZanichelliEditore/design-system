import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-list-item",
  styleUrls: ["../../global-styles.css", "./styles.css"],
  shadow: true
})
export class ZListItem {
  @Prop() text: string;
  @Prop() link?: string;
  @Prop() separator?: Boolean;
  @Prop() icon?: string;

  constructor() {}

  render() {
    return (
      <li>
        <span>
          {this.icon && <icon class={this.icon} />}
          {this.link ? (
            <z-link url={this.link} type="internal" label={this.text} />
          ) : (
            <span>{this.text}</span>
          )}
        </span>
      </li>
    );
  }
}
