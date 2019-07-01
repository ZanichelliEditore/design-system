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

  toggleHandler() {
    this.isOpen = !this.isOpen;
    this.toggle.emit();
  }

  render() {
    return (
      <button class={this.isOpen && "isopen"} onClick={() => this.toggleHandler()}>
        <i /> {this.label}
      </button>
    );
  }
}
