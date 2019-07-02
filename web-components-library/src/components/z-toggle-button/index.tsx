import { Component, Prop, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'z-toggle-button',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZToggleButton {
  @Prop() label: string;

  @State() isOpen: boolean = false;

  @Event() toggle: EventEmitter;
  emitToggle() {
    this.isOpen = !this.isOpen;
    this.toggle.emit();
  }

  render() {
    return (
      <button class={this.isOpen && "isopen"} onClick={() => this.emitToggle()}>
        <i /> {this.label}
      </button>
    );
  }
}
