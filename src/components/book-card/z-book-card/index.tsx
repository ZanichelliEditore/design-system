import {Component, Element, Event, EventEmitter, Host, Prop, h} from "@stencil/core";
import {BookCardVariant, ControlSize} from "../../../beans";

/**
 * @slot cta - top right cta (e.g. bookmark icon)
 * @slot ebook - as default, it shows laZ ebook link
 * @slot tags - tags section, default empty
 * @slot chip - chip, beside catalog url, default empty
 * @slot apps - list of card-related apps, default empty
 * @slot coverOverlay - purple layer on top of book cover
 */
@Component({
  tag: "z-book-card",
  styleUrls: ["styles.css", "../../css-components/z-link/styles.css", "../../../tokens/typography.css"],
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

  /** Title (usually opera title) */
  @Prop()
  title: string;

  /** [optional] Subtitle (usually volume title) */
  @Prop()
  subtitle?: string;

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

  // /** [optional] EDI tag */
  // @Prop()
  // edi?: BookCardTag | string;

  // /** [optional] Annotated tag */
  // @Prop()
  // annotated?: BookCardTag | string;

  // /** [optional] Teacher version tag */
  // @Prop()
  // teacherVersion?: BookCardTag | string;

  // /** [optional] Show reflowable description */
  // @Prop()
  // reflowable?: boolean = false;

  // /** [optional] Show adoption badge */
  // @Prop()
  // adoption?: boolean = false;

  /** [optional] Show catalog link to correspondent resource */
  @Prop()
  catalogUrl?: string;

  /** [optional] Show link to the ebook resource */
  @Prop()
  ebookUrl?: string;

  /** [optional] Fallback cover URL */
  @Prop()
  fallbackCover?: string;

  /** [optional] Set a specific h level as html tag for opera title */
  @Prop()
  titleHtmlTag?: string;

  // @State()
  // ediTag;

  // @State()
  // annotatedTag;

  // @State()
  // teacherVersionTag;

  // /** click on tag */
  // @Event()
  // tagClick: EventEmitter;

  /** click on catalog link */
  @Event()
  catalogClick: EventEmitter;

  /** click on ebook link */
  @Event()
  ebookClick: EventEmitter;

  // /** click on immersive reader */
  // @Event()
  // immersiveReaderClick: EventEmitter;

  // @Watch("edi")
  // watchEdi(): void {
  //   this.ediTag = typeof this.edi === "string" ? JSON.parse(this.edi) : this.edi;
  // }

  // @Watch("annotated")
  // watchAnnotated(): void {
  //   this.annotatedTag = typeof this.annotated === "string" ? JSON.parse(this.annotated) : this.annotated;
  // }

  // @Watch("teacherVersion")
  // watchTeacherVersion(): void {
  //   this.teacherVersionTag =
  //     typeof this.teacherVersion === "string" ? JSON.parse(this.teacherVersion) : this.teacherVersion;
  // }

  // componentWillLoad(): void {
  //   this.watchEdi();
  //   this.watchAnnotated();
  //   this.watchTeacherVersion();
  // }

  // private emitTagClick(e: BookCardTagEvent): void {
  //   this.tagClick.emit(e);
  // }

  private emitCatalogClick(): void {
    this.catalogClick.emit();
  }

  private emitEbookClick(): void {
    this.ebookClick.emit();
  }

  // private emitImmersiveReaderClick(): void {
  //   this.immersiveReaderClick.emit();
  // }

  // private renderTag(label: string, tag: BookCardTag, id: string): HTMLDivElement {
  //   return (
  //     <z-tag
  //       class={{[tag.status]: true, interactive: tag.interactive}}
  //       role={tag.interactive ? "button" : undefined}
  //       tabIndex={tag.interactive ? 0 : undefined}
  //       onClick={() =>
  //         tag.interactive &&
  //         this.emitTagClick({
  //           tag: id,
  //           state: tag.status,
  //         })
  //       }
  //       onKeyUp={(e: KeyboardEvent) =>
  //         tag.interactive &&
  //         e.key === "Enter" &&
  //         this.emitTagClick({
  //           tag: id,
  //           state: tag.status,
  //         })
  //       }
  //     >
  //       {label}
  //     </z-tag>
  //   );
  // }

  // private renderTags(): HTMLDivElement[] | null {
  //   const tags = [];

  //   if (this.edi && Object.values(BookCardTagStatus).includes(this.ediTag.status)) {
  //     tags.push(this.renderTag("edi", this.ediTag, "edi"));
  //   }

  //   if (this.annotated && Object.values(BookCardTagStatus).includes(this.annotatedTag.status)) {
  //     tags.push(this.renderTag("annotata", this.annotatedTag, "annotated"));
  //   }

  //   if (this.teacherVersion && Object.values(BookCardTagStatus).includes(this.teacherVersionTag.status)) {
  //     tags.push(this.renderTag("versione insegnante", this.teacherVersionTag, "teacherVersion"));
  //   }

  //   if (tags.length > 0) {
  //     return tags;
  //   }

  //   return null;
  // }

  private renderCover(): HTMLDivElement {
    return (
      <div class="cover">
        <img
          src={this.cover}
          onError={() => {
            if (this.fallbackCover) {
              this.cover = this.fallbackCover;
            }
          }}
          aria-hidden="true"
        />
        <slot name="coverOverlay"></slot>
      </div>
    );
  }

  private renderYear(): null | HTMLDivElement {
    if (!this.year) return null;

    return (
      <div
        class="year one-line body-4"
        aria-description="anno"
      >
        {this.year}
      </div>
    );
  }

  private renderAuthors(): null | HTMLDivElement {
    if (!this.authors) return null;

    return (
      <div
        class="authors one-line body-4"
        aria-description="autori"
      >
        {this.authors}
      </div>
    );
  }

  private rendertitle(): HTMLDivElement {
    const title = this.titleHtmlTag ? `<${this.titleHtmlTag}>${this.title}</${this.titleHtmlTag}>` : this.title;

    return (
      <div
        class="opera-title two-lines body-2-sb"
        innerHTML={title}
      />
    );
  }

  private rendersubtitle(): null | HTMLDivElement {
    if (!this.subtitle) return null;

    return <div class="volume-title one-line body-4">{this.subtitle}</div>;
  }

  private renderIsbn(): null | HTMLDivElement {
    if (!this.isbn) return null;

    <div
      class="isbn one-line body-4-sb"
      aria-description={`isbn ${this.isbnLabel}`}
    >
      {this.isbn} {this.isbnLabel ? <span class="body-4">{this.isbnLabel}</span> : null}
    </div>;
  }

  private renderCatalogUrl(): null | HTMLAnchorElement {
    if (!this.catalogUrl) return null;

    return (
      <a
        href={this.catalogUrl}
        target="_blank"
        class="z-link z-link-blue z-link-icon body-4-sb"
        onClick={() => this.emitCatalogClick()}
      >
        Scheda catalogo
        <z-icon
          name="arrow-quad-north-east"
          height={16}
          width={16}
          fill="color-primary01-icon"
        ></z-icon>
      </a>
    );
  }

  private renderEbook(): null | HTMLDivElement {
    if (!this.ebookUrl) return null;

    return (
      <div class="ebook">
        <div>
          <div class="app-name">
            <img
              class="ebook-logo"
              aria-hidden="true"
            />
            <div class="body-4-sb">
              <span class="laz">laZ</span> Ebook
            </div>
          </div>
        </div>
        <z-button
          size={ControlSize.X_SMALL}
          href={this.ebookUrl}
          target="_blank"
          onClick={() => this.emitEbookClick()}
          role="link"
          aria-description={`leggi l'ebook ${this.title} su laZ Ebook`}
        >
          leggi ebook
        </z-button>
      </div>
    );
  }

  render(): HTMLZBookCardElement {
    return (
      <Host
      // class={{
      //   [this.variant]: true,
      // }}
      >
        <div class="main-content">
          {this.renderCover()}
          <div class="card-info">
            <div class="top">
              {this.renderYear()}
              {this.renderAuthors()}
              {this.rendertitle()}
              <slot name="cta"></slot>
              {this.rendersubtitle()}
              {this.renderIsbn()}
              <slot name="tags"></slot>
              <div class="catalog-chip">
                {this.renderCatalogUrl()}
                <slot name="chip"></slot>
              </div>
            </div>
            <div class="bottom">
              <slot name="ebook">{this.renderEbook()}</slot>
            </div>
          </div>
        </div>
        <slot name="apps"></slot>
      </Host>
    );
  }
}
