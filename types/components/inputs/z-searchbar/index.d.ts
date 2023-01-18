import { EventEmitter } from "../../../stencil-public-runtime";
import { SearchbarItem } from "../../../beans";
/**
 * @cssprop --z-searchbar-results-height - Max height of the results container (default: 540px)
 */
export declare class ZSearchbar {
  /** the id of the searchbar element */
  htmlid: string;
  /** Show simple input without submit button */
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
  /** Truncate results to single row */
  resultsEllipsis?: boolean;
  /** Search helper text */
  searchHelperLabel?: string;
  /** Autocomplete results items */
  resultsItems?: SearchbarItem[] | string;
  /** Sort autocomplete results items */
  sortResultsItems?: boolean;
  searchString: string;
  currResultsCount: number;
  showResults: boolean;
  private resultsItemsList;
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
  clickListener(e: MouseEvent): void;
  componentWillLoad(): void;
  private getResultsItemsList;
  private getGroupedItems;
  private checkResultsCount;
  private handleStopTyping;
  private handleInput;
  private handleSubmit;
  private handleOutsideClick;
  private renderInput;
  private renderButton;
  private renderResults;
  private renderResultsList;
  private renderItems;
  private renderItem;
  private renderItemLabel;
  private renderItemCategory;
  private renderSearchHelper;
  private renderShowAllResults;
  render(): HTMLZSearchbarElement;
}
