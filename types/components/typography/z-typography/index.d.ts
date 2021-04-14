export declare type ZTypographyLevels = "h1" | "h2" | "h3" | "h4" | "b1" | "b2" | "b3" | "b4" | "b5";
export declare class ZTypography {
  component: string;
  hostElement: HTMLElement;
  variant: "regular" | "semibold" | "light";
  level: ZTypographyLevels;
  render(): any;
}
