import { Component, Element, Event, EventEmitter, h, Prop, Watch } from "@stencil/core";
import { OffCanvasVariantsEnum, TransitionDirectionEnum } from "../../beans"
/**
 * @slot canvasContent - set the content of the canvas
 */
@Component({
  tag: "z-offcanvas",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})

export class ZOffcanvas
{
  @Element() hostElement: HTMLElement;

   /**
   * Offcanvas variant.
   * Can be one of "overlay", "pushcontent"
   * Default: pushcontent
   */
  @Prop({ reflect: true }) variant: OffCanvasVariantsEnum;

  /** open component. Default: false */
  @Prop({ reflect: true, mutable: true }) open = false;

  /** open content transitioning in a specified direction left | right. Default: left */
  @Prop({ reflect: true }) transitiondirection: TransitionDirectionEnum;

  /** emitted when open prop changes */
  @Event() canvasOpenStatusChanged: EventEmitter;

  componentWillLoad() {
    this.handleOpenStatus()
  }

  @Watch('open')
  onOpenChanged() {
    this.handleOpenStatus()
    this.canvasOpenStatusChanged.emit(this.open);
  }

  handleOpenStatus() {
    if (this.open) {
      this.hostElement.style.display = "flex";
    } else if (this.variant === OffCanvasVariantsEnum.pushcontent) {
      this.hostElement.style.display = "none";
    }
  }

  handleAnimationEnd() {
    if (!this.hostElement.hasAttribute("open") && this.variant === OffCanvasVariantsEnum.overlay) {
      this.hostElement.style.display = "none";
    }
  }

  render() {
    return [
      <div class="canvas-container" onAnimationEnd={() => this.handleAnimationEnd()}>
        <div class="canvas-content" tabindex="0">
          <slot name="canvasContent"></slot>
        </div>
      </div>,
      <div
        class="canvas-background"
        data-action="canvasBackground"
        onClick={() => this.open = false}
      ></div>
    ];
  }
}

