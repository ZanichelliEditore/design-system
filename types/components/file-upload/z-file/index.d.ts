import { EventEmitter } from "../../../stencil-public-runtime";
export declare class ZFile {
  private icon;
  private ellipsis?;
  private chip?;
  fileNumber: number;
  /** File name */
  fileName: any;
  allowPopover: boolean;
  popoverVisible: boolean;
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
