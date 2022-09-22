import {Component, Prop, h, State, Listen, Host} from "@stencil/core";
import {HostElement} from "@stencil/core/internal";
import {DividerOrientation, MenuItem, ThemeVariant} from "../../../beans";
import {mobileBreakpoint} from "../../../constants/breakpoints";

@Component({
  tag: "z-app-topbar",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZAppTopbar {
  /** theme variant, default 'dark' */
  @Prop()
  theme?: ThemeVariant = ThemeVariant.DARK;

  /** maximum width of topbar content */
  @Prop()
  contentMaxWidth?: number;

  /** JSON string or MenuItem array to define topbar links */
  @Prop()
  topbarContent?: string | MenuItem[];

  /** link URL used by z-logo */
  @Prop()
  logoLink?: string;

  /** add app-switcher */
  @Prop()
  showAppSwitcher: boolean;

  @State()
  isMobile: boolean;

  private topbarLinks: MenuItem[] = [];

  @Listen("resize", {target: "window"})
  handleResize(): void {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }

  componentWillLoad(): void {
    this.isMobile = window.screen.width <= mobileBreakpoint || window.innerWidth <= mobileBreakpoint;
  }

  componentWillRender(): void {
    if (this.topbarContent) {
      this.topbarLinks = typeof this.topbarContent === "string" ? JSON.parse(this.topbarContent) : this.topbarContent;
    }
  }

  private renderTopbarLinks(): HTMLZLinkElement[] {
    return this.topbarLinks.map((link) => (
      <z-link
        htmlid={link.id}
        textcolor={this.theme === ThemeVariant.LIGHT ? "black" : "white"}
        href={link.link}
        target={link.target}
        icon={this.isMobile ? link.icon : undefined}
      >
        {!this.isMobile && link.label}
      </z-link>
    ));
  }

  render(): HostElement {
    return (
      <Host
        class={{
          [this.theme]: true,
          "limited-width": !!this.contentMaxWidth,
        }}
      >
        <div
          id="content-container"
          style={this.contentMaxWidth ? {"--mw": `${this.contentMaxWidth}px`} : {}}
        >
          <div
            id="left-panel"
            class="content-panel"
          >
            <z-logo
              mobileLogo={this.isMobile}
              width={this.isMobile ? 32 : 128}
              height={this.isMobile ? 40 : 32}
              imageAlt="zanichelli-logo"
              link={this.logoLink}
              targetBlank
            />
            {this.isMobile && this.renderTopbarLinks()}
          </div>
          <div
            id="right-panel"
            class="content-panel"
          >
            {!this.isMobile && this.renderTopbarLinks()}
            {this.showAppSwitcher && <z-app-switcher theme={this.theme} />}
            <div id="divider-container">
              <z-divider
                orientation={DividerOrientation.VERTICAL}
                color={this.theme === ThemeVariant.LIGHT ? "gray800" : "color-white"}
              />
            </div>
            <slot name="login"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
