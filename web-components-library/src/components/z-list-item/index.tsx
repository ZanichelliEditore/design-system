import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-list-item",
  styleUrls: ["../../global-styles.css", "./styles.css"],
  shadow: true
})
export class ZListItem {
  @Prop() text: String;
  @Prop() link?: string;
  @Prop() separator?: Boolean;
  @Prop() icon?: String;

  constructor() {}

  render() {
    return (
      <li>
        {this.icon && <icon class={this.icon} />}
        {this.link ? (
          <a href={this.link}> {this.text} </a>
        ) : (
          <span>{this.text}</span>
        )}
        {this.separator && <div />}
      </li>
    );
  }
}
