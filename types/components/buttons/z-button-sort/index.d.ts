import { EventEmitter } from "../../../stencil-public-runtime";
export declare class ZButtonSort {
  /** id, should be unique */
  buttonid: string;
  /** label content (ascending) */
  label: string;
  /** label content (descending) */
  desclabel?: string;
  /** occurrencies counter (optional) */
  counter?: number;
  /** sort label content (ascending) (optional) */
  sortlabelasc?: string;
  /** sort label content (descending) (optional) */
  sortlabeldesc?: string;
  /** selected flag (optional) */
  isselected?: boolean;
  /** sortable flag (optional) */
  sortasc?: boolean;
  /** sorting direction click event, returns buttonid and sortAsc */
  buttonSortClick: EventEmitter;
  emitButtonSortClick(): void;
  render(): any;
}
