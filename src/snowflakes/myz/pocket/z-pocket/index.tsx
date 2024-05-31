import {Component, Element, Event, EventEmitter, Listen, Method, Prop, Watch, h} from "@stencil/core";
import {PocketStatus} from "../../../../beans";

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
  status: PocketStatus = PocketStatus.PREVIEW;

  /** open z-pocket */
  @Method()
  async open(): Promise<void> {
    this.status = PocketStatus.OPEN;
  }

  /** close z-pocket */
  @Method()
  async close(): Promise<void> {
    this.status = PocketStatus.CLOSED;
  }

  /** Emitted on pocket toggle, returns pocket id and status */
  @Event()
  pocketToggle: EventEmitter;

  private emitPocketToggle(id: string, status: PocketStatus): void {
    this.pocketToggle.emit({id, status});
  }

  @Listen("pocketHeaderClick")
  handlePocketHeaderClick(e: CustomEvent): void {
    if (e.detail.id && e.detail.id === this.pocketid) {
      switch (this.status) {
        case PocketStatus.PREVIEW:
        case PocketStatus.CLOSED:
          this.status = PocketStatus.OPEN;
          break;
        case PocketStatus.OPEN:
          this.status = PocketStatus.CLOSED;
          break;
      }
    }
  }

  @Listen("pocketHeaderPan")
  handlePocketHeaderPan(e: CustomEvent): void {
    if (e.detail.id && e.detail.id === this.pocketid) {
      if (e.detail.direction === "up") {
        this.status = PocketStatus.OPEN;
      } else if (e.detail.direction === "down") {
        this.status = PocketStatus.CLOSED;
      }
    }
  }

  @Watch("status")
  watchStatusHandler(newVal: PocketStatus): void {
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
