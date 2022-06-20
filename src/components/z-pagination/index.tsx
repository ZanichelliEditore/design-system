import {
  Component,
  Prop,
  h,
  Element,
  Event,
  EventEmitter,
  Watch,
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

  /** Total number of pages. */
  @Prop()
  totalPages: number;

  /** Number of pages to show left/right of the current, before showing "load more" symbol (…). */
  @Prop()
  split?: number = 1;

  /** Number of pages to show at a time. If not set, all pages will be shown. */
  @Prop()
  visiblePages?: number;

  /** Current page. */
  @Prop({ mutable: true })
  currentPage: number = 1;

  /** Whether to show "go to page" functionality. */
  @Prop()
  goToPage: Boolean;

  /** Current page. */

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
   * Set the CSS variable `--z-pagination--visible-pages`.
   * Needed to calculate the max width of the pages container.
   */
  @Watch("visiblePages")
  private setCSSVisiblePages() {
    this.host.style.setProperty("--z-pagination--visible-pages", this.visiblePages.toString());
  }

  /**
   * Get a list of pages chunks, each of `visiblePages` length.
   * @returns {number[][]}
   */
  private getPagesChunks() {
    // array of numbers from 1 to `totalPages`
    const pages = Array.from(
      { length: this.totalPages || this.visiblePages },
      (_, i) => i + 1
    );

    let chunks = [];
    const chunksCount = Math.ceil(pages.length / this.visiblePages);
    for (let index = 0; index < chunksCount; index++) {
      chunks.push(pages.slice(index * this.visiblePages, (index + 1) * this.visiblePages));
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
   * Set visible pages according also to split value.
   */
  setVisiblePages() {
    if (!this.split) {
      this.visiblePages = this.visiblePages || this.totalPages;
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
   * @emits pageChanged
   */
    @Watch("split")
    onSplitchanged() {
      this.setVisiblePages();
  }

  /**
   * Select a page.
   * @param {number} page Page number
   */
  selectPage(page) {
    this.currentPage = page;
  }

  /**
   * Select the previous page.
   */
  previous() {
    if (this.currentPage == 0) {
      return;
    }

    this.currentPage--;
  }

  /**
   * Select the next page.
   */
  next() {
    if (this.currentPage == this.totalPages) {
      return;
    }

    this.currentPage++;
  }

  /**
   * Event handler for go to page button.
   */
  onGoToPage() {
    const newPage = Number(this.goToPageInput.value);
    if (newPage < this.totalPages) {
      this.currentPage = newPage;
      this.scrollToPage();
    }
  }

  connectedCallback() {
    this.setCSSVisiblePages();
  }

  componentWillRender() {
    this.setVisiblePages();
  }

  renderPageButton(page) {
    return <button class="page-button"
        type="button"
        data-page={page}
        data-active={this.currentPage == page}
        onClick={() => this.selectPage(page)}
      >
      {page}
    </button>
  }

  renderPage(page) {
    // current, first and last pages always visible
    if (page === 1 ||
        page === this.totalPages ||
        page === this.currentPage ||
        !this.split ||
        this.split > (this.totalPages - 3)) {
      return this.renderPageButton(page);
    }

    // handle split
    if (Math.abs(page - this.currentPage) <= this.split) {
      return this.renderPageButton(page);
    }

    if (!this.splitLeft && page < this.currentPage) {
      // left split has not been added
      this.splitLeft = true;

      return <button class="split-button"
          type="button"
          onClick={() => this.currentPage = this.currentPage - 1}
        >
        …
      </button>
    }

    if (!this.splitRight && page > this.currentPage) {
      // right split has not been added
      this.splitRight = true;

      return <button class="split-button"
          type="button"
          onClick={() => this.currentPage = this.currentPage + 1}
        >
        …
      </button>
    }
  }

  render() {
    const pagesChunks = this.getPagesChunks();
    this.splitRight = false;
    this.splitLeft = false;

    return [
      this.navArrows && <button class="navigation-button"
        type="button"
        disabled={this.currentPage == 1}
        onClick={this.previous.bind(this)}
      >
        <z-icon name="chevron-left"></z-icon>
      </button>,

      <div class="pages-container"
        role="navigation"
        tabIndex={-1}
        ref={(el) => (this.pagesContainer = el as HTMLElement)}
      >
        {pagesChunks.length > 0 && pagesChunks.map((chunk) =>
          <div class="pages-chunk">
            {chunk.map((page) => this.renderPage(page))}
          </div>
        )}
      </div>,

      this.navArrows && <button class="navigation-button"
        type="button"
        disabled={this.currentPage == this.totalPages}
        onClick={this.next.bind(this)}
      >
        <z-icon name="chevron-right"></z-icon>
      </button>,
      this.goToPage && <div class="go-to-page">
        <div class="inputs">
          <z-input hasmessage={false} label="Vai a pagina:" ref={(el) => (this.goToPageInput = el as HTMLZInputElement)} type="number" placeholder={`${this.totalPages / 2}`} hasclearicon={false}></z-input>
          <z-button onClick={this.onGoToPage.bind(this)}>vai</z-button>
        </div>
      </div>,
    ];
  }
}
