export declare class ZLogo {
    /** image width */
    width?: number;
    /** image height */
    height?: number;
    /** alternative image text */
    imageAlt?: string;
    /** link url (optional) */
    link?: string;
    /** link target: true means _blank, false means _self */
    targetBlank?: boolean;
    /** if true, the mobile logo is displayed, otherwise the desktop one */
    mobileLogo?: boolean;
    render(): HTMLZLogoElement;
}
