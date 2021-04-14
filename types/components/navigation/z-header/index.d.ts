import { MenuItem, HeaderUserData, ListItemBean } from "../../../beans";
/**
 * @slot editors - top menu editors images bar (only with ismyz prop === true)
 */
export declare class ZHeader {
  /** data to fill internal navigation links */
  intlinkdata?: string | MenuItem[];
  /** data to fill external navigation links */
  extlinkdata?: string | MenuItem[];
  /** data to fill user dropdown menu (optional) */
  userdata?: string | HeaderUserData;
  /** graphic flag to set myzanichelli style */
  ismyz: boolean;
  /** url to attach to logo (optional) */
  logolink?: string;
  /** alternative logo title text (optional) */
  imagealt?: string;
  /** set current active menu link (optional) */
  activeintlinkid?: string;
  /** set current active sub menu link (optional) */
  activesublinkid?: string;
  /** hide login button if true (optional) */
  hideloginbutton?: boolean;
  activeMenuItem: MenuItem;
  currentMenuItem: MenuItem;
  isMobile: boolean;
  isMenuMobileOpen: boolean;
  private intMenuData;
  private extMenuData;
  private userData;
  private isLogged;
  private element;
  activeIntLinkChange(newValue: string): void;
  handleResize(): void;
  handleZListItemLinkClick(): void;
  handleZListItemClick(): void;
  componentWillLoad(): void;
  renderLogoDiv(): HTMLDivElement;
  renderIntMenu(menuItems: MenuItem[]): HTMLDivElement | undefined;
  renderIntMenuItem(menuItem: MenuItem): HTMLSpanElement;
  getIntMenuItemTabindex(item: MenuItem): number;
  handleToggleMobileMenuItem(elementId: string): void;
  renderMenuItemsData(menuItem: any): HTMLSpanElement | null;
  renderMobileSubMenu(menuItems: ListItemBean[], id?: string): HTMLSpanElement;
  renderSubMenu(menuItem: MenuItem): HTMLDivElement | undefined;
  renderExtMenu(menuItems: MenuItem[]): HTMLDivElement;
  renderLoginDiv(userData: HeaderUserData): HTMLDivElement;
  renderLoginButton(): any;
  renderMobileLoginDiv(userData: HeaderUserData): HTMLDivElement;
  renderUserData(userData: HeaderUserData): HTMLSpanElement;
  renderDesktopHeader(): HTMLHeadingElement;
  renderMainHeader(): HTMLDivElement;
  renderMobileHeader(): HTMLHeadingElement;
  renderMobileMenu(): HTMLDivElement;
  renderMobileMenuToggle(): any;
  renderMobileMenuContent(): HTMLDivElement | null;
  render(): HTMLHeadingElement;
}
