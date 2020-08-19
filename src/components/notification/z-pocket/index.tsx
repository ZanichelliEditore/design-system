import {
  Component,
  Prop,
  h,
  Method,
  Event,
  EventEmitter,
  Watch,
  State
} from "@stencil/core";
import { handleKeyboardSubmit } from "../../../utils/utils";
import { PocketItemBean } from "../../../beans";
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
  /** array (or JSON string) of alert items (optional). If items is not defined, the slot will be used. */
  @Prop() items?: string | PocketItemBean[];

  @State() currentItem: number = 1;

  private swipeWrap: HTMLDivElement;
  private mainElem: HTMLElement;
  private itemsList: null | PocketItemBean[];

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

  /** Emitted on pocket item CTA click, returns pocket id, item id */
  @Event() pocketButtonClick: EventEmitter;
  emitPocketButtonClick(id: string) {
    console.log({ id: this.pocketid, item: id });
    this.pocketButtonClick.emit({ id: this.pocketid, item: id });
  }

  @Watch("items")
  watchItems() {
    this.itemsList = this.mapItemsToItemsList();
  }

  constructor() {
    this.togglePocket = this.togglePocket.bind(this);
  }

  componentWillLoad() {
    this.itemsList = this.mapItemsToItemsList();
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

  mapItemsToItemsList() {
    if (!this.items) return null;
    return typeof this.items === "string" ? JSON.parse(this.items) : this.items;
  }

  togglePocket() {
    this.isopen = !this.isopen;
  }

  handleBackgroundClick(e: any) {
    if (e.target.dataset.action == "pocketBackground") {
      this.close();
    }
  }

  renderHeader() {
    return (
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
            this.isopen ? "circle-chevron-down-fill" : "circle-chevron-up-fill"
          }
          width={24}
          height={24}
        />
      </header>
    );
  }

  renderMain() {
    return (
      <main
        class={this.isopen && "open"}
        onTransitionEnd={() =>
          this.emitPocketToggle(this.pocketid, this.isopen)
        }
        ref={el => (this.mainElem = el as HTMLElement)}
      >
        {this.renderContent()}
        {this.renderFooter()}
      </main>
    );
  }

  renderContent() {
    if (!this.itemsList) return <slot />;

    const item = this.itemsList[this.currentItem - 1];

    return (
      <div class="itemsWrapper">
        <div>
          <span>{item.message}</span>
          {item.cta ? (
            <z-button
              variant={item.cta.variant}
              icon={item.cta?.icon}
              issmall={item.cta?.issmall}
              onClick={() => this.emitPocketButtonClick(item.id)}
            >
              {item.cta.label}
            </z-button>
          ) : null}
        </div>
      </div>
    );
  }

  renderFooter() {
    if (!this.itemsList || this.itemsList.length < 2) return null;

    return (
      <footer>
        <z-icon
          name="circle-chevron-left"
          width={24}
          height={24}
          class={this.currentItem === 1 ? "disabled" : ""}
          onClick={() => this.currentItem > 1 && this.currentItem--}
        />
        <span>
          {this.currentItem}/{this.itemsList.length}
        </span>
        <z-icon
          name="circle-chevron-right"
          width={24}
          height={24}
          class={this.currentItem === this.itemsList.length ? "disabled" : ""}
          onClick={() =>
            this.currentItem < this.itemsList.length && this.currentItem++
          }
        />
      </footer>
    );
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
          {this.renderHeader()}
          {this.renderMain()}
        </div>
      </div>
    );
  }
}
