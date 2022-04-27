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

  /** open component. Default: false */
  @Prop({ reflect: true }) open = false;

  /** move the component on the left side of the viewport. Default: false */
  @Prop({ reflect: true }) alignleft = false;

  /** emitted on close button click */
  @Event() canvasClose: EventEmitter;
  emitcanvasClose() {
    this.canvasClose.emit();
  }

  /** emitted on background click */
  @Event() canvasBackgroundClick: EventEmitter;
  emitBackgroundClick() {
    this.open = false;
    this.canvasBackgroundClick.emit();
  }

  render() {
    return [
      <div class="canvas-container" role="dialog">
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

