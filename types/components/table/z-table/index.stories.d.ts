import { type TemplateResult } from "lit";
import { PopoverPosition, VisibilityCondition } from "../../../beans";
import "../../z-button/index";
import "./index";
import "./index.stories.css";
/**
 * ## Accessibility
 *
 * The `ZTable` and its related components comes with a set of roles and ARIA attributes to help screen readers to understand the table structure and its content.
 * The roles are mainly used to identify the table parts, since they are not the native HTML table elements.
 * The ARIA attributes used are the following:
 * - [`aria-sort`](https://www.w3.org/TR/wai-aria-1.1/#aria-sort) to identify the sorting direction of a column when sorting is enabled
 * - [`aria-expanded`](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded) to identify if a row is expanded or not when expandable rows are enabled. The attribute is set on the button that expands the row, as explained in the [docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
 * - [`aria-controls`](https://www.w3.org/TR/wai-aria-1.1/#aria-controls) is used on the expandable row button to identify the content that is controlled by the button itself, as explained in the [docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls). Maybe the `aria-owns` attribute were more appropriate, but it is not supported on MacOS and iOS with VoiceOver, so we used `aria-controls` instead.
 * - [`aria-label`](https://www.w3.org/TR/wai-aria-1.1/#aria-label) is used on the expandable row button to provide a label for the button, since the button doesn't have any text content.
 */
declare const StoryMeta: {
    title: string;
    component: string;
    args: {
        bordered: true;
        "--z-table--cells-padding": string;
    };
};
export default StoryMeta;
export declare const Default: {
    render: (args: any) => TemplateResult<1>;
};
/**
 * Just set `expandable` prop on the `z-tr` element to make it expandable, then put an additional `z-td` as extended content.
 * If you put a clickable item as a child cell of a z-tr with `expandable` set to `true`, you need to set a "prevent-expand" class on that item, in order to prevent unwanted row expansions.
 */
export declare const ExpandableRows: {
    render: (args: any) => TemplateResult<1>;
};
/**
 * To make a column sticky, you need to set the `sticky` prop on the `z-th` and/or `z-td` elements of the same column.
 * For the header or footer, just set the `sticky` prop on the `z-thead` or `z-tfoot` element.
 */
export declare const Sticky: {
    args: {
        stickyHeader: boolean;
        stickyFooter: boolean;
        stickFirstColumn: boolean;
    };
    render: (args: any) => TemplateResult<1>;
};
/**
 * Use the `showMenu` prop on `z-td` or `z-th`, setting a value of the enum `VisibilityCondition` (`HOVER` or `ALWAYS`), to show a contextual menu button on the cell. The content of the menu must be placed using the slot `contextual-menu`.
 * Use `popoverPosition` prop on `z-th` to set the position of contextual menu, default is `auto`.
 */
export declare const CellsWithContextualMenu: {
    argTypes: {
        showMenu: {
            control: {
                type: string;
                labels: {
                    null: string;
                };
            };
            popoverPosition: {
                options: PopoverPosition[];
                control: {
                    type: string;
                };
            };
            options: VisibilityCondition[];
        };
    };
    args: {
        showMenu: VisibilityCondition;
        popoverPosition: PopoverPosition;
    };
    render: (args: any) => TemplateResult<1>;
};
/**
 * Set the `sortDirection` prop to `SortDirection.ASC` or `SortDirection.DESC` to enable sorting and show the sort button.
 * Clicking the button will fire the `sort` event with the `sortDirection` as detail.
 */
export declare const SortAction: {
    render: (args: any) => TemplateResult<1>;
};
