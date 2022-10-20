import { HostElement } from "../../../stencil-public-runtime";
export declare type ZTypographyLevels = "h1" | "h2" | "h3" | "h4" | "b1" | "b2" | "b3" | "b4" | "b5";
export declare class ZTypography {
  hostElement: HTMLZTypographyElement;
  /** Typography level */
  level: ZTypographyLevels;
  /** Font weight variant */
  variant: "regular" | "semibold" | "light";
  /** HTML tag to use to wrap slotted content */
  component: string;
  render(): HostElement;
}
