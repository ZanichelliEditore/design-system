import {Component, Event, EventEmitter, h, Host, Prop, State, Watch} from "@stencil/core";
import {OffCanvasVariant, TransitionDirection} from "../../beans";

/**
 * @slot canvasContent - Slot for the offcanvas content.
 * @cssprop --z-offcanvas--top-space - Top offset of the offcanvas, for `overlay` variant. Useful when there is some fixed element above the offcanvas. Default: `0`.
 * @cssprop --z-offcanvas--container-width - Width of the offcanvas for `left` and `right` direction. Default: `375px`.
 * @cssprop --z-offcanvas--container-height - Height of the offcanvas for `up` direction. Default: `90%`.
 */
@Component({
  tag: "z-offcanvas",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZOffcanvas {
  /**
   * Offcanvas variant.
   * - `overlay`: The offcanvas covers the page content putting an overlay.
   * - `pushcontent`: The offcanvas isn't absolutely positioned and "pushes" the page content.
   * > NB: `pushcontent` variant may need some extra style tuning of the context around the component to work properly.
   */
  @Prop({reflect: true})
  variant?: OffCanvasVariant = OffCanvasVariant.PUSHCONTENT;

  /** Whether the offcanvas is open. Default: false */
  @Prop({reflect: true, mutable: true})
  open = false;

  /**
   * Open the content transitioning to a specified direction.
   * The `up` direction always show the `overlay`, also when the variant is `pushcontent`.
   */
  @Prop({reflect: true})
  transitiondirection?: TransitionDirection = TransitionDirection.LEFT;

  /**
   * Skip the opening transition when the offcanvas is already open at the first render.
   * @deprecated This prop is not needed anymore, the component will automatically skip the transition
   *  when it starts with `open` set to `true`. Only exists for Typescript backward compatibility.
   */
  @Prop()
  skipLoadAnimation = false;

  /** emitted when `open` prop changes */
  @Event()
  canvasOpenStatusChanged: EventEmitter;

  /** Used to skip the opening transition when the offcanvas is already open at the first render. */
  @State()
  private skipAnimation = this.open;

  private canvasContainer: HTMLElement;

  /**
   * Hide the body overflow when the offcanvas is open.
   */
  @Watch("variant")
  private handlePageOverflow(): void {
    const overflow =
      this.variant === OffCanvasVariant.OVERLAY || this.transitiondirection === TransitionDirection.UP
        ? "overflow-y"
        : "overflow-x";

    document.body.style[overflow] = this.open ? "hidden" : "";
  }

  @Watch("open")
  onOpenChanged(): void {
    this.canvasOpenStatusChanged.emit(this.open);

    if (!this.open) {
      // when the offcanvas is closing, wait for the transitionend event to end before handling the body overflow
      const listenerCallback = (): void => {
        this.handlePageOverflow();
        this.canvasContainer.removeEventListener("transitionend", listenerCallback);
      };

      this.canvasContainer?.addEventListener("transitionend", listenerCallback);
    } else {
      this.handlePageOverflow();
    }
  }

  componentDidLoad(): void {
    this.handlePageOverflow();
  }

  connectedCallback(): void {
    this.handlePageOverflow();
  }

  disconnectedCallback(): void {
    this.open = false;
  }

  render(): HTMLZOffcanvasElement {
    return (
      <Host
        skip-animation={this.skipAnimation}
        inert={!this.open}
      >
        <div
          class="canvas-container"
          role="presentation"
          ref={(el) => (this.canvasContainer = el)}
        >
          <div
            class="canvas-content"
            role="presentation"
          >
            <slot name="canvasContent"></slot>
          </div>
        </div>
        {(this.variant == OffCanvasVariant.OVERLAY || this.transitiondirection === TransitionDirection.UP) &&
          this.open && (
            <div
              class="canvas-background"
              onClick={() => (this.open = false)}
            ></div>
          )}
      </Host>
    );
  }
}
