import {
  Component,
  Prop,
  h,
  Method,
  Event,
  EventEmitter,
  Listen
} from "@stencil/core";
// import { handleKeyboardSubmit } from "../../../utils/utils";
import Hammer from "hammerjs";
import { PocketStatus, PocketStatusEnum } from "../../../beans";

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
  /** pocket status */
  @Prop({ mutable: true }) status: PocketStatus = PocketStatusEnum.preview;
  // /** pocket is modal (dark background) (optional) */
  // @Prop() ismodal?: boolean = false;

  private swipeWrap: HTMLDivElement;
  // private mainElem: HTMLElement;

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
    console.log("emitPocketToggle " + status);
    this.pocketToggle.emit({ id, status });
  }

  @Listen("pocketHeaderClick")
  handlePocketHeaderClick(e: CustomEvent): void {
    if (e.detail.id === this.pocketid) {
      console.log("handlePocketHeaderClick " + this.pocketid);
      switch (this.status) {
        case PocketStatusEnum.preview:
        case PocketStatusEnum.closed:
          this.status = PocketStatusEnum.open;
          break;
        case PocketStatusEnum.open:
          this.status = PocketStatusEnum.closed;
          break;
      }

      this.emitPocketToggle(this.pocketid, this.status);
    }
  }

  // constructor() {
  //   this.togglePocket = this.togglePocket.bind(this);
  // }

  componentDidLoad() {
    // console.log(this.mainElem.scrollTop);
    // INFO: swipe handling
    const mc = new Hammer(this.swipeWrap);
    mc.get("pan").set({ direction: Hammer.DIRECTION_VERTICAL });
    mc.on("panup", () => {
      if (this.status !== PocketStatusEnum.open) {
        this.status = PocketStatusEnum.open;
        this.emitPocketToggle(this.pocketid, this.status);
      }
    });
    mc.on("pandown", () => {
      if (
        this.status !== PocketStatusEnum.closed
        // &&
        // this.mainElem.scrollTop === 0 // TODO: questo funge?
      ) {
        this.status = PocketStatusEnum.closed;
        this.emitPocketToggle(this.pocketid, this.status);
        // todo: emit ogni volta che cambia status
      }
    });
  }

  handleBackgroundClick(e: any) {
    if (e.target.dataset.action == "pocketBackground") {
      this.close();
    }
  }

  render(): HTMLDivElement {
    document.body.style.overflow =
      this.status === PocketStatusEnum.open ? "hidden" : "auto";

    // return (
    //   <div
    //     data-action="pocketBackground"
    //     data-pocket={this.pocketid}
    //     class={this.status}
    //     onClick={(e: any) => this.handleBackgroundClick(e)}
    //   >
    //     <div
    //       id={this.pocketid}
    //       ref={el => (this.swipeWrap = el as HTMLDivElement)}
    //     >
    //       <header
    //         role="button"
    //         tabindex={0}
    //         onClick={() => this.togglePocket()}
    //         onKeyPress={(ev: KeyboardEvent) =>
    //           handleKeyboardSubmit(ev, this.togglePocket)
    //         }
    //       >
    //         <z-icon
    //           name={
    //             this.isopen
    //               ? "chevron-down-circle-filled"
    //               : "chevron-up-circle-filled"
    //           }
    //           width={24}
    //           height={24}
    //         />
    //       </header>
    //       <main
    //         class={this.status}
    //         onTransitionEnd={() =>
    //           this.emitPocketToggle(this.pocketid, this.status)
    //         }
    //         ref={el => (this.mainElem = el as HTMLElement)}
    //       >
    //         <slot />
    //       </main>
    //     </div>
    //   </div>
    // );

    return (
      <div
        data-action="pocketBackground"
        data-pocket={this.pocketid}
        class={this.status}
        onClick={(e: any) => this.handleBackgroundClick(e)}
      >
        <div
          id={this.pocketid}
          ref={el => (this.swipeWrap = el as HTMLDivElement)}
        >
          <slot />
        </div>
      </div>
    );
  }
}
