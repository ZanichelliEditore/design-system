import { HostElement } from "../../../stencil-public-runtime";
import { ThemeVariantBean } from "../../../beans";
export declare class ZAppTopbar {
  /** theme variant, default 'dark' */
  theme?: ThemeVariantBean;
  /** logged status flag */
  logged?: boolean;
  /** optional hashtag string*/
  hashtag?: string;
  hostElement: HostElement;
  zLinksValues: string[];
  isMobile: boolean;
  handleResize(): void;
  handleOrientationChange(): void;
  componentWillLoad(): void;
  toggleLinkLabels(): void;
  render(): any;
}
