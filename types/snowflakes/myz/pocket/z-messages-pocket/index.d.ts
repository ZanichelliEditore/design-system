import { PocketStatus } from "../../../../beans";
/**
 * @slot  - pocket body content
 */
export declare class ZMessagesPocket {
  /** pocket id */
  pocketid: string;
  /** number of messages */
  messages: number;
  /** pocket status */
  status: PocketStatus;
  handlePocketToggle(e: CustomEvent): void;
  private renderHeader;
  private renderBody;
  render(): HTMLZPocketElement;
}