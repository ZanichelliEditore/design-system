import { Component, Prop, h, Event, EventEmitter, Watch, Element } from "@stencil/core";

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

  /** display component as overlay. Default: false */
  @Prop({ reflect: true }) overlay = false;

  /** open component. Default: false */
  @Prop({ reflect: true, mutable: true }) open = false;

  /** open content transitioning from the left. Default: false */
  @Prop({ reflect: true }) transitionfromleft = false;

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
    if (!this.open && this.overlay) {

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

