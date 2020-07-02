import { Component, Prop, h, Method, Event, EventEmitter } from "@stencil/core";
import { handleKeyboardSubmit } from "../../../utils/utils";
import Hammer from "hammerjs";

/**
 * @slot generic slot - pocket content
 */
@Component({
  tag: "z-pocket",
  styleUrl: "styles.css",
  shadow: true
})
export class ZPocket {
  /** pocket id */
  @Prop() pocketid: string;
  /** pocket is open (optional) */
  @Prop({ mutable: true }) isopen?: boolean = true;
  /** pocket is modal (dark background) (optional) */
  @Prop() ismodal?: boolean = false;

  private swipeWrap: HTMLDivElement;
  private mainElem: HTMLElement;

  /** close z-pocket */
  @Method()
  async close() {
    this.isopen = false;
  }

  /** Emitted on pocket toggle, returns pocket id and open status (boolean) */
  @Event() pocketToggle: EventEmitter;
  emitPocketToggle(id: string, open: boolean) {
    this.pocketToggle.emit({ id, open });
  }

  constructor() {
    this.togglePocket = this.togglePocket.bind(this);
  }

  componentDidLoad() {
    // INFO: swipe handling
    const mc = new Hammer(this.swipeWrap);
    mc.get("pan").set({ direction: Hammer.DIRECTION_VERTICAL });
    mc.on("panup", () => {
      if (!this.isopen) this.isopen = true;
    });
    mc.on("pandown", () => {
      if (this.isopen && this.mainElem.scrollTop === 0) this.isopen = false;
    });
  }

  togglePocket() {
    this.isopen = !this.isopen;
  }

  handleBackgroundClick(e: any) {
    if (e.target.dataset.action == "pocketBackground") {
      this.close();
    }
  }

  render(): HTMLDivElement {
    document.body.style.overflow = this.isopen ? "hidden" : "auto";

    return (
      <div
        data-action="pocketBackground"
        data-pocket={this.pocketid}
        class={`
          ${this.isopen && "open"}
          ${this.ismodal && this.isopen && " modal"}
        `}
        onClick={(e: any) => this.handleBackgroundClick(e)}
      >
        <div
          id={this.pocketid}
          ref={el => (this.swipeWrap = el as HTMLDivElement)}
        >
          <header
            role="button"
            tabindex={0}
            onClick={() => this.togglePocket()}
            onKeyPress={(ev: KeyboardEvent) =>
              handleKeyboardSubmit(ev, this.togglePocket)
            }
          >
            <z-icon
              name={
                this.isopen
                  ? "circle-chevron-down-fill"
                  : "circle-chevron-up-fill"
              }
              width={24}
              height={24}
            />
          </header>
          <main
            class={this.isopen && "open"}
            onTransitionEnd={() =>
              this.emitPocketToggle(this.pocketid, this.isopen)
            }
            ref={el => (this.mainElem = el as HTMLElement)}
          >
            <slot />
          </main>
        </div>
      </div>
    );
  }
}
