import {Component, Element, Event, EventEmitter, h, Host, Prop, Watch} from "@stencil/core";
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

  /** open content transitioning in a specified direction left | right. Default: left */
  @Prop({reflect: true})
  transitiondirection?: TransitionDirection = TransitionDirection.LEFT;

  /** allows you to skip the entry animation on page load, to be used with the open prop at true */
  @Prop()
  skipanimationonload: boolean;

  /** emitted when open prop changes */
  @Event()
  canvasOpenStatusChanged: EventEmitter;

  @Watch("open")
  onOpenChanged(): void {
    if (!this.open && this.hostElement.hasAttribute("skipanimationonload")) {
      this.hostElement.removeAttribute("skipanimationonload");
    }

    this.handleOverflowProperty();
    this.canvasOpenStatusChanged.emit(this.open);
  }

  private handleOverflowProperty(): void {
    const overflow = this.variant === OffCanvasVariant.OVERLAY ? "overflow-y" : "overflow-x";
    document.body.style[overflow] = this.open ? "hidden" : "";
  }

  componentWillRender(): void {
    if (this.hostElement.getAttributeNode("skipanimationonload").value == "false") {
      this.hostElement.removeAttribute("skipanimationonload");
    }
  }

  render(): HTMLZOffcanvasElement {
    return (
      <Host
        transitiondirection={this.transitiondirection}
        skipanimationonload={this.skipanimationonload}
      >
        <div
          role="presentation"
          class={{
            "canvas-container": true,
          }}
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
