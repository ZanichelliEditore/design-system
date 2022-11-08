import {Component, Prop, h, Event, EventEmitter} from "@stencil/core";

/**
 * Toggle button component.
 */
@Component({
  tag: "z-toggle-button",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZToggleButton {
  /** Label text */
  @Prop()
  label: string;

  /** Disabled status */
  @Prop()
  isdisabled? = false;

  /** avoidclick status flag */
  @Prop()
  avoidclick: boolean;

  /** Toggle status of the button */
  @Prop({mutable: true, reflect: true})
  opened? = false;

  /** Emitted on toggle button click, returns `opened` value */
  @Event()
  toggleClick: EventEmitter;

  private onClick(): void {
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
        onClick={() => this.onClick()}
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
