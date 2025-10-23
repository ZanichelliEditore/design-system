import {Component, Element, Host, Prop, State, h} from "@stencil/core";
import {CardVariant} from "../../beans";

/**
 * ZCard component.
 * The width of the card must be set by its container, following the grid indications of the design.
 *
 * @cssprop --aspect-ratio - Cover aspect ratio. Default: `1.62`
 * @cssprop --z-card--border-color - Default: `var(--gray200)`
 * @cssprop --z-card--color-cover-background - Cover color. Default: `var(--color-surface01)`
 * @cssprop --z-card--text-background - Background color for the `text` variant. Default: `var(--color-surface01)`
 * @cssprop --z-card--text-border-radius - Default: `none`
 * @cssprop --z-card--text-border - Configure CSS `border`. Default: `none`
 * @cssprop --z-card--text-padding - Configure CSS `padding`. Default: `none`
 * @slot cover - Image cover
 * @slot metadata - Metadata
 * @slot title - Using an `<a>` tag here will make the whole card clickable as if the link was wrapping it.
 * @slot text
 * @slot action - Interactive elements to place at the bottom of the card. To put non-interactive elements here when using an `<a>` tag in the `title` slot, and use this as a sort of "footer", set `z-index: 0` on each of those elements.
 */
@Component({
  tag: "z-card",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZCard {
  /**
   * Card variant.
   * Can be one of "text", "border", "shadow", "overlay".
   * Leave it undefined for the default card.
   */
  @Prop({reflect: true})
  variant: CardVariant;

  /** Name of the icon to place over the image cover */
  @Prop()
  coverIcon: string;

  /** Enable shadow. Default: false. */
  @Prop({reflect: true})
  showShadow = false;

  /**
   * Enable "clickable" styles like hover background and cursor, focus shadow on the whole card, etc.
   * Always set this to `true` when putting an `<a>` tag in the `title` slot.
   */
  @Prop({reflect: true})
  clickable = false;

  @Element() host: HTMLZCardElement;

  @State()
  hasCoverImage: boolean;

  componentWillLoad(): void {
    this.hasCoverImage = this.host.querySelector('[slot="cover"]') !== null;
  }

  /**
   * Template for a card without image cover.
   * A colored background replaces the image and some data is moved over it.
   */
  private renderColorCoverCard(): HTMLDivElement[] {
    return [
      <div class="cover-container">
        <div class="color-cover">
          <div class="cover-content">
            <slot name="metadata"></slot>
            <slot name="title"></slot>
          </div>
        </div>
      </div>,
      <div class="content">
        <slot name="text"></slot>
        <div class="actions">
          <slot name="action"></slot>
        </div>
      </div>,
    ];
  }

  /**
   * Template for the content.
   */
  private renderContent(): HTMLDivElement {
    return (
      <div class="content">
        <slot name="metadata"></slot>
        <slot name="title"></slot>
        <slot name="text"></slot>
        <div class="actions">
          <slot name="action"></slot>
        </div>
      </div>
    );
  }

  render(): HTMLZCardElement {
    if (this.variant === CardVariant.TEXT) {
      return <Host>{this.renderContent()}</Host>;
    }

    if (this.variant === CardVariant.OVERLAY || this.hasCoverImage) {
      return (
        <Host>
          <div class="cover-container">
            {this.hasCoverImage && [
              <slot name="cover"></slot>,
              this.variant !== CardVariant.OVERLAY && this.coverIcon && <z-icon name={this.coverIcon}></z-icon>,
            ]}
            {!this.hasCoverImage && <div class="color-cover"></div>}
          </div>
          {this.renderContent()}
        </Host>
      );
    }

    return <Host>{this.renderColorCoverCard()}</Host>;
  }
}
