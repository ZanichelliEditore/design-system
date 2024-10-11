import {Component, Event, EventEmitter, h, Host, Prop, State, Watch} from "@stencil/core";
import {OffCanvasVariant, TransitionDirection} from "../../beans";
/**
 * @slot canvasContent - Slot for the main content.
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
   * `overlay`: The offcanvas covers the page content putting an overlay.
   * `pushcontent`: The offcanvas isn't absolutely positioned and "pushes" the page content.
   */
  @Prop({reflect: true})
  variant?: OffCanvasVariant = OffCanvasVariant.PUSHCONTENT;

  /** Whether the offcanvas is open. Default: false */
  @Prop({reflect: true, mutable: true})
  open = false;

  /**
   * Open the content transitioning to a specified direction.
   * The `up` direction is supported only for `overlay` variant.
   */
  @Prop({reflect: true})
  transitiondirection?: TransitionDirection = TransitionDirection.LEFT;

  /** emitted when `open` prop changes */
  @Event()
  canvasOpenStatusChanged: EventEmitter;

  /** Used to skip the opening transition when the offcanvas is already open at the first render. */
  @State()
  private skipTransition = true;

  private mobileMedia: MediaQueryList;

  private handlePageOverflow(): void {
    if (!this.open) {
      return;
    }

    const overflow = this.variant === OffCanvasVariant.OVERLAY ? "overflow-y" : "overflow-x";
    document.body.style[overflow] = this.open ? "hidden" : "";
  }

  @Watch("open")
  onOpenChanged(): void {
    this.handlePageOverflow();
    this.mobileMedia = this.mobileMedia || window.matchMedia("(max-width: 767px)");
    this.mobileMedia.addEventListener("change", this.handlePageOverflow);
    this.canvasOpenStatusChanged.emit(this.open);
  }

  componentDidRender(): void {
    if (this.open && this.skipTransition) {
      // Stop skipping transitions after the first render
      this.skipTransition = false;
    }
  }

  disconnectedCallback(): void {
    this.open = false;
    this.mobileMedia?.removeEventListener("change", this.handlePageOverflow);
  }

  constructor() {
    this.handlePageOverflow = this.handlePageOverflow.bind(this);
  }

  render(): HTMLZOffcanvasElement {
    return (
      <Host skip-transition={this.skipTransition}>
        <div
          class="canvas-container"
          role="presentation"
          onTransitionEnd={() => this.handlePageOverflow()}
        >
          <div
            class="canvas-content"
            role="presentation"
          >
            <slot name="canvasContent"></slot>
          </div>
        </div>
        {(this.variant == OffCanvasVariant.OVERLAY || this.transitiondirection === TransitionDirection.UP) && (
          <div
            class="canvas-background"
            onClick={() => (this.open = false)}
          ></div>
        )}
      </Host>
    );
  }
}
