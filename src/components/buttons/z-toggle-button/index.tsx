import {Component, Prop, h, Event, EventEmitter} from "@stencil/core";

@Component({
  tag: "z-toggle-button",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZToggleButton {
  /** label text */
  @Prop()
  label: string;
  /** disabled status flag (optional) */
  @Prop()
  isdisabled?: boolean = false;
  /** avoidclick status flag */
  @Prop()
  avoidclick: boolean;
  /** open by default (optional) */
  @Prop({mutable: true})
	opened?: boolean = false;

  /** emitted on toggle button click, returns isOpen */
  @Event()
  toggleClick: EventEmitter;
  emitToggleClick(): void {
    if (this.isdisabled) return;

    this.opened = !this.opened;
    this.toggleClick.emit(this.opened);
  }

  retrieveButtonClass(): string {
    let className = this.opened && "isopen";
    if (this.avoidclick) className = className + " avoid-clicks";
    return className;
  }

  render(): HTMLButtonElement {
    return (
      <button
        tabindex={this.avoidclick ? "-1" : "0"}
        class={this.retrieveButtonClass()}
        disabled={this.isdisabled}
        onClick={() => this.emitToggleClick()}
      >
        <z-icon
          name={this.opened ? "chevron-down" : "chevron-up"}
          width={16}
          height={16}
        />
        {this.label}
      </button>
    );
  }
}
