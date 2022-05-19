import { EventEmitter } from "../../../../stencil-public-runtime";
import { PocketStatus } from "../../../../beans";
/**
 * @slot  - pocket content
 */
export declare class ZPocket {
  hostElement: HTMLElement;
  /** pocket id */
  pocketid: string;
  /** pocket status */
  status: PocketStatus;
  /** open z-pocket */
  open(): Promise<void>;
  /** close z-pocket */
  close(): Promise<void>;
  /** Emitted on pocket toggle, returns pocket id and status */
  pocketToggle: EventEmitter;
  emitPocketToggle(id: string, status: PocketStatus): void;
  handlePocketHeaderClick(e: CustomEvent): void;
  handlePocketHeaderPan(e: CustomEvent): void;
  watchStatusHandler(newVal: PocketStatus): void;
  componentWillLoad(): void;
  handleBackgroundClick(e: any): void;
  render(): HTMLDivElement;
}
