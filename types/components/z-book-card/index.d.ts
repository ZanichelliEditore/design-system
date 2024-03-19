import { EventEmitter } from "../../stencil-public-runtime";
import { BookCardVariant } from "../../beans";
/**
 * @slot resources - books resources (extended variant only)
 * @slot header-cta - header CTA (e.g. bookmark icon - extended and search variant only)
 * @slot tags - card tags (extended and search variant only)
 * @slot footer-cta - footer cta button (search and compact variant only)
 * @cssprop --z-book-card-ribbon-background-color - ribbon backgrund color
 * @cssprop --z-book-card-ribbon-shadow-color - ribbon shadow color
 * @cssprop --z-book-card-compact-width - compact card custom width
 * @cssprop --z-book-card-compact-height - compact card custom height
 */
export declare class ZBookCard {
    hostElement: HTMLZBookCardElement;
    /**
     * Card variant: expanded, compact, search
     */
    variant: BookCardVariant;
    /**
     * Cover URL
     */
    cover: string;
    /**
     * Card main title
     */
    operaTitle: string;
    /**
     * [optional] Card subtitle
     */
    volumeTitle?: string;
    /**
     * [optional] Authors
     */
    authors?: string;
    /**
     * [optional] Main ISBN
     */
    isbn?: string;
    /**
     * [optional] ISBN label
     */
    isbnLabel: string;
    /**
     * [optional] Ribbon label - expanded and search variant only
     */
    ribbon?: string;
    /**
     * [optional] Ribbon icon - expanded and search variant only
     */
    ribbonIcon?: string;
    /**
     * [optional] Ribbon interactive - expanded and search variant only
     */
    ribbonInteractive?: boolean;
    /**
     * [optional] Borderless card - compact variant only
     */
    borderless?: boolean;
    /**
     * [optional] Fallback cover URL
     */
    fallbackCover?: string;
    /**
     * [optional] [accessibility] Card title HTML tag
     */
    operaTitleTag?: string;
    isMobile: boolean;
    hasResources: boolean;
    showResources: boolean;
    /** click on interactive ribbon */
    ribbonClick: EventEmitter;
    private emitRibbonClick;
    private id;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private handleResources;
    private toggleResources;
    private renderCard;
    private renderExpandedCard;
    private renderMobileExpandedCard;
    private renderSearchCard;
    private renderCompactCard;
    private renderCover;
    private renderRibbon;
    private renderOperaTitle;
    private renderVolumeTitle;
    private renderAuthors;
    private renderIsbn;
    private renderShowResources;
    private renderTagsSlot;
    private renderHeaderCtaSlot;
    private renderResourcesSlot;
    private renderFooterCtaSlot;
    render(): HTMLZBookCardElement;
}
