import { ControlSize, InfoRevealPosition } from "../../beans";
/**
 * Info reveal component.
 *
 * @slot - content of the info panel.
 * @cssprop --z-info-reveal-panel-width - Width of the info panel.
 */
export declare class ZInfoReveal {
    /** Name of the icon for the trigger button */
    icon?: string;
    /**
     * The position of the z-info-reveal in the page. This helps to correctly place the info panel.
     * The panel will grow in the opposite direction of the position.
     * For example, with the default position `BOTTOM_RIGHT`, the panel will grow vertically upwards and horizontally to the left.
     */
    position?: InfoRevealPosition;
    /** Label of the trigger button. */
    label?: string;
    /** Aria label of the trigger button. It will be only used when `label` prop is empty. */
    ariaLabel: string;
    /** Size of the trigger button */
    size?: ControlSize;
    /** Whether the info panel is open. */
    open: boolean;
    host: HTMLZInfoRevealElement;
    private panel;
    /**
     * Adjust the position of the info panel to prevent exiting the viewport.
     */
    adjustPanelPosition(): void;
    /**
     * Toggle the open state of the info panel.
     */
    private togglePanel;
    /**
     * Close the info panel.
     */
    private closePanel;
    handleEscapeKey(event: KeyboardEvent): void;
    render(): HTMLZInfoRevealElement;
}
