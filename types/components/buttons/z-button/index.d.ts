import { ButtonVariantBean, ButtonSizeEnum } from "../../../beans";
/**
 * @slot - button label
 */
export declare class ZButton {
  hostElement: HTMLElement;
  /** defines a string value that labels an interactive element, used for accessibility. */
  ariaLabel?: string;
  /** HTML a href attribute. If it is set, it renders an HTML a tag. */
  href?: string;
  /** HTML a target attribute. */
  target?: string;
  /** Identifier, should be unique. */
  htmlid?: string;
  /** HTML button name attribute. */
  name?: string;
  /** HTML button disabled attribute. */
  disabled?: boolean;
  /** HTML button type attribute. */
  type?: HTMLButtonElement["type"];
  /** Graphical variant: `primary`, `secondary`, `tertiary`. Defaults to `primary`. */
  variant?: ButtonVariantBean;
  /** `z-icon` name to use (optional). */
  icon?: string;
  /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
  size?: ButtonSizeEnum;
  getAttributes(): {
    id: string;
    class: string;
    "aria-label": string;
  };
  componentDidLoad(): void;
  componentWillRender(): void;
  render(): any;
}
