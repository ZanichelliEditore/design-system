import { EventEmitter } from "../../../stencil-public-runtime";
import { MenuItem } from "../../../beans";
export declare class ZUserDropdown {
  /** logged status flag */
  logged?: boolean;
  /** user full name */
  userFullName?: string;
  /** user email */
  userEmail?: string;
  /** Json stringified or array to fill menu dropdown */
  menuContent?: string | MenuItem[];
  /** if inner components colors are inverted, or not, default false */
  useInverseColors?: boolean;
  isMenuOpen: boolean;
  isMobile: boolean;
  private linkArray;
  private userButton;
  private divToResize;
  constructor();
  componentDidLoad(): void;
  componentWillUpdate(): void;
  componentWillRender(): void;
  setMobileAndDivToResizeWidth(): void;
  /** Emitted on enter or user Button click, returns isMenuOpen (bool) */
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
