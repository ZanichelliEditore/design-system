import "../z-tbody/index";
import "../z-tfoot/index";
import "../z-thead/index";
import "../z-tr/index";
/**
 * ZTable component.
 * @slot - Table content (`z-thead`, `z-tbody`, `z-tfoot`, `z-tr`).
 * @cssprop --z-table--cells-padding - Padding of the cells.
 */
export declare class ZTable {
    host: HTMLZTableElement;
    /**
     * Whether the table cells should show a border between them.
     */
    bordered: boolean;
    /**
     * Whether the table contains some expandable rows.
     */
    expandable: boolean;
    private updateExpandable;
    private expandableMutationObserver;
    /**
     * Setup the table creating a mutation observer for the expandable attribute.
     */
    componentWillLoad(): void;
    disconnectedCallback(): void;
    render(): HTMLZTableElement;
}
