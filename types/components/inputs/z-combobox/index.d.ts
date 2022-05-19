import { EventEmitter } from "../../../stencil-public-runtime";
import { ComboItemBean } from "../../../beans";
import { ZInput } from "../z-input";
export declare class ZCombobox {
  /** input unique id */
  inputid: string;
  /** list items array */
  items: ComboItemBean[] | string;
  /** label text */
  label: string;
  /** show search input flag (optional) */
  hassearch?: boolean;
  /** search input label text (optional) */
  searchlabel?: string;
  /** search input placeholder text (optional) */
  searchplaceholder?: string;
  /** search input title text (optional) */
  searchtitle?: string;
  /** no result text message */
  noresultslabel?: string;
  /** toggle combo list opening flag */
  isopen: boolean;
  /** fixed style flag */
  isfixed: boolean;
  /** close combobox list text */
  closesearchtext?: string;
  /** show "check all" checkbox (optional) */
  hascheckall?: boolean;
  /** check all label (optional) */
  checkalltext?: string;
  /** uncheck all label (optional) */
  uncheckalltext?: string;
  /** max number of checkable items (0 = unlimited) */
  maxcheckableitems: number;
  searchValue: string;
  selectedCounter: number;
  renderItemsList: ComboItemBean[];
  private itemsList;
  private inputType;
  watchItems(): void;
  inputCheckListener(e: CustomEvent): void;
  /** Emitted when value is checked/unchecked. Returns id, items. */
  comboboxChange: EventEmitter;
  emitComboboxChange(): void;
  constructor();
  componentWillLoad(): void;
  componentWillRender(): void;
  resetRenderItemsList(): void;
  filterItems(value: string): void;
  checkAll(checked?: boolean): void;
  closeFilterItems(): void;
  toggleComboBox(): void;
  renderHeader(): HTMLDivElement;
  renderContent(): HTMLDivElement | undefined;
  renderItems(): HTMLDivElement | undefined;
  renderList(items: ComboItemBean[]): HTMLUListElement | undefined;
  renderNoSearchResults(): HTMLUListElement;
  renderCloseButton(): HTMLDivElement;
  renderSearchInput(): ZInput | undefined;
  renderCheckAll(): any;
  render(): HTMLDivElement;
}
