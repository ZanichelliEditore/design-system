import {Component, Element, Listen, Prop, State, h} from "@stencil/core";
import {BookCardVariant} from "../../beans";
import {mobileBreakpoint} from "../../constants/breakpoints";
import {handleEnterKeydSubmit, randomId} from "../../utils/utils";

/**
 * @slot resources - books resources (extended variant only)
 * @slot header-cta - header CTA (e.g. bookmark icon)
 * @slot tags - card tags
 * @slot footer-cta - footer cta button (search variant only)
 * @cssprop --z-book-card-ribbon-background-color - ribbon backgrund color
 * @cssprop --z-book-card-ribbon-shadow-color - ribbon shadow color
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
   * [optional] Ribbon label
   */
  @Prop()
  ribbon?: string;

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

  @Listen("resize", {target: "window"})
  @Listen("orientationchange", {target: "window"})
  handleResize(): void {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }

  componentWillLoad(): void {
    this.id = `id-${randomId()}`;
    this.handleResize();
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

  private renderCard(): JSX.Element {
    switch (this.variant) {
      case BookCardVariant.EXPANDED:
        return this.isMobile ? this.renderMobileExpandedCard() : this.renderExpandedCard();
      case BookCardVariant.COMPACT:
        return <div />;
      case BookCardVariant.SEARCH:
        return this.renderSearchCard();
    }
  }

  private renderExpandedCard(): JSX.Element {
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

  private renderMobileExpandedCard(): JSX.Element {
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
          <div class={`footer ${this.showResources ? "open" : "close"}`}>
            {this.renderResourcesSlot()}
            {this.renderShowResources()}
          </div>
        )}
      </div>
    );
  }

  private renderSearchCard(): JSX.Element {
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

  private renderCover(): JSX.Element {
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

  private renderVolumeTitle(): null | JSX.Element {
    return this.volumeTitle ? <div class="subtitle">{this.volumeTitle}</div> : null;
  }

  private renderAuthors(): null | JSX.Element {
    return this.authors ? (
      <div
        class="authors"
        aria-description="Autori"
      >
        {this.authors}
      </div>
    ) : null;
  }

  private renderIsbn(): null | JSX.Element {
    if (!this.isbn) {
      return null;
    }

    return (
      <div class="isbn">
        <span
          class="code"
          aria-description="ISBN edizione cartacea"
        >
          {this.isbn}
        </span>
        <span class="label"> (ed. cartacea)</span>
      </div>
    );
  }

  private renderShowResources(): null | JSX.Element {
    return (
      <z-link
        icon={this.showResources ? "chevron-up" : "chevron-down"}
        iconposition="right"
        role="button"
        class="show-resources"
        aria-label={`Risorse del libro ${this.operaTitle}`}
        aria-expanded={this.showResources.toString()}
        aria-haspopup="menu"
        aria-controls={`resources-${this.id}`}
        onClick={() => this.toggleResources()}
        onKeyUp={(e) => handleEnterKeydSubmit(e, this.toggleResources.bind(this))}
      >
        {this.showResources ? "Chiudi" : "Vedi tutto"}
      </z-link>
    );
  }

  private renderTagsSlot(): JSX.Element {
    return (
      <div class="tags">
        <slot name="tags" />
      </div>
    );
  }

  private renderHeaderCtaSlot(): JSX.Element {
    return <slot name="header-cta" />;
  }

  private renderResourcesSlot(): JSX.Element {
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

  private renderFooterCtaSlot(): JSX.Element {
    return (
      <div class="action-container">
        <slot name="footer-cta" />
      </div>
    );
  }

  render(): HTMLZBookCardElement {
    return <article class={`${this.variant}`}>{this.renderCard()}</article>;
  }
}
