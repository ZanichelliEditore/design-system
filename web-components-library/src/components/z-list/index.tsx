import { Component, Prop, h } from "@stencil/core";
import { ListItemBean } from "../../beans/index.js";

@Component({
  tag: "z-list",
  styleUrls: ["../../global-styles.css", "./styles.css"],
  shadow: true
})
export class ZList {
  @Prop() inputrawdata?: string;
  @Prop() getnodes?: Function;
  @Prop({ mutable: true }) list?: ListItemBean[];

  componentDidLoad() {
    if (this.inputrawdata) {
      console.log(this.inputrawdata);
      this.list = JSON.parse(this.inputrawdata);
    }
  }

  updateListItemBean() {
    this.list = this.getnodes();
  }

  render() {
    if (this.getnodes) {
      this.updateListItemBean();
    }
    return (
      <ul>
        {this.list.map(bean => (
          <z-list-item
            text={bean.text}
            link={bean.link}
            icon={bean.icon}
            separator={bean.separator}
            innernode={bean.innernode}
          />
        ))}
      </ul>
    );
  }
}
