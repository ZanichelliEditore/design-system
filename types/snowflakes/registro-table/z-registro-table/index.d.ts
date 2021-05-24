/**
 * @slot - table elements
 * @slot sticky-footer - set the content of the sticky footer
 */
export declare class ZRegistroTable {
  host: HTMLElement;
  /** Sets table with border */
  bordered?: boolean;
  /** Sets first column sticky */
  columnSticky?: boolean;
  /** Sets header sticky */
  headerSticky?: boolean;
  componentWillRender(): void;
  render(): any;
}
