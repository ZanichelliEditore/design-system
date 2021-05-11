import { EventEmitter } from "../../../stencil-public-runtime";
import { InputStatusBean, SelectItemBean } from "../../../beans";
export declare class ZSelect {
  hostElement: HTMLElement;
  /** the id of the input element */
  htmlid: string;
  /** the input select options */
  items: SelectItemBean[] | string;
  /** the input name */
  name?: string;
  /** the input label */
  label?: string;
  /** the input is disabled */
  disabled?: boolean;
  /** the input is readonly */
  readonly?: boolean;
  /** the input placeholder (optional) */
  placeholder?: string;
  /** the input html title (optional) */
  htmltitle?: string;
  /** the input status (optional): available for text, password, number, email, textarea, select */
  status?: InputStatusBean;
  /** show input helper message (optional): available for text, password, number, email, textarea, select */
  hasmessage?: boolean;
  /** input helper message (optional): available for text, password, number, email, textarea, select */
  message?: string;
  /** the input has autocomplete option */
  autocomplete?: boolean | string;
  /** multiple options can be selected */
  multiple?: boolean;
  /** no result text message */
  noresultslabel?: string;
  isOpen: boolean;
  selectedItems: SelectItemBean[];
  searchString: null | string;
  private itemsList;
  constructor();
  watchItems(): void;
  /** get the input selected options */
  getSelectedItems(): Promise<SelectItemBean[]>;
  /** get the input value */
  getValue(): Promise<string | string[]>;
  /** set the input value */
  setValue(value: string | string[]): Promise<void>;
  /** Emitted on select option selection, returns select id, selected item id (or array of selected items ids if multiple) */
  optionSelect: EventEmitter;
  emitOptionSelect(): void;
  componentWillLoad(): void;
  componentWillRender(): void;
  getInitialItemsArray(): any;
  mapSelectedItemsToItemsArray(): any;
  getSelectedValues(): string | string[];
  filterItems(searchString: string): void;
  hasAutcomplete(): boolean;
  handleInputChange(e: CustomEvent): void;
  selectItem(item: null | SelectItemBean, selected: boolean): void;
  arrowsSelectNav(e: KeyboardEvent, key: number): void;
  focusSelectItem(index: number): void;
  toggleSelectUl(selfFocusOnClose?: boolean): void;
  handleInputClick(e: MouseEvent | KeyboardEvent): void;
  handleSelectFocus(e: MouseEvent | KeyboardEvent): void;
  scrollToLetter(letter: string): void;
  renderLabel(): any;
  renderInput(): any;
  renderChips(): any;
  renderSelectUl(): any;
  renderSelectUlItems(): any;
  renderNoSearchResults(): any;
  renderMessage(): any;
  render(): any;
}
