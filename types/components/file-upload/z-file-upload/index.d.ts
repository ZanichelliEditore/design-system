import { EventEmitter } from "../../../stencil-public-runtime";
import { ButtonVariant, ZFileUploadType } from "../../../beans";
export declare class ZFileUpload {
    /** Prop indicating the file upload type - can be default or dragdrop */
    type: ZFileUploadType;
    /** Prop indicating the button variant*/
    buttonVariant?: ButtonVariant;
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
    /** upoload button label */
    uploadBtnLabel?: string;
    /** drag & drop button label */
    dragAndDropLabel?: string;
    /** allowed file message */
    allowedFilesMessage?: string;
    /** upload clickable message */
    uploadClickableMessage?: string;
    /** upload message */
    uploadMessage?: string;
    /** error modal title */
    errorModalTitle?: string;
    /** error modal message */
    errorModalMessage?: string;
    /** loaded files label */
    uploadedFilesLabel?: string;
    /** uploaded files history rendering */
    hasFileSection?: boolean;
    /** List of files not allowed to be uploaded */
    invalidFiles: Map<string, string[]>;
    el: HTMLZFileUploadElement;
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
    private fileInputHandler;
    /** get array of uploaded files */
    getFiles(): Promise<File[]>;
    /** remove file from the array */
    removeFile(fileName: string): Promise<void>;
    private removeFileHandler;
    private getType;
    private handleAccessibility;
    private checkFiles;
    private renderTitle;
    private renderDescription;
    private renderAllowedFileExtensions;
    private renderFileSection;
    private renderInput;
    private renderUploadButton;
    private renderUploadLink;
    private renderDefaultMode;
    private renderDragDropMode;
    private formatErrorString;
    private handleErrorModalContent;
    render(): HTMLZFileUploadElement;
}
