import { EventEmitter } from "../../stencil-public-runtime";
import { HostElement } from "../../stencil-public-runtime";
/**
 * Pagination bar component.
 */
export declare class ZPagination {
  host: HTMLZPaginationElement;
  /** Pagination label placed before the bar. */
  label?: string;
  /** Enable navigation arrows. */
  navArrows: boolean;
  /** Total number of pages. Required. */
  totalPages: number;
  /** Number of pages to skip. */
  skip: number;
  /** Enable buttons to go to the first and last pages. */
  edges: boolean;
  /** Number of pages to show left/right of the current, before showing "load more" symbol (…). */
  split?: number;
  /** Number of pages to show at a time. If not set, all pages will be shown. */
  visiblePages?: number;
  /** Current page. */
  currentPage: number;
  /** Whether to show "go to page" feature. */
  goToPage: boolean;
  /**
   * Internal visible pages variable.
   * Needed to better handle conflicting props like `visiblePages` and `split`.
   * This state will change based on props values and validation,
   * keeping original `visiblePages` value intact.
   */
  private _visiblePages;
  /** Used to hides/change some functionalities on smaller screen sizes */
  isMobile: boolean;
  /** Value of the go to page input */
  goToPageValue: any;
  /** Event emitted when the current page has changed. */
  pageChanged: EventEmitter;
  /**
   * Set the max width of the pages container.
   */
  setPagesContainerWidth(): void;
  /**
   * Set visible pages.
   * Ensure that the visible pages are always <= the total pages.
   * If `visiblePages` isn't set, fallback to the total pages.
   */
  setVisiblePages(): void;
  /**
   * On page changed.
   * @emits pageChanged
   */
  onPageChanged(): void;
  /**
   * On split changed.
   * Empty `edges` value. The split feature wins over the pages chunks and edges.
   */
  onSplitChanged(): void;
  /**
   * Hide stuff on mobile.
   */
  onResize(): void;
  /**
   * Set functionalities according to screen size.
   */
  private setMobile;
  /**
   * Get a list of pages chunks, each of `visiblePages` length.
   * @returns {number[][]}
   */
  private getPagesChunks;
  /**
   * Scroll to the left the chunk of pages containing the current page.
   */
  private scrollToPage;
  /**
   * Select a page.
   * Do validations on the passed value before assigning it to `currentPage`.
   * @param {number} page Page number to set
   */
  private selectPage;
  /**
   * Render page number button.
   * @param {number} page Page number to render
   * @returns {HTMLButtonElement}
   */
  private renderPage;
  /**
   * Render split button.
   * @param {number} page Page to select on click.
   * @returns {HTMLButtonElement}
   */
  private renderEllipsisButton;
  /**
   * Render chunked page buttons.
   * @returns {HTMLDivElement[]}
   */
  private renderPages;
  /**
   * Render page buttons when split feature is enabled.
   * @returns {HTMLButtonElement[]}
   */
  private renderSplitPages;
  private renderBackButton;
  private renderForwardButton;
  private renderMobile;
  componentDidLoad(): void;
  componentDidRender(): void;
  render(): HostElement;
}
