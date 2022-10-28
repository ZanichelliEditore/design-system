import { EventEmitter } from "../../../stencil-public-runtime";
export declare class ZFile {
  private icon;
  private ellipsis?;
  private chip?;
  /** File chip id */
  fileNumber: number;
  /** File name */
  fileName: string;
  allowPopover: boolean;
  popoverVisible: boolean;
  el: HTMLZFileElement;
  /** Emitted when a z-file component is removed from the DOM */
  removeFile: EventEmitter;
  private removeFileHandler;
  onMouseOver(): void;
  onMouseLeave(): void;
  onInteractiveIconClick(): void;
  componentDidLoad(): void;
  private elementHasEllipsis;
  render(): HTMLZFileElement;
}
