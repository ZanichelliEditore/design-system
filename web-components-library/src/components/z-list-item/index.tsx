import { Component, Prop, h } from "@stencil/core";
import { ListItemBean } from "../../beans/index.js";

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
        {this.separator && <div />}
        {this.innernode.length > 0 && (
          <ul>
            {this.innernode.map(bean => (
              <z-list-item
                text={bean.text}
                link={bean.link}
                icon={bean.icon}
                separator={bean.separator}
                innernode={bean.innernode}
              />
            ))}
          </ul>
        )}
      </li>
    );
  }
}
