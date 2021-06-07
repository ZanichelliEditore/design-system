import { Component, Prop, h, State, Listen, Element, Watch } from "@stencil/core";
import classNames from "classnames";

import {
  TabItem,
  TabSizeBean,
  TabSizeEnum,
  TabOrientationBean,
  TabOrientationEnum
 } from "../../../beans";

import { handleKeyboardSubmit } from "../../../utils/utils";
@Component({
  tag: "z-navigation-tabs",
  styleUrl: "styles.css",
  shadow: true
})
export class ZNavigationTabs {
  @Element() host: HTMLElement;

  /** Available orientation: `horizontal` and `vertical`. Defaults to `horizontal`. */
  @Prop({ reflect: true }) orientation?: TabOrientationBean = TabOrientationEnum.horizontal;
  /** Available sizes: `big` and `small`. Defaults to `big`. */
  @Prop({ reflect: true }) size?: TabSizeBean = TabSizeEnum.big;
  /** Current displayed tab (mutable) */
  @State() currenttab: number = 1;
  /** Initial starttab (mutable) */
  @Prop({ mutable: true }) starttab: number = 1;

  @State() currentTabs: number[] = [];

  tabs: number;
  arrayItems: TabItem[];
  arrayItem: TabItem;

  velocityConstantMultiplier: number = 2;

  tab: HTMLElement;

  constructor() {
    this.navigateRight = this.navigateRight.bind(this);
    this.navigateLeft = this.navigateLeft.bind(this);
  }

  @Listen('z-navigation-tab-selected')
  selectedTabHandler(event: CustomEvent, target: HTMLElement) {
    const tab = event.target || target;
    (this.host.shadowRoot.querySelector('slot') as HTMLSlotElement).assignedElements().forEach((elem) => {
      elem.setAttribute('selected', `${elem === tab}`);
    });
  }

  @Watch('orientation')
  watchOrientation(newValue: string) {
    (this.host.shadowRoot.querySelector('slot') as HTMLSlotElement).assignedElements().forEach((elem) => {
      elem.setAttribute('orientation', newValue);
    });
  }

  tabWindow() {
    // TODO
  }

  canNavigateLeft() {
    // TODO
  }

  canNavigateRight() {
    // TODO
  }

  navigateLeft() {
    // todO
  }

  navigateRight() {
    // todO
  }

  render() {
    return [
      <button
        class={classNames(this.size) && `${'navigation'}`}
        onClick={() => this.navigateLeft()}
        onKeyPress={(ev: KeyboardEvent) =>
          handleKeyboardSubmit(ev, this.navigateLeft)
        }
      >
        <z-icon name={this.orientation == 'horizontal' ? 'chevron-left' : 'chevron-up'} width={16} height={16} />
      </button>,
      <slot/>,
      <button
        class={classNames(this.size) && `${'navigation'}`}
        onClick={() => this.navigateRight()}
        onKeyPress={(ev: KeyboardEvent) =>
          handleKeyboardSubmit(ev, this.navigateRight)
        }
      >
        <z-icon name={this.orientation == 'horizontal' ? 'chevron-right' : 'chevron-down'} width={16} height={16} />
      </button>
    ];
  }
}
