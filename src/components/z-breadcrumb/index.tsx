import {Component, Prop, h, State, Host, Listen, Element, Event} from "@stencil/core";
import {
  BreadcrumbHomepageVariant,
  BreadcrumbPath,
  BreadcrumbPathStyle,
  KeyboardCode,
  ListDividerType,
  ListSize,
  PopoverPosition,
} from "../../beans";
import {mobileBreakpoint} from "../../constants/breakpoints";
import {EventEmitter} from "puppeteer";
import {handleKeyboardSubmit} from "../../utils/utils";

@Component({
  tag: "z-breadcrumb",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZBreadcrumb {
  /*Accessibility references */
  /*Overflow-menu: https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/ */
  /*Breadcrumb: https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/ */
  /*Focus on multiline link: https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html */

  @Element() hostElement: HTMLZBreadcrumbElement;

  /** Path elements */
  @Prop()
  paths: BreadcrumbPath[] | string;

  /** [optional] Sets the path style */
  @Prop({reflect: true})
  pathStyle?: BreadcrumbPathStyle = BreadcrumbPathStyle.UNDERLINED;

  /** Variant of first node*/
  @Prop()
  homepageVariant?: BreadcrumbHomepageVariant = BreadcrumbHomepageVariant.ICON;

  /** [optional] Sets max number of element to show */
  @Prop()
  maxNodesToShow = 5;

  /**  Controls the behaviour on <a> tag click/enter*/
  @Prop()
  preventFollowUrl = false;

  /** */
  @Prop()
  overflowMenuItemRows? = 0;

  /** Handle mobile */
  @State()
  isMobile: boolean;

  /*   @State()
  visibleItems: number; */

  /** Emitted when preventFollowUrl=true to handle page transition*/
  @Event()
  clickOnNode: EventEmitter;

  @Listen("resize", {target: "window"})
  handleResize(): void {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }

  @State()
  pathsList: BreadcrumbPath[];

  private collapsedElements: BreadcrumbPath[];

  private collapsedElementsRef: HTMLZPopoverElement;

  private triggerButton: HTMLButtonElement;

  private wrapElement: HTMLElement;

  private currentIndex = 0;

  private homepageNode: BreadcrumbPath;

  private totalLenght: number;

  private anchorElements;

  private containerEllipsis = false;

  componentWillLoad(): void {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
    this.pathsList = this.getPathsItemsList();
    this.totalLenght = this.pathsList.length;
    this.homepageNode = this.pathsList.shift();
    this.collapsedElements = [];
  }

  componentWillRender(): void {
    /*     if (this.wrapElement) {
      if (this.wrapElement.scrollWidth > this.wrapElement.clientWidth) {
        if (this.visibleItems === 1) {
          this.containerEllipsis = true;
        } else {
          const removedEl = this.pathsList.splice(0, 1);
          this.collapsedElements.push(removedEl[0]);
          this.visibleItems--;
        }
      }
    } */

    if (this.totalLenght > this.maxNodesToShow) {
      this.collapsedElements = this.pathsList.splice(0, this.pathsList.length - 2);
    }
  }

  componentDidRender(): void {
    if (this.collapsedElementsRef) {
      this.collapsedElementsRef.bindTo = this.triggerButton;
      this.anchorElements = Array.from(this.hostElement.shadowRoot.querySelectorAll("z-list-group a"));
    }

    if (this.wrapElement) {
      if (this.wrapElement.scrollWidth > this.wrapElement.clientWidth) {
        if (this.pathsList[0].name.length > 20) {
          const truncatedString = this.truncateWithEllipsis(this.pathsList[0].name, 20, null);
          this.pathsList[0].name = truncatedString;
          this.pathsList = [...this.pathsList];

          return;
        }

        const removedEl = this.pathsList.splice(0, 1);
        this.collapsedElements.push(removedEl[0]);
      }
    }
  }

  //if nchar > 20
  //truncatechar
  //else rimuovo

  private truncateWithEllipsis(str, length, ending): string {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = "...";
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    }

    return str;
  }

  private getPathsItemsList(): BreadcrumbPath[] | undefined {
    if (!this.paths) {
      return Array.from(this.hostElement.children).map((item: HTMLAnchorElement) => {
        return {
          name: item.textContent,
          path: item.href,
        };
      });
    }

    return typeof this.paths === "string" ? JSON.parse(this.paths) : this.paths;
  }

  private renderMobileBreadcrumb(): HTMLDivElement {
    const filteredPath = this.pathsList.filter((item) => !!item.path);
    const lastPath = filteredPath[filteredPath.length - 1];

    return (
      <nav aria-label="Breadcrumb">
        <ol class="mobile-breadcrumb">{this.renderNode(lastPath)}</ol>
      </nav>
    );
  }

  private renderHomepageNode(item): HTMLLIElement {
    return (
      <li>
        <a
          class={{
            "homepage-icon": this.homepageVariant === BreadcrumbHomepageVariant.ICON,
            "homepage-text": this.homepageVariant === BreadcrumbHomepageVariant.TEXT,
          }}
          href={item.path}
          onClick={(e) => this.handlePreventFollowUrl(e, item)}
        >
          {this.homepageVariant === BreadcrumbHomepageVariant.ICON ? (
            <z-icon
              name="home"
              fill="color-link-primary"
              height={16}
              width={16}
            />
          ) : (
            "Home"
          )}
        </a>
      </li>
    );
  }

  private renderNode(item): HTMLLIElement {
    return (
      <li>
        <a
          class={{"visible-node": true, "last-text-ellipsis": this.containerEllipsis}}
          aria-current={item.path ? undefined : "page"}
          href={item.path}
          onClick={(e) => this.handlePreventFollowUrl(e, item)}
        >
          {item.name}
        </a>
      </li>
    );
  }

  private renderBreadcrumb(): HTMLElement {
    return (
      <nav
        ref={(val) => (this.wrapElement = val)}
        aria-label="Breadcrumb"
        class={{
          underlined: this.pathStyle === BreadcrumbPathStyle.UNDERLINED,
          semibold: this.pathStyle === BreadcrumbPathStyle.SEMIBOLD,
        }}
      >
        <ol>
          {this.renderHomepageNode(this.homepageNode)}
          {this.collapsedElements ? this.renderOverflowMenu() : ""}
          {this.pathsList.map((item) => this.renderNode(item))}
        </ol>
      </nav>
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
    if (this.collapsedElements.length) {
      return (
        <li>
          <z-popover
            ref={(val) => (this.collapsedElementsRef = val as HTMLZPopoverElement)}
            bind-to={this.triggerButton}
            position={PopoverPosition.BOTTOM_RIGHT}
            showArrow
          >
            <div class="popover-content">
              <z-list>
                <z-list-group
                  dividerType={ListDividerType.ELEMENT}
                  size={ListSize.SMALL}
                >
                  {this.collapsedElements.map((item) => (
                    <z-list-element clickable>
                      <a
                        class="text-ellipsis"
                        href={item.path}
                        onClick={(e) => this.handlePreventFollowUrl(e, item)}
                        onKeyDown={(e) => this.handleOverflowMenuAccessibility(e)}
                      >
                        {item.name}
                      </a>
                    </z-list-element>
                  ))}
                </z-list-group>
              </z-list>
            </div>
          </z-popover>
          <button
            aria-label="Mostra più breadcrumb"
            aria-haspopup="true"
            ref={(el) => (this.triggerButton = el as HTMLButtonElement)}
            class="dots"
            onClick={() => {
              this.togglePopover();
            }}
            onKeyDown={(e) => {
              handleKeyboardSubmit(e, this.togglePopover.bind(this));
              setTimeout(() => {
                this.anchorElements[0].focus();
              }, 100);
            }}
          >
            ...
          </button>
        </li>
      );
    }
  }

  render(): HTMLZBreadcrumbElement {
    return (
      <Host style={{"--line-clamp": `${this.overflowMenuItemRows}`}}>
        {this.isMobile ? this.renderMobileBreadcrumb() : this.renderBreadcrumb()}
      </Host>
    );
  }
}
