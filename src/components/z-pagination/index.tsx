import {
  Component,
  Prop,
  h,
  Element,
  Event,
  EventEmitter,
  Watch,
  State,
  Listen,
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

  /** Number of pages to skip. */
  @Prop()
  skip: number = 0;

  /** Enable buttons to go to the first and last pages. */
  @Prop()
  edges: boolean = false;

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

  /** Used to hides/change some functionalities on smaller screen sizes */
  @State()
  isMobile: Boolean = false;

  /** Event emitted when the current page has changed. */
  @Event()
  pageChanged: EventEmitter;

  /** Right split has been already added */
  splitRight: Boolean;

  /** Left split has been already added */
  splitLeft: Boolean;

  /**
   * Set the max width of the pages container.
   */
  @Watch("_visiblePages")
  setPagesContainerWidth() {
    if (!this._visiblePages) {
      this.host.style.setProperty(
        "--z-pagination--pages-container-max-width",
        "100%"
      );
      return;
    }

    const pagesContainerStyle = window.getComputedStyle(this.host);
    const pageButtonWidth = pagesContainerStyle.getPropertyValue(
      "--z-pagination--page-button-width"
    );
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
      this.edges = false;
    }
  }

  /**
   * Hide stuff if mobile.
   */
  @Listen("resize", { target: "window", passive: true })
  checkScrollVisible() {
    this.setMobile();
  }

  /**
   *
   * * @inheritdoc
   */
  componentDidRender() {
    if (this.split) {
      this._visiblePages = null;
      this.edges = false;
    }

    this.setMobile();
  }

  /**
   * Set functionalities according to screen size.
   */
  setMobile() {
    const isMobileMediaQuery = "screen and (max-width: 768px)";
    this.isMobile = window.matchMedia(isMobileMediaQuery).matches;
  }

  /**
   * Get a list of pages chunks, each of `visiblePages` length.
   * @returns {number[][]}
   */
  private getPagesChunks() {
    // array of numbers from 1 to `totalPages`
    const pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);

    if (this.split || this.isMobile) {
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
    const pageBtn = this.host.shadowRoot.querySelector(
      `[data-page="${this.currentPage}"]`
    ) as HTMLElement;

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
  selectPage(page) {
    this.currentPage = Math.min(Math.max(page, 1), this.totalPages);
  }

  /**
   * Event handler for go to page button click.
   */
  onGoToPage() {
    const target = this.host.shadowRoot.querySelector(".gotopage-input") as HTMLZInputElement;
    const newPage = Number(target.value);
    if (newPage > 0) {
      this.selectPage(newPage);
    }
  }

  /**
   * Render page number button.
   * @param {number} page Page number to render
   * @returns {HTMLButtonElement}
   */
  renderPage(page) {
    return (
      <button
        class="page-button"
        type="button"
        aria-current={this.currentPage === page ? "page" : "false"}
        title={`Vai alla pagina ${page}`}
        data-page={page}
        data-current={this.currentPage == page}
        onClick={() => this.selectPage(page)}
      >
        {page}
      </button>
    );
  }

  /**
   * Render split button.
   * @param {number} page Page number
   * @returns {HTMLButtonElement}
   */
  renderSplitButton(page) {
    const sign = Math.sign(page - this.currentPage);
    const splitPage = this.currentPage + this.split * sign + 1 * sign;
    const button = (
      <button
        class="split-button"
        type="button"
        title={`Vai alla pagina ${splitPage}`}
        onClick={() => this.selectPage(splitPage)}
      >
        …
      </button>
    );
    if (!this.splitLeft && sign < 0) {
      // left split has not been added yet
      this.splitLeft = true;
      return button;
    }

    if (!this.splitRight && sign > 0) {
      // right split has not been added yet
      this.splitRight = true;
      return button;
    }
  }

  /**
   * Choose whether to render page or split button.
   * @param {number} page Page number
   * @returns {HTMLButtonElement}
   */
  renderButton(page) {
    const distanceFromCurrentPage = Math.abs(page - this.currentPage);

    if (
      !this.split ||
      // current, first and last pages always visible
      this.split > this.totalPages - 3 ||
      page == 1 ||
      page == this.totalPages ||
      distanceFromCurrentPage <= this.split ||
      // show the page if split would hide only one page
      (page == 2 && this.currentPage - this.split - 1 == page) ||
      (page == this.totalPages - 1 && this.currentPage + this.split + 1 == page)
    ) {
      return this.renderPage(page);
    }

    return this.renderSplitButton(page);
  }

  componentDidLoad() {
    this.setVisiblePages();
  }

  renderMobile() {
    const pagesChunks = this.getPagesChunks();

    return [
      <div class="pagination-bar">
        <button
          class="navigation-button"
          type="button"
          title="Vai alla pagina precedente"
          disabled={this.currentPage == 1}
          onClick={() => this.selectPage(this.currentPage - 1)}
        >
          <z-icon name="chevron-left"></z-icon>
        </button>

        {!this.goToPage && (
          <div class="pages-container" role="navigation" tabIndex={-1}>
            {pagesChunks.length > 0 &&
              pagesChunks.map((chunk) => (
                <div class="pages-chunk">
                  {chunk.map((page) => this.renderPage(page))}
                </div>
              ))}
          </div>
        )}

        {this.goToPage && (
          <div class="mobile-go-to-page">
            <z-input
              class="gotopage-input"
              type="number"
              hasmessage={false}
              placeholder={`${this.currentPage}`}
              hasclearicon={false}
              onKeyPress={(ev) => ev.key === "Enter" && this.onGoToPage()}
            ></z-input>
            <span>{`/${this.totalPages}`}</span>
          </div>
        )}

        <button
          class="navigation-button"
          type="button"
          title="Vai alla prossima pagina"
          disabled={this.currentPage == this.totalPages}
          onClick={() => this.selectPage(this.currentPage + 1)}
        >
          <z-icon name="chevron-right"></z-icon>
        </button>
      </div>,
    ];
  }

  render() {
    const pagesChunks = this.getPagesChunks();
    this.splitRight = false;
    this.splitLeft = false;

    if (this.isMobile) {
      return this.renderMobile();
    }

    return [
      <div class="pagination-bar">
        {this.edges && (
          <button
            class="pagination-button"
            type="button"
            title="Vai alla pagina 1"
            disabled={this.currentPage == 1}
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

        {this.navArrows && (
          <button
            class="navigation-button"
            type="button"
            title="Vai alla pagina precedente"
            disabled={this.currentPage == 1}
            onClick={() => this.selectPage(this.currentPage - 1)}
          >
            <z-icon name="chevron-left"></z-icon>
          </button>
        )}

        <div class="pages-container" role="navigation" tabIndex={-1}>
          {pagesChunks.length > 0 &&
            pagesChunks.map((chunk) => (
              <div class="pages-chunk">
                {chunk.map((page) => this.renderButton(page))}
              </div>
            ))}
        </div>

        {this.navArrows && (
          <button
            class="navigation-button"
            type="button"
            title="Vai alla prossima pagina"
            disabled={this.currentPage == this.totalPages}
            onClick={() => this.selectPage(this.currentPage + 1)}
          >
            <z-icon name="chevron-right"></z-icon>
          </button>
        )}

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
            disabled={this.currentPage == this.totalPages}
            onClick={() => this.selectPage(this.totalPages)}
          >
            Pagina {this.totalPages}
          </button>
        )}
      </div>,

      this.goToPage && (
        <div class="go-to-page">
          <span class="label">Vai a pagina:</span>
          <div class="inputs">
            <z-input
              type="number"
              class="gotopage-input"
              hasmessage={false}
              placeholder={`${this.currentPage}`}
              hasclearicon={false}
              onKeyPress={(ev) => ev.key === "Enter" && this.onGoToPage()}
            ></z-input>
            <z-button
              title="Vai alla pagina inserita"
              onClick={() => this.onGoToPage()}
            >
              vai
            </z-button>
          </div>
        </div>
      ),
    ];
  }
}