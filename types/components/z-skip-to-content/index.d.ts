import { ThemeVariant, SkipToContentLink } from "../../beans";
/**
 * Component short description.
 */
export declare class ZSkipToContent {
  /** Graphical variant: `dark`, `light`. */
  variant?: ThemeVariant;
  /** Array to fill link into skip-content */
  links: string | SkipToContentLink[];
  visible: boolean;
  visibleLink: string;
  hostElement: HTMLElement;
  handleFocusOutSkipToContent(e: any): void;
  handleFocusSkipToContent(e: any): void;
  componentDidLoad(): void;
  componentWillRender(): void;
  isInSkipToContent(elem: any): boolean;
  getFirstChild(): false | Element;
  showFirstChild(): void;
  handleLinkClick(): void;
  render(): any;
}
