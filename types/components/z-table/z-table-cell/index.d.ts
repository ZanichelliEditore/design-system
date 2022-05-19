import { Size } from "../../../beans";
export declare class ZTableCell {
  host: HTMLElement;
  /** [Optional] Show contextual menu button */
  showButton?: boolean;
  /** Set padding size of cell, if special 0px padding will be set */
  padding: Size;
  isMenuOpened: boolean;
  handleMenu(): void;
  componentWillRender(): void;
  render(): any;
}
