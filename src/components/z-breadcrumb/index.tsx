import {Component, Prop, h, State, Host, Listen, Element} from "@stencil/core";
import {BreadcrumbPath, BreadcrumbPathType, ListDividerType, ListSize, PopoverPosition} from "../../beans";
import {mobileBreakpoint} from "../../constants/breakpoints";

/**
 * ZBreadcrumb component.
 * @slot breadcrumbContent - used to pass elements instead of paths prop
 */
@Component({
  tag: "z-breadcrumb",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZBreadcrumb {
  @Element() hostElement: HTMLZBreadcrumbElement;

  /** [optional] Path elements */
  @Prop()
  paths?: BreadcrumbPath[] | string;

  /** [optional] Sets the path style */
  @Prop({reflect: true})
  type?: BreadcrumbPathType = BreadcrumbPathType.UNDERLINED;

  /** [optional] Sets max number of element to show */
  @Prop()
  maxNodesToShow = 5;

  /** Sets the url to link the homepage */
  @Prop()
  homepageUrl: string;

  /** Handle mobile */
  @State()
  isMobile: boolean;

  @State()
  popoverOpen = false;

  @Listen("resize", {target: "window"})
  handleResize(): void {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }

  private pathsList: BreadcrumbPath[];

  private collapsedElements: BreadcrumbPath[];

  private collapsedElementsRef: HTMLZTooltipElement;

  private triggerButton: HTMLLIElement;

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
    if (!this.pathsList) {
      return <slot name="breadcrumb-content" />;
    }

    const filteredPath = this.pathsList.filter((item) => !!item.path);
    const lastPath = filteredPath[filteredPath.length - 1];

    return (
      <nav>
        <ol>
          <li>
            <z-icon
              class="hidden-elements-arrow"
              name="chevron-right"
              fill="color-disabled03"
            />
            <a href={lastPath.path}>{lastPath.name}</a>
          </li>
        </ol>
      </nav>
    );
  }

  private renderBreadcrumb(): HTMLElement {
    if (this.pathsList.length > this.maxNodesToShow) {
      this.collapsedElements = this.pathsList.splice(0, this.maxNodesToShow - 1);
    }

    return (
      <nav>
        <ol>
          <li>
            <a href={this.homepageUrl}>
              <z-icon
                name="home"
                fill="color-link-primary"
                height={16}
                width={16}
              />
            </a>
          </li>
          {this.collapsedElements ? this.renderCollapsedElements() : ""}
          {this.pathsList.map((item) => (
            <li>
              <z-icon
                name="chevron-right"
                fill="color-disabled03"
              />
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
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
      <div>
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
              <z-list-group dividerType={ListDividerType.ELEMENT}>
                {this.collapsedElements.map((item) => (
                  <z-list-element size={ListSize.SMALL}>
                    <a href={item.path}>{item.name}</a>
                  </z-list-element>
                ))}
              </z-list-group>
            </z-list>
          </div>
        </z-tooltip>
        <li
          class="popover-container"
          ref={(el) => (this.triggerButton = el as HTMLLIElement)}
        >
          <div>
            <z-icon
              class="hidden-elements-arrow"
              name="chevron-right"
              fill="color-disabled03"
            />
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
      </div>
    );
  }

  render(): HTMLZBreadcrumbElement {
    return (
      <Host
        class={{
          semibold: this.type === BreadcrumbPathType.SEMIBOLD,
        }}
      >
        {this.isMobile ? this.renderMobileBreadcrumb() : this.renderBreadcrumb()}
      </Host>
    );
  }
}
