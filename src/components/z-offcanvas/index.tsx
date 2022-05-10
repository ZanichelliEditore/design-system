import { Component, Prop, h, Event, EventEmitter, Watch, Element } from "@stencil/core";
import { TransitionDirectionEnum, OffCanvasVariantsEnum } from "../../beans"
/**
 * @slot canvasContent - set the content of the canvas
 */
@Component({
  tag: "z-offcanvas",
  styleUrl: "styles.css",
  shadow: true,
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
    if (!this.open && this.variant === OffCanvasVariantsEnum.overlay) {

      const container = this.hostElement.shadowRoot.querySelector(".canvas-container") as HTMLElement
      if (!container) return;
      container.addEventListener(
        'animationend',
        () => this.hostElement.style.display = "none",
        { once: true })

      return;
    }
    this.hostElement.style.display = this.open ? "flex" : "none"
  }

  render() {
    return [
      <div class="canvas-container">
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

