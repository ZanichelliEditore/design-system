import { EventEmitter } from "../../../stencil-public-runtime";
import { MenuItem } from "../../../beans";
export declare class ZUserDropdown {
  /** logged status flag */
  logged?: boolean;
  /** user full name */
  userfullname?: string;
  /** user email */
  useremail?: string;
  /** Json stringified or array to fill menu dropdown */
  menucontent?: string | MenuItem[];
  /** if inner components colors are inverted, or not, default false */
  useinversecolors?: boolean;
  ismenuopen: boolean;
  ismobile: boolean;
  private linkarray;
  private userbutton;
  private divtoresize;
  constructor();
  componentDidLoad(): void;
  componentWillUpdate(): void;
  componentWillRender(): void;
  setMobileAndDivToResizeWidth(): void;
  /** Emitted on enter or user Button click, returns ismenuopen (bool) */
  userButtonClick: EventEmitter;
  emitUserButtonClick(): void;
  /** Emitted on dropdown menu zlink click, returns event */
  dropdownMenuLinkClick: EventEmitter;
  emitDropdownMenuLinkClick(e: CustomEvent): void;
  handleResize(): void;
  handleOrientationChange(): void;
  handleClickOutside(e: MouseEvent): void;
  handleLoggedButtonClick(): void;
  renderGuestButton(): any;
  renderLoggedButton(): any;
  getZLinkTextcolor(): "white" | "black";
  renderDropdownMenu(): any;
  render(): any;
}
