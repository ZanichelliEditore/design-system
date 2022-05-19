import { EventEmitter } from '../../stencil-public-runtime';
import { CardVariants } from '../../beans';
export declare class ZCard {
  /**
   * Card variant.
   * Can be one of "text", "border", "shadow", "overlay".
   * Leave it undefined for the default card.
   */
  variant: CardVariants;
  /** Name of the icon to place over the image cover */
  coverIcon: string;
  /** Enable click interactions on the card. Default: false */
  clickable: boolean;
  /** Enable shadow. Default: false. */
  showshadow: boolean;
  host: HTMLElement;
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
  render(): any;
}
