import { ZChipType } from "../../../beans";
export declare class ZChip {
  hostElement: HTMLElement;
  regulartext?: string;
  boldtext?: number;
  type?: ZChipType;
  disabled?: boolean;
  filter?: boolean;
  private renderLegacyChip;
  private renderFilterChip;
  render(): any;
}
