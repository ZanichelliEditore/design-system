import { EventEmitter } from "../../stencil-public-runtime";
export declare class ZButtonFilter {
  /** filter text content */
  filtername: string;
  /** disable action on button */
  isfixed: boolean;
  /** add icon to button */
  hasicon: boolean;
  /** filter id */
  filterid: string;
  /** reduce button size (optional) */
  issmall?: boolean;
  /** remove filter click event, returns filterid */
  removefilter: EventEmitter;
  constructor();
  handleRemovingFilterClick(): void;
  renderFixedPillow(filtername: any): any;
  renderDynamicPillow(filtername: any): any;
  renderIcon(): any;
  renderContent(filtername: any): any;
  render(): any;
}
