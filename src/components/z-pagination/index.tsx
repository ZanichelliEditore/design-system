import {
  Component,
  Prop,
  h,
  Element,
  Event,
  EventEmitter,
  Watch,
  State,
} from "@stencil/core";

/**
 * Pagination bar component.
 */
@Component({
  tag: "z-pagination",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZPagination {
  @Element()
  host: HTMLElement;

  /** Enable navigation arrows. */
  @Prop()
  navArrows: boolean = true;

  /** Total number of pages. Required. */
  @Prop()
  totalPages!: number;

  /** Number of pages to show left/right of the current, before showing "load more" symbol (…). */
  @Prop()
  split?: number;

  /** Number of pages to show at a time. If not set, all pages will be shown. */
  @Prop()
  visiblePages?: number;

  /** Current page. */
  @Prop({ mutable: true })
  currentPage: number = 1;

  /** Whether to show "go to page" feature. */
  @Prop()
  goToPage: Boolean;

  /**
   * Internal visible pages variable.
   * Needed to better handle conflicting props like `visiblePages` and `split`.
   * This state will change based on props values and validation,
   * keeping original `visiblePages` value intact.
   */
  @State()
  private _visiblePages: number = this.visiblePages;

  /** Event emitted when the current page has changed. */
  @Event()
  pageChanged: EventEmitter;

  /** Container element for the chunk of pages. */
  pagesContainer: HTMLElement;

  /** Input element for "go to page". */
  goToPageInput: HTMLZInputElement;

  /** Right split has been added */
  splitRight: Boolean;

  /** Left split has been added */
  splitLeft: Boolean;

  /**
   * Set the max width of the pages container.
   */
  @Watch("_visiblePages")
  setPagesContainerWidth() {
    if (!this._visiblePages) {
      this.pagesContainer.style.setProperty("--z-pagination--pages-container-max-width", "100%");
      return;
    }

    const pagesContainerStyle = window.getComputedStyle(this.pagesContainer);
    const pageButtonWidth = pagesContainerStyle.getPropertyValue("--z-pagination--page-button-width");
    this.pagesContainer.style.setProperty(
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
  setVisiblePages() {
    if (!this.split) {
      this._visiblePages = Math.min(
        this.visiblePages || this.totalPages,
        this.totalPages
      );
    } else {
      this._visiblePages = null;
    }
  }

  /**
   * On page changed.
   * @emits pageChanged
   */
  @Watch("currentPage")
  onPageChanged() {
    this.pageChanged.emit(this.currentPage);
    this.scrollToPage();
  }

  /**
   * On split changed.
   * Empty the `_visiblePages` value. The split feature wins over the pages chunks.
   */
  @Watch("split")
  onSplitChanged() {
    if (this.split) {
      this._visiblePages = null;
    }
  }

  /**
   * Get a list of pages chunks, each of `visiblePages` length.
   * @returns {number[][]}
   */
    private getPagesChunks() {
    // array of numbers from 1 to `totalPages`
    const pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);

    if (this.split) {
      return [pages];
    }

    let chunks = [];
    const chunksCount = Math.ceil(pages.length / this._visiblePages);
    for (let index = 0; index < chunksCount; index++) {
      chunks.push(
        pages.slice(
          index * this._visiblePages,
          (index + 1) * this._visiblePages
        )
      );
    }

    return chunks;
  }

  /**
   * Scroll to the left the chunk of pages containing the current page.
   */
  scrollToPage() {
    const pagesChunk = this.pagesContainer
      .querySelector(`[data-page="${this.currentPage}"]`)
      ?.closest(".pages-chunk") as HTMLElement;
    if (!pagesChunk) {
      return;
    }

    pagesChunk.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }

  /**
   * Select a page.
   * Do validations on the passed value before assigning it to `currentPage`.
   * @param {number} page Page number to set
   */
  selectPage(page) {
    this.currentPage = Math.min(Math.max(page, 1), this.totalPages);
  }

  /**
   * Event handler for go to page button click.
   */
  onGoToPage() {
    const newPage = Number(this.goToPageInput.value);
    this.selectPage(newPage);
  }

  renderPageButton(page) {
    return (
      <button
        class="page-button"
        type="button"
        data-page={page}
        data-active={this.currentPage == page}
        onClick={() => this.selectPage(page)}
      >
        {page}
      </button>
    );
  }

  renderPage(page) {
    // current, first and last pages always visible
    if (
      page === 1 ||
      page === this.totalPages ||
      page === this.currentPage ||
      !this.split ||
      this.split > this.totalPages - 3
    ) {
      return this.renderPageButton(page);
    }

    const currentPageDistance = Math.abs(page - this.currentPage);
    const isSinglePageSplitLeft = this.currentPage - this.split - 1 == 2;
    const isSinglePageSplitRight =
      this.totalPages - this.currentPage - this.split == 2;

    // handle split
    if (
      currentPageDistance <= this.split ||
      (isSinglePageSplitLeft && page == 2) ||
      (isSinglePageSplitRight && page == this.totalPages - 1)
    ) {
      return this.renderPageButton(page);
    }

    if (!this.splitLeft && page < this.currentPage) {
      // left split has not been added
      this.splitLeft = true;

      return (
        <button
          class="split-button"
          type="button"
          onClick={() => this.selectPage(this.currentPage - this.split - 1)}
        >
          …
        </button>
      );
    }

    if (!this.splitRight && page > this.currentPage) {
      // right split has not been added
      this.splitRight = true;

      return (
        <button
          class="split-button"
          type="button"
          onClick={() => this.selectPage(this.currentPage + this.split + 1)}
        >
          …
        </button>
      );
    }
  }

  componentDidLoad() {
    this.setVisiblePages();
  }

  render() {
    const pagesChunks = this.getPagesChunks();
    this.splitRight = false;
    this.splitLeft = false;

    return [
      <div class="pagination-bar">
        {this.navArrows && (
          <button
            class="navigation-button"
            type="button"
            disabled={this.currentPage == 1}
            onClick={() => this.selectPage(this.currentPage - 1)}
          >
            <z-icon name="chevron-left"></z-icon>
          </button>
        )}

        <div
          class="pages-container"
          role="navigation"
          tabIndex={-1}
          ref={(el) => (this.pagesContainer = el as HTMLElement)}
        >
          {pagesChunks.length > 0 &&
            pagesChunks.map((chunk) => (
              <div class="pages-chunk">
                {chunk.map((page) => this.renderPage(page))}
              </div>
            ))}
        </div>

        {this.navArrows && (
          <button
            class="navigation-button"
            type="button"
            disabled={this.currentPage == this.totalPages}
            onClick={() => this.selectPage(this.currentPage + 1)}
          >
            <z-icon name="chevron-right"></z-icon>
          </button>
        )}
      </div>,

      this.goToPage && (
        <div class="go-to-page">
          <span class="label">Vai a pagina:</span>
          <div class="inputs">
            <z-input
              ref={(el) => (this.goToPageInput = el as HTMLZInputElement)}
              type="number"
              hasmessage={false}
              placeholder={`${this.totalPages / 2}`}
              hasclearicon={false}
            ></z-input>
            <z-button onClick={this.onGoToPage.bind(this)}>vai</z-button>
          </div>
        </div>
      ),
    ];
  }
}
