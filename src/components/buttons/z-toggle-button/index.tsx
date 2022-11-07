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
  isdisabled? = false;

  /** avoidclick status flag */
  @Prop()
  avoidclick: boolean;

  /** open by default (optional) */
  @Prop({mutable: true, reflect: true})
  opened? = false;

  /** emitted on toggle button click, returns isOpen */
  @Event()
  toggleClick: EventEmitter;

  private emitToggleClick(): void {
    if (this.isdisabled) {
      return;
    }

    this.opened = !this.opened;
    this.toggleClick.emit(this.opened);
  }

  render(): HTMLButtonElement {
    return (
      <button
        tabindex={this.avoidclick ? "-1" : "0"}
        class={{
          "avoid-clicks": this.avoidclick,
        }}
        type="button"
        disabled={this.isdisabled}
        onClick={() => this.emitToggleClick()}
      >
        <z-icon
          name={this.opened ? "chevron-up" : "chevron-down"}
          width={16}
          height={16}
        />
        {this.label}
      </button>
    );
  }
}
