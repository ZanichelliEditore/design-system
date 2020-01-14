import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'z-pagination-page',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZPaginationPage {
  @Prop() pageid: string;
  @Prop() value?: number;
  @Prop() isselected: boolean = false;
  @Prop() isdisabled: boolean = false;
  @Prop() isvisited: boolean = false;

  page: HTMLElement;

  render() {
    return (
      <a id={this.pageid} ref={(el) => this.page = el as HTMLElement}
        class={`${this.isselected && 'selected'} ${this.isdisabled && 'disabled'} ${this.isvisited && 'visited'}`}
        tabindex={this.isdisabled ? -1 : 1}
        role="button"
      >
        {this.value}
      </a>
    );
  }
}
