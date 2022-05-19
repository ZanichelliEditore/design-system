import { ButtonVariantBean, ButtonSizeEnum } from "../../../beans";
/**
 * @slot - button label
 */
export declare class ZButton {
  hostElement: HTMLElement;
  /** Identifier, should be unique. */
  htmlid?: string;
  /** HTML button name attribute. */
  name?: string;
  /** HTML button disabled attribute. */
  disabled?: boolean;
  /** HTML button type attribute. */
  type?: HTMLButtonElement["type"];
  /** Graphical variant: `primary`, `secondary`, `tertiary`, `dark-bg`. Defaults to `primary`. */
  variant?: ButtonVariantBean;
  /** `z-icon` name to use (optional). */
  icon?: string;
  /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
  size?: ButtonSizeEnum;
  /** Reduce button size (deprecated).
   * @deprecated Use `size` prop.
   */
  issmall?: boolean;
  /** Spy to render square button. */
  square?: boolean;
  render(): any;
}
