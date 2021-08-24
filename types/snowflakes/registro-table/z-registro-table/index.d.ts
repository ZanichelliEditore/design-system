import { EventEmitter } from "../../../stencil-public-runtime";
/**
 * @slot - table elements
 * @slot sticky-footer - set the content of the sticky footer
 */
export declare class ZRegistroTable {
  host: HTMLElement;
  /** Sets table with border */
  bordered?: boolean;
  /** Sets call to action label */
  callToActionLabel?: string;
  /** Sets call to action label */
  callToActionTwoLabel?: string;
  /** Sets first column sticky */
  columnSticky?: boolean;
  /** Sets empty table */
  empty?: boolean;
  /** Sets header sticky */
  headerSticky?: boolean;
  /** Set message */
  message?: string;
  /** Set subtitle */
  subtitle?: string;
  /** Set if has table content, useful when empty conte to who first column */
  hasTableBody: boolean;
  /** Handle mobile */
  isMobile: boolean;
  /** remove call to action event */
  callToAction: EventEmitter;
  /** remove call to action event */
  callToActionTwo: EventEmitter;
  handleResize(): void;
  handleOrientationChange(): void;
  componentWillLoad(): void;
  componentWillRender(): void;
  render(): any;
}
