import {Component, Prop, h, Element, State, Listen, Event, EventEmitter, Host} from "@stencil/core";
import {CardVariant} from "../../beans";

/**
 * ZCard component.
 * @cssprop --aspect-ratio - Cover aspect ratio. Default: `1.62`
 * @cssprop --z-card--border-color - Default: `var(--gray200)`
 * @cssprop --z-card--color-cover-background - Cover color. Default: `var(--color-surface01)`
 * @cssprop --z-card--text-background - Background color for the `text` variant. Default: `var(--color-surface01)`
 * @cssprop --z-card--text-border-radius - Default: `none`
 * @cssprop --z-card--text-border - Configure CSS `border`. Default: `none`
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

  /** Enable click interactions on the card. Default: false */
  @Prop({reflect: true})
  clickable = false;

  /** Enable shadow. Default: false. */
  @Prop({reflect: true})
  showshadow = false;

  @Element() host: HTMLZCardElement;

  @State()
  hasCoverImage: boolean;

  /**
   * Card click event.
   * Fired only if `clickable` is true.
   */
  @Event()
  cardClicked: EventEmitter;

  @Listen("click")
  onClick(ev: MouseEvent): void {
    // Do nothing for clicks on actions.
    if ((ev.target as HTMLElement).closest("[slot=action]")) {
      return;
    }

    if (!this.clickable) {
      ev.preventDefault();
      ev.stopPropagation();

      return;
    }

    this.cardClicked.emit();
  }

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
   * Template for the content div.
   */
  private renderContentDiv(): HTMLDivElement {
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
      return <Host>{this.renderContentDiv()}</Host>;
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
          {this.renderContentDiv()}
        </Host>
      );
    }

    return <Host>{this.renderColorCoverCard()}</Host>;
  }
}
