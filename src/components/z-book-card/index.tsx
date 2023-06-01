import {Component, Listen, Prop, State, h} from "@stencil/core";
import {BookCardVariant} from "../../beans";
import {mobileBreakpoint} from "../../constants/breakpoints";

/**
 * Component short description.
 */
@Component({
  tag: "z-book-card",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZBookCard {
  /**
   * Property description.
   */
  @Prop()
  variant: BookCardVariant;
  @Prop()
  cover: string;

  @State()
  isMobile: boolean = false;

  @State()
  showResources: boolean = false;

  @Listen("resize", {target: "window"})
  @Listen("orientationchange", {target: "window"})
  handleResize(): void {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }

  componentWillLoad(): void {
    this.handleResize();
  }

  renderCard(): JSX.Element {
    switch (this.variant) {
      case BookCardVariant.EXPANDED:
        return this.isMobile ? this.renderMobileExpandedCard() : this.renderExpandedCard();
      case BookCardVariant.COMPACT:
        return <div />;
      case BookCardVariant.SEARCH:
        return <div />;
    }
  }

  renderExpandedCard(): JSX.Element {
    return (
      <div class="wrapper">
        {this.renderCover()}
        <div class="content">
          <div class="top">top</div>
          <div class="bottom">{this.renderResources()}</div>
        </div>
      </div>
    );
  }

  renderMobileExpandedCard(): JSX.Element {
    return (
      <div class="wrapper">
        <div class="header">header</div>
        {this.renderCover()}
        <div class="content">content</div>
        <div class={`footer ${this.showResources ? "open" : "closed"}`}>
          {this.showResources && this.renderResources()}
          {/* TODO: handle accessibility on click */}
          <button onClick={() => (this.showResources = !this.showResources)}>resources</button>
        </div>
      </div>
    );
  }

  renderCover(): JSX.Element {
    // TODO: check ribbon prop + compact
    return (
      <div class="cover">
        <div class="ribbon">ribbooooon</div>
        <img src={this.cover} />
      </div>
    );
  }

  renderResources(): JSX.Element {
    return <div class="resources">resources</div>;
  }

  render(): HTMLZBookCardElement {
    return <article class={`${this.variant}`}>{this.renderCard()}</article>;
  }
}
