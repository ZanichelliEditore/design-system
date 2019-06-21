import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-list-item",
  styleUrls: ["../../global-styles.css", "./styles.css"],
  shadow: true
})
export class ZListItem {
  @Prop() text: string;
  @Prop() link?: string;
  @Prop() hasseparator: Boolean;
  @Prop() icon?: string;
  @Prop() isnestedcomponent: Boolean;

  constructor() {}

  render() {
    return (
      <li>
        <span class={this.hasseparator && "separatedList"}>
          {this.icon && <icon class={this.icon} />}
          {this.link ? (
            <z-link
              url={this.link}
              type={!this.isnestedcomponent && "internal"}
              label={this.text}
            />
          ) : (
            <span class={this.isnestedcomponent && "nestedText"}>
              {this.text}
            </span>
          )}
        </span>
      </li>
    );
  }
}
