import { EventEmitter } from "../../stencil-public-runtime";
import { OffCanvasVariant, TransitionDirection } from "../../beans";
/**
 * @slot canvasContent - set the content of the canvas
 */
export declare class ZOffcanvas {
  hostElement: HTMLZOffcanvasElement;
  /**
   * Offcanvas variant.
   * Can be one of "overlay", "pushcontent"
   * Default variant: pushcontent
   */
  variant?: OffCanvasVariant;
  /** open component. Default: false */
  open: boolean;
  /** open content transitioning in a specified direction left | right. Default: left */
  transitiondirection?: TransitionDirection;
  /** emitted when open prop changes */
  canvasOpenStatusChanged: EventEmitter;
  componentWillLoad(): void;
  onOpenChanged(): void;
  private handleOpenStatus;
  private handleAnimationEnd;
  private handleAnimationStart;
  render(): HTMLZOffcanvasElement;
}
