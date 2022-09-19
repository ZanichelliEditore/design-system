import {Component, Prop, h, Element, State, Listen, Event, EventEmitter, Host} from "@stencil/core";
import {HostElement} from "@stencil/core/internal";
import {CardVariants} from "../../beans";

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
  variant: CardVariants;

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
    if ((ev.target as HTMLElement).getAttribute("slot") === "action") {
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

  render(): HostElement {
    if (this.variant === CardVariants.text) {
      return <Host>{this.renderContentDiv()}</Host>;
    }

    if (this.variant === CardVariants.overlay || this.hasCoverImage) {
      return (
        <Host>
          <div class="cover-container">
            {this.hasCoverImage && [
              <slot name="cover"></slot>,
              this.variant !== CardVariants.overlay && this.coverIcon && <z-icon name={this.coverIcon}></z-icon>,
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
