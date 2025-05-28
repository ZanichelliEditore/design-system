import {Component, Element, h, Host, Prop} from "@stencil/core";

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
  operaTitle: string;

  /**
   * The subtitle of the opera.
   */
  @Prop()
  operaSubtitle: string;

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
  isInfoPage = false;

  private renderOperaCard = (): HTMLZResultCardElement => {
    return (
      <Host
        onClick={() => {
          console.log("Card clicked");
        }}
      >
        <div class={`z-cover-container ${this.hasMultipleCovers ? "has-multiple" : ""}`}>
          <div class="z-cover-stack">
            {this.hasMultipleCovers && (
              <div>
                <div class="z-cover-shadow z-shadow-2"></div>
                <div class="z-cover-shadow z-shadow-1"></div>
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
          <div class="author-label">{this.author}</div>
          <div class="opera-title">{this.operaTitle}</div>
          <div class="opera-subtitle">{this.operaSubtitle}</div>
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
        onClick={() => {
          console.log("Card clicked");
        }}
      >
        <div>Info Card</div>
      </Host>
    );
  };

  render(): HTMLZResultCardElement {
    if (this.isInfoPage) {
      return this.renderInfoCard();
    }

    return this.renderOperaCard();
  }
}
