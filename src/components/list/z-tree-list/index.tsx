import {Component, Element, Event, EventEmitter, Host, Prop, Watch, h} from "@stencil/core";
import {TreeListItem} from "../../../beans";

@Component({
  tag: "z-tree-list",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZTreeList {
  @Element() host: HTMLZTreeListElement;

  /** Items to render, if they have the url property they will be rendered as clickable links */
  @Prop()
  items: TreeListItem[] | string;

  /** Emitted on item click, it return the id, name and url of the clicked item */
  @Event()
  treeItemClicked: EventEmitter<{id: string; name: string; url: string}>;

  private parsedItems: TreeListItem[] = [];

  private htmlTag: string;

  @Watch("items")
  watchItems(): void {
    this.parsedItems = typeof this.items === "string" ? JSON.parse(this.items) : this.items || [];
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
        clickable={!!item.url}
        hasTreeItems={true}
      >
        <this.htmlTag
          class={{
            "list-element": true,
            "z-link": !!item.url,
            "link-clickable": !!item.url,
          }}
          tabIndex={0}
          onClick={() => this.handleClick(item)}
          href={item.url ? item.url : undefined}
        >
          <span class="item ellipsis">
            {item?.icon && (
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
