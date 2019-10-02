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
  @Prop() startpage: number = 1;

  @State() currentPages: number[] = [];
  @State() prev: number = 0;
  @State() next: number = 0;

  @Event() goToPage: EventEmitter;
  emitGoToPage(page) {
    this.currentpage = page;
    // TODO: gestione start page ?
    this.goToPage.emit({ page: page });
  }

  componentWillLoad() {
    this.loadPages(this.startpage);
  }

  loadPages(startPage = 1) {
    this.currentPages = [];
    const lastPage = Math.min(this.pages, startPage + this.visiblepages - 1);
    // TODO: gestione start page se il numero di pagine è inferiore al numero di pagine visibili

    let i;
    for (i = startPage; i <= lastPage; i++) {
      this.currentPages.push(i);
    }

    if (startPage > 1) {
      this.prev = startPage - 1;
    } else {
      this.prev = 0;
    }

    if (lastPage < this.pages) {
      this.next = startPage + 1;
    } else {
      this.next = 0;
    }
  }

  navigate(direction) {
    switch (direction) {
      case 'prev':
        if (this.prev) this.loadPages(this.prev);
        break;
      case 'next':
        if (this.next) this.loadPages(this.next);
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>

        <z-icon name="head-arrow-left-icon" class={!this.prev && 'disabled'} onClick={() => this.navigate('prev')} />

        {this.currentPages.map((page) => (
          <z-pagination-page value={page} isselected={page === this.currentpage}
            onClick={() => this.emitGoToPage(page)}
          />
        ))}

        <z-icon name="head-arrow-right-icon" class={!this.next && 'disabled'} onClick={() => this.navigate('next')} />

      </div>
    );
  }
}
