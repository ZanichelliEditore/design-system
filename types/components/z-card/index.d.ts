import { CardVariant } from "../../beans";
/**
 * ZCard component.
 * @cssprop --aspect-ratio - Cover aspect ratio. Default: `1.62`
 * @cssprop --z-card--border-color - Default: `var(--gray200)`
 * @cssprop --z-card--color-cover-background - Cover color. Default: `var(--color-surface01)`
 * @cssprop --z-card--text-background - Background color for the `text` variant. Default: `var(--color-surface01)`
 * @cssprop --z-card--text-border-radius - Default: `none`
 * @cssprop --z-card--text-border - Configure CSS `border`. Default: `none`
 * @cssprop --z-card--text-padding - Configure CSS `padding`. Default: `none`
 * @slot cover - Image cover
 * @slot metadata - Metadata
 * @slot title - Title
 * @slot text - Text content
 * @slot action - Actions
 */
export declare class ZCard {
    /**
     * Card variant.
     * Can be one of "text", "border", "shadow", "overlay".
     * Leave it undefined for the default card.
     */
    variant: CardVariant;
    /** Name of the icon to place over the image cover */
    coverIcon: string;
    /** Enable shadow. Default: false. */
    showShadow: boolean;
    /** Enable "clickable" styles like hover background and cursor, focus shadow on the whole card, etc. */
    clickable: boolean;
    host: HTMLZCardElement;
    hasCoverImage: boolean;
    componentWillLoad(): void;
    /**
     * Template for a card without image cover.
     * A colored background replaces the image and some data is moved over it.
     */
    private renderColorCoverCard;
    /**
     * Template for the content.
     */
    private renderContent;
    render(): HTMLZCardElement;
}
