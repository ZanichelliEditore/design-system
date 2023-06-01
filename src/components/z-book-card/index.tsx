import {Component, Element, Listen, Prop, State, h} from "@stencil/core";
import {BookCardVariant} from "../../beans";
import {mobileBreakpoint} from "../../constants/breakpoints";

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

  @State()
  isMobile: boolean = false;
  @State()
  hasResources: boolean = false;
  @State()
  showResources: boolean = false;

  @Listen("resize", {target: "window"})
  @Listen("orientationchange", {target: "window"})
  handleResize(): void {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }

  componentWillLoad(): void {
    this.handleResize();
  }

  componentWillRender(): void {
    this.handleResources();
  }

  handleResources(): void {
    if (this.variant !== BookCardVariant.EXPANDED || !this.isMobile) return;
    this.hasResources = this.hostElement.querySelectorAll("[slot=resources]")?.length > 0;
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
            {this.showResources && this.renderResourcesSlot()}
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
    return <div class="title">{this.operaTitle}</div>;
  }

  renderVolumeTitle(): null | JSX.Element {
    return this.volumeTitle ? <div class="subtitle">{this.volumeTitle}</div> : null;
  }

  renderAuthors(): null | JSX.Element {
    return this.authors ? <div class="authors">{this.authors}</div> : null;
  }

  renderIsbn(): null | JSX.Element {
    if (!this.isbn) return null;
    return (
      <div class="isbn">
        <span class="code">{this.isbn}</span>
        <span class="label"> (ed. cartacea)</span>
      </div>
    );
  }

  renderShowResources(): null | JSX.Element {
    //  TODO: handle accessibility on click
    return (
      <button
        class="show-resources"
        onClick={() => (this.showResources = !this.showResources)}
      >
        <span>{this.showResources ? "Chiudi" : "Vedi tutto"}</span>
        <z-icon name={this.showResources ? "chevron-up" : "chevron-down"} />
      </button>
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
    return <slot name="resources" />;
  }

  render(): HTMLZBookCardElement {
    return <article class={`${this.variant}`}>{this.renderCard()}</article>;
  }
}
