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
  shadow: false,
  scoped: true,
})
export class ZBreadcrumb {
  /*Accessibility references */
  /*Overflow-menu: https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/ */
  /*Breadcrumb: https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/ */
  /*Focus on multiline link: https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html */

  @Element() hostElement: HTMLZBreadcrumbElement;

  /** [optional] Path elements */
  @Prop()
  paths?: BreadcrumbPath[] | string;

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
  overflowMenuItemRows?: number;

  /** Handle mobile */
  @State()
  isMobile: boolean;

  /*   @State()
  tooltipOpen = false; */

  /** Emitted when preventFollowUrl=true to handle page transition*/
  @Event()
  clickOnNode: EventEmitter;

  @Listen("resize", {target: "window"})
  handleResize(): void {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }

  private pathsList: BreadcrumbPath[];

  private collapsedElements: BreadcrumbPath[];

  private collapsedElementsRef: HTMLZTooltipElement;

  private triggerButton: HTMLButtonElement;

  private currentIndex = 0;

  private anchorElements;

  componentWillLoad(): void {
    this.pathsList = this.getPathsItemsList();
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }

  componentDidLoad(): void {
    if (this.collapsedElementsRef) {
      this.collapsedElementsRef.bindTo = this.triggerButton;
      this.hostElement
        .querySelector("nav > ol > li:nth-child(2) > z-tooltip")
        .shadowRoot.querySelector("z-popover").style.padding = "0";
      this.anchorElements = this.hostElement.querySelectorAll("z-list-group a");
    }
  }

  private getPathsItemsList(): BreadcrumbPath[] | undefined {
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
          class="homepage"
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
    const totalLenght = this.pathsList.length;
    const homepageNode = this.pathsList.shift();

    if (totalLenght > this.maxNodesToShow) {
      this.collapsedElements = this.pathsList.splice(0, this.pathsList.length - 2);
    }

    return (
      <nav aria-label="Breadcrumb">
        <ol>
          {this.renderHomepageNode(homepageNode)}
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
    e.stopPropagation();
    const arrows = [KeyboardCode.ARROW_DOWN, KeyboardCode.ARROW_UP];
    if (arrows.includes(e.key as KeyboardCode)) {
      e.preventDefault();

      if (e.key === KeyboardCode.ARROW_DOWN) {
        this.currentIndex = [...this.anchorElements].length === this.currentIndex + 1 ? 0 : this.currentIndex + 1;
      }
      if (e.key === KeyboardCode.ARROW_UP) {
        this.currentIndex = this.currentIndex <= 0 ? [...this.anchorElements].length - 1 : this.currentIndex - 1;
      }

      [...this.anchorElements][this.currentIndex].focus();
    }

    if (e.key === KeyboardCode.ESC) {
      this.triggerButton.focus();
    }
  }

  private renderOverflowMenu(): HTMLLIElement {
    return (
      <li>
        <z-tooltip
          ref={(val) => (this.collapsedElementsRef = val as HTMLZTooltipElement)}
          bind-to={this.triggerButton}
          position={PopoverPosition.BOTTOM_RIGHT}
        >
          <div class="tooltip-content">
            <z-list>
              <z-list-group
                dividerType={ListDividerType.ELEMENT}
                size={ListSize.SMALL}
              >
                {this.collapsedElements.map((item) => (
                  <z-list-element clickable>
                    <a
                      class={{"text-ellipsis": !!this.overflowMenuItemRows}}
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
        </z-tooltip>
        <button
          aria-label="Mostra più breadcrumb"
          aria-haspopup="true"
          /* aria-expanded={this.tooltipOpen ? "true" : undefined} */
          ref={(el) => (this.triggerButton = el as HTMLButtonElement)}
          class="dots"
          onClick={() => {
            this.togglePopover();
          }}
          onKeyDown={(e) => {
            handleKeyboardSubmit(e, this.togglePopover.bind(this));
            setTimeout(() => [...this.anchorElements][0].focus(), 100);
          }}
        >
          ...
        </button>
      </li>
    );
  }

  render(): HTMLZBreadcrumbElement {
    return (
      <Host style={{"--line-clamp": `${this.overflowMenuItemRows}`}}>
        {this.isMobile ? this.renderMobileBreadcrumb() : this.renderBreadcrumb()}
      </Host>
    );
  }
}
