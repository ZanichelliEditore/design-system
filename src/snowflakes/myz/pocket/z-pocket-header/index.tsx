import {Component, Event, EventEmitter, Prop, h} from "@stencil/core";
import Hammer from "hammerjs";
import {handleKeyboardSubmit} from "../../../../utils/utils";

/**
 * @slot  - pocket header content
 */
@Component({
  tag: "z-pocket-header",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZPocketHeader {
  /** pocket id */
  @Prop()
  pocketid: string;

  private swipeWrap: HTMLElement;

  /** Emitted on pocket header click */
  @Event()
  pocketHeaderClick: EventEmitter;

  private emitPocketHeaderClick(): void {
    this.pocketHeaderClick.emit({id: this.pocketid});
  }

  /** Emitted on pocket header pan */
  @Event()
  pocketHeaderPan: EventEmitter;

  private emitPocketHeaderPan(direction: string): void {
    this.pocketHeaderPan.emit({id: this.pocketid, direction});
  }

  constructor() {
    this.emitPocketHeaderClick = this.emitPocketHeaderClick.bind(this);
  }

  componentDidLoad(): void {
    // INFO: swipe handling
    const mc = new Hammer(this.swipeWrap);
    mc.get("pan").set({direction: Hammer.DIRECTION_VERTICAL});
    mc.on("panup", () => this.emitPocketHeaderPan("up"));
    mc.on("pandown", () => this.emitPocketHeaderPan("down"));
  }

  render(): HTMLElement {
    return (
      <header
        role="button"
        tabindex={0}
        onClick={() => this.emitPocketHeaderClick()}
        onKeyPress={(ev: KeyboardEvent) => handleKeyboardSubmit(ev, this.emitPocketHeaderClick)}
        ref={(el) => (this.swipeWrap = el as HTMLElement)}
      >
        <slot />
      </header>
    );
  }
}
