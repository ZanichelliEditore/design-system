import { EventEmitter } from "../../../../stencil-public-runtime";
/**
 * @slot  - pocket header content
 */
export declare class ZPocketHeader {
  /** pocket id */
  pocketid: string;
  private swipeWrap;
  /** Emitted on pocket header click */
  pocketHeaderClick: EventEmitter;
  emitPocketHeaderClick(): void;
  /** Emitted on pocket header pan */
  pocketHeaderPan: EventEmitter;
  emitPocketHeaderPan(direction: string): void;
  constructor();
  componentDidLoad(): void;
  render(): any;
}
