import { Component, Prop, h, State, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "z-pagination-bar",
  styleUrl: "styles.css",
  shadow: true
})
export class ZPaginationBar {
  @Prop() pages: number;
  @Prop() visiblepages: number;
  @Prop({ mutable: true }) currentpage: number = 1;
  @Prop({ mutable: true }) reset: boolean = false;

  @State() startpage: number = 1;
  @State() currentPages: number[] = [];

  //Mobile swipe variables
  private startTouch: number;
  private startTouchPage: number;
  private touchScrollSize: number = 60;

  @Event() goToPage: EventEmitter;
  emitGoToPage(page) {
    this.currentpage = page;
    this.goToPage.emit({ page: page });
  }

  componentWillRender() {
    if (this.reset) {
      this.startpage = 1;
      this.reset = false;
    }

    this.loadPages();
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
      this.loadPages();
    }
  }

  navigateRight() {
    if (this.canNavigateRight()) {
      this.startpage++;
      this.loadPages();
    }
  }

  touchStart(e: TouchEvent) {
    e.preventDefault();
    this.startTouch = e.changedTouches[0].clientX;
    this.startTouchPage = this.startpage;
  }

  calculateTouchMovement(diffX: number) {
    return Math.abs(Math.floor(diffX / this.touchScrollSize));
  }

  touchMove(e: TouchEvent) {
    e.preventDefault();
    const diffX = e.changedTouches[0].clientX - this.startTouch;
    const movement = this.calculateTouchMovement(diffX);

    if (diffX > 0) {
      if (!this.canNavigateLeft()) return;

      const deltaPage = Math.max(1, this.startTouchPage - movement);
      if (deltaPage != this.startpage) this.startpage = deltaPage;
    } else if (diffX < 0) {
      if (!this.canNavigateRight()) return;

      const deltaPage = Math.min(
        this.startTouchPage + movement,
        this.pages - this.visiblepages + 1
      );
      if (deltaPage != this.startpage) this.startpage = deltaPage;
    }
  }

  render() {
    return (
      <div
        onTouchStart={(e: TouchEvent) => {
          this.touchStart(e);
        }}
        onTouchMove={(e: TouchEvent) => {
          this.touchMove(e);
        }}
      >
        <z-icon
          name="chevron-left"
          class={!this.canNavigateLeft() && "disabled"}
          onClick={() => this.navigateLeft()}
        />
        {this.currentPages.map(page => (
          <z-pagination-page
            value={page}
            isselected={page === this.currentpage}
            onClick={() => this.emitGoToPage(page)}
          />
        ))}
        <z-icon
          name="chevron-right"
          class={!this.canNavigateRight() && "disabled"}
          onClick={() => this.navigateRight()}
        />
      </div>
    );
  }
}
