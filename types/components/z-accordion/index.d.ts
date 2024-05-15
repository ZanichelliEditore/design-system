import { EventEmitter } from "../../stencil-public-runtime";
import { ControlSize, AccordionVariant } from "../../beans";
/**
 * Accordion component.
 *
 * @slot - Slot for the main content.
 * @slot tag - Slot for tags.
 * @cssprop --z-accordion-highlight-color - Color of the highlight band on the summary's left edge. Only applies when `highlight` is true. Default: `transparent`.
 * @cssprop --z-accordion-bg - Background color of the summary. Default: `--color-surface02`.
 * @cssprop --z-accordion-label-color - Label color. Default: `--color-default-text`.
 * @cssprop --z-accordion-disabled-label-color - Label color when disabled. Default: `--color-text03`.
 * @cssprop --z-accordion-content-bg - Background color of the accordion. Default: `--color-surface02`.
 * @cssprop --z-accordion-content-fg - Content text color. Default: `--color-default-text`.
 * @cssprop --z-accordion-hover-color - Hover color of the summary. Default: `--color-surface03`.
 * @cssprop --z-accordion-left-padding - Left padding of the summary. Default: `--space-unit` * 2.
 * @cssprop --z-accordion-right-padding - Right padding of the summary. Default: `--space-unit`.
 * @cssprop --z-accordion-label-font-weight - Font weight of the summary label. Default: `--font-sb`.
 */
export declare class ZAccordion {
    /**
     * Text label.
     */
    label: string;
    /**
     * Name of the z-icon to display before the label's text.
     */
    icon: string;
    /**
     * Size of the component.
     */
    size: ControlSize;
    /**
     * Disabled state of the accordion.
     */
    isDisabled: boolean;
    /**
     * The open state of the accordion.
     */
    open: boolean;
    /**
     * Enable highlight band on the `summary`'s left edge.
     */
    highlight: boolean;
    /**
     * Accordion variant.
     */
    variant: AccordionVariant;
    /**
     * Enable box-shadow on the accordion. Only applies when `variant` is `BACKGROUND`.
     */
    shadow: boolean;
    /**
     * Event fired when the accordion is toggled.
     */
    toggled: EventEmitter<boolean>;
    protected onDisabledChange(): void;
    private detailsElm;
    /**
     * Handle `details` element toggle.
     * If currently disabled, prevent toggling by forcing the `open` state to `false`.
     * Unfortunately the "toggle" event is not cancelable and when catched, the `open` state is already changed.
     */
    private onDetailsToggle;
    render(): HTMLDetailsElement;
}
