export declare class ZStepperItem {
    /**
     * The number of the step item.
     */
    index: number;
    /**
     * The href to navigate on click.
     */
    href: string;
    /**
     * The pressed state of the item.
     */
    pressed: boolean;
    /**
     * The checked state of the item.
     */
    checked: boolean;
    /**
     * The disabled state of the item.
     */
    disabled: boolean;
    private getAttributes;
    render(): HTMLAnchorElement | HTMLButtonElement;
}
