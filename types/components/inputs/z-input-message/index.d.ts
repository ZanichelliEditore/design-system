import { InputStatusBean } from "../../../beans";
export declare class ZInputMessage {
  /** input helper message */
  message: string;
  /** input status (optional) */
  status?: InputStatusBean;
  private statusIcons;
  renderMsgClassName(): string;
  render(): any;
}
