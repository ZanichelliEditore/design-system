import {Component, Element, Event, EventEmitter, Fragment, Prop, h} from "@stencil/core";
import {BookCardVariant, CardTag, ControlSize} from "../../beans";

/**
 * @slot cta - to the right of authors and title (e.g. bookmark icon)
 * @slot apps - list of card-related apps
 */
@Component({
  tag: "z-book-card",
  styleUrls: ["styles.css", "../css-components/z-link/styles.css", "../../tokens/typography.css"],
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

  /** [optional] Tags */
  @Prop()
  tags?: CardTag[] | string;

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

  /** click on tag */
  @Event()
  tagClick: EventEmitter;

  /** click on catalog link */
  @Event()
  catalogClick: EventEmitter;

  /** click on ebook link */
  @Event()
  ebookClick: EventEmitter;

  private emitTagClick(): void {
    this.tagClick.emit();
  }

  private emitCatalogClick(): void {
    this.catalogClick.emit();
  }

  private emitEbookClick(): void {
    this.ebookClick.emit();
  }

  private renderCard(): HTMLDivElement {
    switch (this.variant) {
      case BookCardVariant.LANDSCAPE:
        return this.renderLandscape();
      case BookCardVariant.PORTRAIT:
        return this.renderPortrait();
    }
  }

  private renderTags(): HTMLDivElement[] {
    let tags = [];

    if (typeof this.tags === "string") {
      tags = JSON.parse(this.tags);
    }

    return tags.map((tag) => {
      return (
        <z-tag
          class={tag.active ? "active" : "disabled"}
          onClick={() => this.emitTagClick()}
        >
          {tag.label}
        </z-tag>
      );
    });
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

  private renderLandscape(): HTMLDivElement {
    return (
      <Fragment>
        <div class="main-content">
          {this.renderCover()}
          <div class="card-info">
            <div class="book-data">
              <div class="authors-title-cta-section">
                <div class="authors-title">
                  {this.authors && <div class="authors body-4">{this.authors}</div>}
                  {this.operaTitle && <div class="opera-title body-2-sb">{this.operaTitle}</div>}
                </div>
                <slot name="cta"></slot>
              </div>
              <div class="isbn-tags-link-section">
                <div class="isbn-tags-section">
                  {this.volumeTitle && <div class="volume-title body-4">{this.volumeTitle}</div>}
                  {this.isbn && <div class="isbn body-4-sb">{this.isbn}</div>}
                  {this.tags && <div class="tags">{this.renderTags()}</div>}
                </div>
                <div class="link-section">
                  <div class="catalog-link">
                    {this.catalogUrl && (
                      <a
                        href={this.catalogUrl}
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
            {this.ebookUrl && (
              <div class="ebook">
                <div>
                  <div class="app-name">
                    <img
                      src="https://placehold.co/24"
                      alt=""
                    />
                    <div class="body-4-sb">
                      <span class="laz">laZ</span> Ebook
                    </div>
                  </div>
                  <div class="body-5">
                    Anche nella versione libro liquido con <span class="body-5-sb">strumento di lettura immersiva</span>
                  </div>
                </div>
                <z-button
                  size={ControlSize.X_SMALL}
                  href={this.ebookUrl}
                  onClick={() => this.emitEbookClick()}
                >
                  leggi ebook
                </z-button>
              </div>
            )}
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
