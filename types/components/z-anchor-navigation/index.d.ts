/**
 * * Anchor navigation component.
 * @slot Main slot. Put some `<a>` tags inside. If you need an action button/icon, wrap it and the <a> inside another tag.
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
     * Whether the mobile list is collapsed.
     */
    collapsed: boolean;
    /** Reference to the nav element. */
    private nav;
    /**
     * Set aria-current attribute to the anchors.
     */
    private setAriaCurrent;
    /**
     * Toggle collapsed state.
     */
    private toggleCollapsed;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): HTMLZAnchorNavigationElement;
}
