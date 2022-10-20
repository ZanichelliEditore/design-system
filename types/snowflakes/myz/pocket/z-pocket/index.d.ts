import { EventEmitter } from "../../../../stencil-public-runtime";
import { PocketStatus } from "../../../../beans";
/**
 * @slot - pocket content
 */
export declare class ZPocket {
  hostElement: HTMLZPocketElement;
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
  private emitPocketToggle;
  handlePocketHeaderClick(e: CustomEvent): void;
  handlePocketHeaderPan(e: CustomEvent): void;
  watchStatusHandler(newVal: PocketStatus): void;
  componentWillLoad(): void;
  private handleBackgroundClick;
  render(): HTMLDivElement;
}
