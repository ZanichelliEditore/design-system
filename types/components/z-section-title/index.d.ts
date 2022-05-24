import { ZSectionTitleDividerPosition } from "../../beans";
/**
 * Section title component.
 * An optional secondary title can be put over the primary one.
 *
 * @slot secondary-title - Slot for the secondary title. When present, the divider is always displayed under it,
 * following its width and removing the one for the primary title.
 * @slot primary-title - Slot for the primary title.
 * @cssprop --z-section-title--divider-color - Color of the divider. Use a CSS prop string like `"--red500"`. Default is `"--red500"`.
 */
export declare class ZSectionTitle {
  /**
   * Divider position for the primary title.
   * This prop only works if the secondary title is not set.
   */
  dividerPosition: ZSectionTitleDividerPosition;
  /**
   * Whether the primary title text is uppercase.
   */
  uppercase: boolean;
  host: HTMLElement;
  private hasSecondaryTitle;
  componentWillRender(): void;
  render(): any[];
}
