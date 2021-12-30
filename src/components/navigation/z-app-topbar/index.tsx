import { Component, Prop, h, State, Listen } from "@stencil/core";
import { Host } from "@stencil/core/internal";
import { DividerOrientation, MenuItem, ThemeVariant } from "../../../beans";
import { mobileBreakpoint } from "../../../constants/breakpoints";

@Component({
  tag: "z-app-topbar",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZAppTopbar {
  /** theme variant, default 'dark' */
  @Prop() theme?: ThemeVariant = ThemeVariant.dark;
  /** maximum width of topbar content */
  @Prop() contentmaxwidth?: number;
  /** Json stringified or array to fill topbar links */
  @Prop() topbarcontent?: string | MenuItem[];
  /** the link used by z-logo */
  @Prop() logolink?: string;
  /** add app-switcher */
  @Prop() showappswitcher: boolean;

  @State() ismobile: boolean;
  
  private topbarlinks: MenuItem[] = [];

  @Listen("resize", { target: "window" })
  handleResize(): void {
    this.ismobile = window.innerWidth <= mobileBreakpoint;
  }

  @Listen("orientationchange", { target: "window" })
  handleOrientationChange(): void {
    this.ismobile = screen.width <= mobileBreakpoint;
  }

  componentWillLoad() {
    this.ismobile = window.screen.width <= mobileBreakpoint || window.innerWidth <= mobileBreakpoint;
  }

  componentWillRender() {
    if (this.topbarcontent) {
      this.topbarlinks = typeof this.topbarcontent === "string" ? JSON.parse(this.topbarcontent) : this.topbarcontent;
    }
  }

  renderTopbarLinks() {
    return this.topbarlinks.map((link) =>
      <z-link
        htmlid={link.id}
        textcolor={this.theme === ThemeVariant.light ? "black" :"white" }
        href={link.link}
        target={link.target}
        icon={this.ismobile ? link.icon : undefined}
      >
        {!this.ismobile && link.label}
      </z-link>
    )
  }

  render() {
    return (
      <Host class={`${this.theme} ${this.contentmaxwidth ? "limited-width" : ""}`}>
        <div id="content-container" class={`${this.contentmaxwidth ? "limited-width" : ""}`} style={this.contentmaxwidth ? { "--mw": `${this.contentmaxwidth}px` } : {}}>
          <div id="left-panel">
            <z-logo width={this.ismobile ? 31 : 128} height={this.ismobile ? 40 : 32} imagealt="zanichelli-logo" link={this.logolink} targetblank />
            {this.ismobile && this.renderTopbarLinks()}
          </div>
          <div id="right-panel">
            {!this.ismobile && this.renderTopbarLinks()}
            {this.showappswitcher && <z-app-switcher theme={this.theme} />}
            <div id="divider-container">
              <z-divider orientation={DividerOrientation.vertical} color={this.theme === ThemeVariant.light ? "gray800" : "color-white"} />
            </div>
            <slot name="login"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
