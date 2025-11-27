import {Component, Element, Event, EventEmitter, Host, Prop, h} from "@stencil/core";
import {BookCardVariant, ControlSize} from "../../../beans";

/**
 * @slot cta - Top right cta (e.g. bookmark icon)
 * @slot ebook - As default, it shows laZ ebook link
 * @slot tags - Tags section, default empty
 * @slot data - External link and pill, default empty
 * @slot apps - List of card-related apps, default empty
 * @slot coverOverlay - Content to be displayed in the `z-book-cover` component slot
 * @cssprop --z-book-card-portrait-cover-height - Set custom cover height for portrait variant - Default: `378px`
 * @cssprop --z-book-card-title-lines - Set title avilable lines - Default: `2`
 * @cssprop --z-book-card-title-word-break - Set title word-break rule - Default: `initial`
 * @cssprop --z-book-card-subtitle-lines - Set subtitle available lines - Default: `1`
 * @cssprop --z-book-card-subtitle-word-break - Set subtitle word-break rule - Default: `break-all`
 * @cssprop --z-book-card-authors-lines - Set authors available lines - Default: `1`
 * @cssprop --z-book-card-authors-word-break - Set authors word-break rule - Default: `break-all`
 */
@Component({
  tag: "z-book-card",
  styleUrls: ["styles.css", "../../../tokens/typography.css", "../../css-components/z-link/styles.css"],
  shadow: true,
})
export class ZBookCard {
  @Element() hostElement: HTMLZBookCardElement;

  /** Card variant: landscape, portrait */
  @Prop({reflect: true})
  variant: BookCardVariant = BookCardVariant.PORTRAIT;

  /** Cover URL */
  @Prop()
  cover: string;

  /** Opera title (card title) */
  @Prop()
  operaTitle: string;

  /** [optional] Volume title (card subvolume) */
  @Prop()
  volumeTitle?: string;

  /** [optional] Authors */
  @Prop()
  authors?: string;

  /** [optional] Main ISBN */
  @Prop()
  isbn?: string;

  /** [optional] ISBN label */
  @Prop()
  isbnLabel = "";

  /** [optional] year */
  @Prop()
  year?: string;

  /** [optional] Link to the ebook resource. Creates a link also around the cover and title. */
  @Prop()
  ebookUrl?: string;

  /** [optional] Value for the `target` attribute of the links created by `ebookUrl` prop. */
  @Prop()
  linkTarget = "_blank";

  /** [optional] Fallback cover URL. */
  @Prop()
  fallbackCover?: string;

  /** Whether to show a stack of covers to represent multiple books (only for `portrait` variant). */
  @Prop()
  hasMultipleCovers = false;

  /** [optional] Set a specific heading level as html tag for the title. */
  @Prop()
  titleHtmlTag?: string;

  /** click on ebook link */
  @Event()
  ebookClick: EventEmitter;

  /** click on cover link */
  @Event()
  coverClick: EventEmitter;

  /** click on title link */
  @Event()
  titleClick: EventEmitter;

  private emitEbookClick(): void {
    this.ebookClick.emit();
  }

  private emitCoverClick(): void {
    this.coverClick.emit();
  }

  private emitTitleClick(): void {
    this.titleClick.emit();
  }

  private renderCover(): HTMLDivElement {
    const CoverTag = this.ebookUrl ? "a" : "div";
    const coverAttrs = this.ebookUrl
      ? {
          href: this.ebookUrl,
          onClick: () => this.emitCoverClick(),
          target: this.linkTarget,
        }
      : {};

    return (
      <CoverTag
        class="cover"
        {...coverAttrs}
      >
        <z-book-cover
          cover={this.cover}
          fallbackCover={this.fallbackCover}
          multiple={this.hasMultipleCovers && this.variant === BookCardVariant.PORTRAIT}
        >
          <slot
            name="coverOverlay"
            slot="coverOverlay"
          ></slot>
        </z-book-cover>
      </CoverTag>
    );
  }

  private renderYear(): null | HTMLDivElement {
    if (!this.year) {
      return null;
    }

    return (
      <div
        class="year ellipsis body-4"
        aria-description="anno"
      >
        {this.year}
      </div>
    );
  }

  private renderAuthors(): null | HTMLDivElement {
    if (!this.authors) {
      return null;
    }

    return (
      <div class="cta-wrapper">
        <div
          class="authors ellipsis body-4"
          aria-description="autori"
        >
          {this.authors}
        </div>
        {this.variant === BookCardVariant.LANDSCAPE ? this.renderCtaSlot() : null}
      </div>
    );
  }

  private renderOperaTitle(): HTMLDivElement {
    const title = this.titleHtmlTag
      ? `<${this.titleHtmlTag}>${this.operaTitle}</${this.titleHtmlTag}>`
      : this.operaTitle;

    const operaTitle = (
      <div
        class="opera-title ellipsis body-2-sb"
        innerHTML={title}
      />
    );

    return (
      <div class="cta-wrapper">
        {this.ebookUrl ? (
          <a
            class="z-link"
            href={this.ebookUrl}
            onClick={() => this.emitTitleClick()}
            target={this.linkTarget}
          >
            {operaTitle}
          </a>
        ) : (
          operaTitle
        )}
        {this.variant === BookCardVariant.PORTRAIT ? this.renderCtaSlot() : null}
      </div>
    );
  }

  private renderVolumeTitle(): null | HTMLDivElement {
    if (!this.volumeTitle) {
      return null;
    }

    return <div class="volume-title ellipsis body-4">{this.volumeTitle}</div>;
  }

  private renderIsbn(): null | HTMLDivElement {
    if (!this.isbn) {
      return null;
    }

    return (
      <div
        class="isbn ellipsis body-4-sb"
        aria-description={`isbn ${this.isbnLabel}`}
      >
        {this.isbn} {this.isbnLabel ? <span class="body-4">{this.isbnLabel}</span> : null}
      </div>
    );
  }

  private renderEbook(): HTMLDivElement {
    return (
      <div class="ebook">
        <div class="app-name">
          <img
            class="ebook-logo"
            aria-hidden="true"
          />
          <div class="body-4-sb">laZ Ebook</div>
        </div>
        <z-button
          size={ControlSize.X_SMALL}
          href={this.ebookUrl}
          target={this.linkTarget}
          onClick={() => this.emitEbookClick()}
          htmlrole="link"
          aria-description={`leggi l'ebook ${this.operaTitle} su laZ Ebook`}
        >
          leggi ebook
        </z-button>
      </div>
    );
  }

  private renderCtaSlot(): HTMLSlotElement {
    return <slot name="cta"></slot>;
  }

  render(): HTMLZBookCardElement {
    return (
      <Host>
        <div class="main-content">
          {this.renderCover()}
          <div class="card-info">
            <div class="top">
              <div>
                {this.renderYear()}
                {this.renderAuthors()}
                {this.renderOperaTitle()}
                {this.renderVolumeTitle()}
                {this.renderIsbn()}
              </div>
              <slot name="tags"></slot>
              <slot name="data"></slot>
            </div>
            <slot name="ebook">{!!this.ebookUrl && <div class="bottom">{this.renderEbook()}</div>}</slot>
          </div>
        </div>
        <slot name="apps"></slot>
      </Host>
    );
  }
}
