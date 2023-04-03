import { EventEmitter } from "../../stencil-public-runtime";
import { OffCanvasVariant, TransitionDirection } from "../../beans";
/**
 * @slot canvasContent - set the content of the canvas
 * @method setSkipAanimationOnLoad - set skipAnimation
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
  /** manages the skip for the entry animation*/
  skipanimationonload: boolean;
  /** emitted when open prop changes */
  canvasOpenStatusChanged: EventEmitter;
  /** this method allows you to skip the page loading animation, to be used with the prop set to true */
  setSkipAanimationOnLoad(value: boolean): Promise<void>;
  onOpenChanged(): void;
  private handleOverflowProperty;
  private handledTransitionEnd;
  render(): HTMLZOffcanvasElement;
}
