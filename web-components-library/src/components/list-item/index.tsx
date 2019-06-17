import { Component, Prop, h } from "@stencil/core";
import { ListItemBean } from "../../beans/index.js";

@Component({
  tag: "list-item",
  styleUrls: ["../../global-styles.css", "./styles.css"],
  shadow: true
})
export class ListItem {
  @Prop() text: String;
  @Prop() link?: string;
  @Prop() icon?: String;
  @Prop() innernode?: ListItemBean[];

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
        {this.innernode &&
          this.innernode.map(bean => (
            <list-item
              text={bean.text}
              link={bean.link}
              icon={bean.icon}
              innernode={bean.innernode}
            />
          ))}
      </li>
    );
  }
}
