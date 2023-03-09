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

  /** Handle mobile */
  @State()
  isMobile: boolean;

  @Listen("resize", {target: "window"})
  handleResize(): void {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }

  private pathsList: BreadcrumbPath[] | undefined = null;

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

    const lastPath = this.pathsList[this.pathsList.length - 1];

    return (
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
    );
  }

  render(): HTMLZBreadcrumbElement {
    return (
      <Host
        class={{
          semibold: this.type === BreadcrumbPathType.SEMIBOLD,
        }}
      >
        {this.isMobile && this.renderMobileBreadcrumb()}
      </Host>
    );
  }
}
