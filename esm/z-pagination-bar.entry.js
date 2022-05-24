import { r as registerInstance, c as createEvent, h } from './index-90e18641.js';
import { h as hammer } from './hammer-501342a9.js';
import { h as handleKeyboardSubmit } from './utils-05b6c600.js';
import './_commonjsHelpers-8b28c6fa.js';
import './index-023c206a.js';
import './breakpoints-c386984e.js';

const stylesCss = ":host>div{height:48px;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-around;align-items:center;align-content:center}:host>div>z-icon{cursor:pointer;margin:calc(var(--space-unit) * 2) 0;color:var(--color-primary01);fill:var(--color-primary01)}:host>div>z-icon.disabled{cursor:default;pointer-events:none;color:var(--color-disabled01);fill:var(--color-disabled01)}";

const ZPaginationBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.goToPage = createEvent(this, "goToPage", 7);
    this.changeStartPage = createEvent(this, "changeStartPage", 7);
    this.addPageToHistory = createEvent(this, "addPageToHistory", 7);
    /** current displayed page (mutable) */
    this.currentpage = 1;
    /** initial page (mutable) */
    this.startpage = 1;
    /** array of history of visited pages (mutable, optional) */
    this.listhistoryrow = [];
    this.currentPages = [];
    this.velocityConstantMultiplier = 2;
    this.navigateRight = this.navigateRight.bind(this);
    this.navigateLeft = this.navigateLeft.bind(this);
    this.emitGoToPage = this.emitGoToPage.bind(this);
  }
  componentDidLoad() {
    this.scrollPage = this.scrollPage.bind(this);
    let mc = new hammer(this.bar);
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
  parsehistoryraw(historyraw) {
    this.listhistoryrow = [...JSON.parse(historyraw)];
  }
  scrollPage(ev) {
    let vel = Math.round(Math.abs(ev.velocity)) * this.velocityConstantMultiplier;
    const deltaPage = Math.max(1, vel);
    switch (ev.type) {
      case "swiperight":
        if (!this.canNavigateLeft())
          break;
        const newstartPage1 = this.startpage - deltaPage;
        if (newstartPage1 > 1)
          this.emitChangeStartPage(newstartPage1);
        else
          this.emitChangeStartPage(1);
        break;
      case "swipeleft":
        if (!this.canNavigateRight())
          break;
        const newstartPage2 = this.startpage + deltaPage;
        if (newstartPage2 < this.pages - this.visiblepages + 1)
          this.emitChangeStartPage(newstartPage2);
        else
          this.emitChangeStartPage(this.pages - this.visiblepages + 1);
        break;
    }
  }
  emitGoToPage(page) {
    this.currentpage = page;
    this.goToPage.emit({ page: page });
    this.addPageToHistory.emit({ page: page });
  }
  emitChangeStartPage(startpage) {
    this.startpage = startpage;
    this.changeStartPage.emit({ startpage: startpage });
  }
  emitAddPageToHistory(page) {
    this.listhistoryrow.push(page);
    this.changeStartPage.emit({ page: page });
  }
  loadPages() {
    this.currentPages.splice(0);
    const lastPage = this.pageWindow();
    let i;
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
    return (h("div", { ref: el => (this.bar = el) }, h("z-icon", { name: "chevron-left", class: !this.canNavigateLeft() && "disabled", onClick: () => this.navigateLeft(), onKeyPress: (ev) => handleKeyboardSubmit(ev, this.navigateLeft), tabindex: this.canNavigateLeft() ? 0 : -1 }), this.currentPages.map(page => (h("z-pagination-page", { value: page, isselected: page === this.currentpage, onClick: () => this.emitGoToPage(page), onKeyDown: (ev) => handleKeyboardSubmit(ev, this.emitGoToPage, page), isvisited: this.listhistoryrow.includes(page) }))), h("z-icon", { name: "chevron-right", class: !this.canNavigateRight() && "disabled", onClick: () => this.navigateRight(), onKeyPress: (ev) => handleKeyboardSubmit(ev, this.navigateRight), tabindex: this.canNavigateRight() ? 0 : -1 })));
  }
};
ZPaginationBar.style = stylesCss;

export { ZPaginationBar as z_pagination_bar };
