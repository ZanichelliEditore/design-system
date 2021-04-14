/// <reference types="hammerjs" />
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
  velocityConstantMultiplier: number;
  bar: HTMLElement;
  constructor();
  componentDidLoad(): void;
  componentWillRender(): void;
  componentWillUpdate(): void;
  initPagination(): void;
  parsehistoryraw(historyraw: string): void;
  scrollPage(ev: HammerInput): void;
  /** emitted on page number click, returns page*/
  goToPage: EventEmitter;
  emitGoToPage(page: any): void;
  /** emitted on start page change, returns startpage*/
  changeStartPage: EventEmitter;
  emitChangeStartPage(startpage: any): void;
  /** emitted on adding page to isvisited array, returns page*/
  addPageToHistory: EventEmitter;
  emitAddPageToHistory(page: any): void;
  loadPages(): void;
  pageWindow(): number;
  canNavigateLeft(): boolean;
  canNavigateRight(): boolean;
  navigateLeft(): void;
  navigateRight(): void;
  render(): any;
}
