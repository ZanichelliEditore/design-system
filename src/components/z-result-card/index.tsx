import {Component, Element, Host, Prop, h} from "@stencil/core";

/**
 * @slot tags - slot containing the descriptors for the opera variant
 * @slot volumes - slot containing the volume count to be displayed in the opera variant
 */
@Component({
  tag: "z-result-card",
  styleUrls: ["styles.css"],
  shadow: true,
})
export class ZResultCard {
  @Element() hostElement: HTMLZResultCardElement;

  /** The title of the card. */
  @Prop()
  cardTitle: string;

  /** The subtitle of the card. */
  @Prop()
  cardSubtitle: string;

  /** The authors of the opera. */
  @Prop()
  authors?: string;

  /** The URL of the cover image of the opera. */
  @Prop()
  cover?: string;

  /** [optional] Fallback cover URL. */
  @Prop()
  fallbackCover?: string;

  /** Whether to show a stack of covers to represent multiple books. */
  @Prop()
  hasMultipleCovers = false;

  /** Enables the "info" variant of the card. */
  @Prop()
  isInfoCard = false;

  /** [optional] Set a specific heading level as html tag for the title. */
  @Prop()
  titleHtmlTag?: string;

  /** [optional] Alt text for the cover image. */
  @Prop()
  coverAlt?: string;

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

  private renderTitle = (): HTMLElement => {
    const TitleTag = this.titleHtmlTag || "div";

    return (
      <TitleTag
        class="card-title"
        ref={(el) => (this.titleRef = el as HTMLElement)}
      >
        {this.cardTitle}
      </TitleTag>
    );
  };

  private renderSubtitle = (): HTMLSpanElement => {
    return (
      <span
        class="card-subtitle"
        ref={(el) => (this.subtitleRef = el as HTMLElement)}
      >
        {this.cardSubtitle}
      </span>
    );
  };

  private renderOperaCard = (): HTMLZResultCardElement => {
    return (
      <Host>
        <z-book-cover
          cover={this.cover}
          fallbackCover={this.fallbackCover}
          multiple={this.hasMultipleCovers}
          bordered={true}
          alt={this.coverAlt}
        ></z-book-cover>
        <div class="info-container">
          {this.authors && (
            <span
              class="authors-label"
              ref={(el) => (this.authorsRef = el as HTMLElement)}
            >
              {this.authors}
            </span>
          )}
          {this.renderTitle()}
          {this.renderSubtitle()}
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
      <Host class="info-card">
        <div class="info-icon-container">
          <z-icon
            class="info-icon"
            name="link"
          />
        </div>
        <div class="info-container">
          {this.renderTitle()}
          {this.renderSubtitle()}
        </div>
      </Host>
    );
  };

  render(): HTMLZResultCardElement {
    return this.isInfoCard ? this.renderInfoCard() : this.renderOperaCard();
  }
}
