import { EventEmitter } from "../../../stencil-public-runtime";
import "./index";
export declare class ZFile {
  private icon;
  private ellipsis?;
  fileNumber: number;
  allowTooltip: boolean;
  tooltipVisible: boolean;
  el: HTMLElement;
  /** Emitted when a z-file component is removed from the DOM */
  removeFile: EventEmitter;
  removeFileHandler(): void;
  onMouseOver(): void;
  onMouseLeave(): void;
  onInteractiveIconClick(): void;
  componentDidLoad(): void;
  elementHasEllipsis(): boolean;
  render(): any;
}
