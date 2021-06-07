import { Component, Prop, h, State, Event, EventEmitter } from "@stencil/core";
import classNames from "classnames";

import {
  TabItem,
  TabSizeBean,
  TabSizeEnum,
  TabOrientationBean,
  TabOrientationEnum
 } from "../../../beans";

import Hammer from "hammerjs";

import { handleKeyboardSubmit } from "../../../utils/utils";

@Component({
  tag: "z-navigation-tabs",
  styleUrl: "styles.css",
  shadow: true
})
export class ZNavigationTabs {
  /** Items Array prima dello slot */
  @Prop() items: string;
  /** Available orientation: `horizontal` and `vertical`. Defaults to `horizontal`. */
  @Prop({ reflect: true }) orientation?: TabOrientationBean = TabOrientationEnum.horizontal;
  /** Available sizes: `big` and `small`. Defaults to `big`. */
  @Prop({ reflect: true }) size?: TabSizeBean = TabSizeEnum.big;
  /** Number of visible tabs*/
  @Prop() visibletabs: number;
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
    this.emitGoToTab = this.emitGoToTab.bind(this);
  }

  componentDidLoad() {
    this.scrollTab = this.scrollTab.bind(this);
    let mc = new Hammer(this.tab);
    // listen to events...
    mc.on("swiperight", this.scrollTab);
    mc.on("swipeleft", this.scrollTab);
  }

  componentWillRender() {
    this.initPagination();
  }

  componentWillUpdate() {
    this.initPagination();
  }

  initPagination() {
    this.loadTabs();
  }

  scrollTab(ev: HammerInput): void {
    let vel =
      Math.round(Math.abs(ev.velocity)) * this.velocityConstantMultiplier;
    const deltaTab = Math.max(1, vel);
    switch (ev.type) {
      case "swiperight":
        if (!this.canNavigateLeft()) break;
        const newstartTab1 = this.starttab - deltaTab;
        if (newstartTab1 > 1) this.emitChangeStartTab(newstartTab1);
        else this.emitChangeStartTab(1);
        break;
      case "swipeleft":
        if (!this.canNavigateRight()) break;
        const newstartTab2 = this.starttab + deltaTab;
        if (newstartTab2 < this.tabs - this.visibletabs + 1)
          this.emitChangeStartTab(newstartTab2);
        else this.emitChangeStartTab(this.tabs - this.visibletabs + 1);
        break;
      default:
        break;
    }
  }

  /** emitted on tab number click, returns tab*/
  @Event() goToTab: EventEmitter;
  emitGoToTab(tab) {
    this.currenttab= tab;
    this.goToTab.emit({ tab: tab });
  }

  /** emitted on start tab change, returns starttab*/
  @Event() changeStartTab: EventEmitter;
  emitChangeStartTab(starttab) {
    this.starttab = starttab;
    this.changeStartTab.emit({ starttab: starttab });
  }

  loadTabs() {
    this.currentTabs.splice(0);
    const lastTab = this.tabWindow();

    let i: number;
    for (i = 0; i < lastTab; i++) {
      this.currentTabs.push(i + this.starttab);
    }
  }

  tabWindow() {
    return Math.min(this.tabs, this.visibletabs);
  }

  canNavigateLeft() {
    return this.starttab > 1;
  }
  canNavigateRight() {
    return this.starttab + this.visibletabs - 1 < this.tabs;
  }

  navigateLeft() {
    if (this.canNavigateLeft()) {
      this.starttab--;
      this.emitChangeStartTab(this.starttab);
      this.loadTabs();
    }
  }

  navigateRight() {
    if (this.canNavigateRight()) {
      this.starttab++;
      this.emitChangeStartTab(this.starttab);
      this.loadTabs();
    }
  }

  render() {
    // fisso due button (fatto), somma delle tabs e fare > viewport per mostrare arrow left, right or up, down
    // slot guardare z-menu-section
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
        <slot
          selected={index === this.currenttab}
          disabled={this.arrayItem.disabled}
          onClick={() => this.emitGoToTab(index)}
          onKeyDown={(ev: KeyboardEvent) =>
          handleKeyboardSubmit(ev, this.emitGoToTab, index)
        ></slot>
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
