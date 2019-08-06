import { Component, Prop, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'z-button-sort',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZButtonSort {
  @Prop() label: string;
  @Prop() counter: number;
  @Prop() buttonid: string;

  @State() isSelected: boolean = false;
  @State() sortAsc: boolean = true;

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
        <label>{this.label} ({this.counter})</label>
        <span>{this.sortAsc ? 'A-Z' : 'Z-A'}</span>
        <z-icon name="ordina-icon-stroked" width={16} height={16} />
      </button>
    );
  }
}
