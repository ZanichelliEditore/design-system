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
  @Element() hostElement: HTMLZBreadcrumbElement;

  /** [optional] Path elements */
  @Prop()
  paths?: BreadcrumbPath[] | string;

  /** [optional] Sets the path style */
  @Prop({reflect: true})
  pathStyle?: BreadcrumbPathStyle = BreadcrumbPathStyle.UNDERLINED;

  /** */
  @Prop()
  homepageVariant?: BreadcrumbHomepageVariant = BreadcrumbHomepageVariant.ICON;

  /** [optional] Sets max number of element to show */
  @Prop()
  maxNodesToShow = 5;

  /** Sets the url to link the homepage */
  @Prop()
  homepageUrl: string;

  /** */
  @Prop()
  preventFollowUrl = false;

  /** Handle mobile */
  @State()
  isMobile: boolean;

  /** */
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
    this.collapsedElementsRef.bindTo = this.triggerButton;
    this.anchorElements = this.hostElement.querySelectorAll("z-list-group a");
  }

  private getPathsItemsList(): BreadcrumbPath[] | undefined {
    return typeof this.paths === "string" ? JSON.parse(this.paths) : this.paths;
  }

  private renderMobileBreadcrumb(): HTMLDivElement {
    const filteredPath = this.pathsList.filter((item) => !!item.path);
    const lastPath = filteredPath[filteredPath.length - 1];

    return (
      <nav aria-label="Breadcrumb">
        <ol>{this.renderNode(lastPath)}</ol>
      </nav>
    );
  }

  private renderHomepageNode(): HTMLLIElement {
    return (
      <li>
        <a
          id="homepage"
          href={this.homepageUrl}
          onClick={(e) => {
            if (this.preventFollowUrl) {
              e.preventDefault();
              this.clickOnNode.emit(this.homepageUrl);
            }
          }}
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
          href={item.path}
          onClick={(e) => this.handlePreventFollowUrl(e, item)}
        >
          {item.name}
        </a>
      </li>
    );
  }

  private renderBreadcrumb(): HTMLElement {
    if (this.pathsList.length > this.maxNodesToShow) {
      this.collapsedElements = this.pathsList.splice(0, this.maxNodesToShow - 1);
    }

    return (
      <nav aria-label="Breadcrumb">
        <ol>
          {this.renderHomepageNode()}
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

  private handleOverflowAccessibility(e: KeyboardEvent): void {
    e.stopPropagation();
    const arrows = [KeyboardCode.ARROW_DOWN, KeyboardCode.ARROW_UP];
    if (arrows.includes(e.key as KeyboardCode)) {
      e.preventDefault();

      if (e.key === KeyboardCode.ARROW_DOWN) {
        this.currentIndex = [...this.anchorElements].length === this.currentIndex + 1 ? 0 : this.currentIndex + 1;
        console.log("down", this.currentIndex);
      }
      if (e.key === KeyboardCode.ARROW_UP) {
        this.currentIndex = this.currentIndex <= 0 ? [...this.anchorElements].length - 1 : this.currentIndex - 1;
        console.log("up", this.currentIndex);
      }

      [...this.anchorElements][this.currentIndex].focus();
    }
  }

  private renderOverflowMenu(): HTMLLIElement {
    return (
      <li
        aria-label="Mostra più breadcrumb"
        onKeyDown={(e) => {
          handleKeyboardSubmit(e, this.togglePopover.bind(this));
          setTimeout(() => [...this.anchorElements][0].focus(), 100);
        }}
      >
        <z-tooltip
          ref={(val) => (this.collapsedElementsRef = val as HTMLZTooltipElement)}
          bind-to={this.triggerButton}
          position={PopoverPosition.BOTTOM_RIGHT}
        >
          <div class="popover-content">
            <z-list>
              <z-list-group
                dividerType={ListDividerType.ELEMENT}
                size={ListSize.SMALL}
              >
                {this.collapsedElements.map((item) => (
                  <z-list-element>
                    <a
                      href={item.path}
                      onClick={(e) => this.handlePreventFollowUrl(e, item)}
                      onKeyDown={(e) => this.handleOverflowAccessibility(e)}
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
          ref={(el) => (this.triggerButton = el as HTMLButtonElement)}
          id="dots"
          onClick={() => {
            this.togglePopover();
          }}
        >
          ...
        </button>
      </li>
    );
  }

  render(): HTMLZBreadcrumbElement {
    return <Host>{this.isMobile ? this.renderMobileBreadcrumb() : this.renderBreadcrumb()}</Host>;
  }
}
