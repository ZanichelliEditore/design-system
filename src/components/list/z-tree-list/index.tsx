import {Component, Element, Event, EventEmitter, Host, Prop, Watch, h} from "@stencil/core";
import {KeyboardCode, TreeListItem} from "../../../beans";

@Component({
  tag: "z-tree-list",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZTreeList {
  @Element() host: HTMLZTreeListElement;

  /** Items to render, if they have the url property they will be rendered as clickable links */
  @Prop()
  items: TreeListItem[] | string = [];

  /** Used for aria-labelledby attribute, sets name in "navigation" */
  @Prop({reflect: true})
  htmlAriaLabelledby: string;

  /** Used for aria-label attribute, sets name in "tree" */
  @Prop({reflect: true})
  htmlSectionTitle: string;

  /** Emitted on item click, it return the id, name and url of the clicked item */
  @Event()
  treeItemClicked: EventEmitter<{id: string; name: string; url: string}>;

  private parsedItems: TreeListItem[] = [];

  private htmlTag: string;

  @Watch("items")
  watchItems(): void {
    this.parsedItems = typeof this.items === "string" ? JSON.parse(this.items) : this.items;
  }

  componentWillLoad(): void {
    this.watchItems();
  }

  private handleClick(item: TreeListItem): void {
    this.treeItemClicked.emit({id: item.id, name: item.name, url: item.url});
  }

  private getFocusableElements(): HTMLElement[] {
    return Array.from(this.host.shadowRoot.querySelectorAll('a[tabindex="0"]'));
  }

  private getAncestor(element: HTMLElement, levels: number): HTMLElement | null {
    let ancestor: HTMLElement | null = element;

    for (let i = 0; i < levels; i++) {
      ancestor = ancestor?.parentElement;
      if (!ancestor) {
        return;
      }
    }

    return ancestor;
  }

  private handleArrowNav(event: KeyboardEvent): void {
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(event.target as HTMLElement);

    if (currentIndex === -1) {
      return;
    }

    if (event.code === KeyboardCode.ARROW_DOWN || event.code === KeyboardCode.ARROW_UP) {
      event.preventDefault();

      const nextIndex = currentIndex + (event.code === KeyboardCode.ARROW_DOWN ? 1 : -1);
      if (nextIndex < 0 || nextIndex >= focusableElements.length) {
        return;
      }

      focusableElements[nextIndex].focus();
    }

    if (event.code === KeyboardCode.ARROW_LEFT) {
      event.preventDefault();
      const ancestor = this.getAncestor(focusableElements[currentIndex], 4);

      if (
        !ancestor.children[0] ||
        (ancestor.children[0].tagName.toLowerCase() !== "a" && ancestor.getAttribute("tabindex") === null)
      ) {
        return;
      }

      (ancestor.children[0] as HTMLElement).focus();
    }

    if (event.code === KeyboardCode.ARROW_RIGHT) {
      event.preventDefault();

      const parentElm = (event.target as HTMLElement).closest("z-list-element") as HTMLElement;
      const childrenContainer = parentElm.querySelector("z-list") as HTMLElement;
      const firstChild = childrenContainer.querySelector('a[tabindex="0"]') as HTMLElement;

      if (!firstChild) {
        return;
      }

      firstChild.focus();
    }
  }

  private renderTreeList(item: TreeListItem, level = 1): HTMLZListElementElement {
    this.htmlTag = item.url ? "a" : "span";

    const treeListContent = (
      <z-list-element
        class={!item.icon ? "no-icon-elm" : ""}
        clickable={Boolean(item.url)}
        hasTreeItems={true}
        role="none"
        aria-hidden={undefined}
      >
        <this.htmlTag
          class={{
            "list-element": true,
            "z-link": Boolean(item.url),
            "link-clickable": Boolean(item.url),
          }}
          tabIndex={item.url ? 0 : -1}
          onClick={() => this.handleClick(item)}
          onKeyUp={(event: KeyboardEvent) => {
            if (event.code === KeyboardCode.ENTER || event.code === KeyboardCode.SPACE) {
              this.handleClick(item);
            }
          }}
          onKeyDown={(event: KeyboardEvent) => this.handleArrowNav(event)}
          role={item.url ? "treeitem" : undefined}
          aria-hidden={item.url ? undefined : "true"}
          aria-expanded={item.children?.length > 0 && true}
          aria-level={level}
          aria-label={item.name}
          href={item.url}
        >
          <span class="item ellipsis">
            {item.icon && (
              <z-icon
                width={16}
                height={16}
                fill={item.url ? "color-primary01" : "color-default-icon"}
                class="item-icon"
                name={item.icon}
              />
            )}
            <span
              class={{
                "item-label": true,
                "no-icon-label": !item.icon,
                "bold-item": item.bold,
              }}
              title={item.name}
            >
              {item.name}
            </span>
          </span>
        </this.htmlTag>
        {item.children?.length > 0 && (
          <z-list role="group">
            <div
              class="children-node"
              role={item.url && "treeitem"}
              aria-hidden={item.url ? undefined : "true"}
            >
              {item.children.map((child) => this.renderTreeList(child, level + 1))}
            </div>
          </z-list>
        )}
      </z-list-element>
    );

    // Se l'elemento ha figli, contenitore con ruolo "navigation"
    if (item.children?.length > 0) {
      return (
        <div
          role="navigation"
          aria-label={item.name}
          class="tree-section"
        >
          {treeListContent}
        </div>
      );
    }

    return treeListContent;
  }

  render(): HTMLZTreeListElement {
    const hasClickableItems = this.parsedItems.some((item) => !!item.url);

    return (
      <Host
        class="tree-list"
        role={hasClickableItems ? "navigation" : "none"}
        aria-hidden={hasClickableItems ? undefined : "true"}
        aria-labelledby={this.htmlAriaLabelledby}
      >
        <div
          tabIndex={-1}
          role={hasClickableItems ? "tree" : "none"}
          aria-hidden={hasClickableItems ? undefined : "true"}
          aria-label={this.htmlSectionTitle}
        >
          {this.parsedItems.map((item) => this.renderTreeList(item))}
        </div>
      </Host>
    );
  }
}
