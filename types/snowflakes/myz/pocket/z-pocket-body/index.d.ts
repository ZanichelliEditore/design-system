import { PocketStatus } from "../../../../beans";
/**
 * @slot  - pocket body content
 */
export declare class ZPocketBody {
  /** pocket id */
  pocketid: string;
  /** pocket status */
  status: PocketStatus;
  handlePocketToggle(e: CustomEvent): void;
  render(): any;
}
