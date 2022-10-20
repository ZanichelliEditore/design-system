export declare class ZHeading {
  /** Typography level */
  level: 1 | 2 | 3 | 4;
  /** Font weight variant */
  variant: "regular" | "semibold" | "light";
  /** HTML tag to use to wrap slotted content */
  component: string;
  render(): HTMLZTypographyElement;
}
