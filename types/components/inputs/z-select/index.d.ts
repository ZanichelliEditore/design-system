import { EventEmitter } from "../../../stencil-public-runtime";
import { InputStatusBean, SelectItemBean } from "../../../beans";
export declare class ZSelect {
  element: HTMLElement;
  /** the id of the input element */
  htmlid: string;
  /** the input select options */
  items: SelectItemBean[] | string;
  /** the input name */
  name?: string;
  /** the input label */
  label?: string;
  /** the input aria-label */
  ariaLabel?: string;
  /** the input is disabled */
  disabled?: boolean;
  /** the input is readonly */
  readonly?: boolean;
  /** the input placeholder (optional) */
  placeholder?: string;
  /** the input html title (optional) */
  htmltitle?: string;
  /** the input status (optional) */
  status?: InputStatusBean;
  /** input helper message (optional) - if set to `false` message won't be displayed */
  message?: string | boolean;
  /** the input has autocomplete option */
  autocomplete?: boolean;
  /** no result text message */
  noresultslabel?: string;
  isOpen: boolean;
  selectedItem: null | SelectItemBean;
  searchString: null | string;
  private itemsList;
  constructor();
  watchItems(): void;
  /** get the input selected options */
  getSelectedItem(): Promise<SelectItemBean>;
  /** get the input value */
  getValue(): Promise<string>;
  /** set the input value */
  setValue(value: string | string[]): Promise<void>;
  /** Emitted on select option selection, returns select id, selected item id */
  optionSelect: EventEmitter;
  emitOptionSelect(): void;
  componentWillLoad(): void;
  componentWillRender(): void;
  getInitialItemsArray(): any;
  mapSelectedItemToItemsArray(): any;
  getSelectedValue(): string;
  filterItems(searchString: string): void;
  hasAutocomplete(): boolean;
  handleInputChange(e: CustomEvent): void;
  selectItem(item: null | SelectItemBean, selected: boolean): void;
  arrowsSelectNav(e: KeyboardEvent, key: number): void;
  focusSelectItem(index: number): void;
  toggleSelectUl(selfFocusOnClose?: boolean): void;
  handleInputClick(e: MouseEvent | KeyboardEvent): void;
  handleSelectFocus(e: MouseEvent | KeyboardEvent): void;
  scrollToLetter(letter: string): void;
  renderInput(): any;
  renderSelectUl(): any;
  renderSelectUlItems(): any;
  renderNoSearchResults(): any;
  renderMessage(): any;
  render(): any;
}
