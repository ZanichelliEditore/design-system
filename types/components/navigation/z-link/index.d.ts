import { EventEmitter } from "../../../stencil-public-runtime";
import { HostElement } from "../../../stencil-public-runtime";
/**
 * @slot - link content
 */
export declare class ZLink {
  /** link id (optional) */
  htmlid?: string;
  /** link url (optional) */
  href?: string;
  /** link target (optional) */
  target?: string;
  /** tabindex link attribute (optional) */
  htmltabindex?: number;
  /** disable link flag (optional) */
  isdisabled?: boolean;
  /** active link flag (optional) */
  isactive?: boolean;
  /** white variant flag (optional) */
  iswhite?: boolean;
  /** link text variant (optional) */
  textcolor?: "primary" | "inverse" | "white" | "black";
  /** link icon name (optional) */
  icon?: string;
  /** big link version */
  big?: boolean;
  /** link icon position (optional) */
  iconposition?: "left" | "right";
  /** draw underline on text (optional) */
  underline?: boolean;
  /** emitted on link click, returns linkId */
  zLinkClick: EventEmitter;
  hostElement: HostElement;
  iconSize: number;
  constructor();
  componentWillRender(): void;
  emitZLinkClick(e: MouseEvent, linkId: any): void;
  emitZLinkInteraction(e: Event, linkId: string): void;
  componentDidRender(): void;
  render(): any;
}
