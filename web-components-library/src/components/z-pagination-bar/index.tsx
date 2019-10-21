import { Component, Prop, h, State, Event, EventEmitter } from "@stencil/core";
import 'hammerjs';


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

  bar: HTMLElement;

  componentDidLoad(){
    this.scrollPage = this.scrollPage.bind(this);


    let mc = new Hammer(this.bar);
    mc.get('swipe').set({ velocity: 0.5 });

    // listen to events...
    mc.on("swipeleft", this.scrollPage);
    mc.on("swiperight", this.scrollPage);
  }

  scrollPage(ev:HammerInput): void{
    let vel = Math.round(Math.abs(ev.velocity));
    console.log(vel)

    switch(ev.type){
      case 'swiperight':
        if (!this.canNavigateLeft()) break;
        const deltaPage1 = Math.max(1, vel);
        if (deltaPage1 != this.startpage) this.startpage = deltaPage1;
        break;
      case 'swipeleft':
          if (!this.canNavigateRight()) break;

          const deltaPage2 = Math.min(
            this.startpage + vel,
            this.pages - this.visiblepages + 1
          );
          if (deltaPage2 != this.startpage) this.startpage = deltaPage2;
        break;
      default:
        break;
    }
  }

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

  render() {
    return (
      <div  ref={(el) => this.bar = el as HTMLElement}
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
