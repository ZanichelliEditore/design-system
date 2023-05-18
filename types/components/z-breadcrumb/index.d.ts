import { BreadcrumbHomepageVariant, BreadcrumbPath, BreadcrumbPathStyle, Device } from "../../beans";
import { EventEmitter } from "puppeteer";
export declare class ZBreadcrumb {
  hostElement: HTMLZBreadcrumbElement;
  /** [optional] Path elements, the first of which is the home path */
  paths?: BreadcrumbPath[] | string;
  /** [optional] Sets the path style */
  pathStyle?: BreadcrumbPathStyle;
  /** [optional] Variant of first node */
  homepageVariant?: BreadcrumbHomepageVariant;
  /** [optional] Sets max number of element to show */
  maxNodesToShow?: number;
  /** [optional] Controls the behaviour on <a> tag click/enter */
  preventFollowUrl?: boolean;
  /** [optional] Sets max number of row for each path inside the popover. Zero equals unlimited */
  overflowMenuItemRows?: number;
  /** [optional] Sets the maximun number of chars per single node */
  truncateChar?: number;
  /** Handle mobile */
  viewPortWidth: Device;
  /** Detect whether the length of the nodes shown exceeds the container length */
  hasOverflow: boolean;
  popoverEllipsisOpen: boolean;
  /** Emitted when preventFollowUrl=true to handle custom page transition */
  clickOnNode: EventEmitter;
  handleResize(): void;
  handlePropChange(): void;
  handleResizeUp(newValue: Device, oldValue: Device): void;
  private pathsList;
  private pathListCopy;
  private collapsedElements;
  private collapsedElementsRef;
  private triggerButton;
  private triggerEllipsis;
  private wrapElement;
  private currentIndex;
  private homepageNode;
  private totalLenght;
  private anchorElements;
  private currentEllipsisText;
  private truncatePosition;
  componentWillLoad(): void;
  componentWillRender(): void;
  componentDidRender(): void;
  private initializeBreadcrumb;
  private checkEllipsisOrOverflowMenu;
  private truncateWithEllipsis;
  private getPathsItemsList;
  private renderMobileBreadcrumb;
  private renderHomepageNode;
  private renderNode;
  private renderBreadcrumb;
  private togglePopover;
  private handlePreventFollowUrl;
  private handleOverflowMenuAccessibility;
  private renderOverflowMenu;
  render(): HTMLZBreadcrumbElement;
}
