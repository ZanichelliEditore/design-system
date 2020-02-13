import { Component, Prop, h, State, Event, EventEmitter } from "@stencil/core";

import Hammer from "hammerjs";

import { handleKeyboardSubmit } from "../../utils/utils";

@Component({
  tag: "z-pagination-bar",
  styleUrl: "styles.css",
  shadow: true
})
export class ZPaginationBar {
  @Prop() pages: number;
  @Prop() visiblepages: number;
  @Prop({ mutable: true }) currentpage: number = 1;
  @Prop({ mutable: true }) startpage: number = 1;
  @Prop() historyraw?: string;
  @Prop({ mutable: true }) listhistoryrow?: number[] = [];

  @State() currentPages: number[] = [];

  velocityConstantMultiplier: number = 2;

  bar: HTMLElement;

  constructor() {
    this.navigateRight = this.navigateRight.bind(this);
    this.navigateLeft = this.navigateLeft.bind(this);
    this.emitGoToPage = this.emitGoToPage.bind(this);
  }

  componentDidLoad() {
    this.scrollPage = this.scrollPage.bind(this);
    let mc = new Hammer(this.bar);
    // listen to events...
    mc.on("swiperight", this.scrollPage);
    mc.on("swipeleft", this.scrollPage);
  }

  componentWillRender() {
    this.initPagination();
  }

  componentWillUpdate() {
    this.initPagination();
  }

  initPagination() {
    this.loadPages();
    if (this.historyraw) {
      this.parsehistoryraw(this.historyraw);
    }
  }

  parsehistoryraw(historyraw: string) {
    this.listhistoryrow = [...JSON.parse(historyraw)];
  }

  scrollPage(ev: HammerInput): void {
    let vel =
      Math.round(Math.abs(ev.velocity)) * this.velocityConstantMultiplier;
    const deltaPage = Math.max(1, vel);
    switch (ev.type) {
      case "swiperight":
        if (!this.canNavigateLeft()) break;
        const newstartPage1 = this.startpage - deltaPage;
        if (newstartPage1 > 1) this.emitChangeStartPage(newstartPage1);
        else this.emitChangeStartPage(1);
        break;
      case "swipeleft":
        if (!this.canNavigateRight()) break;
        const newstartPage2 = this.startpage + deltaPage;
        if (newstartPage2 < this.pages - this.visiblepages + 1)
          this.emitChangeStartPage(newstartPage2);
        else this.emitChangeStartPage(this.pages - this.visiblepages + 1);
        break;
      default:
        break;
    }
  }

  @Event() goToPage: EventEmitter;
  emitGoToPage(page) {
    this.currentpage = page;
    this.goToPage.emit({ page: page });
    this.addPageToHistory.emit({ page: page });
  }

  @Event() changeStartPage: EventEmitter;
  emitChangeStartPage(startpage) {
    this.startpage = startpage;
    this.changeStartPage.emit({ startpage: startpage });
  }

  @Event() addPageToHistory: EventEmitter;
  emitAddPageToHistory(page) {
    this.listhistoryrow.push(page);
    this.changeStartPage.emit({ page: page });
  }

  loadPages() {
    this.currentPages.splice(0);
    const lastPage = this.pageWindow();

    let i: number;
    for (i = 0; i < lastPage; i++) {
      this.currentPages.push(i + this.startpage);
    }
  }

  pageWindow() {
    return Math.min(this.pages, this.visiblepages); //How many pages are there to show?
  }

  canNavigateLeft() {
    return this.startpage > 1;
  }
  canNavigateRight() {
    return this.startpage + this.visiblepages - 1 < this.pages;
  }

  navigateLeft() {
    if (this.canNavigateLeft()) {
      this.startpage--;
      this.emitChangeStartPage(this.startpage);
      this.loadPages();
    }
  }

  navigateRight() {
    if (this.canNavigateRight()) {
      this.startpage++;
      this.emitChangeStartPage(this.startpage);
      this.loadPages();
    }
  }

  render() {
    return (
      <div ref={el => (this.bar = el as HTMLElement)}>
        <z-icon
          name="chevron-left"
          class={!this.canNavigateLeft() && "disabled"}
          onClick={() => this.navigateLeft()}
          onKeyPress={(ev: KeyboardEvent) =>
            handleKeyboardSubmit(ev, this.navigateLeft)
          }
          tabindex={this.canNavigateLeft() ? 0 : -1}
        />
        {this.currentPages.map(page => (
          <z-pagination-page
            value={page}
            isselected={page === this.currentpage}
            onClick={() => this.emitGoToPage(page)}
            onKeyDown={(ev: KeyboardEvent) =>
              handleKeyboardSubmit(ev, this.emitGoToPage, page)
            }
            isvisited={this.listhistoryrow.includes(page)}
          />
        ))}
        <z-icon
          name="chevron-right"
          class={!this.canNavigateRight() && "disabled"}
          onClick={() => this.navigateRight()}
          onKeyPress={(ev: KeyboardEvent) =>
            handleKeyboardSubmit(ev, this.navigateRight)
          }
          tabindex={this.canNavigateRight() ? 0 : -1}
        />
      </div>
    );
  }
}
