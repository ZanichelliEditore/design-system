import { EventEmitter } from "../../stencil-public-runtime";
import { CardVariant } from "../../beans";
/**
 * ZCard component.
 * @cssprop --aspect-ratio - Cover aspect ratio. Default: `1.62`
 * @cssprop --z-card--border-color - Default: `var(--gray200)`
 * @cssprop --z-card--color-cover-background - Cover color. Default: `var(--color-surface01)`
 * @cssprop --z-card--text-background - Background color for the `text` variant. Default: `var(--color-surface01)`
 * @cssprop --z-card--text-border-radius - Default: `none`
 * @cssprop --z-card--text-border - Configure CSS `border`. Default: `none`
 * @cssprop --z-card--text-padding - Configure CSS `padding`. Default: `none`
 */
export declare class ZCard {
  /**
   * Card variant.
   * Can be one of "text", "border", "shadow", "overlay".
   * Leave it undefined for the default card.
   */
  variant: CardVariant;
  /** Name of the icon to place over the image cover */
  coverIcon: string;
  /** Enable click interactions on the card. Default: false */
  clickable: boolean;
  /** Enable shadow. Default: false. */
  showshadow: boolean;
  host: HTMLZCardElement;
  hasCoverImage: boolean;
  /**
   * Card click event.
   * Fired only if `clickable` is true.
   */
  cardClicked: EventEmitter;
  onClick(ev: MouseEvent): void;
  componentWillLoad(): void;
  /**
   * Template for a card without image cover.
   * A colored background replaces the image and some data is moved over it.
   */
  private renderColorCoverCard;
  /**
   * Template for the content div.
   */
  private renderContentDiv;
  render(): HTMLZCardElement;
}
