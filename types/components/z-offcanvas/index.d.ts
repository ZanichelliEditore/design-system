import { EventEmitter } from "../../stencil-public-runtime";
import { OffCanvasVariant, TransitionDirection } from "../../beans";
/**
 * @slot canvasContent - Slot for the main content.
 */
export declare class ZOffcanvas {
  /**
   * Offcanvas variant.
   * Can be one `overlay` or `pushcontent`.
   * Default variant: pushcontent
   */
  variant?: OffCanvasVariant;
  /** Whether the offcanvas is open. Default: false */
  open: boolean;
  /** open content transitioning in a specified direction left | right. Default: left */
  transitiondirection?: TransitionDirection;
  /**
   * Whether to skip the initial animation.
   * Useful when the initial value of the `open` prop is set to `true`.
   */
  skipLoadAnimation: boolean;
  /** emitted when `open` prop changes */
  canvasOpenStatusChanged: EventEmitter;
  onOpenChanged(): void;
  private handlePageOverflow;
  render(): HTMLZOffcanvasElement;
}
