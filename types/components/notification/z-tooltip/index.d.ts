import { EventEmitter } from "../../../stencil-public-runtime";
import { TooltipPosition } from "../../../beans/index";
export declare class ZTooltip {
  /** Content text.
   * @deprecated
   */
  content: string;
  /** Tooltip position. */
  type: TooltipPosition;
  /**
   * The open state of the tooltip.
   */
  open: boolean;
  /**
   * The selector or the element bound with the tooltip.
   */
  bindTo?: string | HTMLElement;
  /**
   * The current position of the tooltip.
   */
  position?: TooltipPosition;
  /**
   * Position change event.
   */
  positionChange: EventEmitter;
  host: HTMLElement;
  private animationFrameRequestId?;
  validateType(newValue: any): void;
  onPositionChange(): void;
  disconnectedCallback(): void;
  /**
   * Setup tooltip behaviors on opening.
   */
  onOpen(): void;
  /**
   * Set the position of the tooltip.
   */
  private setPosition;
  componentWillLoad(): void;
  render(): any;
}
