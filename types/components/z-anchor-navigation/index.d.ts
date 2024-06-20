/**
 * Anchor navigation component.
 * @slot - Anchor navigation items. Use `<a>` elements inside. If you need an extra action element, use a wrapper around it and the anchor.
 * @example
 * ```
 * <z-anchor-navigation>
 *  <div>
 *    <a href="#section-id">Section name</a>
 *    <button type="button">
 *      <z-icon name="share" />
 *    </button>
 *  </div>
 * </z-anchor-navigation>
 * ```
 */
export declare class ZAnchorNavigation {
    /**
     * If enabled, the text of each anchor will be hidden unless
     * for the current one or the one the user is hovering.
     */
    hideUnselected: boolean;
    /**
     * Enables automatic inference of the current item, listening for hash change
     * and checking the `href` of the slotted anchors.
     * When disabled, the highlight of current item must be handled manually by setting the `data-current`
     * attribute to the correct slotted items and the `aria-current` attribute to the anchors.
     */
    autoCurrent: boolean;
    /**
     * Whether the mobile list is collapsed.
     */
    collapsed: boolean;
    host: HTMLZAnchorNavigationElement;
    /** Reference to the nav element. */
    private nav;
    /**
     * Set `aria-current` attribute to the anchors.
     */
    private setCurrent;
    /**
     * Toggle collapsed state.
     */
    private toggleCollapsed;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): HTMLZAnchorNavigationElement;
}
