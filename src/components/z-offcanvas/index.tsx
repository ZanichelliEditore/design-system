import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

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
  /** display component as overlay. Default: false */
  @Prop({ reflect: true }) overlay = false;

  /** open component. Default: false */
  @Prop({ reflect: true }) open = false;

  /** open content transitioning from the left. Default: false */
  @Prop({ reflect: true }) alignleft = false;

  /** emitted on background click */
  @Event() canvasBackgroundClick: EventEmitter;

  emitBackgroundClick() {
    this.open = false;
    this.canvasBackgroundClick.emit();
  }

  render() {
    return [
      <div class="canvas-container">
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

