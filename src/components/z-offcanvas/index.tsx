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
  @Prop({ reflect: true }) open = false;

  /** open content transitioning from the left. Default: false */
  @Prop({ reflect: true }) transitionleft = false;

  /** emitted on background click */
  @Event() canvasBackgroundClick: EventEmitter;

  emitBackgroundClick() {
    this.open = false;
    this.canvasBackgroundClick.emit();
  }

  @Watch('open')
  onOpenChanged() {

    if (this.open) {
      this.hostElement.style.display = "flex"
    } else {
      let me = this
      if (this.overlay) {
        setTimeout(() => { me.hostElement.style.display = "none" }, 400);
      } else {
        me.hostElement.style.display = "none"
      }
    }
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

