import {Component, Element, Prop, State, h} from "@stencil/core";
import {BookCardVariant} from "../../beans";
import {mobileBreakpoint} from "../../constants/breakpoints";
import {randomId} from "../../utils/utils";

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
  tag: "z-book-card",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZBookCard {
  @Element() hostElement: HTMLZBookCardElement;

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
   * [optional] Ribbon label - expanded and search variant only
   */
  @Prop()
  ribbon?: string;

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

  private id: string;

  private moveFocusToResources = false;

  private resourcesWrapper: HTMLDivElement;

  componentWillLoad(): void {
    this.id = `id-${randomId()}`;

    const mobileMediaQuery = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`);
    this.isMobile = mobileMediaQuery.matches;
    mobileMediaQuery.addEventListener("change", (mql) => {
      this.isMobile = mql.matches;
    });
  }

  componentWillRender(): void {
    this.handleResources();
  }

  componentDidRender(): void {
    if (this.moveFocusToResources) {
      this.resourcesWrapper.focus();
      this.moveFocusToResources = false;
    }
  }

  private handleResources(): void {
    if (this.variant !== BookCardVariant.EXPANDED || !this.isMobile) {
      return;
    }
    this.hasResources = this.hostElement.querySelectorAll("[slot=resources]")?.length > 0;
  }

  private toggleResources(): void {
    this.showResources = !this.showResources;
    if (this.showResources) {
      this.moveFocusToResources = true;
    }
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
            {this.renderResourcesSlot()}
            {this.renderShowResources()}
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
        {this.ribbon && this.variant !== BookCardVariant.COMPACT && (
          <div class="ribbon">
            <span>{this.ribbon}</span>
          </div>
        )}
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
    );
  }

  private renderOperaTitle(): JSX.Element {
    return this.operaTitleTag ? (
      <this.operaTitleTag class="title">{this.operaTitle}</this.operaTitleTag>
    ) : (
      <div class="title">{this.operaTitle}</div>
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
          aria-description="ISBN edizione cartacea"
        >
          {this.isbn}
        </span>
        <span class="label"> (ed. cartacea)</span>
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
        tabIndex={this.showResources ? 0 : -1}
        ref={(el) => (this.resourcesWrapper = el as HTMLDivElement)}
      >
        <slot name="resources" />
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

  render(): HTMLZBookCardElement {
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
