import { EventEmitter } from "../../../stencil-public-runtime";
import { ComboItem } from "../../../beans";
export declare class ZCombobox {
  /** input unique id */
  inputid: string;
  /** list items array */
  items: ComboItem[] | string;
  /** label text */
  label: string;
  /** the combobox is disabled */
  disabled?: boolean;
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
  /** group items by category */
  hasgroupitems?: boolean;
  searchValue: string;
  selectedCounter: number;
  renderItemsList: ComboItem[];
  private itemsList;
  private inputType;
  watchItems(): void;
  watchSearchValue(): void;
  inputCheckListener(e: CustomEvent): void;
  /** Emitted when value is checked/unchecked. Returns id, items. */
  comboboxChange: EventEmitter;
  private emitComboboxChange;
  constructor();
  componentWillLoad(): void;
  componentWillRender(): void;
  private updateRenderItemsList;
  private resetRenderItemsList;
  private filterItems;
  private checkAll;
  private closeFilterItems;
  private toggleComboBox;
  private renderHeader;
  private renderContent;
  private renderItems;
  private renderItem;
  private renderList;
  private renderGroups;
  private renderNoSearchResults;
  private renderCloseButton;
  private renderSearchInput;
  private renderCheckAll;
  render(): HTMLDivElement;
}
