import { EventEmitter } from "../../stencil-public-runtime";
import { OffCanvasVariantsEnum, TransitionDirectionEnum } from "../../beans";
/**
 * @slot canvasContent - set the content of the canvas
 */
export declare class ZOffcanvas {
  hostElement: HTMLElement;
  /**
  * Offcanvas variant.
  * Can be one of "overlay", "pushcontent"
  * Default variant: pushcontent
  */
  variant?: OffCanvasVariantsEnum;
  /** open component. Default: false */
  open: boolean;
  /** open content transitioning in a specified direction left | right. Default: left */
  transitiondirection?: TransitionDirectionEnum;
  /** emitted when open prop changes */
  canvasOpenStatusChanged: EventEmitter;
  componentWillLoad(): void;
  onOpenChanged(): void;
  handleOpenStatus(): void;
  handleAnimationEnd(): void;
  render(): any[];
}
