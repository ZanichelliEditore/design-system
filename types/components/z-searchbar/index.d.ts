import { EventEmitter } from "../../stencil-public-runtime";
import { ButtonVariant, ControlSize, SearchbarItem } from "../../beans";
/**
 * @cssprop --z-searchbar-results-height - Max height of the results container (default: 540px)
 * @cssprop --z-searchbar-tag-text-color - Color of tag's text (default --color-primary03);
 * @cssprop --z-searchbar-tag-bg - Color of tag's background (default --color-hover-primary);
 */
export declare class ZSearchbar {
    /** the id of the searchbar element */
    htmlid: string;
    /** Prevent submit action */
    preventSubmit?: boolean;
    /** Input search string */
    value?: string;
    /** Search input placeholder */
    placeholder?: string;
    /** Show autocomplete results */
    autocomplete?: boolean;
    /** Minimun number of characters to dispatch typing event */
    autocompleteMinChars?: number;
    /** Number of results shown - default all */
    resultsCount?: number;
    /** Search helper text */
    searchHelperLabel?: string;
    /** Autocomplete results items */
    resultsItems?: SearchbarItem[] | string;
    /** Sort autocomplete results items */
    sortResultsItems?: boolean;
    /** Show submit button */
    showSearchButton?: boolean;
    /** Set button icon without label*/
    searchButtonIconOnly?: boolean;
    /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
    size?: ControlSize;
    /** Graphical variant: `primary`, `secondary`, `tertiary`. Defaults to `primary`. */
    variant?: ButtonVariant;
    searchString: string;
    currResultsCount: number;
    showResults: boolean;
    isMobile: boolean;
    element: HTMLZSearchbarElement;
    private resultsItemsList;
    private inputRef;
    private resizeObserver;
    private items;
    /** Emitted on search submit, return search string */
    searchSubmit: EventEmitter<string>;
    private emitSearchSubmit;
    /** Emitted on search typing, return search string */
    searchTyping: EventEmitter<string>;
    private emitSearchTyping;
    /** Emitted on search result click, return item */
    searchItemClick: EventEmitter<SearchbarItem>;
    private emitSearchItemClick;
    watchItems(): void;
    watchResultsCount(): void;
    watchValue(): void;
    watchSearchString(): void;
    watchShowResults(): void;
    disconnectedCallback(): void;
    componentDidLoad(): void;
    componentWillLoad(): void;
    private getResultsItemsList;
    private getGroupedItems;
    private checkResultsCount;
    private handleStopTyping;
    private handleSubmit;
    private handleOutsideClick;
    private renderInput;
    private renderButton;
    private renderResults;
    private renderResultsList;
    private renderItems;
    private handleArrowsNavigation;
    private renderItem;
    private renderItemLabel;
    private renderItemCategory;
    private renderSearchHelper;
    private renderShowAllResults;
    render(): HTMLZSearchbarElement;
}
