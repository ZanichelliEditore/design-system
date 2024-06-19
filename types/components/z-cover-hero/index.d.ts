import { CoverHeroContentPosition, CoverHeroVariant } from "../../beans";
/**
 * Cover hero component.
 * Component to display a hero image with content.
 *
 * @slot cover - slot for the cover image.
 * @slot content - slot for the content.
 * @slot info-reveal - slot for the info reveal.
 * @cssprop --cover-hero-overlay - overlay color of the cover hero (CSS `background` property). **Default**: `linear-gradient(270deg, #0000 0%, #000000e6 100%)`.
 * @cssprop --cover-hero-text-color - color of the text.
 * @cssprop --cover-hero-aspect-ratio - aspect ratio to use for the image. You can pass a fraction or a number representing the ratio. **Default**: the intrinsic aspect ratio of the slotted image or `16/9`.
 */
export declare class ZCoverHero {
    host: HTMLZCoverHeroElement;
    /**
     * Cover hero variant. Can be `OVERLAY` or `STACKED`.
     */
    variant: CoverHeroVariant;
    /**
     * Vertical content position (for `STACKED` variant).
     */
    contentPosition: CoverHeroContentPosition;
    /**
     * Whether to keep the image aspect ratio.
     * If set to `false`, the cssprop `--cover-hero-aspect-ratio` will not affect the component's size;
     * instead, the height of the component follows the content's one.
     * Note: it may be necessary to set a min and/or max height to the component.
     */
    preserveAspectRatio: boolean;
    /**
     * Store the intrinsic aspect ratio of the slotted image when loaded,
     * to have a default when `--cover-hero-aspect-ratio` is not set.
     * @param target The event target
     */
    protected onImgLoad({ target }: Event): void;
    /**
     * Template for the content.
     */
    private renderContent;
    render(): HTMLZCoverHeroElement;
}
