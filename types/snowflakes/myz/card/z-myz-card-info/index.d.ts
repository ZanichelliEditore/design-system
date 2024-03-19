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
    private emitFlipCard;
    constructor();
    componentWillLoad(): void;
    componentWillUpdate(): void;
    componentDidRender(): void;
    private handleContentHeight;
    private setStringOrArray;
    private renderCloseIcon;
    private renderGeneralSection;
    private renderAuthor;
    private renderYear;
    private renderTooltip;
    private setExpirationLicenseMessage;
    private renderOnlineLicenseSection;
    private renderOfflineLicenseSection;
    render(): HTMLDivElement;
}
