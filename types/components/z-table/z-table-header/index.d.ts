import { EventEmitter } from "../../../stencil-public-runtime";
import { Size, SortDirection } from "../../../beans";
export declare class ZTableHeader {
  host: HTMLElement;
  /** Column ID */
  columnId: string;
  /** Set padding size of cell, if special 0px padding will be set */
  padding: Size;
  /** [Optional] Make the header sortable */
  sortable?: boolean;
  /** [Optional] Show contextual menu button */
  showButton?: boolean;
  /** [Optional] Default sort order */
  defaultSortDirection?: SortDirection;
  sortDirection: SortDirection;
  isMenuOpened: boolean;
  constructor();
  /** [Optional] callback for sorting */
  sort: EventEmitter;
  emitOnSort(): void;
  handleSort(): void;
  handleMenuClick(): void;
  handleOutsideClick(e: any): void;
  handleClickHeaders(e: any): void;
  componentWillRender(): void;
  render(): any;
}
