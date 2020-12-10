import { ButtonVariantBean } from "../../../beans";
/**
 * @slot - button label
 */
export declare class ZButton {
    hostElement: HTMLElement;
    /** id, should be unique */
    htmlid?: string;
    /** name */
    name?: string;
    /** disable button */
    disabled?: boolean;
    /** button type */
    type?: HTMLButtonElement["type"];
    /** graphic variant */
    variant?: ButtonVariantBean;
    /** reduce button size (optional) */
    issmall?: boolean;
    /** add an icon to button (optional) */
    icon?: string;
    render(): any;
}
