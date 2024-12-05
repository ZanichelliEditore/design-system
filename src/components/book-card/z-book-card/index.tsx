import {Component, Element, Event, EventEmitter, Prop, State, Watch, h} from "@stencil/core";
import {BookCardTag, BookCardTagEvent, BookCardTagStatus, BookCardVariant, ControlSize} from "../../../beans";

/**
 * @slot cta - to the right of authors and title (e.g. bookmark icon)
 * @slot ebook - main action slot on the card (as default, it shows laZ ebook link)
 * @slot apps - list of card-related apps
 */
@Component({
  tag: "z-book-card",
  styleUrls: ["styles.css", "../../css-components/z-link/styles.css", "../../../tokens/typography.css"],
  shadow: true,
})
export class ZBookCard {
  @Element() hostElement: HTMLZBookCardElement;

  /** Card variant: landscape, portrait */
  @Prop()
  variant: BookCardVariant = BookCardVariant.PORTRAIT;

  /** Cover URL */
  @Prop()
  cover: string;

  /** [optional] Authors */
  @Prop()
  authors?: string;

  /** [optional] Opera title */
  @Prop()
  operaTitle?: string;

  /** [optional] Volume title */
  @Prop()
  volumeTitle?: string;

  /** [optional] Main ISBN */
  @Prop()
  isbn?: string;

  /** [optional] ISBN label */
  @Prop()
  isbnLabel = "";

  /** [optional] EDI tag */
  @Prop()
  edi?: BookCardTag | string;

  /** [optional] Annotated tag */
  @Prop()
  annotated?: BookCardTag | string;

  /** [optional] Teacher version tag */
  @Prop()
  teacherVersion?: BookCardTag | string;

  /** [optional] Show adoption badge */
  @Prop()
  adoption?: boolean = false;

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
  operaTitleHtmlTag?: string;

  @State()
  ediTag;

  @State()
  annotatedTag;

  @State()
  teacherVersionTag;

  /** click on tag */
  @Event()
  tagClick: EventEmitter;

  /** click on catalog link */
  @Event()
  catalogClick: EventEmitter;

  /** click on ebook link */
  @Event()
  ebookClick: EventEmitter;

  /** click on immersive reader */
  @Event()
  immersiveReaderClick: EventEmitter;

  @Watch("edi")
  watchEdi(): void {
    this.ediTag = typeof this.edi === "string" ? JSON.parse(this.edi) : this.edi;
  }

  @Watch("annotated")
  watchAnnotated(): void {
    this.annotatedTag = typeof this.annotated === "string" ? JSON.parse(this.annotated) : this.annotated;
  }

  @Watch("teacherVersion")
  watchTeacherVersion(): void {
    this.teacherVersionTag =
      typeof this.teacherVersion === "string" ? JSON.parse(this.teacherVersion) : this.teacherVersion;
  }

  componentWillLoad(): void {
    this.watchEdi();
    this.watchAnnotated();
    this.watchTeacherVersion();
  }

  private emitTagClick(e: BookCardTagEvent): void {
    this.tagClick.emit(e);
  }

  private emitCatalogClick(): void {
    this.catalogClick.emit();
  }

  private emitEbookClick(): void {
    this.ebookClick.emit();
  }

  private emitImmersiveReaderClick(): void {
    this.immersiveReaderClick.emit();
  }

  private renderOperaTitle(): HTMLDivElement {
    const title = this.operaTitleHtmlTag
      ? `<${this.operaTitleHtmlTag}>${this.operaTitle}</${this.operaTitleHtmlTag}>`
      : this.operaTitle;

    return (
      <div
        class="opera-title body-2-sb"
        innerHTML={title}
      />
    );
  }

  private renderIsbnLabel(): HTMLDivElement | null {
    return this.isbnLabel ? <span class="body-4">{this.isbnLabel}</span> : null;
  }

  private renderTag(label: string, tag: BookCardTag, id: string): HTMLDivElement {
    return (
      <z-tag
        class={{[tag.status]: true, interactive: tag.interactive}}
        role={tag.interactive ? "button" : undefined}
        tabIndex={tag.interactive ? 0 : undefined}
        onClick={() =>
          tag.interactive &&
          this.emitTagClick({
            tag: id,
            state: tag.status,
          })
        }
        onKeyUp={(e: KeyboardEvent) =>
          tag.interactive &&
          e.key === "Enter" &&
          this.emitTagClick({
            tag: id,
            state: tag.status,
          })
        }
      >
        {label}
      </z-tag>
    );
  }

  private renderTags(): HTMLDivElement[] | null {
    const tags = [];

    if (this.edi && Object.values(BookCardTagStatus).includes(this.ediTag.status)) {
      tags.push(this.renderTag("edi", this.ediTag, "edi"));
    }

    if (this.annotated && Object.values(BookCardTagStatus).includes(this.annotatedTag.status)) {
      tags.push(this.renderTag("annotata", this.annotatedTag, "annotated"));
    }

    if (this.teacherVersion && Object.values(BookCardTagStatus).includes(this.teacherVersionTag.status)) {
      tags.push(this.renderTag("versione insegnante", this.teacherVersionTag, "teacherVersion"));
    }

    if (tags.length > 0) {
      return tags;
    }

    return null;
  }

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
      </div>
    );
  }

  render(): HTMLZBookCardElement {
    return (
      <article
        class={{
          [this.variant]: true,
        }}
      >
        <div class="main-content">
          {this.renderCover()}
          <div class="card-info">
            <div class="book-data">
              <div class="authors-title-cta-section">
                <div
                  class="authors body-4"
                  aria-description="autori"
                >
                  {this.authors}
                </div>
                {this.renderOperaTitle()}
                <slot name="cta"></slot>
              </div>
              <div class="isbn-tags-link-section">
                <div class="isbn-tags-section">
                  <div class="volume-title body-4">{this.volumeTitle}</div>
                  <div
                    class="isbn body-4-sb"
                    aria-description={`isbn ${this.isbnLabel}`}
                  >
                    {this.isbn} {this.renderIsbnLabel()}
                  </div>
                  <div class="tags">{this.renderTags()}</div>
                </div>
                <div class="link-section">
                  <div class="catalog-link">
                    {this.catalogUrl && (
                      <a
                        href={this.catalogUrl}
                        target="_blank"
                        class="z-link z-link-icon body-4-sb"
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
                    )}
                  </div>
                  {this.adoption && <div class="adoption-tag body-5-sb">adottato</div>}
                </div>
              </div>
            </div>
            <div class="ebook-container">
              <slot name="ebook">
                {this.ebookUrl && (
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
                      {this.variant === BookCardVariant.LANDSCAPE && (
                        <div class="body-5">
                          Anche nella versione libro liquido con{" "}
                          <button
                            class="body-5-sb immersive-reader z-link"
                            onClick={() => this.emitImmersiveReaderClick()}
                            tabIndex={0}
                          >
                            strumento di lettura immersiva
                          </button>
                        </div>
                      )}
                    </div>
                    <z-button
                      size={ControlSize.X_SMALL}
                      href={this.ebookUrl}
                      target="_blank"
                      onClick={() => this.emitEbookClick()}
                      role="link"
                      aria-description={`leggi l'ebook ${this.operaTitle} su laZ Ebook`}
                    >
                      leggi ebook
                    </z-button>
                  </div>
                )}
              </slot>
            </div>
          </div>
        </div>
        <slot name="apps"></slot>
      </article>
    );
  }
}
