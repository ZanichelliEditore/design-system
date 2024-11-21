import {Component, Element, Event, EventEmitter, Prop, State, h} from "@stencil/core";
import {BookCardVariant} from "../../../beans";
import {Breakpoints} from "../../../constants/breakpoints";
import {randomId} from "../../../utils/utils";

/**
 * @slot resources - books resources (extended variant only)
 * @slot header-cta - header CTA (e.g. bookmark icon - extended and search variant only)
 * @slot tags - card tags (extended and search variant only)
 * @slot footer-cta - footer cta button (search and compact variant only)
 * @cssprop --z-book-card-ribbon-background-color - ribbon backgrund color
 * @cssprop --z-book-card-ribbon-shadow-color - ribbon shadow color
 * @cssprop --z-book-card-compact-width - compact card custom width
 * @cssprop --z-book-card-compact-height - compact card custom height
 */
@Component({
  tag: "z-book-card-deprecated",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZBookCardDeprecated {
  @Element() hostElement: HTMLZBookCardDeprecatedElement;

  /**
   * Card variant: expanded, compact, search
   */
  @Prop()
  variant: BookCardVariant;

  /**
   * Cover URL
   */
  @Prop()
  cover: string;

  /**
   * Card main title
   */
  @Prop()
  operaTitle: string;

  /**
   * [optional] Card subtitle
   */
  @Prop()
  volumeTitle?: string;

  /**
   * [optional] Authors
   */
  @Prop()
  authors?: string;

  /**
   * [optional] Main ISBN
   */
  @Prop()
  isbn?: string;

  /**
   * [optional] ISBN label
   */
  @Prop()
  isbnLabel = "";

  /**
   * [optional] Ribbon label - expanded and search variant only
   */
  @Prop()
  ribbon?: string;

  /**
   * [optional] Ribbon icon - expanded and search variant only
   */
  @Prop()
  ribbonIcon?: string;

  /**
   * [optional] Ribbon interactive - expanded and search variant only
   */
  @Prop()
  ribbonInteractive?: boolean;

  /**
   * [optional] Borderless card - compact variant only
   */
  @Prop()
  borderless?: boolean;

  /**
   * [optional] Fallback cover URL
   */
  @Prop()
  fallbackCover?: string;

  /**
   * [optional] [accessibility] Card title HTML tag
   */
  @Prop()
  operaTitleTag?: string;

  @State()
  isMobile = false;

  @State()
  hasResources = false;

  @State()
  showResources = false;

  /** click on interactive ribbon */
  @Event()
  ribbonClick: EventEmitter;

  private emitRibbonClick(): void {
    this.ribbonClick.emit();
  }

  private id: string;

  componentWillLoad(): void {
    this.id = `id-${randomId()}`;

    const mobileMediaQuery = window.matchMedia(`(max-width: ${Breakpoints.MOBILE}px)`);
    this.isMobile = mobileMediaQuery.matches;
    mobileMediaQuery.onchange = (mql) => (this.isMobile = mql.matches);
  }

  componentDidLoad(): void {
    this.handleResources();
  }

  private handleResources(): void {
    if (this.variant !== BookCardVariant.EXPANDED || !this.isMobile) {
      return;
    }
    this.hasResources = this.hostElement.querySelectorAll("[slot=resources]")?.length > 0;
  }

  private toggleResources(): void {
    this.showResources = !this.showResources;
  }

  private renderCard(): HTMLDivElement {
    switch (this.variant) {
      case BookCardVariant.EXPANDED:
        return this.isMobile ? this.renderMobileExpandedCard() : this.renderExpandedCard();
      case BookCardVariant.COMPACT:
        return this.renderCompactCard();
      case BookCardVariant.SEARCH:
        return this.renderSearchCard();
    }
  }

  private renderExpandedCard(): HTMLDivElement {
    return (
      <div class="wrapper">
        {this.renderCover()}
        <div class="content">
          <div class="top">
            <div class="info">
              <div class="left">
                {this.renderAuthors()}
                {this.renderOperaTitle()}
                {this.renderVolumeTitle()}
                {this.renderIsbn()}
              </div>
              <div class="right">{this.renderHeaderCtaSlot()}</div>
            </div>
            {this.renderTagsSlot()}
          </div>
          <div class="bottom">{this.renderResourcesSlot()}</div>
        </div>
      </div>
    );
  }

  private renderMobileExpandedCard(): HTMLDivElement {
    return (
      <div class="wrapper">
        <div class="header">
          {this.renderOperaTitle()}
          {this.renderHeaderCtaSlot()}
        </div>
        {this.renderCover()}
        <div class="content">
          {this.renderTagsSlot()}
          {this.renderAuthors()}
          {this.renderVolumeTitle()}
          {this.renderIsbn()}
        </div>
        {this.hasResources && (
          <div
            class={{
              footer: true,
              open: this.showResources,
              close: !this.showResources,
            }}
          >
            {!this.showResources && this.renderShowResources()}
            {this.renderResourcesSlot()}
            {this.showResources && this.renderShowResources()}
          </div>
        )}
      </div>
    );
  }

  private renderSearchCard(): HTMLDivElement {
    return (
      <div class="wrapper-container">
        <div class="wrapper">
          <div class="header">
            {this.renderOperaTitle()}
            {this.renderHeaderCtaSlot()}
          </div>
          {this.renderCover()}
          <div class="content">
            {this.renderTagsSlot()}
            {this.renderAuthors()}
            {this.renderVolumeTitle()}
            {this.renderIsbn()}
          </div>
        </div>
        {this.renderFooterCtaSlot()}
      </div>
    );
  }

  private renderCompactCard(): HTMLDivElement {
    return (
      <div class="wrapper">
        {this.renderCover()}
        <div class="content">
          {this.renderAuthors()}
          {this.renderOperaTitle()}
          {this.renderVolumeTitle()}
          {this.renderIsbn()}
        </div>
        {this.renderFooterCtaSlot()}
      </div>
    );
  }

  private renderCover(): HTMLDivElement {
    return (
      <div class="cover">
        {this.ribbon && this.variant !== BookCardVariant.COMPACT && this.renderRibbon()}
        <div class="img-wrapper">
          <img
            src={this.cover}
            onError={() => {
              if (this.fallbackCover) {
                this.cover = this.fallbackCover;
              }
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    );
  }

  private renderRibbon(): HTMLElement {
    const content = [
      this.ribbonIcon && (
        <z-icon
          name={this.ribbonIcon}
          width={16}
          height={16}
          fill={"color-inverse-icon"}
        />
      ),
      <span>{this.ribbon}</span>,
    ];

    return this.ribbonInteractive ? (
      <button
        class="ribbon interactive"
        onClick={() => this.emitRibbonClick()}
      >
        {content}
      </button>
    ) : (
      <div class="ribbon">{content}</div>
    );
  }

  private renderOperaTitle(): HTMLDivElement {
    const title = this.operaTitleTag
      ? `<${this.operaTitleTag}>${this.operaTitle}</${this.operaTitleTag}>`
      : this.operaTitle;

    return (
      <div
        class="title"
        innerHTML={title}
      />
    );
  }

  private renderVolumeTitle(): null | HTMLDivElement {
    return this.volumeTitle ? <div class="subtitle">{this.volumeTitle}</div> : null;
  }

  private renderAuthors(): null | HTMLDivElement {
    return this.authors ? (
      <div
        class="authors"
        aria-description="Autori"
      >
        {this.authors}
      </div>
    ) : null;
  }

  private renderIsbn(): null | HTMLDivElement {
    return this.isbn ? (
      <div class="isbn">
        <span
          class="code"
          aria-description={`ISBN ${this.isbnLabel}`}
        >
          {this.isbn}
        </span>
        {this.isbnLabel ? <span class="label"> {this.isbnLabel}</span> : null}
      </div>
    ) : null;
  }

  private renderShowResources(): HTMLButtonElement {
    return (
      <button
        class="show-resources"
        aria-label={`Risorse del libro ${this.operaTitle}`}
        aria-expanded={this.showResources.toString()}
        aria-controls={`resources-${this.id}`}
        onClick={() => this.toggleResources()}
      >
        {this.showResources ? "Chiudi" : "Vedi tutto"}
        <z-icon name={this.showResources ? "chevron-up" : "chevron-down"} />
      </button>
    );
  }

  private renderTagsSlot(): HTMLDivElement {
    return (
      <div class="tags">
        <slot name="tags" />
      </div>
    );
  }

  private renderHeaderCtaSlot(): HTMLSlotElement {
    return <slot name="header-cta" />;
  }

  private renderResourcesSlot(): HTMLDivElement {
    return (
      <div
        id={`resources-${this.id}`}
        class="resources"
      >
        <slot
          name="resources"
          onSlotchange={() => this.handleResources()}
        />
      </div>
    );
  }

  private renderFooterCtaSlot(): HTMLDivElement {
    return (
      <div class="action-container">
        <slot name="footer-cta" />
      </div>
    );
  }

  render(): HTMLZBookCardDeprecatedElement {
    return (
      <article
        class={{
          [this.variant]: true,
          borderless: !!this.borderless,
        }}
      >
        {this.renderCard()}
      </article>
    );
  }
}
