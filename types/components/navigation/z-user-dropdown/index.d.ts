import { EventEmitter } from "../../../stencil-public-runtime";
import { HostElement } from "../../../stencil-public-runtime";
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
  private setMobileAndDivToResizeWidth;
  /** Emitted on enter or user Button click, returns isMenuOpen (bool) */
  userButtonClick: EventEmitter;
  private emitUserButtonClick;
  /** Emitted on dropdown menu zlink click, returns event */
  dropdownMenuLinkClick: EventEmitter;
  private emitDropdownMenuLinkClick;
  handleResize(): void;
  handleOrientationChange(): void;
  handleClickOutside(e: MouseEvent): void;
  private handleLoggedButtonClick;
  private renderGuestButton;
  private renderLoggedButton;
  private getZLinkTextcolor;
  private renderDropdownMenu;
  render(): HostElement;
}
