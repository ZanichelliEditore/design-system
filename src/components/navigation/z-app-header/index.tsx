import { Component, h, Element, Prop, State, Watch, Host } from '@stencil/core';
import { ZMenu } from '../z-menu';

const SUPPORT_INTERSECTION_OBSERVER = typeof IntersectionObserver !== 'undefined';

@Component({
  tag: 'z-app-header',
  styleUrl: 'styles.css',
  shadow: true
})
export class ZAppHeader {
  @Element() hostElement: HTMLElement;

  /**
   * Stuck mode for the header.
   * You can programmatically set it using an IntersectionObserver.
   * **Optional**
   */
  @Prop({ reflect: true }) stuck: boolean = false;

  /**
   * Collapse the menu container into a side drawer, for a better experience on mobile devices.
   * **Optional**
   */
  @Prop({ reflect: true }) drawer: boolean = false;

  /**
   * Set the hero image source for the header.
   * You can also use a slot="hero" node for advanced customisation.
   * **Optional**
   */
  @Prop() hero: string;

  /**
   * Should place an overlay over the hero image.
   * Useful for legibility purpose.
   * **Optional**
   */
  @Prop({ reflect: true }) overlay: boolean = false;

  /**
   * Control menu bar position in the header.
   * **Optional**
   */
   @Prop({ reflect: true }) flow: 'auto'|'stack' = 'auto';

  /**
   * The opening state of the drawer.
   */
  @State() drawerOpen: boolean = false;

  /**
   * The stucked state of the bar.
   */
  @State() stucked: boolean = false;

  private container?: HTMLDivElement;
  private menuElements?: NodeListOf<HTMLElement>;

  private observer?: IntersectionObserver = SUPPORT_INTERSECTION_OBSERVER && new IntersectionObserver(([entry]) => {
    this.stucked = !entry.isIntersecting;
  }, {
    threshold: 0.5
  });

  constructor() {
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.setStuckPosition = this.setStuckPosition.bind(this);
  }

  componentDidLoad() {
    this.collectMenuElements();
    this.onStuckMode();
  }

  private get title() {
    const titleElement = this.hostElement.querySelector('[slot="title"]');
    if (!titleElement) {
      return '';
    }
    return titleElement.textContent.trim();
  }

  private get scrollParent() {
    const parent = this.hostElement.offsetParent;
    if (parent === document.body || parent === document.documentElement) {
      return window;
    }
    return parent;
  }

  private collectMenuElements() {
    const menuElements = this.menuElements = this.hostElement.querySelectorAll('[slot="menu"]');
    this.hostElement.setAttribute('data-menu-length', `${menuElements.length}`);
    this.setMenuFloatingMode();
  }

  private setStuckPosition() {
    const topbar = this.hostElement.ownerDocument.querySelector('z-app-topbar');
    const top = topbar ? topbar.clientHeight : 0;
    this.hostElement.style.setProperty('--stuck-top', `${top}px`);
  }

  @Watch('stuck')
  onStuckMode() {
    if (this.stuck) {
      this.enableStuckObserver();
    } else {
      this.disableStuckMode();
    }
  }

  enableStuckObserver() {
    if (this.observer) {
      this.observer.observe(this.container);
    }
  }

  disableStuckMode() {
    this.stucked = false;
    if (this.observer) {
      this.observer.unobserve(this.container);
    }
  }

  @Watch('stucked')
  onStucked() {
    const scrollParent = this.scrollParent;
    if (!scrollParent) {
      return;
    }
    if (this.stucked) {
      this.setStuckPosition();
      scrollParent.addEventListener('scroll', this.setStuckPosition);
    } else {
      scrollParent.removeEventListener('scroll', this.setStuckPosition);
    }
  }

  @Watch('drawerOpen')
  setMenuFloatingMode() {
    if (!this.menuElements) {
      return;
    }

    const elements = this.menuElements;
    for (let i = 0, len = elements.length; i < len; i++) {
      (elements[i] as unknown as ZMenu).open = false;
      (elements[i] as unknown as ZMenu).floating = !this.drawerOpen;
    }
  }

  render() {
    return <Host>
      <div class="heading-panel" ref={(el) => this.container = el }>
        <div class="hero-container">
          <slot name="hero">
            {this.hero && <img alt="" src={this.hero} />}
          </slot>
        </div>
        <div class="heading-container">
          <div class="heading-title">
            <button class="drawer-trigger" onClick={this.openDrawer}>
              <z-icon name="burger-menu"></z-icon>
            </button>
            <slot name="title"></slot>
          </div>
          <div class="heading-subtitle">
            <slot name="subtitle"></slot>
          </div>
        </div>
        <div class="menu-container">
          {(!this.drawerOpen) && <slot name="menu" onSlotchange={() => this.collectMenuElements()}></slot>}
        </div>
      </div>
      <div class="drawer-container" data-open={this.drawerOpen}>
        <div class="drawer-overlay" onClick={this.closeDrawer}></div>
        <div class="drawer-panel">
          <button class="drawer-close" onClick={this.closeDrawer}>
            <z-icon name="close"></z-icon>
          </button>
          <div class="drawer-content">
            {this.drawerOpen && <slot name="menu" onSlotchange={() => this.collectMenuElements()}></slot>}
          </div>
        </div>
      </div>
      {this.stucked && <div class="heading-stucked">
        <button class="drawer-trigger" onClick={this.openDrawer}>
          <z-icon name="burger-menu"></z-icon>
        </button>
        <div class="heading-title">{this.title}</div>
      </div>}
    </Host>;
  }

  openDrawer() {
    this.drawerOpen = true;
  }

  closeDrawer() {
    this.drawerOpen = false;
  }
}
