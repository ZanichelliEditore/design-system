import {Component, Element, Event, EventEmitter, h, Host, Method, Prop, State, Watch} from "@stencil/core";
import {OffCanvasVariant, TransitionDirection} from "../../beans";
/**
 * @slot canvasContent - set the content of the canvas
 */
@Component({
  tag: "z-offcanvas",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZOffcanvas {
  @Element() hostElement: HTMLZOffcanvasElement;

  /**
   * Offcanvas variant.
   * Can be one of "overlay", "pushcontent"
   * Default variant: pushcontent
   */
  @Prop({reflect: true})
  variant?: OffCanvasVariant = OffCanvasVariant.PUSHCONTENT;

  /** open component. Default: false */
  @Prop({reflect: true, mutable: true})
  open = false;

  /** allows you to skip the entry animation on page load, to be used with the open prop at true */
  @State()
  skipanimationonload = false;

  /** open content transitioning in a specified direction left | right. Default: left */
  @Prop({reflect: true})
  transitiondirection?: TransitionDirection = TransitionDirection.LEFT;

  /** emitted when open prop changes */
  @Event()
  canvasOpenStatusChanged: EventEmitter;

  /** set skipAnimation */
  @Method()
  async setSkipAanimationOnLoad(value: boolean): Promise<void> {
    this.skipanimationonload = value;
  }

  @Watch("open")
  onOpenChanged(): void {
    if (!this.open && this.skipanimationonload) {
      this.skipanimationonload = false;
    }

    if (this.open) {
      this.handleOverflowProperty();
    }
    this.canvasOpenStatusChanged.emit(this.open);
  }

  private handleOverflowProperty(): void {
    const overflow = this.variant === OffCanvasVariant.OVERLAY ? "overflow-y" : "overflow-x";
    document.body.style[overflow] = this.open ? "hidden" : "";
  }

  private handledTransitionEnd(): void {
    this.handleOverflowProperty();
  }

  render(): HTMLZOffcanvasElement {
    return (
      <Host class={{"skip-animation": this.skipanimationonload}}>
        <div
          role="presentation"
          class="canvas-container"
          onTransitionEnd={() => this.handledTransitionEnd()}
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
