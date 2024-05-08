import { EventEmitter } from "../../../stencil-public-runtime";
import { DividerSize, ExpandableListButtonAlign, ExpandableListStyle, ListDividerType, ListSize, ListType } from "../../../beans";
export declare class ZListElement {
    host: HTMLZListElementElement;
    /** remove filter click event, returns filterid */
    accessibleFocus: EventEmitter<number>;
    /** set parent aria-activedescendant on focus event, returns filterid */
    ariaDescendantFocus: EventEmitter<number>;
    /** remove filter click event, returns filterid */
    clickItem: EventEmitter;
    accessibleFocusHandler(e: CustomEvent): void;
    /**
     * [optional] Align expandable button left or right.
     */
    alignButton?: ExpandableListButtonAlign;
    /**
     * [optional] Sets element clickable.
     */
    clickable?: boolean;
    /**
     * [optional] Sets the divider color.
     */
    dividerColor?: string;
    /**
     * [optional] Sets the position where to insert the divider.
     */
    dividerType?: ListDividerType;
    /**
     * [optional] Sets the divider size.
     */
    dividerSize?: DividerSize;
    /**
     * [optional] Sets element as expandable.
     */
    expandable?: boolean;
    /**
     * [optional] Sets expandable style to element.
     */
    expandableStyle?: ExpandableListStyle;
    /**
     * [optional] List element id.
     */
    listElementId?: number;
    /**
     * [optional] Sets size of inside elements.
     */
    size?: ListSize;
    /**
     * [optional] Sets text color of the element.
     */
    color?: string;
    /**
     * [optional] Sets disabled style of the element.
     */
    disabled?: boolean;
    /**
     * [optional] position of the list element inside the list or the group
     */
    listElementPosition?: string;
    /**
     * [optional] type of the list marker for each element
     */
    listType?: ListType;
    /**
     * [optional] Sets element role.
     */
    role?: string;
    /** set tabindex to Host tag (optional). Defaults to 0. */
    htmlTabindex?: number | null;
    showInnerContent: boolean;
    private openElementConfig;
    /**
     * Constructor.
     */
    constructor();
    /**
     * Handler for click on element. If element is expandable, change state.
     * @returns void
     */
    private handleClick;
    private handleKeyDown;
    /**
     * Renders button to expand element.
     * @returns expadable button
     */
    private renderExpandableButton;
    /**
     * Renders expanded content if element is expandable.
     * @returns expanded content
     */
    private renderExpandedContent;
    /**
     * Renders content of the z-list-element
     * @returns list content
     */
    private renderContent;
    render(): HTMLZListElementElement;
}
