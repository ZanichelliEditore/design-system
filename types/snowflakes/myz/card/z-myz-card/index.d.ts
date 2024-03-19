import { LicenseType } from "../../../../beans/index";
/**
 * @slot  - generic card slot
 */
export declare class ZMyzCardComponent {
    /** faded status */
    faded: boolean;
    /** graphic variant (optional) */
    cardtype?: LicenseType;
    /** pressed status */
    ispressed: boolean;
    /** highlighted status */
    ishighlighted: boolean;
    private retrieveClass;
    render(): HTMLDivElement;
}
