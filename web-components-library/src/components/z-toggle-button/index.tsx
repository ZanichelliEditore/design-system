import { Component, Prop, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'z-toggle-button',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZToggleButton {
  @Prop() label: string;
  @Prop() isdisabled?: boolean = false;

  @State() isOpen: boolean = false;

  @Event() toggleClick: EventEmitter;
  emitToggleClick() {
    if (this.isdisabled) return;

    this.isOpen = !this.isOpen;
    this.toggleClick.emit(this.isOpen);
  }

  render() {
    return (
      <button class={this.isOpen && "isopen"} disabled={this.isdisabled} onClick={() => this.emitToggleClick()}>
        <z-icon name="head-arrow-up-icon" width={16} height={16} />
        {this.label}
      </button>
    );
  }
}
