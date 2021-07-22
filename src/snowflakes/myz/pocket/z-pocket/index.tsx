import {
  Component,
  Prop,
  h,
  Method,
  Event,
  EventEmitter,
  Listen,
  Element,
  Watch
} from "@stencil/core";
import { PocketStatus, PocketStatusEnum } from "../../../beans";

/**
 * @slot  - pocket content
 */
@Component({
  tag: "z-pocket",
  styleUrl: "styles.css",
  shadow: true
})
export class ZPocket {
  @Element() hostElement: HTMLElement;

  /** pocket id */
  @Prop() pocketid: string;
  /** pocket status */
  @Prop({ mutable: true }) status: PocketStatus = PocketStatusEnum.preview;

  /** open z-pocket */
  @Method()
  async open() {
    this.status = PocketStatusEnum.open;
  }

  /** close z-pocket */
  @Method()
  async close() {
    this.status = PocketStatusEnum.closed;
  }

  /** Emitted on pocket toggle, returns pocket id and status */
  @Event() pocketToggle: EventEmitter;
  emitPocketToggle(id: string, status: PocketStatus) {
    this.pocketToggle.emit({ id, status });
  }

  @Listen("pocketHeaderClick")
  handlePocketHeaderClick(e: CustomEvent): void {
    if (e.detail.id && e.detail.id === this.pocketid) {
      switch (this.status) {
        case PocketStatusEnum.preview:
        case PocketStatusEnum.closed:
          this.status = PocketStatusEnum.open;
          break;
        case PocketStatusEnum.open:
          this.status = PocketStatusEnum.closed;
          break;
      }
    }
  }

  @Listen("pocketHeaderPan")
  handlePocketHeaderPan(e: CustomEvent): void {
    if (e.detail.id && e.detail.id === this.pocketid) {
      if (e.detail.direction === "up") {
        this.status = PocketStatusEnum.open;
      } else if (e.detail.direction === "down") {
        this.status = PocketStatusEnum.closed;
      }
    }
  }

  @Watch("status")
  watchStatusHandler(newVal: PocketStatus) {
    this.emitPocketToggle(this.pocketid, newVal);
  }

  componentWillLoad() {
    this.emitPocketToggle(this.pocketid, this.status);
  }

  handleBackgroundClick(e: any) {
    if (e.target.dataset.action == "pocketBackground") {
      this.close();
    }
  }

  render(): HTMLDivElement {
    return (
      <div>
        <div
          data-action="pocketBackground"
          data-pocket={this.pocketid}
          class={`background ${this.status}`}
          onClick={(e: any) => this.handleBackgroundClick(e)}
        />
        <div id={this.pocketid} class="contentWrapper">
          <div>
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
