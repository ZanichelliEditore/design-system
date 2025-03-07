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

  private renderTreeList(item: TreeListItem): HTMLZListElementElement {
    this.htmlTag = item.url ? "a" : "span";

    return (
      <z-list-element
        class={!item.icon ? "no-icon-elm" : ""}
        clickable={Boolean(item.url)}
        hasTreeItems={true}
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
            if (event.key === KeyboardCode.ENTER || event.code === KeyboardCode.SPACE) {
              this.handleClick(item);
            }
          }}
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
        {item.children && item.children.length > 0 ? (
          <z-list>
            <div class="children-node">{item.children.map((child) => this.renderTreeList(child))}</div>
          </z-list>
        ) : null}
      </z-list-element>
    );
  }

  render(): HTMLZTreeListElement {
    return <Host class="tree-list">{this.parsedItems.map((item) => this.renderTreeList(item))}</Host>;
  }
}
