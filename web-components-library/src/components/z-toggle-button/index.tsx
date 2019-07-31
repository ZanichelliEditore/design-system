import { Component, Prop, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'z-toggle-button',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZToggleButton {
  @Prop() label: string;

  @State() isOpen: boolean = false;

  @Event() toggleClick: EventEmitter;
  emitToggleClick() {
    this.isOpen = !this.isOpen;
    this.toggleClick.emit(this.isOpen);
  }

  render() {
    return (
      <button class={this.isOpen && "isopen"} onClick={() => this.emitToggleClick()}>
        <z-icon name="head-arrow-up-icon" width={16} height={16} />
        {this.label}
      </button>
    );
  }
}
