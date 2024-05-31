import {Component, Event, EventEmitter, Prop, h} from "@stencil/core";

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

  /**  aria-label for the button */
  @Prop()
  ariaLabel = "";

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
          "isopen": this.opened,
          "avoid-clicks": this.avoidclick,
        }}
        disabled={this.isdisabled}
        aria-expanded={this.opened ? "true" : "false"}
        aria-label={this.ariaLabel}
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
