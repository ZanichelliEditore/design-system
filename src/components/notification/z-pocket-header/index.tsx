import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";
import { handleKeyboardSubmit } from "../../../utils/utils";

/**
 * @slot  - pocket header content
 */
@Component({
  tag: "z-pocket-header",
  styleUrl: "styles.css",
  shadow: true
})
export class ZPocketHeader {
  /** pocket id */
  @Prop() pocketid: string;

  /** Emitted on pocket header click */
  @Event() pocketHeaderClick: EventEmitter;
  emitPocketHeaderClick() {
    this.pocketHeaderClick.emit({ id: this.pocketid });
  }

  constructor() {
    this.emitPocketHeaderClick = this.emitPocketHeaderClick.bind(this);
  }

  render() {
    return (
      <header
        role="button"
        tabindex={0}
        onClick={() => this.emitPocketHeaderClick()}
        onKeyPress={(ev: KeyboardEvent) =>
          handleKeyboardSubmit(ev, this.emitPocketHeaderClick)
        }
      >
        <slot />
      </header>
    );
  }
}
