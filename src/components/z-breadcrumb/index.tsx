import {Component, Prop, h, State, Host, Listen, Element, Event} from "@stencil/core";
import {
  BreadcrumbHomepageVariant,
  BreadcrumbPath,
  BreadcrumbPathStyle,
  ListDividerType,
  ListSize,
  PopoverPosition,
} from "../../beans";
import {mobileBreakpoint} from "../../constants/breakpoints";
import {EventEmitter} from "puppeteer";

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

  @State()
  popoverOpen = false;

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

  private triggerButton: HTMLDivElement;

  componentWillLoad(): void {
    this.pathsList = this.getPathsItemsList();
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }

  componentDidLoad(): void {
    this.collapsedElementsRef.bindTo = this.triggerButton;
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
          onClick={(e) => {
            if (this.preventFollowUrl) {
              e.preventDefault();
              this.clickOnNode.emit(item.path);
            }
          }}
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
          {this.collapsedElements ? this.renderCollapsedElements() : ""}
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

  private renderCollapsedElements(): HTMLLIElement {
    return (
      <li
        aria-label="Clicca per mostrare nodi nascosti"
        tabIndex={0}
      >
        <z-tooltip
          ref={(val) => (this.collapsedElementsRef = val as HTMLZTooltipElement)}
          bind-to={this.triggerButton}
          open={this.popoverOpen}
          position={PopoverPosition.BOTTOM_RIGHT}
          style={{
            "--z-tooltip-theme--surface": "var(--color-surface02)",
          }}
        >
          <div class="popover-content">
            <z-list>
              <z-list-group
                dividerType={ListDividerType.ELEMENT}
                size={ListSize.SMALL}
              >
                {this.collapsedElements.map((item) => (
                  <z-list-element>
                    <a href={item.path}>{item.name}</a>
                  </z-list-element>
                ))}
              </z-list-group>
            </z-list>
          </div>
        </z-tooltip>
        <div
          class="popover-container"
          ref={(el) => (this.triggerButton = el as HTMLDivElement)}
        >
          <span
            id="dots"
            onClick={() => {
              this.togglePopover();
            }}
          >
            ...
          </span>
        </div>
      </li>
    );
  }

  render(): HTMLZBreadcrumbElement {
    return <Host>{this.isMobile ? this.renderMobileBreadcrumb() : this.renderBreadcrumb()}</Host>;
  }
}
