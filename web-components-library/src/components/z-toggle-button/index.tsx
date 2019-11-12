import { Component, Prop, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'z-toggle-button',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZToggleButton {
  @Prop() label: string;
  @Prop() isdisabled?: boolean = false;
  @Prop() avoidclick: boolean;

  @State() isOpen: boolean = false;

  @Event() toggleClick: EventEmitter;
  emitToggleClick() {
    if (this.isdisabled) return;

    this.isOpen = !this.isOpen;
    this.toggleClick.emit(this.isOpen);
  }

  retrieveButtonClass() {
    let className = this.isOpen && "isopen";
    if (this.avoidclick) className = className + " avoid-clicks"
    return className;
  }

  render() {
    return (
      <button class={this.retrieveButtonClass()} disabled={this.isdisabled} onClick={() => this.emitToggleClick()}>
        <z-icon name={this.isOpen ? "chevron-down" : "chevron-up"} width={16} height={16} />
        {this.label}
      </button>
    );
  }
}
