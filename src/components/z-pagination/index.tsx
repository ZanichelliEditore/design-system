import {Component, Element, Event, EventEmitter, Host, Listen, Prop, State, Watch, h} from "@stencil/core";
import {InputType} from "../../beans";

/**
 * Pagination bar component.
 * @cssprop --z-pagination-background-color - backgrounf of the pagination's tabs. The default is --color-background
 * @cssprop --z-pagination-background-color-hover - backgrounf of the pagination's tabs on hover or focus. The default is --color-surface01
 */
@Component({
  tag: "z-pagination",
  styleUrl: "styles.css",
})
export class ZPagination {
  @Element() host: HTMLZPaginationElement;

  /** Pagination label placed before the bar. */
  @Prop()
  label?: string;

  /** Enable navigation arrows. */
  @Prop()
  navArrows = true;

  /** Total number of pages. Required. */
  @Prop()
  totalPages!: number;

  /** Number of pages to skip. */
  @Prop()
  skip = 0;

  /** Enable buttons to go to the first and last pages. */
  @Prop()
  edges = false;

  /** Number of pages to show left/right of the current, before showing "load more" symbol (…). */
  @Prop()
  split?: number;

  /** Number of pages to show at a time. If not set, all pages will be shown. */
  @Prop()
  visiblePages?: number;

  /** Current page. */
  @Prop({mutable: true})
  currentPage = 1;

  /** Whether to show "go to page" feature. */
  @Prop()
  goToPage: boolean;

  /**
   * Internal visible pages variable.
   * Needed to better handle conflicting props like `visiblePages` and `split`.
   * This state will change based on props values and validation,
   * keeping original `visiblePages` value intact.
   */
  @State()
  private _visiblePages = this.visiblePages;

  /** Used to hides/change some functionalities on smaller screen sizes */
  @State()
  isMobile = false;

  /** Value of the go to page input */
  @State()
  goToPageValue = null;

  /** Event emitted when the current page has changed. */
  @Event()
  pageChanged: EventEmitter;

  /**
   * Set the max width of the pages container.
   */
  @Watch("_visiblePages")
  setPagesContainerWidth(): void {
    if (!this._visiblePages || this.split) {
      this.host.style.setProperty("--z-pagination--pages-container-max-width", "100%");

      return;
    }

    const pagesContainerStyle = window.getComputedStyle(this.host);
    const pageButtonWidth = pagesContainerStyle.getPropertyValue("--z-pagination--page-button-width");
    this.host.style.setProperty(
      "--z-pagination--pages-container-max-width",
      `calc(${pageButtonWidth} * ${this._visiblePages})`
    );
  }

  /**
   * Set visible pages.
   * Ensure that the visible pages are always <= the total pages.
   * If `visiblePages` isn't set, fallback to the total pages.
   */
  @Watch("visiblePages")
  setVisiblePages(): void {
    this._visiblePages = Math.min(this.visiblePages || this.totalPages, this.totalPages);
  }

  /**
   * On page changed.
   * @emits pageChanged
   */
  @Watch("currentPage")
  onPageChanged(): void {
    this.pageChanged.emit(this.currentPage);
    this.scrollToPage();
  }

  /**
   * On split changed.
   * Empty `edges` value. The split feature wins over the pages chunks and edges.
   */
  @Watch("split")
  onSplitChanged(): void {
    if (this.split) {
      this.edges = false;
    }
  }

  /**
   * Hide stuff on mobile.
   */
  @Listen("resize", {target: "window", passive: true})
  onResize(): void {
    this.setMobile();
  }

  /**
   * Set functionalities according to screen size.
   */
  private setMobile(): void {
    const mobileMediaQuery = "screen and (max-width: 767px)";
    this.isMobile = window.matchMedia(mobileMediaQuery).matches;
  }

  /**
   * Get a list of pages chunks, each of `visiblePages` length.
   * @returns {number[][]}
   */
  private getPagesChunks(): number[][] {
    // array of numbers from 1 to `totalPages`
    const pages = Array.from({length: this.totalPages}, (_, i) => i + 1);

    const chunks = [];
    const chunksCount = Math.ceil(pages.length / this._visiblePages);
    for (let index = 0; index < chunksCount; index++) {
      chunks.push(pages.slice(index * this._visiblePages, (index + 1) * this._visiblePages));
    }

    return chunks;
  }

  /**
   * Scroll to the left the chunk of pages containing the current page.
   */
  private scrollToPage(): void {
    const pageBtn = this.host.querySelector(`[data-page="${this.currentPage}"]`) as HTMLElement;

    if (!pageBtn) {
      return;
    }

    pageBtn.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  /**
   * Select a page.
   * Do validations on the passed value before assigning it to `currentPage`.
   * @param {number} page Page number to set
   */
  private selectPage(page): void {
    this.currentPage = Math.min(Math.max(page, 1), this.totalPages);
  }

  /**
   * Render page number button.
   * @param {number} page Page number to render
   * @returns {HTMLButtonElement}
   */
  private renderPage(page): HTMLButtonElement {
    return (
      <button
        class="page-button"
        type="button"
        aria-current={this.currentPage === page ? "page" : "false"}
        title={`Vai alla pagina ${page}`}
        data-page={page}
        data-current={this.currentPage === page}
        onClick={() => this.selectPage(page)}
      >
        {page}
      </button>
    );
  }

  /**
   * Render split button.
   * @param {number} page Page to select on click.
   * @returns {HTMLButtonElement}
   */
  private renderEllipsisButton(page): HTMLButtonElement {
    return (
      <button
        class="ellipsis-button"
        type="button"
        title={`Vai alla pagina ${page}`}
        onClick={() => this.selectPage(page)}
      >
        …
      </button>
    );
  }

  /**
   * Render chunked page buttons.
   * @returns {HTMLDivElement[]}
   */
  private renderPages(): HTMLDivElement[] {
    const pagesChunks = this.getPagesChunks();
    if (pagesChunks.length <= 0) {
      return;
    }

    return pagesChunks.map((chunk) => <div class="pages-chunk">{chunk.map((page) => this.renderPage(page))}</div>);
  }

  /**
   * Render page buttons when split feature is enabled.
   * @returns {HTMLButtonElement[]}
   */
  private renderSplitPages(): HTMLButtonElement[] {
    // left and right split pages, current page, first and last page, left and right ellipsis button
    if (this.totalPages <= this.split * 2 + 5) {
      // Too few pages: ellipsis will never be rendered, so let's just render all pages and that's it.
      return Array.from({length: this.totalPages}, (_, i) => this.renderPage(i + 1));
    }

    if (this.currentPage <= this.split * 2 + 2) {
      // Render first (2 * split + 3) pages, ellipsis, then last page.
      return [
        ...Array.from({length: this.split * 2 + 3}, (_, i) => this.renderPage(i + 1)),
        this.renderEllipsisButton(this.split * 2 + 4),
        this.renderPage(this.totalPages),
      ];
    }

    if (this.currentPage > this.split * 2 + 2 && this.currentPage < this.totalPages - this.split * 2 - 1) {
      // Render first page, ellipsis, current page surrounded by (split) pages both before and after, another ellipsis, then last page.
      return [
        this.renderPage(1),
        this.renderEllipsisButton(this.currentPage - this.split - 1),
        ...Array.from({length: this.split * 2 + 1}, (_, i) => this.renderPage(this.currentPage - this.split + i)),
        this.renderEllipsisButton(this.currentPage + this.split + 1),
        this.renderPage(this.totalPages),
      ];
    }

    // Render first page, ellipsis, then last (2 * split + 3) pages.
    return [
      this.renderPage(1),
      this.renderEllipsisButton(this.totalPages - this.split * 2 - 3),
      ...Array.from({length: this.split * 2 + 3}, (_, i) => this.renderPage(this.totalPages - this.split * 2 - 2 + i)),
    ];
  }

  private renderBackButton(): HTMLButtonElement {
    return (
      <button
        class="navigation-button"
        type="button"
        title="Vai alla pagina precedente"
        disabled={this.currentPage === 1}
        onClick={() => this.selectPage(this.currentPage - 1)}
      >
        <z-icon name="chevron-left"></z-icon>
      </button>
    );
  }

  private renderForwardButton(): HTMLButtonElement {
    return (
      <button
        class="navigation-button"
        type="button"
        title="Vai alla prossima pagina"
        disabled={this.currentPage === this.totalPages}
        onClick={() => this.selectPage(this.currentPage + 1)}
      >
        <z-icon name="chevron-right"></z-icon>
      </button>
    );
  }

  private renderMobile(): HTMLElement[] {
    const pagesChunks = this.getPagesChunks();

    return [
      this.label && <span class="page-label body-1-sb">{this.label}</span>,

      <div class="pagination-bar">
        {this.renderBackButton()}

        {!this.goToPage && (
          <div
            class="pages-container"
            role="navigation"
            tabIndex={-1}
          >
            {pagesChunks.length > 0 &&
              pagesChunks.map((chunk) => <div class="pages-chunk">{chunk.map((page) => this.renderPage(page))}</div>)}
          </div>
        )}

        {this.goToPage && (
          <form
            class="mobile-go-to-page"
            onSubmit={(ev) => {
              ev.preventDefault();
              this.selectPage(this.goToPageValue);
            }}
          >
            <z-input
              class="go-to-page-input"
              type={InputType.NUMBER}
              min={1}
              max={this.totalPages}
              message={false}
              onInput={(ev: InputEvent) => {
                this.goToPageValue = (ev.target as HTMLZInputElement).value;
              }}
              placeholder={this.currentPage.toString()}
              hasclearicon={false}
            ></z-input>
            <span>{`/${this.totalPages}`}</span>
          </form>
        )}

        {this.renderForwardButton()}
      </div>,
    ];
  }

  componentDidLoad(): void {
    this.setVisiblePages();
  }

  componentDidRender(): void {
    if (this.split) {
      this.edges = false;
    }

    this.setPagesContainerWidth();
    this.setMobile();
  }

  render(): HTMLZPaginationElement {
    if (this.isMobile) {
      return <Host>{this.renderMobile()}</Host>;
    }

    return (
      <Host>
        <div class="pagination-bar">
          {this.label && <span class="page-label body-1-sb">{this.label}</span>}

          {this.edges && (
            <button
              class="pagination-button"
              type="button"
              title="Vai alla pagina 1"
              disabled={this.currentPage === 1}
              onClick={() => this.selectPage(1)}
            >
              Pagina 1
            </button>
          )}

          {this.skip < this.totalPages && this.skip > 1 && (
            <button
              class="pagination-button"
              type="button"
              title={`Vai alla pagina ${this.currentPage - this.skip}`}
              disabled={this.currentPage <= this.skip}
              onClick={() => this.selectPage(this.currentPage - this.skip)}
            >
              -{this.skip}
            </button>
          )}

          {this.navArrows && this.renderBackButton()}

          <div
            class="pages-container"
            role="navigation"
            tabIndex={-1}
          >
            {this.split ? this.renderSplitPages() : this.renderPages()}
          </div>

          {this.navArrows && this.renderForwardButton()}

          {this.skip < this.totalPages && this.skip > 1 && (
            <button
              class="pagination-button"
              type="button"
              title={`Vai alla pagina ${this.currentPage + this.skip}`}
              disabled={this.currentPage > this.totalPages - this.skip}
              onClick={() => this.selectPage(this.currentPage + this.skip)}
            >
              +{this.skip}
            </button>
          )}

          {this.edges && (
            <button
              class="pagination-button"
              type="button"
              title={`Vai alla pagina ${this.totalPages}`}
              disabled={this.currentPage === this.totalPages}
              onClick={() => this.selectPage(this.totalPages)}
            >
              Pagina {this.totalPages}
            </button>
          )}
        </div>
        {this.goToPage && (
          <div class="go-to-page">
            <span class="label body-5-sb">Vai a pagina:</span>
            <div class="inputs">
              <z-input
                class="go-to-page-input"
                type={InputType.NUMBER}
                min={1}
                max={this.totalPages}
                message={false}
                placeholder="2"
                hasclearicon={false}
                onInput={(ev: InputEvent) => {
                  this.goToPageValue = (ev.target as HTMLZInputElement).value;
                }}
                onKeyDown={(ev) => ev.key === "Enter" && this.selectPage(this.goToPageValue)}
              ></z-input>
              <z-button
                disabled={!this.goToPageValue}
                title="Vai alla pagina inserita"
                onClick={() => this.selectPage(this.goToPageValue)}
              >
                vai
              </z-button>
            </div>
          </div>
        )}
      </Host>
    );
  }
}
