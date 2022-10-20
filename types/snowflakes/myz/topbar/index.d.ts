import { MenuItem, HeaderUserData } from "../../../beans";
/**
 * @slot editors - top menu editors images bar (only with ismyz prop === true)
 */
export declare class ZMyzTopbar {
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
  private renderLogoDiv;
  private renderIntMenu;
  private renderIntMenuItem;
  private getIntMenuItemTabindex;
  private handleToggleMobileMenuItem;
  private renderMenuItemsData;
  private renderMobileSubMenu;
  private renderSubMenu;
  private renderExtLinksIcons;
  private renderExtMenu;
  private renderLoginDiv;
  private renderLoginButton;
  private renderMobileLoginDiv;
  private renderUserData;
  private renderDesktopHeader;
  private renderMainHeader;
  private renderMobileHeader;
  private renderMobileMenu;
  private renderMobileMenuToggle;
  private renderMobileMenuContent;
  render(): HTMLElement;
}
