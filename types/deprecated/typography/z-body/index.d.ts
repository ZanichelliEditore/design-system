export declare class ZBody {
  /** Typography level */
  level: 1 | 2 | 3 | 4 | 5;
  /** Font weight variant */
  variant: "regular" | "semibold";
  /** HTML tag to use to wrap slotted content */
  component: string;
  render(): HTMLZTypographyElement;
}
