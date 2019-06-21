import { Component, Prop, h } from "@stencil/core";
import { ListItemBean } from "../../beans/index.js";

@Component({
  tag: "z-list",
  styleUrls: ["../../global-styles.css", "./styles.css"],
  shadow: true
})
export class ZList {
  @Prop() inputrawdata?: string;
  @Prop({ mutable: true }) list?: ListItemBean[];
  @Prop() hasseparator?: Boolean;
  @Prop() isnestedcomponent?: Boolean;

  componentDidLoad() {
    if (this.inputrawdata) {
      console.log(this.inputrawdata);
      this.list = JSON.parse(this.inputrawdata);
    }
    console.log(this.hasseparator);
  }

  render() {
    return (
      <ul>
        {this.list.map(bean => (
          <z-list-item
            text={bean.text}
            link={bean.link}
            icon={bean.icon}
            hasseparator={this.hasseparator ? true : false}
            isnestedcomponent={this.isnestedcomponent ? true : false}
          />
        ))}
      </ul>
    );
  }
}
