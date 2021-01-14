import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";
import { handleKeyboardSubmit } from "../../../utils/utils";

@Component({
  tag: "z-pocket-header",
  styleUrl: "styles.css",
  shadow: true
})
export class ZPocketHeader {
  /** pocket id */
  @Prop() pocketid: string;

  constructor() {
    this.emitPocketHeaderClick = this.emitPocketHeaderClick.bind(this);
  }

  /** Emitted on pocket header click */
  @Event() pocketHeaderClick: EventEmitter;
  emitPocketHeaderClick() {
    console.log("emitPocketHeaderClick " + this.pocketid);
    this.pocketHeaderClick.emit({ id: this.pocketid });
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
