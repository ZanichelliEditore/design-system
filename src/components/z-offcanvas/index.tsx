import {Component, Event, EventEmitter, h, Host, Prop, Watch} from "@stencil/core";
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
   * Can be one `overlay` or `pushcontent`.
   * Default variant: pushcontent
   */
  @Prop({reflect: true})
  variant?: OffCanvasVariant = OffCanvasVariant.PUSHCONTENT;

  /** Whether the offcanvas is open. Default: false */
  @Prop({reflect: true, mutable: true})
  open = false;

  /** open content transitioning in a specified direction left | right. Default: left */
  @Prop({reflect: true})
  transitiondirection?: TransitionDirection = TransitionDirection.LEFT;

  /**
   * Whether to skip the initial animation.
   * Useful when the initial value of the `open` prop is set to `true`.
   */
  @Prop({mutable: true})
  skipLoadAnimation = false;

  /** emitted when `open` prop changes */
  @Event()
  canvasOpenStatusChanged: EventEmitter;

  @Watch("open")
  onOpenChanged(): void {
    if (!this.open && this.skipLoadAnimation) {
      this.skipLoadAnimation = false;
    }

    this.handlePageOverflow();
    this.canvasOpenStatusChanged.emit(this.open);
  }

  private handlePageOverflow(): void {
    const overflow = this.variant === OffCanvasVariant.OVERLAY ? "overflow-y" : "overflow-x";
    document.body.style[overflow] = this.open ? "hidden" : "";
  }

  disconnectedCallback(): void {
    this.open = false;
  }

  render(): HTMLZOffcanvasElement {
    return (
      <Host class={{"skip-animation": this.skipLoadAnimation}}>
        <div
          role="presentation"
          class="canvas-container"
          onTransitionEnd={() => this.handlePageOverflow()}
        >
          <div
            role="presentation"
            class="canvas-content"
          >
            <slot name="canvasContent"></slot>
          </div>
        </div>
        {this.variant == OffCanvasVariant.OVERLAY && (
          <div
            class="canvas-background"
            data-action="canvasBackground"
            onClick={() => (this.open = false)}
          ></div>
        )}
      </Host>
    );
  }
}
