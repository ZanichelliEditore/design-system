import { EventEmitter } from "../../../stencil-public-runtime";
import { SortingOrientation, TableHeaderSize } from "../../../beans";
export declare class ZRegistroTableHeader {
  host: HTMLElement;
  /** Column ID */
  columnId: string;
  /** [Optional] Padding of the header */
  size?: TableHeaderSize;
  /** [Optional] Make the header sortable */
  sortable?: boolean;
  /** [Optional] Show contextual menu button */
  showButton?: boolean;
  isMenuOpened: boolean;
  sortingOrientation: SortingOrientation;
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
