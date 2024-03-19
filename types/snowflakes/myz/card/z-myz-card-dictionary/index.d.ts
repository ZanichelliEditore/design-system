import { EventEmitter } from "../../../../stencil-public-runtime";
/**
 * @slot  - generic card slot
 * @slot info - flipped card info
 */
export declare class ZMyzCardDictionary {
    /** card title */
    name: string;
    /** card cover */
    cover: string;
    /** card is disabled */
    disabled: boolean;
    /** card is flipped */
    flipped: boolean;
    /** flip button label */
    flipbuttonlabel: string;
    /** hide info button */
    hideinfobtn: boolean;
    handleFlipCard(e: CustomEvent): void;
    /** when card is flipped */
    cardFlipped: EventEmitter;
    private flipCard;
    render(): HTMLDivElement;
}
