import {Component, Element, Host, Prop, h} from "@stencil/core";

@Component({
  tag: "z-result-card",
  styleUrls: ["styles.css", "../../css-components/z-cover/styles.css"],
  shadow: true,
})
export class ZResultCard {
  @Element() hostElement: HTMLZResultCardElement;

  /**
   * The author of the opera.
   */
  @Prop()
  author?: string;

  /**
   * The title of the opera.
   */
  @Prop()
  cardTitle: string;

  /**
   * The subtitle of the opera.
   */
  @Prop()
  cardSubtitle: string;

  /**
   * Tags associated with the opera.
   * This is a string array that can be used to display tags in the component.
   */
  @Prop()
  operaTags?: string[];

  /**
   * The label for the volumes.
   * This is used to display the number of volumes or a related message.
   */
  @Prop()
  volumesLabel?: string;

  /**
   * The URL of the cover image.
   * This is used to display the cover image of the opera.
   */
  @Prop()
  cover?: string;

  /**
   * Indicates whether the card has multiple covers.
   * This is used to apply specific styles when there are multiple covers.
   */
  @Prop()
  hasMultipleCovers = false;

  /**
   * Indicates whether the card is an info page.
   * This can be used to apply specific styles or behaviors for info pages.
   */
  @Prop()
  isInfoCard = false;

  private renderOperaCard = (): HTMLZResultCardElement => {
    return (
      <Host tabIndex={0}>
        <div class={`z-cover-container ${this.hasMultipleCovers ? "has-multiple" : ""}`}>
          <div class="z-cover-stack">
            {this.hasMultipleCovers && (
              <div>
                <div class="z-cover-shadow z-shadow-2" />
                <div class="z-cover-shadow z-shadow-1" />
              </div>
            )}
            <img
              src={this.cover}
              alt="Book Cover"
              class="z-cover-img"
            />
          </div>
        </div>
        <div class="info-container">
          {this.author && <div class="author-label">{this.author}</div>}
          <div class="card-title">{this.cardTitle}</div>
          <div class="card-subtitle">{this.cardSubtitle}</div>
          <div class="tags-container">
            <slot name="tags"></slot>
          </div>
          <div class="volumes-label">
            <slot name="volumes"></slot>
          </div>
        </div>
      </Host>
    );
  };

  private renderInfoCard = (): HTMLZResultCardElement => {
    return (
      <Host
        tabIndex={0}
        class="info-card"
      >
        <div class="info-icon-column">
          <div class="info-icon-container">
            <z-icon
              class="info-icon"
              name="link"
              width={18}
              height={18}
            />
          </div>
        </div>
        <div class="info-container">
          <div class="card-title info-title">{this.cardTitle}</div>
          <div class="card-subtitle info-subtitle">{this.cardSubtitle}</div>
        </div>
      </Host>
    );
  };

  render(): HTMLZResultCardElement {
    if (this.isInfoCard) {
      return this.renderInfoCard();
    }

    return this.renderOperaCard();
  }
}
