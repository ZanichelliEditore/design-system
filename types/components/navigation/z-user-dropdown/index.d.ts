import { EventEmitter } from "../../../stencil-public-runtime";
import { MenuItem, ThemeVariantBean } from "../../../beans";
export declare class ZUserDropdown {
  /** logged status flag */
  logged?: boolean;
  /** user full name */
  userfullname?: string;
  /** Json stringified or array to fill menu dropdown */
  menucontent?: string | MenuItem[];
  /** theme variant, default 'dark' */
  theme?: ThemeVariantBean;
  ismenuopen: boolean;
  isMobile: boolean;
  private linkarray;
  private userButton;
  private gosthDiv;
  constructor();
  componentWillLoad(): void;
  componentDidLoad(): void;
  componentWillUpdate(): void;
  componentWillRender(): void;
  setMobileAndGhostDivWidth(): void;
  /** Emitted on enter or user Button click, returns ismenuopen (bool) */
  userButtonClick: EventEmitter;
  emitUserButtonClick(): void;
  /** Emitted on dropdown menu zlink click, returns zlink linkId */
  dropdownMenuLinkClick: EventEmitter;
  emitDropdownMenuLinkClick(e: CustomEvent): void;
  handleResize(): void;
  handleOrientationChange(): void;
  handleClickOutside(e: MouseEvent): void;
  handleToggle(): void;
  handleDropdownLinkClick(e: any): void;
  renderCaretIcon(): any;
  renderGuestButton(): any;
  renderLoggedButton(): any;
  retrieveLiTextColor(): "white" | "black";
  renderGhostDiv(): any;
  renderDropdownMenu(): any;
  render(): any;
}
