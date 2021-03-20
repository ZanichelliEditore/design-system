import { Component, Prop, h, State, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "z-toggle-button",
  styleUrl: "styles.css",
  shadow: true
})
export class ZToggleButton {
  /** label text */
  @Prop() label: string;
  /** disabled status flag (optional) */
  @Prop() isdisabled?: boolean = false;
  /** avoidclick status flag */
  @Prop() avoidclick: boolean;
  /** open by default (optional) */
  @Prop() opened?: boolean = false;

  @State() isOpen: boolean = false;

  /** emitted on toggle button click, returns isOpen */
  @Event() toggleClick: EventEmitter;
  emitToggleClick() {
    if (this.isdisabled) return;

    this.isOpen = !this.isOpen;
    this.toggleClick.emit(this.isOpen);
  }

  componentWillLoad() {
    if (this.opened) this.isOpen = true;
  }

  retrieveButtonClass() {
    let className = this.isOpen && "isopen";
    if (this.avoidclick) className = className + " avoid-clicks";
    return className;
  }

  render() {
    return (
      <button
        tabindex={this.avoidclick ? "-1" : "0"}
        class={this.retrieveButtonClass()}
        disabled={this.isdisabled}
        onClick={() => this.emitToggleClick()}
      >
        <z-icon
          name={this.isOpen ? "chevron-down" : "chevron-up"}
          width={16}
          height={16}
        />
        {this.label}
      </button>
    );
  }
}
