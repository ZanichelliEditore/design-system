import {Component, Element, Event, EventEmitter, Fragment, Prop, h} from "@stencil/core";
import {BookCardVariant, CardTag, ControlSize} from "../../beans";

/**
 * @slot resources - books resources (extended variant only)
 * @slot cta - to the right of authors and title (e.g. bookmark icon)
 * @slot tags - card tags (extended and search variant only)
 * @slot footer-cta - footer cta button (search and compact variant only)
 */
@Component({
  tag: "z-book-card",
  styleUrls: ["styles.css", "../css-components/z-link/styles.css", "../../tokens/typography.css"],
  shadow: true,
})
export class ZBookCard {
  @Element() hostElement: HTMLZBookCardElement;

  /**
   * Card variant: landscape, portrait
   */
  @Prop()
  variant: BookCardVariant = BookCardVariant.PORTRAIT;

  /**
   * Cover URL
   */
  @Prop()
  cover: string;

  /**
   * [optional] Authors
   */
  @Prop()
  authors?: string;

  /**
   * [optional] Card main title
   */
  @Prop()
  operaTitle?: string;

  /**
   * [optional] Card subtitle
   */
  @Prop()
  volumeTitle?: string;

  /**
   * [optional] Main ISBN
   */
  @Prop()
  isbn?: string;

  /**
   * [optional] Ribbon label - expanded and search variant only
   */
  @Prop()
  tags?: CardTag[] | string;

  /**
   * [optional] Ribbon icon - expanded and search variant only
   */
  @Prop()
  adoption?: boolean = false;

  /**
   * [optional] Ribbon interactive - expanded and search variant only
   */
  @Prop()
  catalogUrl?: string;

  /**
   * [optional] Fallback cover URL
   */
  @Prop()
  fallbackCover?: string;

  /**
   * [optional] [accessibility] Card title HTML tag
   */
  @Prop()
  ebookUrl?: string;

  /** click on interactive ribbon */
  @Event()
  ribbonClick: EventEmitter;

  componentWillLoad(): void {}

  componentDidLoad(): void {}

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
      return <z-tag class={tag.active ? "active" : "disabled"}>{tag.label}</z-tag>;
    });
  }

  private renderLandscape(): HTMLDivElement {
    return (
      <Fragment>
        <div class="main-content">
          {this.renderCover()}
          <div class="card-info">
            <div class="book-data">
              <div class="authors-title-icon-section">
                <div class="authors-title">
                  {this.authors && <div class="authors body-4">{this.authors}</div>}
                  {this.operaTitle && <div class="opera-title body-2-sb">{this.operaTitle}</div>}
                </div>
                <slot name="cta"></slot>
              </div>
              <div class="isbn-link-section">
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
                <div class="ebook-app">
                  <div class="app-name">
                    <img
                      src="https://placehold.co/24"
                      alt=""
                    />
                    <div class="body-4-sb">
                      <span class="laz">laZ</span> Ebook
                    </div>
                  </div>
                  <div class="app-description body-5">
                    Anche nella versione libro liquido con <span class="body-5-sb">strumento di lettura immersiva</span>
                  </div>
                </div>
                <z-button
                  size={ControlSize.X_SMALL}
                  href={this.ebookUrl}
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
        {this.renderCard()}
      </article>
    );
  }
}
