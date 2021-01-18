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
import Hammer from "hammerjs";
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

  private swipeWrap: HTMLDivElement;
  private panDownCanClose: boolean = true;

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

  @Watch("status")
  watchStatusHandler(newVal: PocketStatus) {
    this.emitPocketToggle(this.pocketid, newVal);
  }

  componentWillLoad() {
    this.emitPocketToggle(this.pocketid, this.status);
  }

  componentDidLoad() {
    // INFO: swipe handling
    const mc = new Hammer(this.swipeWrap);
    mc.get("pan").set({ direction: Hammer.DIRECTION_VERTICAL });
    mc.on("panstart", (e: HammerInput) => {
      const pocketBody = this.hostElement.querySelector("z-pocket-body");
      const panStartY = e.center.y;
      const zPocketOffset = this.hostElement.offsetTop;
      const zPocketBodyOffset = pocketBody.offsetTop;
      this.panDownCanClose = panStartY <= zPocketOffset + zPocketBodyOffset;
    });
    mc.on("panup", () => {
      if (this.status !== PocketStatusEnum.open) {
        this.status = PocketStatusEnum.open;
      }
    });
    mc.on("pandown", () => {
      if (this.status !== PocketStatusEnum.closed && this.panDownCanClose) {
        this.status = PocketStatusEnum.closed;
      }
    });
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
        <div
          id={this.pocketid}
          class="contentWrapper"
          ref={el => (this.swipeWrap = el as HTMLDivElement)}
        >
          <slot />
        </div>
      </div>
    );
  }
}
