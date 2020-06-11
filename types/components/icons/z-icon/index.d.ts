export declare class ZIcon {
    /** icon name (choice between available icons) */
    name: string;
    /** icon height (optional) */
    height?: number;
    /** icon width (optional) */
    width?: number;
    /** icon id (optional) */
    iconid?: string;
    selectPathOrPolygon(iconName: string): HTMLElement;
    render(): any;
}
