import { Component, Prop, h, Watch } from "@stencil/core";
import { ListItemBean } from "../../beans/index.js";

@Component({
  tag: "z-list",
  styleUrls: ["../../global-styles.css", "./styles.css"],
  shadow: true
})
export class ZList {
  @Prop() inputrawdata?: string;
  @Prop({ mutable: true }) list?: ListItemBean[];

  componentDidLoad() {
    if (this.inputrawdata) {
      this.parseinputrawdata(this.inputrawdata);
    }
  }

  parseinputrawdata(inputrawdata: string) {
    this.list = [...JSON.parse(inputrawdata)];
  }

  @Watch("inputrawdata") //this will run everytime values are changed
  oninputrawdataChange(newValue: string) {
    this.parseinputrawdata(newValue);
  }

  render() {
    return (
      <ul>
        {this.list &&
          this.list.map(bean => (
            <z-list-item text={bean.text} link={bean.link} icon={bean.icon} />
          ))}
      </ul>
    );
  }
}
