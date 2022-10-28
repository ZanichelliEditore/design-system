import { EventEmitter } from "../../stencil-public-runtime";
import { PopoverPositions } from "../../beans/index";
export declare class ZTooltipDeprecated {
  /** Content text.
   * @deprecated
   */
  content: string;
  /** Tooltip position. */
  type: PopoverPositions;
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
  position?: PopoverPositions;
  /**
   * Position change event.
   */
  positionChange: EventEmitter;
  host: HTMLZTooltipDeprecatedElement;
  private animationFrameRequestId?;
  validateType(newValue: PopoverPositions): void;
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
  render(): HTMLZTooltipDeprecatedElement;
}
