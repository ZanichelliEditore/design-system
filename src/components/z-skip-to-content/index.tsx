import {Component, Element, Host, Listen, Prop, State, h} from "@stencil/core";
import {SkipToContentLink, ThemeVariant} from "../../beans";
import {getElementTree, handleKeyboardSubmit} from "../../utils/utils";

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
    if (this.isInSkipToContent(e.target)) {
      this.visible = false;
    }
  }

  @Listen("focusin", {target: "document"})
  handleFocusSkipToContent(e: FocusEvent): void {
    if (this.isInSkipToContent(e.target)) {
      this.visible = true;
    }
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
    if (firstChild) {
      this.visibleLink = firstChild.id;
    }
  }

  private handleLinkClick(event: MouseEvent): void {
    this.visible = false;

    // Get the target ID from the href
    const target = event.currentTarget as HTMLAnchorElement;
    const targetId = target.getAttribute('href')?.substring(1);

    if (targetId) {
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Temporarily set tabindex="-1" to make the element focusable
        const originalTabIndex = targetElement.getAttribute('tabindex');
        targetElement.setAttribute('tabindex', '-1');

        // Move focus to the target element
        targetElement.focus();

        // Remove tabindex after blur to preserve natural tab order
        const handleBlur = () => {
          if (originalTabIndex === null) {
            targetElement.removeAttribute('tabindex');
          } else {
            targetElement.setAttribute('tabindex', originalTabIndex);
          }
          targetElement.removeEventListener('blur', handleBlur);
        };

        targetElement.addEventListener('blur', handleBlur, { once: true });
      }
    }
  }

  render(): HTMLZSkipToContentElement {
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
            <div class="link-container">
              <a
                id={id}
                class={{
                  "body-1-sb": true,
                  "z-link": true,
                  "z-link-underline": true,
                  "z-link-inverse": this.variant === ThemeVariant.DARK,
                  "link-visible": id == this.visibleLink,
                  "link-invisible": id != this.visibleLink,
                }}
                aria-label={link.ariaLabel || link.label}
                href={link.href}
                onFocus={() => (this.visibleLink = id)}
                onClick={(e) => this.handleLinkClick(e)}
                onKeyUp={(e) => handleKeyboardSubmit(e, this.handleLinkClick.bind(this))}
              >
                {link.label}
              </a>
            </div>
          );
        })}
      </Host>
    );
  }
}
