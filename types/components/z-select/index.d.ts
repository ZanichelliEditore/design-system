import { EventEmitter } from "../../stencil-public-runtime";
import { ControlSize, InputStatus, SelectItem } from "../../beans";
export declare class ZSelect {
    element: HTMLZSelectElement;
    /** the id of the input element */
    htmlid: string;
    /** the input select options */
    items: SelectItem[] | string;
    /** the input name */
    name?: string;
    /** the input label */
    label?: string;
    /** the input aria-label */
    ariaLabel: string;
    /** the input is disabled */
    disabled?: boolean;
    /** the input is readonly */
    readonly?: boolean;
    /** the input placeholder (optional) */
    placeholder?: string;
    /** the input html title (optional) */
    htmltitle?: string;
    /** the input status (optional) */
    status?: InputStatus;
    /** input helper message (optional) - if set to `false` message won't be displayed */
    message?: string | boolean;
    /** the input has autocomplete option */
    autocomplete?: boolean;
    /** no result text message */
    noresultslabel?: string;
    /** */
    hasGroupItems?: boolean;
    /** When fixed, it occupies space and pushes down next elements. */
    isfixed?: boolean;
    /** */
    resetItem?: string;
    /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
    size?: ControlSize;
    isOpen: boolean;
    selectedItem: null | SelectItem;
    focusedItemId: string;
    searchString: null | string;
    private itemsList;
    constructor();
    watchItems(): void;
    getFocusedItemHandler(e: CustomEvent): void;
    /** get the input selected options */
    getSelectedItem(): Promise<SelectItem>;
    /** get the input value */
    getValue(): Promise<string>;
    /** set the input value */
    setValue(value: string | string[]): Promise<void>;
    /** Emitted on select option selection, returns select id, selected item id */
    optionSelect: EventEmitter;
    private emitOptionSelect;
    /** Emitted on reset selected item, returns select id, selected item id */
    resetSelect: EventEmitter;
    private emitResetSelect;
    componentWillLoad(): void;
    componentWillRender(): void;
    private getInitialItemsArray;
    private mapSelectedItemToItemsArray;
    private getSelectedValue;
    private filterItems;
    private hasAutocomplete;
    private handleInputChange;
    private selectItem;
    private arrowsSelectNav;
    private focusSelectItem;
    private toggleSelectUl;
    private handleInputClick;
    private handleSelectFocus;
    private scrollToLetter;
    private renderInput;
    private renderSelectUl;
    private renderResetItem;
    private renderItem;
    private listSizeType;
    private renderSelectUlItems;
    private renderSelectGroupItems;
    private renderNoSearchResults;
    private renderMessage;
    render(): HTMLDivElement;
}
