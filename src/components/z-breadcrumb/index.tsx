import {Component, Prop, h, State, Host, Listen, Element, Event, Watch, EventEmitter} from "@stencil/core";
import {
  BreadcrumbHomepageVariant,
  BreadcrumbPath,
  BreadcrumbPathStyle,
  Device,
  KeyboardCode,
  ListSize,
  PopoverPosition,
} from "../../beans";
import {getDevice, handleKeyboardSubmit} from "../../utils/utils";

@Component({
  tag: "z-breadcrumb",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZBreadcrumb {
  /* Accessibility references */
  /* Overflow-menu: https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/ */
  /* Breadcrumb: https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/ */
  /* Focus on multiline link: https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html */

  @Element() hostElement: HTMLZBreadcrumbElement;

  /** [optional] Sets the path style */
  @Prop({reflect: true})
  pathStyle?: BreadcrumbPathStyle = BreadcrumbPathStyle.UNDERLINED;

  /** [optional] Variant of first node */
  @Prop()
  homepageVariant?: BreadcrumbHomepageVariant = BreadcrumbHomepageVariant.ICON;

  /** [optional] Sets max number of element to show */
  @Prop()
  maxNodesToShow? = 5;

  /** [optional] Controls the behaviour on <a> tag click/enter */
  @Prop()
  preventFollowUrl? = false;

  /** [optional] Sets max number of row for each path inside the popover. Zero equals unlimited */
  @Prop()
  overflowMenuItemRows? = 0;

  /** [optional] Sets the maximun number of chars per single node */
  @Prop()
  truncateChar? = 30;

  /** Handle mobile */
  @State()
  viewPortWidth: Device;

  /** Detect whether the length of the nodes shown exceeds the container length */
  @State()
  hasOverflow = false;

  @State()
  popoverEllipsisOpen = false;

  /** Emitted when preventFollowUrl=true to handle custom page transition */
  @Event()
  clickOnNode: EventEmitter<BreadcrumbPath["path"]>;

  private pathsList: BreadcrumbPath[];

  private pathListCopy: BreadcrumbPath[];

  private collapsedElements: BreadcrumbPath[] = [];

  private collapsedElementsRef: HTMLZPopoverElement;

  private triggerButton: HTMLButtonElement;

  private wrapElement: HTMLElement;

  private currentIndex = 0;

  private homepageNode: BreadcrumbPath;

  private anchorElements;

  private currentEllipsisText: string;

  private truncatePosition = null;

  @Listen("resize", {target: "window"})
  handleResize(): void {
    this.viewPortWidth = getDevice();
    if (
      this.viewPortWidth !== Device.MOBILE &&
      this.wrapElement &&
      this.wrapElement.scrollWidth > this.wrapElement.clientWidth
    ) {
      this.hasOverflow = true;
    }
  }
  // eslint-disable-next-line lines-between-class-members
  @Watch("maxNodesToShow")
  handlePropChange(): void {
    this.initializeBreadcrumb();
  }

  @Watch("viewPortWidth")
  handleResizeUp(newValue: Device, oldValue: Device): void {
    if (
      newValue === Device.MOBILE ||
      (oldValue === Device.MOBILE && newValue === Device.TABLET) ||
      (oldValue === Device.MOBILE && newValue === Device.DESKTOP) ||
      (oldValue === Device.MOBILE && newValue === Device.DESKTOP_WIDE) ||
      (oldValue === Device.TABLET && newValue === Device.DESKTOP) ||
      (oldValue === Device.TABLET && newValue === Device.DESKTOP_WIDE) ||
      (oldValue === Device.DESKTOP && newValue === Device.DESKTOP_WIDE)
    ) {
      this.initializeBreadcrumb();
    }
  }

  componentWillLoad(): void {
    this.viewPortWidth = getDevice();
    this.initializeBreadcrumb();
  }

  componentWillRender(): void {
    if (this.viewPortWidth !== Device.MOBILE && this.hasOverflow) {
      this.checkEllipsisOrOverflowMenu();
      this.hasOverflow = false;
    }
  }

  componentDidRender(): void {
    if (this.collapsedElementsRef) {
      this.anchorElements = Array.from(this.hostElement.shadowRoot.querySelectorAll("z-list-group a"));
    }

    if (this.viewPortWidth !== Device.MOBILE && this.wrapElement.scrollWidth > this.wrapElement.clientWidth) {
      this.hasOverflow = true;
    }
  }

  private initializeBreadcrumb(): void {
    if (this.viewPortWidth === Device.MOBILE) {
      this.pathsList = this.getPathsItemsList().filter((item) => !!item.path);
    } else {
      this.pathsList = this.getPathsItemsList();
    }
    this.homepageNode = this.pathsList.shift();
    this.pathListCopy = [...this.pathsList];
    this.collapsedElements = [];
    if (this.pathsList.length > this.maxNodesToShow) {
      this.collapsedElements = this.pathsList.splice(0, this.pathsList.length - 2);
    }
  }

  private checkEllipsisOrOverflowMenu(): void {
    this.pathsList.forEach((pathItem, index) => {
      if (pathItem.text.length <= this.truncateChar) {
        return;
      }

      if (this.truncatePosition > 0) {
        this.collapsedElements.concat(this.pathListCopy.splice(0, this.truncatePosition));
        this.pathsList.splice(0, this.truncatePosition);
        this.truncatePosition = 0;

        return;
      } else if (this.truncatePosition === 0) {
        this.collapsedElements.concat(this.pathListCopy.splice(0, this.truncatePosition + 1));
        this.pathsList.splice(0, this.truncatePosition + 1);
        this.truncatePosition = null;

        return;
      }

      if (index !== this.pathsList.length - 1) {
        const truncatedString = this.truncateWithEllipsis(pathItem.text, this.truncateChar);
        this.currentEllipsisText = pathItem.text;
        pathItem.text = truncatedString;
        pathItem.hasTooltip = true;
        this.truncatePosition = index;
      }
    });
  }

  private truncateWithEllipsis(str: string, maxLength: number): string {
    if (str.length <= maxLength) {
      return str;
    }

    return str.substring(0, maxLength - 1) + "&mldr;";
  }

  private getPathsItemsList(): BreadcrumbPath[] {
    return Array.from(this.hostElement.children).map((item: HTMLAnchorElement) => {
      return {
        text: item.textContent,
        path: item.href,
        hasTooltip: false,
      };
    });
  }

  private renderHomepageNode(): HTMLLIElement {
    return (
      <li>
        <a
          class={{
            "homepage-text": this.homepageVariant === BreadcrumbHomepageVariant.TEXT,
          }}
          href={this.homepageNode.path}
          onClick={(e) => this.handlePreventFollowUrl(e, this.homepageNode)}
          innerHTML={
            this.homepageVariant === BreadcrumbHomepageVariant.ICON
              ? `<z-icon name="home" />`
              : this.homepageNode.text || "Home"
          }
        />
        {this.pathsList.length > 0 && (
          <z-icon
            class="separator"
            name="chevron-right"
          />
        )}
      </li>
    );
  }

  private togglePopover(): void {
    if (!this.collapsedElementsRef.open) {
      this.collapsedElementsRef.open = true;
    }
  }

  private handlePreventFollowUrl(e: MouseEvent, item): void {
    if (this.preventFollowUrl) {
      e.preventDefault();
      this.clickOnNode.emit(item.path);
    }
  }

  private handleOverflowMenuAccessibility(e: KeyboardEvent): void {
    const anchorElementsLenght = this.anchorElements.length;
    if (e.key === KeyboardCode.TAB) {
      e.preventDefault();

      return;
    }
    e.stopPropagation();
    const arrows = [KeyboardCode.ARROW_DOWN, KeyboardCode.ARROW_UP];
    if (arrows.includes(e.key as KeyboardCode)) {
      e.preventDefault();

      if (e.key === KeyboardCode.ARROW_DOWN) {
        this.currentIndex = anchorElementsLenght === this.currentIndex + 1 ? 0 : this.currentIndex + 1;
      }
      if (e.key === KeyboardCode.ARROW_UP) {
        this.currentIndex = this.currentIndex <= 0 ? anchorElementsLenght - 1 : this.currentIndex - 1;
      }

      this.anchorElements[this.currentIndex].focus();
    }

    if (e.key === KeyboardCode.ESC) {
      this.triggerButton.focus();
    }
  }

  private renderOverflowMenu(): HTMLLIElement {
    return (
      <li>
        <z-popover
          class="hidden-paths-popover"
          ref={(val) => (this.collapsedElementsRef = val as HTMLZPopoverElement)}
          bindTo={this.triggerButton}
          position={PopoverPosition.BOTTOM_RIGHT}
          closable
          showArrow
        >
          <div class="popover-content">
            <z-list>
              <z-list-group size={ListSize.SMALL}>
                {this.collapsedElements.map((item, index, array) => {
                  return (
                    <div>
                      <z-list-element clickable>
                        <a
                          class="text-ellipsis"
                          href={item.path}
                          onClick={(e) => this.handlePreventFollowUrl(e, item)}
                          onKeyDown={(e) => this.handleOverflowMenuAccessibility(e)}
                          innerHTML={item.text}
                        />
                      </z-list-element>
                      {index < array.length - 1 && <z-divider color="color-surface03"></z-divider>}
                    </div>
                  );
                })}
              </z-list-group>
            </z-list>
          </div>
        </z-popover>
        <button
          class="dots"
          ref={(el) => (this.triggerButton = el)}
          aria-label="Mostra più breadcrumb"
          aria-haspopup="true"
          onClick={() => {
            this.togglePopover();
          }}
          onKeyDown={(e) => {
            handleKeyboardSubmit(e, this.togglePopover.bind(this));
            setTimeout(() => {
              this.anchorElements[0].focus();
            }, 100);
          }}
          innerHTML="&mldr;"
        ></button>
        {this.pathsList.length > 0 && (
          <z-icon
            class="separator"
            name="chevron-right"
          />
        )}
      </li>
    );
  }

  private renderMobileItems(): HTMLLIElement {
    // show only the second to last element
    const secondToLastPath = this.pathsList[this.pathsList.length - 1];

    if (!secondToLastPath) {
      return;
    }

    return (
      <li>
        <a
          aria-current={secondToLastPath.path ? undefined : "page"}
          href={secondToLastPath.path}
          onClick={(e) => this.handlePreventFollowUrl(e, secondToLastPath)}
        >
          <z-icon name="chevron-left" />
          <span
            class={{
              "missing-path": !secondToLastPath.path,
              "text-ellipsis": true,
            }}
          >
            {secondToLastPath.text}
          </span>
        </a>
      </li>
    );
  }

  private renderItems(): HTMLElement[] {
    let trigger;

    return [
      this.renderHomepageNode(),
      this.collapsedElements.length > 0 && this.renderOverflowMenu(),
      ...this.pathsList.map((item, index) => (
        <li>
          {item.hasTooltip && (
            <z-popover
              class="full-path-tooltip"
              bindTo={trigger}
              open={this.popoverEllipsisOpen}
              position={PopoverPosition.BOTTOM_RIGHT}
              closable={false}
              showArrow
            >
              <span class="tooltip-content">{this.currentEllipsisText}</span>
            </z-popover>
          )}
          <a
            class={{"missing-path": !item.path}}
            ref={(val) => (trigger = val)}
            aria-current={item.path ? undefined : "page"}
            href={item.path}
            onClick={(e) => this.handlePreventFollowUrl(e, item)}
            onMouseOver={() => {
              if (item.hasTooltip) {
                this.popoverEllipsisOpen = true;
              }
            }}
            onMouseLeave={() => {
              if (item.hasTooltip) {
                this.popoverEllipsisOpen = false;
              }
            }}
            innerHTML={item.text}
          />
          {index !== this.pathsList.length - 1 && (
            <z-icon
              class="separator"
              name="chevron-right"
            />
          )}
        </li>
      )),
    ];
  }

  render(): HTMLZBreadcrumbElement {
    return (
      <Host style={{"--line-clamp-popover": `${this.overflowMenuItemRows}`}}>
        <nav
          ref={(val) => (this.wrapElement = val)}
          aria-label="Breadcrumb"
          class={{
            semibold: this.pathStyle === BreadcrumbPathStyle.SEMIBOLD,
            underlined: this.pathStyle === BreadcrumbPathStyle.UNDERLINED,
          }}
        >
          <ol>{this.viewPortWidth === Device.MOBILE ? this.renderMobileItems() : this.renderItems()}</ol>
        </nav>
      </Host>
    );
  }
}
