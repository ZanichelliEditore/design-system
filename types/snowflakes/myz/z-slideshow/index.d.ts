import { DeviceType } from "../../../beans";
/**
 * @slot footer-right - right content slot in footer
 * @slot footer-left - left content slot in footer
 */
export declare class ZSlideshow {
  el: HTMLElement;
  /** slideshow id */
  slideshowid: string;
  /** array or JSON stringified images urls */
  data: string[] | string;
  device: DeviceType;
  currentSlide: number;
  private links;
  watchData(): void;
  componentWillLoad(): void;
  componentDidRender(): void;
  handleResize(): void;
  parseLinks(): any;
  setStyle(): void;
  setDevice(): void;
  setCurrentSlide(index: number): void;
  getBulletDimension(): number;
  renderSlides(items: string[]): HTMLElement;
  renderScroll(direction: "left" | "right"): HTMLZIconElement;
  renderSlideshowMain(): HTMLElement;
  renderBullet(i: number): HTMLElement;
  renderSlideshowFooter(): HTMLElement;
  render(): HTMLElement;
}
