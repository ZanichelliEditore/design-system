import {Component, Element, Host, Prop, h} from "@stencil/core";
import defaultFallbackCover from "../../../assets/images/png/placeholder-cover.png";

@Component({
  tag: "z-result-card",
  styleUrls: ["styles.css", "../../css-components/z-cover/styles.css"],
  shadow: true,
})
export class ZResultCard {
  @Element() hostElement: HTMLZResultCardElement;

  /**
   * The title of the card.
   */
  @Prop()
  cardTitle: string;

  /**
   * The subtitle of the card.
   */
  @Prop()
  cardSubtitle: string;

  /**
   * The authors of the opera.
   */
  @Prop()
  authors?: string;

  /**
   * The URL of the cover image.
   * This is used to display the cover image of the opera.
   */
  @Prop()
  cover?: string;

  /** [optional] Fallback cover URL */
  @Prop()
  fallbackCover?: string;

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

  /**
   * [optional]
   * Use for insert heading when needed.
   */
  @Prop()
  titleHtmlTag?: string;

  private authorsRef: HTMLElement;

  private titleRef: HTMLElement;

  private subtitleRef: HTMLElement;

  private setTooltipTitle(el: HTMLElement): void {
    if (!el) {
      return;
    }

    // Check if element uses line-clamp
    const style = window.getComputedStyle(el);
    const hasLineClamp = style.getPropertyValue("-webkit-line-clamp") !== "none";

    let isTruncated;
    if (hasLineClamp) {
      // For elements with line-clamp, check if content height exceeds line-clamp height
      const lineHeight = parseInt(style.lineHeight);
      const maxLines = parseInt(style.getPropertyValue("-webkit-line-clamp"));
      const maxHeight = lineHeight * maxLines;

      isTruncated = el.scrollHeight > maxHeight;
    } else {
      // Original check for elements without line-clamp
      isTruncated = el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight;
    }

    if (isTruncated) {
      el.setAttribute("title", el.textContent.trim());
    } else {
      el.removeAttribute("title");
    }
  }

  componentDidRender(): void {
    this.setTooltipTitle(this.authorsRef);
    this.setTooltipTitle(this.titleRef);
    this.setTooltipTitle(this.subtitleRef);
  }

  private resizeHandler = (): void => {
    this.setTooltipTitle(this.authorsRef);
    this.setTooltipTitle(this.titleRef);
    this.setTooltipTitle(this.subtitleRef);
  };

  componentDidLoad(): void {
    window.addEventListener("resize", this.resizeHandler);
  }

  disconnectedCallback(): void {
    window.removeEventListener("resize", this.resizeHandler);
  }

  private renderOperaCard = (): HTMLZResultCardElement => {
    const title = this.titleHtmlTag ? `<${this.titleHtmlTag}>${this.cardTitle}</${this.titleHtmlTag}>` : this.cardTitle;

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
            <div class="z-cover-img">
              <img
                src={this.cover || this.fallbackCover || defaultFallbackCover}
                alt=""
                onError={() => {
                  if (this.fallbackCover) {
                    this.cover = this.fallbackCover;
                  } else {
                    this.cover = defaultFallbackCover;
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div class="info-container">
          {this.authors && (
            <span
              class="authors-label"
              ref={(el) => (this.authorsRef = el as HTMLElement)}
            >
              {this.authors}
            </span>
          )}
          <div
            class="card-title"
            ref={(el) => (this.titleRef = el as HTMLElement)}
            innerHTML={title}
          ></div>
          <span
            class="card-subtitle"
            ref={(el) => (this.subtitleRef = el as HTMLElement)}
          >
            {this.cardSubtitle}
          </span>
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
          <span
            class="card-title info-title"
            ref={(el) => (this.titleRef = el as HTMLElement)}
          >
            {this.cardTitle}
          </span>
          <span
            class="card-subtitle info-subtitle"
            ref={(el) => (this.subtitleRef = el as HTMLElement)}
          >
            {this.cardSubtitle}
          </span>
        </div>
      </Host>
    );
  };

  render(): HTMLZResultCardElement {
    return this.isInfoCard ? this.renderInfoCard() : this.renderOperaCard();
  }
}
