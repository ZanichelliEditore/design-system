import { MenuItem } from "../../../beans/index";
export declare class ZMenuDropdown {
  /** user name text */
  nomeutente: string;
  /** Json stringified or array to fill menu dropdown */
  menucontent: string | MenuItem[];
  /** unique button id */
  buttonid: string;
  ismenuopen: boolean;
  private linkarray;
  constructor();
  componentWillRender(): void;
  private renderMenuOpen;
  private renderButtonMenu;
  private retriveMenuClass;
  private handleToggle;
  private handleFocus;
  render(): HTMLAnchorElement;
}
