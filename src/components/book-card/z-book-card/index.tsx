import {Component, Element, Event, EventEmitter, Fragment, Prop, State, Watch, h} from "@stencil/core";
import {BookCardTag, BookCardTagEvent, BookCardTagStatus, BookCardVariant, ControlSize} from "../../../beans";

/**
 * @slot cta - to the right of authors and title (e.g. bookmark icon)
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

  private renderCard(): HTMLDivElement {
    switch (this.variant) {
      case BookCardVariant.LANDSCAPE:
        return this.renderLandscape();
      case BookCardVariant.PORTRAIT:
        return this.renderPortrait();
    }
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

  private renderLaZEbookLogo(): SVGElement {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <g clip-path="url(#clip0_11996_224)">
          <path
            d="M14.6644 0.469604H5.00141C2.33305 0.469604 0.169922 2.63274 0.169922 5.3011V14.9641C0.169922 17.6324 2.33305 19.7956 5.00141 19.7956H14.6644C17.3328 19.7956 19.4959 17.6324 19.4959 14.9641V5.3011C19.4959 2.63274 17.3328 0.469604 14.6644 0.469604Z"
            fill="#E2011A"
          />
          <path
            d="M15.9523 13.3536H12.7313C11.6861 13.3536 10.6683 13.6934 9.83241 14.3199C8.99657 13.6934 7.97873 13.3536 6.93352 13.3536H3.71252V5.30115H6.93352C7.97873 5.30115 8.99657 5.64096 9.83241 6.26745C10.6683 5.64096 11.6861 5.30115 12.7313 5.30115H15.9523V13.3536Z"
            fill="white"
          />
          <path
            d="M15.9523 14.3201H3.71252V14.9643H15.9523V14.3201Z"
            fill="black"
          />
          <path
            d="M8.22229 10.732V8.24543C8.22229 7.97165 8.51057 7.79449 8.75375 7.91689L11.2404 9.16019C11.5109 9.29548 11.5109 9.682 11.2404 9.81728L8.75375 11.0606C8.50896 11.183 8.22229 11.0058 8.22229 10.732Z"
            fill="black"
          />
          <path
            d="M4.35704 7.87826C5.42438 7.87826 6.28963 7.013 6.28963 5.94566C6.28963 4.87831 5.42438 4.01306 4.35704 4.01306C3.28969 4.01306 2.42444 4.87831 2.42444 5.94566C2.42444 7.013 3.28969 7.87826 4.35704 7.87826Z"
            fill="black"
          />
          <path
            d="M5.6454 5.62354H3.0686V6.26773H5.6454V5.62354Z"
            fill="white"
          />
          <path
            d="M4.67917 4.65723H4.03497V7.23402H4.67917V4.65723Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_11996_224">
            <rect
              width="19.326"
              height="19.326"
              fill="white"
              transform="translate(0.169922 0.469604)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }

  private renderLandscape(): HTMLDivElement {
    return (
      <Fragment>
        <div class="main-content">
          {this.renderCover()}
          <div class="card-info">
            <div class="book-data">
              <div class="authors-title-cta-section">
                <div class="authors-title">
                  <div
                    class="authors body-4"
                    aria-description="autori"
                  >
                    {this.authors}
                  </div>
                  {this.renderOperaTitle()}
                </div>
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
                        class="z-link z-link-icon body-4-sb immersive-reader"
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
                        {this.renderLaZEbookLogo()}
                        <div class="body-4-sb">
                          <span class="laz">laZ</span> Ebook
                        </div>
                      </div>
                      <div class="body-5">
                        Anche nella versione libro liquido con{" "}
                        <span
                          class="body-5-sb immersive-reader"
                          onClick={() => this.emitImmersiveReaderClick()}
                        >
                          strumento di lettura immersiva
                        </span>
                      </div>
                    </div>
                    <z-button
                      size={ControlSize.X_SMALL}
                      href={this.ebookUrl}
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
      </Fragment>
    );
  }

  private renderPortrait(): HTMLDivElement {
    return <div class="wrapper"></div>;
  }

  render(): HTMLZBookCardElement {
    return (
      <article
        class={{
          [this.variant]: true,
        }}
      >
        {this.renderCard()}
      </article>
    );
  }
}