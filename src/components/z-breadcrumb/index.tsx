import {Component, Prop, h, State, Host, Listen, Element} from "@stencil/core";
import {BreadcrumbPath, BreadcrumbPathType} from "../../beans";
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

  private collapsedElementsRef: HTMLZPopoverElement;

  componentWillLoad(): void {
    this.pathsList = this.getPathsItemsList();
    this.isMobile = window.innerWidth <= mobileBreakpoint;
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
            <z-link
              href={lastPath.path}
              textcolor="primary"
              iconposition="left"
              htmlid="1"
              htmltabindex={1}
              underline={this.type === BreadcrumbPathType.UNDERLINED}
              icon="chevron-left"
            >
              <span>{lastPath.name}</span>
            </z-link>
          </li>
        </ol>
      </nav>
    );
  }

  private renderBreadcrumb(): HTMLElement {
    if (this.pathsList.length > this.maxNodesToShow) {
      this.pathsList = this.pathsList.slice(-2);
      this.collapsedElements = this.pathsList.slice(0, this.maxNodesToShow - 2);
    }

    return (
      <nav>
        <ol>
          <li>
            <z-link
              href={this.homepageUrl}
              textcolor="primary"
              iconposition="left"
              htmlid="1"
              htmltabindex={1}
              icon="home"
            />
          </li>
          {this.collapsedElements ? this.renderCollapsedElements() : ""}
          {this.pathsList.map((item) => (
            <li>
              <z-link
                href={item.path}
                textcolor="primary"
                iconposition="left"
                htmlid="1"
                htmltabindex={1}
                underline={this.type === BreadcrumbPathType.UNDERLINED}
                icon="chevron-right"
              >
                <span>{item.name}</span>
              </z-link>
            </li>
          ))}
        </ol>
      </nav>
    );
  }

  private renderCollapsedElements(): HTMLLIElement {
    return (
      <li class="popover-container">
        <z-popover
          ref={(val) => (this.collapsedElementsRef = val)}
          bind-to="#dots"
          open={this.popoverOpen}
        >
          <ul
            class="container"
            style={{position: "relative"}}
          >
            {this.collapsedElements.map((item) => (
              <li>
                <z-link
                  href={item.path}
                  textcolor="primary"
                  iconposition="left"
                  htmlid="1"
                  htmltabindex={1}
                  underline={this.type === BreadcrumbPathType.UNDERLINED}
                >
                  <span>{item.name}</span>
                </z-link>
              </li>
            ))}
          </ul>
        </z-popover>
        <span
          id="dots"
          onClick={() => {
            if (this.collapsedElementsRef.open) {
              this.popoverOpen = false;
            } else {
              this.popoverOpen = true;
            }
          }}
        >
          ...
        </span>
      </li>
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
