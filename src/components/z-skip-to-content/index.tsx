import {Component, h, Host, Element, Listen, Prop, State} from "@stencil/core";
import {getElementTree, handleKeyboardSubmit} from "../../utils/utils";
import {ThemeVariant, SkipToContentLink} from "../../beans";
import {HostElement} from "@stencil/core/internal";

/**
 * Component short description.
 */
@Component({
  tag: "z-skip-to-content",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZSkipToContent {
  /** Graphical variant: `dark`, `light`. */
  @Prop({reflect: true})
  variant?: ThemeVariant;
  /** Array to fill link into skip-content */
  @Prop({mutable: true})
  links: string | SkipToContentLink[] = [];

  @State()
  visible = false;
  @State()
  visibleLink = "";

  @Element() hostElement: HTMLZSkipToContentElement;

  @Listen("focusout", {target: "document"})
  handleFocusOutSkipToContent(e: FocusEvent): void {
    if (this.isInSkipToContent(e.target)) this.visible = false;
  }

  @Listen("focusin", {target: "document"})
  handleFocusSkipToContent(e: FocusEvent): void {
    if (this.isInSkipToContent(e.target)) this.visible = true;
  }

  componentDidLoad(): void {
    this.showFirstChild();
  }

  componentWillRender(): void {
    if (this.links) {
      this.links = typeof this.links === "string" ? JSON.parse(this.links) : this.links;
    }
  }

  private isInSkipToContent(elem): boolean {
    const tree = getElementTree(elem);
    const menuParent = tree.find((elem: Element) => elem.nodeName.toLowerCase() === "z-skip-to-content");

    return !!menuParent;
  }

  private showFirstChild(): void {
    const firstChild = this.hostElement.children?.[0];
    if (firstChild) this.visibleLink = firstChild.id;
  }

  private handleLinkClick(): void {
    this.visible = false;
  }

  render(): HostElement {
    return (
      <Host
        class={{
          [this.variant]: true,
          "skip-to-content-visible": this.visible,
        }}
      >
        {(this.links as SkipToContentLink[]).map((link, i) => {
          const id = `skip-to-content-${i}`;
          return (
            <z-link
              id={id}
              underline={true}
              aria-label={link.ariaLabel || link.label}
              class={`body-1-sb ${id == this.visibleLink ? "link-visible" : "link-invisible"}`}
              href={link.href}
              textcolor={this.variant === ThemeVariant.dark ? "white" : "black"}
              onFocus={() => (this.visibleLink = id)}
              onClick={() => this.handleLinkClick()}
              onKeyUp={(e) => handleKeyboardSubmit(e, this.handleLinkClick.bind(this))}
            >
              {link.label}
            </z-link>
          );
        })}
      </Host>
    );
  }
}
