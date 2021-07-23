import { ListItemBean } from "../../../../beans/index.js";
export declare class ZMyzList {
  /** json stringified list data (mutable, optional) */
  inputrawdata?: string;
  /** list item data (mutable, optional)*/
  list?: ListItemBean[];
  componentWillLoad(): void;
  parseinputrawdata(inputrawdata: string): void;
  oninputrawdataChange(newValue: string): void;
  render(): any;
}
