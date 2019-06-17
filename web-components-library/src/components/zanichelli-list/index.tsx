import { Component, Prop, h } from "@stencil/core";
import { ListItemBean } from "../../beans/index.js";

@Component({
  tag: "zanichelli-list",
  styleUrls: ["../../global-styles.css", "./styles.css"],
  shadow: true
})
export class ZanichelliList {
  @Prop() inputrawdata?: string;
  @Prop() getnodes?: Function;
  list: ListItemBean[];

  constructor() {
    // this.list = JSON.parse(this.inputrawdata);
    this.updateListItemBean();
  }

  updateListItemBean() {
    this.list = this.getnodes();
  }

  render() {
    return (
      <ul>
        {this.list.map(bean => (
          <list-item
            text={bean.text}
            link={bean.link}
            icon={bean.icon}
            innernode={bean.innernode}
          />
        ))}
      </ul>
    );
  }
}
