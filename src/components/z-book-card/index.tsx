import {Component, Element, Listen, Prop, State, h} from "@stencil/core";
import {BookCardVariant} from "../../beans";
import {mobileBreakpoint} from "../../constants/breakpoints";
import {handleEnterKeydSubmit, randomId} from "../../utils/utils";

/**
 * Component short description.
 */
@Component({
  tag: "z-book-card",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZBookCard {
  @Element()
  hostElement: HTMLZBookCardElement;

  /**
   * Property description.
   */
  @Prop()
  variant: BookCardVariant;
  @Prop()
  cover: string;
  @Prop()
  operaTitle: string;
  @Prop()
  volumeTitle?: string;
  @Prop()
  authors?: string;
  @Prop()
  isbn?: string;
  @Prop()
  ribbon?: string;
  @Prop()
  operaTitleTag?: string;

  @State()
  isMobile: boolean = false;
  @State()
  hasResources: boolean = false;
  @State()
  showResources: boolean = false;

  private id: string;
  private moveFocusToResources: boolean = false;
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

  handleResources(): void {
    if (this.variant !== BookCardVariant.EXPANDED || !this.isMobile) return;
    this.hasResources = this.hostElement.querySelectorAll("[slot=resources]")?.length > 0;
  }

  toggleResources(): void {
    this.showResources = !this.showResources;
    if (this.showResources) this.moveFocusToResources = true;
  }

  renderCard(): JSX.Element {
    switch (this.variant) {
      case BookCardVariant.EXPANDED:
        return this.isMobile ? this.renderMobileExpandedCard() : this.renderExpandedCard();
      case BookCardVariant.COMPACT:
        return <div />;
      case BookCardVariant.SEARCH:
        return <div />;
    }
  }

  renderExpandedCard(): JSX.Element {
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

  renderMobileExpandedCard(): JSX.Element {
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

  renderCover(): JSX.Element {
    return (
      <div class="cover">
        {this.ribbon && this.variant !== BookCardVariant.COMPACT && <div class="ribbon">{this.ribbon}</div>}
        <img src={this.cover} />
      </div>
    );
  }

  renderOperaTitle(): JSX.Element {
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

  renderVolumeTitle(): null | JSX.Element {
    return this.volumeTitle ? <div class="subtitle">{this.volumeTitle}</div> : null;
  }

  renderAuthors(): null | JSX.Element {
    return this.authors ? (
      <div
        class="authors"
        aria-description="Autori"
      >
        {this.authors}
      </div>
    ) : null;
  }

  renderIsbn(): null | JSX.Element {
    if (!this.isbn) return null;
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

  renderShowResources(): null | JSX.Element {
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

  renderTagsSlot(): JSX.Element {
    return (
      <div class="tags">
        <slot name="tags" />
      </div>
    );
  }

  renderHeaderCtaSlot(): JSX.Element {
    return <slot name="header-cta" />;
  }

  renderResourcesSlot(): JSX.Element {
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

  render(): HTMLZBookCardElement {
    return <article class={`${this.variant}`}>{this.renderCard()}</article>;
  }
}
