import {Component, Element, Event, EventEmitter, h, Host, Prop, Watch} from "@stencil/core";
import {HostElement} from "@stencil/core/internal";
import {OffCanvasVariantsEnum, TransitionDirectionEnum} from "../../beans";
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
  variant?: OffCanvasVariantsEnum = OffCanvasVariantsEnum.PUSHCONTENT;

  /** open component. Default: false */
  @Prop({reflect: true, mutable: true})
  open = false;

  /** open content transitioning in a specified direction left | right. Default: left */
  @Prop({reflect: true})
  transitiondirection?: TransitionDirectionEnum = TransitionDirectionEnum.LEFT;

  /** emitted when open prop changes */
  @Event()
  canvasOpenStatusChanged: EventEmitter;

  componentWillLoad(): void {
    this.handleOpenStatus();
  }

  @Watch("open")
  onOpenChanged(): void {
    this.handleOpenStatus();
    this.canvasOpenStatusChanged.emit(this.open);
  }

  private handleOpenStatus(): void {
    if (this.open) {
      this.hostElement.style.display = "flex";
    } else if (this.variant === OffCanvasVariantsEnum.PUSHCONTENT) {
      this.hostElement.style.display = "none";
      document.body.style.overflowX = "hidden";
    }
  }

  private handleAnimationEnd(): void {
    if (this.hostElement.hasAttribute("open")) {
      (this.hostElement.querySelector(`.canvas-content`) as HTMLElement).focus();
    } else if (this.variant === OffCanvasVariantsEnum.OVERLAY) {
      this.hostElement.style.display = "none";
      document.body.style.overflowX = "initial";
    }
  }

  render(): HostElement {
    return (
      <Host>
        <div
          class="canvas-container"
          onAnimationEnd={() => this.handleAnimationEnd()}
        >
          <div
            class="canvas-content"
            tabindex="0"
          >
            <slot name="canvasContent"></slot>
          </div>
        </div>
        ,
        <div
          class="canvas-background"
          data-action="canvasBackground"
          onClick={() => (this.open = false)}
        ></div>
      </Host>
    );
  }
}
