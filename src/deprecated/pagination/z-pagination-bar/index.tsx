import {Component, Prop, h, State, Event, EventEmitter} from "@stencil/core";

import Hammer from "hammerjs";

import {handleKeyboardSubmit} from "../../../utils/utils";

@Component({
  tag: "z-pagination-bar",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZPaginationBar {
  /** pages number */
  @Prop()
  pages: number;

  /** number of visible pages*/
  @Prop()
  visiblepages: number;

  /** current displayed page (mutable) */
  @Prop({mutable: true})
  currentpage = 1;

  /** initial page (mutable) */
  @Prop({mutable: true})
  startpage = 1;

  /** json stringified history of visited pages (optional) */
  @Prop()
  historyraw?: string;

  /** array of history of visited pages (mutable, optional) */
  @Prop({mutable: true})
  listhistoryrow?: number[] = [];

  @State()
  currentPages: number[] = [];

  private velocityConstantMultiplier = 2;

  private bar: HTMLElement;

  constructor() {
    this.navigateRight = this.navigateRight.bind(this);
    this.navigateLeft = this.navigateLeft.bind(this);
    this.emitGoToPage = this.emitGoToPage.bind(this);
  }

  componentDidLoad(): void {
    this.scrollPage = this.scrollPage.bind(this);
    const mc = new Hammer(this.bar);
    // listen to events...
    mc.on("swiperight", this.scrollPage);
    mc.on("swipeleft", this.scrollPage);
  }

  componentWillRender(): void {
    this.initPagination();
  }

  componentWillUpdate(): void {
    this.initPagination();
  }

  private initPagination(): void {
    this.loadPages();
    if (this.historyraw) {
      this.parsehistoryraw(this.historyraw);
    }
  }

  private parsehistoryraw(historyraw: string): void {
    this.listhistoryrow = [...JSON.parse(historyraw)];
  }

  private scrollPage(ev: HammerInput): void {
    const vel = Math.round(Math.abs(ev.velocity)) * this.velocityConstantMultiplier;
    const deltaPage = Math.max(1, vel);
    switch (ev.type) {
      case "swiperight":
        if (this.canNavigateLeft()) {
          this.emitChangeStartPage(Math.max(1, this.startpage - deltaPage));
        }
        break;
      case "swipeleft":
        if (this.canNavigateRight()) {
          this.emitChangeStartPage(Math.min(this.startpage + deltaPage, this.pages - this.visiblepages + 1));
        }
        break;
    }
  }

  /** emitted on page number click, returns page*/
  @Event()
  goToPage: EventEmitter;

  private emitGoToPage(page): void {
    this.currentpage = page;
    this.goToPage.emit({page: page});
    this.addPageToHistory.emit({page: page});
  }

  /** emitted on start page change, returns startpage*/
  @Event()
  changeStartPage: EventEmitter;

  private emitChangeStartPage(startpage): void {
    this.startpage = startpage;
    this.changeStartPage.emit({startpage: startpage});
  }

  /** emitted on adding page to isvisited array, returns page*/
  @Event()
  addPageToHistory: EventEmitter;

  private loadPages(): void {
    this.currentPages.splice(0);
    const lastPage = this.pageWindow();

    let i: number;
    for (i = 0; i < lastPage; i++) {
      this.currentPages.push(i + this.startpage);
    }
  }

  private pageWindow(): number {
    return Math.min(this.pages, this.visiblepages); //How many pages are there to show?
  }

  private canNavigateLeft(): boolean {
    return this.startpage > 1;
  }

  private canNavigateRight(): boolean {
    return this.startpage + this.visiblepages - 1 < this.pages;
  }

  private navigateLeft(): void {
    if (this.canNavigateLeft()) {
      this.startpage--;
      this.emitChangeStartPage(this.startpage);
      this.loadPages();
    }
  }

  private navigateRight(): void {
    if (this.canNavigateRight()) {
      this.startpage++;
      this.emitChangeStartPage(this.startpage);
      this.loadPages();
    }
  }

  render(): HTMLDivElement {
    return (
      <div ref={(el) => (this.bar = el as HTMLElement)}>
        <z-icon
          name="chevron-left"
          class={!this.canNavigateLeft() && "disabled"}
          onClick={() => this.navigateLeft()}
          onKeyPress={(ev: KeyboardEvent) => handleKeyboardSubmit(ev, this.navigateLeft)}
          tabindex={this.canNavigateLeft() ? 0 : -1}
        />
        {this.currentPages.map((page) => (
          <z-pagination-page
            value={page}
            isselected={page === this.currentpage}
            onClick={() => this.emitGoToPage(page)}
            onKeyDown={(ev: KeyboardEvent) => handleKeyboardSubmit(ev, this.emitGoToPage, page)}
            isvisited={this.listhistoryrow.includes(page)}
          />
        ))}
        <z-icon
          name="chevron-right"
          class={!this.canNavigateRight() && "disabled"}
          onClick={() => this.navigateRight()}
          onKeyPress={(ev: KeyboardEvent) => handleKeyboardSubmit(ev, this.navigateRight)}
          tabindex={this.canNavigateRight() ? 0 : -1}
        />
      </div>
    );
  }
}
