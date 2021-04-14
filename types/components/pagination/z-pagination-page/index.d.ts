export declare class ZPaginationPage {
  /** anchor html id */
  pageid: string;
  /** numeric page value (optional) */
  value?: number;
  /** selected status flag */
  isselected: boolean;
  /** disabled status flag */
  isdisabled: boolean;
  /** visited status flag */
  isvisited: boolean;
  page: HTMLElement;
  render(): any;
}
