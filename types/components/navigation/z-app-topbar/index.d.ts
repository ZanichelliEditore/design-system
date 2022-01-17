import { MenuItem, ThemeVariant } from "../../../beans";
export declare class ZAppTopbar {
  /** theme variant, default 'dark' */
  theme?: ThemeVariant;
  /** maximum width of topbar content */
  contentMaxWidth?: number;
  /** JSON string or MenuItem array to define topbar links */
  topbarContent?: string | MenuItem[];
  /** link URL used by z-logo */
  logoLink?: string;
  /** add app-switcher */
  showAppSwitcher: boolean;
  isMobile: boolean;
  private topbarLinks;
  handleResize(): void;
  componentWillLoad(): void;
  componentWillRender(): void;
  renderTopbarLinks(): any[];
  render(): any;
}
