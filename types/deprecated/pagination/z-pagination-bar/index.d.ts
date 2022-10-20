import { EventEmitter } from "../../../stencil-public-runtime";
export declare class ZPaginationBar {
  /** pages number */
  pages: number;
  /** number of visible pages*/
  visiblepages: number;
  /** current displayed page (mutable) */
  currentpage: number;
  /** initial page (mutable) */
  startpage: number;
  /** json stringified history of visited pages (optional) */
  historyraw?: string;
  /** array of history of visited pages (mutable, optional) */
  listhistoryrow?: number[];
  currentPages: number[];
  private velocityConstantMultiplier;
  private bar;
  constructor();
  componentDidLoad(): void;
  componentWillRender(): void;
  componentWillUpdate(): void;
  private initPagination;
  private parsehistoryraw;
  private scrollPage;
  /** emitted on page number click, returns page*/
  goToPage: EventEmitter;
  private emitGoToPage;
  /** emitted on start page change, returns startpage*/
  changeStartPage: EventEmitter;
  private emitChangeStartPage;
  /** emitted on adding page to isvisited array, returns page*/
  addPageToHistory: EventEmitter;
  private loadPages;
  private pageWindow;
  private canNavigateLeft;
  private canNavigateRight;
  private navigateLeft;
  private navigateRight;
  render(): HTMLDivElement;
}
