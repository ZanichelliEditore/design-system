import { Component, Prop, h, State, Listen, Element } from "@stencil/core";
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

  /** Items Array prima dello slot */
  @Prop() items: string;
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
    this.tabs = (Object.keys(this.arrayItems = JSON.parse(this.items))).length;
    this.navigateRight = this.navigateRight.bind(this);
    this.navigateLeft = this.navigateLeft.bind(this);
  }

  @Listen('selectedTab')
  selectedTabHandler(event: CustomEvent) {
    const tabindex = event.detail.tabindex;
    Array.from(this.host.children).forEach((elem, key) => {
      elem.setAttribute('selected', key === tabindex ? 'true' : 'false');
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
    return (
      <div>
        <button
          class={classNames(this.size) && `${'navigation'}`/* && `${this.orientation == 'horizontal' ? 'navigation-left' : 'navigation-up'}`*/}
          disabled={!this.canNavigateLeft() && true}
          tabindex={this.canNavigateLeft() ? 0 : -1}
          onClick={() => this.navigateLeft()}
          onKeyPress={(ev: KeyboardEvent) =>
            handleKeyboardSubmit(ev, this.navigateLeft)
          }
        >
          <z-icon name={this.orientation == 'horizontal' ? 'chevron-left' : 'chevron-up'} width={16} height={16} />
        </button>
        <slot/>
        <button
          class={classNames(this.size) && `${'navigation'}`}
          disabled={!this.canNavigateRight() && true}
          tabindex={this.canNavigateRight() ? 0 : -1}
          onClick={() => this.navigateRight()}
          onKeyPress={(ev: KeyboardEvent) =>
            handleKeyboardSubmit(ev, this.navigateRight)
          }
        >
          <z-icon name={this.orientation == 'horizontal' ? 'chevron-right' : 'chevron-down'} width={16} height={16} />
        </button>
      </div>
    );
  }
}
