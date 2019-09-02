import { Component, Prop, h, State, Event, EventEmitter } from '@stencil/core';

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
  @Prop() isselected?: boolean = false;
  @Prop() sortasc?: boolean = true;

  @State() isSelected: boolean;
  @State() sortAsc: boolean;

  componentWillLoad() {
    this.isSelected = this.isselected;
    this.sortAsc = this.sortasc;
  }

  @Event() buttonSortClick: EventEmitter;
  emitButtonSortClick() {
    if (!this.isSelected) {
      this.isSelected = !this.isSelected;
    } else {
      this.sortAsc = !this.sortAsc;
    }
    this.buttonSortClick.emit({ buttonid: this.buttonid, sortAsc: this.sortAsc });
  }

  render() {
    return (
      <button id={this.buttonid} class={this.isSelected && "selected"} onClick={() => this.emitButtonSortClick()}>
        <label>
          {this.sortAsc ? this.label : this.desclabel}
          {this.counter && ` (${this.counter})`}</label>
        <span>{this.sortAsc ? this.sortlabelasc : this.sortlabeldesc}</span>
        <z-icon name="ordina-icon-stroked" width={16} height={16} />
      </button>
    );
  }
}
