import {
  Component,
  Prop,
  h,
  Element,
  EventEmitter,
  Event,
} from "@stencil/core";
import { keybordKeyCodeEnum, ZChipType } from "../../../beans";

@Component({
  tag: "z-chip",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZChip {
  @Element() hostElement: HTMLElement;

  @Prop() regulartext?: string;
  @Prop() boldtext?: number;
  @Prop({ reflect: true }) type?: ZChipType = ZChipType.default;
  @Prop({ reflect: true }) disabled?: boolean = false;

  @Event({ eventName: "pressed" }) pressed: EventEmitter;

  isPressed(e) {
    console.log("is pressed");
    if (!this.disabled) {
      this.hostElement.shadowRoot
        .querySelector("div")
        .classList.toggle("pressed");
      this.pressed.emit(e);
    }
  }

  handleKeybordEvent(e) {
    if (
      e.keyCode === keybordKeyCodeEnum.ENTER ||
      e.keyCode === keybordKeyCodeEnum.SPACE
    ) {
      this.isPressed(e);
    }
  }

  private renderLegacyChip() {
    return (
      <div
        class={`${this.type} ${this.disabled ? "disabled" : ""}`}
        onClick={(e) => this.isPressed(e)}
        onKeyDown={(e: KeyboardEvent) => this.handleKeybordEvent(e)}
        tabindex="0"
      >
        <span class="boldtext">{this.boldtext}</span> {this.regulartext}
      </div>
    );
  }

  render() {
    return this.boldtext != null || this.regulartext != null ? (
      this.renderLegacyChip()
    ) : (
      <div
        class={`${this.type} ${this.disabled ? "disabled" : ""}`}
        onClick={(e) => this.isPressed(e)}
        onKeyDown={(e: KeyboardEvent) => this.handleKeybordEvent(e)}
        tabindex="0"
      >
        <slot />
      </div>
    );
  }
}
