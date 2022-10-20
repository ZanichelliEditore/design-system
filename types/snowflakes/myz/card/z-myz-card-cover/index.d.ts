export declare class ZMyzCardCover {
  /** image source */
  img: string;
  /** cover alt title */
  titolo: string;
  /** faded status */
  faded: boolean;
  /** default error image source */
  defaultimg: string;
  private hadleOnImageError;
  render(): HTMLImageElement;
}
