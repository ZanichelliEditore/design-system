import { EventEmitter } from "../../stencil-public-runtime";
/**
 * @slot modalCloseButton - accept custom close button
 * @slot modalContent - set the content of the modal
 */
export declare class ZModal {
    /** unique id */
    modalid: string;
    /** title text (optional) */
    modaltitle?: string;
    /** subtitle (optional) */
    modalsubtitle?: string;
    /** aria-label for close button (optional) */
    closeButtonLabel: string;
    /** add role "alertdialog" to dialog (optional, default is false) */
    alertdialog?: boolean;
    /** if true, the modal is closable (optional, default is true) */
    closable?: boolean;
    /** if true, the modal can scroll inside, if false the viewport can scroll */
    scrollInside?: boolean;
    private dialog;
    host: HTMLZModalElement;
    /** emitted on close button click, returns modalid */
    modalClose: EventEmitter;
    private emitModalClose;
    /** emitted on modal header click, returns modalid */
    modalHeaderActive: EventEmitter;
    private emitModalHeaderActive;
    /** emitted on background click, returns modalid */
    modalBackgroundClick: EventEmitter;
    private emitBackgroundClick;
    private handlePageOverflow;
    componentDidLoad(): void;
    /** open modal */
    open(): Promise<void>;
    /** close modal */
    close(): Promise<void>;
    /**
     * Get a list of focusable elements in the dialog.
     * Remove elements with `display: none` from the list, because they're not focusable.
     *
     * N.B. The list is built on the assumption that elements inside shadow root are placed ALL before the `modalContent` slot.
     * Adding focusable elements after the `modalContent` slot would break the order of elements in the list.
     */
    private get focusableElements();
    handleKeyDown(e: KeyboardEvent): void;
    private closeButtonSlot;
    private handleEscape;
    render(): HTMLZModalElement;
}
