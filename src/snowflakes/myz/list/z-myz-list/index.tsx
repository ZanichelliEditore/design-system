import {Component, Prop, h, Watch} from "@stencil/core";
import {ListItemBean} from "../../../../beans/index.js";

@Component({
  tag: "z-myz-list",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZMyzList {
  /** json stringified list data (mutable, optional) */
  @Prop({mutable: true}) inputrawdata?: string;
  /** list item data (mutable, optional)*/
  @Prop({mutable: true}) list?: ListItemBean[];

  componentWillLoad(): void {
    if (this.inputrawdata) {
      this.parseinputrawdata(this.inputrawdata);
    }
  }

  parseinputrawdata(inputrawdata: string): void {
    this.list = [...JSON.parse(inputrawdata)];
  }

  @Watch("inputrawdata") //this will run everytime values are changed
  oninputrawdataChange(newValue: string): void {
    this.parseinputrawdata(newValue);
  }

  render(): HTMLUListElement {
    const lastElem = this.list ? this.list.length - 1 : -1;
    return (
      <ul>
        {this.list &&
          this.list.map((bean, i) => (
            <z-myz-list-item
              listitemid={bean.listitemid}
              text={bean.text}
              link={bean.link}
              linktarget={bean.linktarget}
              icon={bean.icon}
              underlined={lastElem != i}
            />
          ))}
      </ul>
    );
  }
}
