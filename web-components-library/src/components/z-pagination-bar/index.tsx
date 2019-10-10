import { Component, Prop, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'z-pagination-bar',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZPaginationBar {
  @Prop() pages: number;
  @Prop() visiblepages: number;
  @Prop({ mutable: true }) currentpage: number = 1;

  @State() startpage: number = 1;
  @State() currentPages: number[] = [];

  @Event() goToPage: EventEmitter;
  emitGoToPage(page) {
    this.currentpage = page;
    // TODO: gestione start page ?
    this.goToPage.emit({ page: page });
  }

  componentWillRender() {
    this.loadPages();
  }

  loadPages() {
    this.currentPages.splice(0);
    const lastPage = this.pageWindow();
    // TODO: gestione start page se il numero di pagine è inferiore al numero di pagine visibili

    let i:number;
    for (i = 0 ; i < lastPage; i++) {
      this.currentPages.push(i+this.startpage);
    }
  }

  pageWindow(){
    return Math.min(this.pages, this.visiblepages)  //How many pages are there to show?
  }

  canNavigateLeft(){
    return this.startpage>1
  }
  canNavigateRight(){
    return (this.startpage+this.visiblepages -1) < this.pages
  }

  navigateLeft() {
    if(this.canNavigateLeft()){
      this.startpage--;
      this.loadPages()
    }
  }

  navigateRight() {
    if(this.canNavigateRight()){
      this.startpage++;
      this.loadPages()
    }
  }

  render() {
    return (
      <div>
        <z-icon name="head-arrow-left-icon" class={!this.canNavigateLeft() && 'disabled'} onClick={() => this.navigateLeft()} />
        {this.currentPages.map((page) => (
          <z-pagination-page value={page} isselected={page === this.currentpage}
            onClick={() => this.emitGoToPage(page)}
          />
        ))}
        <z-icon name="head-arrow-right-icon" class={!this.canNavigateRight() && 'disabled'} onClick={() => this.navigateRight()} />
      </div>
    );
  }
}
