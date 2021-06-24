import { TabSizeBean, TabOrientationBean } from '../../../beans';
export declare class ZNavigationTabs {
  host: HTMLElement;
  /** Available orientation: `horizontal` and `vertical`. Defaults to `horizontal`. */
  orientation?: TabOrientationBean;
  /** Available sizes: `big` and `small`. Defaults to `big`. */
  size?: TabSizeBean;
  /** State for the navigation */
  canNavigate: boolean;
  canNavigatePrev: boolean;
  canNavigateNext: boolean;
  direction: 'Top' | 'Left';
  dimension: 'Height' | 'Width';
  tabsNav: HTMLElement;
  /** Set all childrens (tab) size attribute : big (default) or small */
  setChildrenSize(): void;
  /** Set all childrens (tab) orientation attribute : horizontal (default) or vertical */
  setChildrenOrientation(): void;
  /** When resize check if the navigation buttons are needed */
  checkScrollVisible(): void;
  /** Check if navigation buttons can be enabled for each orientation */
  checkScrollEnabled(): void;
  selectedTabHandler(event: CustomEvent): void;
  /** Select a tab child and deselect the others */
  select(tab: Element): void;
  /** Scroll the navigation bar (half of its size) backward, based on orientation */
  navigatePrevious(): void;
  /** Scroll the navigation bar (half of its size) forward, based on orientation */
  navigateNext(): void;
  componentDidLoad(): void;
  render(): any;
}
