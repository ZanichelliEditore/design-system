import { Component, Prop, h, Method, Event, EventEmitter } from "@stencil/core";
import { handleKeyboardSubmit } from "../../../utils/utils";

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

  togglePocket() {
    this.isopen = !this.isopen;
  }

  handleBackgroundClick(e: any) {
    if (e.target.dataset.action == "pocketBackground") {
      this.close();
    }
  }

  render(): HTMLDivElement {
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
        <div id={this.pocketid}>
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
          >
            <slot />
          </main>
        </div>
      </div>
    );
  }
}
