import { Device } from "../../../beans";
/**
 * @slot footer-right - right content slot in footer
 * @slot footer-left - left content slot in footer
 */
export declare class ZSlideshow {
    el: HTMLZSlideshowElement;
    /** slideshow id */
    slideshowid: string;
    /** array or JSON stringified images urls */
    data: string[] | string;
    device: Device;
    currentSlide: number;
    private links;
    watchData(): void;
    componentWillLoad(): void;
    componentDidRender(): void;
    private handleResize;
    private parseLinks;
    private setStyle;
    private setDevice;
    private setCurrentSlide;
    private getBulletDimension;
    private renderSlides;
    private renderScroll;
    private renderSlideshowMain;
    private renderBullet;
    private renderSlideshowFooter;
    render(): HTMLElement;
}
