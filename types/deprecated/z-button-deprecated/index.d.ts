import { ButtonVariant, ButtonType, ButtonSize } from "../../beans";
/**
 * @slot - button label
 */
export declare class ZButtonDeprecated {
  hostElement: HTMLZButtonDeprecatedElement;
  /** Identifier, should be unique. */
  htmlid?: string;
  /** HTML button name attribute. */
  name?: string;
  /** HTML button disabled attribute. */
  disabled?: boolean;
  /** HTML button type attribute. */
  type?: ButtonType;
  /** Graphical variant: `primary`, `secondary`, `tertiary`, `dark-bg`. Defaults to `primary`. */
  variant?: ButtonVariant;
  /** `z-icon` name to use (optional). */
  icon?: string;
  /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
  size?: ButtonSize;
  /** Reduce button size (deprecated).
   * @deprecated Use `size` prop.
   */
  issmall?: boolean;
  /** Spy to render square button. */
  square?: boolean;
  render(): HTMLSlotElement;
}
