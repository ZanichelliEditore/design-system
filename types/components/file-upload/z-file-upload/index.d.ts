import { EventEmitter } from "../../../stencil-public-runtime";
import { ButtonVariantEnum, ZFileUploadTypeEnum } from "../../../beans";
export declare class ZFileUpload {
  /** Prop indicating the file upload type - can be default or dragdrop */
  type: ZFileUploadTypeEnum;
  /** Prop indicating the button variant*/
  buttonVariant?: ButtonVariantEnum;
  /** Prop indicating the accepted file type: ex ".pdf, .doc, .jpg" */
  acceptedFormat?: string;
  /** Max file dimension in Megabyte */
  fileMaxSize?: number;
  /** Title */
  mainTitle?: string;
  /** Description */
  description?: string;
  /** Files added by the user */
  files: File[];
  /** List of files not allowed to be uploaded */
  invalidFiles: Map<string, Array<string>>;
  el: HTMLElement;
  private input;
  private button;
  private errorModal;
  private uploadLink;
  private inputAttributes;
  /** Listen removeFile event sent from z-file component */
  removeFileListener(e: CustomEvent): void;
  /** Listen fileDropped event sent from z-dragdrop-area component */
  fileDroppedListener(e: CustomEvent): void;
  componentDidUpdate(): void;
  componentWillLoad(): void;
  /** Emitted when user select one or more files */
  fileInput: EventEmitter;
  fileInputHandler(): void;
  /** get array of uploaded files */
  getFiles(): Promise<File[]>;
  handleAccessibility(): void;
  checkFiles(files: Array<File>): Map<string, Array<string>>;
  renderTitle(): any;
  renderDescription(variant: any, level: any): any;
  renderAllowedFileExtensions(): any;
  renderFileSection(): any;
  renderInput(): any;
  renderUploadButton(): any[];
  renderUploadLink(): any[];
  renderDefaultMode(): any[];
  renderDragDropMode(): any[];
  formatErrorString(key: any, value: any): string;
  handleErrorModalContent(): any;
  render(): any[];
}
