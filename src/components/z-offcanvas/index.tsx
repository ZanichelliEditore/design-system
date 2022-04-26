import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

/**
 * @slot canvasContent - set the content of the canvas
 * @slot canvasCloseButton - accept custom close button
 */
@Component({
  tag: "z-offcanvas",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZOffcanvas
{
  /** aria-label for close button (optional) */
  @Prop() closeButtonLabel?: string = "close canvas";

  /** emitted on close button click */
  @Event() canvasClose: EventEmitter;
  emitcanvasClose() {
    this.canvasClose.emit();
  }

  /** emitted on canvas header click */
  @Event() canvasHeaderActive: EventEmitter;
  emitcanvasHeaderActive() {
    this.canvasHeaderActive.emit();
  }

  /** emitted on background click */
  @Event() canvasBackgroundClick: EventEmitter;
  emitBackgroundClick() {
    this.canvasBackgroundClick.emit();
  }

  render() {
    return [
      <div class="canvas-container" role="dialog">
        <header onClick={this.emitcanvasHeaderActive.bind(this)}>
          <slot name="canvasCloseButton">
            <button
              aria-label={this.closeButtonLabel}
              onClick={this.emitcanvasClose.bind(this)}
            >
              <z-icon name="multiply-circle-filled"></z-icon>
            </button>
          </slot>
        </header>
        <div class="canvas-content">
          <slot name="canvasContent"></slot>
        </div>
      </div>,
      <div
        class="canvas-background"
        data-action="canvasBackground"
        onClick={this.emitBackgroundClick.bind(this)}
      ></div>
    ];
  }
}

