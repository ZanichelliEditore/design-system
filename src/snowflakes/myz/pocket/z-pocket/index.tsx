import {Component, Prop, h, Method, Event, EventEmitter, Listen, Element, Watch} from "@stencil/core";
import {PocketStatusEnum} from "../../../../beans";

/**
 * @slot - pocket content
 */
@Component({
  tag: "z-pocket",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZPocket {
  @Element() hostElement: HTMLZPocketElement;

  /** pocket id */
  @Prop()
  pocketid: string;

  /** pocket status */
  @Prop({mutable: true})
  status: PocketStatusEnum = PocketStatusEnum.PREVIEW;

  /** open z-pocket */
  @Method()
  async open(): Promise<void> {
    this.status = PocketStatusEnum.OPEN;
  }

  /** close z-pocket */
  @Method()
  async close(): Promise<void> {
    this.status = PocketStatusEnum.CLOSED;
  }

  /** Emitted on pocket toggle, returns pocket id and status */
  @Event()
  pocketToggle: EventEmitter;

  private emitPocketToggle(id: string, status: PocketStatusEnum): void {
    this.pocketToggle.emit({id, status});
  }

  @Listen("pocketHeaderClick")
  handlePocketHeaderClick(e: CustomEvent): void {
    if (e.detail.id && e.detail.id === this.pocketid) {
      switch (this.status) {
        case PocketStatusEnum.PREVIEW:
        case PocketStatusEnum.CLOSED:
          this.status = PocketStatusEnum.OPEN;
          break;
        case PocketStatusEnum.OPEN:
          this.status = PocketStatusEnum.CLOSED;
          break;
      }
    }
  }

  @Listen("pocketHeaderPan")
  handlePocketHeaderPan(e: CustomEvent): void {
    if (e.detail.id && e.detail.id === this.pocketid) {
      if (e.detail.direction === "up") {
        this.status = PocketStatusEnum.OPEN;
      } else if (e.detail.direction === "down") {
        this.status = PocketStatusEnum.CLOSED;
      }
    }
  }

  @Watch("status")
  watchStatusHandler(newVal: PocketStatusEnum): void {
    this.emitPocketToggle(this.pocketid, newVal);
  }

  componentWillLoad(): void {
    this.emitPocketToggle(this.pocketid, this.status);
  }

  private handleBackgroundClick(e: MouseEvent): void {
    if ((e.target as HTMLElement).dataset.action == "pocketBackground") {
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
          onClick={(e: MouseEvent) => this.handleBackgroundClick(e)}
        />
        <div
          id={this.pocketid}
          class="content-wrapper"
        >
          <div>
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
