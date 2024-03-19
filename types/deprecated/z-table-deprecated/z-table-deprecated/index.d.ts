import { EventEmitter } from "../../../stencil-public-runtime";
import "../z-table-body/index";
import "../z-table-cell/index";
import "../z-table-empty-box/index";
import "../z-table-expanded-row/index";
import "../z-table-footer/index";
import "../z-table-head/index";
import "../z-table-header/index";
import "../z-table-header-row/index";
import "../z-table-row/index";
import "../z-table-sticky-footer/index";
/**
 * @slot - table elements
 * @slot sticky-footer - set the content of the sticky footer
 * @deprecated
 */
export declare class ZTableDeprecated {
    host: HTMLZTableDeprecatedElement;
    /** Number of lines of element */
    lines?: number;
    /** Error message */
    errorMessage?: string;
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
    /** Set error status */
    error?: boolean;
    /** Set error status */
    errorLink?: string;
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
    /** remove call to action event */
    callToAction: EventEmitter;
    /** remove call to action event */
    callToActionTwo: EventEmitter;
    handleResize(): void;
    handleOrientationChange(): void;
    componentWillLoad(): void;
    componentWillRender(): void;
    private renderError;
    private renderEmpty;
    render(): HTMLZTableDeprecatedElement;
}
