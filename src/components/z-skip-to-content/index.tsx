import {
  Component,
  h,
  Host,
  Element,
  Listen,
  Prop,
  State,
} from "@stencil/core";
import { getElementTree } from "../../utils/utils";
import { ThemeVariant, keybordCodeEnum, linkItem } from "../../beans";

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
  @Prop({ reflect: true }) variant?: ThemeVariant;
  /** Array to fill link into skip-content */
  @Prop({ mutable: true }) links: string | linkItem[] = [];

  @State() visible: boolean = false;
  @State() visibleLink: string = "";

  @Element() hostElement: HTMLElement;

  @Listen("focusin", { target: "document" })
  handleFocusSkipToContent(e) {
    const tree = getElementTree(e.target);
    const menuParent = tree.find(
      (elem: any) => elem.nodeName.toLowerCase() === "z-skip-to-content"
    );

    if (menuParent !== this.hostElement) {
      this.visible = false;
    } else {
      this.visible = true;
    }

    this.handleSlottedElementFocus(e);
  }

  componentDidLoad() {
    this.showFirstChild();
  }

  componentWillRender() {
    if (this.links) {
      this.links =
        typeof this.links === "string" ? JSON.parse(this.links) : this.links;
    }
  }

  showFirstChild() {
    const children = this.hostElement.children;
    if (children.length) {
      this.visibleLink = children[0].id;
    }
  }

  @Listen("keyup")
  handleSlottedElementFocus(e) {
    if (e.code !== keybordCodeEnum.TAB) return;

    e.preventDefault();

    let elem = e.target;
    this.visibleLink = elem.id;
    elem.focus();
  }

  render() {
    return (
      <Host
        class={`${this.variant} ${this.visible && "skip-to-content-visible"} `}
        ref={(el) => el as HTMLElement}
        onFocus={(e: KeyboardEvent) => this.handleFocusSkipToContent(e)}
        onBlur={(e: KeyboardEvent) => this.handleFocusSkipToContent(e)}
        // tabindex="0"
      >
        {(this.links as linkItem[]).map((link, i) => {
          const id = `skip-to-content-${i}`;
          return (
            <z-link
              id={id}
              underline={true}
              class={`t-weight-sb ${
                id == this.visibleLink ? "link-visible" : "link-invisible"
              }`}
              href={link.href}
              textcolor={"black"}
              onClick={() => (this.visible = false)}
              // TODO: check enter
              // onKeyDown={() => this.handleClickLink()}
            >
              {link.label}
            </z-link>
          );
        })}
      </Host>
    );
  }
}
