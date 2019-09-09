import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'z-button-sort',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZButtonSort {
  @Prop() buttonid: string;
  @Prop() label: string;
  @Prop() desclabel?: string = this.label;
  @Prop() counter?: number;
  @Prop() sortlabelasc?: string = 'A-Z';
  @Prop() sortlabeldesc?: string = 'Z-A';
  @Prop({ mutable: true }) isselected?: boolean = false;
  @Prop({ mutable: true }) sortasc?: boolean = true;

  @Event() buttonSortClick: EventEmitter;
  emitButtonSortClick() {
    if (!this.isselected) {
      this.isselected = true;
    } else {
      this.sortasc = !this.sortasc;
    }
    this.buttonSortClick.emit({ buttonid: this.buttonid, sortAsc: this.sortasc });
  }

  render() {
    return (
      <button id={this.buttonid} class={this.isselected && "selected"} onClick={() => this.emitButtonSortClick()}>
        <label>
          {this.sortasc ? this.label : this.desclabel}
          {this.counter && ` (${this.counter})`}</label>
        <span>{this.sortasc ? this.sortlabelasc : this.sortlabeldesc}</span>
        <z-icon name="ordina-icon-stroked" width={16} height={16} />
      </button>
    );
  }
}
