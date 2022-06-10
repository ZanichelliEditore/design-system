/**
 * ZCarousel component.
 * @cssprop --z-carousel-gutter - The gutter between items.
 * @slot - carousel items. use `<li>` elements inside this slot as it is wrapped inside an `<ul>`
 */
export declare class ZCarousel {
  /** sets whether the z-carousel is on loading state */
  isLoading: boolean;
  /** sets the height of z-carousel ghost loading, this prop is mandatory when isloading is set to true, as otherwise the component won't show. */
  ghostLoadingHeight: number;
  render(): any;
}
