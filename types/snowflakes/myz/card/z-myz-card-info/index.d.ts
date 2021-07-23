import { EventEmitter } from "../../../../stencil-public-runtime";
import { DictionaryData } from "../../../../beans";
/**
 * @slot  - content
 */
export declare class ZMyzCardInfo {
  /** dictionary info */
  data: string | DictionaryData;
  /** tabindex link attribute (optional) */
  htmltabindex?: number;
  hiddenContent: boolean;
  tooltip: boolean;
  private cardData;
  private contentWrapper;
  private infoWrapper;
  private onlineLicenseWrapper;
  private offlineLicenseWrapper;
  /** flip card to front */
  flipCard: EventEmitter;
  emitFlipCard(showBack?: boolean): void;
  constructor();
  componentWillLoad(): void;
  componentWillUpdate(): void;
  componentDidRender(): void;
  handleContentHeight(): boolean;
  setStringOrArray(): void;
  renderCloseIcon(): any;
  renderGeneralSection(): any;
  renderAuthor(): any;
  renderYear(): any;
  renderTooltip(): any;
  setExpirationLicenseMessage(type: string): any;
  renderOnlineLicenseSection(): any;
  renderOfflineLicenseSection(): any;
  render(): any;
}
