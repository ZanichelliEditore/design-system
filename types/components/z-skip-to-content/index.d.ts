import { SkipToContentLink, ThemeVariant } from "../../beans";
/**
 * Component short description.
 */
export declare class ZSkipToContent {
    /** Graphical variant: `dark`, `light`. */
    variant?: ThemeVariant;
    /** Array to fill link into skip-content */
    links: string | SkipToContentLink[];
    visible: boolean;
    visibleLink: string;
    hostElement: HTMLZSkipToContentElement;
    handleFocusOutSkipToContent(e: FocusEvent): void;
    handleFocusSkipToContent(e: FocusEvent): void;
    componentDidLoad(): void;
    componentWillRender(): void;
    private isInSkipToContent;
    private showFirstChild;
    private handleLinkClick;
    render(): HTMLZSkipToContentElement;
}
